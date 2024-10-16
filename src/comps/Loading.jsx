import { FaWifi } from "react-icons/fa6"

/* eslint-disable react/prop-types */
const Loading = ({loading,error}) => {
  return (
    <div className="flex-1 flex items-center justify-center">
        {loading&&<div className="border-2 self-center border-purple-300 border-l-purple-600 animate-spin rounded-full size-6"></div>}       
        {error&& 
        <div className="flex  flex-col items-center gap-2">
          <FaWifi className="text-indigo-600" size={35}/>
          <h1 className="text-xl font-semibold ">Network Error !!</h1>
        </div>
        }
    </div>
  )
}

export default Loading