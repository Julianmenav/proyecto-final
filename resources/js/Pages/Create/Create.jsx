import TextInput from "@/Components/TextInput";
import GlobalLayout from "@/Layouts/GlobalLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Create(props) {
    const { data, setData, post } = useForm({
        description: "",
        picture: null,
    });

    function handlePhotoChange(event) {
        setData("picture", event.target.files[0]);
    }
    function handleDescriptionChange(event) {
        setData("description", event.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        post(route("create.save"), { data });
    };

    return (
        <GlobalLayout auth={props.auth} errors={props.errors}>
            <Head title="Create" />
            <form
                onSubmit={submit}
                encType="multipart/form-data"
                class="flex flex-col items-center justify-center w-full mt-12"
            >
                <div class="w-[700px]">
                    <label
                        for="dropzone-file"
                        class="flex flex-col items-center justify-center  h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-300/[0.1] text-white hover:bg-gray-300/[0.2] "
                    >
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                                aria-hidden="true"
                                class="w-10 h-10 mb-3 "
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                ></path>
                            </svg>
                            <p class="mb-2 text-sm ">
                                <span class="font-semibold">
                                    Click to upload
                                </span>{" "}
                                or drag and drop
                            </p>
                            <p class="text-xs ">SVG, PNG, JPG</p>
                        </div>
                        <input
                            id="dropzone-file"
                            type="file"
                            class="hidden"
                            onChange={handlePhotoChange}
                        />
                    </label>
                    <TextInput
                        id="description"
                        className="mt-4 block w-full bg-gray-200 shadow-md text-black font-bold border-none focus:border-none focus:ring-0 placeholder-gray-600"
                        placeholder="Añade un descripción..."
                        value={data.description}
                        handleChange={handleDescriptionChange}
                        required
                    />
                </div>
                <button
                    className="mt-9 px-4 py-3 bg-main h-full leading-3 0 text-md rounded-lg text-white font-bold hover:bg-main/[0.9] transition duration-300 ease-in-out"
                    type="submit"
                >
                    Guardar
                </button>
            </form>
        </GlobalLayout>
    );
}
