import Image from "next/image";
import ArrowButton from "../../components/ArrowButton";
import Footer from "../../components/Footer";
import Subtitle from "../../components/Subtitle";

export default function About() {
    return (
        <div className="vstack" style={{}}>
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
                    ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
                    ABOUT
                </div>
                <div
                    style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        transform: "rotate(180deg)",
                    }}
                >
                    ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
                    ABOUT
                </div>
                <div
                    style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                    }}
                >
                    OUT
                    <b
                        style={{
                            color: "#fff",
                        }}
                    >
                        {" "}
                        ABOUT{" "}
                    </b>
                    ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
                    ABOUT
                </div>
                <div
                    style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        transform: "rotate(180deg)",
                    }}
                >
                    OUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
                    ABOUT
                </div>
                <div
                    style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                    }}
                >
                    T ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
                </div>
            </div>

            <div className="vstack">
                <div
                    style={{
                        width: "100vw",
                        aspectRatio: "734/1024",
                        position: "relative",
                        overflow: "hidden",
                        zIndex: "2",
                    }}
                >
                    <Image
                        src="/larnelle1.png"
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
                        width: "100vw",
                    }}
                >
                    <div
                        className="hstack"
                        style={{
                            width: "100vw",
                            justifyContent: "center",
                            paddingTop: "6vw",
                        }}
                    >
                        <div
                            style={{
                                width: "80vw",
                                fontSize: "5.2vw",
                                fontWeight: "200",
                                lineHeight: "180%",
                                zIndex: "3",
                            }}
                        >
                            {
                                '“A tattoo is a true poetic creation, and is always more than meets the eye."'
                            }
                        </div>
                    </div>
                </div>
            </div>

            <Subtitle text={"BIOGRAPHY"} href={"/church1.png"} />

            <p className="paragrapgh" style={{}}>
                Larnelle is a talented and experienced tattoo artist who has
                built a reputation for creating stunning and intricate tattoos.
                Larnelle is known for his attention to detail and ability to
                bring his clients ideas to life with beautiful and meaningful
                tattoos. He is passionate about the art form and is constantly
                striving to improve and evolve as an artist. Whether you are
                looking for a bold and colorful piece or a more minimalist
                design, Larnelle has the skills and creativity to turn your
                vision into a work of art.
            </p>

            <div
                style={{
                    marginTop: "8vw",
                    marginBottom: "8vw",
                    width: "100vw",
                    aspectRatio: "0.8",
                    position: "relative",
                    overflow: "hidden",
                    zIndex: '2',
                }}
            >
                <Image
                    src="/larnelle2.png"
                    alt="test"
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>

            <Subtitle text={"PROCESS"} href={"/church1.png"} />

            <p className="paragrapgh" style={{}}>
                Larnelle approaches each tattoo design with a creative and
                collaborative spirit. He works closely with his clients to
                understand their vision and incorporates their ideas into a
                unique and personalized design.
            </p>

            <div
                style={{
                    marginTop: "8vw",
                    marginBottom: "8vw",
                    width: "100vw",
                    aspectRatio: "0.8",
                    position: "relative",
                    overflow: "hidden",
                    zIndex: '2',
                }}
            >
                <Image
                    src="/larnelle3.png"
                    alt="test"
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>

            <Subtitle text={"THE MUZEOM"} href={"/church1.png"} />

            <p className="paragrapgh" style={{}}>
                Larnelle is the proud owner of The Muzeom, a premier tattoo shop
                that has become a staple in the local community. The Muzeom is a
                place where art and self-expression come together, providing a
                comfortable and professional environment for clients to get
                their tattoos. Larnelle runs the shop with a team of talented
                artists who are all dedicated to delivering the highest quality
                tattoos and customer service. The Muzeom is equipped with
                state-of-the-art equipment and features a spacious and inviting
                atmosphere that is perfect for both first-time clients and
                seasoned tattoo enthusiasts. If you are looking for a place to
                get a tattoo that is both professional and welcoming, The Muzeom
                is the perfect destination.
            </p>

            <div
                style={{
                    marginTop: "8vw",
                    marginBottom: "8vw",
                    width: "100vw",
                    aspectRatio: "1.4",
                    position: "relative",
                    overflow: "hidden",
                    zIndex: '2',
                }}
            >
                <Image
                    src="/larnelle4.png"
                    alt="test"
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>
                <Footer page="about"/>
        </div>
    );
}
