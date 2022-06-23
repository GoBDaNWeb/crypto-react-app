import React, {useState, useEffect} from 'react'
import CoinItem from './CoinItem'
import axios from 'axios'
import Loader from './Loader'
import {AllCoinList} from '../config/api'

export default function CoinList() {
    const [allCoins, setAllCoins] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [searchValue, setSearchValue] = useState('')
    const [searchedCoin, setSearchedCoin] = useState([])

    const fetchCoinList = async () => {
        try {
            const {data} = await axios.get(AllCoinList())
            setAllCoins(data)
        } catch(error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    const onChange = (e) => {
        const {value} = e.target
        setSearchValue(value)
    }

    useEffect(() => {
        const searchData = allCoins?.filter(coin => coin.name.toLowerCase().includes(searchValue.toLowerCase()))
        setSearchedCoin(searchData);
    }, [searchValue])

    useEffect(() => {
        setSearchedCoin(allCoins)
    }, [allCoins])

    useEffect(() => {
        fetchCoinList()
    }, [])

    return (
        <div className="flex flex-col gap-2 px-48 mt-10">
            <div>
                <input 
                    onChange={(e) => onChange(e)}
                    className="px-8 outline-none text-white w-full h-12 bg-gray-800 border-[1px] border-gray-900 border-solid rounded-2xl"
                    type="text"
                    placeholder="Search Coin"
                />
            </div>
            <div className='bg-yellow-400 h-16 rounded-2xl '>
                <div className="h-full">
                    <ul className="flex items-center justify-between h-full font-bold px-6">
                        <li className="">Coin</li>
                        <ul className="flex justify-between w-[65%]">
                            <li className="">Price</li>
                            <li className="">24h Change</li>
                            <li className="">Market Cap Rank</li>
                        </ul>
                    </ul>
                </div>
            </div>
            {}
            <div 
                className='flex flex-col gap-2'
            >
                {
                   isLoading && !allCoins
                   ?    (<div className='w-full flex justify-center'>
                            <Loader/>
                        </div>) 
                   :  searchedCoin?.map((coin, index) => (
                        <CoinItem 
                            key={index} 
                            coin={coin}
                        />
                   ))
                }
            </div>
        </div>
    )
}
