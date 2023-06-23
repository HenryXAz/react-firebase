
export default function DashboardCard({product, priceColor, children}) {

  const priceColors = {
    red: 'text-red-500',
    blue: 'text-indigo-500',
    green: 'text-emerald-500',
    orange: 'text-orange-500',
  }

  return (
    <div className="w-1/3 font-light border dark:border-0 bg-white dark:bg-zinc-900 rounded-lg shadow-lg dark:shadow-none " >
      <div className="p-4">
        <h2 className="text-lg text-center mb-5">{product.description}</h2>
        <p className={`${priceColors[priceColor]} text-2xl font-bold text-center`}  >
          {!!product.sale_price ? `Q. ${product.sale_price}` : `${product.total}`}
        </p> 
      </div> 

      <p className="text-center p-4 bg-gray-600 text-gray-200 dark:bg-zinc-700 rounded-b-md">
        {children}
      </p>
    </div>
  )
}
