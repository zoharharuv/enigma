import { useDispatch, useSelector } from "react-redux"
import { Star } from "@material-ui/icons"
import { toggleMarket } from "../../store/actions/market.actions"

export function MarketInfo({ market }) {
    const { watchlist } = useSelector(state => state.marketModule)
    const dispatch = useDispatch()

    const onToggleMarket = (market) => {
        dispatch(toggleMarket(market))
    }

    const isWatched = watchlist.has(market.asset);
    return (
        <section className={`market-info flex align-center space-between ${isWatched ? 'watched' : ''}`}>
            {Object.keys(market).map(key =>
                <div key={key} className={`market-${key} flex align-center gap 
                ${key === 'change' ?
                        market[key] >= 0 ? 'green' : 'red'
                        : ''}`}>
                    <span>{market[key]}</span>
                    {key === 'volume' &&
                        <span className="market-star"
                            onClick={() => onToggleMarket(market)}>
                            {isWatched ? <Star style={{ color: "#e5952b" }} /> : <Star style={{ color: "#373737" }} />}
                        </span>}
                </div>
            )}
        </section>
    )
}
