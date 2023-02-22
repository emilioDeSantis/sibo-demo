import {
    ref,
    uploadBytesResumable,
    TaskEvent,
    TaskState,
    getDownloadURL,
    deleteObject,
} from "firebase/storage";
import { storage } from "./firebase-init";

export function uploadFileToFirebase(file, name) {

    return new Promise((resolve) => {
        const storageRef = ref(storage, `images/${name}`);
        const metadata = {
            cacheControl: 'max-age=3600'
          }
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                }
            },

            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case "storage/unauthorized": // User doesn't have permission to access the object
                        break;
                    case "storage/canceled": // User canceled the upload
                        break;
                    case "storage/unknown": // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            },

            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                });
            }
        );
    });
}


export function updateTourBackground(file) {

    return new Promise((resolve) => {
        const storageRef = ref(storage, 'tour');
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                }
            },

            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case "storage/unauthorized": // User doesn't have permission to access the object
                        break;
                    case "storage/canceled": // User canceled the upload
                        break;
                    case "storage/unknown": // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            },

            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                });
            }
        );
    });
}

export async function deleteFileFromFirebaseStorage(filePath) {
    const storageRef = ref(storage, filePath);
    try {
      await deleteObject(storageRef);
      console.log("File deleted successfully.");
    } catch (error) {
      console.error("Error deleting file:", error);
    }
}
