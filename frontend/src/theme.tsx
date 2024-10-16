import { extendTheme } from "@chakra-ui/react"

const disabledStyles = {
  _disabled: {
    backgroundColor: "ui.main",
  },
}

const theme = extendTheme({
  styles: {
    global: {
      "html, body, #root": {
        color: "ui.light",
        background: `
          linear-gradient(315deg, #1B16FF 2%, #FB3939 22%, #6A2CFC 72%), 
          radial-gradient(circle, transparent, black)
        `, // Diagonal gradient with vignette effect
        backgroundBlendMode: "multiply", // Blend the gradients together
        backgroundRepeat: "no-repeat", // Prevent the background from repeating
        backgroundSize: "cover", // Ensure the background covers the entire area
        backgroundAttachment: "fixed", // Ensure the background stays fixed while scrolling
        height: "100%",
        minHeight: "100vh", // Ensure it covers the entire viewport height
        margin: 0,
        padding: 0,
      },
    }
  },
  fonts: {
    body: "PublicaSansRound, sans-serif",
    heading: "PublicaSansRound, sans-serif",
    mono: "PublicaSansRound, monospace",
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    ui: {
      main: "#009688",
      secondary: "#EDF2F7",
      success: "#48BB78",
      danger: "#E53E3E",
      light: "#FAFAFA",
      dark: "black",
      darkSlate: "#252D3D",
      dim: "#A0AEC0",
      claim: "#E89937",
    },
    tier: {
      free: {
        100: "#439AD3",
        200: "#3279C4",
        300: "#245EB4",
        400: "#007CFF",
      },
      fan: {
        100: "#5313C1",
        200: "#6839B9",
        300: "#9F7AEA",
        400: "#5E00FF",
      },
      vip: {
        100: "#E89937",
        200: "#F3BE44",
        300: "#ECC94B",
        400: "#FFB200",
      },
    },
  },
  components: {
    Button: {
      variants: {
        primary: {
          backgroundColor: "ui.main",
          color: "ui.light",
          _hover: {
            backgroundColor: "#00766C",
          },
          _disabled: {
            ...disabledStyles,
            _hover: {
              ...disabledStyles,
            },
          },
        },
        danger: {
          backgroundColor: "ui.danger",
          color: "ui.light",
          _hover: {
            backgroundColor: "#E32727",
          },
        },
        claim: {
          backgroundColor: "ui.claim",
          color: "black",
          _hover: {
            backgroundColor: "rgba(255, 255, 255, 0.16)",
          },
        },
        no_disable: {
          _disabled: {
            _hover: {
              background: "none"
            },
          },
        }
      },
    },
    Tabs: {
      variants: {
        rounded: {
          tab: {
            fontFamily: "PublicaSansRound",
            fontSize: "xl",
            // fontWeight: 800, // Use numeric value for bold
            fontStyle: "italic",
            borderRadius: "md",
            bg: "whiteAlpha.400",
            mr: 2,
            _selected: {
              color: "black",
              bg: "#439AD3",
              border: "1px",
              borderColor: "gray.400",
            },
          },
        },
      },
    },
    Menu: {
      variants: {
        darki: {
          list: {
            bg: "ui.dark",
          },
          item: {
            bg: "ui.dark",
            _hover: {
              bg: "ui.dark",
            },
          },
        },
      },
    },
  },
})

export default theme
