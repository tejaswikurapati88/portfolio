import './index.css'
import ProjectItem from '../ProjectItem'
const projectList= [
    {
        projectId: 1,
        proName: 'click counter',
        gitUrl: '',
        websiteUrl: 'https://tejclickcounter.ccbp.tech/',
        desc: '',
        category: '',
    },
    {
        projectId: 2,
        proName: 'Destination search',
        gitUrl: 'https://github.com/tejaswikurapati88/destinationSearch',
        websiteUrl: 'https://destinationteju.ccbp.tech/',
        desc: '',
        category: '',
    },
    {
        projectId: 3,
        proName: 'simple todos',
        gitUrl: 'https://github.com/tejaswikurapati88/SimpleTodosApp',
        websiteUrl: 'https://simpletodosteju.ccbp.tech/',
        desc: '',
        category: '',
    }
]
const Projects=()=>{
    return (
        <div className='bg-cont proj-bg'>
            <div className='cont-ab'>
                <h1 className='about-head'>My <span className='home-span'>Projects</span></h1>
                <ul className='skills-ul'>
                    {projectList.map(each => <ProjectItem key={each.projectId} projectItemDetails={each}  />)}
                </ul>
            </div>
        </div>
    )
}

export default Projects