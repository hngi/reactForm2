import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = {
    fName: "",
    lName: "",
    email: "", 
    // gender: "", 
    address: "", 
    bio:"",
  };
}

handleChange = (event) => {
  let value = event.target.value;
  this.setState({ 
    ...this.state,
    [event.target.name]: value
  });
};

handleSubmit = event => {
  event.preventDafault();
  console.log(this.state);
};

  render() {
    return (
      <>
        <section className=' flex flex-col md:flex-row justify-center items-center  max-w-full container mx-auto px-5 py-32 md:gap-16 space-y-10'>

          {/* form container */}
          <div className=' w-full max-w-md md:w-1/2 flex flex-col p '>
            <h1 className=' text-center text-white text-4xl'>Registration Form</h1>

            <form onSubmit={this.handleSubmit} className=' space-y-4  mt-16 w-full '>

              {/* first name */}
              <div className=' flex flex-col space-y-2 w-full'>
                <label htmlFor="fName">First Name</label>
                <input 
                  onChange={this.handleChange} 
                  type="text"
                  name="fName"
                  value={this.state.fName}
                  id="fName" 
                  placeholder='Firstname' 
                  className=' border-2 focus:outline-none w-full p-2 rounded-xl'
                />
              </div>

              {/* last name */}
              <div className=' flex flex-col space-y-2 w-full'>
                <label htmlFor="lName">Last Name</label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="lName" 
                  value={this.state.lName}
                  id="lName" 
                  placeholder='Last Name' 
                  className=' border-2 focus:outline-none w-full p-2 rounded-xl'
                />
              </div>

              {/* email */}
              <div className=' flex flex-col space-y-2 w-full'>
                <label htmlFor="email">Email</label>
                <input
                  onChange={this.handleChange} 
                  type="text" 
                  name="email" 
                  value={this.state.email}
                  placeholder='example@mail.com' 
                  id="email" 
                  className=' border-2 focus:outline-none w-full p-2 rounded-xl'
                />
              </div>

              {/* gender */}
              {/* <div className=' flex flex-col space-y-2 w-full'>
                <label htmlFor="gender">Gender</label>
                <div onChange={this.handleChange} value = {this.state.gender} id="gender">

                  <p>
                  <input
                    type="radio"
                    value="Male"
                    name="gender"
                    required  
                  /> Male </p>

                  <p>
                  <input
                    type="radio"
                    value="Female"
                    name="gender"
                  /> Female </p>

                  <p>
                  <input 
                    type="radio"
                    value="Other"
                    name="gender"
                  /> Other </p>

                </div>

              </div> */}


              {/* address */}
              <div className=' flex flex-col space-y-2 w-full'>
                <label htmlFor="address">Address</label>
                <input
                  onChange={this.handleChange} 
                  type="text" 
                  name="address" 
                  value={this.state.address}
                  id="address" 
                  placeholder='Address' 
                  className=' border-2 focus:outline-none w-full p-2 rounded-xl'
                />
              </div>


              {/* bio */}
              <div>
                <label htmlFor="bio">Bio</label>
                <textarea
                  className= ' h-32 w-full rounded-xl  focus:outline-none p-2'
                  name='bio'
                  value={this.state.bio}
                  onChange={this.handleChange}/>
              </div>

              {/* buttonf */}
              <button type='submit' className=' px-3 py-2 rounded-xl bg-blue-400 outline-none shadow-xl'>Submit</button>

            </form>
          </div>

          <div className=' max-w-md h-[50vh] w-full md:w-1/2 border-2 p-5 rounded-xl'>
            <div className='w-full text-white text-lg'>
              
              <h1>First Name: {this.fName}</h1>
              <h1>Last Name: {this.lName}</h1>
              <h1>Email Address: {this.email}</h1>
              <h1>Gender: {this.gender}</h1>
              <h1>Address: {this.address}</h1>
              <h1>Bio: {this.bio}</h1>

            </div>
          </div>
        </section>
                
      </>
    )
  }
}

export default Form
