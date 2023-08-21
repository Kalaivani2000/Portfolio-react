import {Component} from 'react'
import "./LightDarkMode.css";

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="app-container">
          <button type="button" onClick={this.onClickButton} className="button">
            {buttonText}
          </button>
      </div>
    )
  }
}

export default LightDarkMode
