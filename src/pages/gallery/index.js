import Image from "next/image";
import ArrowButton from "../../components/ArrowButton";

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
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                }}
            >
                <div
                    className="vstack"
                    style={{
                        marginLeft: "-18vw",
                        // marginTop: 20 + scrollPosition / 40 + "vw",
                        marginTop: "20vw",
                        position: "absolute",
                        width: "118vw",
                        color: "#D197FF29",
                        fontSize: "10.5vw",
                        fontWeight: "700",
                        lineHeight: "70%",
                        zIndex: "1",
                        textAlign: "center",
                        gap: "0.6vw",
                    }}
                >
                    <div
                        style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                        }}
                    >
                        GALLERY GALLERY GALLERY GALLERY GALLERY GALLERY GALLERY
                        GALLERY
                    </div>
                    <div
                        style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            transform: "rotate(180deg)",
                        }}
                    >
                        GALLERY GALLERY GALLERY GALLERY GALLERY GALLERY GALLERY
                        GALLERY
                    </div>
                    <div
                        style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                        }}
                    >
                        LERY
                        <b
                            style={{
                                color: "#fff",
                            }}
                        >
                            {" "}
                            GALLERY{" "}
                        </b>
                        GALLERY GALLERY GALLERY GALLERY GALLERY GALLERY GALLERY
                        GALLERY
                    </div>
                    <div
                        style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            transform: "rotate(180deg)",
                        }}
                    >
                        LERY GALLERY GALLERY GALLERY GALLERY GALLERY GALLERY
                        GALLERY
                    </div>
                    <div
                        style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                        }}
                    >
                        Y GALLERY GALLERY GALLERY GALLERY GALLERY GALLERY
                        GALLERY
                    </div>
                </div>
                <div
                    style={{
                        marginTop: "15vw",
                        height: "43vw",
                        aspectRatio: "1",
                        position: "relative",
                        overflow: "hidden",
                        zIndex: "2",
                    }}
                >
                    <Image
                        src="/woman-face 1.png"
                        alt="test"
                        fill
                        sizes="40vw"
                        priority
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
            </div>

            <div
                className="hstack"
                style={{
                    width: "100vw",
                    justifyContent: "center",
                    paddingTop: "15vw",
                    paddingBottom: "12vw",
                }}
            >
                <ArrowButton name="BOOK" href="/book" thin={true} />
            </div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto",
                    paddingInline: "3vw",
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
                                aspectRatio: "1",
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
        </div>
    );
}
