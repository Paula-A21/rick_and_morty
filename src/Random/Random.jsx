import Card from "../components/Card/Card";

export default function Random (characters){

    const totalDeCharacters = 826;
    const idRandom = Math.floor(Math.random() * totalDeCharacters) + 1;

    <Card id={idRandom} characters={characters}/>
}