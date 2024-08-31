import React from "react";

const WorkItems = ({ item, toggleTab, toggleState }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a className="work__button" onClick={() => toggleTab(item.id)}>
        View Project <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>

      <div
        className={
          toggleState ? "services__modal active-modal" : "services__modal"
        }
      >
        <div className="services__modal-content">
          <i
            onClick={() => toggleTab(item.id)}
            className="uil uil-times services__modal-close"
          ></i>

          {item.id === 1 && (
            <>
              <div className="projects">
                <h3 className="services__modal-title">Food Delivery App</h3>
                <p className="services__modal-description">
                  Cravin', a responsive MERN stack food delivery website
                  designed to provide users with a seamless experience in
                  ordering their favorite meals.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      User authentication with login and signup functionality.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Add to cart feature for easy meal selection.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Secure payment processing with Stripe integration.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Comprehensive admin dashboard for managing orders, and
                      items.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Additional features to enhance user experience and site
                      management.
                    </p>
                  </li>
                </ul>

                <div className="button-container">
                  <a href="https://cravin.onrender.com/" target="_blank">
                    <button className="button button--flex">
                      Visit Website{" "}
                      <i
                        className="uil uil-external-link-alt button__icon"
                        style={{ fontSize: "1.3rem" }}
                      ></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/iameenalam/Food-Delivery-App"
                    target="_blank"
                  >
                    <button
                      className="button button--flex"
                      style={{ marginLeft: "1rem" }}
                    >
                      Source Code{" "}
                      <i
                        className="uil uil-arrow button__icon"
                        style={{ fontSize: "1.3rem" }}
                      ></i>
                    </button>
                  </a>
                </div>
              </div>
            </>
          )}

          {item.id === 2 && (
            <>
              <div className="projects">
                <h3 className="services__modal-title">X Clone</h3>
                <p className="services__modal-description">
                  A responsive X clone built with the MERN stack, offering
                  similar functionalities to the popular social media platform.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Sign up, log in, and log out to manage your account.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Create, delete, and like posts, and engage
                      with others by commenting on tweets.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Customize your profile with a picture and bio.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Follow or unfollow users to curate your personal feed.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Receive instant notifications for new likes, and
                      follows, ensuring you're always up to date.
                    </p>
                  </li>
                </ul>

                <div className="button-container">
                  <a
                    href="https://xclonee.onrender.com/"
                    target="_blank"
                  >
                    <button className="button button--flex">
                      Visit Website{" "}
                      <i
                        className="uil uil-external-link-alt button__icon"
                        style={{ fontSize: "1.3rem" }}
                      ></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/iameenalam/X-Clone"
                    target="_blank"
                  >
                    <button
                      className="button button--flex"
                      style={{ marginLeft: "1rem" }}
                    >
                      Source Code{" "}
                      <i
                        className="uil uil-arrow button__icon"
                        style={{ fontSize: "1.3rem" }}
                      ></i>
                    </button>
                  </a>
                </div>
              </div>
            </>
          )}

          {item.id === 3 && (
            <>
              <div className="projects">
                <h3 className="services__modal-title">
                  Digital Agency Website
                </h3>
                <p className="services__modal-description">
                  Digency is a digital agency website built with ReactJS. It
                  showcases a range of digital solutions with a modern and
                  user-friendly design.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      The website has a contemporary look that improves user
                      experience.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Each part of the website provides detailed information.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Features a section to view different projects and creative
                      work.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Simple navigation helps visitors find information easily.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      An easy-to-use form for reaching out for consultations.
                    </p>
                  </li>
                </ul>

                <div className="button-container">
                  <a href="https://digency.vercel.app/" target="_blank">
                    <button className="button button--flex">
                      Visit Website{" "}
                      <i
                        className="uil uil-external-link-alt button__icon"
                        style={{ fontSize: "1.3rem" }}
                      ></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/iameenalam/Digital-Agency-Website"
                    target="_blank"
                  >
                    <button
                      className="button button--flex"
                      style={{ marginLeft: "1rem" }}
                    >
                      Source Code{" "}
                      <i
                        className="uil uil-arrow button__icon"
                        style={{ fontSize: "1.3rem" }}
                      ></i>
                    </button>
                  </a>
                </div>
              </div>
            </>
          )}

          {item.id === 4 && (
            <>
              <div className="projects">
                <h3 className="services__modal-title">TinDog App</h3>
                <p className="services__modal-description">
                  TinDog is a simple web application built with HTML, CSS, and
                  Bootstrap that allows users to find the true love of their
                  dog's life.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Browse profiles of other dog owners.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Connect with local dog owners.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Responsive design with Bootstrap.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Easy-to-navigate user interface.
                    </p>
                  </li>
                </ul>

                <div className="button-container">
                  <a href="https://tindogg-app.vercel.app/" target="_blank">
                    <button className="button button--flex">
                      Visit Website{" "}
                      <i
                        className="uil uil-external-link-alt button__icon"
                        style={{ fontSize: "1.3rem" }}
                      ></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/iameenalam/TinDog-App"
                    target="_blank"
                  >
                    <button
                      className="button button--flex"
                      style={{ marginLeft: "1rem" }}
                    >
                      Source Code{" "}
                      <i
                        className="uil uil-arrow button__icon"
                        style={{ fontSize: "1.3rem" }}
                      ></i>
                    </button>
                  </a>
                </div>
              </div>
            </>
          )}

          {item.id === 5 && (
            <>
              <div className="projects">
                <h3 className="services__modal-title">Keeper App</h3>
                <p className="services__modal-description">
                  Keeper App is a web-based note-taking application designed to
                  simplify the process of creating and deleting notes.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Easily create new notes with a title and content.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Remove notes that are no longer necessary.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Enjoy a seamless experience on various devices with a
                      responsive layout.
                    </p>
                  </li>
                </ul>

                <div className="button-container">
                  <a href="https://keeperr-app.vercel.app/" target="_blank">
                    <button className="button button--flex">
                      Visit Website{" "}
                      <i
                        className="uil uil-external-link-alt button__icon"
                        style={{ fontSize: "1.3rem" }}
                      ></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/iameenalam/Keeper-App"
                    target="_blank"
                  >
                    <button
                      className="button button--flex"
                      style={{ marginLeft: "1rem" }}
                    >
                      Source Code{" "}
                      <i
                        className="uil uil-arrow button__icon"
                        style={{ fontSize: "1.3rem" }}
                      ></i>
                    </button>
                  </a>
                </div>
              </div>
            </>
          )}

          {item.id === 6 && (
            <>
              <div className="projects">
                <h3 className="services__modal-title">The Simon Game</h3>
                <p className="services__modal-description">
                  The Simon Game is a web-based implementation of the classic
                  memory game "Simon," where players must remember and repeat a
                  sequence of colors.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      The game uses a visually appealing interface with
                      responsive design.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Each color in the sequence is accompanied by a distinct
                      sound.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      As the game progresses, the sequence becomes longer,
                      challenging your memory.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      You can restart the game at any time.
                    </p>
                  </li>
                </ul>

                <div className="button-container">
                  <a href="https://siimon-game.vercel.app/" target="_blank">
                    <button className="button button--flex">
                      Visit Website{" "}
                      <i
                        className="uil uil-external-link-alt button__icon"
                        style={{ fontSize: "1.3rem" }}
                      ></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/iameenalam/The-Simon-Game"
                    target="_blank"
                  >
                    <button
                      className="button button--flex"
                      style={{ marginLeft: "1rem" }}
                    >
                      Source Code{" "}
                      <i
                        className="uil uil-arrow button__icon"
                        style={{ fontSize: "1.3rem" }}
                      ></i>
                    </button>
                  </a>
                </div>
              </div>
            </>
          )}

          {item.id === 7 && (
            <>
              <div className="projects">
                <h3 className="services__modal-title">The Dice Game</h3>
                <p className="services__modal-description">
                  A simple dice game in which the dice is rolled for two players
                  whenever the page is refreshed, and it determines which player
                  won or if it's a draw.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Dice roll automatically when the page is refreshed.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Announces the winner between Player 1 and Player 2 or a
                      draw.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Clean and straightforward interface.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Uses JavaScript to generate random dice rolls.
                    </p>
                  </li>
                </ul>

                <div className="button-container">
                  <a href="https://diice-game.vercel.app/" target="_blank">
                    <button className="button button--flex">
                      Visit Website{" "}
                      <i
                        className="uil uil-external-link-alt button__icon"
                        style={{ fontSize: "1.3rem" }}
                      ></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/iameenalam/The-Dice-Game"
                    target="_blank"
                  >
                    <button
                      className="button button--flex"
                      style={{ marginLeft: "1rem" }}
                    >
                      Source Code{" "}
                      <i
                        className="uil uil-arrow button__icon"
                        style={{ fontSize: "1.3rem" }}
                      ></i>
                    </button>
                  </a>
                </div>
              </div>
            </>
          )}

          {item.id === 8 && (
            <>
              <div className="projects">
                <h3 className="services__modal-title">Drum Kit Website</h3>
                <p className="services__modal-description">
                  The drum kit website displays a set of keys, and pressing each
                  key generates a corresponding sound, allowing users to play
                  the drums directly from their keyboard.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Pressing keys on the keyboard triggers corresponding drum
                      sounds.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Immediate playback of drum sounds upon key press.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Key highlights when pressed, enhancing the interactive
                      experience.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Each key is mapped to a unique drum sound for variety.
                    </p>
                  </li>
                </ul>

                <div className="button-container">
                  <a href="https://ddrum-kit.vercel.app/" target="_blank">
                    <button className="button button--flex">
                      Visit Website{" "}
                      <i
                        className="uil uil-external-link-alt button__icon"
                        style={{ fontSize: "1.3rem" }}
                      ></i>
                    </button>
                  </a>
                  <a
                    href="https://github.com/iameenalam/Drum-Kit-Website"
                    target="_blank"
                  >
                    <button
                      className="button button--flex"
                      style={{ marginLeft: "1rem" }}
                    >
                      Source Code{" "}
                      <i
                        className="uil uil-arrow button__icon"
                        style={{ fontSize: "1.3rem" }}
                      ></i>
                    </button>
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkItems;
