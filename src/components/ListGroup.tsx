import { useState } from "react";
import { Fragment } from "react";

interface ListGroupProps{
    items: string[];
    heading: string;
    onSelect:(item: string)=>
}

function ListGroup({items,heading}: ListGroupProps) {

    const [selected,setSelected] = useState(0);

    const getMessage=()=>{
        return items.length===0 ? <p>No items found</p> : null;
    }
    return (
        <>
        <h1>{heading}</h1>
        <ul className="list-group">
            {getMessage()}
       {items.map((item,index)=>

       <li className={selected === index ? "list-group-item active" : "list group-item"} 
       onClick={()=>{setSelected(index)}} 
       key={item}>   {item}    </li>

       )}
      
    </ul>
    </>
  );
}
export default ListGroup;
