import React from 'react'
import Title from "../../components/Title/Title"
import { IoIosPricetag } from "react-icons/io";
import "./PackagesContainer.css"
import packagesData from '../../data/PackagesData';
import {Link} from "react-router-dom"

function PackagesContainer() {
  return (
    <div className='packages-container'>
      <Title titleSub="our packages" titleMain="curated tours for unforgettable stories" />

        {
            packagesData.map(data => <PackagesCard key={data.packageName} PackageName={data.packageName} Tagline={data.tagline} PackageExcerpt={data.packageExcerpt} PackagePrice={data.packagePrice} Image1={data.image1} Image2={data.image2} Image3={data.image3} Image4={data.image4} /> )
        }

    </div>
  )
}


function PackagesCard({PackageName, Tagline, PackageExcerpt, PackagePrice, Image1, Image2, Image3, Image4}) {
    return(
        <div className="package-card">
            <div className="package-card-inner-wrapper">
                <div className="package-card-left">
                    <h1 className="package-name">{PackageName}</h1>
                    <p className="package-card-tagline">{Tagline}</p>
                    <p className="package-card-excerpt">{PackageExcerpt}</p>

                    <div className="package-card-details">
                        <div className="package-card-details-left">
                            <IoIosPricetag />
                            <p className="package-price">{PackagePrice}</p>
                        </div>
                        
                        <div className="package-card-details-right">
                            <Link>book package</Link>
                        </div>
                    </div>
                </div>

                <div className="package-card-right">
                    <div className="images-top-row">
                        <div className="image1-wrapper">
                            <img src={Image1} alt="" />
                        </div>
                        <div className="image2-wrapper">
                            <img src={Image2} alt="" />
                        </div>
                    </div>
                    <div className="images-bottom-row">
                        <div className="image3-wrapper">
                            <img src={Image3} alt="" />
                        </div>
                        <div className="image4-wrapper">
                            <img src={Image4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackagesContainer
