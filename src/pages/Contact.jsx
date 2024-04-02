

import ContactImage from '../assets/contact.jpg'

const Contact = () => {
    return (
        <div className="py-5">
            <div className="container">
                <h2 className='text-center font-primary text-heading/80 uppercase mb-5'>Contact Us</h2>
                <div className="grid lg:grid-cols-2 gap-5 items-center">
                    <div className="space-y-4">
                        <h2>Get in touch</h2>
                        <p>If you have any query or want to learn more about us, please fill out this form and we will get back to you as soon as possible.</p>
                        <p>Support email: <b>web.bookvibe55@gmail.com</b></p>
                    </div>
                    <div className="">
                        <img src={ContactImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;