import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {SingleCoin} from '../config/api'
import CoinChart from '../components/CoinChart'
import parse from 'html-react-parser';


export default function Coin() {
    const [currentToken, setCurrentToken] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()

    const fetchCurrentCoin = async () => {
        const {data} = await axios.get(SingleCoin(id))
        setCurrentToken(data)
    }

    useEffect(() => {
        fetchCurrentCoin()
    }, [])

    return (
        <div className="pt-28 px-10 text-white flex xl:flex-row flex-col gap-4 justify-between">
            <div className="flex flex-col items-center xl:w-[30%] w-full">
                <img src={currentToken?.image?.large} alt={currentToken?.id} />
                <h3 className="text-6xl font-bold ">
                    {currentToken?.name}
                </h3>
                {
                    currentToken?.description
                    && parse(currentToken?.description.en.split(". ")[0])
                }
                <div className='mt-10 w-[70%]'>
                    <div className='text-3xl font-bold flex flex-col items-center justify-center'>
                        Rank
                        <h4>
                            {currentToken?.market_cap_rank}
                        </h4>
                    </div>
                    <ul className='flex flex-wrap justify-between mt-4'>
                        <li className='flex flex-col items-center justify-center'>
                            current price
                            <h6 className='font-bold'>
                                {currentToken?.market_data?.current_price.usd}
                            </h6>
                        </li>
                        <li className='flex flex-col items-center justify-center'>
                            high 24h
                            <h6 className='font-bold text-green-500'>
                                {currentToken?.market_data?.high_24h?.usd}
                            </h6>
                        </li>
                        <li className='flex flex-col items-center justify-center'>
                            low 24h
                            <h6 className='font-bold text-red-500'>
                                {currentToken?.market_data?.low_24h?.usd}
                            </h6>
                        </li>
                        <li className='flex flex-col items-center justify-center'>
                            percentage
                            <h6 className={`font-bold ${currentToken?.market_data?.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {currentToken?.market_data?.price_change_percentage_24h.toFixed(2)}%
                            </h6>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="xl:w-[70%] w-full">
                {currentToken && <CoinChart coin={currentToken}/>}
                
            </div>
        </div>
    )
}
