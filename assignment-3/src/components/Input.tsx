import { ChangeEvent } from "react";
import "../assets/styles/input.css";

interface TPropInput {
    value: string;
    width?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    name: string;
    placeholder: string;
    label: string;
}
function Input({
    label,
    width,
    onChange,
    value,
    placeholder,
    name,
}: TPropInput) {
    return (
        <div className="text-field" style={{ width: `${width}` }}>
            <label htmlFor={name}>{label}</label>
            <input
                required
                name={name}
                onChange={onChange}
                autoComplete="off"
                value={value}
                type="text"
                id={name}
                placeholder={`${placeholder}`}
            />
        </div>
    );
}

export default Input;
