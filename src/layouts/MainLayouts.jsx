import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../componets/Nav";

const MainLayouts = () => {

    const navigation = useNavigation();

    return (
        <div className="overflow-hidden">
            <Nav></Nav>
            {
                navigation.state === 'loading' ?
                <p className="text-center min-h-screen text-xl">Loading...</p> :
                <Outlet></Outlet>
            }
            
        </div>
    );
};

export default MainLayouts;