import React, {useState, useEffect} from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper'
// Import Swiper styles
import 'swiper/css';
import axios from 'axios'
import {TrendingCoins} from '../../config/api'
import {Link } from 'react-router-dom'

export default function BannerCarousel() {
    const [trandingCoins, setTrandingCoins] = useState([])
    const [isLoading, seyIsLoading] = useState(true)

    const fetchTrandingCoins = async () => {
        try {
            const {data} = await axios.get(TrendingCoins())
            setTrandingCoins(data)
            console.log(data);
        } catch(error) {
            console.log(error);
        } finally {
            seyIsLoading(true)
        }
    }

    useEffect(() => {
        fetchTrandingCoins()
    }, [])

    return (
        <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            className="w-full"
        >
            {
                trandingCoins.map((coin, index) => (
                    <SwiperSlide 
                        key={index}
                    >
                        <Link to={`/coin/${coin.id}`}
                        className="cursor-pointer flex flex-col justify-center items-center"
                        >
                            <img className="w-24 mb-4" src={coin.image} alt={coin.id}/>
                            <div className="flex flex-col items-center justify-center">
                            <h5 className="text-yellow-300 text-2xl select-none">
                                {coin.name}
                                <span 
                                    className={`text-xl ${coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`} 
                                >
                                    {coin.price_change_percentage_24h.toFixed(2)}%
                                </span>
                            </h5>
                            <h5 className="text-white text-2xl mb-4 select-none">
                                ${coin.current_price}
                            </h5>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))
            }
            
        </Swiper>
    )
}
