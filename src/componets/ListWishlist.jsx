import { useEffect, useState } from "react";
import { getWishlistFromLocalStroage } from "../utlis/Localstorage";
import BookCardTile from "./BookCardTile";
import { useOutletContext } from "react-router-dom";

const ListWishlist = () => {

const [sortValue] = useOutletContext();
  const [appliedData, setAppliedData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  console.log("nahid", appliedData);

  useEffect(() => {
    if (sortValue === "num_of_pages") {
      const sortedData = [...appliedData].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setDisplayData(sortedData);
    } else if (sortValue === "rating") {
      const sortedData = [...appliedData].sort((a, b) => b.rating - a.rating);
      setDisplayData(sortedData);
    } else if (sortValue === "publisher_year") {
      const sortedData = [...appliedData].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setDisplayData(sortedData);
    }
  }, [sortValue,appliedData]);

  useEffect(() => {
    const data = getWishlistFromLocalStroage();
    setAppliedData(data);
    setDisplayData(data);
  }, []);

  return (
    <div>
      {displayData.map((data) => (
        <BookCardTile data={data} key={data.bookId}></BookCardTile>
      ))}
    </div>
  );
};

export default ListWishlist;
