import { Input } from '@material-ui/core'
import { memo } from 'react'

export const MarketSearch = memo(function _MarketSearch({ filterBy, handleChange }) {
    return (
        <section className="market-search">
            <Input
                style={{
                    textTransform: 'unset',
                    fontFamily: 'monospace',
                    color: '#ffffff',
                    background: '#1c2663',
                    padding: '5px 10px'
                }}
                onChange={handleChange}
                value={filterBy}
                placeholder="Search all markets"
                autoComplete="off" />
        </section>
    )
})