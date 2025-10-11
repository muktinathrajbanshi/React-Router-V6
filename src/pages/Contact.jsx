import "./contact.css";
import { Form } from "react-router-dom";

export const contactData = async () => {
    try {
        
    } catch (error) {
        console.log(error);
        
    }
}

export const Contact = () => {
    return (
        <>
            <section className="container section-contact">
                <div className="container">
                    <h2 className="section-common--heading">contact us</h2>
                    <p>
                        Get in touch with us. We are always here to help you.
                    </p>
                </div>

                <div className="grid grid-two--cols">
                    <div className="contact-content">
                        <Form method="POST" action="/contact">
                            <div className="grid grid-two-cols mb-3">
                                <div className="input-field">
                                    <label htmlFor="username">full name</label>
                                    <input 
                                    type="text" 
                                    name="username" 
                                    id="username"  
                                    required
                                    autoComplete="off"
                                    placeholder="enter full name"
                                    />
                                </div>

                                <div className="input-field">
                                    <label htmlFor="username">email address</label>
                                    <input 
                                    type="email" 
                                    name="email" 
                                    id="email"  
                                    required
                                    autoComplete="off"
                                    placeholder="xyz@.com"
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="message">message</label>
                                <textarea
                                 name="message"
                                  id="message"
                                  cols="30"
                                  rows="10"
                                  placeholder="we are always here to help you."
                                  ></textarea>
                            </div>
                            <div className="mb-3">
                            <button>Send Message</button>
                            </div>
                           
                        </Form>
                    </div>
                </div>
            </section>
        </>
    )
};