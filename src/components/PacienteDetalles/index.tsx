
import { Pacientes } from '@/types'

import { usePacienteStore } from '@/store'

import { PacienteItems } from '@/components/PacienteItem'

type PacienteDetallesProps = {
  paciente: Pacientes
}

function PacienteDetalles({ paciente }: PacienteDetallesProps) {


  const { deletePaciente, getPacientebyId } = usePacienteStore()


  return (
    <>
      <div className='mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl'>
        <PacienteItems label='ID' data={paciente.id} />
        <PacienteItems label='Nombre' data={paciente.name} />
        <PacienteItems label='Propietario' data={paciente.propietario} />
        <PacienteItems label='Email' data={paciente.email} />
        <PacienteItems label='Fecha' data={paciente.date.toString()} />
        <PacienteItems label='Síntomas' data={paciente.sintomas} />

        <div className='flex flex-col md:flex-row justify-between gap-3 mt-16'>
          <button onClick={() => getPacientebyId(paciente.id)} type='button' className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'>
            Editar
          </button>

          <button onClick={() => deletePaciente(paciente.id)} type='button' className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'>
            Eliminar
          </button>
        </div>
      </div>
    </>
  )
}

export { PacienteDetalles }