import { useState } from "react";
import { addCharacter } from "../api.js";

export default function CharacterForm({ refresh }) {
    const [form, setForm] = useState({ name: "", realName: "", universe: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addCharacter(form);
        setForm({ name: "", realName: "", universe: "" });
        refresh();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex gap-2 mt-6 justify-center"
        >
            <input
                className="border p-2"
                placeholder="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
            />
            <input
                className="border p-2"
                placeholder="Real Name"
                name="realName"
                value={form.realName}
                onChange={handleChange}
            />
            <input
                className="border p-2"
                placeholder="Universe"
                name="universe"
                value={form.universe}
                onChange={handleChange}
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded">
                Add
            </button>
        </form>
    );
}
