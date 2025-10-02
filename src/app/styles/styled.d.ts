// src/styles/styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      primaryDark: string
      background: string
      backgroundGradient: string
      text: string
      white: string
      gray: string
      grayLight: string
    }
    radius: {
      sm: string
      md: string
      lg: string
      full: string
    }
    fonts: {
      body: string
      heading: string
    }
  }
}
