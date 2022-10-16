import React from 'react';
import { Link } from 'react-router-dom';
import './projects.css';

function Projects() {
    return (
        <>
        <div id="ProjectsPara">
            <h2>
                My Projects
            </h2>
            <p>
                You can click on any of the projects below to see more information, the code for all of these is also
                on my github <a id="githublink" href="https://github.com">here</a>. <br/> <br/> <br/> 
                <Link to="/projects/tradingbots">FTX Trading bots</Link> <br/> <br/>
                <Link to="/projects/onlyProfits">Cryptocurrency and stock market viewer</Link> <br/> <br/>
                <Link to="/projects/eportfolio">Eportfolio</Link> <br/> <br/>
                <Link to="/projects/racecar">Race Car</Link> <br/> <br/>
                <Link to="/projects/matrixcalculator">Matrix Calculator</Link> <br/> <br/>
            </p>
        </div>
    </>
    )
}

export default Projects;