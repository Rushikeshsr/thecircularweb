import React,{useState,useEffect} from 'react'
import "../css/leadership.css"
import Aos from 'aos'
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

const Leadership = () => {
    const [showC,setShowC]=useState(false);
    const [showP,setShowP]=useState(false);
    const [showS,setShowS]=useState(false);
    const [showHD,setShowHD]=useState(false);
    const [showHS,setShowHS]=useState(false);
    const [showR,setShowR]=useState(false);
    const [showJR,setShowJR]=useState(false);

    const [showBtnC,setBtnC]=useState(true);
    const [showBtnP,setBtnP]=useState(true);
    const [showBtnS,setBtnS]=useState(true);
    const [showBtnHD,setBtnHD]=useState(true);
    const [showBtnHS,setBtnHS]=useState(true);
    const [showBtnR,setBtnR]=useState(true);
    const [showBtnJR,setBtnJR]=useState(true);
    const showContentC=()=>{
        setShowC(true)
        setBtnC(false)
    }
    const hideContentC=()=>{
        setShowC(false)
        setBtnC(true)
    }
    const showContentP=()=>{
        setShowP(true)
        setBtnP(false)
    }
    const hideContentP=()=>{
        setShowP(false)
        setBtnP(true)
    }
    const showContentS=()=>{
        setShowS(true)
        setBtnS(false)
    }
    const hideContentS=()=>{
        setShowS(false)
        setBtnS(true)
    }
    const showContentHD=()=>{
        setShowHD(true)
        setBtnHD(false)
    }
    const hideContentHD=()=>{
        setShowHD(false)
        setBtnHD(true)
    }
    const showContentHS=()=>{
        setShowHS(true)
        setBtnHS(false)
    }
    const hideContentHS=()=>{
        setShowHS(false)
        setBtnHS(true)
    }
    const showContentR=()=>{
        setShowR(true)
        setBtnR(false)
    }
    const hideContentR=()=>{
        setShowR(false)
        setBtnR(true)
    }
    const showContentJR=()=>{
        setShowJR(true)
        setBtnJR(false)
    }
    const hideContentJR=()=>{
        setShowJR(false)
        setBtnJR(true)
    }

    useEffect(()=>{
        Aos.init({duration:1000,easing:'ease-in'});
      },[]);
  return (
    <>
        <div className='p-5'>
            <h2 className='main-heading text-center'>LEADERSHIP</h2>
            <hr className='h-line'/>
            <div className='profile'>
                <div data-aos="flip-right" data-aos-delay="100" className='lbox-image'>
                    <img className='lperson' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1686030527/Circular%20website/skbp_pic_k9yxuw.jpg" alt="skbp"/>
                    <div className='lpara'>
                        <p style={{fontSize: "25px", fontWeight:"bold"}}>Dr. S.K.Bikshapathy <br/> 
                        <span style={{fontSize:"20px", fontWeight:"100"}}>Chairman</span>
                        </p>
                        <p style={{fontSize:"15px"}}>chairman@thecircular.in</p>
                        {showBtnC?<button onClick={showContentC} className='seemore'>More<FaAngleDoubleDown style={{fontSize:'18px'}}/></button>:
                        <button onClick={hideContentC} className='seemore' >Less<FaAngleDoubleUp style={{fontSize:'18px'}}/></button>}
                    </div>                
                </div>
                <div>
                    {showC?<p data-aos="fade-down" className='image-para'>Dr. S.K. Bikshapathy possesses a wealth of experience spanning over 42 years across various domains, including industry, research, teaching, and academic administration. His exceptional qualifications, coupled with a steadfast commitment to excellence, have earned him numerous awards and accolades throughout his illustrious career. With a Bachelor's and Master's Degree in Electrical Engineering, complemented by a Doctor of Philosophy in Electrical Machines, Dr. Bikshapathy's academic prowess is truly exceptional. His profound understanding of his field is evidenced by his groundbreaking research on the operation and control of Double Fed Induction Generators, ratified by JNTUH in 2015. <br/><br/>
                    Moreover, his Master's Degree in Industrial Drives & Controls from the University College of Engineering, Osmania University Campus, further solidifies his expertise. His professional experience is equally impressive. He has held prestigious positions in the realm of academic administration, including Professor/HOD, Dean (Academics), Principal, and Director (Administration) in renowned engineering colleges. His teaching experience as a Professor/HOD/EEE at various esteemed institutions has nurtured the minds of countless future engineers, leaving an indelible impact on their educational journeys.<br/><br/>
                    Dr. Bikshapathy's industrial and research expertise spans an impressive 26 years, during which he served as a Senior Electrical Engineer/Junior Engineer in the Electrical Traction Department of South Central Railway. His research work on failure analysis of Dynamic Braking Resistors and Traction Transformers of Electric Locomotives yielded significant improvements within the rail industry. The recognition he received, including awards from Divisional Railway Managers and Chief Electrical Engineers, attests to the profound impact of his research findings.<br/><br/>
                    In recognition of his exceptional contributions, Dr. Bikshapathy has been bestowed with prestigious awards and honors. The Dr. A.P.J. Abdul Kalam National Lifetime Achievement Award, presented by the National Institute of Economics and Social Reforms in February 2020, serves as a testament to his remarkable achievements. Furthermore, he secured a significant AICTE-funded project and successfully organized a one-week STTP on Electric Vehicles for Green Transportation in February 2021, further cementing his reputation as a leader in his field.<br/><br/>
                    His scholarly pursuits are reflected in his numerous publications, presentations, and achievements. His research papers have been published in esteemed international journals, covering topics such as cascaded modular multilevel inverters, three-phase current-fed push-pull DC/DC converters, and the application of telemedicine. Additionally, he has presented papers at prestigious conferences, chaired sessions, and contributed to various journals, demonstrating his commitment to sharing knowledge and fostering academic discourse. He is an active member of esteemed professional bodies, including the Institute of Engineers India (FIE) and the Indian Society for Technical Education (ISTE). His contributions extend to the realm of quality management, where he played a pivotal role in establishing and implementing ISO 9001-2008 Quality Management Systems at Siddhartha Institute of Engineering and Technology and Vishweraya College of Engineering and Technology (VCET). He is also licensed by the Telangana Electrical Licensing Board to supervise 11 KV Electrical HT Installations, showcasing his dedication to safety and regulatory compliance.<br/><br/>
                    Dr. Bikshapathy's profound commitment to social welfare is evidenced by his involvement in various NSS Camps and career guidance programs. He has been instrumental in organizing initiatives that promote digital literacy and provides healthcare services in rural areas, thereby extending the benefits of education and technology to underserved communities.<br/><br/>    
                    </p>:null}
                </div>

            </div>
            <div className='profile'>
                <div data-aos="flip-right" data-aos-delay="100" className='lbox-image'>
                    <img className='lperson' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849361/Circular%20website/AbhayCSwb_bfwjla.png" alt="abhay"/>
                    <div className='lpara'>
                        <p style={{fontSize: "25px", fontWeight:"bold"}}>Abhay Chakra Sadineni<br/>
                        <span style={{fontSize:"20px", fontWeight:"100"}}>President</span>
                        </p>
                        <p style={{fontSize:"15px"}}>president@thecircular.in</p>
                        {showBtnP?<button onClick={showContentP} className='seemore'>More<FaAngleDoubleDown style={{fontSize:'18px'}}/></button>:
                        <button onClick={hideContentP} className='seemore' >Less<FaAngleDoubleUp style={{fontSize:'18px'}}/></button>}
                    </div>                
                </div>
                <div>
                    {showP?<p data-aos="fade-down" className='image-para'>Abhay Chakra Sadineni, a graduate of Mechanical Engineering, epitomizes the essence of a multifaceted achiever. His professional trajectory reflects a rich sphere of experience and a profound dedication to making a positive impact on society. Having honed his expertise as a Design Engineer in the Aerospace and Defence Unit at Cyient, Abhay demonstrated a keen understanding of precision and innovation in the aerospace industry, where meticulous attention to detail and technical acumen was of utmost importance. Driven by an unwavering desire to catalyze change in operations, Abhay embarked on a path within the emerging markets team at Amazon. Here, he delved into the complexities of streamlining logistics in UAE, KSA, Turkey, and Egypt. Through his dedication and strategic mindset, he played a pivotal role in optimizing operations and paving the way for enhanced efficiency.<br/><br/>
                    It was during his journey that Abhay's transformative encounter with The Circular occurred, igniting a profound sense of purpose within him. In 2019, he wholeheartedly embraced the organization's mission and became a devoted volunteer. His passion for sustainability propelled him to become the "Head of Sustainability," where he orchestrated impactful initiatives that resonated with the organization's core values. In 2021, he assumed the position of President at The Circular. Beyond his involvement with The Circular, Abhay also co-founded a food and hospitality company, where his visionary leadership brought intensive operational excellence to the forefront. Simultaneously, his tenacity and unwavering commitment led to his selection as the Sustainability Ambassador, serving as a testament to his unwavering dedication to creating a more sustainable future.<br/><br/>
                    Abhay's intellectual prowess extends beyond his professional endeavors. He exuded a fervor for knowledge dissemination, sharing his insights and expertise as an educator of applied engineering and environmental sciences for sustainability. His profound understanding of the effects of climate change on health allowed him to impart wisdom that extended far beyond the confines of the classroom.<br/><br/>
                    As his influence continued to expand, Abhay spearheaded multiple verticals within The Circular, leaving an indelible mark on the organization's growth and direction. Simultaneously, he embarked on his own entrepreneurial journey, co-founding Natulatech Solutions Pvt. Ltd., as the Managing Director and CEO. His venture was selected for full-time incubation at the prestigious Shiv Nadar University - Atal Incubation Centre's Venture Challenge 5.0. Furthermore, this led to the selection for the esteemed Biomimicry Launchpad program.<br/><br/>
                    Abhay's dedication and accomplishments have garnered well-deserved recognition. He was honored with the PVNR Young Leader award by the SMAE, a recognition that stands as a testament to his exceptional leadership qualities. Building upon this accolade, Abhay was graciously chosen to serve as an advisor to the SMAE, allowing him to contribute his strategic insights and shape the organization's future trajectory. In addition to his endeavors with the SMAE, Abhay assumed the prestigious role of Director - International Relations and Communications for the 'Digital Education and Skills Council' (DESC), a globally recognized think tank and autonomous non-profit body. Here, he harnessed his strategic acumen to advise and initiate groundbreaking projects. Notably, under the auspices of DESC, Abhay spearheaded a nationwide Medical and Disease Surveillance project, aimed at fortifying India's digital health infrastructure. His far-reaching impact exemplifies his unwavering commitment to leveraging technology to foster health equity and promote sustainability.<br/><br/>
                    Throughout his illustrious journey, Abhay's role as a mentor to many students has left an indelible imprint. His unwavering belief in the power of education and his steadfast guidance have inspired aspiring minds to realize their full potential. Furthermore, his innate ability to forge meaningful partnerships has opened doors to transformative collaborations, ultimately amplifying his mission of promoting sustainability and well-being.<br/><br/>    
                    </p>:null}
                </div>
            </div>
            <div className='profile'>
                <div data-aos="flip-right" data-aos-delay="100" className='lbox-image'>
                    <img className='lperson' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1686048185/Circular%20website/rushi_pic_s7qs8q.jpg" alt="rushi_pic"/>
                    <div className='lpara'>
                        <p style={{fontSize: "25px", fontWeight:"bold"}}>Rushikeshwar Sunkey<br/>
                        <span style={{fontSize:"20px", fontWeight:"100"}}>General Secretary</span>
                        </p>
                        <p style={{fontSize:"15px"}}>secretary@thecircular.in</p>
                        {showBtnS?<button onClick={showContentS} className='seemore'>More<FaAngleDoubleDown style={{fontSize:'18px'}}/></button>:
                        <button onClick={hideContentS} className='seemore' >Less<FaAngleDoubleUp style={{fontSize:'18px'}}/></button>}
                    </div>                
                </div>
                <div>
                    {showS?
                    <p data-aos="fade-down" className='image-para'>Rushikeshwar Sunkey has an unwavering passion for automobiles. With a deep commitment to driving positive change, at The Circular, Rushikeshwar assumes a pivotal role, overseeing a diverse range of responsibilities that encompass the organization's operations, logistics, and volunteer management. His keen interest in textile recycling and upcycling has been instrumental in helping innovative initiatives within the organization. Through his tireless efforts, he has successfully established strong partnerships with educational institutions, engaging students and fostering a culture of sustainability among the youth.<br/><br/>
                            Rushikeshwar's ability to effectively liaise with diverse stakeholders is exemplified in his collaborations with farmers and workforces involved in public infrastructure projects. By facilitating productive dialogues and forging mutually beneficial relationships, he ensures that sustainable practices are integrated into these projects, thereby promoting environmental consciousness and social responsibility.<br/><br/>
                            With a meticulous approach to his work, Rushikeshwar demonstrates good organizational skills, ensuring seamless coordination of various activities and initiatives undertaken by The Circular. His leadership and dedication enable the smooth execution of projects, leading to tangible outcomes in the realm of sustainability. By guiding and empowering others, he plays a pivotal role in catalyzing a broader shift towards environmentally friendly and socially conscious approaches within the industry.<br/><br/>
                            Rushikeshwar Sunkey's unwavering commitment to promoting sustainable practices and his ability to drive meaningful change make him an invaluable asset to The Circular. Through his multifaceted contributions, he is helping to shape a future where sustainability is at the forefront of decision-making and where positive environmental and social impact is paramount.<br/><br/>
                    </p>:null}
                </div>
            </div>
            <div className='profile'>
                <div data-aos="flip-right" data-aos-delay="100" className='lbox-image'>
                    <img className='lperson' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1686047689/Circular%20website/passport_photo1_cm5emw.jpg" alt="saimanishekar"/>
                    <div className='lpara'>
                        <p style={{fontSize: "25px",fontWeight:"bold"}}>Sai Mani Shekar Sundharagiri<br/>
                        <span style={{fontSize:"20px", fontWeight:"100"}}>Head of Digital Transformation</span>
                        </p>
                        {showBtnHD?<button onClick={showContentHD} className='seemore'>More<FaAngleDoubleDown style={{fontSize:'18px'}}/></button>:
                        <button onClick={hideContentHD} className='seemore' >Less<FaAngleDoubleUp style={{fontSize:'18px'}}/></button>}
                    </div>                
                </div>
                <div>
                    {showHD?
                    <p data-aos="fade-down" className='image-para'>Shekar is an exceptional individual who possesses profound knowledge and expertise in the field of Mechanical Engineering, with expertise in additive manufacturing. His dedication and passion for this domain have set him apart as a distinguished professional. During his undergraduate studies, he developed a deep understanding of mechanical principles and honed his technical skills, preparing him for the challenges of the industry. Driven by his thirst for knowledge and his commitment to excellence, Shekar pursued a Post Graduate Diploma in Integrated Product Design and Development, with a focus on Industrial and Product Design, at COEP Technological University. This program served as a catalyst for his growth and allowed him to explore his creativity and innovative thinking in the realm of product design. His time at COEP enabled him to master the intricacies of integrated product development and equipped him with the skills necessary to solve complex engineering problems.<br/><br/>
                            Shekar's quest for practical experience led him to work at Garuda3d, where he gained invaluable hands-on experience in the realm of 3D printing. Furthermore, he associated with John Deere, where he contributed to the System Engineering Department. This opportunity allowed him to delve deeper into system engineering practices and further enhance his technical proficiency. His dedication and diligence during this period earned him recognition for his outstanding contributions to the organization. He has demonstrated exceptional skills in front-end development at Infosys, with a particular focus on React.js. His ability to leverage his technical expertise and problem-solving acumen has been instrumental in delivering successful projects and exceeding client expectations.<br/><br/>
                            In addition to his role at Infosys, Shekar continued the position of Head of Digital Transformation at The Circular. This engagement showcases his leadership and his commitment to driving organizational growth through digital initiatives. He has played a pivotal role in leveraging technology to streamline operations, enhance efficiency, and promote sustainability within The Circular. His relentless pursuit of excellence and passion for innovation set him apart as a remarkable individual in the field of engineering.<br/><br/>
                    </p>:null}
                </div>
            </div>
            <div className='profile'>
                <div data-aos="flip-right" data-aos-delay="100" className='lbox-image'>
                    <img className='lperson' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1686048337/Circular%20website/Adi_Pic_xt0iiz.jpg" alt="adi_pic"/>
                    <div className='lpara'>
                        <p style={{fontSize: "25px",fontWeight:"bold"}}>Adi Seshan Mula<br/>
                        <span style={{fontSize:"20px", fontWeight:"100"}}>Head of Supply Chain Management</span>
                        </p>
                        {showBtnHS?<button onClick={showContentHS} className='seemore'>More<FaAngleDoubleDown style={{fontSize:'18px'}}/></button>:
                        <button onClick={hideContentHS} className='seemore' >Less<FaAngleDoubleUp style={{fontSize:'18px'}}/></button>}
                    </div>                
                </div>
                <div>
                    {showHS?
                    <p data-aos="fade-down" className='image-para'>Adi Seshan Mula is an accomplished professional with a strong background in Supply Chain Management. He holds a Bachelor's degree in Mechanical Engineering and pursued his Masters in Operational Excellence at Hochschule Hof, University of Applied Sciences in Germany. Adi had the privilege of being associated with Bosch Power Tools, where he conducted his thesis on the "Development and Standardization of Supply Validation as part of Sales and Operations Planning (S&OP)" by analyzing the data flow of the entire process. His research focused on creating a conceptual framework for a standardized Supply Validation (SV) process, which played a vital role within the Sales and Operations Planning framework of Bosch Power Tools. Adi's thesis involved an in-depth analysis of the current business status (AS-IS) of various Business Units (BUs) within Bosch Power Tools. Through a comprehensive review of existing literature and best practices in supply chain management, S&OP, and SV, he developed a robust conceptual framework that would guide the SV process and ensure a standardized approach across all BUs.<br/><br/>
                            In addition to his academic accomplishments, Adi gained extensive experience in the field of supply chain management. He excelled in automating and preparing reports, including forecast alignment, which contributed to enhanced decision-making and operational efficiency. He also provided valuable support for strategic projects within the logistics division, where he actively participated in the development of a tool to facilitate campaign planning, monitor inventory health, and optimize availability quantities. Adi's proficiency in change management has been crucial in leading and implementing standardized procedures across different business units. He has demonstrated his ability to navigate organizational transformations and effectively manage change processes to drive operational excellence and improve supply chain performance. At Bosch, Adi has closely collaborated with SAP and ADD*ONE, a software for intelligent supply chain optimization. This experience has allowed him to leverage technology solutions and integrate them seamlessly into supply chain operations, further enhancing efficiency and productivity.<br/><br/>
                            As the Head of Supply Chain Management at The Circular, Adi brings his wealth of knowledge and expertise to optimize supply chain processes, streamline operations, and ensure a sustainable and efficient flow of resources. His strong foundation in mechanical engineering, combined with his advanced education in operational excellence and extensive industry experience, positions him as a valuable leader in the field of supply chain management.<br/><br/>
                    </p>:null}
                </div>
            </div>

        


        </div>
        <div className='section4 p-5'>
            <h2 className='main-heading text-center'>ADVISORS</h2>
            <hr className='h-line' style={{borderColor:"aliceblue", opacity:"1"}}/>
            <div className='profile'>
                <div data-aos="flip-right" data-aos-delay="100" className='lbox-image'>
                    <img className='person' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1686469642/Circular%20website/rukhmini_gq07iu.jpg" alt="rukhmini"/>
                    <div className='lpara'>
                        <p style={{fontSize: "25px", fontWeight:"bold"}}>Dr. J.Rukmini <span style={{fontSize:"13px"}}> M.Sc, Ph.D</span>          
                        </p>
                        <p><span style={{fontSize:"20px", fontWeight:"100"}}>Associate Professor</span><br/>
                        Department of Astronomy, Osmania University, Hyderabad</p>
                        {showBtnR?<button onClick={showContentR} className='more'>More<FaAngleDoubleDown style={{fontSize:'18px'}}/></button>:
                        <button onClick={hideContentR} className='more' >Less<FaAngleDoubleUp style={{fontSize:'18px'}}/></button>}
                    </div>                
                </div>
                <div>
                    {showR?
                    <p data-aos="fade-down" className='image-para'>Dr. J. Rukmini is a distinguished advisor at The Circular, specializing in the field of Binary and Variable stars. Her current research focuses on conducting photometric studies of contact binary systems in clusters, contributing to a deeper understanding of these celestial phenomena.<br/><br/>
                        Passionate about outreach activities and observational astronomy, Dr. Rukmini actively engages in various initiatives to promote scientific awareness and education. She is currently leading a project titled "Asteroseismic studies of stars in binary systems from space and ground-based observations," which is funded by the University Grants Commission (UGC) under the UGC-BSR Start-Up Grant (No.F.30-108/2015-BSR). As a dedicated scholar, Dr. Rukmini is a life member of the Astronomical Society of India (ASI) and the Indian National Science Congress (INSC). She has also served as a member of the Jury panel for the INSPIRE DST programs in 2014 and 2015, contributing her expertise to the selection process. In her role as the Lady Counsellor at the Department of Astronomy since 2013, she provides guidance and support to students and researchers.<br/><br/>
                        Dr. Rukmini actively participates in public lectures and workshop activities related to astronomy. Since May 2016, she has been involved in organizing Summer Camps for high school students at District Residential Social Welfare Schools, funded by UNICEF. These initiatives aim to inspire and educate the younger generation about the wonders of the universe. In her commitment to outreach, Dr. Rukmini plays an integral role in guiding visitors during night-time observations at the Japal-Rangapur Observatory (JRO). This hands-on experience allows individuals to witness astronomical phenomena and fosters a deeper appreciation for the field of astronomy. Beyond her research and outreach endeavors, her expertise extends to serving as a technical expert involved in the ratification process of lecturers in private engineering colleges. Her contributions help ensure the quality and proficiency of the teaching staff in the field of astronomy and related disciplines. She has presented her research work at various national and international conferences, including the ASI meet at ISER, Mohali, the International Conference on Celestial Mechanics & Dynamical Astronomy at MANUU, Hyderabad, the 1st BINA (Belgo-Indian Network for Astronomy and Astrophysics) workshop at ARIES, Nainital, and the National Conference on Star and Planet Formation at IIST, Thiruvananthapuram. Through these platforms, she actively contributes to the exchange of knowledge and advancements in the field of astrophysics.<br/><br/>
                        With her extensive research background, dedication to outreach activities, and participation in professional conferences, Dr. J. Rukmini brings invaluable expertise and guidance as an advisor at The Circular. Her passion for astronomy and commitment to scientific exploration make her a highly respected figure in the field.<br/><br/>
                    </p>:null}
                </div>
            </div>
            <div className='profile'>
                <div data-aos="flip-right" data-aos-delay="100" className='lbox-image'>
                    <img className='person' src="https://res.cloudinary.com/dh4bpcja3/image/upload/v1686469848/Circular%20website/shankarJR_ayf8wv.jpg" alt="shankar"/>
                    <div className='lpara'>
                        <p style={{fontSize: "25px", fontWeight:"bold"}}>Shankar Jamparathi</p>
                        <p>Technical Incharge at Japal-Rangapur Observatory,<br/>
                            Centre for Economic and Social Studies, Rangapur, Telangana
                        </p>
                        {showBtnJR?<button onClick={showContentJR} className='more'>More<FaAngleDoubleDown style={{fontSize:'18px'}}/></button>:
                        <button onClick={hideContentJR} className='more' >Less<FaAngleDoubleUp style={{fontSize:'18px'}}/></button>}
                    </div>                
                </div>
                <div>
                    {showJR?
                    <p data-aos="fade-down" className='image-para'>Adi Seshan Mula is an accomplished professional with a strong background in Supply Chain Management. He holds a Bachelor's degree in Mechanical Engineering and pursued his Masters in Operational Excellence at Hochschule Hof, University of Applied Sciences in Germany. Adi had the privilege of being associated with Bosch Power Tools, where he conducted his thesis on the "Development and Standardization of Supply Validation as part of Sales and Operations Planning (S&OP)" by analyzing the data flow of the entire process. His research focused on creating a conceptual framework for a standardized Supply Validation (SV) process, which played a vital role within the Sales and Operations Planning framework of Bosch Power Tools. Adi's thesis involved an in-depth analysis of the current business status (AS-IS) of various Business Units (BUs) within Bosch Power Tools. Through a comprehensive review of existing literature and best practices in supply chain management, S&OP, and SV, he developed a robust conceptual framework that would guide the SV process and ensure a standardized approach across all BUs.<br/><br/>
                            In addition to his academic accomplishments, Adi gained extensive experience in the field of supply chain management. He excelled in automating and preparing reports, including forecast alignment, which contributed to enhanced decision-making and operational efficiency. He also provided valuable support for strategic projects within the logistics division, where he actively participated in the development of a tool to facilitate campaign planning, monitor inventory health, and optimize availability quantities. Adi's proficiency in change management has been crucial in leading and implementing standardized procedures across different business units. He has demonstrated his ability to navigate organizational transformations and effectively manage change processes to drive operational excellence and improve supply chain performance. At Bosch, Adi has closely collaborated with SAP and ADD*ONE, a software for intelligent supply chain optimization. This experience has allowed him to leverage technology solutions and integrate them seamlessly into supply chain operations, further enhancing efficiency and productivity.<br/><br/>
                            As the Head of Supply Chain Management at The Circular, Adi brings his wealth of knowledge and expertise to optimize supply chain processes, streamline operations, and ensure a sustainable and efficient flow of resources. His strong foundation in mechanical engineering, combined with his advanced education in operational excellence and extensive industry experience, positions him as a valuable leader in the field of supply chain management.<br/><br/>
                    </p>:null}
                </div>
            </div>
        </div>
    </>
  )
}

export default Leadership;
