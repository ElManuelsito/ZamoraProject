import React, { useContext } from 'react'
import { Dashboard } from './Dashboard'
import { DashboardAdmin } from './DashboardAdmin'
import { UserContext } from '../context/UserContext'

export const Panel = () => {
  const { user } = useContext(UserContext);
  console.log(user.role)
  return (
    <>
        {
            // usuario comun
            user.role === 'user' ? (
                <Dashboard/>
            ):(
            // administrador
                <DashboardAdmin/>
            )
        }
    </>
  )
}
