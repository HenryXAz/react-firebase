import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';

export default function Auth({children})
{
  return(
    <div className="flex w-full h-full">
      <Sidebar />

      <main className="px-4 pt-2 w-full text-gray-900 dark:text-gray-200 overflow-y-auto overflow-x-auto">
        <>
          <Navbar />
          {children}
        </>
      </main>
    </div>
  )
}