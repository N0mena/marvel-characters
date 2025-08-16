import { useState } from "react";
import CharactersTable from "./components/CharactersTable";
import CharacterForm from "./components/CharacterForm";

export default function App() {
    const [refreshKey, setRefreshKey] = useState(0);

    return (
        <div className="text-center p-6">
            <h1 className="text-2xl font-bold">Marvel Universe</h1>
            <CharactersTable key={refreshKey} />
            <CharacterForm refresh={() => setRefreshKey((k) => k + 1)} />
        </div>
    );
}
