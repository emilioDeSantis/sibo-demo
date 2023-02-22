import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function Header({ title, href, imageHeight, textOffset }) {
    return (
        <Fragment>
            <div className="show-in-mobile">
                <div
                    className="vstack"
                    style={{
                        marginTop: title == "ABOUT" ? "0" : "14vw",
                    }}
                >
                    <div
                        className="vstack"
                        style={{
                            marginTop: title == "ABOUT" ? "18vw" : "13vw",
                            position: "absolute",
                            height: "5em",
                            width: "100vw",
                            color: "#D197FF29",
                            fontSize: "10vw",
                            fontWeight: "700",
                            lineHeight: "1em",
                            zIndex: "1",
                            textAlign: "center",
                            gap: "0.6vw",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                whiteSpace: "nowrap",
                                transform: `translate(${textOffset - 100}vw,0)`,
                                position: "absolute",
                                top: 0 * 0.78 + "em",
                            }}
                        >
                            {title +
                                " " +
                                title +
                                " " +
                                title +
                                " " +
                                title +
                                " " +
                                title +
                                " " +
                                title +
                                " " +
                                title}
                        </div>
                        <div
                            style={{
                                whiteSpace: "nowrap",
                                transform: `translate(${
                                    textOffset - 115
                                }vw,-0.015em) rotate(180deg)`,
                                position: "absolute",
                                top: 1 * 0.78 + "em",
                            }}
                        >
                            {title +
                                " " +
                                title +
                                " " +
                                title +
                                " " +
                                title +
                                " " +
                                title +
                                " " +
                                title +
                                " " +
                                title}
                        </div>
                        <div
                            style={{
                                whiteSpace: "nowrap",
                                transform: `translate(${textOffset - 110}vw,0)`,
                                position: "absolute",
                                top: 2 * 0.78 + "em",
                            }}
                        >
                            {title + " " + title + " " + title}
                            <b
                                style={{
                                    color: "#fff",
                                }}
                            >
                                {" "}
                                {title}{" "}
                            </b>
                            {title +
                                " " +
                                title +
                                " " +
                                title +
                                " " +
                                title +
                                " " +
                                title +
                                " " +
                                title +
                                " " +
                                title}
                        </div>
                        <div
                            style={{
                                whiteSpace: "nowrap",
                                transform: `translate(${
                                    textOffset - 105
                                }vw,-0.015em) rotate(180deg)`,
                                position: "absolute",
                                top: 3 * 0.78 + "em",
                            }}
                        >
                            {title +
                                " " +
                                title +
                                " " +
                                title +
                                " " +
                                title +
                                " " +
                                title +
                                " " +
                                title +
                                " " +
                                title}
                        </div>
                        <div
                            style={{
                                whiteSpace: "nowrap",
                                transform: `translate(${textOffset - 120}vw,0)`,
                                position: "absolute",
                                top: 4 * 0.78 + "em",
                            }}
                        >
                            {title +
                                " " +
                                title +
                                " " +
                                title +
                                " " +
                                title +
                                " " +
                                title +
                                " " +
                                title +
                                " " +
                                title}
                        </div>
                    </div>
                    <div
                        style={{
                            height: imageHeight,
                            width: "100vw",
                            position: "relative",
                            overflow: "hidden",
                            zIndex: "2",
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

                    <div
                        style={{
                            width: "100vw",
                            height: title == "ABOUT" ? "0" : "0.5px",
                            background: "white",
                            zIndex: "4",
                        }}
                    />
                </div>
            </div>

            <div className="show-in-desktop">
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
                            {/* <div
                                style={{
                                    width: "200vw",
                                    height: "0.5px",
                                    background: "white",
                                    zIndex: "3",
                                }}
                            /> */}
                            <div
                                style={{
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    transform: "rotate(180deg)",
                                    marginTop: "-0.05em",
                                }}
                            >
                                {title +
                                    " " +
                                    title +
                                    " " +
                                    title +
                                    " " +
                                    title +
                                    " " +
                                    title +
                                    " " +
                                    title +
                                    " " +
                                    title}
                            </div>
                            <div
                                style={{
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    transform: `translate(${textOffset}vw,0)`,
                                }}
                            >
                                ERY
                                <b
                                    style={{
                                        color: "#fff",
                                    }}
                                >
                                    {" "}
                                    {title}{" "}
                                </b>
                                {title +
                                    " " +
                                    title +
                                    " " +
                                    title +
                                    " " +
                                    title +
                                    " " +
                                    title +
                                    " " +
                                    title +
                                    " " +
                                    title}
                            </div>
                            <div
                                style={{
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    transform: "rotate(180deg)",
                                    marginBottom: "-0.05em",
                                }}
                            >
                                {title +
                                    " " +
                                    title +
                                    " " +
                                    title +
                                    " " +
                                    title +
                                    " " +
                                    title +
                                    " " +
                                    title +
                                    " " +
                                    title}
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
                                    width: "35vw",
                                    height: "22.7vw",
                                    justifyContent: "space-between",
                                    alignItems: "flex-end",
                                    background: "black",
                                    zIndex: "2",
                                    marginBottom: "0.5px",
                                    marginRight: '10vw',
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
                                        height: "26vw",
                                        width: "26vw",
                                        position: "relative",
                                        overflow: "hidden",
                                        zIndex: "2",
                                    }}
                                >
                                    <Image
                                        src={href}
                                        alt="test"
                                        fill
                                        sizes="40vw"
                                        priority
                                        style={{
                                            objectFit: "cover",
                                        }}
                                    />
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
            </div>
        </Fragment>
    );
}
