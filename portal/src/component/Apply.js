import React,{useState} from "react";
const Apply = ()=> {
  const [showForm,setShowForm ]=useState(false);
  const handleSumit=(e) =>
  {
  e.preventDefault();
  }
  return(
    <React.Fragment>
      {showForm ? (
      <form onSubmit={handleSumit}>
         


        <div  className="fprm-group">
          <label >Name / नाव</label>
          <input type="text"  className="form-control" ></input>
          <br></br>
        </div>
        <div>
          <label>Reason For transfer / हस्तांतरणाचे कारण</label>
          <input type="text"  className="form-control" ></input>
          <br></br>
        </div>
        <div>
          <label>School Name / शाळेचे नाव</label>
          <input type="text"  className="form-control" ></input>
          <br></br>
        </div>
        <div>
          <label>Place of transfer / हस्तांतरणाचे ठिकाण</label>
          <input type="text"  className="form-control" ></input>
          <br></br>
        </div>

        <button type="submit"  onClick={()=>setShowForm(false)}>Submit Application </button>
       
        </form>
      
        ) :
        (
          <button className="btn btn-sm btn-primary" onClick={() => setShowForm(true )}>Apply Now</button>
        )}
        </React.Fragment>  

        
         

   
  );

};
export default Apply;
