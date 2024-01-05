import React, { useState } from 'react';
import axios from 'axios';

const ImageUploadForm: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedImages = Array.from(e.target.files);
      setImages((prevImages) => [...prevImages, ...selectedImages.slice(0, 3 - prevImages.length)]);
    }
  };

  const handleImageUpload = async () => {
    try {
      if (images.length === 0) {
        setError('No images selected');
        return;
      }

      const formData = new FormData();
      images.forEach((image, index) => {
        formData.append(`file${index + 1}`, image);
      });

      console.log(images)

      await axios.post('http://localhost:3000/upload-image/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Files uploaded successfully');
    } catch (error) {
      console.error('Error uploading files:', (error as Error).message);
      setError('Error uploading files. Please try again.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} multiple accept="image/*" />
      <button onClick={handleImageUpload}>Upload Images</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default ImageUploadForm;
