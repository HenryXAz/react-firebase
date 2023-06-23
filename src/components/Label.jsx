export default function Label({children, htmlFor, classes})
{
  return(
    <label 
      htmlFor={htmlFor} 
      className={`text-gray-900 dark:text-gray-400 text-  ${classes ?? ""}`}
      >
      {children}
    </label>
  )  
}