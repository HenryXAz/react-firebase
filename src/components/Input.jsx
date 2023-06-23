export default function Input({ type, onChange, placeholder, classes, name, register, defaultValue, rules }) {
  return (
    <input
      defaultValue={defaultValue ?? ""}
      type={type}
      onChange={onChange}
      name={name}
      placeholder={placeholder ?? ""}
      className={`p-2 border border-gray-400 dark:border-zinc-700 dark:bg-transparent dark:text-gray-200 focus:outline-indigo-300 focus:ring-indigo-400 ${classes ?? ""}`}
      {...register(name,rules)}
    />
  )
}