function Contact() {
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
                <form className="form">
                    <div className="inputs">
                        <input type="text" placeholder="Your name" />
                        <input type="text" placeholder="Your email address" />
                        <textarea placeholder="Your project description" rows="4" cols="50"/>
                    </div>
                    <div className="contact-btn">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </section>    
    );
};

export default Contact;