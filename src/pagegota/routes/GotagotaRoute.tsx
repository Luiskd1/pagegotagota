import { Routes, Route, Navigate } from 'react-router-dom'
import { GotagotaPage } from '../pages/GotagotaPage'

export const GotagotaRoute = () => {
  return (
    <Routes>

        <Route path='/' element={<GotagotaPage/>}/>

        <Route path='/*' element={<Navigate to="/"/>}/>
    </Routes>
  )
}
