import { useSelector } from 'react-redux';

import TestView from './TestView';

function Test() {
    const { token, isAuthenticated } = useSelector(({ auth }) => auth);

    if (!isAuthenticated || !token) {
        window.location.replace('/login');
    }

    return <TestView token={token} />;
}

export default Test;
