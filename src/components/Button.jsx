export default function Button({children, classes, href, variant, onClick, type})
{
  const defaultClasses = 'p-2 transition border-2 border-transparent ease-in-out duration-500'
  const variants = {
    primary: 'bg-indigo-500 text-gray-200 hover:bg-indigo-700',
    danger: 'bg-red-500 text-gray-200 hover:bg-red-700',
    warning: 'bg-yellow-500 text-gray-800 hover:bg-yellow-600 hover:text-gray-200',
    black: 'bg-black text-gray-200 hover:bg-gray-900',
    white: 'bg-white text-gray-200 hover:bg-gray-100',
    gray: 'bg-gray-500 hover:bg-gray-600 text-gray-200',
    zinc: 'bg-zinc-500 text-gray-900 hover:bg-zinc-600',
    transparent: 'bg-transparent text-gray-900 dark:text-gray-200',
    green: 'bg-emerald-600 hover:bg-emerald-700 text-gray-200',
  }

  return (
    href ? (
      <a className={`${classes ?? ""} ${defaultClasses} ${variants[variant] ?? variants['primary']} `} href={href}>
        {children}
      </a>
    ) : (
      <button 
        onClick={onClick}
        className={`${classes ?? ""} ${defaultClasses} ${variants[variant] ?? variants['primary']} `}
        type={type ?? "text"}
      >
        {children}
        
      </button>
    )
  )
}