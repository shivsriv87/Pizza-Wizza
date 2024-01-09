import Link from "next/link"

export const Header = () => {
  return (
    <>
   <header className='flex justify-between'>
    <Link  className="text-primary font-seminold text-2xl" href="">ST PIZZA</Link>
    <nav className="flex  items-center text-gray-500  font-semibold gap-8">
    <Link href=' '>Home</Link>
    <Link href='/menu'>Menu</Link>
    <Link href='/about'>About</Link>
    <Link href='/about'>Contact</Link>
    <Link href='/LogIN' className='bg-primary text-white px-8 py-2 rounded-full'>LogIN</Link>
    </nav>
    
  
   </header>
   
   </>
  )
}
