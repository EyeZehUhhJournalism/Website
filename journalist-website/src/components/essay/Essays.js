import './Essay.css'

import { essayList } from '../../assets/essay/essayList';

const EssayList = () => {
  return (
    <>
      <div className="container-fluid EssayTop">
        <h1 className="text">
          Video Essays
        </h1>
        <p>
          Writing articles is good, but video essays can be better. Utilizing an amalgamation of skills I learned while at studying at Columbia, I wrote, produced and performed voice over for video essays on topics I hyper-fixate over.        </p>
      </div>

        <div className="videos">

          {essayList.map(essay =>
            <iframe class="video" src={essay.link} padding="20" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

          )}
        </div>

    </>
  );
}

export default EssayList;