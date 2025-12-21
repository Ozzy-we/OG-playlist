import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewAlbum from './components/NewAlbum';
import Merch from './components/Merch';

function App(){
  return(
    <div className="min-h-screen w-full bg-theme-black">
      <Navbar />
      <Hero />
      <NewAlbum />
      <Merch />
    </div>
  )
}

export default App;