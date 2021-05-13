import {Suspense, lazy} from 'react';
import './Journalism.css';
const Articles = lazy(() => import('../../components/Articles'));

function Journalism() {
    return (
        <>
        <div className="journal">
        <div className="JournalismAbout container-fluid">
            <h1 className="journalismHeader">
                Journalism Articles
            </h1>
            <p className="journalismParagraph">
                The cream of the crop assortment of articles I wrote at the Columbia Chronicle. Among them are arts and culture, metro, campus news , opinion pieces and  reviews  during my time as  Staff Reporter and Opinions Editor.
            </p>
        </div>
        <Suspense fallback={<p>Loading Articles</p>}>
            <Articles />
        </Suspense>
        </div>
        </>
    );
}

export default Journalism;