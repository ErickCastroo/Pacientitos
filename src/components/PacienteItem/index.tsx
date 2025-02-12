type PacienteItemsProps = {
  label: string
  data: string
}

function PacienteItems({ label, data }: PacienteItemsProps) {
  return (
    <div>
      <p className=" font-bold mb-3 text-gray-700 uppercase">{label}: {' '}
        <span className='font-normal normal-case'>
          {data}
        </span>
      </p>
    </div>
  )
}

export { PacienteItems }