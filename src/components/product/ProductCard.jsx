import { useEffect, useState } from 'react'

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
  Rating,
  Snackbar,
  Alert,
} from '@mui/material'
import {
  LocalMallOutlined,
  AddRounded,
  RemoveRounded,
  LocalMall,
  AccessTimeRounded,
  CurrencyRupeeRounded,
  Close,
} from '@mui/icons-material'
import cartApi from '../../utils/axios/Cartapi'

const ProductCard = ({ product }) => {
  const { title, img, minTime, maxTime, price, category } = product
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   if (count)
  //     cartApi.post('/products', {
  //       id: 1,
  //       title: title,
  //       price: price,
  //       category: category,
  //       time: {
  //         min: minTime,
  //         max: maxTime,
  //       },
  //       src: `http://localhost:4000/api/cdn/${img}`,
  //     })
  // }, [count])

  return (
    <Card>
      <CardMedia
        component='img'
        height='170px'
        alt={title}
        image={`http://localhost:4000/api/cdn/${img}`}
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
              color='inherit'
              sx={{
                position: 'absolute',
                right: '0px',
                top: '-32px',
              }}
            >
              <Button
                sx={{ borderRadius: '5px 0px' }}
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
          pt
          direction='row'
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
            {minTime}-{maxTime} mins
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
