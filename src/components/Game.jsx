import { useState } from "react";

import ScoreBoard from "./ScoreBoard";
import GameBoard from "./GameBoard";
import GameLoader from "./GameLoader";
import "../css/Game.css";

function Game({ setShowWelcomeModal }) {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading ? (
                <div className="game-loader">
                    <GameLoader setLoading={setLoading} setData={setData} />
                </div>
            ) : (
                <div className="game-container">
                    <ScoreBoard
                        score={score} highScore={highScore}
                        setHighScore={setHighScore}
                    />
                    <GameBoard
                        data={data} setData={setData}
                        setShowWelcomeModal={setShowWelcomeModal}
                        score={score} setScore={setScore}
                        setLoading={setLoading}
                    />
                </div>)
            }
        </>
    );
}

export default Game;