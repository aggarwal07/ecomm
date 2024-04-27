import React, { ChangeEvent, useState } from "react";
import { RiImageAddLine } from "react-icons/ri";

interface ImageUploadProps {
  onImageUpload: (imageData: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadCompleted, setUploadCompleted] = useState<boolean>(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
      setUploadCompleted(false); // Reset upload completion status when a new file is selected
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          onImageUpload(reader.result);
          setUploadCompleted(true); // Set upload completion status to true
        }
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="w-full flex justify-between">
      <div className="relative flex flex-col items-center justify-center w-fit">
        <div className="absolute">
          <RiImageAddLine size={30} />
        </div>
        <input type="file" onChange={handleFileChange} className="inputFile" />
      </div>
      {/* Conditionally render the upload button */}
      {selectedFile && !uploadCompleted && (
        <button className="ml-2 h-[2.5em] px-2 font-semibold bg-blue-500" onClick={handleUpload}>Upload</button>
      )}
    </div>
  );
};

export default ImageUpload;
