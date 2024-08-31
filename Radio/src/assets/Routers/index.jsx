import React from 'react'
import Home from '../../components/page/Home'
import Projects from '../../components/page/Projects'
import Contact from '../../components/page/Contact'
import { Route, Routes } from 'react-router-dom'
import Stock from '../../components/page/Stock'

const Routers = () => {
    const routes = [
        { id: 0, element: <Home />, path: '/' },
        { id: 1, element: <Projects />, path: '/projects' },
        { id: 2, element: <Stock />, path: '/stock' },
        {id:3, element:<Contact/>, path:'/contact'}
    ]
    return (
        <Routes>
            {routes.map(({ id, element, path }) => {
                return <Route key={id} path={path} element={element} />
            })}
        </Routes>
    )
}

export default Routers