
import { profile } from 'console';
import Carousel from 'nuka-carousel/lib/carousel';
import IndeCard from '../cards/IndeCard';


export default function CarouselElement({profiles}) {

  
    return (
        <Carousel
            renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
                <button className='w-[100px] h-[300px]' onClick={previousSlide} disabled={previousDisabled}>
                
                </button>
            )}
            renderCenterRightControls={({ nextDisabled, nextSlide }) => (
                <button
                    className='w-[100px] h-[300px]'
                    onClick={nextSlide} disabled={nextDisabled}>
                </button>
            )}
            animation="zoom"
            autoplay={true}
            autoplayInterval={2}
            >
            {
                profiles.map((profile, index) => (
                    <IndeCard profile={profile} key={index} />
                ))
            }
            </Carousel>
                )
}