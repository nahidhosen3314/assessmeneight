import { useEffect, useState } from "react";
import { getDataFromLocal } from "../utlis/Localstorage";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {

  const [sortValue,setSortValue] = useState("");
  const [tabIndex, setTabIndex] = useState(0);
  const [appliedData, setAppliedData] = useState([]);

  console.log("nahid", appliedData);

  useEffect(() => {
    const data = getDataFromLocal();
    setAppliedData(data);
  }, []);

  return (
    <div className="py-6">
      <div className="container">
        <h3 className="text-center bg-[#131313]/10 rounded-xl py-5 mb-6">
          Books
        </h3>

        <div className="text-center py-6">
          <select className="bg-primary px-4 py-3 rounded-xl font-semibold text-lg text-white" onChange={(e) => setSortValue(e.target.value)}>
            <option className="bg-gray-300 text-heading/80  outline-none font-normal" value="">Sort By</option>
            <option className="bg-gray-300 text-heading/80  outline-none font-normal" value="rating">Rating</option>
            <option className="bg-gray-300 text-heading/80  outline-none font-normal" value="num_of_pages">Number of pages</option>
            <option className="bg-gray-300 text-heading/80  outline-none font-normal" value="publisher_year">Publisher year</option>
          </select>
        </div>
        
        {/* Tabs */}
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800 mb-5">
          <Link
            to=""
            onClick={() => setTabIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 0 ? "border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <span>Read Books</span>
          </Link>

          <Link
            to={`ListWishlist`}
            onClick={() => setTabIndex(1)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 1 ? "border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <span>Wishlist Books</span>
          </Link>
        </div>

        <Outlet context={[sortValue]} />
      </div>
    </div>
  );
};

export default ListedBooks;
