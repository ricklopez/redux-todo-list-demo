import React from 'react';
import Footer from './Footer';
import Jumbotron from './Jumbotron';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import UndoRedo from '../containers/UndoRedo';

const App = () => (
  <div>
    <div className="container">
      <Jumbotron/>
      <div className="row">
        <div className="col ">
          <AddTodo />
           <UndoRedo />
        </div>
        <div className="col border bg-light text-dark">
          <VisibleTodoList />
        </div>
      </div>
      <Footer />
    </div>
    
    
    
    
  </div>
)

export default App
