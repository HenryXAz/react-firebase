import Input from "./Input";
import Label from "./Label";

export default function Radio({ description, radios, name, register }) {
  return (
    <>
      <p className="text-gray-900 dark:text-gray-400 ">
        {description}
      </p>
      <div className="flex gap-2 justify-center">

        {
          radios.map(radio => (
            <div key={radio.value}>
              <Label htmlFor={radio.value}>
                <div className="flex gap-2">
                  {radio.description}
                <input type="radio" id={radio.value} name={name} value={radio.value}  
                  
                  defaultChecked={radio.checked === radio.value}
                  {...register(name)}
                />
                </div>
              </Label>
            </div>
          ))
        }

      </div>
    </>
  )
}