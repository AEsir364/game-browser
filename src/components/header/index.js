import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './header.module.css';

const genres = [ "MMORPG", "Shooter", "MOBA", "Anime", "Battle Royale", "Strategy", "Fantasy", "Sci-Fi", "Card Games", "Racing", "Fighting", "Social", "Sports" ];

function Header() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        navigate(`/search?q=${search}`);
        setSearch("");
        setIsMenuOpen(false);
    }

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    }

    return (
        <header className={styles.header}>
            <div className={styles.navLeft}>
                <Link to="/" className={styles.logo} onClick={handleLinkClick}>Game<span>Browser</span></Link>

                <nav className={styles.desktopNav}>
                    <div className={styles.dropdown}>
                        <button className={styles.dropdownBtn}>Gêneros</button>
                        <ul className={styles.dropdownContent}>
                            <li><Link to="/" onClick={handleLinkClick}>Todos</Link></li>
                            {genres.map(genre => (
                                <li key={genre}><Link to={`/genre/${genre}`} onClick={handleLinkClick}>{genre}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <Link to="/favorites" className={styles.navLink} onClick={handleLinkClick}>Meus Favoritos</Link>
                </nav>
            </div>

            <form className={styles.desktopSearch} onSubmit={handleSubmit}>
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Busque um jogo"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button className={styles.searchButton} type="submit">Buscar</button>
            </form>

            <button className={styles.hamburgerBtn} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </button>

            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    <Link to="/favorites" className={styles.mobileNavLink} onClick={handleLinkClick}>Meus Favoritos</Link>
                    <div className={styles.mobileGenreTitle}>Gêneros</div>
                    <ul className={styles.mobileGenreList}>
                        <li><Link to="/" onClick={handleLinkClick}>Todos</Link></li>
                        {genres.map(genre => (
                            <li key={genre}><Link to={`/genre/${genre}`} onClick={handleLinkClick}>{genre}</Link></li>
                        ))}
                    </ul>
                    <form className={styles.mobileSearch} onSubmit={handleSubmit}>
                        <input
                            className={styles.searchInput}
                            type="text"
                            placeholder="Busque um jogo"
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                        />
                        <button className={styles.searchButton} type="submit">Buscar</button>
                    </form>
                </div>
            )}
        </header>
    );
}

export default Header;