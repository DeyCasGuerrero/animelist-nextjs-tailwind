'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

function InputComponent() {

    const initialStateValues = {
        name: '',
    }

    const [values, setValues] = useState(initialStateValues);

    const router = useRouter();
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            console.log(values)
            if (!values.name.trim()) {
                alert("ES VACIO ")
            } else {
                router.push(`/busqueda/${decodeURIComponent(values.name.toLowerCase())}`)
            }
        }

    }

    const handleMouseClick = () => {
        if (!values.name.trim()) {
            console.log("El valor está vacío");
            router.push('/busqueda')
        } else {
            router.push(`/busqueda/${decodeURIComponent(values.name.toLowerCase())}`)
        }
    }
    return (
        <div className="rounded-lg bg-gray-200 p-5 mt-6">
            <div className="flex justify-center w-full p-2">
                <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                    <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
                        <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                    </svg>
                </div>
                <input
                    type="text"
                    className="w-full min-w-[160px]bg-white pl-2 text-lg font-semibold outline-0"
                    placeholder="ingresa tu anime favorito"
                    name="name"
                    value={values.name}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <input
                    type="button"
                    onClick={handleMouseClick}
                    value="Search"
                    className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
                />
            </div>
        </div>
    )
}
export default InputComponent;