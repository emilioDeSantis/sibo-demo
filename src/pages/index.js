import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import useScrollPosition from "../hooks/useScrollPosistion";
import useWindowSize from "../hooks/useWindowSize";
import styles from "../styles/Home.module.css";

export default function Home() {
    const scrollPosition = useScrollPosition();

    const [yOffest, setYOffset] = useState(1)
    const [picHeight, setPicHeight] = useState(1)

    // const yOffest = useWindowSize().width * 3.4;
    // const picHeight = useWindowSize().width * 1.3;
    const {height, width} = useWindowSize()

    useEffect(() => {
        setYOffset(width * 3.4)
        setPicHeight(width * 1.3)
    }, [width]);
    const featured = ['/pic1.png', '/pic2.png', '/pic3.png','/pic4.png', '/pic5.png', '/pic6.png',]

    // console.log(Math.abs(scrollPosition - (yOffest + 0 * picHeight)) * 200 / height)
    return (
        <Fragment>
            <div
                className="vstack"
                style={{
                    marginLeft: "-10vw",
                    // marginTop: 38 + scrollPosition / 40 + "vw",
                    marginTop: "40vw",
                    position: "absolute",
                    width: "110vw",
                }}
            >
                <div
                    style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        fontWeight: "200",
                        fontSize: "5.6vw",
                        color: "#444",
                    }}
                >
                    TATTOO ARTIST TATTOO ARTIST TATTOO ARTIST TATTOO ARTIST
                    TATTOO ARTIST TATTOO ARTIST{" "}
                </div>
                <div
                    style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        fontWeight: "200",
                        fontSize: "5.6vw",
                        color: "#444",
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
                        fontWeight: "200",
                        fontSize: "5.6vw",
                        color: "#444",
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
                        fontWeight: "200",
                        fontSize: "5.6vw",
                        color: "#444",
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
                        fontWeight: "200",
                        fontSize: "5.6vw",
                        color: "#444",
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
                        aspectRatio: "1100/1024",
                        position: "relative",
                        overflow: "hidden",
                        marginTop: "50vw",
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
                    className="vstack"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(2,255,149,1) 0%, rgba(12,209,145,1) 42%, rgba(15,159,168,1) 100%)",
                        width: "100vw",
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
                                paddingBlock: "5vw",
                                fontSize: "6vw",
                                fontWeight: "700",
                            }}
                        >
                            Meet the Artist
                        </div>
                    </div>
                    <div
                        className="vstack"
                        style={{
                            paddingInline: "3vw",
                            gap: "3vw",
                            marginTop: "8vw",
                        }}
                    >
                        <ArrowButton
                            name="MUZEOM"
                            href="https://www.instagram.com/the_muzeom/"
                            width={77}
                        />
                        <ArrowButton name="PORTFOLIO" href="/portfolio" width={93} />
                        <ArrowButton name="BOOK" href="/book" width={54} />
                        <ArrowButton name="TOUR" href="/tour" width={51} />
                    </div>
                    <div
                        className="hstack"
                        style={{
                            justifyContent: "flex-end",
                        }}
                    >
                        <div
                            style={{
                                width: "82vw",
                                aspectRatio: "58/98",
                                position: "relative",
                                overflow: "hidden",
                                // marginTop: -20 - scrollPosition / 60 + "vw",
                                marginTop: "-35vw",
                            }}
                        >
                            <Image
                                src="/larnelle.png"
                                alt="test"
                                fill
                                sizes="100vw"
                                priority
                                style={{
                                    objectFit: "cover",
                                    mixBlendMode: "darken",
                                }}
                            />
                        </div>
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
                                paddingBlock: "5vw",
                                fontSize: "6vw",
                                fontWeight: "700",
                            }}
                        >
                            Featured Work
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
  return(
    <div 
    key = {href}
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
                }}
            />
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    // background: 
                    //     scrollPosition > (yOffest + index * picHeight)? 'red' : 'blue',
                    background: `rgba(0,0,0,${
                        Math.pow(Math.abs(scrollPosition - (yOffest + index * picHeight)) * 1.3 / height, 2)
                    })`,
                    position: "absolute",
                }}
            ></div>
        </div>
    </div>
)
})}
<div style={{
    height: '30vw'
}}/>
            </div>
        </Fragment>
    );
}

function ArrowButton({ href, name, width }) {
    return (
        <Link
            href={href}
            className="vstack"
            style={{
                alignItems: "flex-start",
                width: "normal",
                zIndex: '2',
            }}
        >
            <div
                style={{
                    fontSize: "15vw",
                    fontWeight: "800",
                    lineHeight: "0.64em",
                }}
            >
                {name}
            </div>
            <Arrow height={6} width={width} lineThickness={0.7} />
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
