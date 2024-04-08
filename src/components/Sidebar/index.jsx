import Logo from '../Sidebar/assets/codeconect-logo.svg';
import Feed from '../Sidebar/assets/feed.svg';
import Account from '../Sidebar/assets/account_circle.svg';
import Info from '../Sidebar/assets/info.svg';
import Logout from '../Sidebar/assets/logout.svg';
import './styles.css';


export default function Sidebar() {
  return (
    <aside>
      <img src={Logo} alt="Logo do CodeConect" />

      <nav>
        <ul className='lista-sidebar'>
          <li>
            <a href="#" className='item__link-publicacao'>Publicar</a>
          </li>
           
          <li>
            <a href="#" className='item__link item__link--ativo'>
              <img src={Feed} alt=""/>
              <span>Feed</span>
            </a>
          </li>

          <li>
            <a href="#" className='item__link'>
              <img src={Account} alt=""/>
              <span>Perfil</span>
            </a>
          </li>

          <li>
            <a href="#" className='item__link'>
              <img src={Info} alt=""/>
              <span>Sobre</span>
            </a>
          </li>

          <li>
            <a href="#" className='item__link'>
              <img src={Logout} alt=""/>
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
