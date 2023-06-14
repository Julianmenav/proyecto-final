export default function Checkbox({ name, value, handleChange }) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className={"rounded border-gray-300 text-main shadow-sm focus:ring-0"}
            onChange={(e) => handleChange(e)}
        />
    );
}
