import React, {useState}from 'react';

function Skills(props) {
     const [showSkill, setShowSkill] = useState(false);

     function toggleShowSkill() {
          setShowSkill(!showSkill);
     }

     console.log(showSkill)
    return(
        <div className="skills-container">
            <div className="skills-content">
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
                              <p className="skill-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed </p>
                              <h3 className="skill-what-is-header">Personal Application</h3>
                              <p className="skill-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed </p>

                         </div>
                    </div>




                    <img className="skills-images"
                         src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fhtml.png?v=1596218814366" 
                         alt="html logo"
                    />
                    <img className="skills-images"
                         src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FCss.png?v=1596218908795" 
                         alt="css logo"
                    />
                    <img className="skills-images"
                         src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FSass.png?v=1596219226957" 
                         alt="Sass logo"
                    />
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

                </div>

            </div>
        </div>
    )
}

export default Skills;