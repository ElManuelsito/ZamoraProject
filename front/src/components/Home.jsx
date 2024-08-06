// aca iria import {componente}, cualquiera de los que ya existen, asi:
// import { Card } from './Card'
import { Carousel } from './Carousel/Carousel';

export const Home = () => {
  return (
    <>
        {/* y acá iria el tag de dichos componentes (con sus props si los usa)*/}
        {/* div row
                div col
                    <Card
                    img
                    .
                    ..
                    ...
                    />
                div col
                    lo
                    mis
                    mo
                ...
                /div
            /div*/}
      <Carousel
        first_carousel_imagen = 'zamora_patient_real.png' 
        second_carousel_imagen = 'another_real_zamora_patient.png' 
        third_carousel_imagen = 'actual_zamora_patient.png' 
      />  
    </>
  )
}
