import  {useTheme} from "@/store/themeContext";


 const ThemeToggle = () => {
    const { theme, toggleHandler } = useTheme();

    return (
        <button onClick={toggleHandler} className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
            {theme === 'dark' ? 'Switch to Light 🌞' : 'Switch to Dark 🌙'}
        </button>
    );
};

export default ThemeToggle;