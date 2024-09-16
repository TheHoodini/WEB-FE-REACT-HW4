import { useState } from 'react'
import './index.css'

import Header from './assets/components/Header'
import Intro from './assets/components/Intro'
import Dofa from './assets/components/Dofa'
import TitleText from './assets/components/TitleText'
import Footer from './assets/components/Footer'
import ObjTable from './assets/components/ObjTable'

function App() {

  return (
    <div className='font-lexend'>
      <Header />
      <main className='mx-14'>

        <Intro />
        <ol>
          <li className='mt-10 font-extrabold text-2xl mb-5'>1. Diagnóstico Actual</li>
          <Dofa content={
            [
              {
                id: 1, type: "Debilidades", items: [
                  { id: 1, description: "Limitada presencia en mercados internacionales." },
                  { id: 2, description: "Altos costos de producción debido al enfoque en diseño exclusivo." },
                  { id: 3, description: "Dependencia de un nicho específico de consumidores que valoran la estética Bauhaus." }
                ]
              },
              {
                id: 2, type: "Oportunidades", items: [
                  { id: 1, description: "Creciente demanda de productos artesanales y exclusivos en el mercado global." },
                  { id: 2, description: "Expansión a canales de venta online para llegar a una audiencia más amplia." },
                  { id: 3, description: "Posibilidad de colaboraciones con artistas y diseñadores para ediciones especiales." }
                ]
              },
              {
                id: 3, type: "Fortalezas", items: [
                  { id: 1, description: "Identidad visual distintiva basada en la estética Bauhaus que atrae a consumidores interesados en diseño." },
                  { id: 2, description: "Alta calidad de productos con ingredientes naturales y procesos de elaboración cuidados." },
                  { id: 3, description: "Fuerte reconocimiento de marca en nichos de consumidores que buscan innovación en bebidas." }
                ]
              },
              {
                id: 4, type: "Amenazas", items: [
                  { id: 1, description: "Competencia creciente en el sector de bebidas carbonatadas premium." },
                  { id: 2, description: "Cambios en las regulaciones sanitarias que pueden aumentar los costos de producción." },
                  { id: 3, description: "Fluctuaciones en los precios de materias primas debido a la crisis global de suministros." }
                ]
              }
            ]
          } />

          <li className='mt-10 font-extrabold text-2xl mb-5'>2. Identidad Organizacional</li>
          <TitleText
            title="Misión"
            text="En Blasenhaus, nuestra misión es fusionar arte y sabor, creando bebidas 
            carbonatadas de alta calidad que reflejen la esencia del diseño Bauhaus. Nos 
            comprometemos a ofrecer productos únicos, innovadores y estéticamente atractivos, 
            mientras promovemos el disfrute consciente y sostenible de bebidas que inspiran a 
            nuestros consumidores."
          />
          <TitleText
            title="Visión"
            text="Ser reconocidos globalmente como una marca líder en el mercado de bebidas premium, 
            caracterizada por su diseño vanguardista y compromiso con la excelencia. Aspiramos a 
            expandir nuestra presencia internacional y convertirnos en un referente de innovación y 
            autenticidad en la industria de las bebidas carbonatadas."
          />
          <TitleText
            title="Valores"
            text="En Blasenhaus, nuestros valores fundamentales son la innovación constante, la calidad 
            inquebrantable y la simplicidad funcional. Inspirados por el Bauhaus, nos esforzamos por ofrecer 
            bebidas carbonatadas que combinan diseño y sabor en perfecta armonía. Nuestra eficiencia guía cada 
            aspecto de nuestro proceso, desde la producción hasta el servicio, para garantizar una experiencia 
            refrescante y satisfactoria para nuestros clientes."
          />

          <li className='mt-10 font-extrabold text-2xl mb-6'>3. Objetivos estratégicos</li>
          {/* TABLA */}
          <ObjTable data={
            [
              { id: 1001, goal: "Aumentar ventas en mercados emergentes", target: 500000, progress: 100000, compliance: 20 },  // Crítico
              { id: 1002, goal: "Incrementar participación en el mercado", target: 1000000, progress: 400000, compliance: 40 },  // Aceptable
              { id: 1003, goal: "Reducir costos operativos", target: 150000, progress: 100000, compliance: 66 },  // Aceptable
              { id: 1004, goal: "Optimizar procesos internos", target: 50, progress: 40, compliance: 80 },  // Exitoso
              { id: 1005, goal: "Mejorar la satisfacción del cliente", target: 80, progress: 20, compliance: 25 },  // Crítico
              { id: 1006, goal: "Expandir la oferta de productos", target: 200000, progress: 100000, compliance: 50 },  // Aceptable
            ]
          } />
        </ol>

      </main>
      <Footer />
    </div>
  )
}

export default App
