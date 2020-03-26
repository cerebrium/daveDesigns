import React, { useState } from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import '../components/layout.scss'

const Contact = () => {
  const [ status, setStatus ] = useState('')

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS") 
    } else {
        setStatus("ERROR")
    }
    };
    xhr.send(data);
  }

  return (
    <div className='overallDiv'>
      <SEO title="Home" />
      <div className='navBar'>
          <div className='dropDownHamburger'>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
          <div className='dropDownContent'>
            <div className='linkStyle'>
              <Link to="/" className='links'>Home</Link>
            </div>
            <div className='linkStyle'>
              <Link to="/products/" className='links'>Products</Link>
            </div>
          </div>
        </div>
      <div className='contentTwo'>
        <h1>Contact Me</h1>
        <div className='contact'>
          <form onSubmit={submitForm} action='https://formspree.io/meqelkae' method="POST" className='myForm'>
              <label className='labels'>Name:</label>{'  '}
              <input type="text" name="name" className='inputBars'/><br/>
              <label className='labels'>Email:</label>{'  '}
              <input type="email" name="email" className='inputBars'/><br/>
              <label className='labels'>Message:</label>
              <textarea type="textarea" rows='15' cols='16' name="message" className='myTextArea'></textarea><br/>
              {status === "SUCCESS" ? <p>Thanks!</p> : <button >Submit</button>}
              {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
