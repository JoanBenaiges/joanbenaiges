import React from "react";

function CardSkill({ skills }) {

    return (


        <div className="skills-list">
            {skills.map(skill => (


                <div className="card-skill">

                    <img src={`https://svgur.com/i/${skill.logoImage}`} alt={skill.name} />
                    <p>{skill.name}</p>

                </div>


            ))}
        </div>


    );
}

export default CardSkill;