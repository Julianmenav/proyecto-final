import React from "react";

export default function ShowMoreButton({
    className,
    showMore,
    processing,
    nextPage,
}) {
    return (
        <div className={className}>
            {showMore &&
                (!processing ? (
                    <button
                        className="px-3 py-1 bg-gray-600 h-7 leading-3 0 text-sm rounded-lg text-white font-bold  hover:bg-gray-500"
                        onClick={nextPage}
                    >
                        Ver más
                    </button>
                ) : (
                    <div className="flex justify-center items-center px-3 py-1 leading-3 text-sm font-bold ">
                        <svg
                            className="animate-spin h-6 w-6 text-[#AC3FFF]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                    </div>
                ))}
        </div>
    );
}
