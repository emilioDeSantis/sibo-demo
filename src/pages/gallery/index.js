import Image from "next/image";
import ArrowButton from "../../components/ArrowButton";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getImages } from "../../firebase/database";

export const getServerSideProps = async (context) => {
    try {
        const images = await getImages()
        return {props:{
            images: JSON.parse(JSON.stringify(images))
        
        }}
    } 
    catch (error) {
        console.log(error);

        return {
            props: {},
            notFound: false,
        }
    }
}


export default function Gallery({images}) {
console.log(images);
    return (
        <div className="vstack">

<Header title={'GALLERY'} href={"/woman-face 2.png"} textOffset={-20} imageHeight="82.35vw"/>


            <div
                className="hstack"
                style={{
                    width: "100vw",
                    justifyContent: "center",
                    paddingTop: "24vw",
                    // paddingBottom: "12vw",
                }}
            >
                {/* <ArrowButton name="BOOK" href="/book" thin={true} /> */}
            </div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto",
                    paddingInline: "2vw",
                    rowGap: "2vw",
                    columnGap: "2vw",
                }}
            >
                {images.sort((a,b) => {
                    return b.uploadDate.seconds - a.uploadDate.seconds
                }).map((image, index) => {
                    return (
                        <div
                            key={image.id}
                            style={{
                                width: "auto",
                                height: "47vw",
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
                    );
                })}
            </div>
            <Footer page="gallery" />
        </div>
    );
}
