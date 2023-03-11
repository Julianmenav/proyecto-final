import { router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function useSort() {
    const {location} = usePage().props.ziggy
    const { category, order } = usePage().props;
    const [firstRender, setFirstRender] = useState(true);
    const [sortOrder, setSortOrder] = useState(order ?? "desc");
    const [sortCategory, setSortCategory] = useState(category ?? "like_count");

    useEffect(() => {
        if (firstRender) return setFirstRender(false);
        router.get(location,
            {
                sortOrder: sortOrder,
                sortCategory: sortCategory,
            },
            {
                preserveScroll: true,
            });
    }, [sortOrder, sortCategory]);

    const handleOrder = () => {
        setSortOrder((prev) => {
            if (prev == "desc") return "asc";
            return "desc";
        });
    };

    const handleCategory = (e) => {
        setSortCategory(e.target.value);
    };

    return { sortCategory, sortOrder, handleOrder, handleCategory };
}
