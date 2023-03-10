import GlobalLayout from "@/Layouts/GlobalLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Create(props) {

    const { data, setData, post } = useForm({
        description: '',
        picture: null
    });


    function handlePhotoChange(event) {
        setData('picture', event.target.files[0])

    }
    function handleDescriptionChange(event) {
        setData('description', event.target.value)
    }

    const submit = (e) => {
        e.preventDefault();
        post(route('create.save'), {data});
    };

    return (
        <GlobalLayout auth={props.auth} errors={props.errors}>
            <Head title="Create" />
            <div className="p-5 bg-white">
                <form onSubmit={submit} encType="multipart/form-data">
                    <input type="file" name="picture" onChange={handlePhotoChange} />
                    <input type="text" name="description" onChange={handleDescriptionChange}/>
                    <button type="submit">Guardar</button>
                </form>

            </div>
        </GlobalLayout>
    );
}
