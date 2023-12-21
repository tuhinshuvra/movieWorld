import ActorOne from '../../assets/actors/actor1.jpg';
import ActorTwo from '../../assets/actors/actor2.jpg';
import ActorThree from '../../assets/actors/actor3.jpg';
import './TopCastActors.css';

const TopCastActorsSingle = () => {
    return (
        <div className='castActorSingleArea'>
            <div className=' d-flex'>
                <div className=' col-md-4'>
                    <img className='topCastActorImg' src={ActorTwo} alt="" />
                </div>
                <div className=' col-md-8 text-white ms-1'>
                    <p className=' fs-6 fw-bold my-0 '>Vijay Thalapathy</p>
                    <p className=' my-0 small text-secondary'>The Drama</p>
                    <p className=' my-0 small text-secondary'>10 Episods 2023</p>
                </div>
            </div>
        </div>
    );
};

export default TopCastActorsSingle;