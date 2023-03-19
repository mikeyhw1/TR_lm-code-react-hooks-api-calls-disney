import React from "react";
import { DisneyCharacter } from "../disney_character";
import { useFavourites } from "../FavouritesContext";

interface CharacterProps {
    character: DisneyCharacter;
}

const Character: React.FC<CharacterProps> = ({ character }) => {
    const { favourites, toggleFavourites } = useFavourites();

    return (
        <article className="card">
            <h2>{character.name}</h2>

            <button className="card__button" onClick={() => toggleFavourites(character._id)}>
                {!favourites.includes(character._id) ? "Add to Favourites" : "Favourited"}
            </button>

            <img className="card__img" src={character.imageUrl} alt={character.name} />
        </article>
    );
};

export default Character;
