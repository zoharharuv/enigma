import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    loadMarkets,
} from '../store/actions/market.actions';
import { MarketList } from '../cmps/market-cmps/MarketList';

export const AppBoard = ({ match }) => {
    const { markets } = useSelector(state => state.marketModule)
    const dispatch = useDispatch()

    useEffect(() => {
        const { market } = match.params;
        if (market) {
            dispatch(loadMarkets(market));
        }
    }, [match])

    const BASE_URL = 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/32/white/'

    return (
        <section className="app-board flex column gap">
            {Object.keys(markets).length
                ? Object.keys(markets).map(category =>
                    <div key={category} className="market-category flex column">
                        <div className="market-category-title flex align-center gap">
                            <img src={`${BASE_URL + category.toLowerCase()}.png`} alt={`${category} icon`} />
                            <h2>{category}</h2>
                        </div>
                        <MarketList marketList={markets[category]} />
                    </div>
                ) : <h1>Choose a market!</h1>}
        </section>
    )
}