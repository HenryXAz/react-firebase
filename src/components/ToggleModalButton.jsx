import Button from "./Button";

export default function ToggleModalButton({children, onClick})
{
  return(
    <div className="flex mt-5">
      <Button onClick={onClick} classes="rounded-md">
        {children}
      </Button>
    </div>
  )
}