import "../css/Gameover.css";

function Gameover({ setGameover, setShowWelcomeModal, setLoading }) {
    const handleEndGame = () => {
        setShowWelcomeModal(true);
    };

    const handleResume = () => {
        setGameover(false);
        setLoading(true);
    }
    return (
        <>
            <div className="gameover-content">
                <p>Gameover!!</p>
                <div className="action-buttons">
                    <button onClick={handleResume}>Play Again</button>
                    <button onClick={handleEndGame}>End Game</button>
                </div>

            </div>

        </>
    );
}

export default Gameover;