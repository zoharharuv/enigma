import { memo } from 'react'
import { NavLink } from "react-router-dom";
import { Button } from '@material-ui/core';
import { MarketSearch } from './market-cmps/MarketSearch';

export const AppHeader = memo(function _AppHeader() {
    const routes = [
        {
            path: '/market/btc',
            name: 'BTC markets'
        },
        {
            path: '/market/kraken',
            name: 'Kraken markets'
        },
        {
            path: '/watchlist',
            name: 'Watchlist'
        }
    ]
    return (
        <header className="app-header flex column">

            <nav className="flex align-center gap">
                {routes.map(route =>
                    <NavLink key={route.name} to={route.path}>
                        <Button
                            style={{
                                textTransform: 'unset',
                                fontFamily: 'monospace',
                                color: '#ffffff',
                                background: '#1c2663'
                            }}>
                            {route.name}
                        </Button>
                    </NavLink>
                )}
            </nav>

            <MarketSearch />

        </header>
    )
})