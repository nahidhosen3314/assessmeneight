
import localImage from '../assets/pngwing 1.png'

const About = () => {
    return (
        <div className='pb-10'>
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="bg-gray-300 rounded-lg py-8 px-2">
                        <img className='mx-auto' src={localImage} alt="" />
                    </div>
                    <div className="space-y-3">
                        <b>SIMPLE AND FLEXIBLE</b>
                        <h3>About The Book</h3>
                        <p>Book Marketing Template eBooki is specially built to showcase and sell your books or eBooks. It is suitable for ebook, promotion,marketing, product landing, author ,book marketplace . eBooki is specially built to showcase and sell your books or eBooks</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};





export default About;