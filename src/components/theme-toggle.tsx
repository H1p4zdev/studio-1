
"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Render a placeholder or null to avoid hydration mismatch
    return <div className="h-8 w-16 opacity-0"></div>;
  }

  return (
    <SwitchPrimitives.Root
      checked={theme === "dark"}
      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      className={cn("neo-switch-track relative")}
      aria-label="Toggle theme"
    >
      <Sun className="absolute left-1.5 top-1/2 -translate-y-1/2 h-5 w-5 text-yellow-500 opacity-0 data-[state=unchecked]:opacity-100 transition-opacity duration-200" data-state={theme === "dark" ? "checked" : "unchecked"} />
      <SwitchPrimitives.Thumb className={cn("neo-switch-thumb")} />
      <Moon className="absolute right-1.5 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-400 opacity-0 data-[state=checked]:opacity-100 transition-opacity duration-200" data-state={theme === "dark" ? "checked" : "unchecked"} />
    </SwitchPrimitives.Root>
  )
}

    