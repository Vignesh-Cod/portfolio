import AboutImg from '../assets/about.png';
export default  function About (){
    return <section id='About' className=' flex flex-col md:flex-row bg-secondary px-5' >
        <div className='  order-2 md:order-1 py-5 md:w-1/2  '>
            <img src={AboutImg}/>
        </div>
        <div className=' order-1 md:order-2 md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white '>
                <h1 className='text-4xl  border-b-4 border-[#5551e3] mb-5 w-[182px] font-bold '>About Me!</h1>
                
                < p className='pb-5'>Full Stack Proficiency: I am a skilled full stack developer with a strong understanding of both front-end and back-end technologies.</ p >
                < p className='pb-5'>Programming Languages: I have expertise in programming languages such as Python, C, and JavaScript.</ p >
                < p className='pb-5'>Web Development: I am well-versed in HTML, CSS, and frameworks like Bootstrap for creating responsive and visually appealing websites.</ p >
                < p className='pb-5'>JavaScript Frameworks: I have experience with popular JavaScript frameworks and libraries including React.js, Angular.js, and Node.js.</ p >
                <p p className='pb-5'>Databases and Backend: I possess knowledge of MongoDB and Express.jsfor building robust backend systems and managing databases.</p>
                
            </div>
        </div>
       



    </section>
}