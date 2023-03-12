import React from "react";

export default function UserNameAndLogo({user}) {
    return (
        <div className="flex gap-1.5 flex-start items-center p-2">
            {user.name}
            <img
                src={user.profile_pic ?? "/storage/default.png"}
                alt="profilePic"
                className={`w-5 h-5 rounded-full object-cover`}
            />
        </div>
    );
}
