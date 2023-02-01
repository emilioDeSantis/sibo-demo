import Link from "next/link";
import Arrow from "./Arrow";


export default function ArrowButton({ href, name, width, thin }) {
    return (
        <Link
            href={href}
            className="hstack"
            style={{
                alignItems: "center",
                justifyContent: "center",
                width: "66vw",
                zIndex: "2",
                border: "0.36vw solid white",
                gap: "6vw",
                paddingBlock: thin ? "2vw" : "4vw",
            }}
        >
            <div
                style={{
                    fontSize: "6vw",
                    fontWeight: "300",
                }}
            >
                {name}
            </div>
            <Arrow height={2.4} width={10} lineThickness={0.36} />
        </Link>
    );
}