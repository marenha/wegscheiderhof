import './App.css'
import NavigationBarTop from './components/NavigationBarTop'
import NavigationBarBottom from './components/NavigationBarBottom'

function App() {
  

  return (
    <div className="App__inner">
      <div className="parallax"> 
        <NavigationBarTop />


        <NavigationBarBottom />
        </div>
    </div>
  )
}

export default App
