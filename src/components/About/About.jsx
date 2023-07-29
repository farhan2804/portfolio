import React from 'react';
import Image from '../../assets/slide2.webp';
const PortfolioAbout = () => {
    return (
        <div class="container">
            <div class="row mb-5">
                <div class="col-lg-6 col-md-6 col-12">
                    <img src={Image} class="img-fluid " />

                </div>

                <div class="col-lg-6 col-md-6 col-12">
                    <h1 class="text-capitalize pt-4">About Me</h1>
                    <h3> Who I am....?</h3>
                    <p>As I am starting a brannd called presence.It will be known as Presence,remember the name</p>
                    <div id="button">
                        <button class="btn bg-danger text-white">Dont touch</button>
                        <button class="btn bg-danger text-white">Dont touch</button>
                        <button class="btn bg-danger text-white">Dont touch</button>
                        <button class="btn bg-danger text-white">Dont touch</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioAbout;