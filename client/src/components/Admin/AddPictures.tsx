"use client";
import React, { useState } from "react";
import styles from "./AddPictures.module.scss";

const AddPictures: React.FC = ({ imagePreviews, setImagePreviews }) => {
  const [error, setError] = useState<string>("");
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(""); // Clear previous error messages
    const files = Array.from(e.target.files || []);

    const validImageTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/avif",
      "image/webp",
    ];

    const invalidFiles = files.filter(
      (file) => !validImageTypes.includes(file.type)
    );

    if (invalidFiles.length) {
      setError("Please select valid image files (JPEG, PNG, GIF).");
      return;
    }

    const newImagePreviews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews([...imagePreviews, ...newImagePreviews]);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setError(""); // Clear previous error messages

    const files = Array.from(e.dataTransfer.files || []);

    const validImageTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/avif",
      "image/webp",
    ];

    const invalidFiles = files.filter(
      (file) => !validImageTypes.includes(file.type)
    );

    if (invalidFiles.length) {
      setError("Please drop valid image files (JPEG, PNG, GIF).");
      return;
    }

    const newImagePreviews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews([...imagePreviews, ...newImagePreviews]);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const removeImage = (index: number) => {
    const updatedImagePreviews = [...imagePreviews];
    updatedImagePreviews.splice(index, 1);
    setImagePreviews(updatedImagePreviews);
  };

  return (
    <div
      className={styles.addPictures}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
      ></input>
      <div className={styles.imagePreviews}>
        {imagePreviews.map((preview, index) => (
          <div key={index} className={styles.imagePreview}>
            <img src={preview} alt={`Image ${index + 1}`} />
            <button onClick={() => removeImage(index)}>Remove</button>
          </div>
        ))}
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default AddPictures;
