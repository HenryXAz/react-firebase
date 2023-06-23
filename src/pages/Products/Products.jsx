import { db } from '../../firebase'
import { collection, addDoc, doc, getDoc, getDocs, setDoc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import ToggleModalButton from "../../components/ToggleModalButton";
import ProductsForm from "./ProductsForm";
import ProductsTable from './ProductsTable';

export default function Products() {
  const [modal, setModal] = useState()
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({
    id: '',
    description: '',
    sale_price: '',
    purchase_price: '',
    provider: '',
  })

  const handleToggleModal = () => {
    setModal(!modal)
    setProduct({
      id: '',
      description: '',
      sale_price: '',
      purchase_price: '',
      provider: '',
    })
  }

  const handleSubmit = async (data) => {
    if(data.id === "") {
      await addDoc(collection(db, 'products'), {
        description: data.description,
        sale_price: data.sale_price,
        purchase_price: data.purchase_price,
        provider: data.provider,
      })
    } 

    if(data.id !== "") {
      await setDoc(doc(db, 'products', data.id), {
        description: data.description,
        sale_price: data.sale_price,
        purchase_price: data.purchase_price,
        provider: data.provider,
      })
    }

    handleToggleModal()
  }

  const handleEditProduct = async (id) => {
    const productRef = doc(db, "products", id) 
    const productSnap = await getDoc(productRef)

    if(productSnap.exists()) {
      setProduct({id, ...productSnap.data()})
      setModal(!modal);
      // handleToggleModal()
    } 
  }

  const handleDeleteProduct = async (id) => {
    const productDeletedRef = doc(db, "products", id) 
    await deleteDoc(productDeletedRef)
  }

  useEffect(() => {
    const getProducts = async () => {
      const productsRef = collection(db, "products")
      const productsSnap = await getDocs(productsRef)

      const productsFound = productsSnap.docs.map(doc => ({
        id: doc.id,
        description: doc.data().description,
        sale_price: doc.data().sale_price,
        purchase_price: doc.data().purchase_price,
        provider: doc.data().provider,
      }))

      setProducts(productsFound)
    }

    getProducts();
  })

  if(modal) {
    return (
      <div className="transition-all ease-in-out duration-800" >
        <ProductsForm 
          onSubmit={handleSubmit}
          onClickCancel={handleToggleModal}
          product={product}
        />   
      </div>
    )
  }

  return (
    <div className="flex flex-col w-full">

      <header>
        <h2 className="text-3xl font-light">
          Productos
        </h2>
      </header>

      <ToggleModalButton onClick={handleToggleModal} >
        nuevo producto
      </ToggleModalButton>
      
      <ProductsTable products={products} 
        handleEditProduct={handleEditProduct}
        handleDeleteProduct={handleDeleteProduct}
      />

    </div>
  )


}