import React,{useEffect} from 'react'
import "../css/circulareconomy.css"
import Aos from 'aos';

const CircularEconomy = () => {
    useEffect(()=>{
        Aos.init({duration:1000,easing:'ease-in'});
      },[]);
  return (
    <>
        <div className='cover-imageC p-5'>
            <h1 className='cover-text' style={{color:"aliceblue", opacity:"0.8",textShadow:"2px 2px 20px black"}}>CIRCULAR ECONOMY</h1>
        </div>
        <div className='section2'>
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
                <img data-aos="flip-right" data-aos-delay="100" className='cimpic' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849391/Circular%20website/rishi_1_mtervn.jpg"} alt="rishi_1"/>
                <img data-aos="flip-down" data-aos-delay="100" className='cimpic' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849391/Circular%20website/rishi_2_vcw08t.jpg"} alt="rishi_2"/>
                <img data-aos="flip-left" data-aos-delay="100" className='cimpic' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849393/Circular%20website/rishi_6_mw4qee.jpg"} alt="rishi_6"/>
            </div>
            <div className="image-container mb-4">
                <img data-aos="flip-right" data-aos-delay="200" className='cimpic' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849392/Circular%20website/rishi_4_mq51eu.jpg"} alt="rishi_4"/>
                <img data-aos="flip-up" data-aos-delay="200" className='cimpic' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849394/Circular%20website/rishi_5_enw3b8.jpg"} alt="rishi_5"/>
                <img data-aos="flip-left" data-aos-delay="200" className='cimpic' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849393/Circular%20website/rishi_3_m94gkh.jpg"} alt="rishi_3"/>
            </div>
            <div className='image-container mb-4'>
                <img data-aos="flip-right" data-aos-delay="200" className='medpich mb-3' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1686021928/Circular%20website/cirpaper_fao2ra.jpg"} alt="paperbag"/>
                <img data-aos="flip-right" data-aos-delay="200" className='medpich paper-bag-pic mb-2' style={{width:"300px"}} src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1686022328/Circular%20website/cirpaperbag_nugdjm.jpg"} alt="paperbag"/>
            </div>
            <div className='paragh text-center'>
                <video className='cir-video' width="700px" height="500px" autoPlay muted controls>
                    <source src="https://res.cloudinary.com/dh4bpcja3/video/upload/v1686021947/Circular%20website/cirvideo_monbmb.mp4" type='video/mp4'/>
                </video> 
            </div>
        </div>
        <div className='section3'>    
            <p className='para'>
            We are committed to fostering partnerships with businesses, organizations, and individuals who share our vision. Together, we can make a significant impact and reshape the way we think about waste. By supporting our initiatives, you become a catalyst for change, driving the transformation of textile waste into valuable resources and inspiring others to follow suit.
            </p>
            <div className="image-container mb-4">
                <img data-aos="fade-down" data-aos-delay="100" className='cimpic' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849362/Circular%20website/cir1_x9yh23.jpg"} alt="cir1"/>
                <img data-aos="fade-down" data-aos-delay="100" className='cimpic' src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849363/Circular%20website/cir2_l5jd3j.jpg"} alt="cir2"/>
            </div>
            <div className='d-flex justify-content-center'>
                <img data-aos="fade-down" data-aos-delay="100" className='cir-lastpic' style={{width:"50%", borderRadius:"5%"}} src={"https://res.cloudinary.com/dh4bpcja3/image/upload/v1685849368/Circular%20website/cir3_rtlnnm.jpg"} alt="cir3"/>
            </div>
        </div>
    </>
  )
}

export default CircularEconomy;