import meimg from "../img/meimg.png";
import puzzle from "../img/more-img/puzzle.png";
import dance from "../img/more-img/dance.png";
import gaming from "../img/more-img/gaming.png";
import croshet from "../img/more-img/croshet.jpg";

function More() {
    return (
        <div id="more">
            <section className="history">
                <div className="first-row">
                    <figure>
                        <img src={meimg} alt="My photo" />
                    </figure>
                    <div className="more-text">
                        <div className="titles">
                            <h2>Hello!</h2>
                            <h3>I'm <span>Daniela</span></h3>
                        </div>
                        <p>
                            My journey into the world of web development began around three years ago when I was still in high school. Initially, programming was far from my mind, but it all changed when we had a few lessons on HTML and CSS. I found myself genuinely captivated by these topics, but unfortunately, I forgot about them soon after.
                        </p>
                        <p>
                            However, fate had other plans for me. One day, I happened to strike up a conversation with my older brother, who is a software engineer. As we talked, the subject of web development emerged, and he decided to give me a glimpse into this exciting field. He patiently taught me the basics of HTML and CSS, knowledge that I continue to apply even to this day.
                        </p>
                        <p>
                            That essential day with my brother inspired me to pursue a career as a web developer. After completing high school, I gladly enrolled in the academy where I am currently studying, determined to deepen my skills and knowledge in this field.
                        </p>
                    </div>
                </div>
                <div className="second-row">
                    <p>
                        As a student in the field, I'm constantly expanding my knowledge and sharpen my skills in various web technologies. From front-end development using HTML, CSS, and JavaScript, to back-end development with frameworks like Node.js and databases like MySQL, I'm dedicated to mastering every aspect of creating dynamic and user-friendly websites.
                    </p>
                    <p>
                        Aside from coding, I'm also passionate about staying up-to-date with the latest web development trends and technologies. I believe that continuous learning is crucial in such a rapidly evolving field, and I'm always seeking new opportunities to expand my knowledge. 
                    </p>
                    <p>
                        On this page, you'll find updates on my projects, insights into my learning process, and valuable resources that I come across during my journey. I hope to inspire and connect with fellow web developers, learners, and anyone who shares the same enthusiasm for this exciting field. 
                    </p>
                    <p>
                        Thank you for visiting my page, and I invite you to join me on this amazing adventure as we explore the world of Full Stack Web Development together!
                    </p>
                </div>
            </section>

            <section className="hobbies">
                <h1>Hobbies</h1>
                <div className="hobbies-container">
                    <div className="hobby">
                        <img src={croshet} alt="Crochet" />
                        <h3>Crocheting</h3>
                    </div>
                    <div className="hobby">
                        <img src={dance} alt="Dance" />
                        <h3>Dance</h3>
                    </div>
                    <div className="hobby">
                        <img src={gaming} alt="Gaming" />
                        <h3>Gaming</h3>
                    </div>
                    <div className="hobby">
                        <img src={puzzle} alt="Puzzle" />
                        <h3>Puzzle</h3>
                    </div>
                </div>
            </section>
        </div>    
    )
}

export default More;