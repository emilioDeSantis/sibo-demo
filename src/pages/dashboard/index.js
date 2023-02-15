import Image from "next/image";
import { useState } from "react";
import {
    addImage,
    deleteImageFromFirestore,
    getImages,
    getTour,
    toggleImageFeaturedStatus,
    updateTour,
} from "../../firebase/database";
import {
    deleteFileFromFirebaseStorage,
    updateTourBackground,
    uploadFileToFirebase,
} from "../../firebase/storage";

export const getServerSideProps = async (context) => {
    try {
        const images = await getImages();
        let tour = await getTour();
        tour.artists = tour.artists.join(", ");

        return {
            props: {
                imagesArray: JSON.parse(JSON.stringify(images)),
                tour: JSON.parse(JSON.stringify(tour)),
            },
        };
    } catch (error) {
        console.log(error);

        return {
            props: {},
            notFound: false,
        };
    }
};

export default function Dashboard({ imagesArray, tour }) {
    const [images, setImages] = useState(imagesArray);
    console.log(tour);
    async function handleAddImages(e) {
        const files = e.target.files;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileName = file.name + file.lastModified;
            const url = await uploadFileToFirebase(file, fileName);
            await addImage(url, fileName);
        }
    }

    // async function handleDeleteImage(image) {
    //     await deleteFileFromFirebaseStorage(`images/${image.fileName}`);
    //     await deleteImageFromFirestore(image.id);
    // }

    async function handleDeleteImage(image) {
        const fileName = `images/${image.fileName}`;

        try {
            await deleteFileFromFirebaseStorage(fileName);
            await deleteImageFromFirestore(image.id);
            const updatedImages = images.filter((img) => img.id !== image.id);
            setImages(updatedImages);
        } catch (error) {
            console.error("Error deleting image:", error);
        }
    }


    async function handleToggle(imageId) {
        try {
            await toggleImageFeaturedStatus(imageId);
            let updatedImages = images.map(image => {
                if (image.id === imageId) {
                    return {
                        ...image,
                        isFeatured: !image.isFeatured
                    };
                }
                return image;
            });
            setImages(updatedImages);
        } catch (error) {
            console.error("Error toggling image:", error);
        }
    }
    

    return (
        <div
            className="vstack"
            style={{
                color: "white",
            }}
        >
            <MyForm tour={tour} />

            <label htmlFor="title" style={{ marginBottom: "2vw",
                    marginTop: "24vw",
                    padding: "2vw", }}>
                GALLERY:
            </label>
            <label
                style={{
                    padding: "2vw",
                }}
            >
                Add image to gallery:
            </label>
            <input
                type="file"
                multiple
                style={{
                    padding: "4vw",
                }}
                onChange={handleAddImages}
            />

            {images
                .sort((a, b) => {
                    return b.uploadDate.seconds - a.uploadDate.seconds;
                })
                .map((image, index) => {
                    return (
                        <div className="hstack" style={{}} key={image.id}>
                            <div
                                style={{
                                    width: "50vw",
                                    height: "50vw",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                <Image
                                    src={image.src}
                                    alt="test"
                                    fill
                                    sizes="100vw"
                                    priority
                                    style={{
                                        objectFit: "cover",
                                    }}
                                />
                            </div>

                            <div
                                className="vstack"
                                style={{
                                    gap: "5vw",
                                    padding: "5vw",
                                }}
                            >
                                <div
                                    style={{
                                        background: image.isFeatured
                                            ? "orange"
                                            : "black",
                                        border: "2px solid white",
                                        padding: "2vw",
                                        paddingBlock: "4vw",
                                        width: "36vw",
                                    }}
                                    onClick={() => {handleToggle(image.id)}}
                                >
                                    {image.isFeatured
                                        ? "remove from Featured Work"
                                        : "add to Featured Work"}
                                </div>
                                {/* 
                                <button
                                    style={{
                                        background: "red",
                                        border: "2px solid white",
                                        padding: "2vw",
                                        paddingBlock: "4vw",
                                    }}
                                    onClick={() => {
                                        handleDeleteImage(image);
                                    }}
                                >
                                    Delete
                                </button> */}
                                <DeleteButton
                                    handleDeleteImage={handleDeleteImage}
                                    image={image}
                                />
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

function DeleteButton({ image, handleDeleteImage }) {
    const [confirmDelete, setConfirmDelete] = useState(false);

    const handleClick = () => {
        if (confirmDelete) {
            handleDeleteImage(image);
        } else {
            setConfirmDelete(true);
        }
    };

    const handleCancel = () => {
        setConfirmDelete(false);
    };

    return (
        <div>
            {confirmDelete ? (
                <div>
                    <p>Are you sure you want to delete this image?</p>
                    <div
                        style={{
                            background: "red",
                            border: "2px solid white",
                            padding: "2vw",
                            paddingBlock: "4vw",
                        }}
                        onClick={handleClick}
                    >
                        Yes DELETE
                    </div>
                    <div
                        style={{
                            background: "blue",
                            border: "2px solid white",
                            padding: "2vw",
                            paddingBlock: "4vw",
                        }}
                        onClick={handleCancel}
                    >
                        no Cancel
                    </div>
                </div>
            ) : (
                <div
                    style={{
                        background: "red",
                        border: "2px solid white",
                        padding: "2vw",
                        paddingBlock: "4vw",
                    }}
                    onClick={handleClick}
                >
                    Delete
                </div>
            )}
        </div>
    );
}

// function MyForm({ tour }) {
//     const [title, setTitle] = useState(tour.title);
//     const [description, setDescription] = useState(tour.description);
//     const [startDate, setStartDate] = useState(tour.startDate);
//     const [endDate, setEndDate] = useState(tour.endDate);
//     const [artists, setArtists] = useState(tour.artists);
//     const [file, setFile] = useState(null);

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         if (name === "title") {
//             setTitle(value);
//         } else if (name === "description") {
//             setDescription(value);
//         } else if (name === "startDate") {
//             setStartDate(value);
//         } else if (name === "endDate") {
//             setEndDate(value);
//         }
//     };

//     const handleArtistsChange = (event) => {
//         const { value } = event.target;
//         setArtists(value.split(","));
//     };

//     const handleFileChange = (event) => {
//         const { files } = event.target;
//         setFile(files[0]);
//     };

//     async function handleSubmit(event) {
//         event.preventDefault();
//         let newTour = {};

//         if (file) {
//             newTour.background = await updateTourBackground(file);
//         }

//         newTour.title = title;
//         newTour.description = description;
//         newTour.startDate = startDate;
//         newTour.endDate = endDate;
//         newTour.artists = artists.map(item => item.trim())

//         // console.log(newTour);
//         updateTour(newTour);

//         // submit the form data
//     }
//     return (
//         <form
//             onSubmit={handleSubmit}
//             style={{ marginTop: "24vw" }}
//             className="vstack"
//         >
//             <label htmlFor="title">Title:</label>
//             <input
//                 type="text"
//                 name="title"
//                 value={title}
//                 onChange={handleInputChange}
//             />

//             <label htmlFor="description">Description:</label>
//             <textarea
//                 name="description"
//                 value={description}
//                 onChange={handleInputChange}
//             />

//             <label htmlFor="startDate">Start Date:</label>
//             <input
//                 type="date"
//                 name="startDate"
//                 value={startDate}
//                 onChange={handleInputChange}
//             />

//             <label htmlFor="endDate">End Date:</label>
//             <input
//                 type="date"
//                 name="endDate"
//                 value={endDate}
//                 onChange={handleInputChange}
//             />

//             <label htmlFor="artists">Artists' instagram usernames (separated by commas):</label>
//             <input type="text" name="artists" value={artists} onChange={handleArtistsChange} />

//             <label htmlFor="file">Background Image:</label>
//             <input type="file" name="file" onChange={handleFileChange} />

//             <button type="submit">Submit</button>
//         </form>
//     );
// }

function MyForm({ tour }) {
    const [title, setTitle] = useState(tour.title);
    const [description, setDescription] = useState(tour.description);
    const [startDate, setStartDate] = useState(tour.startDate);
    const [endDate, setEndDate] = useState(tour.endDate);
    const [artists, setArtists] = useState(tour.artists);
    const [file, setFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "title") {
            setTitle(value);
        } else if (name === "description") {
            setDescription(value);
        } else if (name === "startDate") {
            setStartDate(value);
        } else if (name === "endDate") {
            setEndDate(value);
        } else if (name === "artists") {
            setArtists(value);
        }
    };

    const handleFileChange = (event) => {
        const { files } = event.target;
        setFile(files[0]);
    };

    async function handleSubmit(event) {
        event.preventDefault();
        setIsUploading(true);
        let newTour = {};

        if (file) {
            newTour.background = await updateTourBackground(file);
        }

        newTour.title = title;
        newTour.description = description;
        newTour.startDate = startDate;
        newTour.endDate = endDate;
        console.log(artists);
        newTour.artists = artists.split(",").map((item) => item.trim());

        await updateTour(newTour);

        setIsUploading(false);
        alert("updated successfully");
    }

    return (
        // <form
        //     onSubmit={handleSubmit}
        //     style={{ marginTop: "24vw" }}
        //     className="vstack"
        // >
        //     <label htmlFor="title">Title:</label>
        //     <input
        //         type="text"
        //         name="title"
        //         value={title}
        //         onChange={handleInputChange}
        //     />

        //     <label htmlFor="description">Description:</label>
        //     <textarea
        //         name="description"
        //         value={description}
        //         onChange={handleInputChange}
        //     />

        //     <label htmlFor="startDate">Start Date:</label>
        //     <input
        //         type="date"
        //         name="startDate"
        //         value={startDate}
        //         onChange={handleInputChange}
        //     />

        //     <label htmlFor="endDate">End Date:</label>
        //     <input
        //         type="date"
        //         name="endDate"
        //         value={endDate}
        //         onChange={handleInputChange}
        //     />

        //     <label htmlFor="artists">Artists' instagram usernames (separated by commas):</label>
        //     <input type="text" name="artists" value={artists} onChange={handleInputChange} />

        //     <label htmlFor="file">Background Image:</label>
        //     <input type="file" name="file" onChange={handleFileChange} />

        //     <button type="submit">
        //         {isUploading ? 'Updating...' : 'Submit'}
        //     </button>
        // </form>

        // <form
        //     onSubmit={handleSubmit}
        //     style={{
        //         marginTop: "24vw",
        //         padding: "1vw",
        //     }}
        //     className="vstack"
        // >
        //     <label htmlFor="title">Title:</label>
        //     <input
        //         type="text"
        //         name="title"
        //         value={title}
        //         onChange={handleInputChange}
        //         style={{ padding: "1vw" }}
        //     />

        //     <label htmlFor="description">Description:</label>
        //     <textarea
        //         name="description"
        //         value={description}
        //         onChange={handleInputChange}
        //         style={{ height: "30vw", padding: "1vw" }}
        //     />

        //     <label htmlFor="startDate">Start Date:</label>
        //     <input
        //         type="date"
        //         name="startDate"
        //         value={startDate}
        //         onChange={handleInputChange}
        //         style={{ padding: "1vw" }}
        //     />

        //     <label htmlFor="endDate">End Date:</label>
        //     <input
        //         type="date"
        //         name="endDate"
        //         value={endDate}
        //         onChange={handleInputChange}
        //         style={{ padding: "1vw" }}
        //     />

        //     <label htmlFor="artists">
        //         Artists' instagram usernames (separated by commas):
        //     </label>
        //     <input
        //         type="text"
        //         name="artists"
        //         value={artists}
        //         onChange={handleInputChange}
        //         style={{ padding: "1vw" }}
        //     />

        //     <label htmlFor="file">Background Image:</label>
        //     <input
        //         type="file"
        //         name="file"
        //         onChange={handleFileChange}
        //         style={{ padding: "1vw" }}
        //     />

        //     <button
        //         type="submit"
        //         style={{
        //             padding: "1vw",
        //             backgroundColor: "#005eff",
        //             color: "#fff",
        //             border: "none",
        //             marginTop: "3vw",
        //         }}
        //     >
        //         {isUploading ? "Updating..." : "Submit"}
        //     </button>
        // </form>

        // <form
        //     onSubmit={handleSubmit}
        //     style={{
        //         marginTop: "24vw",
        //         padding: "1vw",
        //     }}
        //     className="vstack"
        // >
        //     <label htmlFor="title" style={{ marginBottom: "2vw" }}>
        //         Title:
        //     </label>
        //     <input
        //         type="text"
        //         name="title"
        //         value={title}
        //         onChange={handleInputChange}
        //         style={{ padding: "1vw", marginBottom: "2vw" }}
        //     />

        //     <label htmlFor="description" style={{ marginBottom: "2vw" }}>
        //         Description:
        //     </label>
        //     <textarea
        //         name="description"
        //         value={description}
        //         onChange={handleInputChange}
        //         style={{ height: "50vw", padding: "1vw", marginBottom: "2vw" }}
        //     />

        //     <label htmlFor="startDate" style={{ marginBottom: "2vw" }}>
        //         Start Date:
        //     </label>
        //     <input
        //         type="date"
        //         name="startDate"
        //         value={startDate}
        //         onChange={handleInputChange}
        //         style={{ padding: "1vw", marginBottom: "2vw" }}
        //     />

        //     <label htmlFor="endDate" style={{ marginBottom: "2vw" }}>
        //         End Date:
        //     </label>
        //     <input
        //         type="date"
        //         name="endDate"
        //         value={endDate}
        //         onChange={handleInputChange}
        //         style={{ padding: "1vw", marginBottom: "2vw" }}
        //     />

        //     <label htmlFor="artists" style={{ marginBottom: "2vw" }}>
        //         Artists' instagram usernames (separated by commas):
        //     </label>
        //     <input
        //         type="text"
        //         name="artists"
        //         value={artists}
        //         onChange={handleInputChange}
        //         style={{ padding: "1vw", marginBottom: "2vw" }}
        //     />

        //     <label htmlFor="file" style={{ marginBottom: "2vw" }}>
        //         Background Image:
        //     </label>
        //     <input
        //         type="file"
        //         name="file"
        //         onChange={handleFileChange}
        //         style={{ padding: "1vw", marginBottom: "2vw" }}
        //     />

        //     <button
        //         type="submit"
        //         style={{
        //             padding: "1vw",
        //             backgroundColor: "#005eff",
        //             color: "#fff",
        //             border: "none",
        //             marginTop: "3vw",
        //         }}
        //     >
        //         {isUploading ? "Updating..." : "Submit"}
        //     </button>
        // </form>

        <form
            onSubmit={handleSubmit}
            style={{
                marginTop: "24vw",
                padding: "2vw",
                fontSize: "5vw",
            }}
            className="vstack"
        >
            <label htmlFor="title" style={{ marginBottom: "2vw" }}>
                TOUR:
            </label>
            <label htmlFor="title" style={{ marginBottom: "2vw" }}>
                Title:
            </label>
            <input
                type="text"
                name="title"
                value={title}
                onChange={handleInputChange}
                style={{ padding: "1vw", marginBottom: "8vw" }}
            />

            <label htmlFor="description" style={{ marginBottom: "2vw" }}>
                Description:
            </label>
            <textarea
                name="description"
                value={description}
                onChange={handleInputChange}
                style={{ height: "40vw", padding: "1vw", marginBottom: "8vw" }}
            />

            <label htmlFor="startDate" style={{ marginBottom: "2vw" }}>
                Start Date:
            </label>
            <input
                type="date"
                name="startDate"
                value={startDate}
                onChange={handleInputChange}
                style={{ padding: "1vw", marginBottom: "8vw" }}
            />

            <label htmlFor="endDate" style={{ marginBottom: "2vw" }}>
                End Date:
            </label>
            <input
                type="date"
                name="endDate"
                value={endDate}
                onChange={handleInputChange}
                style={{ padding: "1vw", marginBottom: "8vw" }}
            />

            <label htmlFor="artists" style={{ marginBottom: "2vw" }}>
                Artists' instagram usernames (separated by commas):
            </label>
            <input
                type="text"
                name="artists"
                value={artists}
                onChange={handleInputChange}
                style={{ padding: "1vw", marginBottom: "8vw" }}
            />

            <label htmlFor="file" style={{ marginBottom: "2vw" }}>
                Background Image:
            </label>
            <input
                type="file"
                name="file"
                onChange={handleFileChange}
                style={{ padding: "1vw", marginBottom: "8vw" }}
            />

            <button
                type="submit"
                style={{
                    padding: "6vw",
                    backgroundColor: isUploading ? "orange" : "#005eff",
                    color: "#fff",
                    border: "none",
                    marginTop: "3vw",
                    marginBottom: "8vw",
                    fontSize: "5vw",
                }}
            >
                {isUploading ? "Updating..." : "Submit"}
            </button>
        </form>
    );
}
