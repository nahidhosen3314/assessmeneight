import { GrLocation } from "react-icons/gr";
import { MdOutlineGroup } from "react-icons/md";
import { LiaPagerSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const BookCardTile = ({data}) => {
    return (
        <div className="lg:flex items-center gap-5 border border-gray-300 rounded-xl p-5 mb-5">
            <div className="bg-[#F3F3F3] rounded-2xl">
                <img className="p-6 block mx-auto max-h-60 w-64 object-cover" src={data?.image} alt="" />
            </div>
            <div className="flex-1 mt-5 lg:mt-0">
                <h4>{data?.bookName}</h4>
                <p className='text-xl font-medium mt-3 text-[#131313]/80 pb-3'>By : <span>{data?.author}</span></p>

                <div className="flex flex-wrap items-center gap-5 mb-2">
                    <b className="text-heading text-xl">Tag  </b>

                    <div className="flex flex-wrap items-center gap-3">

                        {
                            data.tags.map(tag =>(
                                <p key={tag} className='text-primary font-medium bg-primary/15 py-1 px-4 rounded-full'>
                                {tag}   
                        </p>
                            ))
                        }
                        
                        
                    </div>

                    <div className="flex items-center gap-2">
                        <GrLocation className="text-lg"/>
                        <p>Year of Publishing: {data?.yearOfPublishing}</p>
                    </div>

                </div>

                <div className="flex flex-wrap gap-3 border-b border-gray-400 pb-3">
                    <div className="flex items-center gap-2">
                        <MdOutlineGroup className="text-2xl"/>
                        <p>Publisher: {data.publisher}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <LiaPagerSolid className="text-2xl"/>
                        <p>Page {data.totalPages}</p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-4">
                    <p className="rounded-full py-1 px-4 text-[#328EFF] bg-[#328EFF20]">Rating: {data?.rating}</p>
                    <p className="rounded-full py-1 px-4 text-[#FFAC33] bg-[#FFAC3320]">Category: {data?.category}</p>
                    <Link to={`/single/${data.bookId}`}><button className="rounded-full py-1">View Details</button></Link>
                </div>

            </div>
        </div>
    );
};

export default BookCardTile;