import "./theme.css";
import useLocalStorage from "./useLocalStorage";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  

  return (
    <div className="light-dark-mode"  data-theme={theme}>
      <div className="container">
        <p>Hello world</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  )
}

export default LightDarkMode; 