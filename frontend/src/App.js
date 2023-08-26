// import logo from './logo.svg';
import './App.css';
import './Styles.css';
import React, { useState } from 'react';
import SurveyForm from './components/SurveyForm';
import TokenPage from './components/TokenPage';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  const [token, setToken] = useState('');

  const submitForm = (newToken) => {
    setToken(newToken);
  };

  return (
    <div>
      {token ? (
        <TokenPage token={token} />
      ) : (
        <SurveyForm submitForm={submitForm} />
      )}
    </div>
  );
}

export default App;
