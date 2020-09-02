import React, { useState } from 'react';



const Contact = () => {
const [data,setData] = useState({
  fullname:'',
  phone:'',
  email:'',
  msg:'',
});

const InputEvent = (event) =>{
  const {name,value}=event.target;
  setData((preVal) =>{
    return{
      ...preVal,
      [name]:value
    }
  })
}

  const formSubmit = (e) =>{
    e.preventDefault();
    alert(`My name is ${data.fullname}.My phone number is ${data.phone}.My email is ${data.email}. My message is ${data.msg}.`);


  };
  return (
    < >
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row" >
          <div className="col-md-6 col-10 mx-auto" >
            <form onSubmit={formSubmit}>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                    Fullname
                    </label>
                    <input 
                      type="text" 
                      class="form-control" 
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                      id="exampleInputEmail1" 
                      placeholder='Enter your name'/>
                    
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                    Phone
                    </label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="exampleInputEmail1" 
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                      placeholder='Mobile Number'/>
                    
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                    Email address
                    </label>
                    <input 
                      type="email" 
                      class="form-control" 
                      id="exampleInputEmail1" 
                      name="email"
                      value={data.email}
                      onChange={InputEvent}
                      placeholder='name@example.com'/>
                    
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                    Message
                    </label>
                    <textarea 
                      type="email" 
                      class="form-control" 
                      id="exampleInputEmail1" 
                      name="msg"
                      value={data.msg}
                      onChange={InputEvent}
                      placeholder='Write your message...'/>
                    
                  </div>
                  <div className="col-12">
                    <button className="btn btn-outline-primary" type="submit">
                      Submit Form
                    </button>
                  </div>


            </form>


          </div>
           
        </div>

      </div>

    </>
  );

};

export default Contact;
