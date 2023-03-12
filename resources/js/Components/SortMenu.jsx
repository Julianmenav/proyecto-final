import React from "react";

export default function SortMenu({handleCategory, sortCategory, handleOrder, sortOrder}) {

    return (
        <div className="flex h-7 items-center">
            <select
                id="category"
                className="bg-gray-700 h-full w-40 leading-3 text-gray-50 font-bold text-sm rounded-lg border-0.5 border-transparent focus:border-[#AC3FFF] hover:bg-gray-600 transition duration-300 ease-in-out"
                onChange={handleCategory}
                value={sortCategory}
            >
                <option className="bg-gray-700 text-white font-bold" value="like_count">Likes</option>
                <option className="bg-gray-700 text-white font-bold" value="created_at">Fecha de Subida</option>
            </select>
            <button
                onClick={handleOrder}
                className="ml-2  px-4 bg-[#AC3FFF] h-full leading-3 0 text-sm rounded-lg text-white font-bold focus:ring-[#AC3FFF] focus:border-[#AC3FFF] hover:bg-[#bb63ff] transition duration-300 ease-in-out"
            >
                {sortOrder == "desc" ? "descend." : "ascend."}
            </button>
        </div>
    );
}
