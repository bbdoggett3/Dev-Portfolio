import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';

function SkillsMore() {
     const [showSkill, setShowSkill] = useState(false);
     const [showHTML, setHTML] = useState(false);
     
     function toggleShowSkill() {
          setShowSkill(!showSkill);
     }

     function toggleHTML() {
          setHTML(!showHTML);
     }

    return(
        <div className="skills-more-container">
             <Nav/>
            <div className="skills-more-content">
                <h2 className="skills-heading">Skills</h2>
                
                <div className="skills">
                <img className="skills-images"
                         src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fjavascript-icon.png?v=1594835510447" 
                         alt="javascript logo"
                         onClick={() => toggleShowSkill()}   
                    />

                    <div className= {`${showSkill ? "skill-open" : "skill-closed"}`}>
                         <div className="skill-open-container">
                              <img className="exit-btn-img"
                                   src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fexit-%20trans.png?v=1596319300952" 
                                   alt="exit"
                                   onClick={() => toggleShowSkill()}
                              />
                              <div className="skill-title-display">
                                   <img className="skill-image-open"
                                        src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fjavascript-icon.png?v=1594835510447" 
                                        alt="javascript logo"
                                   />
                                   <h1 className="skill-name">JavaScript</h1>
                              </div>
                              <h3 className="skill-what-is-header">What is JavaScript?</h3>
                              <p className="skill-description">JavaScript is the Programming Language for the Web. It can update and change both HTML and CSS. Lastly, it can calculate, manipulate and validate data. </p>
                              <h3 className="skill-what-is-header">Personal Application</h3>
                              <p className="skill-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed </p>

                         </div>
                    </div>


                    <img className="skills-images"
                         src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fhtml.png?v=1596218814366" 
                         alt="html logo"
                         onClick={() => toggleHTML()}
                    />

                    <div className= {`${showHTML ? "skill-open" : "skill-closed"}`}>
                         <div className="skill-open-container">
                              <img className="exit-btn-img"
                                   src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fexit-%20trans.png?v=1596319300952" 
                                   alt="exit"
                                   onClick={() => toggleHTML()}
                              />
                              <div className="skill-title-display">
                                   <img className="skill-image-open"
                                        src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fhtml.png?v=1596218814366" 
                                        alt="html logo"
                                   />
                                   <h1 className="skill-name">HTML5</h1>
                              </div>
                              <h3 className="skill-what-is-header">What is HTML5?</h3>
                              <p className="skill-description">Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript. </p>
                              <h3 className="skill-what-is-header">Personal Application</h3>
                              <p className="skill-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed </p>

                         </div>
                    </div>

                    {/* Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. */}
                    <img className="skills-images"
                         src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FCss.png?v=1596218908795" 
                         alt="css logo"
                    />
                    {/* Sass stands for Syntactically Awesome Stylesheet. Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. It also creates less redundancy in your CSS */}
                    <img className="skills-images"
                         src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FSass.png?v=1596219226957" 
                         alt="Sass logo"
                    />
                    {/* Is a React library that manages the dom and builds user interfaces */}
                    <img className="skills-images"
                         src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fanother%20react%20logo.png?v=1596218569826" 
                         alt="React logo"
                    />
                    <img className="skills-images"
                         src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Ftransparent-redux.png?v=1596220030381" 
                         alt="Redux logo"
                    />
                    <img className="skills-images"
                         src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fnode-js-icon.png?v=1595265649911" 
                         alt="Node.js logo"
                    />
                    <img className="skills-images"
                         src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fpostgresql.png?v=1596219016467" 
                         alt="PostgreSQL logo"
                    />
                    <img className="skills-images"
                         src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fc-plus-plus-icon.png?v=1596220674591" 
                         alt="C++ logo"
                    />
                    <img className="skills-images"
                         src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fexpress-trans.png?v=1596220775101" 
                         alt="Express logo"
                    />
                    <img className="skills-images"
                         src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Ftypescript.png?v=1596221304253" 
                         alt="TypeScript logo"
                    />
                    <img className="skills-images"
                         src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FOracle.png?v=1596221469054" 
                         alt="Oracle logo"
                    />
                    <img className="skills-images"
                         src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fjava-trans.png?v=1596221667763" 
                         alt="Java logo"
                    />
                    <img className="skills-images"
                         src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fgit-trans.png?v=1596221894753" 
                         alt="Git logo"
                    />
                    <img className="skills-images"
                         src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fphp.png?v=1597081971654" 
                         alt="PHP logo"
                    />
                    <img className="skills-images"
                         src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FVue.png?v=1597081543362" 
                         alt="Vue.js logo"
                    />
                    <img className="skills-images"
                         src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fgolang.png?v=1597082261848" 
                         alt="Go logo"
                    />
                    <img className="skills-images"
                         src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fpostman.png?v=1597082394179" 
                         alt="Postman logo"
                    />
                    <img className="skills-images"
                         src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fandroid%20tran.png?v=1597083482349" 
                         alt="Android logo"
                    />
                    <img className="skills-images"
                         src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fheroku%20trans.png?v=1597083610683" 
                         alt="Heroku logo"
                    />
                    <img className="skills-images"
                         src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fvs%20code.png?v=1597084330782" 
                         alt="Visual Studios logo"
                    />

                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default SkillsMore;