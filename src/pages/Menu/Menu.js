/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

import useSound from 'use-sound';

import styled from 'styled-components';
import { Fade, Zoom } from 'react-reveal';

const Menu = () => {
  const [play] = useSound('/assets/audio/FF7CursorSaveLoad.mp3');

  return (
    <Container>    
      <video
        className='video-bg'
        src={"/assets/video/lifestream.mp4"}
        autoplay='1'
        allowfullscreen="1"
        loop    
      />
      <video
        className='video-bg_2'
        src={"/assets/video/Final Fantasy VII Remake Animated bg_03.mp4"}
        autoplay='1'
        allowfullscreen="1"
        spy={true}
        smooth={true}
        loop    
      />
      <audio
        src={"/assets/audio/Final Fantasy 7 Remake Menu Music.mp3"}
        autoplay='1'
        loop                    
      />
      <div className='container-page'>
        <div className='bg-image'>
          <img src='' alt='' />           
              <div className='logo-image'>
                <Zoom duration={2500}>                
                  <img src='/assets/images/Final-Fantasy-VII-Remake-Logo-Transparent.png' alt='/' />
                </Zoom>
              </div>            
            <div className='text-area'>
              
              <Fade left duration={3500}> 
                <div className='text'>
                               
                  <span> Todo conteúdo utilizado nesse projeto acadêmico, são reservados as empresas
                  SQUARE ENIX & Sony Computer Entertainment Inc.</span><br /><br />                

                  <span>Projeto clone do site Final Fantasy VII Remake feito por um 
                  grande fã do jogo e franquia</span>

                  <span> © 1997, 2020 SQUARE ENIX CO., LTD. Todos os direitos 
                  e conteudos são reservados a empresa SQUARE ENIX</span><br /><br />

                  <span>PlayStation" e o logotipo "PS" são marcas registradas e 
                    "PS4" é uma marca comercial da Sony Computer Entertainment Inc.</span>
                                
                </div>
              </Fade>
            </div>            
         </div>
          <div className='button-menu'>
            <Link to="/home" style={{ textDecoration: 'none' }} spy={true} smooth={true} duration={300} onClick={play}>
              <Fade right duration={3000}>
                <button duration={3500} id="btn">Start</button>
              </Fade>
            </Link>
          </div>
        </div>
    </Container>
  )
};

export default Menu;

const Container = styled.div`
  width: 100%;
  height: 100%;

  animation-fill-mode: both;
  animation-duration: 5000ms;
  animation-delay: 500ms;
  animation-iteration-count: 8;
  opacity: 8;
  animation-name: react-reveal;
  background-color: #000;

  @media(max-width: 1850px) {
    width: 100%;    
  }

  .container-page {
    width: 100%;
    height: 1038px;
    transition: all .33s ease-in-out;
    object-fit: cover;
    -o-object-fit: cover;
  }

  @media(max-width: 1850px) {
    .container-page {
    width: 100%;
    height: 100%;
    }
  }

  .bg-image {
    width: 100%;
    height: 100%;

    img {
      height: 1030px;
      width: 100%;
    }
  }

  @media(max-width: 1900px) {
    .bg-image img {
      width: 100%;
      height: 1030px;
    }
  }

  .video-bg {
    position: absolute;
    
    width: 100%;
    height: 0.50%;
    background-color: #000;

    object-fit: cover;
    -o-object-fit: cover;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }

  .video-bg_2 {
    position: absolute;    
    width: 100%;      
    background-color: #000;

    object-fit: cover;
    -o-object-fit: cover;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }

  @media(max-width: 1900px) {
    .video-bg_2 {
      width: 100%;
      position: absolute;
      /*height: 0.50%;
      bottom: 0;
      margin-bottom: -222px; */
    }
  }

  @media(max-width: 1850px) {
    .video-bg_2 {
      display: flex;
      width: 100%;
      height: 1080px;
      position: absolute;      
      /*bottom: 0;*/
      /*margin-bottom: -190px;*/
    }
  }

  .logo-image {
    width: 100%;

    img {
      position: absolute;
      width: 750px;
      height: 500px;
      top: -5rem;
    }
  }

  @media(max-width: 780px) {
    .logo-image img {
      display: flex;
      width: 550px;
      height: 450px;  
      transition: all .33s ease-in-out;    
    }
  }

  @media(max-width: 560px) {
    .logo-image img {
      width: 450px;
      height: 350px;  
      margin: 0 auto; 
      margin-top: 100px; 
      transition: all .33s ease-in-out;
    }
  }

  @media(max-width: 430px) {
    .logo-image img {
      width: 400px;
      height: 350px;  
      top: -80px;
      left: -10px;
      transition: all .33s ease-in-out;
    }
  }
;
  @media(max-width: 390px) {
    .logo-image img {
      width: 380px;
      height: 350px;  
      margin-left: -10px;
      right: 50px;        
      transition: all .33s ease-in-out;
    }
  }

  @media(max-width: 340px) {
    .logo-image img {
      width: 250px;
      height: 250px;
      bottom: 10px;
      left: 20px;
    }
  }

  .text-area {
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-left: 160px;
    margin-top: -600px;
    max-width: 460px; 
  }

  .button-menu {
    width: 80px;
    height: 80px;
    display: flex;
    margin: 0 auto;
    margin-top: -320px;
  }

  .button-menu button {
    width: 80px;
    height: 30px;
    font-size: 22px;
    font-weight: 600;
    font-family: 'MyriadPro-Cond', Arial, sans-serif;
    cursor: pointer;
    border-width: 3px;
    border-style: solid;
    border-color: #009080;
    border-radius: 12px;
    transition: all .66s ease-out;

    &:hover {
      background-color: #000;
      color: #fff;
      transition: all .66s ease-in-out;
    }
  }

  @media(max-width: 1850px) {
    .button-menu {
      position: relative;
      display: flex; 
      justify-content: space-around; 
      border-color: #009080;
    }
  }

  @media(max-width: 640px) {
    .button-menu {
      position: relative;
      display: flex;
    }
  }

  span {
    color: #fff;
    font-weight: 700; 
    font-family: MyriadPro-Cond,Arial,sans-serif;
  }

  @media(max-width: 780px) {
    .text-area {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
      right: 100px;
    }
  }

  @media(max-width: 560px) {
    .text-area {
      display: flex;
      flex-direction: column;
      right: 140px;
    }
  }

  @media(max-width: 575px) {
    .text-area {
      display: flex;
      justify-content: column;
      right: 10px;
    }
  }

  @media(max-width: 475px) {
    .text-area {
      right: 70px;
      max-width: 300px;
      font-size: 12px;
    }
  }

  @media(max-width: 390px) {
    .text-area {
      right: 10px;
      max-width: 300px;
      font-size: 12px;
    }
  }

  @media(max-width: 325px) {
    .text-area {
      display: none;
    }
  }

  .text {
    height: 65px;
    text-shadow: 4px 2px 2px 4px #ffffff;

    animation-fill-mode: both;
    animation-duration: 1000ms;
    animation-delay: 0ms;
    animation-iteration-count: 1;
    opacity: 1;
    animation-name: react-reveal-607813993386296-1;

    span {
      color: #fff;
      font-weight: 700;      
    }
  }

  @media(max-width: 780px) {
    .text {
      right: 40px;
      height: 130px;
    }
  }

  .hand-menu {
    width: 80px;
    max-width: 80px;
    position: relative;
    top: -24rem;
    right: 150px;
    margin: 0 auto;
    height: 0;

    img {
      max-width: 150px;
      position: absolute;
      width: 15px;
      cursor: pointer;      
    }
  }

  @media(max-width: 550px) {
    .hand-menu {
      width: 100%;
      left: 100px;

      img {
        right: 120px;
      }
    }
  }
`;
