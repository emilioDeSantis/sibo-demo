import { useEffect, useState } from "react";
import useMousePosition from "../hooks/useMousePosition";
import useWindowSize from "../hooks/useWindowSize";

export default function Test({}) {
    const [array, setArray] = useState([...Array(16).keys()]);
    const mousePosition = useMousePosition();
    const windowSize = useWindowSize();
    const [distance, setDistance] = useState(0);
    const [xComp, setXComp] = useState(1);
    const [yComp, setYComp] = useState(0);

    function sig(x) {
        return ((1 / (1 + Math.exp(-x)) - 0.5) * 2) / (Math.abs(x * 1) + 1);
    }

    useEffect(() => {
        let dx = mousePosition.x - windowSize.width / 2;
        let dy = mousePosition.y - windowSize.height / 2;
        let d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        setDistance(d);
        setXComp(dx / d);
        setYComp(dy / d);
    }, [mousePosition, windowSize]);
    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
            }}
        >
            {array.map((i) => {
                return (
                    <div
                        key = {i}
                        className="hstack"
                        style={{
                            position: "absolute",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            width: "100%",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                width: (i + 1) * 80 + "px",
                                aspectRatio: "1",
                                borderRadius: "100%",
                                borderColor: "white",
                                borderWidth: "30px",
                                borderStyle: "solid",
                                transition: "2s ease-out",
                                transform: `translate(${
                                    sig((distance - ((i + 1) * 80) / 2) / 100) *
                                    xComp *
                                    -200
                                }px, ${
                                    sig((distance - ((i + 1) * 80) / 2) / 100) *
                                    yComp *
                                    -200
                                }px)`,
                            }}
                        ></div>
                    </div>
                );
            })}
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    position: 'absolute',
                    background: 'linear-gradient(90deg, rgba(62,255,163,1) 0%, rgba(112,119,255,1) 50%, rgba(233,43,255,1) 100%)',
                    mixBlendMode: 'darken',
                }}
            />
        </div>
    );
}
