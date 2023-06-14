import { Link } from "@inertiajs/react";
import React from "react";

export default function UserNameAndLogo({user}) {
    return (
        <Link href={route("user.view", {user_id: user.id})}>
            <div className="flex gap-1.5 flex-start items-center p-2 font-bold">
                <img
                    src={user.profile_pic ?? "/storage/default.webp"}
                    alt="profilePic"
                    className={`w-5 h-5 rounded-full object-cover`}
                />
                {user.name}
            </div>
        </Link>
    );
}
