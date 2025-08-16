import { useEffect, useState } from "react";
import { getCharacters, deleteCharacter } from "../api.js";

export default function CharactersTable({ onEdit }) {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetchCharacters();
    }, []);

    const fetchCharacters = async () => {
        const res = await getCharacters();
        setCharacters(res.data);
    };

    const handleDelete = async (id) => {
        await deleteCharacter(id);
        fetchCharacters();
    };

    return (
        <table className="mx-auto border mt-6">
            <thead>
            <tr className="bg-gray-200">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Real Name</th>
                <th className="px-4 py-2">Universe</th>
                <th className="px-4 py-2">Actions</th>
            </tr>
            </thead>
            <tbody>
            {characters.map((char) => (
                <tr key={char.id} className="border">
                    <td className="px-4 py-2">{char.name}</td>
                    <td className="px-4 py-2">{char.realName}</td>
                    <td className="px-4 py-2">{char.universe}</td>
                    <td className="px-4 py-2 flex gap-2">
                        <button
                            className="bg-red-500 text-white px-2 py-1 rounded"
                            onClick={() => handleDelete(char.id)}
                        >
                            Delete
                        </button>
                        <button
                            className="bg-blue-500 text-white px-2 py-1 rounded"
                            onClick={() => onEdit(char)}
                        >
                            Edit
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
