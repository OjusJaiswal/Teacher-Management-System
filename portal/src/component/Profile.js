import React from 'react'
import './Profile.css'
export default function Profile() {
  return (
     <>
    <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={"https://apspune.com/images/website/MainPage/Principal.jpg"} alt="profilepic"/>
                            
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                    Mrs Anita Sharma
                                    </h5>
                                    <h6>
                                        Principal
                                    </h6>
                                    <p className="proile-rating">M.A(History) M.Ed</p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"aria-selected="true">About</a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                   {/* <div className="col-md-2">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                   </div> */}
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>WORK LINK</p>
                            <a href="https://apspune.com">Website Link</a><br/>
                        </div>
                    </div>
                    <div className="col-md-8 pl-5 about-info">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home-tab" role="tabpanel" arialabelledby="home-tab ">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Employee Id</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>0001</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Mrs Anita Sharma</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>AnitaSharma@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>123 456 7890</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Designation</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Principal</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>30 years</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Salary</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>₹90000</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Year in service</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>29 years</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>English Proficiency</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Available</p>
                                            </div>
                                        
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </form>           
        </div>
        </>
    
  )
}
