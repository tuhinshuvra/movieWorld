import './MovieDetailsPage.css';
import MovieDetails from '../../assets/movieImages/Movie Details.jpg'

const MovieDetailsPage = () => {
    return (
        <div>
            <h2>This is movie Details  page</h2>
            <img src={MovieDetails} className=' img-fluid' alt="" />
        </div>
    );
};

export default MovieDetailsPage; 