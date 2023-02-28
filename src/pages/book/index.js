import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Arrow from "../../components/Arrow";
import ArrowButton from "../../components/ArrowButton";
import ArrowLink from "../../components/ArrowLink";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";

export default function Book() {
    return (
        <Fragment>
            <NextSeo title="Book | Larnelle Art" />
            <div className="show-in-mobile">
                <div className="vstack">
                    <Header
                        title={"BOOK"}
                        href={"/bust-with-beard 2.png"}
                        textOffset={75}
                        imageHeight="82.35vw"
                    />
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
                    <Subtitle text={"THE MUZEOM"} href={"/bg1.png"} />

                    <p className="paragrapgh" style={{}}>
                        Larnelle is the owner of The Muzeom tattoo shop in
                        Johannesburg.
                    </p>

                    <div
                        className="hstack"
                        style={{
                            alignItems: "flex-start",
                        }}
                    >
                        <div
                            className="vstack"
                            style={{
                                width: "48vw",
                            }}
                        >
                            <p className="subtitle" style={{}}>
                                LOCATION
                            </p>
                            <ArrowLink
                                href={
                                    "https://www.google.com/maps/place/The+Muzeom/@-26.1930242,28.2393038,17z/data=!4m15!1m8!3m7!1s0x1e9516fb36e25a41:0xf497cba699120b56!2s1+Foley+St,+Jan+Smuts+Ville,+Boksburg,+1459,+South+Africa!3b1!8m2!3d-26.193029!4d28.2414925!16s%2Fg%2F11fsms442p!3m5!1s0x1e951907bce9ae17:0x3e36279ba4360247!8m2!3d-26.1929339!4d28.2420257!16s%2Fg%2F11p3dk1y1t"
                                }
                            >
                                1 Foley St, <br></br>
                                Jan Smuts Ville, <br></br>
                                Boksburg, <br></br>
                                1459, <br></br>
                                South Africa
                            </ArrowLink>
                        </div>
                        <div className="vstack" style={{}}>
                            <p className="subtitle" style={{}}>
                                HOURS
                            </p>
                            <p className="text" style={{}}>
                                Mon-Sat, <br></br>
                                10am-5pm,
                            </p>
                            <p className="subtitle" style={{}}>
                                INSTAGRAM
                            </p>
                            <ArrowLink
                                href={"https://www.instagram.com/the_muzeom/"}
                            >
                                @The_Muzeom
                            </ArrowLink>
                        </div>
                    </div>
                    <div
                        className="hstack"
                        style={{
                            width: "100vw",
                            justifyContent: "center",
                            paddingTop: "32vw",
                        }}
                    >
                        <ArrowButton name="TOUR" href="/tour" thin={true} />
                    </div>
                    <Subtitle text={"PROCEDURE"} href={"/bg2.png"} />

                    <p className="paragrapgh" style={{}}>
                        Getting a tattoo is a big decision, and we want to make
                        sure the process is as smooth and comfortable as
                        possible. The first step is to book a consultation with
                        Larnelle, either in person or via email/Instagram.
                        During the consultation, you will have the opportunity
                        to discuss your ideas and work with Larnelle to design a
                        custom tattoo that is perfect for you. If you already
                        have a design in mind, bring in reference materials and
                        Larnelle will help bring your vision to life. Once the
                        design is finalized, you will book a time for your
                        tattoo appointment. On the day of the appointment, we
                        will provide aftercare instructions to ensure your
                        tattoo heals properly. We take pride in creating unique
                        and high-quality tattoos that our clients will cherish
                        for a lifetime.
                    </p>
                    <Subtitle text={"POLICY"} href={"/bg3.png"} />

                    <p className="paragrapgh" style={{}}>
                        At The Muzeom, we take the health and safety of our
                        clients and staff very seriously. We require all clients
                        to show proof of ID and provide a valid signature on a
                        consent form before getting a tattoo. We also follow
                        strict sterilization procedures, using only single-use
                        needles and supplies to minimize the risk of infection.
                        If you are feeling unwell or have any contagious skin
                        conditions, we ask that you reschedule your appointment.
                        We want you to have a positive and safe experience, so
                        please feel free to ask any questions or voice any
                        concerns during your consultation or appointment.
                    </p>
                    <Subtitle text={"PRICING"} href={"/bg4.png"} />

                    <p className="paragrapgh" style={{}}>
                        The final cost of a tattoo depends on several factors,
                        such as the size, complexity, and placement of the
                        design. During your consultation, Larnelle will provide
                        a quote based on these factors and answer any questions
                        you have about the pricing. We accept cash and most
                        major credit cards for payment and require a
                        non-refundable deposit to book your appointment. If you
                        have any questions about our pricing or payment options,
                        please do not hesitate to ask.
                    </p>
                    <Subtitle text={"AFTERCARE"} href={"/bg5.png"} />

                    <p className="paragrapgh" style={{}}>
                        Taking proper care of your new tattoo is crucial for
                        ensuring it heals well and retains its vibrant color and
                        detail. In general, it is important to keep your tattoo
                        clean and dry, avoiding soaking it in water or exposing
                        it to the sun. You may experience some itching and
                        peeling during the healing process, but it is important
                        to resist the urge to pick or scratch the area. If you
                        have any questions or concerns about the healing of your
                        tattoo, please do not hesitate to contact us. Keep the
                        bandage on for a minimum of 2-4 hours.<br></br>
                        <br></br>
                        1. Gently remove the bandage and wash the area with warm
                        water and a mild, fragrance-free soap. Pat the area dry
                        with a clean towel.<br></br>
                        <br></br>
                        2. Apply a thin layer of aftercare ointment, such as
                        Aquaphor or a product recommended by your artist.
                        <br></br>
                        <br></br>
                        3. Repeat the washing and aftercare application process
                        2-3 times a day for the first 2-3 days.<br></br>
                        <br></br>
                        4. Avoid soaking the tattoo, such as in a bath or pool,
                        for the first 2 weeks.<br></br>
                        <br></br>
                        5. Avoid exposing the tattoo to direct sunlight or
                        excessive heat for the first 2 weeks.<br></br>
                        <br></br>
                        6. If you experience any redness, swelling, or
                        discharge, please contact your artist or a medical
                        professional.<br></br>
                        <br></br>
                        7. Keep the area moisturized and protected with a high
                        SPF sunscreen after it has fully healed.
                    </p>

                    <Subtitle text={"F.A.Q."} href={"/bg6.png"} />

                    <p className="paragrapgh" style={{}}>
                        <b style={{ fontWeight: "600" }}>
                            Q: Is getting a tattoo safe?
                        </b>
                        <br></br>
                        A: Yes, getting a tattoo is safe when done by a
                        professional tattoo artist using sterile equipment and
                        following proper health and safety protocols.<br></br>
                        <br></br>
                        <b style={{ fontWeight: "600" }}>
                            Q: How do I choose a design?
                        </b>
                        <br></br>
                        A: You can choose a design from the tattoo artists
                        portfolio, bring in a picture or image for inspiration,
                        or work with the artist to create a custom design.
                        <br></br>
                        <br></br>
                        <b style={{ fontWeight: "600" }}>
                            Q: What should I expect during the tattoo process?
                        </b>
                        <br></br>
                        A: During the tattoo process, you can expect the artist
                        to clean and prepare the skin, outline the design, and
                        fill in the tattoo with ink. The process can take
                        anywhere from a few minutes to several hours, depending
                        on the size and complexity of the design.<br></br>
                        <br></br>
                        <b style={{ fontWeight: "600" }}>
                            Q: How should I care for my new tattoo?
                        </b>
                        <br></br>
                        A: It is important to keep the tattoo clean and
                        moisturized during the healing process. The artist will
                        provide aftercare instructions and recommend products to
                        use.<br></br>
                        <br></br>
                        <b style={{ fontWeight: "600" }}>
                            Q: What are the aftercare instructions for my
                            tattoo?
                        </b>
                        <br></br>
                        A: Aftercare instructions will vary depending on the
                        artist, but generally include cleaning the tattoo with
                        soap and water, avoiding swimming, direct sunlight, and
                        picking at scabs.<br></br>
                        <br></br>
                        <b style={{ fontWeight: "600" }}>
                            Q: Can I bring my own design or picture for my
                            tattoo?
                        </b>
                        <br></br>
                        A: Yes, you can bring in a design or picture for
                        inspiration, but the final design may be modified by the
                        artist to fit the specific placement and dimensions of
                        the tattoo.<br></br>
                        <br></br>
                        <b style={{ fontWeight: "600" }}>
                            Q: How much does a tattoo cost?
                        </b>
                        ƒ<br></br>
                        A: The cost of a tattoo will vary depending on the size,
                        complexity, and location of the design. It is best to
                        contact the artist for a quote or to discuss pricing
                        options.<br></br>
                        <br></br>
                        <b style={{ fontWeight: "600" }}>
                            Q: How long does it take for a tattoo to heal?
                        </b>
                        <br></br>
                        A: The healing time for a tattoo will vary, but it
                        usually takes 2-4 weeks for the outer layer of skin to
                        heal. The ink will continue to settle and fade over the
                        next few months.<br></br>
                        <br></br>
                        <b style={{ fontWeight: "600" }}>
                            Q: Can I bring someone with me to the tattoo
                            appointment?
                        </b>
                        <br></br>
                        A: Yes, you can bring a friend or family member with you
                        to the tattoo appointment if you feel more comfortable.
                        <br></br>
                        <br></br>
                        <b style={{ fontWeight: "600" }}>
                            Q: What should I do if I have an allergic reaction
                            to the tattoo?
                        </b>
                        <br></br>
                        A: If you have an allergic reaction to the tattoo, it is
                        important to contact the artist and seek medical
                        attention. The artist can advise on the best course of
                        action.<br></br>
                        <br></br>
                    </p>
                    <Footer page={"book"} />
                </div>
            </div>
            <div className="show-in-desktop">
                <div className="vstack">
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
                                    BOOK BOOK BOK BOOK BOOK BOOK
                                </div>
                                <div
                                    style={{
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        transform: `translate(3vw,0)`,
                                    }}
                                >
                                    OOK
                                    <b
                                        style={{
                                            color: "#fff",
                                        }}
                                    >
                                        {" BOOK "}
                                    </b>
                                    BOOK BOOK BOK BOOK BOOK BOOK
                                </div>
                                <div
                                    style={{
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        transform: "rotate(180deg)",
                                        marginBottom: "-0.05em",
                                    }}
                                >
                                    BOOK BOOK BOK BOOK BOOK BOOK
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
                                        width: "38vw",
                                        height: "22.7vw",
                                        justifyContent: "space-between",
                                        alignItems: "flex-end",
                                        background: "black",
                                        zIndex: "2",
                                        marginBottom: "0.5px",
                                        marginRight: "10vw",
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
                                            height: "25vw",
                                            width: "25vw",
                                            position: "relative",
                                            overflow: "hidden",
                                            zIndex: "2",
                                        }}
                                    >
                                        <Image
                                            src={"/bust-with-beard 1.png"}
                                            alt="test"
                                            fill
                                            sizes="40vw"
                                            priority
                                            style={{
                                                objectFit: "cover",
                                                transform: "scaleX(-1)",
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
                            paddingRight: "10vw",
                            width: "100vw",
                            position: "relative",
                            justifyContent: "flex-end",
                            zIndex: "2",
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
                                style={{
                                    background: "black",
                                    width: "100%",
                                }}
                            >
                                <p className="paragrapgh" style={{}}>
                                    To book an appointment with Larnelle, you
                                    can reach out via Instagram or send an
                                    email.
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

                                <Subtitle
                                    text={"THE MUZEOM"}
                                    href={"/bg1.png"}
                                />

                                <p className="paragrapgh" style={{}}>
                                    Larnelle is the owner of The Muzeom tattoo
                                    shop in Johannesburg.
                                </p>

                                <div
                                    className="hstack"
                                    style={{
                                        alignItems: "flex-start",
                                    }}
                                >
                                    <div
                                        className="vstack"
                                        style={{
                                            width: "17vw",
                                        }}
                                    >
                                        <p className="subtitle" style={{}}>
                                            LOCATION
                                        </p>
                                        <ArrowLink
                                            href={
                                                "https://www.google.com/maps/place/The+Muzeom/@-26.1930242,28.2393038,17z/data=!4m15!1m8!3m7!1s0x1e9516fb36e25a41:0xf497cba699120b56!2s1+Foley+St,+Jan+Smuts+Ville,+Boksburg,+1459,+South+Africa!3b1!8m2!3d-26.193029!4d28.2414925!16s%2Fg%2F11fsms442p!3m5!1s0x1e951907bce9ae17:0x3e36279ba4360247!8m2!3d-26.1929339!4d28.2420257!16s%2Fg%2F11p3dk1y1t"
                                            }
                                        >
                                            1 Foley St, <br></br>
                                            Jan Smuts Ville, <br></br>
                                            Boksburg, <br></br>
                                            1459, <br></br>
                                            South Africa
                                        </ArrowLink>
                                    </div>
                                    <div className="vstack" style={{}}>
                                        <p className="subtitle" style={{}}>
                                            HOURS
                                        </p>
                                        <p className="text" style={{}}>
                                            Mon-Sat, <br></br>
                                            10am-5pm,
                                        </p>
                                        <p className="subtitle" style={{}}>
                                            INSTAGRAM
                                        </p>
                                        <ArrowLink
                                            href={
                                                "https://www.instagram.com/the_muzeom/"
                                            }
                                        >
                                            @The_Muzeom
                                        </ArrowLink>
                                    </div>
                                </div>
                                <Link
                                    href={"tour"}
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
                                        marginBottom: "10vw",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: "2vw",
                                            fontWeight: "200",
                                        }}
                                    >
                                        TOUR
                                    </div>
                                    <Arrow
                                        height={1}
                                        width={4}
                                        lineThickness={0.14}
                                    />
                                </Link>
                                <Subtitle
                                    text={"PROCEDURE"}
                                    href={"/bg2.png"}
                                />

                                <p
                                    className="paragrapgh"
                                    style={{
                                        marginBottom: "6vw",
                                    }}
                                >
                                    Getting a tattoo is a big decision, and we
                                    want to make sure the process is as smooth
                                    and comfortable as possible. The first step
                                    is to book a consultation with Larnelle,
                                    either in person or via email/Instagram.
                                    During the consultation, you will have the
                                    opportunity to discuss your ideas and work
                                    with Larnelle to design a custom tattoo that
                                    is perfect for you. If you already have a
                                    design in mind, bring in reference materials
                                    and Larnelle will help bring your vision to
                                    life. Once the design is finalized, you will
                                    book a time for your tattoo appointment. On
                                    the day of the appointment, we will provide
                                    aftercare instructions to ensure your tattoo
                                    heals properly. We take pride in creating
                                    unique and high-quality tattoos that our
                                    clients will cherish for a lifetime.
                                </p>
                                <Subtitle text={"POLICY"} href={"/bg3.png"} />

                                <p
                                    className="paragrapgh"
                                    style={{
                                        marginBottom: "14.6vw",
                                    }}
                                >
                                    At The Muzeom, we take the health and safety
                                    of our clients and staff very seriously. We
                                    require all clients to show proof of ID and
                                    provide a valid signature on a consent form
                                    before getting a tattoo. We also follow
                                    strict sterilization procedures, using only
                                    single-use needles and supplies to minimize
                                    the risk of infection. If you are feeling
                                    unwell or have any contagious skin
                                    conditions, we ask that you reschedule your
                                    appointment. We want you to have a positive
                                    and safe experience, so please feel free to
                                    ask any questions or voice any concerns
                                    during your consultation or appointment.
                                </p>
                                <Subtitle text={"PRICING"} href={"/bg4.png"} />

                                <p
                                    className="paragrapgh"
                                    style={{
                                        marginBottom: "21vw",
                                    }}
                                >
                                    The final cost of a tattoo depends on
                                    several factors, such as the size,
                                    complexity, and placement of the design.
                                    During your consultation, Larnelle will
                                    provide a quote based on these factors and
                                    answer any questions you have about the
                                    pricing. We accept cash and most major
                                    credit cards for payment and require a
                                    non-refundable deposit to book your
                                    appointment. If you have any questions about
                                    our pricing or payment options, please do
                                    not hesitate to ask.
                                </p>

                                <Subtitle
                                    text={"AFTERCARE"}
                                    href={"/bg5.png"}
                                />

                                <p className="paragrapgh" style={{}}>
                                    Taking proper care of your new tattoo is
                                    crucial for ensuring it heals well and
                                    retains its vibrant color and detail. In
                                    general, it is important to keep your tattoo
                                    clean and dry, avoiding soaking it in water
                                    or exposing it to the sun. You may
                                    experience some itching and peeling during
                                    the healing process, but it is important to
                                    resist the urge to pick or scratch the area.
                                    If you have any questions or concerns about
                                    the healing of your tattoo, please do not
                                    hesitate to contact us. Keep the bandage on
                                    for a minimum of 2-4 hours.<br></br>
                                    <br></br>
                                    1. Gently remove the bandage and wash the
                                    area with warm water and a mild,
                                    fragrance-free soap. Pat the area dry with a
                                    clean towel.<br></br>
                                    <br></br>
                                    2. Apply a thin layer of aftercare ointment,
                                    such as Aquaphor or a product recommended by
                                    your artist.
                                    <br></br>
                                    <br></br>
                                    3. Repeat the washing and aftercare
                                    application process 2-3 times a day for the
                                    first 2-3 days.<br></br>
                                    <br></br>
                                    4. Avoid soaking the tattoo, such as in a
                                    bath or pool, for the first 2 weeks.
                                    <br></br>
                                    <br></br>
                                    5. Avoid exposing the tattoo to direct
                                    sunlight or excessive heat for the first 2
                                    weeks.<br></br>
                                    <br></br>
                                    6. If you experience any redness, swelling,
                                    or discharge, please contact your artist or
                                    a medical professional.<br></br>
                                    <br></br>
                                    7. Keep the area moisturized and protected
                                    with a high SPF sunscreen after it has fully
                                    healed.
                                </p>

                                <Subtitle text={"F.A.Q."} href={"/bg6.png"} />

                                <p className="paragrapgh" style={{}}>
                                    <b style={{ fontWeight: "600" }}>
                                        Q: Is getting a tattoo safe?
                                    </b>
                                    <br></br>
                                    A: Yes, getting a tattoo is safe when done
                                    by a professional tattoo artist using
                                    sterile equipment and following proper
                                    health and safety protocols.<br></br>
                                    <br></br>
                                    <b style={{ fontWeight: "600" }}>
                                        Q: How do I choose a design?
                                    </b>
                                    <br></br>
                                    A: You can choose a design from the tattoo
                                    artists portfolio, bring in a picture or
                                    image for inspiration, or work with the
                                    artist to create a custom design.
                                    <br></br>
                                    <br></br>
                                    <b style={{ fontWeight: "600" }}>
                                        Q: What should I expect during the
                                        tattoo process?
                                    </b>
                                    <br></br>
                                    A: During the tattoo process, you can expect
                                    the artist to clean and prepare the skin,
                                    outline the design, and fill in the tattoo
                                    with ink. The process can take anywhere from
                                    a few minutes to several hours, depending on
                                    the size and complexity of the design.
                                    <br></br>
                                    <br></br>
                                    <b style={{ fontWeight: "600" }}>
                                        Q: How should I care for my new tattoo?
                                    </b>
                                    <br></br>
                                    A: It is important to keep the tattoo clean
                                    and moisturized during the healing process.
                                    The artist will provide aftercare
                                    instructions and recommend products to use.
                                    <br></br>
                                    <br></br>
                                    <b style={{ fontWeight: "600" }}>
                                        Q: What are the aftercare instructions
                                        for my tattoo?
                                    </b>
                                    <br></br>
                                    A: Aftercare instructions will vary
                                    depending on the artist, but generally
                                    include cleaning the tattoo with soap and
                                    water, avoiding swimming, direct sunlight,
                                    and picking at scabs.<br></br>
                                    <br></br>
                                    <b style={{ fontWeight: "600" }}>
                                        Q: Can I bring my own design or picture
                                        for my tattoo?
                                    </b>
                                    <br></br>
                                    A: Yes, you can bring in a design or picture
                                    for inspiration, but the final design may be
                                    modified by the artist to fit the specific
                                    placement and dimensions of the tattoo.
                                    <br></br>
                                    <br></br>
                                    <b style={{ fontWeight: "600" }}>
                                        Q: How much does a tattoo cost?
                                    </b>
                                    ƒ<br></br>
                                    A: The cost of a tattoo will vary depending
                                    on the size, complexity, and location of the
                                    design. It is best to contact the artist for
                                    a quote or to discuss pricing options.
                                    <br></br>
                                    <br></br>
                                    <b style={{ fontWeight: "600" }}>
                                        Q: How long does it take for a tattoo to
                                        heal?
                                    </b>
                                    <br></br>
                                    A: The healing time for a tattoo will vary,
                                    but it usually takes 2-4 weeks for the outer
                                    layer of skin to heal. The ink will continue
                                    to settle and fade over the next few months.
                                    <br></br>
                                    <br></br>
                                    <b style={{ fontWeight: "600" }}>
                                        Q: Can I bring someone with me to the
                                        tattoo appointment?
                                    </b>
                                    <br></br>
                                    A: Yes, you can bring a friend or family
                                    member with you to the tattoo appointment if
                                    you feel more comfortable.
                                    <br></br>
                                    <br></br>
                                    <b style={{ fontWeight: "600" }}>
                                        Q: What should I do if I have an
                                        allergic reaction to the tattoo?
                                    </b>
                                    <br></br>
                                    A: If you have an allergic reaction to the
                                    tattoo, it is important to contact the
                                    artist and seek medical attention. The
                                    artist can advise on the best course of
                                    action.<br></br>
                                    <br></br>
                                </p>
                                <div
                                    style={{
                                        height: "4vw",
                                    }}
                                />
                            </div>
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
                    <Footer page={"book"} />
                </div>
            </div>
        </Fragment>
    );
}
