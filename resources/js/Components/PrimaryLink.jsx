import { Link } from "@inertiajs/react";
import React from "react";

export default function PrimaryLink({text, href, className}) {
    return (
        <Link
            href={href}
            className={"min-w-fit py-2 px-4 text-lg rounded-full font-bold " + className}
        >
            {text}
        </Link>
    );
}
