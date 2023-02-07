
import { Nav, Servicios, Historias, Clientes, Partners, Contacto } from './Component';


function App() {
  return (
    <div class="bg-dark">
      <header>
        <Nav/>
        <Servicios/>
        <Historias/>
        <Clientes/>
        <Partners/>
        <Contacto/>       
      </header>
    </div>
  );
}

export default App;
