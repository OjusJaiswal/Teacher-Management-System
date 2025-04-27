import React from 'react'

export default function Home() {
  return (
    <>
     <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center">
              Teacher Portal
              </h1>
              <p className="lead  text-center fs-4 mb-5">
              By logging into their personal account, teachers are able to view customized information, regarding the classes assigned to them. Among other things, they’re able to view student profiles, scheduled lessons and events, as well as notes added by admins. Actions involve taking attendance, creating gradebooks and assessments and communicating with students and guardians.<br></br> 

Personalized Calendar <br></br> 
Class related information: gradebooks, assessments and performance data <br></br> 
Communication with students, parents and guardians<br></br> 
Attendance tracking <br></br> 
Reports and summarized information<br></br> 
              </p>
              <div className="buttons d-flex justify-content-center">
                <button className="btn btn-light me-4 rounded-pill px-4 py-2">
                  Get Quote
                </button>
                <button className="btn btn-light me-4 rounded-pill px-4 py-2">Our Services</button>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
