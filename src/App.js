import './App.css';
import Row from './components/Row';
import requests from './request';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">  </header>
      <Banner/>
<Row title="Trending in India"
  fetchUrl={requests.fetchTrending}
  />
  <Row title="Netflix Originals"
  fetchUrl={requests.fetchNetflixOriginals}
  isLargeRow={true}
  />
  <Row title="Top Rated"
  fetchUrl={requests.fetchTopRated}
  />
  <Row title="Action "
  fetchUrl={requests.fetchActionMovies}
  />
  <Row title="Comedy "
  fetchUrl={requests.fetchComedyMovies}
  />
  <Row title="Horror"
  fetchUrl={requests.fetchHorrorMovies}
  />
  <Row title="Romance "
  fetchUrl={requests.fetchRomanceMovies}
  />
  <Row title="Documentaries"
  fetchUrl={requests.fetchDocumentaries}
  />
    </div>
  );
}

export default App;
