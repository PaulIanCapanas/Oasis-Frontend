import GeoServicesBase from "./GeoServicesBase";
import { GeolocationResult } from "./GeolocationResult";

export default class GeoServices extends GeoServicesBase {
  constructor() {
    super();
  }

  private async handlePermissions(): Promise<boolean> {
    const permission = await navigator.permissions.query({
      name: "geolocation",
    });
    if (permission.state === "prompt") {
      const promised = async (): Promise<boolean> => {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            () => resolve(true),
            () => resolve(false)
          );
        })
      }
      return await promised();
    }

    return permission.state === "granted";
  }

  getBackingInstance() {
    console.log('Call backing')
    return this._instance;
  }

  async geocode(): Promise<GeolocationResult> {
    const permission = await this.handlePermissions();
    if (!permission) {
      throw new Error("User denied geolocation");
    }

    return new Promise((resolve, reject) => {
      const successGeoCodeAction = (
        geolocationPosition: GeolocationPosition
      ) => {
        this._instance.load().then((google: any) => {
          const geoCodeRequest = {
            location: new google.maps.LatLng(
              geolocationPosition.coords.latitude,
              geolocationPosition.coords.longitude
            ),
          };

          const geocoder = new google.maps.Geocoder();
          geocoder
            .geocode(geoCodeRequest)
            .then((result: any) => {
              if (result.results[0]) {
                return resolve({
                  latitude: geolocationPosition.coords.latitude,
                  longitude: geolocationPosition.coords.longitude,
                });
              }

              return reject(new Error("Location not found. Try again later."));
            })
            .catch((error: Error) =>
              reject(new Error("Geocode error occurred: " + error))
            );
        });
      };

      const failGeoCodeAction = () => new Error("Geocode failed.");

      navigator.geolocation.getCurrentPosition(
        successGeoCodeAction,
        failGeoCodeAction,
        {
          enableHighAccuracy: true,
        }
      );
    });
  }
}
