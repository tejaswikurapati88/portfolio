import './index.css'
import SkillItem from '../SkillItem'

const skillsList=[
    {
        id: 1,
        skill: 'HTML',
        image: "https://res.cloudinary.com/dkvptcm7q/image/upload/v1733226546/c573ff5552d6da9a1d28ec4e27cd1445-removebg-preview_w2hkck_vd2yrp.png"
    },
    {
        id: 2,
        skill: 'CSS',
        image: "https://res.cloudinary.com/dkvptcm7q/image/upload/v1733226601/ac262626eb1e924c85b8b68fe97c2213-removebg-preview_kihgsi_orwatq.png"
    },
    {
        id: 3,
        skill: 'JavaScript',
        image: "https://res.cloudinary.com/dkvptcm7q/image/upload/v1733226649/10_Best_Cheat_Sheets_That_A_Programmer_Must_Have-removebg-preview_daf4wt_zlecio.png"
    },
    {
        id: 4,
        skill: 'BootStrap',
        image: "https://res.cloudinary.com/dkvptcm7q/image/upload/v1733047789/Bootstrap-removebg-preview_opsbke_1_wqqzpk.png"
    },
    {
        id: 5,
        skill: 'React JS',
        image: "https://res.cloudinary.com/dkvptcm7q/image/upload/v1733047650/Windows_Vista__70-620__Part_1__Install_and_Getting_Started-removebg-preview_dlar2d_tzj6dk.png"
    },
    {
        id: 6,
        skill: 'Node JS',
        image: "https://res.cloudinary.com/dkvptcm7q/image/upload/v1733047650/0c8121171fefa57a22351d1a10e96c2b-removebg-preview_eglfs1_v3sceq.png"
    },
    {
        id: 7,
        skill: 'Express JS',
        image: "https://res.cloudinary.com/dkvptcm7q/image/upload/v1733047650/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo-removebg-preview_yihadf_vwn4n9.png"
    },
    {
        id: 8,
        skill: 'SQL',
        image: "https://res.cloudinary.com/dkvptcm7q/image/upload/v1733047650/SQL_Basics___Hands-On_Beginner_SQL_Tutorial_Analyzing_Bike-Sharing-removebg-preview_a0aug6_q9kvli.png"
    },
    {
        id: 9,
        skill: 'Python',
        image: "https://res.cloudinary.com/dkvptcm7q/image/upload/v1733047649/download__2_-removebg-preview_sjc7gv_svbbc3.png"
    },
    {
        id: 10,
        skill: 'MongoDB',
        image: "https://res.cloudinary.com/dkvptcm7q/image/upload/v1733047649/MongoDB_affine_l_%C3%A9quilibrage_de_charge_avec_sa_version_2_4_-_Le_Monde_Informatique-removebg-preview_1_ppnpok_vfw6m4.png"
    },
    {
        id: 11,
        skill: 'Figma',
        image: "https://res.cloudinary.com/dkvptcm7q/image/upload/v1733047648/Figma_s_new_icon___Figma_Blog-removebg-preview_fclwte_zvu5jn.png"
    },
]

const Technologies=()=>{
    return(
        <div className='tech-bg-cont' id='skills'
        style={{
            scrollMarginTop: "69px"
        }}>
            <div className='tech-cont'>
                <h1 className='about-head'>Technical <span className='home-span'>Skills</span></h1>
                <ul className='skills-ul'>
                    {skillsList.map(each => <SkillItem key={each.id} itemDetails={each}  />)}
                </ul>
            </div>
        </div>
    )
}

export default Technologies