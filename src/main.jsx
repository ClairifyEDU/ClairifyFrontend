import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import './index.css'

import ApplicationPage from './pages/ApplicationPage.jsx'
import DiscordPage from './pages/DiscordPage.jsx'
import DonatePage from './pages/DonatePage.jsx'
import TeamPage from './pages/TeamPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotePage from './pages/NotePage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App /> }>
      <Route index={true} path='/' element={ <HomePage /> } />
      <Route path='/notes' element={ <NotePage /> } />
      <Route path='/team' element={ <TeamPage /> } />
      <Route path='/donate' element={ <DonatePage /> } />
      <Route path='/discord' element={ <DiscordPage /> } />
      <Route path='/apply' element={ <ApplicationPage /> } />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>,
)
