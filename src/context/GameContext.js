import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [allGames, setAllGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadGamesFromApi() {
            try {
                const response = await api.get('/games');
                if (Array.isArray(response.data)) {
                    setAllGames(response.data);
                } else {
                    setAllGames([]);
                }
            } catch (err) {
                setError("Não foi possível carregar os jogos. Tente novamente mais tarde.");
            } finally {
                setLoading(false);
            }
        }
        loadGamesFromApi();
    }, []);

    return (
        <GameContext.Provider value={{ allGames, loading, error }}>
            {children}
        </GameContext.Provider>
    );
};