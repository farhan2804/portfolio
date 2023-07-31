import react from 'react';
import Image from '../../assets/slide2.webp';

const PortfolioProjects = () => {
    return (
        <div class="container mb-5">
            <h1 class="text-center text-capitalize pt-4 ">Projects</h1>
            <hr class="w-50 mx-auto pt-3" />
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
                    <img src={Image} class="img-fluid" />
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
                    <img src={Image} class="img-fluid" />
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
                    <img src={Image} class="img-fluid" />
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
                    <img src={Image} class="img-fluid" />
                </div>
                <div class="col-lg-4 col-md-4 col-12 col-sm-6 mb-4">
                    <img src={Image} class="img-fluid" />
                </div>
                <div class="col-lg-4 col-md-4 col-12 col-sm-6 mb-4">
                    <img src={Image} class="img-fluid" />
                </div>
            </div>
        </div>

    )
}
export default PortfolioProjects;