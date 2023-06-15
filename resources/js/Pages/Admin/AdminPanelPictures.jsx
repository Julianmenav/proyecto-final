import GlobalLayout from "@/Layouts/GlobalLayout";
import { router, Head, Link } from "@inertiajs/react";
import React from "react";

export default function AdminPanelPictures({ auth, errors, picturesPaginator }) {
    console.log(picturesPaginator);


    const parsePaginate = (string) => {
        if(string.includes('&laquo;')) return <>&laquo;</>
        if(string.includes('&raquo;')) return <>&raquo;</>
        return string
    }

    const destroy = (picture_id) => {
        router.delete(route("admin.destroy", { picture_id: picture_id }));
    }

    return (
        <GlobalLayout auth={auth} errors={errors}>
            <Head title="Admin Panel" />
            <section className="max-w-4xl m-auto mt-10">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Picture
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    User ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {picturesPaginator.data.map((picture, id) => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={id}>
                                        <td className="px-3 py-2 text-center">
                                            <img
                                                src={picture.image_url}
                                                className="w-8 h-8"
                                            />
                                        </td>
                                        <td className="px-3 py-2 text-center">
                                            <Link
                                                href={route("picture.view", {
                                                    picture_id: picture.id,
                                                })}
                                            >
                                                {picture.id}
                                            </Link>
                                        </td>
                                        <td className="px-3 py-2 text-center">{picture.user_id}</td>
                                        <td className="px-3 py-2 text-center max-w-lg truncate">{picture.description}</td>
                                        <td className="px-3 py-2 text-center">
                                            {picture.created_at.split("T")[0]}
                                        </td>
                                        <td className="px-3 py-2 flex justify-center">
                                            <button onClick={() => destroy(picture.id)} className="text-gray-100 bg-gray-500 p-1 opacity-70 text-sm font-bold rounded-md shadow-md hover:bg-red-500 hover:opacity-100 active:translate-y-0.5">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    className="text-gray-100 w-6 h-6"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
                                                    <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <nav className="flex items-center justify-between pt-4 " aria-label="Table navigation">
                    <ul className="inline-flex items-center bg-zinc-100 rounded-md overflow-hidden">
                        {
                            picturesPaginator.links.map((link) => {
                                return (
                                    <li>
                                        <a href={link.url} className={`p-3 border-x border-gray-300 ${link.active && 'text-blue-400 bg-gray-200'}`}>
                                            {parsePaginate(link.label)}
                                        </a>
                                    </li>
                                )
                            })
                        }        
                    </ul>
                </nav>
            </section>
        </GlobalLayout>
            // <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            // <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
);
}
