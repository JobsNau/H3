import React from 'react'
import Navbars from '../Components/Navbars'

const PublicLayout = ({children}) => {
    return (
        <div>
            <Navbars/>
            Este es el publiclayout
            {children}
        </div>
    )
}

export default PublicLayout
