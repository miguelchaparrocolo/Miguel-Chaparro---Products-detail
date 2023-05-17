import { Outlet, useNavigation } from "react-router-dom";
import HeaderUp from '../components/Header'

const Root = () => {
    const navigation = useNavigation();
    
        return(
            <>
                <HeaderUp/>
                <main>{navigation.state === 'loading' ? 'Loading...': <Outlet/>}</main>
            </>
        );
};

export default Root;