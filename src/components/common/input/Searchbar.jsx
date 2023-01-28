// Material
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Autocomplete, InputBase, InputAdornment, Fade, Paper } from '@mui/material'
import { SearchRounded } from '@mui/icons-material'

// Auto Suggest
import parse from 'autosuggest-highlight/parse'
import match from 'autosuggest-highlight/match'

const Searchbar = props => {
  const theme = useTheme()
  const screenSize = {
    sm: useMediaQuery(theme.breakpoints.down('sm')),
    md: useMediaQuery(theme.breakpoints.down('md')),
    lg: useMediaQuery(theme.breakpoints.down('lg')),
  }

  const DefaultPaperComponent = props => {
    return (
      <Fade in={true}>
        <Paper
          variant={!screenSize.sm ? 'outlined' : 'elevation'}
          elevation={!screenSize.sm ? 0 : 5}
          sx={{
            borderRadius: '12px',
            mt: '10px',
            width: { sm: '200px', md: '250px' },

            position: 'relative',
            left: { xs: '0px', sm: '-10px' },
          }}
          {...props}
        />
      </Fade>
    )
  }

  const defaultStyles = {
    p: '5px 10px',
    bgcolor: '#EDEEF2',
    borderRadius: !screenSize.sm ? '12px' : 0,
    width: !screenSize.sm ? { sm: '200px', md: '250px' } : '100%',
  }

  return (
    <Autocomplete
      freeSolo
      openOnFocus
      autoComplete
      disableClearable
      selectOnFocus
      autoHighlight
      size='small'
      PaperComponent={DefaultPaperComponent}
      getOptionLabel={option => option.title}
      ListboxProps={{ style: { maxHeight: '250px', margin: '5px 0px' } }}
      sx={defaultStyles}
      {...props}
      renderInput={params => {
        const { InputLabelProps, InputProps, ...rest } = params
        return (
          <InputBase
            fullWidth
            placeholder='Search...'
            {...InputProps}
            {...rest}
            endAdornment={
              <InputAdornment position='end'>
                <SearchRounded />
              </InputAdornment>
            }
          />
        )
      }}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option.title, inputValue, {
          insideWords: true,
        })
        const parts = parse(option.title, matches)

        return (
          <li {...props}>
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 500,
                  }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          </li>
        )
      }}
    />
  )
}

export default Searchbar
