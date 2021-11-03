export function MarketInfo({ market }) {
    return (
        <section className="market-info flex align-center space-between">
            {Object.keys(market).map(key =>
                <div key={key} className={`market-${key} align-center flex`}>
                    <span>{market[key]}</span>
                </div>
            )}
            <span className="market-star">⭐</span>
        </section>
    )
}
