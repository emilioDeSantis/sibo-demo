import { NextSeo } from "next-seo";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import Arrow from "../components/Arrow";
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

export default function Home({ images }) {
    const title = "TATTOO ARTIST";
    const textOffset = 84;
    const lh = 1.35;

    const scrollPosition = useScrollPosition();

    return (
        <Fragment>
            <NextSeo
                title="LARNELLE ART | Quality Tattoos Brought to Life"
                description="Larnelle is a premier tattoo artist who brings your vision to life with exceptional craftsmanship and attention to detail."
                canonical="https://larnelleart.com"
                openGraph={{
                    url: "https://larnelleart.com",
                    title: "LARNELLE ART | Quality Tattoos Brought to Life",
                    description:
                        "Larnelle is a premier tattoo artist who brings your vision to life with exceptional craftsmanship and attention to detail.",
                    images: [
                        {
                            url: "/openg.png",
                            width: 800,
                            height: 600,
                            alt: "statue",
                            type: "image/png",
                        },
                    ],
                    site_name: "Larnelle Art",
                }}
            />
            <div className="show-in-mobile">
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
                        O ARTIST TATTOO ARTIST TATTOO ARTIST TATTOO ARTIST
                        TATTOO ARTIST TATTOO ARTIST{" "}
                    </div>
                    <div
                        style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                        }}
                    >
                        IST TATTOO ARTIST TATTOO ARTIST TATTOO ARTIST TATTOO
                        ARTIST TATTOO ARTIST{" "}
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
                            height: "0.5px",
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
                            <ArrowButton
                                name="ABOUT"
                                href="/about"
                                thin={true}
                            />
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
                                    height: "0.5px",
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
                                                background: "#444",
                                            }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    <Footer page="" />
                </div>
            </div>

            <div className="show-in-desktop">
                <div
                    className="vstack"
                    style={{
                        position: "absolute",
                        width: "100vw",
                        height: "300vh",
                        zIndex: "3",
                        paddingInline: "8vw",
                    }}
                >
                    <div
                        className="vstack"
                        style={{
                            width: "100%",
                            height: "100vh",
                            zIndex: "3",
                            paddingTop: "25vh",
                            paddingBottom: "22vh",
                            // background: 'red',
                            justifyContent: "space-between",
                        }}
                    >
                        <div
                            style={{
                                fontWeight: "800",
                                fontSize: "7.5vw",
                                width: "55vw",
                                lineHeight: "82%",
                            }}
                        >
                            PREMIUM COSTA RICAN{" "}
                            <b
                                style={{
                                    color: "#3ff",
                                    filter: "saturate(200%)",
                                    fontWeight: "800",
                                }}
                            >
                                {" "}
                                CHOCOLATE
                            </b>
                        </div>
                        <div
                            className="vstack"
                            style={{
                                alignItems: "flex-start",
                                gap: "1.2vw",
                            }}
                        >
                            <div
                                className="hstack"
                                style={{
                                    alignItems: "flex-end",
                                    gap: "0.5vw",
                                    // background: 'blue'
                                }}
                            >
                                <div
                                    style={{
                                        fontWeight: "300",
                                        fontSize: "2.4vw",
                                    }}
                                >
                                    ONLINE STORE
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={3}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                    style={{
                                        height: "1.5vw",
                                        // background: 'red'
                                        marginBottom: "0.35vw",
                                    }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        // d="M8.25 8.25 l15 15m0 0V8.25m0 11.25H8.25"
                                        d="M4 4 l16 16 m0 0 V4 m0 16 H4"
                                    />
                                </svg>
                            </div>
                        </div>
                        {/* <div
                            className="hstack"
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <div
                                style={{
                                    height: "3vw",
                                    width: "7vw",
                                    position: "relative",
                                    transform: "rotate(90deg)",
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        border: "0.1vw solid white",
                                        borderRadius: "50vw",
                                        height: "100%",
                                        width: "100%",
                                    }}
                                />
                                <div
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                    }}
                                >
                                    <div
                                        className="hstack"
                                        style={{
                                            alignItems: "center",
                                            justifyContent: "center",
                                            height: "100%",
                                            width: "100%",
                                        }}
                                    >
                                        <Arrow
                                            width={4}
                                            lineThickness={0.1}
                                            height={1}
                                        ></Arrow>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div
                        className="vstack"
                        style={{
                            width: "100%",
                            height: "100vh",
                            zIndex: "3",
                            paddingTop: "20vh",
                            paddingBottom: "18vh",
                            // background: 'red',
                            justifyContent: "space-between",
                        }}
                    >
                        <div
                            style={{
                                fontWeight: "800",
                                fontSize: "5vw",
                                width: "55vw",
                                lineHeight: "82%",
                            }}
                        >
                            DISCOVER THE TRUE TASTE OF{" "}
                            <b
                                style={{
                                    color: "#3ff",
                                    filter: "saturate(200%)",
                                    fontWeight: "800",
                                }}
                            >
                                {" "}
                                COSTA RICA
                            </b>
                        </div>

                        <div
                            style={{
                                fontWeight: "400",
                                fontSize: "1.2vw",
                                width: "55vw",
                                lineHeight: "140%",
                            }}
                        >
                            with Sibö's export-quality chocolate bars. As a
                            leader in Costa Rica's craft chocolate movement
                            since 2007, Sibö Chocolate has become synonymous
                            with artisanal chocolate creations. With three
                            locations housing its artisanal chocolate factory,
                            private chocolate tasting tour, farm-to-table
                            restaurant, and chocolate shops in San Isidro de
                            Heredia and Escazú neighborhoods, Sibö Chocolate has
                            been delivering pure chocolate perfection to its
                            customers. From premium chocolate confections to
                            drinking chocolate and chocolate-coated nuts and
                            fruit, Sibö Chocolate specializes in only the best.
                            Join us on a journey of flavor and quality and
                            experience the luxury of Costa Rican chocolate with
                            Sibö.
                        </div>
                        <div
                            className="vstack"
                            style={{
                                alignItems: "flex-start",
                                gap: "1.2vw",
                            }}
                        >
                            <div
                                className="hstack"
                                style={{
                                    alignItems: "flex-end",
                                    gap: "0.5vw",
                                    // background: 'blue'
                                }}
                            >
                                <div
                                    style={{
                                        fontWeight: "300",
                                        fontSize: "2.4vw",
                                    }}
                                >
                                    LEARN MORE
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={3}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                    style={{
                                        height: "1.5vw",
                                        // background: 'red'
                                        marginBottom: "0.35vw",
                                    }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        // d="M8.25 8.25 l15 15m0 0V8.25m0 11.25H8.25"
                                        d="M4 4 l16 16 m0 0 V4 m0 16 H4"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div
                        className="vstack"
                        style={{
                            width: "100%",
                            height: "100vh",
                            zIndex: "3",
                            paddingTop: "16vh",
                            paddingBottom: "12vh",
                            // background: 'red',
                            justifyContent: "space-between",
                        }}
                    >
                        <div
                            style={{
                                fontWeight: "800",
                                fontSize: "6vw",
                                width: "55vw",
                                lineHeight: "82%",
                            }}
                        >
                            SHOP
                        </div>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "auto auto auto",
                                rowGap: "2vw",
                                columnGap: "2vw",
                                width: "55vw",
                            }}
                        >
                            <div
                                className="vstack"
                                style={{
                                    background: "white",
                                    width: "auto",
                                    height: "20vw",
                                }}
                            ></div>

                            <div
                                className="vstack"
                                style={{
                                    background: "white",
                                    width: "auto",
                                    height: "20vw",
                                }}
                            ></div>

                            <div
                                className="vstack"
                                style={{
                                    background: "white",
                                    width: "auto",
                                    height: "20vw",
                                }}
                            ></div>
                        </div>
                        <div
                            className="vstack"
                            style={{
                                alignItems: "flex-start",
                                gap: "1.2vw",
                            }}
                        >
                            <div
                                className="hstack"
                                style={{
                                    alignItems: "center",
                                    gap: "0.5vw",
                                    // background: 'blue'
                                }}
                            >
                                <div
                                    className="vstack"
                                    style={{
                                        gap: "0.3vw",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontWeight: "300",
                                            fontSize: "1.6vw",
                                        }}
                                    >
                                        SEE ALL PRODUCTS
                                    </div>

                                    <div
                                        style={{
                                            background: "white",
                                            height: "0.14vw",
                                            width: "100%",
                                        }}
                                    ></div>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={3}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                    style={{
                                        height: "1.2vw",
                                        // background: 'red'
                                    }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        // d="M8.25 8.25 l15 15m0 0V8.25m0 11.25H8.25"
                                        d="M4 4 l16 16 m0 0 V4 m0 16 H4"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        width: "100vw",
                        height: "100vh",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "fixed",
                            top: "0",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            <Image
                                src="/new choc choc 2.png"
                                alt="test"
                                fill
                                sizes="100vw"
                                priority
                                quality={100}
                                style={{
                                    objectFit: "cover",

                                    filter: "saturate(120%)",
                                }}
                            />
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            height: `min(200vh - ${scrollPosition}px, 100vh)`,
                            position: "fixed",
                            top: "0",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                height: "100vh",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            <Image
                                src="/new choc foil.png"
                                alt="test"
                                fill
                                sizes="100vw"
                                priority
                                quality={100}
                                style={{
                                    objectFit: "cover",

                                    filter: "saturate(150%)",
                                }}
                            />
                        </div>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            height: `calc(100vh - ${scrollPosition}px)`,
                            position: "fixed",
                            top: "0",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                height: "100vh",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            <Image
                                src="/new choc label.png"
                                alt="test"
                                fill
                                sizes="100vw"
                                quality={100}
                                priority
                                style={{
                                    objectFit: "cover",

                                    filter: "saturate(130%)",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );

    return (
        <Fragment>
            <NextSeo
                title="LARNELLE ART | Quality Tattoos Brought to Life"
                description="Larnelle is a premier tattoo artist who brings your vision to life with exceptional craftsmanship and attention to detail."
                canonical="https://larnelleart.com"
                openGraph={{
                    url: "https://larnelleart.com",
                    title: "LARNELLE ART | Quality Tattoos Brought to Life",
                    description:
                        "Larnelle is a premier tattoo artist who brings your vision to life with exceptional craftsmanship and attention to detail.",
                    images: [
                        {
                            url: "/openg.png",
                            width: 800,
                            height: 600,
                            alt: "statue",
                            type: "image/png",
                        },
                    ],
                    site_name: "Larnelle Art",
                }}
            />
            <div className="show-in-mobile">
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
                        O ARTIST TATTOO ARTIST TATTOO ARTIST TATTOO ARTIST
                        TATTOO ARTIST TATTOO ARTIST{" "}
                    </div>
                    <div
                        style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                        }}
                    >
                        IST TATTOO ARTIST TATTOO ARTIST TATTOO ARTIST TATTOO
                        ARTIST TATTOO ARTIST{" "}
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
                            height: "0.5px",
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
                            <ArrowButton
                                name="ABOUT"
                                href="/about"
                                thin={true}
                            />
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
                                    height: "0.5px",
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
                                                background: "#444",
                                            }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    <Footer page="" />
                </div>
            </div>

            <div className="show-in-desktop">
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        background: "#141518",
                        overflow: "hidden",
                    }}
                >
                    <video
                        src="/My Movie 2.mp4"
                        autoPlay
                        loop
                        muted
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            opacity: "40%",
                            filter: "saturate(50%)",
                        }}
                    />
                </div>
                <div
                    className="vstack"
                    style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        paddingInline: "8vw",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            fontSize: "11vw",
                            fontWeight: "300",
                            lineHeight: "80%",
                        }}
                    >
                        {"COSTA RICA'S "}{" "}
                        <b
                            style={{
                                color: "#50FFEA",

                                fontWeight: "300",
                            }}
                        >
                            {" "}
                            FINEST
                        </b>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
