import { Input } from '@material-ui/core'
import { memo } from 'react'

export const MarketSearch = memo(function _MarketSearch({ filterBy, handleChange }) {
    return (
        <section className="market-search">
            <div className="search-bar">
                <Input
                    onChange={handleChange}
                    value={filterBy}
                    type="text"
                    placeholder="Search all markets"
                    autoComplete="off" />
            </div>
        </section>
    )
})