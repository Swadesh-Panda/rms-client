// Material
import { ThemeProvider, Stack, Box, Modal } from '@mui/material'

// Components
import lightTheme from '../../../theme/lightTheme'
import NavBar from '../../nav/Navbar'
import Footer from '../../footer/Footer'
import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import SignUp from '../../../pages/SignUp'

const DefaultLayout = ({ children }) => {
  const { user } = useContext(AuthContext)

  return (
    <ThemeProvider theme={lightTheme}>
      <Modal
        open={localStorage.getItem('user') ? false : true}
      >
        <Box
          height='100%'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <SignUp />
        </Box>
      </Modal>

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
