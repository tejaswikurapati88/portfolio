import './index.css'

const CertificateItem=(props)=>{
    const {itemDetails}= props 
    const {certificateImage, certificateName}= itemDetails
    return (
        <li className="certi-item">
            <img src={certificateImage} alt={certificateName} className='certi-img' />
        </li>
    )
}

export default CertificateItem