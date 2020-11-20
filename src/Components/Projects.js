
import React from "react";

export default function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>

            <div className="projectItem">
                <p className="name"> Name: Klank Records Webshop</p>

                <p>
                    Description: An online music store that is dedicated to providing
                    EXCLUSIVE techno tracks with a few clicks.
        </p>

                <a href="  https://github.com/qkd888/Capstone-project-2-Klank-Records-Webshop">
                    Github Repo
        </a>
            </div>

            <div className="projectItem">
                <p className="name">Name: General knowledge Quiz Game</p>
                <p>
                    Description: A quiz game that is suitable for anyone who wants to test
                    their general knowledge.
        </p>
                <a href="https://guarded-mesa-35280.herokuapp.com/">
                    Heroku App
        </a>
            </div>

            <div className="projectItem">
                <p className="name">Name: Itunes Search Api Application</p>
                <p>
                    Description: This application allows a user to search for their
                    favourite media content on Itunes and store that content to their list
                    of favourites.
        </p>

                <p>
                    <a href=" https://evening-badlands-44327.herokuapp.com/">
                        Heroku App
          </a>
                </p>
            </div>
        </div>
    );
}
