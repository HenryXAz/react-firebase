export default function Row({children}) 
{
  return(
    <tr className="even:bg-indigo-200 dark:even:bg-zinc-900/50">
      {children}
    </tr>
  )
}