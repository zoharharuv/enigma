import { memo, useMemo } from "react"
import { useSelector } from "react-redux"

export const WatchList = memo(function () {
    const { watchlist } = useSelector(state => state.marketModule)

    const list = useMemo(() => {
        const arr = []
        for (let item of watchlist) arr.push(item)
        return arr;
    }, [watchlist])

    return (
        <section className="watch-list flex column ">
            <h1>{list.length ? 'Markets in watchlist: ' :'No markets found!'}</h1>
            {list.map((asset, idx) => <h2 key={idx}>{asset}</h2>)}
        </section>
    )
})
