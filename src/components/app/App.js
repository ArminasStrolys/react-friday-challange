import Movies from "../movies/Movies";
import Movie from "../movie/Movie";
import Singlemovie from "../singleMovie/SingleMovie";
import Navi from "../navi/Navi";

function App() {
  return (
    <div className="App">
      <Navi />
      <Singlemovie />
    </div>
  );
}

export default App;
