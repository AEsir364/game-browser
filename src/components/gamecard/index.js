import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './gameCard.module.css';

function GameCard({ game }) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/game/${game.id}`);
    };

    return (
        <div onClick={handleCardClick} className={styles.gameCardContainer}>
            <article className={styles.game}>
                <img src={game.thumbnail} alt={game.title} />
                <div className={styles.gameContent}>
                    <strong>{game.title}</strong>
                    
                    <div className={styles.info}>
                        <p>{game.short_description}</p>
                        <span className={styles.platformIcon}>
                            {game.platform === "PC (Windows)" 
                                ? <i className="fa-brands fa-windows"></i> 
                                : <i className="fa-solid fa-window-maximize"></i>
                            }
                        </span>
                    </div>
                    
                    <a
                            href={game.game_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <i className="fa-solid fa-play" style={{ marginRight: '8px' }}></i>
                            Jogar Agora
                        </a>
                </div>
            </article>
        </div>
    );
}

export default GameCard;