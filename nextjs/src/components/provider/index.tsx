"use client"

import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"


const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <SessionProvider>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange        >
                {children}
            </ThemeProvider>
        </SessionProvider>
    )
}

export default Providers
