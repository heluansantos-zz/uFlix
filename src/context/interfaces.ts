import { ReactNode } from 'react'

export interface HomeContextProviderProps {
  children: ReactNode
}

export interface HomeContextData {
  darkTheme: boolean
  updateTheme: (value: number) => void
}
