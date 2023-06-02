import React,{useEffect} from 'react'
import "../css/circulareconomy.css"
import rishi_1 from '../images/rishi_1.jpg';
import rishi_2 from '../images/rishi_2.jpg';
import rishi_3 from '../images/rishi_3.jpg';
import rishi_4 from '../images/rishi_4.jpg';
import rishi_5 from '../images/rishi_5.jpg';
import rishi_6 from '../images/rishi_6.jpg';
import cir1 from '../images/cir1.jpeg';
import cir2 from '../images/cir2.jpeg';
import cir3 from '../images/cir3.jpg';
import Aos from 'aos';

const CircularEconomy = () => {
    useEffect(()=>{
        Aos.init({duration:1000,easing:'ease-in'});
      },[]);
  return (
    <>
        <div className='cover-imageC p-5'>
            <h1 className='cover-text' style={{color:"aliceblue", opacity:"0.9"}}>CIRCULAR ECONOMY</h1>
        </div>
        <div className='section2 p-5'>
            <p className='paragh'>
                We are passionate about creating a sustainable future by reimagining waste. Our focus extends to the often-neglected textile waste and other forms of discarded materials. We believe that every piece of waste holds untapped potential, waiting to be transformed into something valuable and meaningful.
            </p>
            <p className='paragh'>
                One of our flagship initiatives is centered around recycling and upcycling textile waste. We have designed a groundbreaking model that recycles all the staggering amount of fabric waste generated each year, amounting to a staggering 100 tons in each city. Instead of letting this waste burden our landfills and pollute our environment, we saw an opportunity to turn it into a valuable resource.
            </p>
            <p className='paragh'>
                Our dedicated team of experts developed processes to upcycle textile waste. Through advanced sorting, cleaning, and transformation techniques, we breathe new life into discarded fabrics, giving them a second chance to shine. By repurposing these materials, we not only reduce waste but also contribute to a more sustainable fashion and textile industry.
            </p>
            <p className='paragh'>
                But our efforts go beyond just recycling. We embrace the concept of upcycling, which involves transforming waste into high-quality products with enhanced value. Through our upcycling endeavors, we unleash the creativity and craftsmanship of talented artisans who breathe new life into discarded fabrics. The result? Unique, one-of-a-kind pieces that showcase the beauty and potential of upcycled materials.
            </p>
            <p className='paragh'>
                By diverting textile waste from landfills and incorporating it into our circular economy, we promote responsible consumption, reduce the strain on natural resources, and contribute to a more sustainable future. We firmly believe that waste is not an endpoint but a new beginning, where creativity and innovation can flourish.
            </p>
            <div className="image-container mb-4">
                <img data-aos="flip-right" data-aos-delay="100" className='cimpic' src={rishi_1} alt="rishi_1"/>
                <img data-aos="flip-down" data-aos-delay="100" className='cimpic' src={rishi_2} alt="rishi_2"/>
                <img data-aos="flip-left" data-aos-delay="100" className='cimpic' src={rishi_6} alt="rishi_6"/>
            </div>
            <div className="image-container">
                <img data-aos="flip-right" data-aos-delay="100" className='cimpic' src={rishi_4} alt="rishi_4"/>
                <img data-aos="flip-up" data-aos-delay="100" className='cimpic' src={rishi_5} alt="rishi_5"/>
                <img data-aos="flip-left" data-aos-delay="100" className='cimpic' src={rishi_3} alt="rishi_3"/>
            </div>
        </div>
        <div className='p-5'>    
            <p className='para'>
            We are committed to fostering partnerships with businesses, organizations, and individuals who share our vision. Together, we can make a significant impact and reshape the way we think about waste. By supporting our initiatives, you become a catalyst for change, driving the transformation of textile waste into valuable resources and inspiring others to follow suit.
            </p>
            <div className="image-container mb-4">
                <img data-aos="fade-left" data-aos-delay="100" className='cimpic' src={cir1} alt="cir1"/>
                <img data-aos="fade-right" data-aos-delay="100" className='cimpic' src={cir2} alt="cir2"/>
            </div>
            <div className='d-flex justify-content-center'>
                <img data-aos="fade-down" data-aos-delay="100" style={{width:"50%", borderRadius:"5%"}} src={cir3} alt="cir3"/>
            </div>
        </div>
    </>
  )
}

export default CircularEconomy;