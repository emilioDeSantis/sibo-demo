import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import ArrowButton from "../../components/ArrowButton";
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
    return (
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
                            <div className="hstack" style={{}} key={username}>
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
                        height: "1px",
                        width: "100vw",
                        background: "white",
                        zIndex: 3,
                    }}
                ></div>
            </div>

            <p className="paragrapgh" style={{}}>
                To book an appointment with Larnelle, you can reach out via
                Instagram or send an email.
            </p>
            <p className="subtitle" style={{}}>
                INSTAGRAM
            </p>
            <p className="text" style={{}}>
                {"@Larnelle.Art -->"}
            </p>
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
    );
}
