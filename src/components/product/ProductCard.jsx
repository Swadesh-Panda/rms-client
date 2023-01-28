import { useState, useEffect } from 'react'

// Material
import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Badge,
  IconButton,
  Typography,
  Tooltip,
  ButtonGroup,
  Button,
  Slide,
} from '@mui/material'
import {
  LocalMallOutlined,
  AddRounded,
  RemoveRounded,
  LocalMall,
  AccessTimeRounded,
  CurrencyRupeeRounded,
} from '@mui/icons-material'

const ProductCard = ({ product }) => {
  const { title, src, time, price, category } = product

  const [addCart, setAddCart] = useState(false)
  const [count, setCount] = useState(0)

  const CustomButtonGroup = () => {
    return (
      <ButtonGroup
        disableElevation
        variant='contained'
        size='small'
        color='inherit'
        sx={{
          position: 'absolute',
          right: '0px',
          top: '-32px',
        }}
      >
        <Button sx={{ borderRadius: '5px 0px' }}>
          <RemoveRounded />
        </Button>

        <Button sx={{ borderRadius: '0px' }}>
          <AddRounded />
        </Button>
      </ButtonGroup>
    )
  }

  return (
    <Card
      variant='outlined'
      sx={{ borderRadius: '12px' }}
    >
      <CardMedia
        component='img'
        height='160px'
        alt={title}
        image={src}
      />
      <CardContent sx={{ position: 'relative' }}>
        <Stack
          direction='row'
          justifyContent='space-between'
        >
          <Typography
            gutterBottom
            fontWeight={700}
            fontSize={18}
          >
            {title}
          </Typography>

          <Tooltip title={count ? 'Remove from cart' : 'Add to cart'}>
            <IconButton
              color='inherit'
              sx={{ p: '0px' }}
              onClick={() => {
                count ? setCount(0) : setCount(1)
              }}
            >
              <Badge
                color='error'
                overlap='circular'
                badgeContent={count}
              >
                {count ? <LocalMall fontSize='medium' /> : <LocalMallOutlined fontSize='medium' />}
              </Badge>
            </IconButton>
          </Tooltip>

          <Slide
            direction='left'
            in={count}
          >
            <ButtonGroup
              disableElevation
              variant='contained'
              size='small'
              color='success'
              sx={{
                position: 'absolute',
                right: '0px',
                top: '-32px',
              }}
            >
              <Button
                sx={{ borderRadius: '8px 0px' }}
                onClick={() => {
                  setCount(count - 1)
                }}
              >
                <RemoveRounded />
              </Button>

              <Button
                sx={{ borderRadius: '0px' }}
                onClick={() => {
                  setCount(count + 1)
                }}
              >
                <AddRounded />
              </Button>
            </ButtonGroup>
          </Slide>
        </Stack>

        <Stack
          direction='row'
          pt
          justifyContent='space-between'
        >
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ display: 'flex' }}
          >
            <AccessTimeRounded
              fontSize='small'
              sx={{ mr: '2px' }}
            />
            {time.min}-{time.max} mins
          </Typography>

          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ display: 'flex' }}
          >
            <CurrencyRupeeRounded fontSize='small' /> {price}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default ProductCard
