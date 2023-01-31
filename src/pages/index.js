import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
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

    // console.log(Math.abs(scrollPosition - (yOffest + 0 * picHeight)) * 200 / height)
    return (
        <Fragment>
        <div
            style={{
                width: "100vw",
                height: '100vh',
                position: "fixed",
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
                    opacity: '80%',
                }}
            />
        </div>
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
                    lineHeight: '145%',
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
                <div
                    style={{
                        width: "100vw",
                        height: '0.3px',
                        background: '#D197FF',
                        zIndex: '3',
                    }}
                />
                <div
                    className="vstack"
                    style={{
                        width: "100vw",
                        marginTop: '20vw',
                        marginBottom: '30vw',
                    }}
                >

                <div
                    className="hstack"
                    style={{
                        width: "100vw",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            width: '80vw',
                            paddingBottom: "12vw",
                            fontSize: "5.2vw",
                            fontWeight: "200",
                            lineHeight: '180%',
                            zIndex: '3',
                        }}
                    >
                        {'"Tattoos are not just about ink and skin, they are a reflection of our souls."'}
                    </div>
                </div>
                    <div
                        className="vstack"
                        style={{
                            gap: "10vw",
                            marginTop: "8vw",
                            alignItems: 'center',
                        }}
                    >
                        <ArrowButton
                            name="GALLARY"
                            href="/gallary"
                        />
                        <ArrowButton name="ABOUT" href="/about" />
                        <ArrowButton name="TOUR" href="/tour" />
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
                    >
                    </div>
                </div>

                <div
                    className="hstack"
                    style={{
                        width: "100vw",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            paddingBottom: "10vw",
                            fontSize: "9vw",
                            fontWeight: "200",
                            zIndex: '3',
                        }}
                    >
                        FEATURED PIECES
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
                                        opacity: (100 - (Math.pow(
                                            (Math.abs(
                                                scrollPosition -
                                                    (yOffest +
                                                        index * picHeight)
                                            ) *
                                                1.3) /
                                                height,
                                            2
                                        )) * 100) + '%',
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

function ArrowButton({ href, name, width }) {
    return (
        <Link
            href={href}
            className="hstack"
            style={{
                alignItems: "center",
                justifyContent: 'center',
                width: "66vw",
                zIndex: "2",
                border: '0.5px solid white',
                gap: "6vw",
                paddingBlock: '5vw',
            }}
        >
            <div
                style={{
                    fontSize: "6vw",
                    fontWeight: "300",
                }}
            >
                {name}
            </div>
            <Arrow height={2.4} width={10} lineThickness={0.4} />
        </Link>
    );
}

function Arrow({ height, width, lineThickness }) {
    let strokeWidth = (lineThickness * 100) / height;
    let viewWidth = (width * 100) / height;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox={`0 0 ${viewWidth} 100`}
            strokeWidth={strokeWidth}
            stroke="currentColor"
            className="w-6 h-6"
            style={{
                height: height + "vw",
            }}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={`M0 50 h${viewWidth - strokeWidth / 2} L${viewWidth - 50} ${
                    strokeWidth / 2
                } M${viewWidth - strokeWidth / 2} 50 L${viewWidth - 50} ${
                    100 - strokeWidth / 2
                } `}
            />
        </svg>
    );
}
