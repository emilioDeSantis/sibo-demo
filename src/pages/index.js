import { NextSeo } from "next-seo";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import ArrowButton from "../components/ArrowButton";
import Subtitle from "../components/Subtitle";
import useScrollPosition from "../hooks/useScrollPosistion";
import useWindowSize from "../hooks/useWindowSize";
import styles from "../styles/Home.module.css";

export default function Home() {
    const scrollPosition = useScrollPosition();

    const [yOffest, setYOffset] = useState(1);
    const [picHeight, setPicHeight] = useState(1);

    // const yOffest = useWindowSize().width * 3.4;
    // const picHeight = useWindowSize().width * 1.3;
    const { height, width } = useWindowSize();

    useEffect(() => {
        setYOffset(width * 3.8);
        setPicHeight(width * 1.3);
    }, [width]);
    const featured = [
        "/pic1.png",
        "/pic2.png",
        "/pic3.png",
        "/pic4.png",
        "/pic5.png",
        "/pic6.png",
    ];

    return (
        <div
            style={{
                height: "140vw",
                width: "80vw",
                background: "green",
                paddingInline: '10vw',
            }}
        >
            <div
                style={{
                    height: "140vw",
                    width: "100%",
                    background: "red",
                }}
            ></div>
        </div>
    );

    // console.log(Math.abs(scrollPosition - (yOffest + 0 * picHeight)) * 200 / height)
    return (
        <Fragment>
            <NextSeo
                title="Larnelle Art"
                description="Tattoo Artist"
                canonical="https://www"
                openGraph={{
                    url: "https://www",
                    title: "Larnelle Art",
                    description: "Tattoo Artist",
                    images: [
                        {
                            url: "/openg.png",
                            width: 800,
                            height: 600,
                            alt: "Og Image Alt",
                            type: "image/png",
                        },
                        {
                            url: "https://www.example.com/og-image02.jpg",
                            width: 900,
                            height: 800,
                            alt: "Og Image Alt Second",
                            type: "image/jpeg",
                        },
                        { url: "https://www.example.com/og-image03.jpg" },
                        { url: "https://www.example.com/og-image04.jpg" },
                    ],
                    site_name: "Larnelle Art",
                }}
                twitter={{
                    handle: "@handle",
                    site: "@site",
                    cardType: "summary_large_image",
                }}
            />
            <div
                className="vstack"
                style={{
                    marginLeft: "-18vw",
                    // marginTop: 20 + scrollPosition / 40 + "vw",
                    marginTop: "20vw",
                    position: "absolute",
                    width: "118vw",
                    color: "#D197FF44",
                    fontSize: "5.8vw",
                    fontWeight: "200",
                    lineHeight: "145%",
                    zIndex: "1",
                }}
            >
                <div
                    style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                    }}
                >
                    TATTOO ARTIST TATTOO ARTIST TATTOO ARTIST TATTOO ARTIST
                    TATTOO ARTIST TATTOO ARTIST{" "}
                </div>
                <div
                    style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        transform: "rotate(180deg)",
                    }}
                >
                    TATTOO ARTIST TATTOO ARTIST TATTOO ARTIST TATTOO ARTIST
                    TATTOO ARTIST TATTOO ARTIST{" "}
                </div>
                <div
                    style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                    }}
                >
                    O ARTIST TATTOO ARTIST{" "}
                    <b
                        style={{
                            fontWeight: "600",
                            color: "#fff",
                        }}
                    >
                        TATTOO ARTIST
                    </b>{" "}
                    TATTOO ARTIST TATTOO ARTIST TATTOO ARTIST{" "}
                </div>
                <div
                    style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        transform: "rotate(180deg)",
                    }}
                >
                    O ARTIST TATTOO ARTIST TATTOO ARTIST TATTOO ARTIST TATTOO
                    ARTIST TATTOO ARTIST{" "}
                </div>
                <div
                    style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                    }}
                >
                    IST TATTOO ARTIST TATTOO ARTIST TATTOO ARTIST TATTOO ARTIST
                    TATTOO ARTIST{" "}
                </div>
            </div>
            <div className="vstack">
                <div
                    style={{
                        width: "100vw",
                        height: "175vw",
                        position: "absolute",
                        overflow: "hidden",
                        // zIndex: '-1',
                    }}
                >
                    <Image
                        src="/chapel.png"
                        alt="test"
                        fill
                        sizes="100vw"
                        priority
                        style={{
                            objectFit: "cover",
                            opacity: "50%",
                        }}
                    />
                </div>
                <div
                    style={{
                        width: "100vw",
                        aspectRatio: "734/1024",
                        position: "relative",
                        overflow: "hidden",
                        marginTop: "32vw",
                        zIndex: "2",
                    }}
                >
                    <Image
                        src="/statue.png"
                        alt="test"
                        fill
                        sizes="100vw"
                        priority
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
                {/* <div
                    style={{
                        width: "100vw",
                        height: "0.3px",
                        background: "#D197FF",
                        zIndex: "3",
                    }}
                /> */}
                <div
                    className="vstack"
                    style={{
                        width: "100vw",
                        marginBottom: "30vw",
                    }}
                >
                    <div
                        style={{
                            width: "100vw",
                            height: "190vw",
                            position: "absolute",
                            overflow: "hidden",
                            // zIndex: '-1',
                        }}
                    >
                        <Image
                            src="/chapel2.png"
                            alt="test"
                            fill
                            sizes="100vw"
                            priority
                            style={{
                                objectFit: "cover",
                                // opacity: "80%",
                            }}
                        />
                    </div>

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
                                paddingBottom: "12vw",
                                fontSize: "5.2vw",
                                fontWeight: "200",
                                lineHeight: "180%",
                                zIndex: "3",
                            }}
                        >
                            {
                                '"Tattoos are not just about ink and skin, they are a reflection of our souls."'
                            }
                        </div>
                    </div>
                    <div
                        className="vstack"
                        style={{
                            gap: "7vw",
                            marginTop: "4vw",
                            alignItems: "center",
                        }}
                    >
                        <ArrowButton name="GALLERY" href="/gallery" />
                        <ArrowButton name="TOUR" href="/tour" />
                        <ArrowButton name="BOOK" href="/book" />
                        <ArrowButton name="ABOUT" href="/about" />
                        <ArrowButton
                            name="MUZEOM"
                            href="https://www.instagram.com/the_muzeom/"
                        />
                    </div>
                    <div
                        className="hstack"
                        style={{
                            justifyContent: "flex-end",
                        }}
                    ></div>
                </div>

                <div
                    className="vstack"
                    style={{
                        justifyContent: "flex-end",
                        marginTop: "20vw",
                        marginBottom: "8vw",
                    }}
                >
                    <div
                        className="vstack"
                        style={{
                            paddingLeft: "2vw",
                            position: "absolute",
                            width: "100%",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "15vw",
                                fontWeight: "200",
                                lineHeight: "96%",
                            }}
                        >
                            FEATURED WORK
                        </div>

                        <div
                            style={{
                                width: "100%",
                                height: "1px",
                                background: "white",
                            }}
                        ></div>
                    </div>
                </div>
                {/* <div
                    style={{
                        position: "sticky",
                        top: "36vw",
                        zIndex: "2",
                        marginTop: "5vw",
                    }}
                >
                    <div
                        className="vstack"
                        style={{
                            justifyContent: "space-between",
                            height: "120vw",
                            width: "100vw",
                            padding: "3vw",
                            position: "absolute",
                        }}
                    >
                        <div
                            className="hstack"
                            style={{ justifyContent: "space-between" }}
                        >
                            <div
                                style={{
                                    borderTop: "1px solid rgba(12,209,145,1)",
                                    borderLeft: "1px solid rgba(12,209,145,1)",
                                    width: "15vw",
                                    aspectRatio: 1,
                                }}
                            />
                            <div
                                style={{
                                    borderTop: "1px solid rgba(12,209,145,1)",
                                    borderRight: "1px solid rgba(12,209,145,1)",
                                    width: "15vw",
                                    aspectRatio: 1,
                                }}
                            />
                        </div>
                        <div
                            className="hstack"
                            style={{ justifyContent: "space-between" }}
                        >
                            <div
                                style={{
                                    borderBottom: "1px solid rgba(12,209,145,1)",
                                    borderLeft: "1px solid rgba(12,209,145,1)",
                                    width: "15vw",
                                    aspectRatio: 1,
                                }}
                            />
                            <div
                                style={{
                                    borderBottom: "1px solid rgba(12,209,145,1)",
                                    borderRight: "1px solid rgba(12,209,145,1)",
                                    width: "15vw",
                                    aspectRatio: 1,
                                }}
                            />
                        </div>
                    </div>
                </div> */}
                {featured.map((href, index) => {
                    return (
                        <div
                            key={href}
                            className="hstack"
                            style={{
                                width: "100vw",
                                height: picHeight + "px",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingBlock: "2vw",
                            }}
                        >
                            <div
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    aspectRatio: "0.8",
                                    position: "relative",
                                    overflow: "hidden",
                                    // transform: `scale(${Math.min(100,(100 - (Math.abs(scrollPosition - (yOffest + index * picHeight)) * 100 / height)))}%)`,
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
                                        // opacity:
                                        //     100 -
                                        //     Math.pow(
                                        //         (Math.abs(
                                        //             scrollPosition -
                                        //                 (yOffest +
                                        //                     index * picHeight)
                                        //         ) *
                                        //             1.3) /
                                        //             height,
                                        //         2
                                        //     ) *
                                        //         100 +
                                        //     "%",
                                    }}
                                />
                                {/* <div
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        // background:
                                        //     scrollPosition > (yOffest + index * picHeight)? 'red' : 'blue',
                                        background: `rgba(0,0,0,${Math.pow(
                                            (Math.abs(
                                                scrollPosition -
                                                    (yOffest +
                                                        index * picHeight)
                                            ) *
                                                1.3) /
                                                height,
                                            2
                                        )})`,
                                        position: "absolute",
                                    }}
                                ></div> */}
                            </div>
                        </div>
                    );
                })}
                <div
                    style={{
                        height: "30vw",
                    }}
                />
            </div>
        </Fragment>
    );
}
