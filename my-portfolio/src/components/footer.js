import React from 'react'


const styles = {
    footerIcon: {
        background: 'white',
        margin: '20px',
        borderRadius: '10px',
        width: '70px'
    }
}

export default function Footer() {
    return (
        <div className='footer'>
            <a href='https://www.linkedin.com/in/ashley-pearson-578960195/'>
            <img src='Linkedin_logo_PNG.png' alt='LinkedIn'style={styles.footerIcon}></img>
            </a>
            <a href='https://github.com/Ashley-Pearson'>
                
            </a>
        </div>
    )
}