import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Link, Redirect, Route, Switch, withRouter } from 'react-router-dom'
import Home from '../../pages/Home'
import Marketplace from '../../pages/Marketplace'
import Create from '../../pages/Create'
import Register from '../../pages/Register'
import Nft from '../../pages/Nft'
import styles from './Navbar.module.css'
import NavbarItem from './NavbarItem'
import NavSearch from './NavSearch';
import logo from '../../assets/spaceLogo.png'
import { useWeb3React } from "@web3-react/core"
// import logo from '../../assets/logo-dark.jpg'
// import logo from '../../assets/logo-light.jpg'
function Navbar() {
    const { active, account, library, connector, activate, deactivate } = useWeb3React()
    console.log('Web3React Test: ', active, account)
    return (
        <Router>
            <nav className={styles.spaceNav}>
                <a href="/" className={styles.logo}>
                    <img src={logo} alt="mmtuts logo"/>
                </a>
                <NavSearch />
                <ul className={styles.navItemList}>
                    <NavbarItem navName = {"MarketPlace"} navPath = {"/assets"}/>
                    <NavbarItem navName = {"Create NFTs"} navPath = {"/create"}/>
                    <NavbarItem navName = {"Resource Center"} navPath = {"/register"}/>
                    <NavbarItem navName = {"User"} navPath = {"/user"}/>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/assets">
                    <Marketplace />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/create">
                    <Create />
                </Route>
                <Route path="/assets/:nftId" exact component={Nft}>
                </Route>
            </Switch>
        </Router>
    )
}

export default Navbar;
