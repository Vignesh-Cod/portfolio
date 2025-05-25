import ResumeImg from '../assets/resume.jpg';
import Vignesh_Venkat_Resume from '../assets/VigneshVenkatResume.pdf';


export default  function Resume (){
    return <section id='Resume' className=' flex flex-col md:flex-row bg-secondary px-5'>
        <div className='  order-2 md:order-1 py-5 md:w-1/2 flex justify-center '>
            <img className='w-[300px]' src={ResumeImg}/>
        </div>
        <div className=' order-1 md:order-2 md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white '>
                <h1 className='text-4xl  border-b-4 border-[#5551e3] mb-5 w-[130px] font-bold '>Resume</h1>
                
                < p className='pb-5'>You can view my resume <a href={Vignesh_Venkat_Resume}  className='btn'>Downlode!</a> </ p >
                
            </div>
        </div>
       



    </section>
}
