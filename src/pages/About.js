import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-sec-img2.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--gray-2);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Sarvess Veeriyah</span>
              </p>
              <h2 className="about__heading">A Software Engineering Student</h2>
              <div className="about__info">
                <PText>
                  I am from Penang, Malaysia. A place of beauty and nature.
                  Since my childhood, I love exploring. I always try to explore
                  new things especially in technology and financial. I also love
                  to create things that can be usefull to others.
                  <br /> <br />
                  I started coding since I was in my polytechnic. Coding is also
                  an art for me. I love it and now I have the opportunity to
                  code my own website while exploring new technology. I find it
                  really interesting and I enjoyed the process a lot.
                  <br />
                  <br />
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="/Sarvess-Resume.pdf" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>
              {/* <AboutInfoItem
                title="July 2022 - Oct 2022"
                items={['Opeator at Jabil ']}
              /> */}
              <AboutInfoItem title="2019-2020" items={['IT TRAINEE']} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoItem
                title="University"
                items={['University Of Pahang, Malaysia (UMP)']}
              />
              <AboutInfoItem
                title="Polytechnic"
                items={['Politeknik Balik Pulau, Penang Malaysia']}
              />
              <AboutInfoItem
                title="School"
                items={['SMK St.Xavier, Penang Malaysia']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={[
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'REACT',
                  'NextJS',
                  'TailwindCSS',
                ]}
              />
              <AboutInfoItem title="BackEnd" items={['Node', 'PHP']} />
              <AboutInfoItem
                title="Apps Development"
                items={['Dart', 'Kotlin', 'Java']}
              />
              <AboutInfoItem
                title="Frameworks"
                items={['Laravel', 'Flutter']}
              />
              <AboutInfoItem
                title="Programming Language"
                items={['Java', 'C++', 'Python']}
              />
              <AboutInfoItem title="Database" items={['MySQL', 'Firebase']} />
              <AboutInfoItem
                title="IDE"
                items={['Visual Studio Code', 'Android Studio']}
              />
              <AboutInfoItem
                title="UI/UX Design"
                items={['Figma', 'Adobe XD', 'Adobe Photoshop']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Certifications & Awards</h1>
              <AboutInfoItem
                title=" UMP "
                items={['Dean List Award 2020/2021']}
              />
              <AboutInfoItem
                title=" IBM "
                items={['IBM PYTHON FOR DATA SCIENCE']}
              />
              <AboutInfoItem
                title="IBM"
                items={['MACHINE LEARNING WITH PYTHON- LEVEL 1']}
              />
              <AboutInfoItem
                title="GOOGLE"
                items={['GOOGLE IT SUPPORT CERTIFICATION']}
              />
              <AboutInfoItem title="IBM" items={['CYBERSECURITY ANALYST']} />
              <AboutInfoItem
                title=" IBM"
                items={['IT FUNDAMENTALS FOR CYBERSECURITY']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
