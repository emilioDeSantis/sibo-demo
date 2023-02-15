import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    updateDoc,
} from "firebase/firestore";
import { db } from "./firebase-init";

export async function addImage(url, name) {
    await addDoc(collection(db, "images"), {
        src: url,
        isFeatured: false,
        uploadDate: new Date(),
        fileName: name,
    });
    return;
}

export async function deleteImageFromFirestore(imageId) {
    const documentRef = doc(db, "images", imageId);
    try {
        await deleteDoc(documentRef);
        console.log("Document deleted successfully.");
    } catch (error) {
        console.error("Error deleting document:", error);
    }
}

export async function toggleImageFeaturedStatus(imageId) {
    const imageRef = doc(db, "images", imageId);

    try {
        const doc = await getDoc(imageRef);

        if (doc.exists) {
            const isFeatured = doc.data().isFeatured;
            await updateDoc(imageRef, { isFeatured: !isFeatured });
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error updating document: ", error);
    }
}

export async function getImages() {
    const snapshot = await getDocs(collection(db, "images"));
    let images = [];
    snapshot.forEach((imageDoc) => {
        images.push({
            ...imageDoc.data(),
            id: imageDoc.id,
        });
    });
    return images;
}
export async function getTour() {
    const snapshot = await getDoc(doc(db, "tour", 'tour'));
    return snapshot.data();
}

export async function updateTour(tour) {
    await updateDoc(doc(db, "tour", 'tour'), tour);
    return;
}
