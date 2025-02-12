import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'

import { DraftPaciente, Pacientes } from '@/types/index'

type PacienteState = {
  pacientes: Pacientes[]
  activeId: Pacientes['id']
  addPaciente: (data: DraftPaciente) => void
  deletePaciente: (id: Pacientes['id']) => void
  getPacientebyId: (id: Pacientes['id']) => void
  updatePaciente: (data: DraftPaciente) => void
}

const createPacientes = (pacientes: DraftPaciente): Pacientes => {
  return {
    id: uuidv4(),
    ...pacientes,
  }
}

export const usePacienteStore = create<PacienteState>()(devtools((set) => ({
  //verificar pacientes
  pacientes: [],
  activeId: '',

  //Agregar pacientes
  addPaciente: (data) => {
    const newPaciente = createPacientes(data)
    set((state) => ({
      pacientes: [
        ...state.pacientes,
        newPaciente
      ]
    }))
  },

  //Eliminar pacientes
  deletePaciente: (id) => {
    set((state) => ({
      pacientes: state.pacientes.filter((pacientes) => pacientes.id !== id)
    }))
  },

  //Editar pacientes
  getPacientebyId: (id) => {
    set(() => ({
      activeId: id
    }))
  },

  //Actualizar pacientes
  updatePaciente: (data) => {
    set((state) => ({
      pacientes: state.pacientes.map(paciente => paciente.id === state.activeId ? { id: state.activeId, ...data } : paciente),
      activeId: ''
    })
    )
  }
})))