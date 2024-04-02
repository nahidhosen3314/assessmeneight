import { IoStarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const BookCard = ({cardData}) => {

    return (
        <div className="py-10">
            <div className="container">
                <h2 className="text-center mb-12 mt-5">Books</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                {
                    cardData.map((item) => (
                        <Link key={item.bookId} to={`/single/${item.bookId}`} className="border border-gray-300 rounded-2xl p-5 hover:shadow-lg">
                        <div className="bg-[#F3F3F3] mb-6 rounded-2xl">
                            <img className="p-6 block mx-auto max-h-52" src={item.image} alt="" />
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                            {
                                item.tags.map(tag => (
                                    <p key={tag} className='text-primary bg-primary/15 py-1 px-4 rounded-full'>
                                        {tag}
                                    </p>
                                ))
                            }
                        </div>
                        <h4 className='mt-3'>{item.bookName}</h4>
                        <p className='font-medium mt-3 text-[#131313]/80 pb-3'>By: <span>{item.author}</span></p>
                        <div className="flex items-center justify-between border-t-2 pt-4 border-dashed border-gray-300">
                            <p className='text-[#131313]/80'>{item.category}</p>
                            <div className="flex items-center gap-2 ">
                                <p className='text-[#131313]/80'>{item.rating}</p>
                                <IoStarOutline className="text-xl"/>
                            </div>
                        </div>
                    </Link>
                    ))
                }
                </div>
            </div>
        </div>
    );
};

export default BookCard;