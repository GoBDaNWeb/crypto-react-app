import React from 'react'
import {Link } from 'react-router-dom'

export default function CoinItem({coin}) {
    return (
        <Link 
            to={`/coin/${coin.id}`}
            className="bg-gray-900 bg-opacity-20 rounded-2xl p-4 text-2xl text-white transition hover:cursor-pointer hover:bg-opacity-40"
        >
            <ul className="flex justify-between pr-10">
                <li className="flex items-center gap-4 mr-40">
                    <img 
                        className="w-16"
                        src={coin.image} 
                        alt={coin.id}
                    />
                    <div>
                        <h4 className="text-4xl">{coin.symbol.toUpperCase()}</h4>
                        <h5 className="text-lg">{coin.name}</h5>
                    </div>
                </li>
                <ul className="flex justify-between w-[65%] text-center">
                        <li className="">
                            {coin.current_price.toString()}$
                        </li>
                        <li 
                            className={`flex  ${coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}
                        >
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </li>
                        <li className="">
                            {coin.market_cap_rank}
                        </li>
                    </ul>
            </ul>
        </Link>
    )
}
