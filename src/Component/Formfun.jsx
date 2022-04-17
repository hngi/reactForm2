import React from 'react'

const Formfun = () => {

  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }

  return (
    <>
      <section className=' flex flex-col md:flex-row justify-center items-center  max-w-full container mx-auto px-5 md:gap-16'>

        {/* form container */}
        <div className=' w-full max-w-md md:w-1/2 flex flex-col p '>
          <h1 className=' text-center text-white text-4xl'>Registration Form</h1>

          <form onSubmit={this.handleSubmit} className=' space-y-4  mt-16 w-full '>

            {/* first name */}
            <div className=' flex flex-col space-y-2 w-full'>
                <label htmlFor="fName">First Name</label>
                <input onChange={this.handleChange} type="text" name="fName" id="fName" placeholder='Firstname' className=' border-2 focus:outline-none w-full p-2 rounded-xl'/>
            </div>

            {/* last name */}
            <div className=' flex flex-col space-y-2 w-full'>
              <label htmlFor="lName">Last Name</label>
              <input type="text" name="lName" id="lName" placeholder='Last Name' className=' border-2 focus:outline-none w-full p-2 rounded-xl'/>
            </div>

            {/* email */}
            <div className=' flex flex-col space-y-2 w-full'>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder='example@mail.com' id="email" className=' border-2 focus:outline-none w-full p-2 rounded-xl'/>
            </div>
            {/* gender */}
            <div className=' flex flex-col space-y-2 w-full'>
              <label htmlFor="gender">Gender</label>

            </div>
            {/* address */}
            <div>
              <label htmlFor="address">Address</label>

            </div>


            {/* bio */}
            <div>
              
            </div>


            <button className=' px-3 py-2 rounded-xl bg-blue-400 outline-none shadow-xl'>Submit</button>
          </form>
        </div>

        <div className=' max-w-md h-[90vh] border-2 flex justify-center items-center'>
          <div className='w-full'>
            
            <h1>{this.state.value}</h1>

          </div>
        </div>
      </section>
              
    </>
  )
}

export default Formfun