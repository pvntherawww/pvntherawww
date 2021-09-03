import React from 'react';
import '../../App.css';
import './PriceList.css';


const PriceList = () => {
    return ( 
        <>
            <div class="container">
        <div class="grid">
            <div class="card">
                <h2 class="card_title">Mixing & Mastering</h2>
                <p class="pricing">20$<span class="small"></span></p>
                {/* <p>Save $9</p> */}
                <hr />
                <ul class="features">
                    <li>Individual approach to each client</li>
                    <li>My style is value for money, minimalism</li>
                    <li>It is possible to provide the service in real time via Discord</li>
                </ul>
                <a href="https://vk.com/pvntherawww" class="cta_btn">Buy Now</a>
            </div>
            <div class="card">
                <h2 class="card_title">Beat (Exlusive)</h2>
                <p class="pricing">20$<span class="small"></span></p>
                {/* <p>Save $15</p> */}
                <hr />
                <ul class="features">
                    <li>Individual approach to each client</li>
                    <li>My style is value for money, minimalism</li>
                    <li>It is possible to provide the service in real time via Discord</li>
                </ul>
                 <a href="https://vk.com/pvntherawww" class="cta_btn">Buy Now</a>
            </div>
            <div class="card">
                <h2 class="card_title">Website creation</h2>
                <p class="pricing">60$<span class="small"></span></p>
                {/* <p>Save $25</p> */}
                <hr />
                <ul class="features">
                    <li>Individual approach to each client</li>
                    <li>My style is value for money, minimalism</li>
                    <li>It is possible to provide the service in real time via Discord</li>
                </ul>
                 <a href="https://vk.com/pvntherawww" class="cta_btn">Buy Now</a>
                 <h3>My personal mail: pvntherawww@gmail.com</h3>
            </div>
        </div>
    </div>
        </>
     );
}
 
export default PriceList;
