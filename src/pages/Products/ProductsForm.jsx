import Form from "../../components/Form"
import Input from "../../components/Input"
import Label from "../../components/Label"
import Modal from "../../components/Modal/Modal"
import { useForm } from 'react-hook-form'
import Message from "../../components/Message/Message"
import Button from "../../components/Button"

export default function ProductsForm({product, onSubmit, onClickCancel})
{
  const {register, handleSubmit, formState: { errors } } = useForm()

  return (
    
    <Modal onClickCancel={onClickCancel}>
      <Form action={handleSubmit(onSubmit)}>
        <input type="hidden" name="id" defaultValue={product.id} 
          {...register('id')}
        />

        <div className="flex flex-col gap-2 mb-5">
          <Label htmlFor="description">
            Descripción:
          </Label>

          <Input register={register} 
            type="text" name="description" placeholder="descripción de producto"
            defaultValue={product.description}
          />
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <Label htmlFor="sale_price">
            Precio Venta:
          </Label>         

          <Input register={register} 
            type="text" name="sale_price" placeholder="precio venta de producto"
            defaultValue={product.sale_price}
          /> 
        </div>


        <div className="flex flex-col gap-2 mb-5">
          <Label htmlFor="purchase_price">
            Precio Compra:
          </Label>

          <Input register={register} 
            type="text" name="purchase_price" placeholder="precio compra de producto" 
            defaultValue={product.purchase_price}
          />
        </div>


        <div className="flex flex-col gap-2 mb-5">
          <Label htmlFor="provider">
            Proveedor
          </Label>

          <Input register={register} 
            type="text" name="provider" placeholder="proveedor de producto"
            defaultValue={product.provider}
          />
        </div>


        <div className="flex flex-col gap-2 items-center justify-center sm:flex-row">
          <Button type="submit" variant="green">
            agregar
          </Button>

          <Button type="button" variant="danger"
            onClick={onClickCancel} 
          >
            cancelar
          </Button>
        </div>

      </Form>
    </Modal>
  )
}