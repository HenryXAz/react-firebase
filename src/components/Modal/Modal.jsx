export default function Modal({children, onClickCancel})
{ 
  return(
    <div className="absolute inset-0 overflow-x-auto overflow-y-auto   w-full h-full bg-zinc-900/25 transition-all ease-in-out duration-300" 
      onClick={onClickCancel}
    >
      <div className="py-5 w-full h-auto transition-all ease-in-out duration-300"

      >
        {children}
      </div>
    </div>
  )
}