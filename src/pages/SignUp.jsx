import React, { useContext, useState } from 'react'
import { Card, CardHeader, CardContent, Grid, TextField, Button, Stack } from '@mui/material'
import api from '../utils/axios/Axios'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    localStorage.setItem('user', JSON.stringify({email, password}))

    // api
    //   .post('/user/signup', { email, password })
    //   .then(res => {
    //     localStorage.setItem('user', JSON.stringify(res.data))
    //     dispatch({ type: 'LOGIN', payload: res.data })
    //   })
    //   .catch(err => console.log(err.message))
  }

  return (
    <Card
      className='signup'
      sx={{ width: '450px' }}
    >
      <CardHeader
        sx={{ textAlign: 'center' }}
        title='Sign Up'
      />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Stack spacing={6}>
            <TextField
              label='Email'
              InputLabelProps={{ shrink: true }}
              placeholder='name@example.com'
              fullWidth
              required
              type='email'
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <TextField
              label='Password'
              InputLabelProps={{ shrink: true }}
              placeholder='min. 8 characters'
              fullWidth
              required
              type='password'
              onChange={e => setPassword(e.target.value)}
              value={password}
            />

            <Button type='submit'>Sign Up</Button>
          </Stack>
        </form>
      </CardContent>
    </Card>
  )
}

export default SignUp
