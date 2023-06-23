export default function Select({name, options, onChange, register, defaultValue})
{
  return(
    <select 
      defaultValue={defaultValue}
      name={name} 
      id="" 
      onChange={onChange} 
      className="block border-2 border-indigo-500 focus:outline-indigo-500 rounded-md bg-white dark:bg-zinc-900 p-2"
      {...register(name)}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}   
        >
          {option.description}
        </option>
      ))}
    </select>
  )
}