import { Routes, Route } from 'react-router-dom'

import DefaultLayout from '../components/common/layout/DefaultLayout'

import Home from './Home'
import Cart from './Cart'
import Settings from './Settings'

import NotFound from '../components/error/404'
import SignUp from './SignUp'
import Login from './Login'

function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/cart'
          element={<Cart />}
        />
        <Route
          path='/settings'
          element={<Settings />}
        />
        <Route
          path='/signup'
          element={<SignUp />}
        />
        <Route
          path='/login'
          element={<Login />}
        />

        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </DefaultLayout>
  )
}                     

export default App
