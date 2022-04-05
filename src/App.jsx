import "./styles/styles.scss";
import { connect, useDispatch } from "react-redux";
import { fetchData } from "./store/actions";
import CharacterList from "./components/CharacterList";
import Instructions from "./components/Instructions";

import Search from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { useForm } from "./hooks/useForm";

function App(props) {
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm();
  const { nameCharacter } = formValues;

  const handleSubmit = () => {
    dispatch(fetchData(nameCharacter));
  };

  return (
    <div className="App">
      <Instructions />

      <form>
        <FormControl>
          <InputLabel htmlFor="search-character">Search</InputLabel>
          <OutlinedInput
            id="search-character"
            name="nameCharacter"
            onChange={handleInputChange}
            label="Search"
            variant="standard"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="search"
                  edge="end"
                  onClick={handleSubmit}
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </form>

      <CharacterList />
      <small>
        Esta prueba fue inspirada en{" "}
        <a href="https://codesandbox.io/s/fancy-wind-dw5s53">codesandbox</a>
      </small>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    characters: state.first.characters
  };
};

const mapDispatchToProps = {
  fetchData
};

export default connect(mapStateToProps)(App);
