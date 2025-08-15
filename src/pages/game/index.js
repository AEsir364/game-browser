import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GameContext } from '../../context/GameContext';
import styles from './game.module.css';
import api from '../../services/api';
function Game() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { allGames } = useContext(GameContext);
    const [basicGameData, setBasicGameData] = useState(null);
    const [fullGameData, setFullGameData] = useState(null);
    const [isLoadingDetails, setIsLoadingDetails] = useState(true);

    useEffect(() => {
        const gameId = parseInt(id);
        const foundGame = allGames.find(g => g.id === gameId);

        if (foundGame) {
            setBasicGameData(foundGame);
        } else if (allGames.length > 0) {
            navigate("/", { replace: true });
            return;
        }

        async function loadFullGameDetails() {
            setIsLoadingDetails(true);
            try {
                const response = await api.get('/game', { params: { id: id } });
                if (response.data && response.data.id) {
                    setFullGameData(response.data);
                }
            } catch (error) {
                console.error("Falha ao buscar detalhes completos do jogo:", error);
            } finally {
                setIsLoadingDetails(false);
            }
        }

        loadFullGameDetails();
    }, [id, allGames, navigate]);

    if (!basicGameData) {
        return <div className="loading"><h2>Carregando...</h2></div>;
    }

    const game = fullGameData || basicGameData;

    return (
        <div className={`container ${styles.gamePage}`}>
            <aside className={styles.sidebar}>
                <img src={game.thumbnail} alt={game.title} className={styles.posterImage} />
                <div className={styles.actions}>
                    <a href={game.game_url} target="_blank" rel="noopener noreferrer" className={styles.playButton}>
                        Jogar Agora
                    </a>
                    <button onClick={() => navigate(-1)} className={styles.backButton}>
                        &larr; Voltar
                    </button>
                </div>
                <div className={styles.detailsList}>
                    <h4>Detalhes</h4>
                    <ul>
                        <li><strong>Gênero:</strong> {game.genre}</li>
                        <li><strong>Plataforma:</strong> {game.platform}</li>
                        <li><strong>Publicadora:</strong> {game.publisher}</li>
                        <li><strong>Desenvolvedora:</strong> {game.developer}</li>
                        <li><strong>Lançamento:</strong> {game.release_date}</li>
                    </ul>
                </div>
            </aside>

            <main className={styles.mainContent}>
                <h1 className={styles.title}>{game.title}</h1>
                
                <h4>Sobre o Jogo</h4>
                {isLoadingDetails ? (
                    <p>Carregando mais detalhes...</p>
                ) : (
                    <div 
                        className={styles.description} 
                        dangerouslySetInnerHTML={{ __html: game.description || game.short_description }}
                    ></div>
                )}

                {game.screenshots && game.screenshots.length > 0 && (
                    <div className={styles.screenshots}>
                        <h4>Screenshots</h4>
                        <div className={styles.gallery}>
                            {game.screenshots.map(ss => (
                                <img key={ss.id} src={ss.image} alt="Game screenshot" />
                            ))}
                        </div>
                    </div>
                )}
                
                {game.minimum_system_requirements && (
                    <div className={styles.requirements}>
                        <h4>Requisitos Mínimos</h4>
                        <ul>
                            <li><strong>OS:</strong> {game.minimum_system_requirements.os}</li>
                            <li><strong>Processador:</strong> {game.minimum_system_requirements.processor}</li>
                            <li><strong>Memória:</strong> {game.minimum_system_requirements.memory}</li>
                            <li><strong>Gráficos:</strong> {game.minimum_system_requirements.graphics}</li>
                            <li><strong>Armazenamento:</strong> {game.minimum_system_requirements.storage}</li>
                        </ul>
                    </div>
                )}
            </main>
        </div>
    );
}

export default Game;