import axios, { all } from 'axios'
import { useEffect, useState } from 'react'

const Home=()=>{


    let [allsymbol, setAllSymbol] = useState([])

    useEffect(()=>{
        axios.get('https://api.binance.com/api/v3/exchangeInfo').then((res)=>{
            console.log(res.data.symbols)
            setAllSymbol(res.data.symbols)
        })
    }, [])

    return(
        <div>
            <p>Home</p>
            {allsymbol && allsymbol.length > 0 ? allsymbol.filter((item, index)=> item.quoteAsset == 'USDT' && item.status == 'TRADING').map((item, index)=>{
                return(
                    <div key={index}>
                        <p>{item.baseAsset} / {item.quoteAsset}</p>
                    </div>
                )
            }) : null}
        </div>
    )
}

export default Home