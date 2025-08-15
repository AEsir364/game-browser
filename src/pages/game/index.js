import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GameContext } from '../../context/GameContext';
import styles from './game.module.css';

function Game() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const { allGames, loading } = useContext(GameContext);

    const [game, setGame] = useState(null);

    useEffect(() => {
        if (!loading && allGames.length > 0) {
            const gameId = parseInt(id);
            const foundGame = allGames.find(g => g.id === gameId);

            if (foundGame) {
                setGame(foundGame);
            } else {
                navigate("/", { replace: true });
            }
        }
    }, [id, allGames, loading, navigate]);

    if (loading || !game) {
        return <div className="loading"><h2>Carregando jogo...</h2></div>;
    }

    return (
        <div className={styles.gameDetail}>
            <img src={game.thumbnail} alt={game.title} className={styles.heroImage} />
            <div className={`container ${styles.content}`}>
                <h1 className={styles.title}>{game.title}</h1>
                <p className={styles.description}>{game.short_description}</p>
                <div className={styles.infoGrid}>
                    <div><strong>Gênero</strong><span>{game.genre}</span></div>
                    <div><strong>Plataforma</strong><span>{game.platform}</span></div>
                    <div><strong>Publicadora</strong><span>{game.publisher}</span></div>
                    <div><strong>Data de Lançamento</strong><span>{game.release_date}</span></div>
                </div>
                <div className={styles.actions}>
                    <button onClick={() => navigate(-1)} className={styles.backButton}>&larr; Voltar</button>
                    <a href={game.game_url} target="_blank" rel="noopener noreferrer" className={styles.playButton}>Jogar Agora</a>
                </div>
            </div>
        </div>
    );
}

export default Game;