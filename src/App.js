
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from './components/HeaderNav';
import VideoPlayer from './components/main/VideoPlayer';
import ProfileDiscription from './components/main/ProfileDiscription';
import Comments from './components/main/Comments';

function App() {
  return (
    <div className="App">
     <HeaderNav/>
     <div> 
     <div>
      <VideoPlayer/>
      <ProfileDiscription/>
      <Comments/>
     </div>
     {/* {videolist} */}
     </div>
    </div>
    
  );
}

export default App;
