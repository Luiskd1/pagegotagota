import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";




export const purpleTheme = createTheme({
    palette:{
        primary:{
            main:'#f0f0f0'
        },

        secondary:{
            main:'#543884'
        },

        error:{
            main:red.A400
        },

        info:{
            main:'#543884'
        },

    }
})
