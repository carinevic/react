import React,{Component} from 'react'

class Book extends Component{
    render(){
       let bookItems = this.props.BookService.map(BookService =>{
            return <div>
            
        {BookService.author}
        </div>
       })
    
       return <div>{bookItems}</div>
            
    }
  
       
    
}
export default Book