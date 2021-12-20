import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Home.module.css'
import thumbnailImg from '../../assets/homeSlide.png'
import userLogo from '../../assets/UserLogoSlider.png'
import * as FaIcons from 'react-icons/fa'

function SlideThumbnail(props: any) {

    return (
        <Link to="/users" className={styles.slideThumbnail}>
            <img src={props.data.image}></img>
            <div className={styles.thumbDetailWrap}>
                <img src={userLogo} className={styles.userLogoSlide}></img>
                <div className={styles.thumbDetail}>
                    <p>{props.data.name}</p>
                    <p>{props.data.email}</p>
                </div>
                <FaIcons.FaInfoCircle size={20}/>
            </div>
        </Link>
    )
}

export default SlideThumbnail