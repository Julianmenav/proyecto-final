import React from "react";

export default function CircleImage({ className, img }) {
    return (
        <div className={"bg-gray-800 rounded-full overflow-hidden " + className}>
            <img
                src={img || "/storage/default.webp"}
                alt="profilePic"
                className="w-full h-full"
            />
        </div>
    );
}
