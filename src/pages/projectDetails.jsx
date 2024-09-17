import bannerImage from '../assets/vecteezy_website-presentation-with-smartphone-mockup_13097385.jpg'
const ProjectDetails = () => {
    const sections = [
        { title:'test',image:bannerImage, text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci delectus voluptatibus et voluptates perferendis atque. Nulla dolor accusantium dignissimos aliquam suscipit inventore eveniet aliquid a temporibus eius. Perspiciatis, nesciunt nisi.' },
        { title:'test2',image:bannerImage, text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci delectus voluptatibus et voluptates perferendis atque. Nulla dolor accusantium dignissimos aliquam suscipit inventore eveniet aliquid a temporibus eius. Perspiciatis, nesciunt nisi.' },
        { title:'test4',image:bannerImage, text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci delectus voluptatibus et voluptates perferendis atque. Nulla dolor accusantium dignissimos aliquam suscipit inventore eveniet aliquid a temporibus eius. Perspiciatis, nesciunt nisi.' },
      ]
  return (
    <div className="max-w-5xl flex flex-col pb-32 gap-16 w-full" >
      <div className="min-h-80 bg-center bg-cover flex items-end overflow-hidden bg-gray-500 rounded-xl w-full" style={{backgroundImage:`url(${bannerImage})`}}>
        <div className="p-4 bg-gradient-to-t rounded-t-xl flex-1  from-[#13131370] to-[#0e0e0e1a] text-xl">
          <h1 className='text-white  text-3xl'>Project title</h1>
          <p className='text-white pt-4 text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste natus minus perferendis beatae facere necessitatibus aspernatur porro cum nihil. 
          </p>
        </div>
      </div>

      {sections.map((section,index)=>
      <div key={index} className='shadow-xl rounded-lg bg-white p-4'>
        <h1 className='text-4xl font-semibold'>{section.title}</h1>
        <div className=' mt-6 flex-col lg:flex-row'>
          <img src={section.image} className='h-80 mr-8 mb-4 float-left' alt="" />
          <p className="flex-1 text-lg">{section.text}</p>
        </div>
      </div>
    )}
      
    </div>
  )
}

export default ProjectDetails