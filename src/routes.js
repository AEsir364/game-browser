import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';
import Search from './pages/search';
import Favorites from './pages/favorites';
import Header from './components/header';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/genre/:genreName" element={<Home />} />
                <Route path="/game/:id" element={<Game />} />
                <Route path="/search" element={<Search />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;