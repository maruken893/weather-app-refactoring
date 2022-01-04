import logo from "./logo.svg";
import "./App.css";
import Container from "@material-ui/core/Container";
import { createTheme, ThemeProvider } from "@material-ui/core/";
import { LocationForm } from "./components/LocationForm";
import { LocationCardList } from "./components/LocationCardList";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      backgroundColor: "#f4f4f4",
    },
  };
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container>
        <LocationForm />
        <LocationCardList />
      </Container>
    </div>
  );
}

export default App;
