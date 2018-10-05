import React from 'react'
import blog from '../images/blog.jpeg';
import influencer from '../images/influencer.jpeg';
import brand from '../images/brand.jpeg';
import hearts from '../images/hearts.jpeg';

const Profiles = () => (
    
    <section 
    className="
    row no-gutters 
    justify-content-center 
    profiles"
    >

        <h4 className="col-12 text-center  
        bold upcase 
        mt50 mb50 "
        >
        è adatto al mio profilo?
        </h4>

        {/* block */}

        <div 
        className="
        col-10 col-sm-8 
        col-md-4 col-lg-3 
        card mb50 mt50 "
        >

            <div 
            className="
            row card-body 
            zero justify-content-center"
            >

                <div 
                className="
                background-card  
                mb15 col-12"
                style={{
                background:`url(${blog}`, 
                backgroundPosition: 'contain'
            }} 
                >
                </div>

                <h5 
                className="
                col-12 text-center 
                bold upcase mt15"
                >
                Blogger
                </h5>

                <p 
                className="
                col-10 text-center 
                mt15 mb15"
                >

                    Vorresti aumentare il numero delle interazioni con gli altri utenti di Instagram , senza rinunciare alla naturalezza del tuo profilo?
                    <span 
                    className="
                    bold"
                    >
                    InstaFlow
                    </span>
                     fa al caso tuo!

                </p>

                <div className="w-100">
                </div>

                <button 
                className="
                btn btn-outline-success 
                mb15 mt15"
                >
                    Prova ora
                </button>
            </div>
            
        </div>
        {/* --block */}

        {/* block2 */}

        <div 
        className="
        col-10 col-sm-8 
        col-md-4 col-lg-3 
        card mb50 mt50 "
        >

        <div 
        className="
        row card-body zero 
        justify-content-center"
        >
            <div 
            className="
            background-card  
            mb15 col-12" 
            style={{
            background:`url(${influencer}`
        }} 
            >
            </div>
            <h5 
            className="
            col-12 text-center 
            bold upcase mt15"
            >
            Influencer</h5>

            <p 
            className="
            col-10 text-center 
            mt15 mb15"
            >

                Vorresti aumentare il numero delle interazioni con gli altri utenti di Instagram , senza rinunciare alla naturalezza del tuo profilo?
                <span 
                className="
                bold"
                >
                InstaFlow
                </span> 
                fa al caso tuo!

            </p>

            <div className="w-100">
            </div>

            <button 
            className="
            btn btn-outline-success 
            mb15 mt15"
            >
                Prova ora
            </button>
        </div>

        </div>

        {/* --block2 */}

        {/* block3 */}

        <div 
        className="
        col-10 col-sm-8 
        col-md-4 col-lg-3 
        card mb50 mt50 "
        >

            <div 
            className="
            row card-body 
            zero justify-content-center"
            >

                <div 
                className="
                background-card  
                mb15 col-12" 
                style={{
                background:`url(${brand}`
                }}
                 >
                </div>

                <h5 
                className="
                col-12 text-center 
                bold upcase mt15"
                >
                Brand
                </h5>

                <p 
                className="
                col-10 text-center 
                mt15 mb15"
                >

                    Vorresti aumentare il numero delle interazioni con gli altri utenti di Instagram , senza rinunciare alla naturalezza del tuo profilo?
                    <span 
                    className="
                    bold"
                    >
                    InstaFlow
                    </span> fa al caso tuo!

                </p>

                <div className="w-100">
                </div>

                <button 
                className="
                btn btn-outline-success 
                mb15 mt15"
                >
                    Prova ora
                </button>
            </div>
            
        </div>

        {/* --block3 */}

    </section>

)

export default Profiles;