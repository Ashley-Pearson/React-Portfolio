import React from 'react'
import { RiLinkedinBoxFill } from "react-icons/ri"


//const styles = {
//  footerIcon: {
//     background: 'white',
//    margin: '20px',
//   borderRadius: '10px',
//  width: '70px'
// }
//}

export default function Footer() {
    return (
        <div className='footer'>
            <a href="linkedin.com">
                <div> <RiLinkedinBoxFill /> </div>
            </a>
        </div>
    );
}