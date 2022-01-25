import Map from './Components/Map'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App-Contents">
        <div className="App-Left">
          <Map />
        </div>
        <div className="App-Right">
          <p>test</p>
        </div>
      </div>
    </div>
  )
}

export default App
