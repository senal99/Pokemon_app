import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DetailsPage from '../pages/DetailsPage';
import PageNotFound from '../pages/PageNotFound';


const RouterFile = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/details' element={<DetailsPage />} />
            //This route is the default route
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    );
}

export default RouterFile;