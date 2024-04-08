import BarraDePesquisa from './components/BarraPesquisa/index.jsx'
import Sidebar from './components/Sidebar/index.jsx'
import './app.css';
function App() {
  return(
    <div className='container'>
      <Sidebar/>
      <BarraDePesquisa/>
    </div>
  
  )
}

export default App
