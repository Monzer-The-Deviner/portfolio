import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getprojectDetails, urlFor } from '../../sanityClinet';
import { PortableText } from '@portabletext/react';
import Loading from '../comps/Loading';
import { AiOutlineLink } from 'react-icons/ai';
import logo from '../assets/favicon.png'
const ProjectDetails = () => {
  const [proj, setProj] = useState(null); 
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const { id: slug } = useParams(); 

  useEffect(() => {
    setloading(true)
    seterror(false)
    getprojectDetails(slug)
      .then(data =>{ 
        setProj(data[0])
        setloading(false)
    })
      .catch(error=>{
        setloading(false)
        seterror(error)
      })
  }, [slug]);

  return (
    <div className="max-w-5xl flex flex-col gap-10 w-full">
      {!(loading||error)&&<>
      <div
        className="min-h-80 bg-center bg-cover flex items-end overflow-hidden bg-gray-500 rounded-xl w-full"
        style={{ backgroundImage: `url(${proj&&urlFor(proj.image)})` }}
      >
        <div className="p-4 bg-gradient-to-t justify-between items-center flex rounded-t-xl flex-1 from-[#13131370] to-[#0e0e0e1a] text-xl">
          <h1 className='text-white text-3xl'>{proj?.name}</h1> {/* Changed to proj?.name */}
          <a href={proj?.url} className='bg-white flex gap-2 px-2 rounded-md items-center text-slate-950'><AiOutlineLink size={22} /> Visit</a>
        </div>
      </div>
      <div className="flex flex-col gap-4">
      <div>
        <h4 className="font-semibold text-xl">Description</h4>
        <p className='pt-4 text-base'>
          {proj?.shortDescription}
        </p>
      </div>
      
        <div>
        <h4 className="font-semibold text-xl">Tech Stack</h4>
          <div className='flex flex-wrap justify-center gap-2'>
          <div className='flex flex-col items-center w-28' >
              <img src={logo} className='flex-1' />
              <span className='text-lg font-semibold'>name</span>
          </div>
          {proj?.tech.map((tech,i)=>
            <div className='flex flex-col items-center w-36' key={i}>
              <img src={urlFor(tech.logo)} className='flex-1' />
              <span className='text-lg font-semibold'>{tech.name}</span>
            </div>)}
          </div>
        </div>
      </div>

      
      {proj?.sections?.map((sec, idx) => (  // Renamed to 'sec' and 'idx' for brevity
        <div key={idx} className='shadow-xl rounded-lg bg-white p-4'>
          <h1 className='text-4xl font-semibold'>{sec.subtitle}</h1>
          <div className='mt-6 flex-col lg:flex-row'>
          <div className="prose prose-lg">
             {sec && <img className="float-right" src={sec.image} alt="section image" />}
              <PortableText value={sec.text} />
          </div>

          </div>
        </div>
      ))}
      </>}

      {/* loading sections */}
      {(loading||error)&&<div className=" h-screen flex justify-center items-center">
        <Loading loading={loading} error={error}/>
        </div>}

    </div>
  );
};

export default ProjectDetails;
