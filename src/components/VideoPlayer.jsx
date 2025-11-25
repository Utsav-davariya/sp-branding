import React, { useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const handleClick = () => {
    const video = videoRef.current;
    const body = document.body;
    if (video.paused) {
      video.classList.add('videofullscreen');
      body.classList.add('fullscreen');
      video.play();
    } else {
      video.pause();
      body.classList.remove('fullscreen');
      video.classList.remove('videofullscreen');
    }
  };

  return (
    <>
      <article>
        <section className="sec-wrap">
          <div className="sec-wrap__inner no-padding">
            <div className="player-video-wrap player">
              <div className="play-btn hidden"></div>
              <video
                ref={videoRef}
                className="stoped"
                muted
                playsInline
                loop
                poster="https://ik.imagekit.io/realdo/saibranding/video.jpg"
                onClick={handleClick}
              >
                <source src="https://ik.imagekit.io/realdo/saibranding/Sai_Branding_Dont_Blink.mp4" type="video/mp4" />
                <span className="p"></span>
              </video>
              <button className="video-nav mute-video" title="Turn on/off">
                <span className="icon-social_sound-mute"></span>
                <span className="p">
                  <div style={{ position: 'relative', display: 'inline-block' }}>C</div>
                  <div style={{ position: 'relative', display: 'inline-block' }}>L</div>
                  <div style={{ position: 'relative', display: 'inline-block' }}>I</div>
                  <div style={{ position: 'relative', display: 'inline-block' }}>C</div>
                  <div style={{ position: 'relative', display: 'inline-block' }}>K</div>
                </span>
              </button>
            </div>
          </div>
        </section>
      </article>
      <div className="spacer-xlarge"></div>
    </>
  );
};

export default VideoPlayer;