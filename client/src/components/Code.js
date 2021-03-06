// -------- Code portfolio component -------- /
import React from "react";

class Code extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: false,
    };
  }

  handleModal = (event) => {
    this.setState({
      video: event.target.id,
    });
  };

  handleClose = () => {
    this.setState({
      video: false,
    });
  };

  render() {
    return (
      <div id="main-div">
        {this.state.video && (
          <VideoModal modal={this.state.video} handleClose={this.handleClose} />
        )}
        <div id="div-scroll" className={this.props.animationClass}>
          <div id="code-projects">
            {/*Peace of Mind*/}
            <div className="project">
              <div className="code-image-wrapper">
                <img
                  className="code-image"
                  src="/images/peace-of-mind.png"
                  alt="Peace of Mind Logo"
                />
              </div>
              <div className="code-text-wrapper">
                <div className="code-text-scroll">
                  <div className="inner-code-text">
                    <h3 className="code-title">Peace of Mind Playschool</h3>
                    <p className="code-text">
                      Informational website for Peace of Mind Playschool in
                      Vermont
                    </p>
                    <ul>
                      <li className="code-text">
                        Handled all aspects of site design, including logo
                        design
                      </li>
                      <li className="code-text">
                        Built with a React on the front-end with an Express
                        server on the back-end
                      </li>
                      <li className="code-text">
                        Utilizes SendGrid to email directly from contact form
                      </li>
                      <li className="code-text">
                        Fully mobile responsive
                      </li>
                      <li className="code-text">
                        Technologies: Express, React, Sendgrid
                      </li>
                    </ul>
                    <h4 className="code-title">LINKS:</h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.peaceofmindplay.com"
                    >
                      <h3 className="text-link code-text">PEACEOFMINDPLAY.COM</h3>
                    </a>
                  </div>
                </div>
                <div className="code-text-fade"></div>
              </div>
            </div>
            {/*Capstone Content*/}
            <div className="proj-reverse project">
              <div className="left-wrapper code-text-wrapper">
                <div className="code-text-scroll">
                  <div className="inner-code-text">
                    <h3 className="code-title">CERES GREENS CAPSTONE</h3>
                    <p className="code-text">
                      An information over time application built as my capstone
                      project for BCA
                    </p>
                    <ul>
                      <li className="code-text">
                        Handles data from multiple senors on the farm and
                        displays sensors that might be in critical ranges
                      </li>
                      <li className="code-text">
                        Notifies farm employees via text message when sensors
                        are out of range
                      </li>
                      <li className="code-text">
                        Allows querying of data in any time range
                      </li>
                      <li className="code-text">
                        Time intervals of queries are determined by length of
                        the time range
                      </li>
                      <li className="code-text">
                        Technologies: Express, Influx DB Cloud 2.0, Mongo DB w/
                        Mongoose, Twilio, React, React SVG Gauge, React
                        Day-Picker, Date-FNS, Material UI
                      </li>
                    </ul>
                    <h3
                      className="text-link code-text"
                      id="capstone"
                      onClick={this.handleModal}
                    >
                      VIDEO TOUR
                    </h3>
                    <br />
                    <h4 className="code-title">LINKS:</h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/JoshLDowns/ceres-greens-capstone"
                    >
                      <h3 className="text-link code-text">GITHUB</h3>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://ceres-greens-application.herokuapp.com/"
                    >
                      <h3 className="text-link code-text">HEROKU</h3>
                    </a>
                  </div>
                </div>
                <div className="code-text-fade"></div>
              </div>
              <div className="code-image-wrapper right-cd">
                <img
                  className="code-image"
                  src="/images/ceres-greens.png"
                  alt="Ceres Greens Dashboard"
                />
              </div>
            </div>
            {/*Belt Blaster Content*/}
            <div className="project">
              <div className="code-image-wrapper">
                <img
                  className="code-image"
                  src="/images/testshooter_9.gif"
                  alt="Belt Blaster"
                />
              </div>
              <div className="code-text-wrapper">
                <div className="code-text-scroll">
                  <div className="inner-code-text">
                    <h3 className="code-title">BELT BLASTER</h3>
                    <p className="code-text">
                      8-Bit space shooter built in Pico-8
                    </p>
                    <ul>
                      <li className="code-text">
                        Fight your way through endless waves of asteroids and
                        turret style enemies
                      </li>
                      <li className="code-text">
                        Power up your scatter shot for an explosive attack!
                      </li>
                      <li className="code-text">
                        Destroying turrets gives you a chance at additional
                        lives
                      </li>
                      <li className="code-text">
                        Use your arrow keys to move the ship
                      </li>
                      <li className="code-text">
                        Z fires your main laser, X fires your scatter shot
                      </li>
                    </ul>
                    <h4 className="code-title">LINKS:</h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.lexaloffle.com/bbs/?tid=37701"
                    >
                      <h3 className="text-link code-text">PLAY!</h3>
                    </a>
                  </div>
                </div>
                <div className="code-text-fade"></div>
              </div>
            </div>
            {/*Chattr Content*/}
            <div className="proj-reverse project">
              <div className="left-wrapper code-text-wrapper">
                <div className="code-text-scroll">
                  <div className="inner-code-text">
                    <h3 className="code-title">CHATTR</h3>
                    <p className="code-text">
                      A chat application built in React as a team at Burlington
                      Code Academy
                    </p>
                    <ul>
                      <li className="code-text">
                        Utilizes the full MERN stack
                      </li>
                      <li className="code-text">
                        Gives users random names to promote a fun chat
                        experience
                      </li>
                      <li className="code-text">
                        Names are saved in cookies to allow users to keep the
                        same name
                      </li>
                      <li className="code-text">
                        Utilizes polling to stay up to date with chat log in
                        database
                      </li>
                    </ul>
                    <h4 className="code-title">LINKS:</h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/JoshLDowns/downs-phelps-chat"
                    >
                      <h3 className="text-link code-text">GITHUB</h3>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://chittr-chattr.herokuapp.com/"
                    >
                      <h3 className="text-link code-text">HEROKU</h3>
                    </a>
                  </div>
                </div>
                <div className="code-text-fade"></div>
              </div>
              <div className="code-image-wrapper right-cd">
                <img
                  className="code-image"
                  src="/images/chattr.png"
                  alt="Chattr Screenshot"
                />
              </div>
            </div>
            {/*Text Adventure Content*/}
            <div className="project">
              <div className="code-image-wrapper">
                <img
                  className="code-image"
                  src="/images/text-adventure-2.png"
                  alt="Robot Apocalypse Screenshot"
                />
              </div>
              <div className="code-text-wrapper">
                <div className="code-text-scroll">
                  <div className="inner-code-text">
                    <h3 className="code-title">ROBOT APOCALYPSE</h3>
                    <p className="code-text">
                      A classic text based adventure game built to run in the
                      Command Line Interface.
                    </p>
                    <ul>
                      <li className="code-text">
                        Battle fierce enemies as you explore over 40 'rooms'
                      </li>
                      <li className="code-text">
                        Understands over 100 input commands
                      </li>
                      <li className="code-text">
                        Turn based combat, similar to classic RPG's
                      </li>
                      <li className="code-text">
                        Multiple difficulty levels to choose from
                      </li>
                      <li className="code-text">
                        Ton's of items to collect, and secrets to find
                      </li>
                      <li className="code-text">
                        Collect upgrades, craft new skills, and save the world
                        ... or yourself
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="code-text-fade"></div>
              </div>
            </div>

            <div className="project proj-reverse">
              <div className="left-wrapper code-text-wrapper">
                <div className="code-text-scroll">
                  <div className="inner-code-text">
                    <h4 className="code-title">MORE INFO...</h4>
                    <ul>
                      <li className="code-text">Built in vanilla JavaScript</li>
                      <li className="code-text">
                        Uses Inquirer.js to handle inputs from the command line
                      </li>
                      <li className="code-text">
                        Colorful health bars are built with the Chalk library
                      </li>
                      <li className="code-text">
                        Text wrapping, and timed text output functions for the
                        command line
                      </li>
                      <li className="code-text">
                        Can be installed globally via NPM package
                      </li>
                    </ul>
                    <h4 className="code-title">LINKS:</h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/JoshLDowns/Text-Adventure"
                    >
                      <h3 className="text-link code-text">GITHUB</h3>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.npmjs.com/package/text-adventure-robot-apocalypse"
                    >
                      <h3 className="text-link code-text">NPM PACKAGE</h3>
                    </a>
                  </div>
                </div>
                <div className="code-text-fade"></div>
              </div>
              <div className="code-image-wrapper right-cd">
                <img
                  className="code-image"
                  src="/images/text-adventure-1.png"
                  alt="Robot Apocalypse Screenshot"
                />
              </div>
            </div>
            {/*Geo-Vermonter Content*/}
            <div className="project">
              <div className="code-image-wrapper">
                <img
                  className="code-image"
                  src="/images/geo-vermonter-1.png"
                  alt="Geo-Vermonter Screenshot"
                />
              </div>
              <div className="code-text-wrapper">
                <div className="code-text-scroll">
                  <div className="inner-code-text">
                    <h3 className="code-title">GEO-VERMONTER</h3>
                    <p className="code-text">
                      A group project built at Burlington Code Academy that
                      aimed to create an experience similar to the popular
                      GeoGuesser game that utilizes the Google Maps API, but in
                      Vermont only.
                    </p>
                    <ul>
                      <li className="code-text">
                        Game will pick random locations in Vermont only
                      </li>
                      <li className="code-text">
                        Players guess what County they are in, through a modal
                        pop up window
                      </li>
                      <li className="code-text">
                        Able to move around map with built in N, E, S, W
                        controls
                      </li>
                      <li className="code-text">
                        Dynamic scoring based on number of guesses, and amount
                        of moves made in game
                      </li>
                      <li className="code-text">
                        Map will draw a trail that represents your movements
                        while playing
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="code-text-fade"></div>
              </div>
            </div>

            <div className="project proj-reverse">
              <div className="left-wrapper code-text-wrapper">
                <div className="code-text-scroll">
                  <div className="inner-code-text">
                    <h4 className="code-title">MORE INFO...</h4>
                    <ul>
                      <li className="code-text">
                        Leaderboard for top scores built in Local storage
                      </li>
                      <li className="code-text">Built with Create React App</li>
                      <li className="code-text">
                        Utilizes React Leaflet to build map objects
                      </li>
                      <li className="code-text">
                        Fetches data from the Nominatum API to determine
                        locations
                      </li>
                      <li className="code-text">
                        Leaderboard currently utilizes local storage
                      </li>
                    </ul>
                    <h4 className="code-title">LINKS:</h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/JoshLDowns/geo-vermonter-JoshLDowns-DanielJohnson"
                    >
                      <h3 className="text-link code-text">GITHUB</h3>
                    </a>
                  </div>
                </div>
                <div className="code-text-fade"></div>
              </div>
              <div className="code-image-wrapper right-cd">
                <img
                  className="code-image"
                  src="/images/geo-vermonter-2.png"
                  alt="Geo-Vermonter Screenshot"
                />
              </div>
            </div>

            {/*Tic Tac Toe Content*/}
            <div className="project">
              <div className="code-image-wrapper">
                <img
                  className="code-image"
                  src="/images/tic-tac-toe.png"
                  alt="Tic Tac Toe Screenshot"
                />
              </div>
              <div className="code-text-wrapper">
                <div className="code-text-scroll">
                  <div className="inner-code-text">
                    <h3 className="code-title">TIC-TAC-TOE</h3>
                    <p className="code-text">
                      Built as a project for Burlington Code Academy to explore
                      event handlers and manipulating the DOM.
                    </p>
                    <h4 className="code-title">STANDARD GAME</h4>
                    <ul>
                      <li className="code-text">
                        One or two player game options are available
                      </li>
                      <li className="code-text">
                        Player name submission is available, and will default to
                        'X' and 'O'
                      </li>
                      <li className="code-text">
                        Games are timed with a clock that is built to show
                        standard time output
                      </li>
                      <li className="code-text">
                        Computer player will always play a perfect game
                      </li>
                      <li className="code-text">
                        Computer AI is written with a minimax algorithm
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="code-text-fade"></div>
              </div>
            </div>

            <div className="project proj-reverse">
              <div className="left-wrapper code-text-wrapper">
                <div className="code-text-scroll">
                  <div className="inner-code-text">
                    <h4 className="code-title">NINE BOARD GAME</h4>
                    <ul>
                      <li className="code-text">
                        One or two player game options are available
                      </li>
                      <li className="code-text">
                        Computer player currently plays a very defensive game,
                        but will play to win if given the chance
                      </li>
                      <li className="code-text">
                        Minimax algorithm is in the works
                      </li>
                    </ul>
                    <h4 className="code-title">LINKS:</h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://glacial-crag-09766.herokuapp.com/"
                    >
                      <h3 className="text-link code-text">
                        STANDARD GAME ON HEROKU
                      </h3>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/BurlingtonCodeAcademy/tic-tac-toe-JoshLDowns-1"
                    >
                      <h3 className="text-link code-text">
                        STANDARD GAME ON GITHUB
                      </h3>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/JoshLDowns/Nine-Board-Tic-Tac-Toe"
                    >
                      <h3 className="text-link code-text">
                        NINE BOARD ON GITHUB
                      </h3>
                    </a>
                  </div>
                </div>
                <div className="code-text-fade"></div>
              </div>
              <div className="code-image-wrapper right-cd">
                <img
                  className="code-image"
                  src="/images/nine-board-tic-tac-toe.png"
                  alt="Nine Board Screenshot"
                />
              </div>
            </div>

            {/*Yelpington Content*/}
            <div className="project">
              <div className="code-image-wrapper">
                <img
                  className="code-image"
                  src="/images/yelpington.png"
                  alt="Yelpington Screenshot"
                />
              </div>
              <div className="code-text-wrapper">
                <div className="code-text-scroll">
                  <div className="inner-code-text">
                    <h3 className="code-title">YELPINGTON</h3>
                    <p className="code-text">
                      Built as a project for Burlington Code Academy as a way to
                      explore fetching from API endpoints, and utilizing mapping
                      in the browser. Yelpington modeled itself off from Yelp,
                      and allows users to select restaurants in the Burlington,
                      VT area to leave reviews, and get general information on
                      the restaurant.
                    </p>
                    <h4 className="code-title">STANDARD GAME</h4>
                    <ul>
                      <li className="code-text">
                        Utilizes Leaflet.js and a local API to build maps of
                        restaurants
                      </li>
                      <li className="code-text">
                        Comments are currently stored in local storage
                      </li>
                      <li className="code-text">
                        Built mobile forward, but scales to desktop mode
                      </li>
                      <li className="code-text">
                        Includes'mock' components that are not functional
                        (mailing list and social media links) to show what a
                        final app like this might look like
                      </li>
                    </ul>
                    <h4 className="code-title">LINKS:</h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://burlington-restaurant-app.herokuapp.com/"
                    >
                      <h3 className="text-link code-text">HEROKU</h3>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/JoshLDowns/yelpington-JoshLDowns"
                    >
                      <h3 className="text-link code-text">GITHUB</h3>
                    </a>
                  </div>
                </div>
                <div className="code-text-fade"></div>
              </div>
            </div>

            {/*Original Portfolio Content*/}
            <div className="project proj-reverse">
              <div className="left-wrapper code-text-wrapper">
                <div className="code-text-scroll">
                  <div className="inner-code-text">
                    <h3 className="code-title">ORIGINAL PORTFOLIO PAGE</h3>
                    <p className="code-text">
                      I'm adding this to show my progression as a developer. The
                      more I learn, the more I want to tear down, rebuild, and
                      improve older projects that I've worked on. In a few
                      months, we might find this current site here as well!
                    </p>
                    <ul>
                      <li className="code-text">
                        Built modal windows in vanilla JavaScript to handle the
                        art portfolio
                      </li>
                      <li className="code-text">
                        Used scroll events to handle some small animations
                      </li>
                      <li className="code-text">
                        Has both mobile, and desktop styling
                      </li>
                    </ul>
                    <h4 className="code-title">LINKS:</h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://joshldowns.github.io/"
                    >
                      <h3 className="text-link code-text">OG PORTFOLIO SITE</h3>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/JoshLDowns/JoshLDowns.github.io"
                    >
                      <h3 className="text-link code-text">GITHUB</h3>
                    </a>
                  </div>
                </div>
                <div className="code-text-fade"></div>
              </div>
              <div className="code-image-wrapper right-cd">
                <img
                  className="code-image"
                  src="/images/og-portfolio-1.png"
                  alt="Original Portfolio Screenshot"
                />
              </div>
            </div>
          </div>
          <div id="div-fade"></div>
        </div>
      </div>
    );
  }
}

function VideoModal(props) {
  if (props.modal === "capstone") {
    return (
      <div id="video-modal" className="modal-load">
        <div id="modal-title-bar">
          <p>Cere's Capstone Presentation</p>
          <button id="image-close" onClick={props.handleClose}>
            X
          </button>
        </div>
        <div className="modal-video-wrapper">
          <iframe
            title="Ceres Walkthrough"
            src="https://player.vimeo.com/video/414123397"
            width="740"
            height="416"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Code;
