import { Fragment } from "react"

export const Characters = ({characters, setCharacters}) => {

  const resetCharacters =() =>{
    setCharacters(null)
  }
  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacters}>
        Volver a home
      </span>
      <div className="container-characters"></div>
      {characters.map((character, index) => (
        <div className="character-container"key={index}>
          <div>
            <img src={character.image} alt={character.name} />
          </div>
          <div>
            <h3>{character.name}</h3>
            <h6>
              {character.status === 'Alive' ? (
                <Fragment>
                  <span className="alive">Alive</span>
                </Fragment>
              ):(
                <Fragment>
                  <span className="dead">Dear</span>
                </Fragment>
              )}
            </h6>
            <p>
              <span className="text-gray">Episodios:</span>
              <span>{character.episode.length}</span>
            </p>
            <p>
              <span className="text-gray">Especie:</span>
              <span>{character.species}</span>
            </p>
          </div>
        </div>
      ))}
      <span className="back-home" onClick={resetCharacters}>
        Volver a home
      </span>
    </div>
  )
}
