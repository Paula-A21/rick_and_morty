export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button onClick={()=>props.onSearch()}>Agregar</button>
      </div>
   );
}


// export default function SearchBar(props) {
//    return (
//       <div>
//          <input type='search'/>
//          <button onClick={props.onSearch()}>Agregar</button>
//       </div>
//    );
// }
