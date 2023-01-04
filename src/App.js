
import './App.css';
import Example from './example.js'
import contex from './index.js'
function App() {
  return (
    <contex.Consumer>
      {
        value=>(
          <Example name={value}/>
        )
      }
    </contex.Consumer>
      
    
  );
}

export default App;
