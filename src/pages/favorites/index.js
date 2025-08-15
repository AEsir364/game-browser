import { useState, useEffect, useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import styles from '../home/home.module.css';
import GameCard from '../../components/gamecard';

const favoriteGameIds = [475, 466, 204, 212, 57, 432]; 
/* 
Genshin Impact
Valorant
Unturned
Brawhalla
Fortnite
Habbo
*/

function Favorites() {
    const { allGames, loading, error } = useContext(GameContext);
    
    const [favoriteGames, setFavoriteGames] = useState([]);

    useEffect(() => {
        if (allGames.length > 0) {
            const results = allGames.filter(game => favoriteGameIds.includes(game.id));
            setFavoriteGames(results);
        }
    }, [allGames]);

    if (loading) return <div className="loading"><h2>Carregando...</h2></div>;
    if (error) return <div className="loading"><h2>{error}</h2></div>;

    return (
        <div className="container">
            <h1 className={styles.title}>Meus Jogos Favoritos</h1>
            
            {favoriteGames.length > 0 ? (
                <div className={styles.gameList}>
                    {favoriteGames.map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            ) : (
                <p className={styles.noResults}>Nenhum jogo favorito encontrado.</p>
            )}
        </div>
    );
}

export default Favorites;