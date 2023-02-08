import Carousel from 'better-react-carousel';
import  {alumbrado, asuntosInternos, bcra, disco, dze, exsa, g20, globaltruck, hcank, ituzaingo, jumbo, lma, monitoreo, moreno, mroyo, polywall, posadas, provincia,} from '../../img/Historias';
import './historias.css';


function Historias() {
  return (
    <div>
      <h1 class="text-white text-center m-5">HISTORIAS DE ÉXITOS</h1>
      <Carousel cols={5} rows={1} gap={2} loop={true} autoplay={2500}>
      <Carousel.Item class='img0'>
        <img class='img1' src={alumbrado} alt='alumbrado'/>
        
      </Carousel.Item>
      <Carousel.Item class='img0'>
        <img class='img1'  src={asuntosInternos} alt='asuntos-Internos' title='holis' />
        
      </Carousel.Item>
      <Carousel.Item class='img0'>
        <img class='img1'  src={bcra} alt='bcra' />
      </Carousel.Item>
      <Carousel.Item class='img0'>
        <img class='img1'  src={disco} alt='asuntos-Internos' />
      </Carousel.Item>
      <Carousel.Item class='img0'>
        <img class='img1'  src={dze} alt='asuntos-Internos' />
      </Carousel.Item>
      <Carousel.Item class='img0'>
        <img class='img1'  src={exsa} alt='asuntos-Internos' />
      </Carousel.Item>
      <Carousel.Item class='img0'>
        <img class='img1'  src={g20} alt='asuntos-Internos' />
      </Carousel.Item>
      <Carousel.Item class='img0'>
        <img class='img1'  src={globaltruck} alt='asuntos-Internos' />
      </Carousel.Item>
      <Carousel.Item class='img0'>
        <img class='img1'  src={hcank} alt='asuntos-Internos' />
      </Carousel.Item>
      <Carousel.Item class='img0'>
        <img class='img1'  src={ituzaingo} alt='asuntos-Internos' />
      </Carousel.Item>
      <Carousel.Item class='img0'>
        <img class='img1'  src={jumbo} alt='asuntos-Internos' />
      </Carousel.Item>
      <Carousel.Item class='img0'>
        <img class='img1'  src={lma} alt='asuntos-Internos' />
      </Carousel.Item>
      <Carousel.Item class='img0'>
        <img class='img1'  src={monitoreo} alt='asuntos-Internos' />
      </Carousel.Item>
      <Carousel.Item class='img0'>
        <img class='img1'  src={moreno} alt='asuntos-Internos' />
      </Carousel.Item>
      <Carousel.Item class='img0'>
        <img class='img1'  src={mroyo} alt='asuntos-Internos' />
      </Carousel.Item>
      <Carousel.Item class='img0'>
        <img class='img1'  src={polywall} alt='asuntos-Internos' />
      </Carousel.Item>
      <Carousel.Item class='img0'>
        <img class='img1'  src={posadas} alt='asuntos-Internos' />
      </Carousel.Item>
      <Carousel.Item class='img0'>
        <img class='img1'  src={provincia} alt='asuntos-Internos' />
      </Carousel.Item>
      <Carousel.Item class='img0'>
        <img class='img1'  src={posadas} alt='asuntos-Internos' />
      </Carousel.Item>
      <Carousel.Item class='img0'>
        <img class='img1'  src={provincia} alt='asuntos-Internos' />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Historias;
