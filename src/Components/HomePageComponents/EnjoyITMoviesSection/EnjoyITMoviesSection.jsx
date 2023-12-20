import ITMoviesLeft from './ITMoviesLeft';
import ITMoviesRight from './ITMoviesRight';
import './EnjoyITMoviesSection.css';

const EnjoyITMoviesSection = () => {
    return (
        <div>
            <div className=' d-md-flex'>
                <div className=' col-md-6'>
                    <ITMoviesLeft></ITMoviesLeft>
                </div>
                <div className=' col-md-6'>
                    <ITMoviesRight></ITMoviesRight>
                </div>
            </div>
        </div>
    );
};

export default EnjoyITMoviesSection;