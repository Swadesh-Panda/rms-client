import { Stack, Box } from '@mui/material'
import NavBar from '../../nav/Navbar'
import DefaultFooter from '../../footer/DefaultFooter'

const DefaultLayout = ({ children }) => {
  return (
    <Stack
      minHeight='100vh'
      justifyContent='space-between'
    >
      <NavBar />

      <Box
        sx={{
          mx: { xs: "10px", sm: "30px", md: "50px", lg: "100px" },
          mt: "75px",
        }}
      >
        {children}
      </Box>

      <DefaultFooter>All Rights Reserved. Copyright © Restro-FoodService Ltd.</DefaultFooter>
    </Stack>
  )
}

export default DefaultLayout
