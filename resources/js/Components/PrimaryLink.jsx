import { Link } from "@inertiajs/react";
import React from "react";

export default function PrimaryLink({text, href, className}) {
    return (
        <Link
            href={href}
            className={"py-2 px-6 rounded-full font-bold " + className}
        >
            {text}
        </Link>
    );
}
