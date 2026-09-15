import { Header } from "./Header";
import { Footer } from "./Footer";
import { Stripe } from "./Stripe";
import { ModelStripe } from "./ModelStripe";
import { ObdCluster } from "./ObdCluster";
import { Parallax } from "./Parallax";
import { SpotifyCassettes } from "./SpotifyCassettes";

export default function Home() {

  return (
    <main>
      <a className="skip-link" href="#maincontent"/>
      <Header />
      <div id="maincontent" className="projects">
        <Stripe className="img_autonoma" id="autonoma" alt="Autonoma AI" src="autonoma" url="https://github.com/Autonoma-AI/autonoma" />
        <Stripe className="img_player2vec" id="player2vec" alt="Player2Vec" src="player2vec" url="https://github.com/IgnacioPardo/Player2Vec" />
        <Stripe className="img_roadtrip" id="roadtrip" alt="RoadTrip" src="roadtrip" url="https://github.com/IgnacioPardo/RoadTrip" />
        {/* <Stripe className="img_mapi" id="mapi" alt="mAPI Live" src="mAPI" url="https://www.mapi.live/map" /> */}
        <SpotifyCassettes />
        <Stripe className="img_alzheimer" id="alzheimer" alt="Alzheimer" src="alzheimer" url="https://github.com/LIA-DiTella/PET_2025" />
        <Stripe className="img_shellcar" id="shellcar" alt="ShellCar" src="shellcar" url="https://github.com/IgnacioPardo/shell_car" />
        <a className="stripe obd-stripe clickable parallax-host" id="e36_obd" href="https://github.com/IgnacioPardo/e36-obd" target="_blank" rel="noreferrer" aria-label="E36 OBD live gauges">
          <Parallax strength={18}>
            <ObdCluster />
          </Parallax>
        </a>
        <ModelStripe className="car-stripe car-webxr" id="webxr" src="/models/e36.glb" poster="/images/e36_poster.jpg" posterSmall="/images/e36_poster-m.jpg" alt="WebXR car viewer — E36 3D showcase" logo="webxr" url="https://ignaciopardo.github.io/webxr_demos/" exposure={1.1} fieldOfView="30deg" />
        <Stripe className="img_playlists" id="playlists" alt="" src="" url="https://open.spotify.com/user/11145402699?si=d1127aefaf844a23" />
        <Stripe className="lemon" id="lemon" alt="The Lemon Drop" src="lemon" url="https://www.youtube.com/channel/UCBV0sh0yA9JFWmiGrX0RIDg" />
        <Stripe className="img_firegarden" id="firegarden" alt="Fire Garden" src="firegarden" url="https://www.youtube.com/channel/UCLghkYR9CIfYpURP8NkHhow" />
        <Stripe className="img_perry" id="perry" alt="Perry" src="" url="https://github.com/TIC-ORT/Perry" />
        <Stripe className="ttxp" id="ttxp" alt="The TIC Experience Podcast" src="ttxp" url="https://anchor.fm/the-tic-experience-podcast" />
        <Stripe className="img_laq" id="laq" alt="La Quemisterie" src="laq" url="https://laquemisterie.com" />
        <Stripe className="img_vale" id="vale" alt="Valeria Fioroni" src="vale" url="https://valeriafioroni.com" />
        <Stripe className="img_watchparty" id="watchparty" alt="WatchParty" src="" url="https://github.com/IgnacioPardo/WatchParty" />
      </div>
      <Footer />
    </main>
  );
}
