// src/styles/theme.ts
import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    primary: '#6C00FF',
    primaryDark: '#5A00CC',
    background: '#FFFFFF',
    backgroundGradient: 'linear-gradient(180deg, #F9FAFB 0%, #E5E7EB 100%)',
    text: '#111827',
    white: '#FFFFFF',
    gray: '#9CA3AF',
    grayLight: '#F3F4F6',
  },
  radius: {
    sm: '4px',
    md: '6px',
    lg: '12px',
    full: '9999px',
  },
  fonts: {
    body: '"Inter", system-ui, sans-serif',
    heading: '"Inter", system-ui, sans-serif',
  },
}
