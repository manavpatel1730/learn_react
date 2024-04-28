import React from 'react'
import './About.css'

export default function AboutTextUtiles(props) {

    if(props.mode === 'dark'){
      props.setMode('light')
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'white'
       
        document.title = "TextUtiles-lightMode"
    }
    else{
        props.setMode('dark')
        document.body.style.backgroundColor = '#042743'
        document.body.style.color = 'black'
    
        document.title = "TextUtiles-darkMode"
    }

   
  return (
    <>
    
    <div className="conatiner" >
    {/* style={bgdark} */}
        <div className="card">
    <div className="card-body">
<div className="container">
    <div className="row justify-content-center">
        <div className="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn">
            <div className="card border-0 shadow">
                <img  className="aboutPhoto" />
                <div className="card-body p-1-9 p-xl-5">
                    <div className="mb-4">
                        <h3 className="h4 mb-0">Manav Patel</h3>
                        <span className="text-primary">Full stack web developer</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                        <li className="mb-3"><a href="#!"><i className="fa fa-envelope display-25 me-3 text-secondary"></i>manav1730@gmail.com</a></li>
                        <li className="mb-3"><a href="#!"><i className="fa fa-phone display-25 me-3 text-secondary"></i>+91 9725656017</a></li>
                        <li><a href="#!"><i className="fa fa-home display-25 me-3 text-secondary"></i>Surat, Gujarat, India</a></li>
                    </ul>
                    <ul className="social-icon-style2 ps-0">
                        <li><a href="https://www.instagram.com/_manav._11/" className="rounded-3"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="https://github.com/manavpatel1730" className="rounded-3"><i className="fa fa-github"></i></a></li>
                        {/* <li><a href="#!" className="rounded-3"><i className="fa fa-youtube"></i></a></li>
                        <li><a href="#!" className="rounded-3"><i className="fa fa-linkedin"></i></a></li> */}
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-lg-8">
            <div className="ps-lg-1-6 ps-xl-5">
                <div className="mb-5 wow fadeIn">
                    <div className="text-start mb-1-6 wow fadeIn">
                        <h2 className="h1 mb-0 text-primary">About Me</h2>
                    </div>
                    <p>I am a passionate full-stack developer with a strong foundation in both front-end and back-end technologies. My expertise includes designing responsive and intuitive user interfaces using modern JavaScript frameworks like  Angular, and React. On the back end, I excel in creating scalable and efficient APIs using .net Framework. With a keen eye for detail and a focus on performance, I strive to deliver high-quality solutions that meet both user needs and business objectives</p>
                    {/* <p className="mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p> */}
                </div>
                <div className="mb-5 wow fadeIn">
                    <div className="text-start mb-1-6 wow fadeIn">
                        <h2 className="mb-0 text-primary">Education</h2>
                    </div>
                    <div className="row mt-n4">
                        <div className="col-sm-6 col-xl-4 mt-4">
                            <div className="card text-center border-0 rounded-3">
                                <div className="card-body">
                                    <i className="fa fa-bookmark icon-box medium rounded-3 mb-4"></i>
                                    <h3 className="h5 mb-3">Education</h3>
                                    <p className="mb-0">Studying Bachelor of Information Technology</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-4 mt-4">
                            <div className="card text-center border-0 rounded-3">
                                <div className="card-body">
                                    <i className="fa fa-pencil icon-box medium rounded-3 mb-4"></i>
                                    <h3 className="h5 mb-3">Career Start</h3>
                                    <p className="mb-0">After complete I.T joined Gdev Technologies as an Intern</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-4 mt-4">
                            <div className="card text-center border-0 rounded-3">
                                <div className="card-body">
                                    <i className="fa fa-star icon-box medium rounded-3 mb-4"></i>
                                    <h3 className="h5 mb-3">Experience</h3>
                                    <p className="mb-0">About 3 months of ecperience as an Intern</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wow fadeIn">
                    <div className="text-start mb-1-6 wow fadeIn">
                        <h2 className="mb-0 text-primary">Skills &amp; Experience</h2>
                    </div>
                    <p className="mb-4">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                    <div className="progress-style1">
                        <div className="progress-text">
                            <div className="row">
                                <div className="pb-2 fw-bold">Front-end</div>
                                <div className="pb-3">HTML,CSS,JS,TypeScript, JavaScript</div>
                            </div>
                        </div>
                        <div className="progress-text">
                            <div className="row">
                                <div className="pb-2 fw-bold">Back-end</div>
                                <div className="pb-3">C#</div>
                            </div>
                        </div>
                        <div className="progress-text">
                            <div className="row">
                                <div className="pb-2 fw-bold">Framework</div>
                                <div className="pb-3">Bootstreap,Tailwind,Angular, React.js</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
{/* <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={bgdark}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne "style={bgdark}> 
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={bgdark}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={bgdark}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={bgdark}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={bgdark}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="container"> 
   <button onClick={toggleStyle} type="button" className="btn btn-primary my-2">{btntext}</button>
   </div>

</div> */}
    </div>
    </>
  )
}
