import { ChangeEvent, useRef } from "react";
import styles from "./CustomFileInput.module.css";
import React from "react";

// @ts-expect-error any type
export default function CustomFileInput({ accept = "image/*", imageFiles, setImageFiles }) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUploadClick = () => {
    fileInputRef.current?.click();
  };

  const updateImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      // @ts-expect-error any type
      setImageFiles((prevFiles) => [...prevFiles, ...filesArray]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files) {
      const filesArray = Array.from(event.dataTransfer.files);
      // @ts-expect-error any type
      setImageFiles((prevFiles) => [...prevFiles, ...filesArray]);
    }
  };

  return (
    <div className="container">
      <div
        className={styles.dropZone}
        onDragOver={handleDragOver}
        onDrop={handleFileDrop}
        onClick={handleImageUploadClick}
      >
        {imageFiles.length > 0 ? (
          <div className="flex flex-col gap-y-1">
            {
              // @ts-expect-error any type
              imageFiles.map((file, index) => (
                <img
                  className="w-40"
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt={`Uploaded ${index + 1}`}
                />
              ))
            }
          </div>
        ) : (
          <span className="text-sm">Válaszd ki a fotókat vagy húzd ide őket</span>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          style={{ display: "none" }}
          onChange={updateImage}
          multiple
        />
      </div>
    </div>
  );
}
