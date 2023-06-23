import { db } from '../firebase'
import { doc, query, getDocs, collection, where, orderBy, limit, getCountFromServer } from 'firebase/firestore'
import { useState } from 'react'
import { useEffect } from 'react'
import DashboardCard from '../components/Cards/DashboardCard'

export default function Dashboard() {
  const [productHighestPrice, setProductHighestPrice] = useState({});
  const [productLowestPrice, setProductLowestPrice] = useState({});
  const [total, setTotal] = useState(0);

  const getProductWithHighestPrice = async () => {
    const productHighestPriceRef = collection(db, 'products')
    const productHighestQuery = query(productHighestPriceRef, orderBy('sale_price', 'desc'), limit(1))

    const productFound = await getDocs(productHighestQuery);

    productFound.forEach(product => {
      setProductHighestPrice({ ...product.data() })
    })
  }

  const getProductWithLowestPrice = async () => {
    const productLowestPriceRef = collection(db, "products")
    const productLowestPriceQuery = query(productLowestPriceRef, orderBy('sale_price', 'asc'), limit(1))

    const productFound = await getDocs(productLowestPriceQuery)

    productFound.forEach(product => {
      setProductLowestPrice({...product.data()})
    })
  }

  const getTotalProducts = async() => {
    const totalProductsRef = collection(db, 'products')
    const totalProductsSnap = await getCountFromServer(totalProductsRef)
    setTotal(totalProductsSnap.data().count)
  }

  useEffect(() => {

    getProductWithHighestPrice()
    getProductWithLowestPrice()
    getTotalProducts()
  })


  return (
    <div className="flex flex-col w-full ">
      <h1 className="text-3xl font-light">Dashboard</h1>

      <div className='flex w-full gap-2 my-6'>
        <DashboardCard
          product={productHighestPrice}
          priceColor="blue"
        >
          Producto más caro
        </DashboardCard>
       
        <DashboardCard
          product={productLowestPrice}
          priceColor="orange"
        >
          Producto más barato
        </DashboardCard>
        
        <DashboardCard
          product={{description: 'Total de productos', total: total}}
          priceColor="green"
        >
          Cantidad de productos
        </DashboardCard>     
      
      
      </div>

    </div>
  )
}