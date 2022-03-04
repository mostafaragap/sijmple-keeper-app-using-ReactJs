import React from 'react' ; 

const date = new Date().getFullYear();

class Footer extends React.Component{
 render()
  {
    const year = new Date().getFullYear();
    return (
      <footer>
        <p>Copyright ⓒ {year} . made with ♥ by Mostafa </p>
      </footer>
    );
    
  }
 



}


export default Footer ; 