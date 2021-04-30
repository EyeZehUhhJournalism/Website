import React from 'react';
import './Journalism.css';
const Articles = React.lazy(() => import('../../components/Articles'));

function Journalism() {
    return (
        <React.Suspense fallback={<p>Loading Articles</p>}>
            <Articles />
        </React.Suspense>
    );
}

export default Journalism;