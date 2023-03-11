import GlobalLayout from "@/Layouts/GlobalLayout";
import { Head, Link, router, usePage, useRemember } from "@inertiajs/react";
import { useEffect, useState } from "react";
import PictureCard from "../../Components/PictureCard";

export default function Discover({ auth, errors, picturesPag, morePages }) {
    const {category, order} = usePage().props
    const [firstRender, setFirstRender] = useState(true)
    const [sortOrder, setSortOrder] = useState(order ?? 'desc');
    const [sortCategory, setSortCategory] = useState(category ?? 'like_count');

    const [processing, setProcessing] = useState(false);
    const [showMore, setShowMore] = useState(morePages);
    const [nextUrl, setNextUrl] = useState(picturesPag.next_page_url);
    const [pictures, setPictures] = useState(picturesPag.data);

    useEffect(() => {
        console.log(nextUrl);
    },[])
    
    useEffect(() => {
        if(firstRender) return setFirstRender(false);
        router.get(route('discover.view', {'sortOrder': sortOrder, 'sortCategory' : sortCategory})), {
            preserveState: true,
            preserveScroll: true,
        }
    }, [sortOrder, sortCategory])

    useEffect(() => {
        setProcessing(false);
    }, [pictures]);

    const style = {
        gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
    };

    const handleOrder = () => {
        setSortOrder((prev) => {
            if (prev == "desc") return "asc";
            return "desc";
        });
    };

    function nextPage() {
        setProcessing(true);
        axios.get(nextUrl).then((res) => {
            setPictures((prev) => [...prev, ...res.data.pictures]);
            setNextUrl(res.data.next_page_url);
            setShowMore(res.data.morePages);
        });
    }

    const removeImg = (id) => {
        const newItems = pictures.filter((pic) => pic.id !== id);
        setPictures(newItems);
    };

    return (
        <GlobalLayout auth={auth} errors={errors}>
            <Head title="Descubre otras obras" />
            <div className="flex">
                <select
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#AC3FFF] focus:border-[#AC3FFF] block w-40 p-2.5"
                    onChange={(e) => setSortCategory(e.target.value)}
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
