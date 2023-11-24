import './navbar';
import Navbar from './navbar';
import Home from './home';

function App() {
  // const title = 'Welcome to the new blog';
  // const likes = 50;
  // const person = {name:'James', age:20};
  // const url = "https://www.google.com";
  return (
    <div className="App">
      <div className="content">
        <Navbar />
        {/* <h1>{title}</h1>
        <p>Liked <span>{likes}</span> times</p>
        <p> Mostly by <span>{person.name}</span> who's <span>{person.age}</span></p>
        <p>Go search us on <a href={url}>Google</a></p> */}
        <Home />
      </div>
    </div>
  );
}

export default App;
