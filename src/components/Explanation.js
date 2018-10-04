import React from 'react'

const Explanation = () => (

    <section className="row no-gutters">

        <div className="col-12 instaBackground">

            <div className="row no-gutters justify-content-center">
                <h3 className="col-12 text-center mb50 mt50 white bold upcase f35">Come funziona</h3>
                <div className="col-10 col-sm-5 col-md-4 card margined mt50 mb50">
                    <div className="row no-gutters card-body ">

                        <i className="fas fa-2x fa-user-plus"></i>
                        <h4 className="col-12 text-center">Follower</h4>
                        <p className="col-12 text-center">Scegli che tipologia di follower desideri</p>

                    </div>
                </div>
                

                <div className="col-10 col-sm-5 col-md-4 card margined  mt50 mb50">
                    <div className="row no-gutters card-body">

                        <i className="fas fa-2x fa-search-location"></i>
                        <h4 className="col-12 text-center">Location</h4>
                        <p className="col-12 text-center">Scegli la zona in cui vorresti follower</p>

                    </div>
                </div>
                
                <div className="w-100"></div>

                <div className="col-10 col-sm-5 col-md-4 card margined  mt50 mb50">
                    <div className="row no-gutters card-body">
                        <i className="fas fa-2x fa-hashtag"></i>
                        <h4 className="col-12 text-center">Hastag</h4>
                        <p className="col-12 text-center">Individua gli hastad di tuo interesse</p>
                    </div>
                </div>

                <div className="col-10 col-sm-5 col-md-4 card margined  mt50 mb50">
                    <div className="row no-gutters card-body">
                        <i className="fas fa-2x fa-grin-hearts"></i>
                        <h4 className="col-12 text-center">Goditi lo spettacolo</h4>
                        <p className="col-12 text-center">Avvio del servizio sul tuo profilo</p>
                    </div>
                </div>

            </div>

        </div>
 
    </section>    

)

export default Explanation;