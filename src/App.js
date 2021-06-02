 import './App.css';
 import Row from './Row'
 import requests from './Request'
 import Banner from './Banner'
 import Nav from './Nav'
 function App() {
  return (
    <div className="App">
    <Nav />
    <Banner />

     < Row title="Top Rated" fetchUrl={requests.fetchTopRated}
       isLargeRow
     />
     < Row  title="Trending Now" fetchUrl={requests.fetchTrending}/>
      
     < Row  title="Upcoming" fetchUrl={requests.fetchUpcoming}/>
     < Row title="Popular" fetchUrl={requests.fetchPopular}/>

      
    </div>

    
  );
}

export default App;



// c282cfdd0abc92e924fdf7cd24f20279
