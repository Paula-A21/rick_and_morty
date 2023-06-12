
import Card from "./Card";

export default function Cards({characters, onClose}) {
   console.log(characters)
  return (
    <div>
      {
         characters?.map((char, index)=>{
            return <Card  key={char.id} char={char} onClose={onClose}/>
         })
      }

      {/* id={Rick.id}
      name={Rick.name}
      status={Rick.status}
      species={Rick.species}
      gender={Rick.gender}
      origin={Rick.origin.name}
      image={Rick.image}
      onClose={() => window.alert("Emulamos que se cierra la card")} */}
    </div>
  );
}


// import Card from './Card';

// export default function Cards({props}) {
//    return (
//       <div> 
//          {props.characters?.map((char) => { //el signo de pregunta sirve para confirmar que hay algo
//          return <Card key={char.id} name={char.name} status={char.status} specie={char.specie} gender={char.gender} origin={char.origin.name} img={char.image}/>
//       }) 
//    }
//       </div>
   
//    );
   
//}



//name={char.name} status={char.status} specie={char.specie} gender={char.gender} origin={char.origin} img={char.img} key={char.id}