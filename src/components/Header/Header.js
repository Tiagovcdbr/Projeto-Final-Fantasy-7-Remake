/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import styled from 'styled-components';

const Header = () => {
  return(
      <ContainerBar>
      <div className='square-logo'>
        <img src='/assets/square_logo.png' />
      </div>
        <div className='bar-items'>
          <img src='/assets/cart2.png' />
          <img src='assets/login.png' />      
          <h2>Support</h2>
          <h2>Store</h2>
          <h2>News</h2>
          <h2>Top Games</h2>
        </div>
        <ContainerHeader>
            <img src='/assets/Final-Fantasy-VII-Remake-Logo-Transparent.png' />
          <ContainerItems>
            <img src='/assets/logo_white.png' />
              <div className='header-items'>
                <h2>History</h2>
                  <h2>Characters</h2>
                  <h2>Mechanics</h2>
                  <h2>Media</h2>
                  <h2>Download Demo</h2>
                <h3>Intergrade</h3>
              </div>
          </ContainerItems>
         </ContainerHeader>
          <ContainerDown>
            <div className='side-bar'>
              <h2>Buy Now</h2>
              <img src='assets/capa.png' />
            </div>
          </ContainerDown>
      </ContainerBar>
  )
};

export default Header;

const ContainerBar = styled.div`
  width: 100%;
  height: 40px;
  background-color: black;

  .square-logo img {
    position: relative;
    cursor: pointer;
    width: 180px;
  }

  .bar-items {
    position: relative;
    margin-top: -33px;

    img {
      cursor: pointer;
      width: 22px;
      margin: 0 10px;
      float: right;
      padding-top: 4px;
    }

    h2 {
      position: relative;
      display: inline;
      font-size: 15px;
      color: rgb(166, 166, 166);
      font-family: inherit;
      font-weight: 400;
      cursor: pointer;
      float: right;
      align-items: center;
      margin: 10px 30px;  
      text-transform: uppercase;    
      font-family: proxima-nova, sans-serif;
      
        &:hover {
          transition: 0.3s ease 0s;
          color: rgb(255, 255, 255);
        }
    }
  }

    img {
      width: 180px;
      margin-top: 8px;
      margin-left: 10px;
    } 

    @media(max-width:750px) {
      .bar-items h2 {
        display:none;
      }
    }

    @media(max-width: 750px) {
      .bar-items img {
        display: flex;
        position: relative;
        width: 20px;
      }
    }

    @media(max-width: 750px) {
      .square-logo {
        height: 40px;

        img {
          width: 140px;
        }
      }
    }
`;

const ContainerHeader = styled.section`
  width: 100%;
  height: 90px;
  display: flex;
  background-color: #05254e; 
  
    img {
      width: 200px;
      height: 140px;
      margin-top: -30px;
      margin-left: -15px;
      z-index: 10000;
      cursor: pointer;
    }

    @media(max-width: 430px) {
      img {
        display: none;
      }
    }
`;

const ContainerItems = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  margin: 0 auto;

    img {
      position: relative;
      width: 150px;
      height: 55px;
      margin-top: 18px;
      margin-left: -80px;
    }

    @media(max-width: 1316px) {
      img {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 280px;
        height: 90px;
        margin: 0 155px;        
      }
    }

      @media(max-width: 750px) {
          img {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 250px;
            height: 90px;
            margin: 0;
          }
        }

    .header-items {
      display: flex;

      h2 {
      cursor: pointer;
      display: flex;
      width: 100%;
      text-align: center;
      white-space: nowrap;
      height: 45px;
      margin: 16px 22px;
      padding: 1px 8px;
      font-family: MyriadPro-Cond,Arial,sans-serif;
      font-size: 14px;
      text-transform: uppercase;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: #ffffff;
      padding-left: 10px;
      opacity: 3s;
      background: linear-gradient(90deg,#000 0,#000 75%,transparent);

      &::before {
          content: "";
          position: absolute;
          top: 0;
          left: -5px;
          width: 2px;
          background-color: #000;
          height: 100%;
        }

        &:hover {         
          transition-duration: .1s;
          border-left: 2px solid #fff;
          border-top: 2px solid #fff;
          border-bottom: 2px solid #fff;
          background: linear-gradient(90deg,#05254e 0,#05254e 95%,rgba(5,32,72,1));        
          color: #ffffff;
        }              
    }

    h3 {
      cursor: pointer;
      display: flex;
      width: 100%;
      text-align: center;
      white-space: nowrap;
      height: 45px;
      margin: 16px 22px;
      padding: 1px 8px;
      font-family: MyriadPro-Cond,Arial,sans-serif;
      font-size: 14px;
      text-transform: uppercase;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: #000000;
      padding-left: 10px;
      opacity: 3s;
      background: linear-gradient(90deg,#fff 0,#fff 75%,transparent);

      &::before {
          content: "";
          position: absolute;
          top: 0;
          left: -5px;
          width: 2px;
          background-color: #000;
          height: 100%;
        }

        &:hover {         
          transition-duration: .1s;
          border-left: 2px solid #fff;
          border-top: 2px solid #fff;
          border-bottom: 2px solid #fff;
          background: linear-gradient(90deg,#05254e 0,#05254e 95%,rgba(5,32,72,1));        
          color: #ffffff;
        }                
    }
      @media(max-width: 1316px) {
        h2, h3 {
          display: none;
        }         

        img {
          width: 250px;
          height: 80px;
          margin: 0 auto;
          padding: 15px 0; 
          align-items: center;
          justify-content: center;
        }
      }
    }    
`

export const ContainerDown = styled.div`
  
  padding: 10px 0;
  border: 3px solid #81c3bf;
  text-decoration: none;
  background: -webkit-linear-gradient(bottom,#14af95,#03856f 35%,#02816c 50%,#058873 65%,#14af95);
  background: linear-gradient(0deg,#14af95,#03856f 35%,#02816c 50%,#058873 65%,#14af95);
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  transition: all .22s ease-in-out;
  -webkit-transition: all .22s ease-in-out;

  .side-bar {
    overflow: hidden;

    h2 {
      font-size: 1.3em;
      font-weight: 700;
      font-family: MyriadPro-Cond,Arial,sans-serif;
      text-transform: uppercase;
      color: #fff;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      text-align: center;

        &:hover {
          transform: scale(1.2);
          transition: .6s;
        }
    }

    img {
      object-fit: contain;
      position: absolute;
      width: 75px;
      height: 100px;
      margin-left: 32rem;
      margin-top: -50px;
      z-index: 1;
    }

      @media(max-width: 1316px) {
        img {
          margin-left: 1px;
        }
      } 

      @media(max-width: 750px) {
      img {
        margin-left: 1px;
      }
    } 
  }   
`;