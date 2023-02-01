import { grey } from "@mui/material/colors"

const components = {
    MuiButton: {
        defaultProps: {
            disableElevation: true,
            variant: 'contained',
            color: 'default',
            size: 'large',
        },
        styleOverrides: {
            root: {
                textTransform: 'unset',
                height: 'fit-content',
                minWidth: 0,
                fontWeight: 700,
                borderRadius: '12px',
            },
        }
    },
    MuiCard: {
        defaultProps: {
            variant: 'outlined'
        },
        styleOverrides: {
            root: {
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: grey[300],
                borderRadius: '12px'
            }
        }
    }
}

export default components