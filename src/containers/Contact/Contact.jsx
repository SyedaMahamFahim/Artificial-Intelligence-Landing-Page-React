import React from 'react'
import './contact.css'
// import "../App.css"

const Contact = () => {

    return (
        <>
            <section className="sections" id="contact">
                <h1 className="title">Contact </h1>

                <div className="container">
        <form action="">
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
          <textarea id="subject" name="subject" placeholder="Write something.." style={{height: '200px'}} defaultValue={""} />
          <input type="submit" defaultValue="Submit" />
        </form>
      </div>
      <br /><br/>
        
            </section>
         
        </>
    )
}
export default Contact