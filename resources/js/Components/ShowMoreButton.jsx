import React from "react";
import Loading from "./Loading";

export default function ShowMoreButton({
    className,
    showMore,
    processing,
    nextPage,
    refe
}) {
    return (
        <div ref={refe} className={className}>
            {showMore &&
                (!processing ? (
                    <button
                        className="px-3 py-1 bg-gray-600 h-7 leading-3 0 text-sm rounded-lg text-white font-bold  hover:bg-gray-500"
                        onClick={nextPage}
                    >
                        Ver más
                    </button>
                ) : (
                    <Loading />
                ))}
        </div>
    );
}
