import { Link } from "@inertiajs/react";
import React from "react";
import CircleImage from "./CircleImage";

export default function UserNameAndLogo({user}) {
    return (
        <Link href={route("user.view", {user_id: user.id})}>
            <div className="flex gap-1.5 flex-start items-center p-2 font-bold">
                <CircleImage img={user.profile_pic} className={"w-5 h-5"} />
                {user.name}
            </div>
        </Link>
    );
}
