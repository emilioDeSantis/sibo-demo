import Image from "next/image";
import ArrowButton from "../../components/ArrowButton";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Gallery() {
    const featured = [
        "/pic1.png",
        "/pic2.png",
        "/pic3.png",
        "/pic4.png",
        "/pic5.png",
        "/pic6.png",
        "/pic1.png",
        "/pic2.png",
        "/pic3.png",
        "/pic4.png",
        "/pic5.png",
        "/pic6.png",
        "/pic1.png",
        "/pic2.png",
        "/pic3.png",
        "/pic4.png",
        "/pic5.png",
        "/pic6.png",
    ];
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
                {featured.map((href, index) => {
                    return (
                        <div
                            key={href}
                            style={{
                                width: "auto",
                                height: "47vw",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            <Image
                                src={href}
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
