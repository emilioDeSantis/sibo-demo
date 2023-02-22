import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect } from "react";
import Arrow from "../../components/Arrow";
import ArrowButton from "../../components/ArrowButton";
import ArrowLink from "../../components/ArrowLink";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getTour } from "../../firebase/database";

export const getServerSideProps = async (context) => {
    try {
        let tour = await getTour();

        tour.date = new Date(tour.startDate).toLocaleString("en-ZA", {
            month: "long",
            year: "numeric",
        });

        tour.startDate = new Date(tour.startDate)
            .toLocaleDateString("en-ZA", {
                month: "2-digit",
                day: "2-digit",
            })
            .replace(/\//g, "/");

        tour.endDate = new Date(tour.endDate)
            .toLocaleDateString("en-ZA", {
                day: "2-digit",
                month: "2-digit",
            })
            .replace(/\//g, "/");

        return {
            props: {
                data: JSON.parse(JSON.stringify(tour)),
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

export default function Tour({ data }) {
    const title = "TOUR";
    return (
        <Fragment>
            <div className="show-in-mobile">
                <div className="vstack" style={{}}>
                    <Header
                        title={"TOUR"}
                        href={"/male-bust 2.png"}
                        textOffset={32}
                        imageHeight="82.35vw"
                    />
                    <div className="vstack" style={{ position: "relative" }}>
                        <div
                            style={{
                                height: "100%",
                                width: "100vw",
                                position: "absolute",
                                overflow: "hidden",
                            }}
                        >
                            <Image
                                src={data.background}
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
                            style={{ zIndex: "2", paddingInline: "2vw" }}
                        >
                            <div
                                style={{
                                    fontWeight: "700",
                                    fontSize: "10vw",
                                    textTransform: "uppercase",
                                    lineHeight: "120%",
                                    marginTop: "18vw",
                                }}
                            >
                                {data.title}
                            </div>
                            <div
                                style={{
                                    fontWeight: "400",
                                    fontSize: "4vw",
                                    lineHeight: "135%",
                                    marginTop: "8vw",
                                }}
                            >
                                {data.description}
                            </div>
                            <div
                                style={{
                                    fontWeight: "700",
                                    fontSize: "10vw",
                                    textTransform: "uppercase",
                                    lineHeight: "120%",
                                    marginTop: "18vw",
                                }}
                            >
                                {data.date}
                            </div>
                            <div
                                style={{
                                    fontWeight: "300",
                                    fontSize: "7vw",
                                    lineHeight: "120%",
                                    marginTop: "2vw",
                                }}
                            >
                                {data.startDate} - {data.endDate}
                            </div>
                            <div
                                style={{
                                    fontWeight: "700",
                                    fontSize: "10vw",
                                    lineHeight: "120%",
                                    marginTop: "18vw",
                                }}
                            >
                                ARTISTS
                            </div>
                            {data.artists.map((username) => {
                                return (
                                    <div
                                        className="hstack"
                                        style={{}}
                                        key={username}
                                    >
                                        <Link
                                            style={{
                                                fontWeight: "500",
                                                fontSize: "5vw",
                                                marginTop: "8vw",
                                            }}
                                            href={
                                                "https://www.instagram.com/" +
                                                username +
                                                "/"
                                            }
                                        >
                                            @{username}
                                        </Link>
                                    </div>
                                );
                            })}
                            <div
                                style={{
                                    height: "12vw",
                                }}
                            ></div>
                        </div>
                        <div
                            style={{
                                height: "0.5px",
                                width: "100vw",
                                background: "white",
                                zIndex: 3,
                            }}
                        ></div>
                    </div>

                    <p className="paragrapgh" style={{}}>
                        To book an appointment with Larnelle, you can reach out
                        via Instagram or send an email.
                    </p>
                    <p className="subtitle" style={{}}>
                        INSTAGRAM
                    </p>
                    <ArrowLink href="https://www.instagram.com/larnelle.art/">
                        @Larnelle.Art
                    </ArrowLink>
                    <p className="subtitle" style={{}}>
                        EMAIL
                    </p>
                    <p className="text" style={{}}>
                        Larnellepienaar@yahoo.com
                    </p>

                    {/* <div
                className="hstack"
                style={{
                    width: "100vw",
                    justifyContent: "center",
                    paddingTop: "12vw",
                    paddingBottom: "5vw",
                }}
            >
                <ArrowButton name="LEARN MORE" href="/book" thin={true} />
            </div> */}

                    <Footer page={"tour"} />
                </div>
            </div>
            <div className="show-in-desktop">
                <div className="vstack" style={{}}>
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
                                    OUR TOUR TOUR TOUR TOUR
                                </div>
                                <div
                                    style={{
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        transform: `translate(6vw,0)`,
                                    }}
                                >
                                    UR TOUR TOUR
                                    <b
                                        style={{
                                            color: "#fff",
                                        }}
                                    >
                                        {" TOUR "}
                                    </b>
                                    TOUR TOUR TOUR TOUR
                                </div>
                                <div
                                    style={{
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        transform: "rotate(180deg)",
                                        marginBottom: "-0.05em",
                                    }}
                                >
                                    R TOUR TOUR TOUR TOUR
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
                                    alignItems: "flex-start",
                                }}
                            >
                                <div
                                    style={{
                                        width: "100vw",
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
                                        alignItems: "flex-end",
                                        background: "black",
                                        zIndex: "2",
                                        marginBottom: "0.5px",
                                        marginLeft: "10vw",
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
                                            height: "25.5vw",
                                            width: "25.5vw",
                                            position: "relative",
                                            overflow: "hidden",
                                            zIndex: "2",
                                        }}
                                    >
                                        <Image
                                            src={"/malebust.png"}
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

                    <div
                        className="hstack"
                        style={{
                            paddingLeft: "10vw",
                        }}
                    >
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
                                style={{ position: "relative" }}
                            >
                                <div
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        position: "absolute",
                                        overflow: "hidden",
                                    }}
                                >
                                    <Image
                                        src={data.background}
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
                                        zIndex: "2",
                                        paddingInline: "4vw",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontWeight: "700",
                                            fontSize: "3.2vw",
                                            textTransform: "uppercase",
                                            lineHeight: "120%",
                                            marginTop: "8vw",
                                        }}
                                    >
                                        {data.title}
                                    </div>
                                    <div
                                        style={{
                                            fontWeight: "400",
                                            fontSize: "1.4vw",
                                            lineHeight: "135%",
                                            marginTop: "2vw",
                                        }}
                                    >
                                        {data.description}
                                    </div>
                                    <div
                                        style={{
                                            fontWeight: "700",
                                            fontSize: "3.2vw",
                                            textTransform: "uppercase",
                                            lineHeight: "120%",
                                            marginTop: "6vw",
                                        }}
                                    >
                                        {data.date}
                                    </div>
                                    <div
                                        style={{
                                            fontWeight: "300",
                                            fontSize: "2vw",
                                            lineHeight: "120%",
                                            marginTop: "1vw",
                                        }}
                                    >
                                        {data.startDate} - {data.endDate}
                                    </div>
                                    <div
                                        style={{
                                            fontWeight: "700",
                                            fontSize: "3.2vw",
                                            lineHeight: "120%",
                                            marginTop: "6vw",
                                        }}
                                    >
                                        ARTISTS
                                    </div>
                                    {data.artists.map((username) => {
                                        return (
                                            <div
                                                className="hstack"
                                                style={{}}
                                                key={username}
                                            >
                                                <Link
                                                    style={{
                                                        fontWeight: "500",
                                                        fontSize: "1.4vw",
                                                        marginTop: "2vw",
                                                    }}
                                                    href={
                                                        "https://www.instagram.com/" +
                                                        username +
                                                        "/"
                                                    }
                                                >
                                                    @{username}
                                                </Link>
                                            </div>
                                        );
                                    })}
                                    <div
                                        style={{
                                            height: "6vw",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="vstack"
                            style={{ width: "39vw", marginLeft: "6vw" }}
                        >
                            <p className="paragrapgh" style={{}}>
                                To book an appointment with Larnelle, you can
                                reach out via Instagram or send an email.
                            </p>
                            <p className="subtitle" style={{}}>
                                INSTAGRAM
                            </p>
                            <ArrowLink href="https://www.instagram.com/larnelle.art/">
                                @Larnelle.Art
                            </ArrowLink>
                            <p className="subtitle" style={{}}>
                                EMAIL
                            </p>
                            <p className="text" style={{}}>
                                Larnellepienaar@yahoo.com
                            </p>

                            <Link
                                href={"book"}
                                className="hstack"
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "auto",
                                    zIndex: "2",
                                    border: "0.14vw solid white",
                                    gap: "2vw",
                                    paddingBlock: "1vw",
                                    marginInline: "3vw",
                                    marginTop: "8vw",
                                    marginBottom: "6vw",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "2vw",
                                        fontWeight: "200",
                                    }}
                                >
                                    LEARN MORE
                                </div>
                                <Arrow
                                    height={1}
                                    width={4}
                                    lineThickness={0.14}
                                />
                            </Link>
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

                    <Footer page={"tour"} />
                </div>
            </div>
        </Fragment>
    );
}
