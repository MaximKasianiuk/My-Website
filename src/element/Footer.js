import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './Footer.css';
function Footer() {
  return (
    <div className='footer-container'> 
        <section className='footer-subscription'>
            <p className = 'footer-subscription-heading'>
                Subscribe to get to know me better!
            </p>
                <p className='footer-subscription-text'>
                You can unsubscribe at anytime.
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder="Your Email"
                        className='footer-input'/>
                        <Button buttonStyle='btn--outline'>JOIN</Button>
                    </form>
                    </div>
        </section>
        <div className ='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Navigate</h2>
                    <Link to='/about'>Resume</Link>
                    <Link to='/contact'>Reach Out</Link>
                    <Link to='/sign-up'>Sign Up</Link>
                    <Link to='/'>Home Page</Link>
                </div>
            </div>
        <div class='footer-link-items'>
         <h2>Social Media</h2>   
         <a href='https:www.linkedin.com/in/maxim-kasianiuk-2b853a230' target='_blank' rel="noreferrer noopener">LinkedIn</a>
         <a href='https://www.instagram.com/maxim_kasianiuk/' target='_blank' rel="noreferrer noopener">Instagram</a>
         <a href='https://github.com/MaximKasianiuk' target='_blank' rel="noreferrer noopener">GitHub</a>
         <a href='https://www.facebook.com/maxim.kasianiuk/' target='_blank' rel="noreferrer noopener">Facebook</a>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        Maxim Kasianiuk <i className='fa-solid fa-user-secret'/>
                        </Link>
                </div>
                <small className='website-rights'>Maxim Kasianiuk © 2021</small>
                <div className='social-icons'>
                    <a className='social-icon-link facebook' href='https://www.facebook.com/maxim.kasianiuk/' target='_blank' rel="noreferrer noopener" aria-label='Facebook'>
                        <i className='fab fa-facebook-f'>
                            </i>
                    </a>
                    <a className='social-icon-link instagram' href='https://www.instagram.com/maxim_kasianiuk/' target='_blank' rel="noreferrer noopener" aria-label='Instagram'>
                        <i className='fab fa-instagram'>
                            </i>
                    </a>
                    <a className='social-icon-link linkedin' href='https:www.linkedin.com/in/maxim-kasianiuk-2b853a230' target='_blank' rel="noreferrer noopener" aria-label='LinkedIn'>
                        <i className='fab fa-linkedin'>
                            </i>
                    </a>
                    </div>
            </div>
        </section>
    </div>
  )
}

export default Footer
