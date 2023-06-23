import { useState, useEffect } from "react";
import { auth, db } from '../../firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, onSnapshot, collection, getDoc, getDocs, deleteDoc } from 'firebase/firestore'
import AddUpdateUserButton from "./AddUpdateUserButton";
import UsersTable from "./UsersTable";
import UsersForm from "./UsersForm";

export default function Users() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState([
    {
      name: '',
      last_name: '',
      email: '',
      password: '',
      role: '',
      status: '',
      id: '',
    }
  ])
  const [modal, setModal] = useState(false)
  const [edit, setEdit] = useState(false)

  const handleToggleModal = () => {
    setModal(!modal)
    setEdit(false)
    setUser({
      name: '',
      last_name: '',
      email: '',
      password: '',
      role: '',
      status: '',
      id: '',
    })
  }

  const handleSubmit = async (data) => {
    let id = data.id ?? "";
    if (!edit) {

      const newUser = await createUserWithEmailAndPassword(auth, data.email, data.password)
      id = newUser.user.uid
    }


    const docRef = doc(db, 'users', id)

    const docSnap = await setDoc(docRef, {
      name: data.name,
      last_name: data.last_name,
      email: data.email,
      role: data.role,
      status: data.status,
    })

    handleToggleModal()
    window.location.reload()
  }

  const handleEditUser = (userEdit) => {
    setEdit(true)
    setUser(userEdit)
    setModal(!modal)
  }

  const handleDeleteUser = async (id) => {
    const userDeletedRef = doc(db, "users", id)
    await deleteDoc(userDeletedRef);
  }

  useEffect(() => {

    const getUsers = async () => {


      const docsRef = collection(db, "users")
      const docsSnapShot = await getDocs(docsRef)

      const usersFound = docsSnapShot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name,
        last_name: doc.data().last_name,
        email: doc.data().email,
        password: doc.data()?.password,
        role: doc.data().role,
        status: doc.data().status,
      }))

      setUsers(usersFound)
    }
    getUsers()

  }, [])



  if (modal) {
    return (
      <div className="transition-all ease-in-out duration-800" >
        <UsersForm
          user={user}
          edit={edit}
          onClickCancel={handleToggleModal}
          onSubmit={handleSubmit}
        />
      </div>
    )
  }

  return (
    <div className="flex flex-col w-full">
      <header>
        <h1 className="text-3xl font-light">
          Usuarios
        </h1>
      </header>

      {/* <AddUpdateUserButton onClick={handleToggleModal} /> */}


      <UsersTable 
        users={users} 
        handleEditUser={handleEditUser} 
        handleDeleteUser={handleDeleteUser} />
    </div>
  )
}