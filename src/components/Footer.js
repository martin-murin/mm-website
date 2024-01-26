import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import { ReactComponent as MailIcon } from '../icons/envelope-regular.svg';
import { ReactComponent as TwitterIcon } from '../icons/x-twitter.svg';
import { ReactComponent as LinkedinIcon } from '../icons/linkedin.svg';
import { ReactComponent as GithubIcon } from '../icons/github.svg';
import { ReactComponent as InstagramIcon } from '../icons/instagram.svg';

function Footer() {
  return (
    <div className='fluid-container bg-dark fixed-footer'>
        <div className='row mx-auto'>
            <div className='col-12 mt-4 mb-2'>
            <ul className='d-flex flex-row justify-content-center list-unstyled'>
                <li><a href='mailto: martin.murin@proton.me'>
                    <MailIcon className='social-icon ml-2 mr-2'/>
                </a>
                </li>
                <li><a href='https://www.instagram.com/mar.murin/'>
                    <InstagramIcon className='social-icon ml-2 mr-2'/>
                </a>
                </li>
                <li><a href='https://twitter.com/mar_murin'>
                    <TwitterIcon className='social-icon ml-2 mr-2'/>
                </a>
                </li>
                <li><a href='https://www.linkedin.com/in/martinmurin/'>
                    <LinkedinIcon className='social-icon ml-2 mr-2'/>
                </a> 
                </li>
                <li><a href='https://www.github.com/martin-murin'>
                    <GithubIcon className='social-icon ml-2 mr-2'/>
                </a>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer