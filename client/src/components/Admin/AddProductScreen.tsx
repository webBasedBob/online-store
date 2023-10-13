"use client";
import React, { useState } from "react";
import styles from "./AddProductScreen.module.scss";
import TextInput from "../UI/TextInput";
import { addProductConfig } from "@/config/addProduct";
import AddPictures from "./AddPictures";
import axios from "axios"; // Import Axios or your preferred HTTP client library

const AddProductScreen = () => {
  const [productInfo, setProductInfo] = useState({});
  const [productSpecifications, setProductSpecifications] = useState([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const generalTextFileds = addProductConfig.productInfo.map((field) => (
    <TextInput
      label={field.label}
      onChange={(newVal) => {
        setProductInfo((prev) => {
          return { ...prev, [field.value]: newVal };
        });
      }}
    />
  ));
  const specificantionsTextInfo = addProductConfig.productSpecifications.map(
    (field) => (
      <TextInput
        label={field.label}
        onChange={(newVal) => {
          setProductSpecifications((prev) => {
            return { ...prev, [field.value]: newVal };
          });
        }}
      />
    )
  );
  const uploadProduct = async () => {
    const formData = new FormData();
    let imageNumber = 1;
    for (let img of imagePreviews) {
      const file = await fetchBlobFromUrl(img);
      formData.append(`image-${imageNumber}`, file, `image-${imageNumber}.png`);
      imageNumber++;
    }
    for (let key in productInfo) {
      if (productInfo.hasOwnProperty(key) && productInfo[key] !== "") {
        formData.append(`info-${key}`, productInfo[key]);
      }
    }
    for (let key2 in productSpecifications) {
      formData.append(`spec-${key2}`, productSpecifications[key2]);
    }
    try {
      // Make a POST request to the server to upload the images
      const response = await fetch(
        `http://localhost:8000/products/add-product`,
        {
          method: "POST",
          credentials: "include",
          body: formData,
        }
      );

      // Handle the server response here
      console.log("Upload response:", response);
    } catch (error) {
      // Handle any errors that occur during the upload
      console.error("Error uploading images:", error);
    }
  };
  const fetchBlobFromUrl = async (blobUrl) => {
    try {
      const response = await fetch(blobUrl);
      const blob = await response.blob();
      return blob;
    } catch (error) {
      console.error("Error fetching Blob:", error);
      return null; // Return null or handle the error as appropriate
    }
  };

  const dataURItoBlob = (dataURI: string) => {
    try {
      const byteString = atob(dataURI.split(",")[1]);
      const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);

      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }

      return new Blob([ab], { type: mimeString });
    } catch (error) {
      console.error("Error converting data URI to Blob:", error);
      return null; // Return null or handle the error as appropriate
    }
  };

  return (
    <div className={styles.wrapper}>
      <AddPictures
        imagePreviews={imagePreviews}
        setImagePreviews={setImagePreviews}
      />
      <h2>General info</h2>
      <div className={styles.sectionContainer}>{generalTextFileds}</div>
      <h2>Spec</h2>
      <div className={styles.sectionContainer}>{specificantionsTextInfo}</div>
      <button onClick={uploadProduct}>Submit</button>
    </div>
  );
};

export default AddProductScreen;
