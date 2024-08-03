import '../css/GameLoader.css';
import { useEffect } from 'react';

function GameLoader({ setLoading, setData }) {
    useEffect(() => {
        const fetchedData = async () => {
            const response = await fetch("https://api.opendota.com/api/heroStats");
            const heroes = await response.json();
            setData(heroes);
            setLoading(false);
        };
        fetchedData();
    }, []);

    return (
        <>
            <div className="loading-screen">
                <h2>Loading...</h2>
            </div>
        </>
    );
}

export default GameLoader;