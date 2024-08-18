import  useContext  from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player'
import Display from './components/Display';
import { PlayerContext } from './components/context/PlayerContext';
const App = () => {
  const {audioRef,track} = useContext(PlayerContext)
  console.log(track.file);
  return (
    <PlayerContextProvider>
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
          <Sidebar/>
          <Display/>
      </div>
       <Player/>
       <audio ref={audioRef}  src={track.file} preload='auto'></audio>
    </div>
    </PlayerContextProvider>
  );
}

export default App;
