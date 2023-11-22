import { useEffect } from 'react'
import TituloEjercicio from '../TituloEjercicio'
import ComponentePadre from './ComponentePadre'

export default function Ejercicio1() {
 
  return (
    <section className="caja-ejercicio">
      <TituloEjercicio>Este es el ejercicio 1</TituloEjercicio>
        <ComponentePadre/>
    </section>
  )
}
