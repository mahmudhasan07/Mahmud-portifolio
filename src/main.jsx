import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/Home/About.jsx';
import Skills from './components/Home/Skills.jsx';
import Project from './components/Home/Project.jsx';
import ProjectInfo from './components/Home/ProjectInfo.jsx';
import Contact from './components/Home/Contact.jsx';

const router = createBrowserRouter ([
  {
    path : "/",
    element: <App></App>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/about',
        element : <About></About>
      },
      {
        path : '/skills',
        element : <Skills></Skills>
      },
      {
        path : '/projects',
        element : <Project></Project>
      },
      {
        path : '/projects/:id',
        element : <ProjectInfo></ProjectInfo>
      },
      {
        path :"/contact",
        element : <Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
      </React.StrictMode>,
)
