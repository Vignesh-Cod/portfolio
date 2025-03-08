import websiteImag from '../assets/ecommerce-websites.jpg';
import websiteImag2 from '../assets/food-ecommerce.jpg';
import websiteImag3 from '../assets/website-blog.jpg';


export default function Project(){
    return <section id='Project' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
        <div className=' flex  flex-col  px-10 py-5'>
        <h1 className="text-4xl    mb-5 w-[182px] font-bold" >Project</h1>
        <p>These are some of my best projects, I have built these with React, MERN, and Vanilla css check them out</p>
        </div>
        </div>
        <div className="w-full">
            <div className='flex  flex-col md:flex-row px-10 gap-5   '>
                <div className=' relative ' >           
                     <img className='h-[200px] w-[500px]' src={websiteImag}/>
                     <div className='project-decs'>
                        <p className='text-center py-8 px-5'> A Ecommerce website. Bulit With MERN Stack.</p>
                     </div>
                </div>
                <div className=' relative '>
                     <img className='h-[200px] w-[500px]' src={websiteImag2}/>
                     <div className='project-decs'>
                        <p className='text-center py-8 px-5'> Food Ecommerce website like Swiggy , Bulit With Angular & .Net </p>
                     </div>
                </div>
                <div className=' relative '>  
                      <img className='h-[200px] w-[500px]' src={websiteImag3}/>
                      <div className='project-decs'>
                         <p className='text-center py-8 px-5'> Basic Blog Website. Bulit with Next JS and MongoDB </p>
                      </div>
                </div>
            </div>
        </div>
    </section>
}