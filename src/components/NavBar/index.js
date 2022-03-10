import './index.css'

const NavBar = props => {
  const {score, time} = props

  return (
    <nav className="navbar-container">
      <div className="logo-and-score-timer-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="website-logo"
          />
        </div>
        <ul className="score-and-timer-container">
          <li className="score-text">
            <p>
              Score:
              <span className="timer-text">{score}</span>
            </p>
          </li>
          <li className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-img"
            />
            <p className="timer-text">{time} sec</p>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
