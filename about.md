---
layout: page
title: About
permalink: /about/
---

<div class="about-page">
  <h1>About Me</h1>

  <p><em>"I love cute things!"</em></p>

  <section class="info-section">
    <h3>More Information</h3>
    <p>
      Hello, I'm <strong>Phuc Huynh</strong>. I'm currently a senior student at Ho Chi Minh City University of Technology. I have a deep passion for mathematics, and I'm also a huge fan of anime and manga. In my free time, I love playing games, reading, watching football and animes and following eSports tournaments.
    </p>
    <p>
      My favorite athlete in the world of eSports is Faker, who I admire for his incredible skill and consistency in League of Legends.
    </p>
  </section>

  <section class="contact-section">
    <h3>Contact Me</h3>
    <p>If you'd like to get in touch, feel free to reach out via email:</p>
    <p><a href="mailto:phucthcsmyloc@gmail.com" class="email-link">phucthcsmyloc@gmail.com</a></p>
  </section>
</div>

<style>
  .about-page {
    margin: 0 auto;
    padding: 20px;
    border-radius: 12px;
    font-family: 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    background: rgba(255, 255, 255, 0.9); /* Light mode background */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Subtle shadow */
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }

  .about-page h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 30px;
    color: #000;
    text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.3); /* Slight shadow for brighter text */
  }

  .about-page p {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: #000;
  }

  .about-page em {
    font-size: 1.5rem;
    display: block;
    text-align: center;
    margin-bottom: 20px;
    color: #000;
  }

  .info-section, .contact-section {
    margin-top: 40px;
  }

  .info-section h3, .contact-section h3 {
    font-size: 1.4rem;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 2px solid #333;
    display: inline-block;
    padding-bottom: 5px;
    color: #000;
  }

  .email-link {
    font-size: 1.2rem;
    font-weight: bold;
    color: #0066cc;
    text-decoration: none;
  }

  .email-link:hover {
    text-decoration: underline;
  }

  /* Dark mode */
  body.dark .about-page {
    background: rgba(255, 255, 255, 0.3); /* Lighter background in dark mode */
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.5); /* Stronger shadow in dark mode */
    color: #000;
  }

  body.dark .about-page h1 {
    color: #000;
  }

  body.dark .info-section h3, 
  body.dark .contact-section h3 {
    border-bottom-color: #aaa;
    color: #ddd;
  }

  body.dark .email-link {
    color: rgba(0, 128, 255, 0.5);
  }

  body.dark .email-link:hover {
    color: #b0cfff;
  }
</style>