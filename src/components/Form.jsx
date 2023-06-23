export default function Form({children, action, classes})
{

  return(
    <form 
      onClick={e => e.stopPropagation()}
      onSubmit={action} 
      className={`flex flex-col gap-4 p-4 max-w-lg mx-auto my-5 bg-white dark:bg-zinc-900 rounded-md shadow-xl  ${classes ?? ""}`}
      >
      {children}
    </form>
  )
}