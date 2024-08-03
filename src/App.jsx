import { useState } from 'react'
import './App.css'
import WelcomeModal from './components/WelcomeModal.jsx'
import Game from './components/Game.jsx'

function App() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
  return (
    <>
      {showWelcomeModal ? 
      <WelcomeModal setShowWelcomeModal={setShowWelcomeModal} /> :
      <Game setShowWelcomeModal={setShowWelcomeModal} />}
    </>
  )
}

export default App
