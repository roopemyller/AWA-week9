
import './App.css'
import MyContainer from './components/MyContainer'
import MyList from './components/MyList'

function App() {

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <MyContainer>
        <MyList />
      </MyContainer>
    </div>
  )
}

export default App
