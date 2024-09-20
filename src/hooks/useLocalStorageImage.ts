import { useState, useEffect } from "react";

// Helper function to convert a Base64 string to a Blob object
function base64ToBlob(base64String: string): Blob {
  const byteString = atob(base64String.split(",")[1]); // Decode Base64 string
  const mimeString = base64String.split(",")[0].split(":")[1].split(";")[0]; // Get MIME type

  const byteNumbers = new Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    byteNumbers[i] = byteString.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);

  return new Blob([byteArray], { type: mimeString });
}

// Hook to handle image saving and retrieval from LocalStorage
export function useLocalStorageImage(isModal: boolean = false) {
  const [blob, setBlob] = useState<Blob | null>(null); // Store the Blob

  const name = isModal ? "savedModalImage" : "savedImage";

  // Save image to localStorage as Base64
  const saveImage = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result as string;
      localStorage.setItem(name, base64Image);
      setBlob(base64ToBlob(base64Image));
    };
    reader.readAsDataURL(file); // Convert the file to a Base64 string
  };

  // Load image from localStorage
  const loadImage = () => {
    const savedImage = localStorage.getItem(name);
    if (savedImage) {
      // Optionally, convert the Base64 back to a Blob object
      const blobFromBase64 = base64ToBlob(savedImage);
      setBlob(blobFromBase64);
    } else {
      setBlob(null);
    }
  };

  // Clear image from localStorage
  const clearImage = () => {
    localStorage.removeItem(name);
    setBlob(null);
  };

  // Automatically load image on component mount
  useEffect(() => {
    loadImage();
  }, []);

  return { blob, saveImage, clearImage };
}
