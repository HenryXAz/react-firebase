import { auth, db } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/auth/authSlice'
import { useForm } from 'react-hook-form'
import ToggleTheme from '../components/ToggleTheme'
import Form from '../components/Form'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'


export default function Login() {
  const {register, handleSubmit} = useForm()

  const dispatch = useDispatch()


  const onSubmit = async (data) => {
    
    const docRef = collection(db,'users')
    const docQuery = query(docRef, where("email", "==", data.email))
    const querySnapShot = await getDocs(docQuery)


    if(querySnapShot.size === 0) {
      dispatch(logout())
      return
    }

    const querySnapShotData = querySnapShot.docs[0]._document.data.value.mapValue.fields

    const userFound = {
      uid: querySnapShot.docs[0].id,
      name: querySnapShotData.name.stringValue,
      last_name: querySnapShotData.last_name.stringValue,
      email: querySnapShotData.email.stringValue,
      role: querySnapShotData.role.stringValue,
      status: querySnapShotData.status.stringValue,
    }

    if(userFound.status !== "enabled") {
      dispatch(logout())
      return
    }


    signInWithEmailAndPassword(auth, data.email, data.password)
    .then(user => {
      dispatch(login({
        ...userFound,
        displayName: user.user?.displayName,
      }))
    })


  }

  return (
    <div className="relative">
      <div className='flex justify-end max-w-md mx-auto mt-5'>
      <ToggleTheme />
      </div>

      <h1 className='text-center text-gray-900 dark:text-gray-200 text-3xl font-light'>Iniciar Sesión</h1>

      <Form action={handleSubmit(onSubmit)} >
        <>
          <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email:</Label>
          <Input type="email" name="email" register={register} defaultValue="user@example.com" />
          </div>

          <div className="flex flex-col gap-2">
          <Label htmlFor="password">Contraseña:</Label>
          <Input type="password" name="password" register={register} defaultValue="admin1234" />
          </div>

          <Button classes="mt-5 dark:hover:border-indigo-500 dark:hover:bg-transparent" >
            iniciar sesión
          </Button>
        </>
      </Form>

    </div>
  )
}