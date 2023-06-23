import Form from "../../components/Form";
import Modal from "../../components/Modal/Modal";
import Label from "../../components//Label";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Select";
import Radio from "../../components/Radio";
import Message from "../../components/Message/Message"
import { useForm } from "react-hook-form";

export default function UsersModal({ onClickCancel, onSubmit, user, edit }) {
  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <Modal onClickCancel={onClickCancel}>
      <Form action={handleSubmit(onSubmit)} >

        <input type="hidden" value={user.id} {...register('id')} />

        <div className="flex flex-col gap-2 mb-5">
          <Label htmlFor="name">
            Nombre:
          </Label>
          <Input type="text" name="name" register={register}
            defaultValue={user.name}
            rules={{
              required: true,
              minLength: 3,
            }}
            placeholder="Nombre"
          />

          {errors.name?.type === "required" && <Message content="el nombre es obligatorio*" />}
          {errors.name?.type === "minLength" && <Message content="el nombre debe contener un mínimo de 3 caracteres*" />}

        </div>

        <div className="flex flex-col gap-2 mb-5">
          <Label htmlFor="last_name">
            Apellido:
          </Label>
          <Input type="text" name="last_name" register={register} placeholder="Apellido"
            defaultValue={user.last_name}
            rules={{
              required: true,
              minLength: 3,
            }}
          />

          {errors.last_name?.type === "required" && <Message content="el apellido es obligatorio*" />}
          {errors.last_name?.type === "minLength" && <Message content="el apellido debe contener un mínimo de 3 caracteres*" />}
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <Label htmlFor="email">
            Correo:
          </Label>
          <Input type="email" name="email" register={register} placeholder="name@example.com" 
            defaultValue={user.email}
            rules={{
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/,
            }}
          />
          {errors.email?.type === "required" && <Message content="el email es obligatorio*" />}
          {errors.email?.type === "pattern" && <Message content="ingrese un email válido*"/>}
        </div>

        {!edit && (
          <div className="flex flex-col gap-2 mb-5">
          <Label htmlFor="password">
            Contraseña:
          </Label>
          <Input type="password" name="password" register={register} placeholder="********" 
            defaultValue={user.password}
            rules={{
              required: true,
              minLength: 8,
            }}
          />
          {errors.password?.type === "required" && <Message content="el password es obligatorio*" />}
          {errors.password?.type === "minLength" && <Message content="la contraseña debe tener un mínimo de 8 caracteres" />}
        </div>
        )}

        <div className="flex flex-col gap-2 mb-5">
          <Label htmlFor="role">
            Rol de Usuario:
          </Label>
          <Select
            defaultValue={user.role}
            name="role"
            register={register}
            options={[
              {
                value: "admin",
                description: "Administración",
              },
              {
                value: "seller",
                description: "Vendedor",
              }
            ]}
          />
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <Radio
            description="Estado del Usuario:"
            name="status"
            register={register}
            radios={[
              {
                value: "enabled",
                description: "Activo",
                checked: user.status,
              },
              {
                value: "disabled",
                description: "Inactivo",
                checked: user.status ,
              }
            ]}
          />
        </div>

        <div className="flex flex-col gap-2 items-center justify-center sm:flex-row">
          <Button type="submit" variant="green" classes="rounded-md ">
            {!edit ? "Registrar Usuario" : "Actualizar Usuario"}
          </Button>
          <Button variant="danger" type="button" classes="rounded-md " onClick={onClickCancel}>
            Cancelar
          </Button>
        </div>
      </Form>
    </Modal>
  )
}