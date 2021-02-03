import React from 'react';
import './DivFour.css'
import coupon from './coupon.jpg'
const DivFour = () => {
    return (
        <div className="DivFour d-flex" id="four">
            <img src={coupon} className="CouponImg "></img>
            <div class="offset-2  coupondiv container ">
                <h5 class="my-">Coupons</h5>
                <p class="my-4">You can apply different coupons to get extra discount on selected courses.Certain internet providers exploit the fact that fill text cannot be recognized by automatic search engines - meaningful information cannot be distinguished from meaningless: Target-generated dummy text mixed with a certain combination of search terms can lead to an increased frequency of visits by search machine users. As a consequence, advertising revenues, which rely on website 'hits', are increased.</p>
                <p class="my-4">Already have Coupon?</p>
                <hr></hr>
                <a href="#one">Redeem</a>
            </div>
            
        </div>
    );
}

export default DivFour;
