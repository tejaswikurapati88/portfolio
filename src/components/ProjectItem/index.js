import "./index.css"

const ProjectItem=(props)=>{
    const {projectItemDetails}= props 
    const { proName }= projectItemDetails
    return (
        <li className="list-item">
            <p className='about-p'>{proName}</p>
        </li>
    )
}

export default ProjectItem