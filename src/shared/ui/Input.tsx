import React, {FC} from 'react';

interface InputFill {
    label: string;
    placeholder: string;
    type: string;
    autoComplete?: string;
}
const Input: FC<InputFill>  = ({label, placeholder, type, autoComplete} : InputFill) => {
    return (
        <div className="col-span-6 sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type={type}
                name="first-name"
                id="first-name"
                autoComplete={autoComplete}
                className="p-2 mt-1 block w-full rounded-md border-solid border-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;