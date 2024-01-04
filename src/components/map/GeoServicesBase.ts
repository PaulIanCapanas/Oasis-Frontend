import { Loader } from '@googlemaps/js-api-loader';

export default abstract class GeoServicesBase {
  protected readonly _instance: Loader;

  protected constructor() {
    this._instance = new Loader({
      apiKey: 'AIzaSyBY_a_l2NhuXH1uyaou0yNBYVaUZzzE3X0',
      version: 'weekly',
      libraries: ['drawing', 'geometry', 'places']
    });
  }
}
