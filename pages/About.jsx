import React from 'react';
import '../styles/About.css';
// import TeamMember from "../Components/TeamMember.jsx"

const AboutPage = () => {

  return (
    <div>
      <main className="about-page">
        <section className="hero">
          <div className="container">
            <h1>About WanderEthio</h1>
            <p>Discover the beauty and diversity of Ethiopia with WanderEthio.</p>
          </div>
        </section>
        <section className="mission">
          <div className="container">
            <h2>Our Mission</h2>
            <p>At WanderEthio, our mission is to showcase the rich cultural heritage, stunning landscapes, and diverse attractions of Ethiopia to the world.</p>
          </div>
        </section>
        <section className="team">
          <div className="container">
            <h2>Meet Our Team</h2>
            <div className="team-members">
              {/* TeamMember components
              <TeamMember
                name="Hailemeskel Getaneh"
                role="Founder & CEO"
                image="team-member-1.jpg"
              />
              <TeamMember
                name="Jane Smith"
                role="Head of Operations"
                image="team-member-2.jpg"
              /> */}
              {/* Add more team members as needed */}
            </div>
          </div>
        </section>
        <section className="contact">
          <div className="container">
            <h2>Contact Us</h2>
            <p>If you have any questions or inquiries, feel free to reach out to us:</p>
            <p>Email: info@wanderethio.com</p>
            <p>Phone: +1251 956 319 463</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
