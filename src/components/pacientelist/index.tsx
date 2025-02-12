import { usePacienteStore } from '@/store'

import { PacienteDetalles } from '@/components/PacienteDetalles'

function PacienteList() {
  const { pacientes } = usePacienteStore()
  console.log(pacientes)
  return (
    <div className='md:w-1/2 lg:w-3/5 mx-5'>
      {
        pacientes.length === 0 ? (
          <>
            <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
              Comienza agregando pacientes {''}
              <span className='text-indigo-600 font-bold'>
                y aparecerán aquí
              </span>
            </p>
          </>
        ) : (
          <>
            <h2 className='font-black text-3xl text-center'>Listado de pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
              Administra tus {''}
              <span className='text-indigo-600 font-bold'>
                Pacientes y Citas
              </span>
            </p>
            {
              pacientes.map((paciente) => (
                <PacienteDetalles key={paciente.id} paciente={paciente} />
              ))
            }
            
          </>
        )
      }
    </div>
  )
}

export { PacienteList }