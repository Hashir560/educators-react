import React, { useState } from "react";
import {
  FaBook,
  FaBullhorn,
  FaBookmark,
  FaEdit,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "./App.css";
import {
  logo,
  preschoolLogo,
  years25,
  students,
  aboutThumb,
  newsSteam,
  newsSpeech,
  newsTechValley,
} from "./images";

/* ================= HEADER ================= */
const navItems = [
  "HOME",
  "ABOUT US",
  "BECOME A FRANCHISEE",
  "ADMISSIONS",
  "STP",
  "CONTACT US",
];

const Header = () => (
  <header className="header">
    <div className="topbar">
      <div className="topbar-left">
        <span className="topbar-item">
          <span className="icon">📞</span> +92 42 111 777 800
        </span>
        <span className="topbar-item">
          <span className="icon">✉️</span> Online Service Desk{" "}
          <small>(0423-8050005)</small>
        </span>
      </div>
      <div className="topbar-right">SCHOOL MANAGEMENT PORTAL</div>
    </div>

    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="The Educators" />
      </div>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

/* ================= HERO ================= */
const Hero = () => (
  <section className="hero">
    <div className="hero-logos">
      <img src={logo} alt="The Educators" className="hero-logo" />
      <img
        src={preschoolLogo}
        alt="The Educators Pre-School"
        className="hero-logo"
      />
    </div>

    <div className="hero-25">25</div>

    <div className="hero-badge">
      <img src={years25} alt="25 Years of Nation Building" />
    </div>

    <img src={students} alt="Happy students" className="hero-students" />

    <div className="admissions-banner">
      <h2>ADMISSIONS OPEN</h2>
    </div>
  </section>
);

/* ================= ABOUT ================= */
const About = () => (
  <section className="about">
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-title">
          ABOUT
          <br />
          THE EDUCATORS
        </h2>

        <p className="about-text">
          Established in November 1975 as the Les Anges Montessori Academy for
          toddlers, Beaconhouse has since grown into a global network of
          private schools, institutes, and universities, imparting distinctive
          and meaningful education to students from pre-school to
          post-graduation. The Educators, a Project of Beaconhouse, celebrates
          25 years of dedicated service to educational development across the
          country with remarkable success. Established in 2002, it now has
          1,000+ campuses and is a market leader in Pakistan's educational
          landscape, with a presence in over 275+ cities and a student strength
          exceeding 240,000+. This makes The Educators one of the largest
          private school networks across Pakistan.
        </p>

        <a href="#" className="learn-more-btn">
          LEARN MORE <span className="arrow">→</span>
        </a>
      </div>

      <div className="about-video">
        <div className="video-wrapper">
          <img
            src={aboutThumb}
            alt="The Educators Admissions Open video"
            className="video-thumb"
          />
          <button className="play-btn" aria-label="Play video">
            ▶
          </button>
        </div>
      </div>
    </div>
  </section>
);

/* ================= ADMISSIONS ================= */
const admissionCards = [
  {
    title: "ADMISSION PROCEDURE",
    text: "There is no written test for pre-school. The admission test for primary and secondary school...",
    color: "card-purple",
    icon: <FaBook />,
  },
  {
    title: "ACADEMICS",
    text: "The Educators Academic / Training Department works very closely with teachers for a...",
    color: "card-teal",
    icon: <FaBullhorn />,
  },
  {
    title: "EXAMINATIONS",
    text: "The academic year commences from April and continues till March of next year. There are 2...",
    color: "card-yellow",
    icon: <FaBookmark />,
  },
  {
    title: "APPLY ONLINE",
    text: "Register your child with us at the nearest branch of The Educators.",
    color: "card-navy",
    icon: <FaEdit />,
  },
];

const Admissions = () => (
  <section className="admissions">
    <h2 className="admissions-heading">ADMISSIONS</h2>

    <div className="admissions-cards">
      {admissionCards.map((card) => (
        <div className={`admission-card ${card.color}`} key={card.title}>
          <div className="card-icon">{card.icon}</div>
          <h3 className="card-title">{card.title}</h3>
          <p className="card-text">{card.text}</p>
        </div>
      ))}
    </div>
  </section>
);

/* ================= NEWS ================= */
const newsItems = [
  {
    title: "National STEAM Competition 2024",
    text: "STEAM is a teaching and learning programme introduced by 'THE EDUCATORS'...",
    image: newsSteam,
    link: "#",
  },
  {
    title: "'THE EDUCATORS' 20th Annual Speech and Debate Conclave",
    text: "'THE EDUCATORS' 20th Annual Speech and Debate Competition (National...",
    image: newsSpeech,
    link: "#",
  },
  {
    title: "THE EDUCATORS and Tech Valley Launch: Aghaaz",
    text: "THE EDUCATORS, in collaboration with Tech Valley Pakistan, Google f...",
    image: newsTechValley,
    link: "#",
  },
];

const VISIBLE = 3;

const News = () => {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(newsItems.length - VISIBLE, 0);

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <section className="news">
      <div className="news-carousel">
        <button
          className="news-arrow news-arrow-left"
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous news"
        >
          <FaChevronLeft />
        </button>

        <div className="news-viewport">
          <div
            className="news-track"
            style={{
              transform: `translateX(calc(${-index} * (var(--card-w) + var(--gap))))`,
            }}
          >
            {newsItems.map((item) => (
              <article className="news-card" key={item.title}>
                <div className="news-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-text">{item.text}</p>
                <a href={item.link} className="read-more-btn">
                  READ MORE
                </a>
              </article>
            ))}
          </div>
        </div>

        <button
          className="news-arrow news-arrow-right"
          onClick={next}
          disabled={index === maxIndex}
          aria-label="Next news"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

/* ================= APP ================= */
function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Admissions />
      <News />
    </div>
  );
}

export default App;