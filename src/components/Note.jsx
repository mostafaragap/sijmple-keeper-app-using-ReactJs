import React from 'react';
import DeleteIcon from "@material-ui/icons/Delete";

const style = {
    maxWidth :'18rem'
}
const titleStyle = {
  fontFamily: '"McLaren", cursive' 
}
 


function Notes (props)
{
  function handleClick() {
    props.onDelete(props.id);
  }
     
      return <div className='col-lg-3 col-md-4 col-6 note'>  <div className="card text-dark bg-light mb-3" style={style}>
      <div className="card-header" style = {titleStyle}>{props.title}</div>
    <div className="card-body">
     <p className="card-text">{props.content}</p>
     <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
    </div>  </div>  
     


            
}





export default Notes ;