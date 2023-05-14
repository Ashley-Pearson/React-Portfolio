import React from 'react'
//import { RiLinkedinBoxFill } from "react-icons/ri"


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
        <div>
            <ul className="list-none flex justify-center mx-2 mt-5">
                <li>
                    <a
                        href="https://github.com/Ashley-Pearson"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <i className="fa-brands fa-square-github text-quaternary text-5xl mx-3"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

