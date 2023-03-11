import axios from "axios";
import { useEffect, useState } from "react";

export default function usePaginate(picturesPag, morePages) {
    const [processing, setProcessing] = useState(false);
    const [showMore, setShowMore] = useState(morePages);
    const [nextUrl, setNextUrl] = useState(picturesPag.next_page_url);
    const [pictures, setPictures] = useState(picturesPag.data);

    useEffect(() => {
        setProcessing(false);
    }, [pictures]);

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



    return {pictures, showMore, processing, nextPage, removeImg}
}
