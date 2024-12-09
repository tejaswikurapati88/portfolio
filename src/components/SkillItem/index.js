import "./index.css"

const SkillItem=(props)=>{
     const {itemDetails} = props 
     const {skill, image}= itemDetails
     
    return(
        <li className="list-item">
            <img src={image} alt={skill} className='skill-img' />
            <p className='skill-p'>{skill}</p>
        </li>
    )
}

export default SkillItem