import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Arrow from "../../components/Arrow";
import ArrowButton from "../../components/ArrowButton";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";

export default function About() {
    return (
        <Fragment>
            <div className="show-in-mobile">
                <div className="vstack" style={{}}>
                    <Header
                        title={"ABOUT"}
                        href={"/larnelle1.png"}
                        textOffset={9}
                        imageHeight="124.5vw"
                    />

                    <div
                        className="hstack"
                        style={{
                            width: "100vw",
                            justifyContent: "center",
                            paddingTop: "16vw",
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

                    <Subtitle text={"BIOGRAPHY"} href={"/bg7.png"} />

                    <p className="paragrapgh" style={{}}>
                        Larnelle is a talented and experienced tattoo artist who
                        has built a reputation for creating stunning and
                        intricate tattoos. Larnelle is known for his attention
                        to detail and ability to bring his clients ideas to life
                        with beautiful and meaningful tattoos. He is passionate
                        about the art form and is constantly striving to improve
                        and evolve as an artist. Whether you are looking for a
                        bold and colorful piece or a more minimalist design,
                        Larnelle has the skills and creativity to turn your
                        vision into a work of art.
                    </p>

                    <div
                        style={{
                            marginTop: "24vw",
                            width: "100vw",
                            height: "120vw",
                            position: "relative",
                            overflow: "hidden",
                            zIndex: "2",
                        }}
                    >
                        <Image
                            src="/larnelle2.png"
                            alt="test"
                            fill
                            sizes="100vw"
                            priority
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    <Subtitle text={"PROCESS"} href={"/bg8.png"} />

                    <p className="paragrapgh" style={{}}>
                        Larnelle approaches each tattoo design with a creative
                        and collaborative spirit. He works closely with his
                        clients to understand their vision and incorporates
                        their ideas into a unique and personalized design.
                    </p>

                    <div
                        style={{
                            marginTop: "24vw",
                            width: "100vw",
                            height: '120vw',
                            position: "relative",
                            overflow: "hidden",
                            zIndex: "2",
                        }}
                    >
                        <Image
                            src="/larnelle3.png"
                            alt="test"
                            fill
                            sizes="100vw"
                            priority
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    <Subtitle text={"THE MUZEOM"} href={"/bg9.png"} />

                    <p className="paragrapgh" style={{}}>
                        Larnelle is the proud owner of The Muzeom, a premier
                        tattoo shop that has become a staple in the local
                        community. The Muzeom is a place where art and
                        self-expression come together, providing a comfortable
                        and professional environment for clients to get their
                        tattoos. Larnelle runs the shop with a team of talented
                        artists who are all dedicated to delivering the highest
                        quality tattoos and customer service. The Muzeom is
                        equipped with state-of-the-art equipment and features a
                        spacious and inviting atmosphere that is perfect for
                        both first-time clients and seasoned tattoo enthusiasts.
                        If you are looking for a place to get a tattoo that is
                        both professional and welcoming, The Muzeom is the
                        perfect destination.
                    </p>

                    <div
                        style={{
                            marginTop: "24vw",
                            width: "100vw",
                            height: '120vw',
                            position: "relative",
                            overflow: "hidden",
                            zIndex: "2",
                        }}
                    >
                        <Image
                            src="/larnelle4.png"
                            alt="test"
                            fill
                            sizes="100vw"
                            priority
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>
                    <Footer page="about" />
                </div>
            </div>
            <div className="show-in-desktop">
                <div className="vstack">
                    <div
                        className="vstack"
                        style={{
                            marginTop: "7.5vw",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "flex-end",
                                marginTop: "0vw",
                            }}
                        >
                            <div
                                className="vstack"
                                style={{
                                    position: "absolute",
                                    width: "118vw",
                                    color: "#2C2A2E",
                                    fontSize: "10vw",
                                    fontWeight: "700",
                                    lineHeight: "79%",
                                    zIndex: "1",
                                    textAlign: "center",
                                    overflow: "hidden",
                                }}
                            >
                                <div
                                    style={{
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        transform: "rotate(180deg)",
                                        marginTop: "-0.05em",
                                    }}
                                >
                                    ABOUT ABOUT ABOUT ABOUT ABOUT
                                </div>
                                <div
                                    style={{
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        transform: `translate(5vw,0)`,
                                    }}
                                >
                                    OUT
                                    <b
                                        style={{
                                            color: "#fff",
                                        }}
                                    >
                                        {" ABOUT "}
                                    </b>
                                    ABOUT ABOUT ABOUT ABOUT ABOUT
                                </div>
                                <div
                                    style={{
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        transform: "rotate(180deg)",
                                        marginBottom: "-0.05em",
                                    }}
                                >
                                    ABOUT ABOUT ABOUT ABOUT ABOUT
                                </div>
                                <div
                                    style={{
                                        width: "200vw",
                                        height: "0.5px",
                                        background: "white",
                                        zIndex: "2",
                                    }}
                                />
                            </div>

                            <div
                                className="vstack"
                                style={{
                                    width: "100vw",
                                    alignItems: "flex-end",
                                }}
                            >
                                <div
                                    style={{
                                        width: "200vw",
                                        height: "0.5px",
                                        background: "white",
                                        zIndex: "1",
                                    }}
                                />
                                <div
                                    className="hstack"
                                    style={{
                                        width: "38vw",
                                        height: "22.7vw",
                                        justifyContent: "space-between",
                                        alignItems: "flex-start",
                                        background: "black",
                                        zIndex: "2",
                                        marginBottom: "0.5px",
                                        marginRight: "10vw",
                                        position: "relative",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "0.5px",
                                            height: "100%",
                                            background: "white",
                                            zIndex: "1",
                                        }}
                                    />
                                    <div
                                        style={{
                                            height: "48vw",
                                            width: "calc(38vw - 1px)",
                                            marginInline: "0.5px",
                                            position: "absolute",
                                            zIndex: "2",
                                        }}
                                    >
                                        <div
                                            style={{
                                                height: "100%",
                                                width: "100%",
                                                position: "relative",
                                                overflow: "hidden",
                                                zIndex: "2",
                                            }}
                                        >
                                            <Image
                                                src={"/larnelle1.png"}
                                                alt="test"
                                                fill
                                                sizes="40vw"
                                                priority
                                                style={{
                                                    objectFit: "cover",
                                                    background: "black",
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            width: "0.5px",
                                            height: "100%",
                                            background: "white",
                                            zIndex: "1",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="hstack"
                        style={{
                            paddingInline: "10vw",
                            width: "100vw",
                            position: "relative",
                            // justifyContent: "flex-end",
                            alignItems: "flex-start",
                            zIndex: "0",
                        }}
                    >
                        <div
                            className="vstack"
                            style={{
                                flexGrow: "1",
                                height: "10px",
                            }}
                        >
                            <div
                                style={{
                                    width: "30vw",
                                    fontSize: "2vw",
                                    fontWeight: "200",
                                    lineHeight: "180%",
                                    zIndex: "3",
                                    marginLeft: "3vw",
                                    marginTop: "6vw",
                                }}
                            >
                                {
                                    '“A tattoo is a true poetic creation, and is always more than meets the eye."'
                                }
                            </div>

                            <div
                                className="vstack"
                                style={{
                                    width: "100%",
                                    marginTop: "21vw",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "6vw",
                                        fontWeight: "200",
                                        lineHeight: "96%",
                                    }}
                                >
                                    BIOGRAPGHY
                                </div>

                                <div
                                    style={{
                                        width: "100%",
                                        height: "0.5px",
                                        background: "white",
                                    }}
                                ></div>

                                <div
                                    style={{
                                        marginTop: "3vw",
                                        width: "35vw",
                                        height: "32vw",
                                        position: "relative",
                                        overflow: "hidden",
                                        zIndex: "2",
                                    }}
                                >
                                    <Image
                                        src="/larnelle2.png"
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
                                    style={{
                                        fontSize: "6vw",
                                        fontWeight: "200",
                                        lineHeight: "96%",
                                        marginTop: '16.5vw',
                                    }}
                                >
                                    PROCESS
                                </div>

                                <div
                                    style={{
                                        width: "100%",
                                        height: "0.5px",
                                        background: "white",
                                    }}
                                ></div>

                                <div
                                    style={{
                                        marginTop: "3vw",
                                        width: "35vw",
                                        height: "26vw",
                                        position: "relative",
                                        overflow: "hidden",
                                        zIndex: "2",
                                    }}
                                >
                                    <Image
                                        src="/larnelle3.png"
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
                                    style={{
                                        fontSize: "6vw",
                                        fontWeight: "200",
                                        lineHeight: "96%",
                                        marginTop: '16.5vw',
                                    }}
                                >
                                    THE MUZEOM
                                </div>

                                <div
                                    style={{
                                        width: "100%",
                                        height: "0.5px",
                                        background: "white",
                                    }}
                                ></div>

                                <div
                                    style={{
                                        marginTop: "3vw",
                                        width: "35vw",
                                        height: "35vw",
                                        position: "relative",
                                        overflow: "hidden",
                                        zIndex: "2",
                                    }}
                                >
                                    <Image
                                        src="/larnelle4.png"
                                        alt="test"
                                        fill
                                        sizes="100vw"
                                        priority
                                        style={{
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="hstack"
                            style={{
                                width: "38vw",
                                background: "white",
                                paddingInline: "0.5px",
                            }}
                        >
                            <div
                                className="vstack"
                                style={{
                                    background: "black",
                                    width: "100%",
                                }}
                            >
                                <div
                                    style={{
                                        height: "40vw",
                                    }}
                                />
                                <p className="paragrapgh" style={{}}>
                                    Larnelle is a talented and experienced
                                    tattoo artist who has built a reputation for
                                    creating stunning and intricate tattoos.
                                    Larnelle is known for his attention to
                                    detail and ability to bring his clients
                                    ideas to life with beautiful and meaningful
                                    tattoos. He is passionate about the art form
                                    and is constantly striving to improve and
                                    evolve as an artist. Whether you are looking
                                    for a bold and colorful piece or a more
                                    minimalist design, Larnelle has the skills
                                    and creativity to turn your vision into a
                                    work of art.
                                </p>

                                <div
                                    style={{
                                        height: "26vw",
                                    }}
                                />
                                <p className="paragrapgh" style={{}}>
                                    Larnelle approaches each tattoo design with
                                    a creative and collaborative spirit. He
                                    works closely with his clients to understand
                                    their vision and incorporates their ideas
                                    into a unique and personalized design.
                                </p>
                                <div
                                    style={{
                                        height: "34.5vw",
                                    }}
                                />
                                <p className="paragrapgh" style={{}}>
                                    Larnelle is the proud owner of The Muzeom, a
                                    premier tattoo shop that has become a staple
                                    in the local community. The Muzeom is a
                                    place where art and self-expression come
                                    together, providing a comfortable and
                                    professional environment for clients to get
                                    their tattoos. Larnelle runs the shop with a
                                    team of talented artists who are all
                                    dedicated to delivering the highest quality
                                    tattoos and customer service. The Muzeom is
                                    equipped with state-of-the-art equipment and
                                    features a spacious and inviting atmosphere
                                    that is perfect for both first-time clients
                                    and seasoned tattoo enthusiasts. If you are
                                    looking for a place to get a tattoo that is
                                    both professional and welcoming, The Muzeom
                                    is the perfect destination.
                                </p>

                                <div
                                    style={{
                                        height: "6vw",
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            height: "0.5px",
                            width: "100vw",
                            background: "white",
                            zIndex: 3,
                        }}
                    ></div>
                    <Footer page={"about"} />
                </div>
            </div>
        </Fragment>
    );
}
