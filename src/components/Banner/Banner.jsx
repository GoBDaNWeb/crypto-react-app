import React from 'react'
import BannerCarousel from './BannerCarousel'

export default function Banner() {
    return (
        <div className="flex flex-col items-center justify-center gap-24 h-[700px] w-full saturate-200 bg-banner  bg-fixed bg-no-repeat bg-cover pt-10">
        <div className="text-white text-center flex flex-col items-center justify-center gap-4">
            <h1 className="font-bold text-7xl text-center flex">
                <span className="text-amber-500">
                    Crypto
                </span>
                Hunter
            </h1>
            <h5 className="text-xl text-gray-300">
                Get All The Info Regarding Your Favorite Crypto Currency
            </h5>
        </div>
        <BannerCarousel/>
    </div>
    )
}
