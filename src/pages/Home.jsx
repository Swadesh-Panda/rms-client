import { useState, useEffect } from 'react'
import axios from 'axios'

// Material
import { Stack, Grid, Zoom } from '@mui/material'

// Components
import ProductCard from '../components/product/ProductCard'
import CategoryContainer from '../components/category/CategoryContainer'

const Home = () => {
  const [products, setProducts] = useState([])
  const [categoryArray, setCategoryArray] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <Stack>
      <CategoryContainer setCategoryArray={setCategoryArray} />

      <Grid
        container
        rowGap='30px'
        my='10px'
      >
        {products
          .filter(val => (categoryArray.length === 0) | categoryArray.includes(val.category))
          .map(product => (
            <Zoom
              in={true}
              key={product.id}
            >
              <Grid
                xl={3}
                md={4}
                sm={6}
                xs={12}
                item
                px={{ sm: '15px', xs: '30px' }}
                sx={{ transition: 'all 1s' }}
              >
                <ProductCard product={product} />
              </Grid>
            </Zoom>
          ))}
      </Grid>
    </Stack>
  )
}

export default Home
