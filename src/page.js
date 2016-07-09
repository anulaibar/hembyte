import React from 'react'
import About from './about.js'
import Address from './address.js'
import Map from './map.js'
import styles from './page.css'

const Page = () => {
    return(
        <div>
            <div className={styles.page}>
                <About />
                <Address />
            </div>
            <Map />
        </div>
    );
}
export default Page
