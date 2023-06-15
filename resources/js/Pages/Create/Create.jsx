import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import PrimaryLink from "@/Components/PrimaryLink";
import TextInput from "@/Components/TextInput";
import GlobalLayout from "@/Layouts/GlobalLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Create(props) {
    // Submit -> Generar Imagen (response)-> pintar en pantalla -> save(description y path) (antes era description y picture)
    const [prompt, setPrompt] = useState("")
    const [generatedPictureURL, setgeneratedPictureURL] = useState(null)
    const [loading, setLoading] = useState(false)
    const [progress, setProgress] = useState(0)
    const [ellipsis, setEllipsis] = useState("")
	const [showErrorModal, setShowErrorModal] = useState(false)

    useEffect(() => {
      const interval = setInterval(() => {
        setEllipsis((prev) => {
          if(prev.length >= 3) return ""
          return prev + "."
        })
      }, 500)
      return () => {
        clearInterval(interval)
      }
    }, [])

    useEffect(() => {
      if (!loading) return

      const interval = setInterval(() => {
        
        const increase = Math.random() * 10
        setProgress((prev) => prev < 80 ? prev + increase : prev + 0.1)
      }, 250)

      return () => {
        clearInterval(interval)
      } 
    
    }, [loading])
    
    function handleDescriptionChange(event) {
        setPrompt(event.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        setLoading(true)

        axios.post(route('create.generate'), { prompt: prompt}).then(res => {
            console.log(res.data)
            setgeneratedPictureURL(res.data.url)
            setLoading(false)
        }).catch(err => {
            console.log(err)
            setLoading(false)
			setShowErrorModal(true)
        })
    };

	const closeModal = () => {
		setPrompt("")
		setShowErrorModal(false)
	}

    return (
        <GlobalLayout auth={props.auth} errors={props.errors}>
            <Head title="Create" />
            <form
                onSubmit={submit}
                className="flex flex-col items-center justify-center w-full mt-12"
            >
                <div className="w-full max-w-4xl px-10">
                    <p className="text-main text-md font-bold ">Escribe una descripción detallada</p>
                    <TextInput
                        id="description"
                        className="mt-1 block w-full bg-gray-200 shadow-md text-black font-bold border-none focus:border-none focus:ring-0 placeholder-gray-600"
                        placeholder="e.g: An expressive oil painting of a basketball player dunking..."
                        value={prompt}
                        handleChange={handleDescriptionChange}
                        required
                        isFocused
                        readOnly={loading || generatedPictureURL}
                        autoComplete='off'
                    />
                </div>
                <div className="mt-14 w-full flex flex-col justify-center items-center px-10 gap-3">
                    {
                        generatedPictureURL ? (
                            <>
                                <p className="text-xl font-bold text-white">Listo! Tu imagen ha sido creada y añadida a tus obras!</p>
                                <img src={generatedPictureURL} className="w-full max-w-xs lg:max-w-sm  shadow-xl rounded-md"></img>
                                <div className='flex flex-wrap gap-3 justify-evenly mt-8 lg:mt-12 mb-12'>
                                    <PrimaryLink text="Ver en tu galería" href={route('dashboard.view')} className="shadow-sm shadow-white/40 bg-zinc-900 text-white border border-white hover:bg-zinc-800 transition-all duration-300"></PrimaryLink>
                                    <PrimaryLink text="Sigue creando" href={route('create.view')} className="bg-zinc-300 text-zinc-700 hover:bg-zinc-400 transition-all duration-300"></PrimaryLink>
                                </div>
                            </>
                        ) : loading ? (
                            <>
                                <div className="text-left">
                                  <p className="text-lg font-bold text-white relative">
                                    { progress < 65 ? 'Tu imagen está siendo generada' : 'Ya está casi lista'}
                                    <span className="absolute right-0 translate-x-full">{ellipsis}</span>
                                  </p>
                                </div>
                                <div className="h-1 rounded-full w-full max-w-xl bg-white overflow-hidden">
                                  <div className={`bg-main h-1`} style={{width: `${progress}%`}}>
                                  </div>
                                </div>
                                {/* <Loading /> */}
                            </>
                        ) : (
                            <button
                                className="px-4 py-3 bg-main h-full leading-3 0 text-md rounded-lg text-white font-bold hover:bg-main/[0.9] transition duration-300 ease-in-out"
                                type="submit"
                            >
                                Generar Imagen
                            </button>
                            )
                    }
                </div>
            </form>
            <Modal show={showErrorModal} onClose={closeModal} maxWidth="sm"> 
                <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Ha habido un error al crear tu imagen. Vuelve a intentarlo con otra descripción.
                    </h2>
                    <div className="mt-6 flex justify-end">
                        <PrimaryButton onClick={closeModal}>
                            Entendido
                        </PrimaryButton>
                    </div>
                </div>
            </Modal>
        </GlobalLayout>
    );
}
