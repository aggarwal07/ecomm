'use client'
import React, { useState } from 'react'
import { FileUploaderRegular } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';

const ImageUploader = () => {
    const [files, setFiles] = useState<any[]>([]);

  const handleChangeEvent = (items:any) => {
      setFiles([...items.allEntries.filter((file:any) => file.status === 'success')]);
    };
  return (
    <div className='flex flex-col'>
      <FileUploaderRegular onChange={handleChangeEvent}  pubkey="77ddbaf66a6ea52aa6ba" />
      <div>
        {files.map((file) => (
          <div key={file.uuid}>
            <img
              src={file.cdnUrl + '-/scale_crop/500x1000/smart/'}
              alt={file.fileInfo.originalFilename}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageUploader
