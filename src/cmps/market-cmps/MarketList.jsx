import { memo } from 'react';
import { MarketInfo } from './MarketInfo';

export const MarketList = memo(({ marketList }) => {
    return (
        <section className="market-list flex column">
            {marketList.map(market => <MarketInfo
                key={market.asset}
                market={market} />)
            }
        </section>
    )
})