// Material
import { ThemeProvider, Stack, Box } from '@mui/material'

// Components
import lightTheme from '../../../theme/lightTheme'
import NavBar from '../../nav/Navbar'
import Footer from '../../footer/Footer'

const DefaultLayout = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Stack
        minHeight='100vh'
        justifyContent='space-between'
      >
        <NavBar />

        <Box
          sx={{
            mx: { xs: '10px', sm: '30px', md: '50px', lg: '100px' },
            mt: '75px',
          }}
        >
          {children}
        </Box>

        <Footer>All Rights Reserved. Copyright © Restro-FoodService Ltd.</Footer>
      </Stack>
    </ThemeProvider>
  )
}

export default DefaultLayout
