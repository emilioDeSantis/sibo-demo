import Image from "next/image";
import ArrowButton from "../../components/ArrowButton";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Subtitle from "../../components/Subtitle";

export default function Book() {
    return (
        <div className="vstack">
            <Header title={'BOOK'} href={"/bust-with-beard 2.png"} textOffset={75} imageHeight="82.35vw"/>
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
            <Subtitle text={"THE MUZEOM"} href={"/church1.png"} />

            <p className="paragrapgh" style={{}}>
                Larnelle is the owner of The Muzeom tattoo shop in Johannesburg.
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
                    <p className="text" style={{}}>
                        1 Foley St, <br></br>
                        Jan Smuts Ville, <br></br>
                        Boksburg, <br></br>
                        1459, <br></br>
                        South Africa{" -->"}
                    </p>
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
                    <p className="text" style={{}}>
                        @The_Muzeom{" -->"}
                    </p>
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
            <Subtitle text={"PROCEDURE"} href={"/church1.png"} />

            <p className="paragrapgh" style={{}}>
                Getting a tattoo is a big decision, and we want to make sure the
                process is as smooth and comfortable as possible. The first step
                is to book a consultation with Larnelle, either in person or via
                email/Instagram. During the consultation, you will have the
                opportunity to discuss your ideas and work with Larnelle to
                design a custom tattoo that is perfect for you. If you already
                have a design in mind, bring in reference materials and Larnelle
                will help bring your vision to life. Once the design is
                finalized, you will book a time for your tattoo appointment. On
                the day of the appointment, we will provide aftercare
                instructions to ensure your tattoo heals properly. We take pride
                in creating unique and high-quality tattoos that our clients
                will cherish for a lifetime.
            </p>
            <Subtitle text={"POLICY"} href={"/church1.png"} />

            <p className="paragrapgh" style={{}}>
                At The Muzeom, we take the health and safety of our clients and
                staff very seriously. We require all clients to show proof of ID
                and provide a valid signature on a consent form before getting a
                tattoo. We also follow strict sterilization procedures, using
                only single-use needles and supplies to minimize the risk of
                infection. If you are feeling unwell or have any contagious skin
                conditions, we ask that you reschedule your appointment. We want
                you to have a positive and safe experience, so please feel free
                to ask any questions or voice any concerns during your
                consultation or appointment.
            </p>
            <Subtitle text={"PRICING"} href={"/church1.png"} />

            <p className="paragrapgh" style={{}}>
                The final cost of a tattoo depends on several factors, such as
                the size, complexity, and placement of the design. During your
                consultation, Larnelle will provide a quote based on these
                factors and answer any questions you have about the pricing. We
                accept cash and most major credit cards for payment and require
                a non-refundable deposit to book your appointment. If you have
                any questions about our pricing or payment options, please do not
                hesitate to ask.
            </p>
            <Subtitle text={"AFTERCARE"} href={"/church1.png"} />

            <p className="paragrapgh" style={{}}>
                Taking proper care of your new tattoo is crucial for ensuring it
                heals well and retains its vibrant color and detail. In general,
                it is important to keep your tattoo clean and dry, avoiding
                soaking it in water or exposing it to the sun. You may
                experience some itching and peeling during the healing process,
                but it is important to resist the urge to pick or scratch the
                area. If you have any questions or concerns about the healing of
                your tattoo, please do not hesitate to contact us.
                Keep the bandage on for a minimum of 2-4 hours.<br></br><br></br>

1. Gently remove the bandage and wash the area with warm water and a mild, fragrance-free soap. Pat the area dry with a clean towel.<br></br><br></br>

2. Apply a thin layer of aftercare ointment, such as Aquaphor or a product recommended by your artist.<br></br><br></br>

3. Repeat the washing and aftercare application process 2-3 times a day for the first 2-3 days.<br></br><br></br>

4. Avoid soaking the tattoo, such as in a bath or pool, for the first 2 weeks.<br></br><br></br>

5. Avoid exposing the tattoo to direct sunlight or excessive heat for the first 2 weeks.<br></br><br></br>

6. If you experience any redness, swelling, or discharge, please contact your artist or a medical professional.<br></br><br></br>

7. Keep the area moisturized and protected with a high SPF sunscreen after it has fully healed.
            </p>

            <Subtitle text={"F.A.Q."} href={"/church1.png"} />

            <p className="paragrapgh" style={{}}>
            <b style={{fontWeight: '600'}}>Q: Is getting a tattoo safe?</b><br></br>
A: Yes, getting a tattoo is safe when done by a professional tattoo artist using sterile equipment and following proper health and safety protocols.<br></br><br></br>

<b style={{fontWeight: '600'}}>Q: How do I choose a design?</b><br></br>
A: You can choose a design from the tattoo artists portfolio, bring in a picture or image for inspiration, or work with the artist to create a custom design.<br></br><br></br>

<b style={{fontWeight: '600'}}>Q: What should I expect during the tattoo process?</b><br></br>
A: During the tattoo process, you can expect the artist to clean and prepare the skin, outline the design, and fill in the tattoo with ink. The process can take anywhere from a few minutes to several hours, depending on the size and complexity of the design.<br></br><br></br>

<b style={{fontWeight: '600'}}>Q: How should I care for my new tattoo?</b><br></br>
A: It is important to keep the tattoo clean and moisturized during the healing process. The artist will provide aftercare instructions and recommend products to use.<br></br><br></br>

<b style={{fontWeight: '600'}}>Q: What are the aftercare instructions for my tattoo?</b><br></br>
A: Aftercare instructions will vary depending on the artist, but generally include cleaning the tattoo with soap and water, avoiding swimming, direct sunlight, and picking at scabs.<br></br><br></br>

<b style={{fontWeight: '600'}}>Q: Can I bring my own design or picture for my tattoo?</b><br></br>
A: Yes, you can bring in a design or picture for inspiration, but the final design may be modified by the artist to fit the specific placement and dimensions of the tattoo.<br></br><br></br>

<b style={{fontWeight: '600'}}>Q: How much does a tattoo cost?</b>ƒ<br></br>
A: The cost of a tattoo will vary depending on the size, complexity, and location of the design. It is best to contact the artist for a quote or to discuss pricing options.<br></br><br></br>

<b style={{fontWeight: '600'}}>Q: How long does it take for a tattoo to heal?</b><br></br>
A: The healing time for a tattoo will vary, but it usually takes 2-4 weeks for the outer layer of skin to heal. The ink will continue to settle and fade over the next few months.<br></br><br></br>

<b style={{fontWeight: '600'}}>Q: Can I bring someone with me to the tattoo appointment?</b><br></br>
A: Yes, you can bring a friend or family member with you to the tattoo appointment if you feel more comfortable.<br></br><br></br>

<b style={{fontWeight: '600'}}>Q: What should I do if I have an allergic reaction to the tattoo?</b><br></br>
A: If you have an allergic reaction to the tattoo, it is important to contact the artist and seek medical attention. The artist can advise on the best course of action.<br></br><br></br>
            </p>
            <Footer page={'book'}/>
        </div>
    );
}
