import {Suspense, lazy} from 'react';

function Voiceover() {
    return (
        <Suspense fallback={<p>Loading Recordings</p>}>
            <iframe title="Guardsman"width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1044125017&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            
            
            </Suspense>
    );
}

export default Voiceover;