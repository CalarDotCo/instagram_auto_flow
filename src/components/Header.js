import React from 'react'
import logo from '../images/flowlogo.png';
import phone from '../images/phone.png';

const Header = () => (
    <header className="row no-gutters instaBackground justify-content-center">
        
          <img src={logo} 
          alt="logo" 
          className="align-self-start col-4 col-sm-3 col-lg-1 mx-auto mt50 "
          draggable="false"
          />

          <div className="w-100 zero">
          </div>

          


          <div className="col-12 col-md-10 col-lg-5 h-50 align-self-center">
            <div className="
            row no-gutters 
            justify-content-center
            d-flex align-self-center
            align-items-center 
            h-50
            mt50 mb50"
            >

            
                <h1 className="col-10  col-sm-12 text-center white f35 mt50">
                Instagram <span>Pro</span> Kit
                </h1>

                  <h2 className="col-10 text-center white light f20 mt15 mb15 ">
                  Aumenta i tuoi followers su Instagram
                  e inizia a guadagnare con il tuo profilo
                  </h2>

                <div className="w-100 zero"></div>
                
                <button 
                  className="btn white mt15  ">
                    Comincia
                </button>
              
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-10 col-lg-5">
            <div className="row no-gutters  d-flex justify-content-center">
              <img src={phone} 
                alt="logo" 
                className=" mt50 col-8 align-self-center"
                draggable="false"
              />
            </div>
            
          </div>
        </header>
)

export default Header;