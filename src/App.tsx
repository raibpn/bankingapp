import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
    </div>
  );
}

export default App;
