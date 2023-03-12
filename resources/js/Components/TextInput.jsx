import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', name, id, value, className, autoComplete, required, isFocused, handleChange, placeholder },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                className={
                    `rounded-md shadow-sm ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
            />
        </div>
    );
});
