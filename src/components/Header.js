import Image from "next/image";
import Link from "next/link";

export default function Header({ title, href, imageHeight, textOffset }) {
    return (
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
                    height: title == "ABOUT" ? "0" : "1px",
                    background: "white",
                    zIndex: "4",
                }}
            />
        </div>
    );
}
