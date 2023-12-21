import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - MovieWorld`;
    }, [title])
};

export default useTitle;