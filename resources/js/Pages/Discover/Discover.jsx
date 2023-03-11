import ShowMoreButton from "@/Components/ShowMoreButton";
import SortMenu from "@/Components/SortMenu";
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
            <SortMenu sortCategory={sortCategory} sortOrder={sortOrder} handleOrder={handleOrder} handleCategory={handleCategory}/>
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
            <ShowMoreButton nextPage={nextPage} showMore={showMore} processing={processing}/>
        </GlobalLayout>
    );
}
