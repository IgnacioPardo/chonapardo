import Image from "next/image";

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
        <div className="stripe parallax img_roadtrip" id="roadtrip">
          <img
            className="center_logo roadtrip_logo"
            alt="RoadTrip"
            src="/images/roadtrip.svg"
            onClick={() => window.open('https://github.com/IgnacioPardo/RoadTrip')}
          />
        </div>
        <div className="stripe parallax img_mapi" id="mapi">
          <img
            className="center_logo mapi_logo"
            alt="mAPI Live"
            src="/images/mAPI.svg"
            onClick={() => window.open('https://www.mapi.live/map')}
          />
        </div>
        <div
          className="stripe parallax img_playlists"
          id="playlists"
          onClick={() => window.open('https://open.spotify.com/user/11145402699?si=d1127aefaf844a23')}
        ></div>
        <div className="stripe lemon" id="lemon">
          <img
            className="center_logo lemon_logo"
            alt="The Lemon Drop"
            src="/images/lemon.svg"
            onClick={() => window.open('https://www.youtube.com/channel/UCBV0sh0yA9JFWmiGrX0RIDg')}
          />
        </div>
        <div className="stripe parallax img_firegarden" id="firegarden">
          <img
            className="center_logo firegarden_logo"
            alt="Fire Garden"
            src="/images/firegarden.svg"
            onClick={() => window.open('https://www.youtube.com/channel/UCLghkYR9CIfYpURP8NkHhow')}
          />
        </div>
        <div
          className="stripe parallax img_perry"
          id="perry"
          onClick={() => window.open('https://perry.ticlab.repl.co')}
        ></div>
        <div className="stripe ttxp" 
        id="ttxp">
          <img
            className="center_logo ttxp_logo"
            alt="The TIC Experience Podcast"
            src="/images/ttxp.svg"
            onClick={() => window.open('https://anchor.fm/the-tic-experience-podcast')}
          />
        </div>
        <div className="stripe parallax img_laq" id="laq">
          <img
            className="center_logo laq_logo"
            alt="La Quemisterie"
            src="/images/laq.svg"
            onClick={() => window.open('https://laquemisterie.com')}
          />
        </div>
        <div className="stripe parallax img_vale" id="vale">
          <img
            className="center_logo vale_logo"
            alt="Valeria Fioroni"
            src="/images/vale.svg"
            onClick={() => window.open('https://valeriafioroni.com')}
          />
        </div>
        <div
          className="stripe parallax img_watchparty"
          id="watchparty"
          onClick={() => window.open('https://watchparty.ignaciopardo.repl.co')}
        ></div>
        <div className="stripe parallax img_background" id="guitar">
          <img
            className="center_logo chona_logo"
            alt="Chona Pardo"
            src="/images/chona.svg"
          />
        </div>
      </div>
      <footer className="footer">
        <br />
        <noscript> </noscript>
        <div className="flex-center">
          <center><div></div></center>
          <i
            onClick={() => window.open('https://www.linkedin.com/in/pardo-ignacio/')}
            className="fa fa-linkedin fa-3x icon-3d"
          ></i>
          <center><div className="icon_text"></div></center>
          <center><div></div></center>
          <i
            onClick={() => window.open('https://github.com/IgnacioPardo')}
            className="fa fa-github fa-3x icon-3d"
          ></i>
          <center><div className="icon_text"></div></center>
          <center><div></div></center>
          <i
            onClick={() => window.open('https://www.twitter.com/chona_pardo')}
            className="fa fa-twitter fa-3x icon-3d"
          ></i>
          <center><div className="icon_text"></div></center>
          <center><div></div></center>
          <i
            onClick={() => window.open('https://www.instagram.com/chona_pardo')}
            className="fa fa-instagram fa-3x icon-3d"
          ></i>
          <center><div className="icon_text"></div></center>
          <center><div></div></center>
          <i
            onClick={() => window.open('https://open.spotify.com/user/11145402699')}
            className="fa fa-spotify fa-3x icon-3d"
          ></i>
          <center><div className="icon_text"></div></center>
        </div>
        <br />
      </footer>
    </main>
  );
}
