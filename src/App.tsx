
import './App.css'
import MyContainer from './components/MyContainer'
import MyList, {Item} from './components/MyList'

function App() {
  const header: string = "My List";
  const items: Item[] = [
    {id: "1", text: "Semmonen"},
    {id: "2", text: "Tämmönen"},
    {id: "3", text: "Tuommonen"},
  ];

  return (
    

    <div className="App">
      <h1>Hello World!</h1>
      <MyContainer>
        <MyList header={header} items={items}/>
      </MyContainer>
    </div>
  )
}

export default App
