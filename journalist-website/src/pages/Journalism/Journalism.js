import {Suspense, lazy} from 'react';
import './Journalism.css';
const Articles = lazy(() => import('../../components/Articles'));

function Journalism() {
    return (
        <>
        <div className="JournalismAbout container-fluid">
            <h1>
                Journalism Articles
            </h1>
            <p>
                The collection of articles below are a feature of my work from my time at the Columbia Chronicle. Enter here some personal statement about the meaning of these articles...                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel eros donec ac odio tempor orci dapibus ultrices. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Enim neque volutpat ac tincidunt vitae semper quis lectus. Commodo viverra maecenas accumsan lacus vel. Non enim praesent elementum facilisis leo vel fringilla. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra.

            </p>
        </div>
        <Suspense fallback={<p>Loading Articles</p>}>
            <Articles />
        </Suspense>
        </>
    );
}

export default Journalism;