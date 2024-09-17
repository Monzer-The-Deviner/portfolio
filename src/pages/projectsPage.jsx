import bannerImage from '../images/vecteezy_website-presentation-with-smartphone-mockup_13097385.jpg'
const ProjectsPage = () => {
  return (
    <div className="max-w-5xl flex flex-col gap-16 w-full" >
      <div className="min-h-80 bg-center bg-cover flex items-end overflow-hidden bg-gray-500 rounded-xl w-full" style={{backgroundImage:`url(${bannerImage})`}}>
        <div className="p-4 bg-gradient-to-t rounded-t-xl flex-1 from-[#13131370] to-[#0e0e0e1a] text-xl">
          <h1 className='text-white  text-3xl'>Project title</h1>
          <p className='text-white pt-4 text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste natus minus perferendis beatae facere necessitatibus aspernatur porro cum nihil. 
          </p>
        </div>
      </div>

      <div className='shadow-xl rounded-lg bg-indigo-100 p-4'>
        <h1 className='text-4xl font-semibold'>Side title</h1>
        <div className='flex gap-4 mt-8 flex-col lg:flex-row'>
          <img src={bannerImage} className='h-80' alt="" />
          <p className="flex-1 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci delectus voluptatibus et voluptates perferendis atque. Nulla dolor accusantium dignissimos aliquam suscipit inventore eveniet aliquid a temporibus eius. Perspiciatis, nesciunt nisi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci delectus voluptatibus et voluptates perferendis atque. Nulla dolor accusantium dignissimos aliquam suscipit inventore eveniet aliquid a temporibus eius. Perspiciatis, nesciunt nisi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci delectus voluptatibus et voluptates perferendis atque. Nulla dolor accusantium dignissimos aliquam suscipit inventore eveniet aliquid a temporibus eius. Perspiciatis, nesciunt nisi.
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default ProjectsPage