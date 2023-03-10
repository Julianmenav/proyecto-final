import GlobalLayout from "@/Layouts/GlobalLayout";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import PictureCard from "../../Components/PictureCard";

export default function Discover({ auth, errors, picturesPag, morePages }) {
    const [processing, setProcessing] = useState(false)
    const [showMore, setShowMore] = useState(morePages)
    const [nextUrl, setNextUrl] = useState(picturesPag.next_page_url)
    const [pictures, setPictures] = useState(picturesPag.data)
    
    useEffect(() => {
      setProcessing(false);
    }, [pictures])

    const style = {
        gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
    };

    function nextPage() {
        setProcessing(true);
        axios.get(nextUrl)
        .then((res) =>{
            setPictures((prev) => ([...prev, ...res.data.pictures]))
            setNextUrl(res.data.next_page_url)
            setShowMore(res.data.morePages)
        })
    }

    const removeImg = (id) => {
        const newItems = pictures.filter((pic) => pic.id !== id);
        setPictures(newItems);
    }

    return (
        <GlobalLayout auth={auth} errors={errors}>
            <Head title="Descubre otras obras" />
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
                {showMore && !processing && <button className="bg-white p-3 rounded-md" onClick={nextPage}>
                    mas
                </button>}
            </div>
        </GlobalLayout>
    );
}
