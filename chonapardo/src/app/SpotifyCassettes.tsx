export const SpotifyCassettes = () => {
  return <div className="stripe parallax" id="cassettes">
    <iframe
      className="iframeCassttes"
      id="cassettes_iframe"
      src="https://spotify-cassettes.vercel.app/?display=compact"
      title="mAPI Live"
      allowFullScreen />
  </div>;
};
