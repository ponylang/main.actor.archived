import React from "react"
import { ThemeProvider } from "emotion-theming"

const tokens = {
  colors: {
    brown: ["#281203", "#f1e3d9"],
  },
}

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={tokens}>{element}</ThemeProvider>
}
