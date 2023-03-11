import usePaginate from "@/Hooks/usePaginate";
import useSort from "@/Hooks/useSort";
import GlobalLayout from "@/Layouts/GlobalLayout";
import { Head } from "@inertiajs/react";
import PictureCard from "../../Components/PictureCard";

export default function Discover({ auth, errors, picturesPag, morePages }) {
    const {sortCategory, sortOrder, handleOrder, handleCategory} = useSort()
    const {pictures, showMore, processing, nextPage, removeImg} = usePaginate(picturesPag, morePages);

    const style = {
        gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
    };

    return (
        <GlobalLayout auth={auth} errors={errors}>
            <Head title="Descubre otras obras" />
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
            <div className="grid gap-4 mt-12 sm:px-20 " style={style}>
                {pictures.map((picture, idx) => {
                    const ownPicture = picture.user_id == auth.user?.id;
                    const liked = picture.like
                        .map((el) => el.id)
                        .includes(auth.user?.id);

                    return (
                        <PictureCard
                            picture={picture}
                            liked={liked}
                            ownPicture={ownPicture}
                            remove={removeImg}
                            key={idx}
                        />
                    );
                })}
            </div>
            <div className="w-full float bottom-0 flex justify-center">
                {showMore && !processing && (
                    <button
                        className="bg-white p-3 rounded-md"
                        onClick={nextPage}
                    >
                        mas
                    </button>
                )}
            </div>
        </GlobalLayout>
    );
}
