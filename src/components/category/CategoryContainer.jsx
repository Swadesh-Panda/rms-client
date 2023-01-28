import { useState, useEffect } from 'react'

// Material
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Grid } from '@mui/material'
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

// Component
import RoundButton from './../common/button/RoundButton'

const CategoryContainer = props => {
  const { setCategoryArray } = props
  const [selected, setSelected] = useState([])

  const theme = useTheme()
  const screenSize = {
    sm: useMediaQuery(theme.breakpoints.down('sm')),
    md: useMediaQuery(theme.breakpoints.down('md')),
    lg: useMediaQuery(theme.breakpoints.down('lg')),
  }

  const defaultStyles = {
    py: { sm: '15px', xs: '5px' },
    borderRadius: '12px',
    border: { xs: '2px solid #E0E0E0', sm: 'none' },

    [`& .${tabsClasses.scrollButtons}`]: {
      mx: '5px',
      border: '2px solid #E0E0E0',
      bgcolor: { xs: '#E0E0E0', sm: 'transparent' },
      borderRadius: '8px',
      '&.Mui-disabled': { opacity: 0.2 },
    },
  }

  const buttonStyles = {
    textTransform: 'unset',
    borderRadius: { sm: '12px', xs: '20px' },
    fontWeight: 700,
    mx: { xs: '5px', md: '10px' },
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
      sx={defaultStyles}
    >
      {categoryOptions.map(category => (
        <Grid
          item
          key={category.id}
        >
          <RoundButton
            onClick={() =>
              setSelected(arr =>
                selected.includes(category.title)
                  ? arr.filter(val => val !== category.title)
                  : [...selected, category.title]
              )
            }
            size={!screenSize.sm ? 'large' : 'medium'}
            color={selected.includes(category.title) ? 'success' : 'inherit'}
            disableElevation
            startIcon={category.icon}
            sx={buttonStyles}
          >
            {category.title}
          </RoundButton>
        </Grid>
      ))}
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
