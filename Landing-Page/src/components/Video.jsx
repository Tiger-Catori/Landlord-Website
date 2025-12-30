import "../css/Video.css";
import { useState } from "react";

const VideoComponent = () => {
  return <VideoSection />;
};
export default VideoComponent;

const VideoSection = () => {
  return (
    <section className="section section__video">
      <div className="video__container">
        <VideoText />
        <Video />
      </div>
    </section>
  );
};

const Video = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="video-wrapper" onClick={() => setShowVideo(true)}>
      {showVideo ? (
        <iframe
          className="iframe"
          src="/videos/feature-video.mp4"
          title="Feature Video"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          data-aos="flip-up"
          data-aos-duration="1500"
          data-aos-delay="500"
        ></iframe>
      ) : (
        <img
          className="video-thumb"
          src="/images/logos/Thumbnail.png"
          alt="Play video"
        />
      )}
    </div>
  );
};

// const Video = () => {
//   return (
//     <iframe
//       className="iframe"
//       src="https://www.youtube.com/embed/xeXV1KoX034?autoplay=0&rel=0&modestbranding=1&loop=1&playlist=xeXV1KoX034"
//       title="Feature Video"
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
//       data-aos="flip-up"
//       data-aos-duration="1500"
//       data-aos-delay="500"
//     ></iframe>
//   );
// };

// const Video = () => {
//   return (
//     <iframe
//       className="iframe"
//       src="https://player.vimeo.com/video/887302572?byline=0&portrait=0&title=0&autoplay=0"
//       title="Feature Video"
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
//       data-aos="flip-up"
//       data-aos-duration="1500"
//       data-aos-delay="500"
//     ></iframe>
//   );
// };

const VideoText = () => {
  return (
    <div className="video__text">
      <h2
        className="video__text__title"
        id="video-title"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        Feature Video
      </h2>
      {/* <p className="video__text__description" id="video__p">

      </p>*/}
    </div>
  );
};
