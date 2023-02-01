import { useState, useEffect, useContext } from 'react'
import api from '../../utils/axios/Axios'

// Material
import { AppBar, Toolbar, Tooltip, Stack, Avatar, Button, Divider, Badge } from '@mui/material'
import {
  FastfoodRounded,
  ShoppingCartOutlined,
  SearchRounded,
  SearchOffRounded,
} from '@mui/icons-material'

// Components
import BasicLink from '../common/link/BasicLink'
import MobileButton from '../common/button/MobileButton'
import Searchbar from '../common/input/Searchbar'
import { ScreenSizeContext } from '../../context/ScreenSizeContext'

const Navbar = () => {
  const screenSize = useContext(ScreenSizeContext)

  const [openSearch, setOpenSearch] = useState(false)
  const [searchOptions, setSearchOptions] = useState([])

  useEffect(() => {
    api
      .get('/products')
      .then(res => setSearchOptions(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <AppBar
      color='inherit'
      variant='outlined'
      elevation={0}
      sx={{ px: { xs: '0px', sm: '30px', md: '50px', lg: '100px' } }}
    >
      <Toolbar disableGutters>
        <Stack
          direction='row'
          width='100%'
          alignItems='center'
        >
          <Stack
            direction='row'
            alignItems='end'
            gap={screenSize.sm ? '10px' : '5px'}
            padding='10px'
            flexGrow={1}
          >
            <BasicLink to='/'>
              <Tooltip title='Home'>
                <FastfoodRounded fontSize='large' />
              </Tooltip>
            </BasicLink>

            {screenSize.sm ? (
              <Searchbar options={searchOptions} />
            ) : (
              <MobileButton
                onClick={() => setOpenSearch(!openSearch)}
                startIcon={openSearch ? <SearchOffRounded /> : <SearchRounded />}
              />
            )}
          </Stack>

          <Stack
            direction='row'
            alignItems='center'
            gap='10px'
            padding='10px'
          >
            <Button
              variant='text'
              color='inherit'
              size={screenSize.md ? 'large' : 'medium'}
            >
              Order History
            </Button>

            <Divider
              orientation='vertical'
              flexItem
            />

            <BasicLink to='/cart'>
              <Tooltip title='View Cart'>
                <Badge
                  badgeContent={4}
                  color='error'
                >
                  <MobileButton startIcon={<ShoppingCartOutlined />}>Cart</MobileButton>
                </Badge>
              </Tooltip>
            </BasicLink>

            <BasicLink to='/settings'>
              <Tooltip title='Open User Settings'>
                <Avatar
                  sx={{ borderRadius: '12px' }}
                  alt='Person'
                  src='/person.png'
                />
              </Tooltip>
            </BasicLink>
          </Stack>
        </Stack>
      </Toolbar>

      {openSearch && <Searchbar options={searchOptions} />}
    </AppBar>
  )
}

export default Navbar
