import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GameContext } from '../../context/GameContext';
import styles from './home.module.css';
import GameCard from '../../components/gamecard';
import Pagination from '../../components/pagination';

function Home() {
    const { allGames, loading, error } = useContext(GameContext);
    
    const [filteredGames, setFilteredGames] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(36);
    const { genreName } = useParams();

    useEffect(() => {
        if (genreName) {
            const results = allGames.filter(game => game.genre.toLowerCase() === genreName.toLowerCase());
            setFilteredGames(results);
        } else {
            setFilteredGames(allGames);
        }
        setCurrentPage(1);
    }, [genreName, allGames]);

    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) return <div className="loading"><h2>Carregando jogos...</h2></div>;
    if (error) return <div className="loading"><h2>{error}</h2></div>;

    return (
        <div className="container">
            <h1 className={styles.title}>{genreName ? `Gênero: ${genreName}` : "Descubra Novos Jogos"}</h1>
            
            {filteredGames.length > 0 ? (
                <div className={styles.gameList}>
                    {currentGames.map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            ) : (
                <p className={styles.noResults}>Nenhum jogo encontrado.</p>
            )}

            {filteredGames.length > gamesPerPage && (
                <Pagination 
                    gamesPerPage={gamesPerPage} 
                    totalGames={filteredGames.length} 
                    paginate={paginate} 
                    currentPage={currentPage} 
                />
            )}
        </div>
    );
}

export default Home;