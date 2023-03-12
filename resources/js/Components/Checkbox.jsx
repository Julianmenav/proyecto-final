export default function Checkbox({ name, value, handleChange }) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className={"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-[#AC3FFF]"}
            onChange={(e) => handleChange(e)}
        />
    );
}
