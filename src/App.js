import './App.css';
import Myheader from './components/header/Myheader';
import PhotoCard from './components/PhotoCard';

function App() {
  return (
    <div className="App">
      {/* <Myheader /> */}
      <div className='containerPhoto'>
        <PhotoCard image="https://avatars.githubusercontent.com/u/53428865?v=4" />
      </div>
    </div>
  );
}

export default App;
