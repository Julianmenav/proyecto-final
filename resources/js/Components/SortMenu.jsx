import React from 'react'

export default function SortMenu({handleCategory, sortCategory, handleOrder, sortOrder}) {
  return (
    <div className="flex">
                <select
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#AC3FFF] focus:border-[#AC3FFF] block w-40 p-2.5"
                    onChange={handleCategory}
                    value={sortCategory}
                >
                    <option value="like_count">Likes</option>
                    <option value="created_at">Fecha de Subida</option>
                </select>
                <button
                    onClick={handleOrder}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#AC3FFF] focus:border-[#AC3FFF] block w-12 p-2.5"
                >
                    {sortOrder == "desc" ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 15.75l7.5-7.5 7.5 7.5"
                            />
                        </svg>
                    )}
                </button>
            </div>
  )
}
