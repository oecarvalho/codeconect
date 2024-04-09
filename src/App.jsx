import BarraDePesquisa from './components/BarraPesquisa/index.jsx'
import Sidebar from './components/Sidebar/index.jsx'
import './app.css';
import Filtro from './components/Filtro/index.jsx';

function App() {
  return(
    <div className='container'>
      <Sidebar/>
      
      <div>
        <BarraDePesquisa/>
        <Filtro/>
      </div>
      
    </div>
  
  )
}

export default App
