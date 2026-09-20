"use client"
import { Moon, Sun } from 'lucide-react'
import React from 'react'

export default function ToggleTheme() {
    
  return (
    <div className="flex gap-6 rounded-2xl bg-slate-200 p-2 dark:bg-slate-800  border border-white/30 transition-all duration-150">
            <button><Sun className="h-4 w-4 text-slate-800 dark:text-slate-200" /></button>
            <button><Moon className="h-4 w-4 text-slate-800 dark:text-slate-200" /></button>
    </div>
  )
}
