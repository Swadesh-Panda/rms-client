import { createTheme } from "@mui/material";
import { grey } from '@mui/material/colors'

// Options
import typography from './options/typography'
import components from "./options/components";

const lightTheme = createTheme({
    typography: typography,
    components: components,

    palette: {
        mode: 'light',
        default: {
            main: grey[300],
            light: grey[50],
            dark: grey[100],
            contrastText: '#000',
        },
    },
})

export default lightTheme