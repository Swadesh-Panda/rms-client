import { Link } from 'react-router-dom'

const BasicLink = props => {
  const { children, ...rest } = props

  const defaultStyles = {
    color: 'inherit',
    textDecoration: 'none',
  }

  return (
    <Link
      {...rest}
      style={defaultStyles}
    >
      {children}
    </Link>
  )
}

export default BasicLink
