import { btcService } from "../../services/btc.service";
import { krakenService } from "../../services/kraken.service";

export function loadMarkets(market) {
    return async dispatch => {
        try {
            let markets;
            if (market === 'btc') {
                markets = await btcService.getBtcMarket();
            }
            else if (market === 'kraken') {
                markets = await krakenService.getKrakenMarket();
            }
            dispatch({ type: 'SET_MARKETS', markets })
        } catch (err) {
            console.log('marketActions: err in loadMarkets', err)
        }
    }
}

export function toggleMarket({ asset }) {
    return async dispatch => {
        try {
            dispatch({ type: 'SET_WATCHLIST', asset })
        } catch (err) {
            console.log('marketActions: err in toggleMarket', err)
        }
    }
}

export function setFilter(filterBy) {
    return async dispatch => {
        try {
            dispatch({ type: 'SET_FILTER', filterBy })
        } catch (err) {
            console.log('marketActions: err in setFilter', err)
        }
    }
}