import Image from "next/image";
import Link from "next/link";

export default function Footer({ page }) {
    return (
        <div
            className="vstack"
            style={{
                gap: "4vw",
                marginTop: '12vw',
            }}
        >
            {page != "gallery" && (
                <Link
                    href="gallery"
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
                            color: "#2C2A2E",
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
                            GALLERY GALLERY GALLERY GALLERY GALLERY GALLERY
                            GALLERY GALLERY
                        </div>
                        <div
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                transform: "rotate(180deg)",
                            }}
                        >
                            GALLERY GALLERY GALLERY GALLERY GALLERY GALLERY
                            GALLERY GALLERY
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
                            GALLERY GALLERY GALLERY GALLERY GALLERY GALLERY
                            GALLERY GALLERY
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
                            style={{
                                objectFit: "cover",
                                filter: "saturate(50%)",
                            }}
                        />
                    </div>
                </Link>
            )}
            {page != "tour" && (
                <Link
                    href="tour"
                    style={{
                        display: "flex",
                        alignItems: "flex-end",
                    }}
                >
                    <div
                        className="vstack"
                        style={{
                            marginLeft: "-18vw",
                            marginTop: "20vw",
                            position: "absolute",
                            width: "118vw",
                            color: "#2C2A2E",
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
                            TOUR TOUR TOUR TOUR TOUR TOUR TOUR TOUR
                        </div>
                        <div
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                transform: "rotate(180deg)",
                            }}
                        >
                            TOUR TOUR TOUR TOUR TOUR TOUR TOUR TOUR
                        </div>
                        <div
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                            }}
                        >
                            OR TOUR TOUR
                            <b
                                style={{
                                    color: "#fff",
                                }}
                            >
                                {" "}
                                TOUR{" "}
                            </b>
                            TOUR TOUR TOUR TOUR TOUR TOUR TOUR TOUR
                        </div>
                        <div
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                transform: "rotate(180deg)",
                            }}
                        >
                            R TOUR TOUR TOUR TOUR TOUR TOUR TOUR
                        </div>
                        <div
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                            }}
                        >
                            UR TOUR TOUR TOUR TOUR TOUR TOUR TOUR
                        </div>
                    </div>
                    <div
                        style={{
                            height: "43vw",
                            marginLeft: "1vw",
                            aspectRatio: "298/266",
                            position: "relative",
                            overflow: "hidden",
                            zIndex: "2",
                        }}
                    >
                        <Image
                            src="/malebust.png"
                            alt="test"
                            fill
                            sizes="40vw"
                            style={{
                                objectFit: "cover",
                                filter: "saturate(50%)",
                            }}
                        />
                    </div>
                </Link>
            )}
            {page != "book" && (
                <Link
                    href="book"
                    style={{
                        display: "flex",
                        alignItems: "flex-end",
                    }}
                >
                    <div
                        className="vstack"
                        style={{
                            marginLeft: "-18vw",
                            marginTop: "20vw",
                            position: "absolute",
                            width: "118vw",
                            color: "#2C2A2E",
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
                            BOOK BOOK BOOK BOOK BOOK BOOK BOOK BOOK
                        </div>
                        <div
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                transform: "rotate(180deg)",
                            }}
                        >
                            BOOK BOOK BOOK BOOK BOOK BOOK BOOK BOOK
                        </div>
                        <div
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                            }}
                        >
                            K BOOK BOOK
                            <b
                                style={{
                                    color: "#fff",
                                }}
                            >
                                {" "}
                                BOOK{" "}
                            </b>
                            BOOK BOOK BOOK BOOK BOOK BOOK BOOK BOOK
                        </div>
                        <div
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                transform: "rotate(180deg)",
                            }}
                        >
                            K BOOK BOOK BOOK BOOK BOOK BOOK BOOK
                        </div>
                        <div
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                            }}
                        >
                            OK BOOK BOOK BOOK BOOK BOOK BOOK
                        </div>
                    </div>
                    <div
                        style={{
                            marginLeft: "5vw",
                            height: "43vw",
                            aspectRatio: "1",
                            position: "relative",
                            overflow: "hidden",
                            zIndex: "2",
                        }}
                    >
                        <Image
                            src="/bust-with-beard 1.png"
                            alt="test"
                            fill
                            sizes="40vw"
                            style={{
                                objectFit: "cover",
                                filter: "saturate(60%)",
                            }}
                        />
                    </div>
                </Link>
            )}
            {page != "about" && (
                <Link
                    href="about"
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
                            color: "#2C2A2E",
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
                            ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
                            ABOUT ABOUT ABOUT
                        </div>
                        <div
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                transform: "rotate(180deg)",
                            }}
                        >
                            ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
                            ABOUT ABOUT ABOUT
                        </div>
                        <div
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                            }}
                        >
                            BOUT
                            <b
                                style={{
                                    color: "#fff",
                                }}
                            >
                                {" "}
                                ABOUT{" "}
                            </b>
                            OUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
                            ABOUT ABOUT
                        </div>
                        <div
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                transform: "rotate(180deg)",
                            }}
                        >
                            ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
                            ABOUT ABOUT ABOUT
                        </div>
                        <div
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                            }}
                        >
                            T ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
                            ABOUT ABOUT
                        </div>
                    </div>
                    <div
                        style={{
                            height: "43vw",
                            aspectRatio: "1",
                            position: "relative",
                            overflow: "hidden",
                            zIndex: "2",
                        }}
                    >
                        <Image
                            src="/larnelleface.png"
                            alt="test"
                            fill
                            sizes="40vw"
                            style={{
                                objectFit: "cover",
                                filter: "saturate(30%)",
                            }}
                        />
                    </div>
                </Link>
            )}

            <div
                className="vstack"
                style={{
                    marginTop: '4vw',
                    background: "#2C2A2E",
                }}
            >
                <div
                    className="hstack"
                    style={{
                        gap: "8vw",
                        marginTop: "12vw",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            fontSize: "7vw",
                            fontWeight: "300",
                            textAlign: "center",
                        }}
                    >
                        LARNELLE ART
                    </div>

                    <Link href="https://www.instagram.com/larnelle.art/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            fill="#fff"
                            style={{
                                height: "8vw",
                            }}
                        >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                        </svg>
                    </Link>
                </div>

                <div
                    className="hstack"
                    style={{
                        marginTop: "5vw",
                        justifyContent: "space-between",
                        paddingInline: "8vw",
                    }}
                >
                    <Link
                        href="/"
                        style={{
                            fontSize: "3vw",
                            fontWeight: "300",
                            textAlign: "center",
                        }}
                    >
                        HOME
                    </Link>
                    <Link
                        href="gallery"
                        style={{
                            fontSize: "3vw",
                            fontWeight: "300",
                            textAlign: "center",
                        }}
                    >
                        GALLERY
                    </Link>
                    <Link
                        href="tour"
                        style={{
                            fontSize: "3vw",
                            fontWeight: "300",
                            textAlign: "center",
                        }}
                    >
                        TOUR
                    </Link>
                    <Link
                        href="book"
                        style={{
                            fontSize: "3vw",
                            fontWeight: "300",
                            textAlign: "center",
                        }}
                    >
                        BOOK
                    </Link>
                    <Link
                        href="about"
                        style={{
                            fontSize: "3vw",
                            fontWeight: "300",
                            textAlign: "center",
                        }}
                    >
                        ABOUT
                    </Link>
                    <Link
                        href="https://www.instagram.com/the_muzeom/"
                        style={{
                            fontSize: "3vw",
                            fontWeight: "300",
                            textAlign: "center",
                        }}
                    >
                        MUZEOM
                    </Link>
                </div>

                <div
                    className="hstack"
                    style={{
                        marginTop: "8vw",
                        marginBottom: '2vw',
                        justifyContent: "center",
                        opacity: '50%',
                    }}
                >
                    <div
                        style={{
                            fontSize: "3vw",
                            fontWeight: "300",
                            textAlign: "center",
                        }}
                    >
                        ©Larnelle Art 2023  |  site by
                    </div>
                    <Link
                        href="https://www.instagram.com/ui_design_studio_/"
                        style={{
                            fontSize: "3vw",
                            fontWeight: "300",
                            textAlign: "center",
                            textDecoration: 'underline',
                        }}
                    >
                        Ui Design Studio
                    </Link>
                </div>
            </div>
        </div>
    );
}
