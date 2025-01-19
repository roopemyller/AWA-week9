
import './App.css'
import MyContainer from './components/MyContainer'
import MyList from './components/MyList'

type Item = {
  id: string;
  text: string;
};

function App() {
  const header: string = "My List";
  const items: Item[] = [
    {id: "1", text: "Semmonen"},
    {id: "2", text: "Tämmönen"},
    {id: "3", text: "Tuommonen"},
  ];

  const list = {  header, items };

  return (
    

    <div className="App">
      <h1>Hello World!</h1>
      <MyContainer>
        <MyList list={list}/>
      </MyContainer>
    </div>
  )
}

export default App
