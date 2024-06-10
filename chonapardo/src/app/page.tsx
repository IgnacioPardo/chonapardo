import { SocialIcon } from "./SocialIcon";
import { Stripe } from "./Stripe";

export default function Home() {

  return (
    <main>
      <a className="skip-link" href="#maincontent"></a>
      <div className="header">
        <div className="" id="header">
          <img
            className="center_logo chona_logo"
            alt="Chona Pardo"
            src="/images/chona.svg"
          />
          <img
            className="center_logo parrot"
            alt="Chona Pardo"
            src="/images/parrot.svg"
          />
        </div>
      </div>
      <div id="maincontent" className="projects">
        <Stripe className="img_roadtrip" id="roadtrip" alt="RoadTrip" src="roadtrip" url="https://github.com/IgnacioPardo/RoadTrip" />
        <Stripe className="img_mapi" id="mapi" alt="mAPI Live" src="mAPI" url="https://www.mapi.live/map" />
        <Stripe className="img_playlists" id="playlists" alt="" src="" url="https://open.spotify.com/user/11145402699?si=d1127aefaf844a23" />
        <Stripe className="lemon" id="lemon" alt="The Lemon Drop" src="lemon" url="https://www.youtube.com/channel/UCBV0sh0yA9JFWmiGrX0RIDg" />
        <Stripe className="img_firegarden" id="firegarden" alt="Fire Garden" src="firegarden" url="https://www.youtube.com/channel/UCLghkYR9CIfYpURP8NkHhow" />
        <Stripe className="img_perry" id="perry" alt="" src="" url="https://perry.ticlab.repl.co" />
        <Stripe className="ttxp" id="ttxp" alt="The TIC Experience Podcast" src="ttxp" url="https://anchor.fm/the-tic-experience-podcast" />
        <Stripe className="img_laq" id="laq" alt="La Quemisterie" src="laq" url="https://laquemisterie.com" />
        <Stripe className="img_vale" id="vale" alt="Valeria Fioroni" src="vale" url="https://valeriafioroni.com" />
        <Stripe className="img_watchparty" id="watchparty" alt="" src="" url="https://watchparty.ignaciopardo.repl.co" />
      </div>
      <footer className="footer">
        <br />
        <noscript> </noscript>
        <div className="flex-center">
          <SocialIcon className="fa-linkedin" url="https://www.linkedin.com/in/pardo-ignacio/" />
          <SocialIcon className="fa-github" url="https://github.com/IgnacioPardo" />
          <SocialIcon className="fa-twitter" url="https://www.twitter.com/chona_pardo" />
          <SocialIcon className="fa-instagram" url="https://www.instagram.com/chona_pardo" />
          <SocialIcon className="fa-spotify" url="https://open.spotify.com/user/11145402699" />
        </div>
        <br />
      </footer>
    </main>
  );
}
