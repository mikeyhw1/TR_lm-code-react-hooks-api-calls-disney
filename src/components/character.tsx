import React from "react";
import { DisneyCharacter } from "../disney_character";
import { useFavourites, useFavouritesUpdate } from "../FavouritesContext";

interface CharacterProps {
    character: DisneyCharacter;
}

const Character: React.FC<CharacterProps> = ({ character }) => {
    const characterFavourites = useFavourites();
    const toggleFavouriteForCharacter = useFavouritesUpdate();

    return (
        <article className="card">
            <h2>{character.name}</h2>

            <button className="card__button" onClick={() => toggleFavouriteForCharacter(character._id)}>
                {!characterFavourites.includes(character._id) ? "Add to Favourites" : "Favourited"}
            </button>

            <img className="card__img" src={character.imageUrl} alt={character.name} />
        </article>
    );
};

export default Character;
