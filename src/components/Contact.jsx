import React, { useState, useEffect, useRef } from "react";

//importt SMPT mailer
import emailjs, { send } from "emailjs-com";


    
function Contact() {

    //start useState variables
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [isSend, setIsSend] = useState(false);
    //end useState variables

    const form = useRef();

    //when the "name" field is changed, the danger message disappears
    useEffect(() => {
        document.getElementById("name").classList.remove("inputText")
        setIsValid(false);
    }, [inputName])

    //when the "email" field is changed, the danger messaje disappears

    useEffect(() => {
        document.getElementById("email").classList.remove("inputText")
        setIsValid(false)
    }, [inputEmail])

    const toggleSent = () => {
        setIsSend(!isSend)
    }

    //checking data validity and clearing fields

    const chekTextInput = () => {
        if(inputName === "" && inputEmail === "") {
            document.getElementById("name").classList.add("inputText");
            document.getElementById("email").classList.add("inputText");
            return setIsValid(true);
        } else if (inputName === "") {
            document.getElementById("email").classList.remove("inputText");
            document.getElementById("name").classList.add("inputText");
            return setIsValid(true);
        } else if ((inputEmail === "" && !inputEmail.includes("@")) || !inputEmail.includes("@")) {
            document.getElementById("name").classList.remove("inputText");
            document.getElementById("email").classList.add("inputText");
            return setIsValid(true);
        } else {
            toggleSent();
            setTimeout(() => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                document.getElementById("sendBtn").disabled = true;
            }, 10)
        }
    };

    //SMTP method

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            "service_z9qexqc",
            "template_sv50a22",
            form.current,
            "whS842PxFpIIFtv3p"
        )

        .then(
            (result) => {
                console.log(result.text);
                setIsSend(false); // Set isSend back to false after successful submission
            },
            (error) => {
                console.log(error.text)
            }    
        );
    };


    return (
        <section id="contact">
            <div className="contact-container">
                <div className="salut">
                    <h2>Just say hello.</h2>
                    <p>I'm always ready to work on new projects.</p>
                    <div className="mail">
                        <h6>Mail me at</h6>
                        <span>dciubari@gmail.com</span>
                    </div>
                </div>
                <form className="form" ref={form} onSubmit={sendEmail}>
                    <div className="inputs">
                        <input 
                            type="text" 
                            id="name"
                            name="user_name"
                            placeholder="Your name" 
                            readOnly={isSend ? true : false}
                            required
                            onChange={(e) => setInputName(e.target.value)}
                        />
                        <input 
                            type="email" 
                            id="email"
                            name="user_email"
                            placeholder="Your email address" 
                            readOnly={isSend ? true : false}
                            required
                            onChange={(e) => setInputEmail(e.target.value)}
                        />
                        <textarea 
                            placeholder="Your project description" 
                            rows="7" 
                            cols="50"
                            name="message"
                            id="message"
                            readOnly={isSend ? true : false}
                        />
                        {isValid && (
                            <span>
                                One ore more fields have an error. Please check and try again
                            </span>
                        )}
                    </div>
                    <div className="contact-btn">
                        <button
                            id="sendBtn"
                            onClick={() => {
                                chekTextInput();
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>    
    );
};

export default Contact;