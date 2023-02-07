
import './servicios.css';
import { cloud,soft,infra,tel,comu } from '../../img/Servicios';


function Servicios() {
  return (
    <div>
      <h1 class="text-white text-center m-5">SERVICIOS</h1>
    
    <div class="container-fluid text-center">
        <div class=" row row-cols-5">
            <div class="box fact col">
              <img class='img' src={soft} alt="SOFTWARE FACTORY"/>
              <h5 class="mt-3 mb-3">SOFTWARE FACTORY</h5>
              <p>
              Desarrollamos soluciones de software a medida utilizando metodologías ágiles y filosofía DevOps. Entre los principales servicios, se incluyen desarrollos nuevos, mantenimiento evolutivo, mantenimiento adaptativo, así como también corrección de módulos específicos. Estamos en condiciones de abarcar la totalidad del ciclo de desarrollo de software o algunas de las etapas</p>
            </div>
            <div class='box inf'>
              <img class='img' src={infra} alt="INFRAESTRUCTURA IT"/>
              <h5 class="mt-3 mb-3">INFRAESTRUCTURA IT</h5>
              <p>Diseñamos infraestructuras de servidores convergentes e hiperconvergentes con la flexibilidad de requerimientos que necesites, ya sean para sistemas de servicios on-premises o cloud. Armado de centros de cómputos desde el desglose de requerimientos de recursos computacionales y de almacenamiento según carga de trabajo dispuesto a utiliza</p>
            </div>
            <div class='box comu'>
              <img class='img' src={comu} alt="COMUNICACIONES"/>
              <h5 class="mt-3 mb-3">COMUNICACIONES</h5>
              <p>La diversidad de servicios implementados para cubrir diferentes necesidades requiere de infraestructuras de comunicaciones no solo eficientes, sólidas y seguras. Nuestro mayor diferencial deriva en la capacidad con que diseñamos redes de datos, comunicando sus sitios y sucursales remotas cómo si estuviesen en el mismo lugar en el que usted se encuenta</p>
            </div>
            <div class='box cloud'>
              <img class='img' src={cloud} alt="CLOUD COMPUTING"/>
              <h5 class="mt-3 mb-3">CLOUD COMPUTING</h5>
              <p>Permita que el costo operativo de su negocio crezca o disminuya dinámicamente en función del uso requerido por él mismo. Despliegue aplicaciones en una nube privada, pública o híbrida bajo tecnologías como Docker y Kubernetes, minimizando las necesidades del despliegue de infraestructuras ociosas, trabajando con la infraestructura como código</p>
            </div>
            <div class='box tel'>
              <img class='img' src={tel} alt="TELEFONIA IP"/>
              <h5 class="mt-3 mb-3">TELEFONIA IP</h5>
              <p>Brindamos un amplio abanico de posibilidades para centrales telefónicas y para la implementación de soluciones basadas en sistemas de comunicaciones, interconexión de PBX por protocolos tanto digitales como analógicos. Ampliación de centrales telefónicas antiguas a sistemas VOIP. Servicio de Central virtual en la nube (cloud). Desarrollo de sistemas sobre plataformas VOIP</p>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Servicios;
