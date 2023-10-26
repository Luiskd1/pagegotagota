import { Routes, Route } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { GotagotaRoute } from '../pagegota/routes/GotagotaRoute';


export const AppRouter = () => {
  return (
    <Routes>


        <Route path='/auth/*' element={<AuthRoutes/>}/>

        <Route path='/*' element={<GotagotaRoute/>}/>

    </Routes>
  )
}
