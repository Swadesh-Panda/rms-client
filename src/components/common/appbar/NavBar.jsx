import {
  AppBar,
  Toolbar,
  IconButton,
  Tooltip,
  Stack,
  Avatar,
  Button,
  Autocomplete,
  InputBase,
  InputAdornment,
  Divider,
  Badge,
} from "@mui/material";

import {
  FastfoodRounded,
  ShoppingCartOutlined,
  SearchRounded,
} from "@mui/icons-material";

import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

import UnstyledLink from "./../link/UnstyledLink";

const SearchBar = ({ options }) => {
  return (
    <Autocomplete
      freeSolo
      openOnFocus
      autoComplete
      disableClearable
      autoHighlight
      size="small"
      sx={{
        p: "5px 10px",
        bgcolor: "#EDEEF2",
        borderRadius: "12px",
        display: { xs: "none", sm: "flex" },
      }}
      options={options}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => {
        const { InputLabelProps, InputProps, ...rest } = params;
        return (
          <Stack direction="row">
            <InputBase
              sx={{ width: { xs: "150px", md: "250px" } }}
              {...params.InputProps}
              {...rest}
              fullWidth
              placeholder="Search..."
              endAdornment={
                <InputAdornment position="end">
                  <SearchRounded />
                </InputAdornment>
              }
            />
          </Stack>
        );
      }}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option.title, inputValue, {
          insideWords: true,
        });
        const parts = parse(option.title, matches);

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
        );
      }}
    />
  );
};

const NavBar = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      variant="outlined"
      sx={{ px: { xs: "10px", md: "100px" } }}
    >
      <Toolbar disableGutters>
        <Stack direction="row" width="100%" alignItems="center" gap="10px">
          <Stack
            direction="row"
            alignItems="end"
            gap="10px"
            padding="10px"
            flexGrow={1}
          >
            <UnstyledLink to="/">
              <Tooltip title="Home">
                <IconButton
                  size="large"
                  color="inherit"
                  sx={{ p: "5px", m: "0px" }}
                >
                  <FastfoodRounded fontSize="large" />
                </IconButton>
              </Tooltip>
            </UnstyledLink>

            <SearchBar options={options} />
          </Stack>

          <Stack direction="row" alignItems="center" gap="12px" padding="10px">
            <Button
              size="large"
              variant="text"
              color="inherit"
              sx={{
                textTransform: "unset",
                borderRadius: "12px",
                fontWeight: 700,
              }}
            >
              Order History
            </Button>

            <Divider orientation="vertical" flexItem />

            <UnstyledLink to="/cart">
              <Tooltip title="View Cart">
                <Badge badgeContent={4} color="error">
                  <Button
                    size="large"
                    variant="contained"
                    color="inherit"
                    disableElevation
                    startIcon={<ShoppingCartOutlined />}
                    sx={{
                      textTransform: "unset",
                      borderRadius: "12px",
                      fontWeight: 700,
                      display: { xs: "none", sm: "flex" },
                    }}
                  >
                    Cart
                  </Button>

                  <IconButton
                    aria-label="settings"
                    sx={{ p: "0px", display: { xs: "flex", sm: "none" } }}
                  >
                    <Avatar sx={{ borderRadius: "12px", bgcolor: "#E0E0E0" }}>
                      <ShoppingCartOutlined sx={{ color: "black" }} />
                    </Avatar>
                  </IconButton>
                </Badge>
              </Tooltip>
            </UnstyledLink>

            <UnstyledLink to="/settings">
              <Tooltip title="Open User Settings">
                <IconButton aria-label="settings" sx={{ p: "0px" }}>
                  <Avatar
                    sx={{ borderRadius: "12px", bgcolor: "#4E60FF" }}
                    variant="rounded"
                    alt="Josh"
                    src="/person.png"
                  />
                </IconButton>
              </Tooltip>
            </UnstyledLink>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

const options = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];

export default NavBar;
