import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function Eventos() {
  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio"]
  const [Dia, setDia] = useState(new Date());
  console.log(Dia.getMonth())
  return (
    <div>
      <div>
        <h3>Eventos del dia {Dia.getDate()} de {meses[Dia.getMonth()]} del {Dia.getFullYear()}</h3>      
      </div>
      <Calendar onChange={setDia} value={Dia}/>

    </div>
    
  )
}

export default Eventos