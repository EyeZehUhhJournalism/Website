import {Suspense, lazy} from 'react';
import './Podcasts.css';
const PodcastList = lazy(() => import('../../components/podcasts/PodcastList'));
const EssayList = lazy(() => import('../../components/essay/Essays'));


function Podcasts() {
    return (
        <Suspense fallback={<p>Loading Podcasts</p>}>
            <div className="podcastPage">
            <EssayList />
            <PodcastList />
            </div>
        </Suspense>
    );
}

export default Podcasts;