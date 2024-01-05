import React, { useState } from 'react';
import axios from 'axios';

const ImageUploadForm: React.FC = () => {
  const [image, setImage] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files){
      return
    }
    setImage(e.target.files[0])
  };

  const handleImageUpload = async () => {
    try {
      
      

      const formData = new FormData();

      formData.append('image', image)

      console.log(image)

      const response = await axios.post('http://localhost:3000/upload-image/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('File uploaded successfully:', response.data);

      // Set the uploaded image URL for display
      setImageUrl(response.data.file.path);
      
    } catch (error) {
      console.error('Error uploading files:', error);
      setError('Error uploading files. Please try again.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <button onClick={handleImageUpload}>Upload Images</button>
      {imageUrl && (
        <div>
          <h2>Uploaded Image</h2>
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />
        </div>
      )}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <img src="../../../Oasis-Backend/uploaded-images/image-file_1704475497470.jpg" alt="" />
    </div>
  );
};

export default ImageUploadForm;
