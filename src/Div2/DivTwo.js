import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './DivTwo.css';

const DivTwo = () => {
    return (
        <div className="DivTwo justify-content-center " id="two">
            {/* <i class="fas fa-music"></i> */}
            <h1 class="text-white ">Documentation</h1>
            <h2 class="text-white my-5">All genuine Documentation at one place</h2>
            <p class="text-white my-5">Being Geeky helps the viewer to find all the required documentation at one place so that they need not waste time to find offical documentation. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
            <button class="btn btn-primary">Start your Trial Now</button>
            <p class="text-white mt-2">You can download being geeky from Appstore or Playstore</p>
            <img class="ipadimg" src="https://thesweetsetup.com/wp-content/uploads/2019/06/ipad-pro-goodnotes.jpg" alt="Italian Trulli"></img>


        </div>
    );
}

export default DivTwo;
