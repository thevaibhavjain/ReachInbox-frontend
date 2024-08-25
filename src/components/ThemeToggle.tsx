import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(darkMode ? 'light' : 'dark');
        root.classList.add(darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <div className="mr-10">
            <div className="flex flex-row items-center px-3.5 gap-2 w-12 h-6 bg-gray-900 border rounded-full">
            
            <button
        
            onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? (
                    
                    <FaSun className="mr-2"  />
                    
                ) : (
                    <FaMoon className="mr-2" />
                )}
                <span></span>
            </button>
                </div>
        </div>
    );
}

export default ThemeToggle;

