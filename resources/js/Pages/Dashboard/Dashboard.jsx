import PictureCard from "@/Components/PictureCard";
import ShowMoreButton from "@/Components/ShowMoreButton";
import SortMenu from "@/Components/SortMenu";
import usePaginate from "@/Hooks/usePaginate";
import useSort from "@/Hooks/useSort";
import GlobalLayout from "@/Layouts/GlobalLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ auth, errors, picturesPag, morePages }) {
    const { sortCategory, sortOrder, handleOrder, handleCategory } = useSort();
    const { pictures, showMore, processing, nextPage, removeImg } = usePaginate(
        picturesPag,
        morePages
    );
    const style = {
        gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
    };

    return (
        <GlobalLayout auth={auth} errors={errors}>
            <Head title="Dashboard" />

            <section className="text-white">
                <div className="mx-10 text-4xl">Tus creaciones</div>

                {pictures.length == 0 ? (
                    <>
                        <div className="text-white text-xl">
                            Aún no has creado ninguna imagen.
                        </div>
                        <Link
                            href={route("create.view")}
                            className="py-2 px-6 rounded-full bg-white text-black font-bold"
                        >
                            Comienza a crear
                        </Link>
                    </>
                ) : (
                    <SortMenu
                        sortCategory={sortCategory}
                        sortOrder={sortOrder}
                        handleOrder={handleOrder}
                        handleCategory={handleCategory}
                    />
                )}
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
            </section>

            <ShowMoreButton
                nextPage={nextPage}
                showMore={showMore}
                processing={processing}
            />
        </GlobalLayout>
    );
}
