export default function PrimaryButton({ type = 'submit', className = '', processing, children, onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `px-4 py-3 bg-main h-full leading-3 0 text-md rounded-lg text-white font-bold hover:bg-main/[0.9] transition duration-300 ease-in-out ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
