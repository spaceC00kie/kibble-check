import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import { createTheme, ThemeProvider } from "@mui/material/styles"
//@ts-ignore
import { registerSW } from "virtual:pwa-register"
import { WindowSize } from "./containers/WindowSize"
import "./index.scss"
import { Auth } from "./containers/Auth"
import { Date } from "./containers/Date"

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#93c5fd", // tailwind blue 300
    },
    background: {
      default: "#192231",
      paper: "#24344d",
    },
  },
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth.Provider>
      <WindowSize.Provider>
        <Date.Provider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </Date.Provider>
      </WindowSize.Provider>
    </Auth.Provider>
  </React.StrictMode>,
)

registerSW({})
