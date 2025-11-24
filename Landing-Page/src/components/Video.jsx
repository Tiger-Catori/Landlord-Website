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
      src="https://player.vimeo.com/video/887302572?byline=0&portrait=0&title=0&autoplay=0"
      title="Feature Video"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      data-aos="flip-up"
      data-aos-duration="1500"
      data-aos-delay="500"
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
