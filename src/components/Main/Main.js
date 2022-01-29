import React from 'react';

import styled from 'styled-components';

const Main = () => {
  return (
    <Container>
      <video
        className='video-bg'
        src={"/assets/video/video.mp4"}
        autoplay='1'
        allowfullscreen="1"
        loop
        muted
      />
      <ContainerLogo>
        <div className='logo'>
          <img src='/assets/Final-Fantasy-VII-Remake-Logo-Transparent.png' alt='logo' />
        </div>
      </ContainerLogo>      
    </Container>
  )
};

export default Main;

const Container = styled.section`
  overflow: hidden;
  object-fit: cover;
  width: 100%;
  opacity: 0.9;

  .video-bg {
    position: absolute;
    max-width: 1900px;
    width: 100%;
    height: 100%;
    margin-top: 140px;
    background-color: #000;

    object-fit: cover;
    -o-object-fit: cover;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }

  @media(max-width: 752px) {
    .video-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      margin-top: 128px;
    }
  }

  @media(max-width: 440px) {
    .video-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      margin-top: 128px;
    }
  }

`

const ContainerLogo = styled.div`  
  .logo img {
    position: absolute;
    width: 44rem;
    margin-left: 67rem;
    margin-top: 150px;   
  }

  @media(max-width: 1640px) {
    .logo img {
      margin-left: 55rem;
    }
  }

  @media(max-width: 1450px) {
    .logo img {
      margin-left: 45rem;
    }
  }

  @media(max-width: 1286px) {
    .logo img {
      margin-left: 29rem;
    }
  }

  @media(max-width: 1030px) {
    .logo img {
      margin-left: 15rem;
    }
  }

  @media(max-width: 806px) {
    .logo img {
      margin-left: 4rem;
    }
  }

  @media(max-width: 626px) {
    .logo img {
      display: flex;
      margin-left: -50px;
    }
  }

  @media(max-width: 510px) {
    .logo img {
      display: flex;
      margin-left: -130px
    }
  }

  @media(max-width: 440px) {
    .logo img {
      display: none;
    }
  }
`;


