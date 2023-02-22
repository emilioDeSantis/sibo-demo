import Link from "next/link";
import Arrow from "./Arrow";

export default function ArrowLink({ children, href }) {
    return (
        <Link
            href={href}
            className="hstack"
            style={{
                alignItems: "flex-end",
            }}
        >
            <div style={{}} className="text">
                {children}
            </div>
            <div
                className="show-in-mobile"
                style={{
                    opacity: "70%",
                    marginBottom: '1.5vw',
                }}
            >
                <Arrow height={2.4} width={6} lineThickness={0.36} />
            </div>

            <div
                className="show-in-desktop"
                style={{
                    opacity: "70%",
                    marginBottom: '0.5vw',
                    marginLeft: '-2vw',
                }}
            >
                <Arrow height={0.7} width={2} lineThickness={0.1} />
            </div>
        </Link>
    );
}
