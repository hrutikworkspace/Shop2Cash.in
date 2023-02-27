import React, {useState, useEffect} from "react";
import "./MobileHeader.css";
import { Link ,useNavigate} from "react-router-dom";

const MobileHeader = () => {

  const [fix, setFix] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setFix(window.scrollY > 0);
      console.log(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  
  return (
    <div className="hide stickey">
      <div className="container-flex " style={{width:"100%"}}>
        <div className="row">
          <div className="col-6">
            <div className="mobile-1col">
              <Link to="/HomePageSignup">
              <img src="/MobileHeader/fullimg.png"/>
                
              </Link>
            </div>
          </div>
          <div className="col-6">
            <div className="mobile-2col">
              <img src="/MobileHeader/Vector.png" /> &nbsp;&nbsp;
              <Link to="/AllStorePage" className="mobile-text">All stores
                {/* <a href="#" className="mobile-text">All stores</a> */}
              </Link>
            </div>
          </div>
        </div>
        <div className="row" style={{paddingTop: "1rem"}}>
            <div className="col-12">
            <div className="mobile-3col">
              <form className="">
                <div className="ps-3 input425">
                  {/* <i className="fa fa-search icons" aria-hidden="true"></i> */}
                  <input
                    className="form-control input-check1 me-2"
                    type="search"
                    placeholder="Search anything you need"
                    aria-label="Search"
                  />
                </div>
              </form>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
