import "../css/ScoreBoard.css";

function ScoreBoard({score, highScore, setHighScore}) {
    if (score>highScore)
        setHighScore(score);
    
    return(
        <>
            <div className="header-container">
                <div className="logo-container">
                    <img src="/images/dota-2-logo.svg" alt="dota" className="logo"/>
                </div>
                <div className="score-container">
                    <p>Score: {score}</p>
                    <p>Highscore: {highScore}</p>
                </div>
            </div>

        </>
    );
}

export default ScoreBoard;