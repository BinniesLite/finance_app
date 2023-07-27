import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../config/firebaseConfig";
export const uploadImageToFirebase = async (imageFile) => {
  try {
    // Get a reference to Firebase Storage
    // const storage = getStorage();

    // Create a storage reference to the image file
    const imageRef = ref(storage, imageFile.name);

    // Upload the image file to Firebase Storage
    const snapshot = await uploadBytes(imageRef, imageFile);

    // Get the download URL of the uploaded image
    const downloadURL = await getDownloadURL(snapshot.ref);

    return downloadURL;
  } catch (error) {
    console.error("Error uploading image to Firebase:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};
