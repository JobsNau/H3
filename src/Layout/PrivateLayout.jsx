import React from 'react'
import PrivateRoutes from '../Components/PrivateRoutes'

const PrivateLayout = ({children}) => {
    return (
        <PrivateRoutes>
            <div>
            Este es el private layout
            {children}
            </div>
        </PrivateRoutes>
    )
}

export default PrivateLayout
