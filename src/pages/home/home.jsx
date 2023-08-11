import React from 'react'
import { FaFacebookF,FaTwitter,FaGithub } from 'react-icons/fa'

const Home = () => {
  return (
    
 // Start Hero Seciton 
  <section class="st-hero st-style2">
    <div class="container">
      <div class="st-hero-text">
        <h1>Hi, I am <span>Jhon Doe</span></h1>
        <p>I am a frontend web developer. I can provide clean code and pixel perfect design. <br/>I also make website more & more interactive with web animations.</p>
        <div class="st-hero-social-links">
          <a href="#" class="st-social-btn">
            <FaFacebookF />
          </a>
          <a href="#" class="st-social-btn">
            <FaTwitter />
          </a>
          <a href="#" class="st-social-btn">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
    <div id="background-wrap">
      <div class="bubble x1"></div>
      <div class="bubble x2"></div>
      <div class="bubble x3"></div>
      <div class="bubble x4"></div>
      <div class="bubble x5"></div>
      <div class="bubble x6"></div>
      <div class="bubble x7"></div>
      <div class="bubble x8"></div>
      <div class="bubble x9"></div>
      <div class="bubble x10"></div>
    </div>
    <div id="particles-js"></div>
  </section>
 // End Hero Seciton
  )
}

export default Home
