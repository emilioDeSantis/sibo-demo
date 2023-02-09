import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import ArrowButton from "../../components/ArrowButton";
import Footer from "../../components/Footer";

export default function Tour() {
    // useEffect(() => {
    //     return () => {
    //         getPhoto("larnelle.art");
    //     };
    // }, []);

    function getPhoto(a) {
        // validation for instagram usernames
        var regex = new RegExp(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/);
        var validation = regex.test(a);

        if (validation) {
            // $.get("https://www.instagram.com/"+a+"/?__a=1")
            $.get("https://www.instagram.com/larnelle.art?__a=1/")
                .done(function (data) {
                    // getting the url
                    var photoURL =
                        data["graphql"]["user"]["profile_pic_url_hd"];

                    // update img element
                    console.log(photoURL);
                })
                .fail(function () {
                    // code for 404 error
                    alert("Username was not found!");
                });
        } else {
            alert("The username is invalid!");
        }
    }

    const data = {
        title: "Mozambique Tattoo Tour",
        startDate: "date",
        endDate: "date",
        instagramUsernames: [
            "larnelle.art",
            "mattie_tattoo",
            "brooklynnmancer",
        ],
        image: "/tour.png",
        paragraph:
            "WE ARE BRINGING THE WHOLE TEAM!!!! AGAIN! 16th February - 25th February 2023. SPACE IS LIMITED Bookings are ESSENTIAL, do not miss out on getting inked by any one of our talented artists this trip!!",
    };
    return (
        <div className="vstack" style={{}}>
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
                        src="/tour background.png"
                        alt="test"
                        fill
                        sizes="100vw"
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
                            marginTop: "8vw",
                        }}
                    >
                        {data.title}
                    </div>
                    <div
                        style={{
                            fontWeight: "400",
                            fontSize: "4vw",
                            lineHeight: "135%",
                            marginTop: "6vw",
                        }}
                    >
                        {data.paragraph}
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
                        FEBRUARY 2023
                    </div>
                    <div
                        style={{
                            fontWeight: "300",
                            fontSize: "7vw",
                            lineHeight: "120%",
                            marginTop: "2vw",
                        }}
                    >
                        16/02/23 - 25/02/23
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
                    {data.instagramUsernames.map((username) => {
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
                            height: "6vw",
                        }}
                    ></div>
                </div>
                <div
                    style={{
                        height: "0.3px",
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
