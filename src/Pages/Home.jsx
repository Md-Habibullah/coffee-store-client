import { useLoaderData } from "react-router-dom";
import SingleCoffee from "../components/SingleCoffee";


const Home = () => {

    const coffee = useLoaderData()

    return (
        <div className="my-24 mx-40 space-y-6">
            {
                coffee.map(coff => <SingleCoffee key={coff._id} coffee={coff}></SingleCoffee>)
            }
        </div>
    );
};

export default Home;