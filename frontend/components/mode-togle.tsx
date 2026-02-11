"use client"

import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "lucide-react"

export const ModeToggle = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Prevent hydration mismatch by only rendering after mount
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <div className="size-4" /> // Placeholder to avoid layout shift

    const toggleTheme = () => {
        if (theme === "dark") {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    }

    return (
        <button 
            onClick={toggleTheme}
            className="size-8 flex items-center justify-center relative hover:bg-accent rounded-md transition-colors"
            aria-label="Toggle theme"
        >
            <SunIcon 
                size={18} 
                className="rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" 
            />
            <MoonIcon 
                size={18} 
                className="absolute rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" 
            />
        </button>
    )
}