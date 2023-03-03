import { useRouter } from "next/router";
import Link from "next/link";
import { Fragment, useState } from "react";
import Image from "next/image";

const navigationRoutes = ["home", "store", "about", "taste",];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    if (router.asPath == '/test') {

        return (<></>)
    }


    return (
        <Fragment>
            <div className="show-in-mobile">
            <header
                style={{
                    display: "flex",
                    position: "fixed",
                    justifyContent: "space-between",
                    zIndex: "9",
                    width: "100vw",
                    alignItems: "center",
                    height: "15vw",
                    background: '#0008',
                }}
            >
                <Link href="/">
                    <div
                        style={{
                            height: "10vw",
                            width: "40vw",
                            position: "relative",
                            overflow: "hidden",
                            transform: 'translate(0,-1vw)',
                        }}
                    >
                        <Image
                            src="/logo.png"
                            alt="test"
                            fill
                            sizes="30vw"
                            priority
                            style={{
                                objectFit: "cover",
                                margin: '2vw',
                            }}
                        />
                    </div>
                </Link>
                <HamburgerButton setOpen={setOpen} />
                
            </header>
            <button
                style={{
                    position: "fixed",
                    top: 0,
                    zIndex: 10,
                    width: "100vw",
                    opacity: open ? "100%" : "0%",
                    transform: open ? "translateX(0)" : "translateX(100vw)",
                    transition: "0.3s opacity ease",
                    background: "#fff2",
                    height: "100vh",
                }}
                onClick={() => {
                    setOpen(false);
                }}
            ></button>
            <nav
                className="nav-dropdown-container"
                style={{
                    position: "fixed",
                    top: 0,
                    zIndex: 10,
                    right: 0,
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                    transition: "0.3s all ease",
                    transform: open ? "translateX(0)" : "translateX(100vw)",
                    alignItems: "flex-end",
                }}
            >
                <button
                    className="close-button"
                    onClick={() => {
                        setOpen(false);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#fff"
                        className="w-6 h-6"
                        style={{
                            height: "2rem",
                        }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <ul
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100vh",
                        paddingTop: "4rem",
                    }}
                >
                    {navigationRoutes.map((singleRoute) => {
                        return (
                            <Fragment key={singleRoute}>
                                <NavigationLink
                                    setOpen={setOpen}
                                    href={`/${singleRoute}`}
                                    text={singleRoute}
                                    router={router}
                                />
                            </Fragment>
                        );
                    })}
                </ul>
            </nav></div>
            <div className="show-in-desktop">
            <header
                style={{
                    display: "flex",
                    position: "fixed",
                    justifyContent: "space-between",
                    zIndex: "9",
                    width: "100vw",
                    alignItems: "center",
                    height: "5vw",
                    alignItems: 'center',
                    paddingInline: '8vw',
                }}
            >
                <Link href="/">
                    <div
                        style={{
                            height: "8vw",
                            width: "8vw",
                            position: "relative",
                            overflow: "hidden",
                            transform: 'translate(0,0.4vw)',
                        }}
                    >
                        <Image
                            src="/logo.png"
                            alt="test"
                            fill
                            sizes="30vw"
                            priority
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </Link>
                <ul
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        height: "100%",
                        alignItems: 'center',
                        fontSize: '1.4vw',
                        fontWeight: '300',

                    }}
                >
                    {navigationRoutes.map((singleRoute) => {
                        return (
                            <Fragment key={singleRoute}>
                                <NavigationLink
                                    href={`/${singleRoute}`}
                                    text={singleRoute}
                                    router={router}
                                />
                            </Fragment>
                        );
                    })}
                </ul>
            </header>
            </div>
        </Fragment>
    );
}

function NavigationLink({ href, text, router, setOpen }) {
    const isActive = router.asPath === (href === "/home" ? "/" : href);
    return (
        <Fragment>
            <div className="show-in-mobile">
        <Link
            href={href === "/home" ? "/" : href}
            className={
                isActive ? "nav-bar-text nav-bar-text-active" : "nav-bar-text"
            }
            onClick={() => {
                setOpen(false);
            }}
        >
            {text}
        </Link></div>
            <div className="show-in-desktop">
        <Link
            href={href === "/home" ? "/" : href}
            style={{
                opacity: isActive? '100%' : '70%',
                padding: '2vw',
                fontSize: '1.2vw',
                fontWeight: '300',
            }}
        >
            {text}
        </Link></div>
        </Fragment>
    );
}

function HamburgerButton({ setOpen }) {
    return (
        <button
            className="hamburger-button-container dont-show-in-desktop"
            onClick={() => {
                setOpen((prevOpen) => !prevOpen);
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
                className="w-6 h-6"
                style={{
                    height: "2.6rem",
                }}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>
        </button>
    );
}
