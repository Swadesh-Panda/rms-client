import { useState, useEffect, useContext } from 'react'

// Material
import { Grid, Button, Stack, Tooltip, Badge, IconButton, AppBar } from '@mui/material'
import Tabs, { tabsClasses } from '@mui/material/Tabs'
import {
  RamenDining,
  LocalPizza,
  Cake,
  LocalBar,
  Icecream,
  LunchDining,
  RiceBowl,
  DinnerDining,
  SoupKitchen,
  Tune,
  ShoppingCartOutlined,
} from '@mui/icons-material'
import { grey } from '@mui/material/colors'

// Component
import { ScreenSizeContext } from '../../context/ScreenSizeContext'
import MobileButton from '../common/button/MobileButton'

const CategoryContainer = props => {
  const screenSize = useContext(ScreenSizeContext)

  const { setCategoryArray } = props
  const [selected, setSelected] = useState([])
  const [filters, setFilters] = useState([1, 2])

  const containerStyles = {
    borderWidth: { xs: '2px', sm: 0 },
    borderStyle: 'solid',
    borderColor: grey[300],
    borderRadius: '12px',
    bgcolor: 'white',
    py: '10px',

    [`& .${tabsClasses.scrollButtons}`]: {
      '&.Mui-disabled': { opacity: 0.2 },
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: grey[300],
      borderRadius: '8px',
      bgcolor: { xs: grey[300], sm: 'transparent' },
      mx: '5px',
    },
  }
  const buttonStyles = {
    borderRadius: '100px',
    borderColor: grey[300],
    borderWidth: '2px',
  }
  const filterButtonStyles = {
    borderWidth: '2px',
    borderColor: !filters.length ? grey[300] : 'inherit',
    p: '10px',
    '& .MuiButton-startIcon': {
      margin: 0,
    },
  }

  useEffect(() => {
    setCategoryArray(selected)
  }, [selected])

  return (
    <Stack
      // direction={screenSize.sm ? 'row' : 'column'}
      direction='row'
      gap={1}
      my='5px'
      position='sticky'
      top='70px'
      zIndex={100}
      bgcolor={!screenSize.sm ? 'transparent' : 'white'}
    >
      <Tabs
        value={false}
        variant='scrollable'
        scrollButtons={true}
        allowScrollButtonsMobile
        sx={containerStyles}
      >
        <Stack
          direction='row'
          spacing={{ xs: '10px', sm: '20px' }}
        >
          {categoryOptions.map(category => (
            <Grid
              item
              key={category.id}
            >
              <Button
                onClick={() =>
                  setSelected(arr =>
                    selected.includes(category.title)
                      ? arr.filter(val => val !== category.title)
                      : [...selected, category.title]
                  )
                }
                size={screenSize.sm ? 'large' : 'medium'}
                variant={selected.includes(category.title) ? 'contained' : 'outlined'}
                color={selected.includes(category.title) ? 'success' : 'inherit'}
                disableElevation
                startIcon={category.icon}
                sx={buttonStyles}
              >
                {category.title}
              </Button>
            </Grid>
          ))}
        </Stack>
      </Tabs>

      <Badge
        badgeContent={filters.length + selected.length}
        color='error'
        sx={{
          my: '10px',
          ml: 'auto',
          mr: '5px',
          maxWidth: 'fit-content',
          bgcolor: 'white',
          borderRadius: '15px',
        }}
      >
        <MobileButton
          variant='outlined'
          color='inherit'
          sx={
            screenSize.sm
              ? { borderWidth: '2px', borderColor: !filters.length ? grey[300] : 'inherit' }
              : filterButtonStyles
          }
          startIcon={<Tune />}
        >
          Filters
        </MobileButton>
      </Badge>
    </Stack>
  )
}

const categoryOptions = [
  { id: 1, title: 'Special', icon: <DinnerDining /> },
  { id: 2, title: 'Chinese', icon: <RamenDining /> },
  { id: 3, title: 'Pizza', icon: <LocalPizza /> },
  { id: 4, title: 'Burger', icon: <LunchDining /> },
  { id: 5, title: 'Rice', icon: <RiceBowl /> },
  { id: 6, title: 'Soups', icon: <SoupKitchen /> },
  { id: 7, title: 'Cake', icon: <Cake /> },
  { id: 8, title: 'Drinks', icon: <LocalBar /> },
  { id: 9, title: 'Deserts', icon: <Icecream /> },
]

export default CategoryContainer
