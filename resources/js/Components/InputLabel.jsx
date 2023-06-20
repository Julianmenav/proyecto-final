export default function InputLabel({ forInput, value, className, children }) {
    return (
        <label htmlFor={forInput} className={`block ` + className}>
            {value ? value : children}
        </label>
    );
}
