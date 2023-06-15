import { useState } from "react";
import AuthenticatedNavbar from "./Partials/AuthenticatedNavbar";
import GuestNavbar from "./Partials/GuestNavbar";
import NavLink from "@/Components/NavLink";

export default function GlobalLayout({ auth, children }) {
    return (
        <div className="overflow-hidden h-screen flex flex-col">
            <div
                className="min-h-screen w-screen bg-[#242424] fixed top-0 left-0 -z-50"
                style={{ backgroundImage: 'url("/assets/dotGrid.svg")' }}
            ></div>
            <div
                className="min-h-screen w-screen fixed top-0 left-0 -z-50"
                style={{
                    background:
                        "radial-gradient(ellipse at bottom right, rgba(172,63,255,0.2) 0%, rgba(255,255,255,0) 50%) no-repeat",
                }}
            ></div>
            {auth.user ? (
                <AuthenticatedNavbar user={auth.user} />
            ) : (
                <GuestNavbar />
            )}
            <main className="pt-20 w-screen z-40 overflow-y-auto flex-1">{children}</main>
            <div className="flex sm:hidden space-x-8 sm:-my-px sm:ml-10 w-screen justify-evenly bg-[#242424] z-50 pt-3 pb-8">
                <NavLink
                    href={route("discover.view")}
                    active={route().current("discover.view")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        fill="currentColor"
                        className="w-7 h-7"
                    >
                        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                        <path d="m8 16 5.991-2L16 8l-6 2z"></path>
                    </svg>
                </NavLink>
                <NavLink
                    href={route("create.view")}
                    active={route().current("create.view")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </NavLink>
                <NavLink
                    href={route("dashboard.view")}
                    active={route().current("dashboard.view")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                    </svg>
                </NavLink>
            </div>
        </div>
    );
}
