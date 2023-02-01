
export default function Arrow({ height, width, lineThickness }) {
    let strokeWidth = (lineThickness * 100) / height;
    let viewWidth = (width * 100) / height;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox={`0 0 ${viewWidth} 100`}
            strokeWidth={strokeWidth}
            stroke="currentColor"
            className="w-6 h-6"
            style={{
                height: height + "vw",
            }}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={`M0 50 h${viewWidth - strokeWidth / 2} L${viewWidth - 50} ${
                    strokeWidth / 2
                } M${viewWidth - strokeWidth / 2} 50 L${viewWidth - 50} ${
                    100 - strokeWidth / 2
                } `}
            />
        </svg>
    );
}