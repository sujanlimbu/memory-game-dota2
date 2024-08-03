import { useState } from "react";
import '../css/GameBoard.css';
import shuffleData from "../util/ArrayShuffle";
import Gameover from "./Gameover";

function GameBoard({ data, setData, setShowWelcomeModal, score, setScore, setLoading }) {
    const [clickedHeroes, setClickedHeroes] = useState([]);
    const [gameover, setGameover] = useState(false);

    const handleHeroClick = (id) => {
        if (clickedHeroes.includes(id)) {
            setClickedHeroes([]);
            setScore(0);
            setGameover(true);
        } else {
            setClickedHeroes(prevClickedHeroes => [...prevClickedHeroes, id]);
            setData(shuffleData(data));
            setScore(score + 1);
        }
    };

    return (
        <>
            <div className="gameboard-container">
                <div className="hero-card-list">
                    {shuffleData(data).slice(0, 18).map(hero => (
                        <div className="hero-card" key={hero.id} onClick={() => handleHeroClick(hero.id)} >
                            <img src={`https://cdn.cloudflare.steamstatic.com${hero.img}`} alt={hero.localized_name} />
                            <p>{hero.localized_name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="gameover-screen" style={{
                display: gameover ? "block" : "none"
            }}>
                <Gameover setGameover={setGameover} setShowWelcomeModal={setShowWelcomeModal} setLoading={setLoading} />
            </div>
        </>
    );
}

export default GameBoard;