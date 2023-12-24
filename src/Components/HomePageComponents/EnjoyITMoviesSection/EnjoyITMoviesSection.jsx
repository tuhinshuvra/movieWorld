import ITMoviesLeftText from './ITMoviesLeftText';
import ITMoviesRight from './ITMoviesRight';
import './EnjoyITMoviesSection.css';

const EnjoyITMoviesSection = () => {
    return (
        <div className='itMovieContainer'>
            <div className='itMoviesBg'>
                <div className='container'>
                    <div className='col-lg-10 mx-auto'>
                        <div className='heroBgOverlay' />
                        <div className=' d-md-flex heroContent'>
                            <div className='col-md-6 '>
                                <ITMoviesLeftText></ITMoviesLeftText>
                            </div>
                            <div className='col-md-6 itMoviesRight mt-5 mt-md-0'>
                                <ITMoviesRight></ITMoviesRight>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnjoyITMoviesSection;
