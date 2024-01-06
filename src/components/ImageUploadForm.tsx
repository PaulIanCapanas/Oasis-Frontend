import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../assets/bg.jpg';

const ImageUploadForm: React.FC = () => {
  const [image, setImage] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState(null);

  const userEmail = localStorage.getItem('userEmail');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setImage(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', image);

      const response = await axios.post('http://localhost:3000/upload-image/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        params: {
          userEmail: userEmail,
        },
      });

      setImageUrl(response.data.file.path);
    } catch (error) {
      console.error('Error uploading files:', error);
      setError('Error uploading files. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="max-w-md p-6 mx-auto bg-white border rounded shadow">
        <h1 className="mb-4 text-2xl font-semibold">Verification File Upload</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Choose File:</label>
          <input type="file" onChange={handleImageChange} accept="image/*" className="p-2 mt-1 border rounded" />
        </div>
        <button onClick={handleImageUpload} className="px-4 py-2 text-white bg-blue-500 rounded">
          Upload File
        </button>
        {imageUrl && (
          <div className="mt-4">
            <h2 className="mb-2 text-xl font-semibold">Uploaded Image</h2>
            <img src={imageUrl} alt="Uploaded" className="max-w-full" />
          </div>
        )}
        {error && <div className="mt-4 text-red-500">{error}</div>}
      </div>
    </div>
  );
};

export default ImageUploadForm;