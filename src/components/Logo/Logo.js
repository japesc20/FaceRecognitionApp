import { logDOM } from '@testing-library/react'
import React from 'react'
import './Logo.css'
import Tilt from 'react-tilt'
import brain from './brain3.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner">
                    <img alt='Logo' src={brain} />
                    </div>
            </Tilt>
        </div>
    )
}


export default Logo;