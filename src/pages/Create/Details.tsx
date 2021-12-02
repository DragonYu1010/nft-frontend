import React from 'react'
import styles from './Create.module.css'

function Details(props:any) {
    function changeName(e:any) {
        props.setName(e.target.value)
    }
    function changeDes(e:any) {
        props.setDes(e.target.value)
    }
    return (
        <>
            <p className={styles.headTxt}>NFT Details</p>
            <div className={styles.name}>
                <p className={styles.generalTxt}>Name :</p>
                <input type="text" className={styles.inputName} name="nft_name" onChange={changeName}/>
            </div>
            <div className={styles.description}>
                <p className={styles.generalTxt}>Description : </p>
                <textarea className={styles.inputDescription} name="description" onChange={changeDes}/>
            </div>
        </>
    )
}

export default Details