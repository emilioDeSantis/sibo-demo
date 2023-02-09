import Image from "next/image";

export default function Subtitle({ text, href }) {
    return (
        <div className="vstack" style={{
            justifyContent: 'flex-end',
            marginTop: '12vw',
        }}>
            <div
                style={{
                    height: "56vw",
                    width: "100vw",
                    position: "relative",
                    overflow: "hidden",
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
                        opacity: "40%",
                    }}
                />

                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        position: "absolute",
                        background:
                            "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
                    }}
                />
            </div>
            <div
                className="vstack"
                style={{
                    paddingLeft: "2vw",
                    position: 'absolute',
                    width: "100%",
                }}
            >
                <div
                    style={{
                        fontSize: '15vw',
                        fontWeight: '200',
                        lineHeight: '96%',
                    }}
                >{text}</div>

                <div
                    style={{
                        width: "100%",
                        height: "1px",
                        background: "white",
                    }}
                ></div>
            </div>
        </div>
    );
}
