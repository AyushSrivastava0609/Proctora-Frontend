// import PageTitle from "./Componnents/LoginAuth/PageTitle.jsx"
// import Illustration from "./Componnents/LoginAuth/Illustration.jsx"
// import LoginForm from "./Componnents/LoginAuth/LoginForm.jsx"
// import './App.css'
// function App() {
//   return (
//     <>
//     <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-800 to-blue-900">
//       <PageTitle />
//       <div className="container mx-auto px-4 py-16">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
//           <div className="flex-1 hidden lg:block">
//             <Illustration />
//           </div>
//           <div className="flex-1 w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
//             <LoginForm />
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }

// export default App


// import React from 'react'
// import CreateTest from './Containers/createExam/CreateTest'
// import Landing from './Containers/landingPage/Landing';
// import './App.css';


// export default function App() {
//   return (
//     <div>
//       <CreateTest/>
//       <Landing/>
//     </div>
//   )
// }

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Landing, CreateTest } from './Containers';
import './App.css';

// Define routes
const router = createBrowserRouter([
	{
		path: '/',
		element: <Landing/>,
	},
	{
		path: '/create',
		element: <CreateTest />,
	},
]);

const App = () => {
	return (
		<div className="App">
			<RouterProvider router={router} />
			
		</div>
	);
};

export default App;
