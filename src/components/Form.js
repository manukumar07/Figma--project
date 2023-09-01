// import React, { useState } from 'react';


// function App() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // You can add your authentication logic here
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   return (
//     <div className="App">
//       <h1>Login Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username:-</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={handleUsernameChange}
//             required
//             />
//         </div>
//         <div>
//           <label htmlFor="password">Password:-</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
