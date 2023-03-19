import React, { useState, useContext } from "react";

const FavouritesContext = React.createContext<{ favourites: number[]; toggleFavourites: (favs: number) => void }>({
    favourites: [],
    toggleFavourites: () => null,
});

export function useFavourites() {
    return useContext(FavouritesContext);
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
        <FavouritesContext.Provider value={{ favourites: characterFavourites, toggleFavourites: toggleFavourites }}>
            {children}
        </FavouritesContext.Provider>
    );
}
