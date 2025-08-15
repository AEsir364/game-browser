import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../../services/api';
import styles from '../home/home.module.css';
import GameCard from '../../components/gamecard';

function Search() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
    const [filteredGames, setFilteredGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchAndFilterGames() {
            if (!query) {
                setFilteredGames([]);
                setLoading(false);
                return;
            }

            setLoading(true);
            try {
                const response = await api.get('/games');
                const allGames = response.data;
                const results = allGames.filter(game =>
                    game.title.toLowerCase().includes(query.toLowerCase())
                );
                setFilteredGames(results);
            } catch (error) {
                console.error("Falha ao buscar e filtrar jogos", error);
            } finally {
                setLoading(false);
            }
        }

        fetchAndFilterGames();
    }, [query]);

    if (loading) {
        return <div className="loading"><h2>Buscando...</h2></div>;
    }

    return (
        <div className="container">
            <h1 className={styles.title}>
                Resultados para: <span style={{ color: 'var(--primary)' }}>{query}</span>
            </h1>

            {filteredGames.length > 0 ? (
                <div className={styles.gameList}>
                    {filteredGames.map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            ) : (
                query && <p className={styles.noResults}>Nenhum jogo encontrado com esse nome.</p>
            )}
        </div>
    );
}

export default Search;