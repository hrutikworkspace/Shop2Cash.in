import React from 'react'
import './Bestsellerpage.css';
import HeaderNew from '../HeaderNew/HeaderNew';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import FooterNew from '../FooterNew/FooterNew';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import MobileHeader from "../MobileHeader/MobileHeader";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Bestsellerpage=() =>{
  const mobsell = {
    nav: true,
  navText:["<i class='nav-btn5 prev-slide arrow-clr2 fa fa-chevron-left'></i>","<i class='nav-btn5 next-slide arrow-clr fa fa-chevron-right'></i>"],
  row: 2,
  arrows:true,
    margin: 30,
    responsiveClass: true,
   
    autoplay:false,
    autoplayTimeout: 5000,
    dots: false,
    
    smartSpeed: 1000,
    rewind: false,
    loop:true,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 5,
  
        }
    },
  };
  return (
    <>
   
    <MobileHeader/>
   
    <HeaderNew/>
    <div className='container-fluid bsp-container'>
    <div className='row'>
        <div className='col-12'>
    <nav aria-label="breadcrumb" className="main-breadcrumb bsp-2-link">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/HomePageSignup">
              Home</Link>
            </li>
            <li className="breadcrumb-item bsp-rmn">
              Realme Narzo 50i
            </li>
          </ol>
        </nav>
      
        <div className="row main-bspbox1">
           
                <div className='col-xl-3 col-md-6 col-sm-12 mobile-img1'>
                    <img className='narzo1' src='/Cashbackstore/image 29.png'/>
                    <div className='row bsp1-card-flex mobile-img2'>
                       <div className='col-3 narzo2-box'>
                       <img className='narzo2' src='/Cashbackstore/image 32.png'/>
                       </div>
                       <div className='col-4 narzo3-box'>
                       <img className='narzo3' src='/Cashbackstore/image 30.png'/>
                       </div>
                       <div className='col-3 narzo4-box'>
                       <img className='narzo4' src='/Cashbackstore/image 31.png'/>
                       </div>
                   </div>
                   
                </div>
                <div className='col-xl-4 col-md-6 col-sm-12 mobile-descrip'>
                  <p className='mobile-descrip1'>Realme Narzo 50i (Carbon Black, 2GB RAM, 32 GB Storage...)</p>
                  
                  <div className='row variant-color'>
                    <div className='col-xl-5 col-md-6 col-sm-12 variant'>
                         <p className='variant-descrip'>Choose Variant</p>
                         <div>
                          <button className="bsp-variantbutton">
                            32 | 2GB &nbsp;
                            <img
                              className="bsp-variantinsidebutton"
                              src="/withdraw/downarrow.png"
                            ></img>
                          </button>
                        </div>
                    </div>
                    <div className='col-xl-6 col-md-6 col-sm-12 color'>
                    <p className='color-descrip'>Choose Color</p>
                    <div>
                          <button className="bsp-colorbutton">
                            Carbon black &nbsp;{" "}
                            <img
                              className="bsp-colorinsidebutton"
                              src="/withdraw/downarrow.png"
                            ></img>
                          </button>
                        </div>
                    </div>
                     </div>
                     <div className='bsp-rating'>
                        <img src='/Cashbackstore/Star 1.png'/>
                        &nbsp;&nbsp;4.3/5 Ratings
                     </div>
                     <div className='bsp-cart'>
                      <ShoppingCartSharpIcon />
                      &nbsp;&nbsp; 259 people have purchased this order
                     </div>
                 
                  
                  

                  
                  
                    </div> 
                    <div className='col-xl-5 col-md-12 col-sm-12 amazon-button'>
                        <div className='amazon-box'>
                            <div className='bsp-amazonimg'>
                            <img className='bsp-amazonimg1' src='/amazon9.png'/>
                            </div>
                            <p className='para1'>Real price:  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <CurrencyRupeeIcon/><span className='bsp-slash'> 9999 </span>(20% off)</p>
                            <p className='para1'>Final price:  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;<CurrencyRupeeIcon/> 7999 </p>
                            <Link to="/CashBack">
                            <div className='bsp-playbutton'>
                                <button className='bsp-playbutton1'>Get deal and Play Game</button>
                            </div>
                            </Link>
                        </div>
                        </div>  
                             
           
            
          </div>
          <div className='row bsp-newdivide'></div>
          <div className='row main-bspbox2'>
           <div className='row key-box'>
            <div className='col-xl-8 col-md-12 col-sm-12 keyfeatures'>
               <div className='bsp-heading'>
                Key Features
               </div>
               <div className='row key-desc'>
                <div className='col-xl-3 col-md-4 col-sm-12  key-c1'>
                   <p className='key-c1p1'>Seller:<span className='bsp-bolddesc'> &nbsp;Amazon</span> </p>
                   <p className='key-c1p2'>Processor: <span className='bsp-bolddesc'> &nbsp;Octacore</span></p>
                   <p className='key-c1p3'>Primary camera: <span className='bsp-bolddesc'> &nbsp;8 MP</span></p>
                </div>
                <div className='col-xl-3 col-md-4 col-sm-12 key-c2'>
                <p className='key-c2p1'>Brand:<span className='bsp-bolddesc'> &nbsp;Realme</span> </p>
                   <p className='key-c2p2'>Screen size: <span className='bsp-bolddesc'> &nbsp;6.5 Inch</span></p>
                   <p className='key-c2p3'>Secondary camera: <span className='bsp-bolddesc'> 5 MP</span></p>
                    </div>
                    <div className='col-xl-4 col-md-4 col-sm-12 key-c3'>
                    <p className='key-c3p1'>Sim type:<span className='bsp-bolddesc'>  &nbsp;Dual sim</span></p>
                   <p className='key-c3p2'>Operating system:<span className='bsp-bolddesc'> &nbsp; Android 11</span></p>
                    </div>

               </div>
            </div>
            <div className='col-xl-4 col-md-12 col-sm-12 keyimage'>
                <img className='money-image' src='/Cashbackstore/bro.png'/>
            </div>
           </div>
           <div className='bsp-details'>
            Details
           </div>
           <div className='bsp-detailpara'>
            <p className='bsp-dpp1'>Lörem ipsum diplaliga kor omniexperience såsom Josefin Björk i track record Kenneth Sjögren. Okure seskap Hugo Johansson i solig. Metadata viktiga, nyckelord mick Britt Martinsson. Du kan vara drabbad. Autoling polingar Jonas Henriksson för innovationsprocess i parater. Magdalena Dahlberg kon i lade det vill säga vigun Anita Lindström i kav. Henrik Ali dekasise öktig och pol monov. Sonja Åberg bebina teler, Agnes Petersson. Malin Mattsson Lena Blomqvist stenor content marketing i far. Visual search Mona Svensson religen, sade. 
            </p>
            <p className='bsp-dpp2'>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; Dening siskap krofov när Märta Berg hån. ASMR egoser valogi i Ingemar Björk decis: hyposs. Kluster Emelie Olofsson i hexamös bemira så tetrafåbelt om Sandra Persson. Preskade proteras sygisk duling huruvida Gösta Hansson euledes. Astrid Jansson sor i nelär friktionsfri handel dorar. Samlarsyndrom pseudogon, Charlotta Åström Olov Gustafsson. Bioliga Charlotte Nordström personalisering inte kroryrade. Dosalig beledes konera nyplas kigoligen. Transparens får kovis i talpenna. Euroktig mötevis nesade decigovanera. Surad avöligt minen innovation temakonfirmation röstsamtal. Dil åsade jag jovis är social selling Caroline Engström perad. Pokarat Ingvar Åström inar trast: dektigt. Paragen infrajongen akutt medan kokinyst nideling. Hashtag spere outbound marketing antelingar men speck den. 
</p>
            <p className='bsp-dpp3'>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;Felicia Lundström orade beska prona lan. B2B buhokipp belut kroheten, relaterade artiklar, plus gamification. DALL·E heminera linkedIn exekvera. Du kan vara drabbad. Håkan hokerat Barbro Lundgren Gunnel Ahmed. Nesade ylogi i infrafina telesona ifall hemiledes, sest. Agnes Mohamed hootSuite Erik Ström egogosk Gunnar Wallin fav. 
</p>
           </div>
          </div>

          <div className='row bsp-divide'>
           <div className='col-12 bsp-divide1'>
           
                  <div className="best-featuredstore">
                    <h4>SIMILAR PRODUCTS</h4>
                  </div>
                
           </div>
          </div>

         <div className="row bsp-card-flex bsp-row2-common-p">
                <div className="col-xl-12">
                  <OwlCarousel {...mobsell} className="owl-theme">
                  <div className="mobile-cards">
                    <div className="mobile-card-body">
                      <img src="/Rectangle 20.png" />
                    </div>
                    <div className="card-bottom">
                      <div className="base-icons">
                        <img src="/Group 275.png" />
                        <p>Realme Narzo 50i (Carbon Black, 2GB <br></br> RAM, 32 GB Storage...)</p>
                        <div>
                          <span className="disc-span">9,999</span>
                          <span className="current-span">&#x20b9;7,999</span>
                          <span className="amount-off">(20% off)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mobile-cards">
                    <div className="mobile-card-body">
                      <img src="/Rectangle 20.png" />
                    </div>
                    <div className="card-bottom">
                      <div className="base-icons">
                        <img src="/Group 275.png" />
                        <p>Realme Narzo 50i (Carbon Black, 2GB <br></br> RAM, 32 GB Storage...)</p>
                        <div>
                          <span className="disc-span">9,999</span>
                          <span className="current-span">&#x20b9;7,999</span>
                          <span className="amount-off">(20% off)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mobile-cards">
                    <div className="mobile-card-body">
                      <img src="/Rectangle 20.png" />
                    </div>
                    <div className="card-bottom">
                      <div className="base-icons">
                        <img src="/Group 275.png" />
                        <p>Realme Narzo 50i (Carbon Black, 2GB <br></br> RAM, 32 GB Storage...)</p>
                        <div>
                          <span className="disc-span">9,999</span>
                          <span className="current-span">&#x20b9;7,999</span>
                          <span className="amount-off">(20% off)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mobile-cards">
                    <div className="mobile-card-body">
                      <img src="/Rectangle 20.png" />
                    </div>
                    <div className="card-bottom">
                      <div className="base-icons">
                        <img src="/Group 275.png" />
                        <p>Realme Narzo 50i (Carbon Black, 2GB <br></br> RAM, 32 GB Storage...)</p>
                        <div>
                          <span className="disc-span">9,999</span>
                          <span className="current-span">&#x20b9;7,999</span>
                          <span className="amount-off">(20% off)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mobile-cards">
                    <div className="mobile-card-body">
                      <img src="/Rectangle 20.png" />
                    </div>
                    <div className="card-bottom">
                      <div className="base-icons">
                        <img src="/Group 275.png" />
                        <p>Realme Narzo 50i (Carbon Black, 2GB <br></br> RAM, 32 GB Storage...)</p>
                        <div>
                          <span className="disc-span">9,999</span>
                          <span className="current-span">&#x20b9;7,999</span>
                          <span className="amount-off">(20% off)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mobile-cards">
                    <div className="mobile-card-body">
                      <img src="/Rectangle 20.png" />
                    </div>
                    <div className="card-bottom">
                      <div className="base-icons">
                        <img src="/Group 275.png" />
                        <p>Realme Narzo 50i (Carbon Black, 2GB <br></br> RAM, 32 GB Storage...)</p>
                        <div>
                          <span className="disc-span">9,999</span>
                          <span className="current-span">&#x20b9;7,999</span>
                          <span className="amount-off">(20% off)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mobile-cards">
                    <div className="mobile-card-body">
                      <img src="/Rectangle 20.png" />
                    </div>
                    <div className="card-bottom">
                      <div className="base-icons">
                        <img src="/Group 275.png" />
                        <p>Realme Narzo 50i (Carbon Black, 2GB <br></br> RAM, 32 GB Storage...)</p>
                        <div>
                          <span className="disc-span">9,999</span>
                          <span className="current-span">&#x20b9;7,999</span>
                          <span className="amount-off">(20% off)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  </OwlCarousel>
                 

                </div>
              
              </div>

        </div>
        </div>
    </div>
    <FooterNew/>
    </>
  )
}

export default Bestsellerpage