import React from "react";
export default function Footer(props) {
return (
    <>
        
<footer className="text-center text-lg-start  text-muted">
 
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
  
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <a href="\" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="\" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="\" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="\" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="\" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="\" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>

  </section>



  <section className="\">
    <div className="container text-center text-md-start mt-5">

      <div className="row mt-3">

        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>GET SRC
          </h6>
          <p>
            Get SRC is all about, make the findings eaisier. 
            get latest technology project from GET SRC
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Projectes 
          </h6>
          <p>
            <a href="\" className="text-reset">Python</a>
          </p>
          <p>
            <a href="\" className="text-reset">Java</a>
          </p>
          <p>
            <a href="\" className="text-reset">JavaScript</a>
          </p>
          <p>
            <a href="\" className="text-reset">Php</a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
  
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="https://www.instagram.com/getsrcstudio" className="text-reset"><i class="fa fa-instagram" aria-hidden="true"></i>instagram</a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/getsrcstudio" className="text-reset"><i class="fa fa-linkedin" aria-hidden="true"></i>linkedin</a>
          </p>
          <p>
            <a href="https://www.youtube.com/@getsrcstudio" className="text-reset"><i class="fa fa-youtube-play" aria-hidden="true"></i>youtube</a>
          </p>
          
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          
          <p>
            <i className="fas fa-envelope me-3"></i>
            getsrc.info@gmail.com
          </p>
          <p><i className="fas fa-phone me-3"></i> 9654614112</p>
          <p><i className="fas fa-print me-3"></i> 8750687107</p>
        </div>
    
      </div>
   
    </div>
  </section>


  <div className="text-center p-4" style={{backgroundColor:"rgba(0, 0, 0, 0.05)"}}>
    © 2023 Copyright:
    <a className="text-reset fw-bold" href="www.getsrc.tech">getsrc.tech</a>
  </div>

</footer>

   </>
  );
    }