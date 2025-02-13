import { toast } from 'react-toastify'

import { useForm } from 'react-hook-form'
import { Error } from '@/components/error'

import { usePacienteStore } from '@/store'

import type { DraftPaciente } from '@/types'
import { useEffect } from 'react'

function FormPaciente() {

  const { addPaciente, activeId, pacientes, updatePaciente } = usePacienteStore()

  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<DraftPaciente>()

  useEffect(() => {
    if (activeId) {
      const activePaciente = pacientes.filter(paciente => paciente.id === activeId)[0]

      setValue('name', activePaciente.name)
      setValue('propietario', activePaciente.propietario)
      setValue('email', activePaciente.email)
      setValue('date', activePaciente.date)
      setValue('sintomas', activePaciente.sintomas)
    }

  }, [activeId])

  const registerPacient = (data: DraftPaciente) => {
    if (activeId) {
      updatePaciente(data)
      toast.success('Paciente actualizado correctamente')
    } else {
      addPaciente(data)
      toast.success('Paciente agregado correctamente')
    }
    reset()
  }


  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit(registerPacient)}
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
        noValidate
      >
        <div className='mb-5'>
          <label htmlFor='name' className='text-sm uppercase font-bold'>
            Paciente
          </label>
          <input
            id='name'
            className='w-full p-3  border border-gray-100'
            type='text'
            placeholder='Nombre del Paciente'
            {...register('name', { required: 'El nombre del paciente es obligatorio' })}
          />
          {
            errors.name && <Error>{errors.name?.message}</Error>
          }
        </div>
        <div className='mb-5'>
          <label htmlFor='propietario' className='text-sm uppercase font-bold'>
            Propietario
          </label>
          <input
            id='propietario'
            className='w-full p-3  border border-gray-100'
            type='text'
            placeholder='Nombre del Propietario'
            {...register('propietario', { required: 'El nombre del propietario es obligatorio' })}
          />
          {
            errors.name && <Error>{errors.propietario?.message}</Error>
          }
        </div>
        <div className='mb-5'>
          <label htmlFor='email' className='text-sm uppercase font-bold'>
            Email
          </label>
          <input
            id='email'
            className='w-full p-3  border border-gray-100'
            type='email'
            placeholder='Email de Registro'
            {...register("email", {
              required: "El Email es Obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email No Válido'
              }
            })}
          />
          {
            errors.name && <Error>{errors.email?.message}</Error>
          }
        </div>
        <div className='mb-5'>
          <label htmlFor='date' className='text-sm uppercase font-bold'>
            Fecha Alta
          </label>
          <input
            id='date'
            className='w-full p-3  border border-gray-100'
            type='date'
            {...register('date', { required: 'Fecha de ingreso es obligatorio' })}
          />
          {
            errors.name && <Error>{errors.date?.message}</Error>
          }
        </div>
        <div className='mb-5'>
          <label htmlFor='sintomas' className='text-sm uppercase font-bold'>
            Síntomas
          </label>
          <textarea
            id='sintomas'
            className='w-full p-3  border border-gray-100'
            placeholder='Síntomas del paciente'
            {...register('sintomas', { required: 'Los síntomas del paciente son obligatorios' })}
          ></textarea>
          {
            errors.name && <Error>{errors.sintomas?.message}</Error>
          }
        </div>
        <input
          type='submit'
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors'
          value='Guardar Paciente'
        />
      </form>
    </div>
  )
}
export { FormPaciente }