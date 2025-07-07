import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Task Genie-new</title>
        <meta property="og:title" content="Task Genie-new" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar-interactive">
        <img
          alt="logo"
          src="/taskgenie-logo-white-200h.png"
          className="home-image1"
        />
        <div data-thq="thq-navbar-nav" className="home-desktop-menu">
          <nav className="home-links1">
            <Link to="/" className="home-navlink1">
              Home
            </Link>
            <span className="home-text10">About</span>
            <span className="home-text11">How it works</span>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div className="home-nav">
            <div className="home-top">
              <img
                alt="image"
                src="/taskgenie-logo-color-1500h.png"
                className="home-logo"
              />
              <div data-thq="thq-close-menu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="home-links2">
              <span className="home-text12">About</span>
              <span className="home-text13">Features</span>
              <span className="home-text14">Pricing</span>
              <span className="home-text15">Team</span>
              <span className="home-text16">Blog</span>
            </nav>
            <div className="home-buttons">
              <button className="home-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon16">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon18">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-container11">
        <div className="home-container12">
          <div className="home-container13">
            <span className="home-text17">Most Powerful Directory</span>
            <span className="home-text18">Available for Service Providers</span>
            <div className="home-container14">
              <div className="home-container15">
                <input
                  type="text"
                  placeholder="I'm looking for"
                  className="home-textinput input"
                />
                <select className="home-select">
                  <option value="Option 1">Jobs</option>
                  <option value="Option 2">Freelancers</option>
                  <option value="Option 3">Services</option>
                </select>
                <a
                  href="https://www.taskgenie.com/search-projects/?keyword=&amp;searchtype=job"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link1"
                >
                  <div className="home-container16">
                    <svg viewBox="0 0 1024 1024" className="home-icon20">
                      <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
                    </svg>
                    <span className="home-text19">Search</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="home-container17">
            <a
              href="https://youtu.be/XxxIEGzhIG8"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link2"
            >
              <div className="home-container18">
                <svg viewBox="0 0 1024 1024" className="home-icon22">
                  <path d="M342 214l468 298-468 298v-596z"></path>
                </svg>
              </div>
            </a>
            <div className="home-container19">
              <span className="home-text20">See For Yourself!</span>
              <span className="home-text21">
                <span>How it works &amp; experience the ultimate joy.</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/taskgenie-cover3-400w.png"
          className="home-image2"
        />
      </div>
      <div className="home-container20">
        <div className="home-container21">
          <span className="home-text24">
            <span>
              Trending
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text26">Top Categories</span>
          </span>
          <span className="home-text27">
            Dotem eiusmod tempor incune utnaem labore etdolore maigna alie enim
            poskina
          </span>
        </div>
        <div className="home-container22">
          <div className="home-container23">
            <img alt="image" src="/img-01-7-200h.png" className="home-image3" />
            <span className="home-text28">Mobiles</span>
            <span className="home-text29">
              Consectetur adipisicing elitaed eiusmod tempor incididuatna labore
              et dolore magna.
            </span>
          </div>
          <div className="home-container24">
            <img alt="image" src="/img-08-200h.png" className="home-image4" />
            <span className="home-text30">Digital Marketing</span>
            <span className="home-text31">
              Consectetur adipisicing elitaed eiusmod tempor incididuatna labore
              et dolore magna.
            </span>
          </div>
          <div className="home-container25">
            <img alt="image" src="/img-02-200h.png" className="home-image5" />
            <span className="home-text32">Writing &amp; Translation</span>
            <span className="home-text33">
              Consectetur adipisicing elitaed eiusmod tempor incididuatna labore
              et dolore magna.
            </span>
          </div>
          <div className="home-container26">
            <img alt="image" src="/img-03-200h.png" className="home-image6" />
            <span className="home-text34">Video &amp; Animation</span>
            <span className="home-text35">
              Consectetur adipisicing elitaed eiusmod tempor incididuatna labore
              et dolore magna.
            </span>
          </div>
        </div>
        <div className="home-container27">
          <div className="home-container28">
            <img alt="image" src="/img-08-200h.png" className="home-image7" />
            <span className="home-text36">Music &amp; Audio</span>
            <span className="home-text37">
              Consectetur adipisicing elitaed eiusmod tempor incididuatna labore
              et dolore magna.
            </span>
          </div>
          <div className="home-container29">
            <img alt="image" src="/img-05-200h.png" className="home-image8" />
            <span className="home-text38">Programming &amp; Tech</span>
            <span className="home-text39">
              Consectetur adipisicing elitaed eiusmod tempor incididuatna labore
              et dolore magna.
            </span>
          </div>
          <div className="home-container30">
            <img alt="image" src="/img-02-200h.png" className="home-image9" />
            <span className="home-text40">Fun &amp; Lifestyle</span>
            <span className="home-text41">
              Consectetur adipisicing elitaed eiusmod tempor incididuatna labore
              et dolore magna.
            </span>
          </div>
          <div className="home-container31">
            <span className="home-text42">Explore Categories</span>
            <span className="home-text43">
              Consectetur adipisicing elit deius temor incididunt utnenbo
            </span>
            <Link to="/" className="home-navlink2 button">
              SHOW ALL
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
