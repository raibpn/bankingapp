import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import { Routes, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionCreators } from './redux';
// import { State } from './redux/reducers/index';


function App() {

  const dispatch = useDispatch();
  const { getClients } = bindActionCreators(actionCreators, dispatch)
  // const state = useSelector((state: State) => state.client)
  // console.log(JSON.parse(JSON.stringify(Object)))
  useEffect(() => {
    dispatch(getClients)
  })

  return (
    <div className="App">
      <h1>Hello Daju</h1>
      <h1>{  }</h1>
      <button onClick={() =>getClients}>GetClients</button>
    </div>
  );
}

export default App;
