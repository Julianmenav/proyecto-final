import React from "react";

export default function ShowMoreButton({showMore, processing, nextPage}) {
    return (
        <div className="w-full float bottom-0 flex justify-center">
            {showMore && !processing && (
                <button className="bg-white p-3 rounded-md" onClick={nextPage}>
                    mas
                </button>
            )}
        </div>
    );
}
