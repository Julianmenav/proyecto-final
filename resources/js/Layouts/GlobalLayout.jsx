import { useState } from "react";
import AuthenticatedNavbar from "./Partials/AuthenticatedNavbar";
import GuestNavbar from "./Partials/GuestNavbar";

export default function GlobalLayout({ auth, children }) {
    return (
        <div className="min-h-screen bg-[#242424]" style={{ backgroundImage: 'url("/assets/dotGrid.svg")'}}>
            <div className="min-h-screen" style={{background: 'radial-gradient(ellipse at bottom right, rgba(172,63,255,0.2) 0%, rgba(255,255,255,0) 50%) no-repeat'}}>
                {auth.user ? (
                    <AuthenticatedNavbar user={auth.user} />
                ) : (
                    <GuestNavbar />
                )}
                <main className="">{children}</main>
            </div>
        </div>
    );
}
