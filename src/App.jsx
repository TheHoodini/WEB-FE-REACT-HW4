import { useState } from 'react'
import './index.css'

import Header from './assets/components/Header'
import Intro from './assets/components/Intro'
import Card from './assets/components/Card'
import TitleText from './assets/components/TitleText'
import Footer from './assets/components/Footer'
import ObjTable from './assets/components/ObjTable'

function App() {

  return (
    <div>
      <Header />
      <main className='mx-14'>
        <Intro />
        <ol>
          <li className='mt-10'>1. Diagnóstico Actual</li>
          <Card content={
            [
              {
                id: 1, type: "Debilidades", items: [
                  { id: 1, description: "Debilidad 1" },
                  { id: 2, description: "Debilidad 2" },
                  { id: 3, description: "Debilidad 3" }
                ]
              },
              {
                id: 2, type: "Oportunidades", items: [
                  { id: 1, description: "Oportunidad 1" },
                  { id: 2, description: "Oportunidad 2" },
                  { id: 3, description: "Oportunidad 3" }
                ]
              },
              {
                id: 3, type: "Fortalezas", items: [
                  { id: 1, description: "Fortaleza 1" },
                  { id: 2, description: "Fortaleza 2" },
                  { id: 3, description: "Fortaleza 3" }
                ]
              },
              {
                id: 4, type: "Amenazas", items: [
                  { id: 1, description: "Amenaza 1" },
                  { id: 2, description: "Amenaza 2" },
                  { id: 3, description: "Amenaza 3" }
                ]
              }
            ]
          } />
          <li className='mt-10'>2. Identidad Organizacional</li>
          <TitleText title="Misión" text="Texto de la misión" />
          <TitleText title="Visión" text="Texto de la visión" />
          <TitleText title="Valores" text="Texto de los valores" />
          <li className='mt-10'>3. Objetivos estratégicos</li>
          <ObjTable data={
            [
              {id: 1, goal: "Objetivo 1", target: 10000, progress: 50, compliance: 50 },
              {id: 2, goal: "Objetivo 2", target: 150000, progress: 20000, compliance: 50 },
              { id: 3, goal: "Objetivo 3", target: 1000, progress: 900, compliance: 20 }
            ]
          } />
        </ol>
      </main>
      <Footer />
    </div>
  )
}

export default App
