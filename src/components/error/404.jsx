import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography } from '@mui/material'

const NotFound = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate(-1)
    }, 2000)
  }, [])

  return (
    <Typography
      variant='body1'
      color='initial'
    >
      404 | Not Found
    </Typography>
  )
}

export default NotFound
