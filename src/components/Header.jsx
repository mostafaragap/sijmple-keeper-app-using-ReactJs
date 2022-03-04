import React from 'react';
import HighlightIcon from "@material-ui/icons/Highlight";

const style = {
    color: '#fff',
  fontFamily: '"McLaren", cursive',
  fontWeight: 'bold'
}

class Header extends React.Component{
  state = {
    brand : "K e e p e r"
  }
  render(){
    return <nav className="navbackgorund navbar navbar-light">
    <div className="container-fluid">
       <h4 style={style}>
       <HighlightIcon />
    {this.state.brand}
   </h4>
 </div>
</nav> 
  }
}



export default Header  ;