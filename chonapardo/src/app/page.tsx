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
        <Stripe className="img_autonoma" id="autonoma" alt="Autonoma AI" src="autonoma" url="https://github.com/Autonoma-AI/autonoma" />
        <Stripe className="img_player2vec" id="player2vec" alt="Player2Vec" src="player2vec" url="https://github.com/IgnacioPardo/Player2Vec" />
        <Stripe className="img_e36_obd" id="e36_obd" alt="E36 OBD" src="e36_obd" url="https://github.com/IgnacioPardo/e36-obd" />
        <Stripe className="img_e36_restoration" id="e36_restoration" alt="E36 Restoration" src="" url="" />
        <Stripe className="img_alzheimer" id="alzheimer" alt="Alzheimer PET/MRI research" src="" url="https://github.com/LIA-DiTella/PET_2025" />
        <Stripe className="img_webxr" id="webxr" alt="WebXR" src="webxr" url="https://ignaciopardo.github.io/webxr_demos/" />
        <Stripe className="img_shellcar" id="shellcar" alt="ShellCar" src="shellcar" url="https://github.com/IgnacioPardo/shell_car" />
        <Stripe className="img_roadtrip" id="roadtrip" alt="RoadTrip" src="roadtrip" url="https://github.com/IgnacioPardo/RoadTrip" />
        {/* <Stripe className="img_mapi" id="mapi" alt="mAPI Live" src="mAPI" url="https://www.mapi.live/map" /> */}
        <SpotifyCassettes />
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
