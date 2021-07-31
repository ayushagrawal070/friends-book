import React from 'react'
import Feed from '../../Components/Feed/Feed'
import Header from '../../Components/Header/Header'
import Rightbar from '../../Components/Rightbar/Rightbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Home.css'

function Home() {
    return (
        <>
            <Header />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>

        </>
    )
}

export default Home
