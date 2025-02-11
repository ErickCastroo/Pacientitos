import { FormPaciente } from '@/components/FormPaciente'
import { PacienteList } from '@/components/pacientelist'
function App() {
  return (
    <>
      <div className='container mx-auto mt-20'>
        <h1 className='font-black text-5xl text-center md:w-2/3 md:mx-auto'>
          Seguimiento de {''}
          <span className='text-indigo-700'>
            Pacientitos
          </span>
        </h1>
        <div className='mt-12 md:flex'>
          <FormPaciente />
          <PacienteList />
        </div>
      </div>
    </>
  )
}

export { App }