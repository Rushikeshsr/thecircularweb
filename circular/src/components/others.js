import React from 'react'
import "../css/circulareconomy.css"

const Others = () => {
  return (
    <>
        <div className='cover-imageO p-4'>
            <h1 className='cover-text other-head' style={{fontSize:"40px",color:"aliceblue", opacity:"0.8", textShadow:"2px 2px 20px black"}}>
            Climate Dynamics, Weather Patterns, and Their Effect <br/>
            on Human Health Through the Lens of Celestial Observations
            </h1>
        </div>
        <div className='section2'>
            <p className='paragh'>
                Recognizing the vital role of healthcare, The Circular has formed partnerships with primary healthcare centers (PHCs) and community health workers. These collaborations allow us to extend our reach to underserved communities, particularly in rural and tribal regions, where access to healthcare is limited. By working closely with PHCs and community health workers, we are able to provide essential healthcare services and education, addressing the healthcare gap and empowering individuals to take charge of their well-being. Together, we strive to build healthier and more resilient communities.
            </p>
            <div className='text-center m-3'>
                <img className='medpich'  src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685870908/Circular%20website/oi4_kapg7c.jpg"} alt='oi4'></img>
            </div>
            <p className='paragh'>
                Education is a powerful catalyst for change, and The Circular has joined hands with passionate educationists, schools, and educational institutions. By pooling our resources and expertise, we are equipping young minds with the knowledge and skills they need to shape a better future. Our collaborative efforts extend to rural areas, where we work tirelessly to ensure that quality education is accessible to all, regardless of their socio-economic background. Through these partnerships, we aim to empower individuals, strengthen communities, and foster a culture of lifelong learning.
            </p>
            <p className='paragh'>
                Our partnerships extend beyond the healthcare and education sectors, encompassing areas such as environmental conservation, renewable energy, waste management, and social entrepreneurship. By collaborating with organizations and individuals who share our vision, we are able to drive innovation and promote sustainable practices. Together, we tackle critical challenges such as climate change, resource depletion, and social inequality. Through collective action, we strive to create a positive impact that transcends boundaries and inspires others to join our cause.
            </p>
            <p className='paragh'>
                One of our notable partnerships is with the <span style={{"color":"#00ff0d"}}>Japal-Rangapur observatory</span>, the first-of-its-kind in India. Through this collaboration, we are working to transform the observatory into a cutting-edge research center focused on global and planetary health. The observatory should serve as a reference point for clinicians and researchers to develop new studies related to emerging pathologies and environmental medicine. Our goal is to make sure that eventually it also acts as an incubator for new ideas and projects in the field, bringing together academic and scientific publications and information from different sectors. 
            </p>
            <div className="image-container mb-4">
                <div className='d-flex flex-column'>
                    <img className='medpich aranyapic m-2' style={{width:"550px"}} src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685870919/Circular%20website/oi1_igzyo6.jpg"} alt="oi1"/>
                    <img className='medpich aranyapic m-2' style={{width:"550px"}} src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685870909/Circular%20website/oi2_fbdc5e.jpg"} alt="oi2"/>
                </div>
                <img className='medpicv' style={{width:"300px"}} src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685870909/Circular%20website/oi3_vs6k67.jpg"} alt="oi3"/>
            </div>
        </div>
        <div className='section3'>
            <p className='para'>
                Leveraging new technologies, we aim to accelerate and optimize research results for the benefit of patients and society as a whole. Furthermore, the observatory serves as a platform to disseminate research findings, making them accessible to the broader community. In addition, we actively seek solutions for data management and address legal gaps to ensure the responsible use of data generated through research. By harnessing the power of research and collaboration, we aim to generate a positive impact on the economy and contribute to the reduction of health spending.
            </p>
            <p className='para'>
                The Circular will become the meeting and intersection point among different players and sectors, which play a role on global and planetary health.
            </p>
            <p className='para'>
                Through our diverse range of partnerships, The Circular remains committed to driving positive change and creating a sustainable future. By joining forces with like-minded organizations, we are able to amplify our impact and work towards a more inclusive, equitable, and environmentally conscious society. Together, we believe in the power of collaboration to create lasting change and make a difference in the lives of individuals and communities.
            </p>
        </div>
    </>
  )
}

export default Others;