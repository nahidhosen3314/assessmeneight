
import { NavLink } from 'react-router-dom';
import localImage from '../assets/pngwing 1.png'

const Hero = () => {
    return (
        <div className="">
            <div className="container">
                <div className="grid lg:grid-cols-[650px,minmax(0,1fr)] items-center gap-3 rounded-3xl bg-[#131313]/10 px-5 py-10 lg:p-20">
                    <div className="lg:text-left text-center">
                        <h2 className='mb-7 lg:text-5xl leading-tight lg:leading-snug'>Books to freshen up your bookshelf</h2> 
                        <NavLink to='/ListedBooks'>
                            <button className='text-xl font-bold px-5 py-3'>View The List</button>
                        </NavLink>       
                    </div>
                    <div className="lg:mr-auto m-auto lg:mt-0 mt-4">
                        <img src={localImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;