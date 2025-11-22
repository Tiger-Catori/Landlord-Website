import "../css/Video.css";

const VideoComponent = () => {
  return <VideoSection />;
};
export default VideoComponent;

const VideoSection = () => {
  return (
    <section class="section section__video">
      <div class="video__container">
        <VideoText />
        <Video />
      </div>
    </section>
  );
};

const Video = () => {
  return (
    <iframe
      class="iframe"
      src="https://www.youtube.com/embed/K4TOrB7at0Y?si=xLLsefKE2qG7L_mn"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      data-aos="flip-up"
      data-aos-duration="1500"
      data-aos-delay="1000"
    ></iframe>
  );
};

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
