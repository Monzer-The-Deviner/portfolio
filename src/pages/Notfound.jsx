import { AiFillHome } from "react-icons/ai"
import { Link } from "react-router-dom"


const Notfound = () => {
  return (
    <div className="h-screen flex justify-center items-center">
       <h1 className="text-4xl font-bold"><span className="text-indigo-700">404</span> Notfound </h1>
       <Link className="py-2 px-4 -translate-y-4 font-semibold flex gap-1 text-white bg-indigo-600" to={'/'}>Home <AiFillHome size={20} color="white" /></Link>
    </div>
  )
}

export default Notfound