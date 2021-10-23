import React, { useEffect, useRef, useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import styles from './Navbar.module.css'
import {useLocation} from 'react-router-dom'
import { useDetectOutsideClick } from './useDetectOutsideClick';
import * as FaIcons from "react-icons/fa";
import { Button } from 'react-bootstrap'
import { useWeb3React } from "@web3-react/core"
import { injected } from "../Wallet/Connectors"
function NavbarUser() {
    const dropdownRef = useRef<any>()
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
    const { active, account, library, connector, activate, deactivate } = useWeb3React()

    let walletAddress:string = account!;
    localStorage.setItem('userWalletAddress', walletAddress)
    function handleLogout() {
        localStorage.clear()
    }
    async function connect() {
        console.log('call connection')
        try {
            await activate(injected)
        } catch (ex) {
          console.log(ex)
        }
    }
    async function disconnect() {
        try {
          deactivate()
        } catch (ex) {
          console.log(ex)
        }
    }
    useEffect(() => {
        localStorage.setItem('userActive', 'Active')
        const pageClickEvent = (e: any) => {
            console.log(e)
            if(dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setIsActive(!isActive)
            }
        };
        if(isActive) {
            window.addEventListener('click', pageClickEvent)
        }
        return () => {
            window.removeEventListener('click', pageClickEvent)
        }
    }, [isActive])
    console.log('aaa: ', localStorage.getItem('userActive'))
    return (
        <div className={styles.navbarUserWrap}>
                
            {console.log('DDD: ', localStorage.getItem('userActive'))}
            {
                localStorage.getItem('userActive') === 'Active'? 
                    <div className={styles.navbarUserContainer}>
                        <button onClick={onClick} className={styles.navbarUserMenuTrigger}>
                            <FaIcons.FaUserCircle size={28}/>
                        </button>
                        <nav ref={dropdownRef} className={isActive ? styles.navbarUserNavActive : styles.navbarUserNavInactive }>
                            <ul>
                                <li><a href="/">Messages</a></li>
                                <li><a href="/">Trips</a></li>
                                <li onClick={handleLogout}><a href="/">Log Out</a></li>
                            </ul>
                        </nav>
                        
                    </div>
                :
                <div className={styles.walletWrap}>
                    <Button onClick = {connect} className={styles.walletButton}>Connect</Button>
                </div>
            }
        </div>

    )
}

export default NavbarUser;