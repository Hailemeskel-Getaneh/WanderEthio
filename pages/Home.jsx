import React from 'react';
import Gondar1 from '../assets/images/Gondar/gondar1.jpg'
import Semen from '../assets/images/semen/semen3.jpg'
import Lalibela from '../assets/images/Lalibela/lalibela2.jpg'
import Omo from '../assets/images/omo/omo4.jpg'
import axumImage from '../assets/images/Axum/axum3.jpg';
import bahirdarImage from '../assets/images/Bahirdar/bahidar4.jpg';
import hararImage from '../assets/images/Harar/harar3.jpg';
import tigrayImage from '../assets/images/Tgiray/tigray4.jpg';
import danakilDepressionImage from '../assets/images/Denakil/denakil2.jpg';

import "../App.css";

const HomePage = () => {
  // Sample data for featured destinations
  const featuredDestinations = [
    {
      name: 'Simien Mountains',
      description: 'Explore the breathtaking landscapes of the Simien Mountains.',
      imageUrl: Semen
    },
    {
      name: 'Lalibela',
      description: 'Visit the ancient rock-hewn churches of Lalibela.',
      imageUrl: Lalibela
    },
    {
      name: 'Omo Valley',
      description: 'Experience the diverse cultures and tribes of the Omo Valley.',
      imageUrl: Omo
    },
    {
      name: 'Axum',
      description: 'Discover the ancient ruins and obelisks of Axum.',
      imageUrl: axumImage,
    },
    {
      name: 'Bahirdar',
      description: 'Enjoy the beautiful landscapes and Lake Tana in Bahirdar.',
      imageUrl: bahirdarImage,
    },
    {
      name: 'Harar',
      description: 'Explore the walled city and vibrant markets of Harar.',
      imageUrl: hararImage,
    },
    {
      name: 'Tigray',
      description: 'Visit the rock-hewn churches and rugged landscapes of Tigray.',
      imageUrl: tigrayImage,
    },
    {
      name: 'Gondar',
      description: 'Visit the amazing Gondar Fassilades Palaces.',
      imageUrl: Gondar1,
    },
    {
      name: 'Danakil Depression',
      description: 'Experience one of the hottest places on Earth with unique landscapes in the Danakil Depression.',
      imageUrl: danakilDepressionImage,
    },
  ];

  // Sample data for featured activities
  const featuredActivities = [
    { name: 'Hiking', icon: '🥾' },
    { name: 'Cultural Tours', icon: '🏛️' },
    { name: 'Wildlife Safari', icon: '🐘' },
    { name: 'Photography', icon: '📷' },
  ];

  return (
    <div className="container ">
      <header>
        {/* Include your header component here */}
      </header>
      <section className="hero">

        <h1>Welcome to WanderEthio</h1>
        <p>Discover the beauty and diversity of Ethiopia</p>
        {/* <video controls sytle="height:900px">
          <source src="path/to/your/video.mp4" type="video/mp4"></source>
            Your browser does not support the video tag.
        </video> */}
      </section>
      <main className='main'>

        <section className="featured-destinations">
          <h2>Featured Destinations</h2>
          <div className="destination-list">
            {featuredDestinations.map(destination => (
              <div key={destination.name} className="destination">
                <img src={destination.imageUrl} alt={destination.name} />
                <div className="destination-info">
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="featured-activities">
          <h2>Featured Activities</h2>
          <div className="activity-list">
            {featuredActivities.map(activity => (
              <div key={activity.name} className="activity">
                <span role="img" aria-label={activity.name}>{activity.icon}</span>
                <p>{activity.name}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonial-list">
            {/* Testimonial components can be added here */}
            <div className="testimonial">
              <p>"Amazing experience! The landscapes were stunning and the people were incredibly welcoming."</p>
              <p>- John Doe</p>
            </div>
            <div className="testimonial">
              <p>"WanderEthio made our trip unforgettable. Highly recommended!"</p>
              <p>- Jane Smith</p>
            </div>
          </div>
        </section>
        {/* Additional sections or components can be added as needed */}
      </main>
      {/* <footer>
        {/* Include your footer component here */}
      {/* </footer> */}
    </div>
  );
};

export default HomePage;
