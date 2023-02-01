import { useState, useEffect, useContext } from 'react'

// Material
import { Grid, Button, Stack } from '@mui/material'
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
} from '@mui/icons-material'
import { grey } from '@mui/material/colors'

// Component
import { ScreenSizeContext } from '../../context/ScreenSizeContext'

const CategoryContainer = props => {
  const screenSize = useContext(ScreenSizeContext)

  const { setCategoryArray } = props
  const [selected, setSelected] = useState([])

  const containerStyles = {
    borderWidth: { xs: '2px', sm: 0 },
    borderStyle: 'solid',
    borderColor: grey[300],
    borderRadius: '12px',
    py: '5px',

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
  }

  useEffect(() => {
    setCategoryArray(selected)
  }, [selected])

  return (
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
  )
}

const categoryOptions = [
  { id: 1, title: 'Special', icon: <DinnerDining /> },
  { id: 2, title: 'Chinese', icon: <RamenDining /> },
  { id: 3, title: 'Pizza', icon: <LocalPizza /> },
  { id: 4, title: 'Burger', icon: <LunchDining /> },
  { id: 5, title: 'Rice', icon: <RiceBowl /> },
  { id: 6, title: 'Cake', icon: <Cake /> },
  { id: 7, title: 'Drinks', icon: <LocalBar /> },
  { id: 8, title: 'Deserts', icon: <Icecream /> },
]

export default CategoryContainer
