import React from "react";
import CircleImage from "./CircleImage";

export default function ProfileInfo({ user }) {
    return (
        <div className="flex gap-5 flex-start items-center h-fit py-5">
            <CircleImage img={user.profile_pic} className={"w-28 h-28"} />
            <div className="h-full flex flex-col text-white">
                <p className="text-xl md:text-2xl lg:text-5xl font-bold truncate">
                    {user.name}
                </p>
                <p className="flex items-center gap-1">
                    <span className="font-bold min-w-[20px]">
                        {user.numPicturesCreated}
                    </span>
                    Creaciones
                </p>
                <p className="flex items-center gap-1">
                    <span className="font-bold min-w-[20px]">
                        {user.numLikes}
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#AC3FFF"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#AC3FFF"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                    </svg>
                </p>
                <p className="flex items-center gap-1">
                    <span className="font-bold min-w-[20px]">
                        {user.numSavedPictures}
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#FFF"
                        className="h-5 w-5"
                        strokeWidth={1.5}
                        stroke="#FFF"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                        />
                    </svg>
                </p>
            </div>
        </div>
    );
}
