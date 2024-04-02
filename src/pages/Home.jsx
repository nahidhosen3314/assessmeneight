import { useLoaderData } from "react-router-dom";
import BookCard from "../componets/BookCard";
import Hero from "../componets/Hero";




const Home = () => {

const data = useLoaderData();
console.log(data);


    return (
        <div>
            <Hero></Hero>
            <BookCard cardData={data}></BookCard>
        </div>
    );
};

export default Home;