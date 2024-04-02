
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { seveDataToLocalStorage, saveWishlistDataToLocalStorage } from "../utlis/Localstorage";


const SingleBook = () => {

    const { id } = useParams();

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setData(data))
            console.log('amar data',data)
    },[data])


    const singleData = data?.find( (item) => item.bookId === parseInt(id));
    console.log("singleData",singleData);

    const handledata = () => {
        seveDataToLocalStorage(singleData);
    }
    const handleWishlist = () => {
        saveWishlistDataToLocalStorage(singleData);
    }
    
    console.log({id})
    return (
        <div className="py-8">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-6 items-start">
                    <div className="text-center bg-gray-300 rounded-lg p-10">
                        <img className="inline-block" src={singleData?.image} alt="" />
                    </div>
                    <div className="">
                        <h2 className="mb-4">{singleData?.bookName}</h2>
                        <p className='border-b border-gray-400 text-xl font-medium mt-3 text-[#131313]/80 pb-5'>By : <span>{singleData?.author}</span></p>
                        <p className='border-b border-gray-400 pt-4 pb-4 text-xl font-medium text-[#131313]/80'>{singleData?.category}</p>
                        <p className="mt-5">
                            <b className="text-heading">Review : </b>
                            {singleData?.review}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 mt-5 border-b border-gray-400 pb-6">
                            <h5 className="font-primary">Tag  </h5>
                            {
                                singleData?.tags.map(tag => (
                                    <p key={tag} className='text-primary bg-primary/15 py-1 px-4 rounded-full'>
                                        #{tag}
                                    </p>
                                ))
                            }
                        </div>
                        <div className=" mt-5">
                            <table className="">
                                <tr>
                                    <td>Number of Pages:</td>
                                    <td className="text-heading font-semibold pl-10">{singleData?.totalPages}</td>
                                </tr>
                                <tr>
                                    <td>Publisher:</td>
                                    <td className="text-heading font-semibold pl-10">{singleData?.publisher}</td>
                                </tr>
                                <tr>
                                    <td>Year of Publishing:</td>
                                    <td className="text-heading font-semibold pl-10">{singleData?.yearOfPublishing}</td>
                                </tr>
                                <tr>
                                    <td>Rating:</td>
                                    <td className="text-heading font-semibold pl-10">{singleData?.rating}</td>
                                </tr>
                            </table>
                        </div>


                        <div className="flex items-center gap-3 mt-5">
                            <button onClick={handledata} className="bg-transparent border border-primary text-heading">Read</button>
                            <button onClick={handleWishlist} className="bg-secondary">Wishlist</button>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SingleBook;