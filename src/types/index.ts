export type Pacientes ={
    id: string
    name: string
    propietario: string
    email: string
    date: Date
    sintomas: string
}

export type DraftPaciente = Omit<Pacientes, 'id'>