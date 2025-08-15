import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './header.module.css';

// Lista de gêneros para o nosso filtro
const genres = [ "Shooter", "MMORPG", "ARPG", "Strategy", "MOBA", "Card Game", "Fighting" ];

function Header() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        navigate(`/search?q=${search}`);
        setSearch("");
    }

    return (
        <header className={styles.header}>
            <div className={styles.navLeft}>
                <Link to="/" className={styles.logo}>Game Browser</Link>

                <div className={styles.dropdown}>
                    <button className={styles.dropdownBtn}>Gêneros</button>
                    <ul className={styles.dropdownContent}>
                        <li><Link to="/">Todos</Link></li>
                        {genres.map(genre => (
                            <li key={genre}>
                                <Link to={`/genre/${genre}`}>{genre}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <Link to="/favorites" className={styles.navLink}>Meus Favoritos</Link>
            </div>

            <form className={styles.searchForm} onSubmit={handleSubmit}>
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Busque um jogo"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button className={styles.searchButton} type="submit">Buscar</button>
            </form>
        </header>
    );
}

export default Header;