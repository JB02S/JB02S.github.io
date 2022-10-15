import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <>
        <h2>
            My Projects
        </h2>
        <div id="IndexPara">
            <p>
                You can click on any of the projects below to see more information, the code for all of these is also
                on my github <a id="githublink" href="https://github.com">here</a>. <br/> <br/> <br/> 
                <Link to="/projects/tradingbots">FTX Trading bots</Link> <br/> <br/>
                <Link to="/projects/onlyProfits">Cryptocurrency and stock market viewer</Link> <br/> <br/>
                <Link to="/projects/eportfolio">Eportfolio</Link>
            </p>
        </div>
    </>
    )
}

export default Projects;