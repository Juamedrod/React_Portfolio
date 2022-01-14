import './App.css';
import Marker from './components/Marker';
import PhotoCard from './components/PhotoCard';

function App() {
  return (
    <div className="App">
      <div className='containerPhoto'>
        <PhotoCard image="https://avatars.githubusercontent.com/u/53428865?v=4" />
      </div>
      <div className='fixed-bottom w-100'>
        <Marker />
      </div>
    </div>
  );
}

export default App;
