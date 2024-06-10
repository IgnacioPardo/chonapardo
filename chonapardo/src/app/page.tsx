import { Header } from "./Header";
import { Footer } from "./Footer";
import { Stripe } from "./Stripe";
import { SpotifyCassettes } from "./SpotifyCassettes";

export default function Home() {

  return (
    <main>
      <a className="skip-link" href="#maincontent"/>
      <Header />
      <div id="maincontent" className="projects">
        <Stripe className="img_roadtrip" id="roadtrip" alt="RoadTrip" src="roadtrip" url="https://github.com/IgnacioPardo/RoadTrip" />
        {/* <Stripe className="img_mapi" id="mapi" alt="mAPI Live" src="mAPI" url="https://www.mapi.live/map" /> */}
        <SpotifyCassettes />
        <Stripe className="img_playlists" id="playlists" alt="" src="" url="https://open.spotify.com/user/11145402699?si=d1127aefaf844a23" />
        <Stripe className="lemon" id="lemon" alt="The Lemon Drop" src="lemon" url="https://www.youtube.com/channel/UCBV0sh0yA9JFWmiGrX0RIDg" />
        <Stripe className="img_firegarden" id="firegarden" alt="Fire Garden" src="firegarden" url="https://www.youtube.com/channel/UCLghkYR9CIfYpURP8NkHhow" />
        <Stripe className="img_perry" id="perry" alt="" src="" url="https://perry.ticlab.repl.co" />
        <Stripe className="ttxp" id="ttxp" alt="The TIC Experience Podcast" src="ttxp" url="https://anchor.fm/the-tic-experience-podcast" />
        <Stripe className="img_laq" id="laq" alt="La Quemisterie" src="laq" url="https://laquemisterie.com" />
        <Stripe className="img_vale" id="vale" alt="Valeria Fioroni" src="vale" url="https://valeriafioroni.com" />
        <Stripe className="img_watchparty" id="watchparty" alt="" src="" url="https://watchparty.ignaciopardo.repl.co" />
      </div>
      <Footer />
    </main>
  );
}
