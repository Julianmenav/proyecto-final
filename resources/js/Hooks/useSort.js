import { router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function useSort() {
    const {location} = usePage().props.ziggy
    const { category, order, search } = usePage().props;
    const [firstRender, setFirstRender] = useState(true);
    const [relation, setRelation] = useState(search)
    const [sortOrder, setSortOrder] = useState(order);
    const [sortCategory, setSortCategory] = useState(category);

    useEffect(() => {
        if (firstRender) return setFirstRender(false);
        router.get(location,
            {
                sortOrder: sortOrder,
                sortCategory: sortCategory,
                search: relation
            },
            {
                preserveScroll: true,
            });
    }, [sortOrder, sortCategory, relation]);

    const handleOrder = () => {
        setSortOrder((prev) => {
            if (prev == "desc") return "asc";
            return "desc";
        });
    };

    const handleCategory = (e) => {
        setSortCategory(e.target.value);
    };

    const handleRelation = (newRelation) => {
        setRelation(newRelation)
    }

    return { sortCategory, sortOrder, relation, handleRelation, handleOrder, handleCategory };
}
