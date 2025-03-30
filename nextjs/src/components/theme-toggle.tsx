"use client"
import { useTheme } from 'next-themes'
import { Moon, Sun } from "lucide-react"
const ThemeToggle = () => {

    const { setTheme, theme } = useTheme()

    return (
        <div>

            {
                theme === "light" ?
                    <Moon onClick={() => setTheme("dark")} /> :
                    <Sun onClick={() => setTheme("light")} />
            }
        </div>
    )
}

export default ThemeToggle
