import '../css/WelcomeModal.css';

function WelcomeModal( {setShowWelcomeModal} ){
    const handleStartGameClick = () => {
        setShowWelcomeModal(false);
    }
    return (
        <>
        <div className="modal">
            <p>Let's see if you remember the Dota 2 Heroes.</p>
            <button type="button" onClick={handleStartGameClick}>Start Game</button>
            <p><span>Instruction:</span> Do not click same hero twice. You click twice, game is over.</p>
        </div>
        </>
    );
}

export default WelcomeModal;