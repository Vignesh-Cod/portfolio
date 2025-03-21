import HeroImg from '../assets/hero.png';
import { AiOutlineLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaInstagram } from "react-icons/fa";
export default function Hero() {
    return <section id='Hero' className='flex flex-col md:flex-row px-5  py-32 bg-primary justify-center'>

        <div className=' md:w-1/2 flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br /> Im Vignesh Venkat<span class="Shake">👋</span>
                <p className='text-2xl'>Im a Full-Stack developer</p>
            </h1>
            <div className='flex py-10'>
                
                <a href="mailto:venkatvignesh72@gmail.com" className='pr-5 hover:text-white'><BiLogoGmail size={40} /></a>
                    <a href='https://github.com/Vignesh-Cod' className='pr-5 hover:text-white'><FaGithub size={40} /></a>
                    <a href='https://www.linkedin.com/in/venkatvignesh07/' className='hover:text-white'><AiOutlineLinkedin size={40} /></a>
                    <a href='https://www.instagram.com/suveen_003/' className='hover:text-white'><FaInstagram size={40} /></a>
                 
            </div>
        </div>

            <img className='md:w-1/3' src={HeroImg}></img>



    </section>
}
