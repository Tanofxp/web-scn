
import logo from '../../img/logo.png';



function Nav() {
  return (
    
      <nav class=" ms-5 navbar navbar-expand-lg ">
        <div class="d-flex flex-row">
              <img class="mb-3" src={logo} alt="logo" style={{width:'10rem', height:'2rem'}}/>
              <button class="btn btn-info ms-3 text-white bg-dark border border-0">Home</button>
              <button class="btn btn-info ms-3 text-white bg-dark border border-0">Servicios</button>
              <button class="btn btn-info ms-3 text-white bg-dark border border-0">Histrorias de Éxitos</button>
              <button class="btn btn-info ms-3 text-white bg-dark border border-0">Clientes</button>
              <button class="btn btn-info ms-3 text-white bg-dark border border-0">Contacto</button>
        </div>
        
      </nav>
    
  );
}

export default Nav;
