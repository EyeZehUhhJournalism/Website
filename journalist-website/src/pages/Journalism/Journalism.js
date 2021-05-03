import {Suspense, lazy} from 'react';
import './Journalism.css';
const Articles = lazy(() => import('../../components/Articles'));

function Journalism() {
    return (
        <Suspense fallback={<p>Loading Articles</p>}>
            <Articles />
        </Suspense>
    );
}

export default Journalism;