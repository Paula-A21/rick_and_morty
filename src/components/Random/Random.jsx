import Card from "../Card/Card";

export function Random (characters){

    const totalDeCharacters = 826;
    const idRandom = Math.floor(Math.random() * totalDeCharacters) + 1;

    <Card id={idRandom} characters={characters}/>
}