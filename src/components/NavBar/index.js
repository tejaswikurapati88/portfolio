import './index.css'
import {useState} from 'react'
import { FaBars } from "react-icons/fa6";

const Navbar=()=>{
    const [activeTab, setActiveTab]= useState('')

    const tabs=[
        {
            id: 1,
            name: 'home',
            displayName: 'Home'
        },
        {
            id: 2,
            name: 'about',
            displayName: "About"
        },
        {
            id: 3,
            name: 'skills',
            displayName: 'Skills'
        },
        {
            id: 4,
            name: 'projects',
            displayName: 'Projects'
        },
        {
            id: 5,
            name: 'certificates',
            displayName: 'Certificates'
        },
        {
            id: 6,
            name: 'contact',
            displayName: 'Contact'
        }
    ]
    return (
        <div className="bg-nav-cont">
            <a href='/' className='nav-name'>Tejaswi Kurapati</a>
            <FaBars className='bars' />
            <ul className='ul'>
                {tabs.map(each => {
                    const onTab=()=>{
                        setActiveTab(each.name)
                    }
                return( 
                <li key={each.id}>
                        <a href={`#${each.name}`} target='_self' onClick={onTab} rel="noreferrer" 
                        className={activeTab=== each.name ? 'nav-name  activeTabe' :'underline nav-name'} > 
                            {each.displayName}
                        </a>
                    </li>)})}
            </ul>
        </div>
    )
}

export default Navbar