import Button from "../../components/Button";

export default function AddUpdateUserButton({onClick})
{
  return (
    <div className="flex mt-5">
      <Button classes="rounded-md"
        onClick={onClick}
      >
        Agregar Usuario
      </Button>
    </div>
  )
}