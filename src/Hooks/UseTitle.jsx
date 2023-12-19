import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - JUBOF`;
    }, [title])
};

export default useTitle;