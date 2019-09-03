import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Book from './Book';
class App extends Component {

  constructor(props){
    super(props)


    this.state ={
      BookService:[]

    }
    this.fetchBookService()
  }
fetchBookService = ()=>{
  fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
  .then(response => response.json())
  .then(BookService => {
  
    this.setState({
      BookService: BookService
    })
  })
}
render(){

  return(
    <div>   
<Book BookService = {this.state.BookService}/>

    </div>

  )
}
}
export default App
