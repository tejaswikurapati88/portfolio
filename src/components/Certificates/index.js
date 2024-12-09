import './index.css'
import CertificateItem from '../CertificateItem'

const certificatesList=[
	{
		id: 1,
		certificationLink: "https://certificates.ccbp.in/intensive/static-website?id=VEPDIFOCYY",
		certificateImage: "https://res.cloudinary.com/dkvptcm7q/image/upload/v1733244588/VEPDIFOCYY.pdf_jowndc.jpg",
		certificateName: "Build your own static website"
	},
	{
		id: 2,
		certificationLink: "https://certificates.ccbp.in/intensive/responsive-website?id=AWPSQYTHRV",
		certificateImage: "https://res.cloudinary.com/dkvptcm7q/image/upload/v1733244467/AWPSQYTHRV.pdf_sytkvr.jpg",
		certificateName: "Build your own Responsive website"
	},
	{
		id: 3,
		certificationLink: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=INUKDIEURV",
		certificateImage: "https://res.cloudinary.com/dkvptcm7q/image/upload/v1733244747/INUKDIEURV.pdf_s0sbtc.jpg",
		certificateName: "Introduction to Database"
	},
	{
		id: 4,
		certificationLink: "https://certificates.ccbp.in/intensive/programming-foundations?id=XQQEAYWVBA",
		certificateImage: "https://res.cloudinary.com/dkvptcm7q/image/upload/v1733244893/XQQEAYWVBA.pdf_vqqafe.jpg",
		certificateName: "Programming Foundations with Python"
	},
	{
		id: 5,
		certificationLink: "https://certificates.ccbp.in/intensive/developer-foundations?id=DHMQOMARTH",
		certificateImage: "https://res.cloudinary.com/dkvptcm7q/image/upload/v1733245150/DHMQOMARTH.pdf_mc640c.jpg",
		certificateName: "Developer Foundations"
	},
	{
		id: 6,
		certificationLink: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=AYNQSRSDFF",
		certificateImage: "https://res.cloudinary.com/dkvptcm7q/image/upload/v1733245286/AYNQSRSDFF.pdf_uaqriv.jpg",
		certificateName: "Build Your Own Dynamic Web Application"
	},
	{
		id: 7,
		certificationLink: "https://certificates.ccbp.in/intensive/javascript-essentials?id=JQQIHAJIET",
		certificateImage: "https://res.cloudinary.com/dkvptcm7q/image/upload/v1733245430/JQQIHAJIET.pdf_gvgn2r.jpg",
		certificateName: "JavaScript Essentials"
	},
	{
		id: 8,
		certificationLink: "https://certificates.ccbp.in/intensive/flexbox?id=YGEFDIBTRU",
		certificateImage: "https://res.cloudinary.com/dkvptcm7q/image/upload/v1733245561/YGEFDIBTRU.pdf_vggjq7.jpg",
		certificateName: "Responsive Web Design using flexbox"
	},
	{
		id: 9,
		certificationLink: "https://certificates.ccbp.in/intensive/node-js?id=OSPLKBCTMJ",
		certificateImage: "https://res.cloudinary.com/dkvptcm7q/image/upload/v1733245689/OSPLKBCTMJ.pdf_hifmgz.jpg",
		certificateName: "Node JS"
	},
	{
		id: 10,
		certificationLink: "https://certificates.ccbp.in/intensive/react-js?id=ZOGKSZDDPR",
		certificateImage: "https://res.cloudinary.com/dkvptcm7q/image/upload/v1733245792/ZOGKSZDDPR.pdf_slxeju.jpg",
		certificateName: "React JS"
	},
	
]

const Certificates=()=>{
    return (
        <div className='bg-cont-certi' id='certificates'
		style={{
			scrollMarginTop: "69px"
		}}>
            <div className='cont-ab-certi'>
                <h1 className='about-head'>My <span className='home-span'>Certificates</span></h1>
                <ul className='certi-ul'>
                    {certificatesList.map(each => <CertificateItem key={each.id} itemDetails={each}  />)}
                </ul>
            </div>
        </div>
    )
}

export default Certificates