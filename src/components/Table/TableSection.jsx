export default function TableSection({children, type}) {
  return type === 'thead' && (
    <thead className="bg-zinc-900 text-gray-200">
      {children}
    </thead>
  ) || type === 'tbody' && (
    <tbody>
      {children}
    </tbody>
  )
}