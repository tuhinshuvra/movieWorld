import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId }) => {
    const opts = {
        height: '370',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };

    return <YouTube videoId={videoId} opts={opts} />;
};

export default VideoPlayer;
