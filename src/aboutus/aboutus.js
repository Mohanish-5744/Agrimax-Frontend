import React from 'react';
import './aboutus.css';
import TopBar from '../Screens/topbar';
import Footer from '../Screens/footer';
import amey from '../photos/amey.png'
import shubham from '../photos/shubham.png'
import shripad from '../photos/shripad.png'
import mohanish from '../photos/mohanish.png'
const aboutus = () => {
  return (
    <div className="about_image">
      <TopBar></TopBar>
      {/* About US */}
      <div>
        <div className="about"><a href=''>About Us</a></div>
      </div>

      {/* Image */}
      <div className="img-1">
        {/* Image content goes here */}
      </div>

      {/* Services */}
      <div className="what"> SERVICES </div>

      {/* <h3>SERVICES</h3> */}

      {/* Services Section */}
      <div className="service-container1">
        <div className="services-section">
          <div className="box3321">
            <div className='service-name'>Service 1</div>
            <button type="button" onClick={() => window.location.href = 'https://google.com'}>REDIRECT</button>
          </div>

          <div className="box3321">
          <div className='service-name'>Service 2</div>
            <button type="button" onClick={() => window.location.href = 'https://google.com'}>REDIRECT</button>
          </div>

          <div className="box3321">
            <div className='service-name'>Service 3</div>
            <button type="button" onClick={() => window.location.href = 'https://google.com'}>REDIRECT</button>
          </div>

          <div className="box3321">
          <div className='service-name'>Service 4</div>
            <button type="button" onClick={() => window.location.href = 'https://google.com'}>REDIRECT</button>
          </div>
        </div>

        <div>h</div>


        <div className="services-section">
          <div className="box3321">
          <div className='service-name'>Service 5</div>
            <button type="button" onClick={() => window.location.href = 'https://google.com'}>REDIRECT</button>
          </div>

          <div className="box3321">
          <div className='service-name'>Service 6</div>
            <button type="button" onClick={() => window.location.href = 'https://google.com'}>REDIRECT</button>
          </div>

          <div className="box3321">
          <div className='service-name'>Service 7</div>
            <button type="button" onClick={() => window.location.href = 'https://google.com'}>REDIRECT</button>
          </div>

          <div className="box3321">
          <div className='service-name'>Service 8</div>
            <button type="button" onClick={() => window.location.href = 'https://google.com'}>REDIRECT</button>
          </div>
        </div>

      </div>


      {/* OUR TEAM */}
      <div className="ourTeam">
        <div className="what"> OUR TEAM </div>

      </div>
      <div className="team-member">
        <div className="members">
          <div className="member1"><img src={amey} style={{ height: '200px' }} alt="Amey Khamkar" /></div>
          <div className='member-name'> Amey Khamkar</div>
        </div>

        <div className="members">
          <div className="member1"><img src={shubham} style={{ height: '200px' }} alt="Shubham Hagawane" /></div>
          <div className='member-name'> Shubham Hagawane</div>
        </div>

        <div className="members">
          <div className="member1"><img src={shripad} style={{ height: '200px' }} alt="Shripad Dahale" /></div>
          <div className='member-name'> Shripad Dahale</div>
        </div>

        <div className="members">
          <div className="member1"><img src={mohanish} style={{ height: '200px' }} alt="Mohanish Khambadkar" /></div>
          <div className='member-name'> Mohanish Khambadkar</div>
        </div>
      </div>

      {/* Description */}
      <div className="what"> What We Do </div>
      
      <p className="text">
        Cost Prediction: Our team is actively engaged in the field of cost prediction, utilizing advanced data analytics and machine learning techniques.
      </p>

      <p className='text'>
        Crop Information: At present, we are dedicated to enhancing our capabilities in providing comprehensive crop information.
      </p>
      <p className='text'>
        Query Form:Our team is focused on creating a user-friendly interface that allows seamless submission and processing of queries through E-mails.
      </p>

      <div className="box23">
        <div className="image3"></div>
        <div className="image1"></div>
        <div className="image2"></div>

      </div>
      <Footer></Footer>
    </div>
  );
};

  
export default aboutus;