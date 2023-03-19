import React, { useState, useContext } from "react";

const FavouritesContext = React.createContext<number[]>([]);
const FavouritesUpdateContext = React.createContext<(characterId: number) => void>(() => null);

export function useFavourites() {
    return useContext(FavouritesContext);
}

export function useFavouritesUpdate() {
    return useContext(FavouritesUpdateContext);
}

export function FavCharacterProvider({ children }: { children: React.ReactNode }) {
    const [characterFavourites, setCharacterFavourites] = useState<Array<number>>([]);

    const toggleFavourites = (characterId: number) => {
        if (!characterFavourites.includes(characterId)) {
            setCharacterFavourites([...characterFavourites, characterId]);
        } else {
            const updatedFavourites = characterFavourites.filter((id) => id !== characterId);
            setCharacterFavourites(updatedFavourites);
        }
    };

    return (
        <FavouritesContext.Provider value={characterFavourites}>
            <FavouritesUpdateContext.Provider value={toggleFavourites}>{children}</FavouritesUpdateContext.Provider>
        </FavouritesContext.Provider>
    );
}
