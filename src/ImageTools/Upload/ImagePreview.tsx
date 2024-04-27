import React, { useState } from 'react';
import ImageUpload from './ImageUpload';

const ImagePreview: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (imageData: string) => {
    setUploadedImage(imageData);
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <ImageUpload onImageUpload={handleImageUpload} />
      {uploadedImage && (
        <div>
          <h2>Uploaded Image</h2>
          <img src={uploadedImage} alt="Uploaded" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      )}
    </div>
  );
};

export default ImagePreview;