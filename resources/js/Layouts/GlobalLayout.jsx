import { useState } from "react";
import AuthenticatedNavbar from "./Partials/AuthenticatedNavbar";
import GuestNavbar from "./Partials/GuestNavbar";

export default function GlobalLayout({ auth, children }) {
    return (
        <div className="">
            <div
                className="min-h-screen w-screen bg-[#242424] fixed top-0 left-0"
                style={{ backgroundImage: 'url("/assets/dotGrid.svg")' }}
            ></div>
            <div
                className="min-h-screen w-screen fixed top-0 left-0 "
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
            <main className="mt-20 absolute w-full z-0">{children}</main>
        </div>
    );
}
