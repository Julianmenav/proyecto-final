import React from "react";

export default function Comment({ comment }) {
    return (
        <div className="bg-white overflow-hidden w-full rounded-xl shadow-md text-black">
            <div className="flex align-center items-center p-1">
                {comment.user.name}
                <img
                    src={comment.user.profile_pic}
                    alt="profilePic"
                    className={`w-5 h-5 rounded-full object-cover`}
                />
            </div>
            <div className="h-10 bg-gray-400 p-3">{comment.comment_text}</div>
            <div className="text-xs bg-gray-800 text-white p-1 ">
                {comment.updated_at.split("T")[0]}
            </div>
        </div>
    );
}
