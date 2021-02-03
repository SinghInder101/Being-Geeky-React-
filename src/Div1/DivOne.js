import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DivOne.css';


const DivOne = () => {
    return (
        <div className="DivOne justify-content-center " id="one">
            <h1 class="beinggeeky ">Being Geeky</h1>
            <h2 class="beinggeeky1 my-5">Your own video and theortical study place.</h2>
            <p class=" beinggeekytext mx-5 my-5 d-none d-md-block justify-content-center">Being Geeky is one of the best platform for the online learning.
             With the best study material.Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody. Dummy texts have been in use by typesetters since the 16th century.</p>

        </div>
    );
}

export default DivOne;
