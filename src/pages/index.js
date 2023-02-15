import { NextSeo } from "next-seo";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import ArrowButton from "../components/ArrowButton";
import Footer from "../components/Footer";
import Subtitle from "../components/Subtitle";
import Test from "../components/Test";
import { getImages } from "../firebase/database";
import useScrollPosition from "../hooks/useScrollPosistion";
import useWindowSize from "../hooks/useWindowSize";
import styles from "../styles/Home.module.css";

export const getServerSideProps = async (context) => {
    try {
        const images = await getImages();
        return {
            props: {
                images: JSON.parse(JSON.stringify(images)),
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

export default function Home({images}) {

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
                        height: (1024 / 734) * 100 + "vw",
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
                <div
                    style={{
                        width: "100vw",
                        height: "1px",
                        background: "white",
                        zIndex: "3",
                    }}
                />
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
                            paddingTop: "20vw",
                        }}
                    >
                        <div
                            style={{
                                width: "80vw",
                                paddingBottom: "18vw",
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
                        <ArrowButton
                            name="GALLERY"
                            href="/gallery"
                            thin={true}
                        />
                        <ArrowButton name="TOUR" href="/tour" thin={true} />
                        <ArrowButton name="BOOK" href="/book" thin={true} />
                        <ArrowButton name="ABOUT" href="/about" thin={true} />
                        <ArrowButton
                            thin={true}
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
                        marginTop: "36vw",
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
                {images
                    .filter((image) => image.isFeatured)
                    .sort((a, b) => {
                        return b.uploadDate.seconds - a.uploadDate.seconds;
                    })
                    .map((image, index) => {
                        return (
                            <div
                                key={image.id}
                                className="hstack"
                                style={{
                                    width: "100vw",
                                    height: "130vw",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    paddingBlock: "2vw",
                                }}
                            >
                                <div
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        position: "relative",
                                        overflow: "hidden",
                                        // transform: `scale(${Math.min(100,(100 - (Math.abs(scrollPosition - (yOffest + index * picHeight)) * 100 / height)))}%)`,
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
                            </div>
                        );
                    })}
                <Footer page="" />
            </div>
        </Fragment>
    );
}
