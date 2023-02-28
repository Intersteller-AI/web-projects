import React from 'react'
import './footer.css'


const ListItem = ({ link, link_name }) => (
  <div className='gpt3__footer-container-list-item'>
    <a href={link} className='footer__list-item-link'>{link_name}</a>
  </div>
)

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <button>Request Early Access</button>
    </div>

    <div className="gpt3__footer-container">
      <div className="gpt3__footer-container-top">
        <div className="gpt3__footer-container-top-company">
          <h1>BAY-<span>MED</span></h1>
          <p>Your Personal Healthcare advisor.</p>
        </div>

        <div className="gpt3__footer-container-top-compiled">
          <div className="gpt3__footer-container-outlet">
            <div className='color-grad' />
            <h6 className='gpt3__footer-container-title'>FEATURED</h6>
            <div className="gpt3__footer-container-list">
              <ListItem link="#gpt" link_name="Whoops" />
              <ListItem link="#gpt" link_name="Bolt·2" />
              <ListItem link="#gpt" link_name="Whisper" />
              <ListItem link="#gpt" link_name="Alignment" />
              <ListItem link="#gpt" link_name="Startup Fund" />
            </div>
          </div>
          <div className="gpt3__footer-container-outlet">
            <div className='color-grad' />
            <h6 className='gpt3__footer-container-title'>API</h6>
            <div className="gpt3__footer-container-list">
              <ListItem link="#gpt" link_name="Overview" />
              <ListItem link="#gpt" link_name="Pricing" />
              <ListItem link="#gpt" link_name="Examples" />
              <ListItem link="#gpt" link_name="Docs" />
              <ListItem link="#gpt" link_name="Terms & Policies" />
              <ListItem link="#gpt" link_name="Status" />
              <ListItem link="#gpt" link_name="Log in" />
            </div>
          </div>
          <div className="gpt3__footer-container-outlet">
            <div className='color-grad' />
            <h6 className='gpt3__footer-container-title'>BLOG</h6>
            <div className="gpt3__footer-container-list">
              <ListItem link="#gpt" link_name="Index" />
              <ListItem link="#gpt" link_name="Research" />
              <ListItem link="#gpt" link_name="Announcements" />
              <ListItem link="#gpt" link_name="Events" />
              <ListItem link="#gpt" link_name="Milestones" />
            </div>
          </div>
          <div className="gpt3__footer-container-outlet">
            <div className='color-grad' />
            <h6 className='gpt3__footer-container-title'>INFORMATION</h6>
            <div className="gpt3__footer-container-list">
              <ListItem link="#gpt" link_name="About Us" />
              <ListItem link="#gpt" link_name="Our Charter" />
              <ListItem link="#gpt" link_name="Our Research" />
              <ListItem link="#gpt" link_name="Publications" />
              <ListItem link="#gpt" link_name="Newsroom" />
              <ListItem link="#gpt" link_name="Careers" />
            </div>
          </div>
        </div>
      </div>
      <div className="gpt3__footer-container_divider"></div>
      <div className="gpt3__footer-container-bottom">
        <div className="copyright">
          <span>InterstellerAI © 2023 - 2050</span>
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
        </div>
        <div className="gpt3__footer-container-list">
          <ListItem link="#jug" link_name={<i className='ri-facebook-circle-line' />} />
          <ListItem link="#jug" link_name={<i className="ri-instagram-line" />} />
          <ListItem link="#jug" link_name={<i className="ri-twitter-line" />} />
        </div>
      </div>
    </div>

  </div>
)


export default Footer
