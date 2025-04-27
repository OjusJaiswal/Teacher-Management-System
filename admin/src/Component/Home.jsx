import React from 'react'
import '../css/home.css'

function Home() {
  return (
    <>
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center">
              E MITRA<br></br> 
(Educator's Metadata Indexing and Transfer Request Automation)
              </h1>
              <p className="lead  text-center fs-4 mb-5">
              TMS serves both colleges and departments, providing a common system for academic staff and undergraduate students, and greater visibility of teaching provided to undergraduate students across the University. Key features of TMS:<br></br>

Managing college and department teaching across multiple teaching types (for example, classes, revision, and practicals)<br></br>
Allowing tutors to record and submit teaching hours easily, whether for a group of students or for an individual student<br></br>
Providing students with easy access to tuition reports<br></br>
Calculating incoming and outgoing payments for tutors, colleges, and departments<br></br>
Publishing department teaching arrangements (classes) for student self sign-up<br></br>
Allowing tutors and students to view all their own teaching arrangements<br></br>
Tracking teaching hours against college (and department) stints<br></br>
Reporting<br></br>
              </p>
              <div className="buttons d-flex justify-content-center">
                <button className="btn btn-light me-4 rounded-pill px-6 py-2">
                  Get Quote
                </button>
                <button className="btn btn-light me-4 rounded-pill px-15 py-2">Our Service</button>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Home
