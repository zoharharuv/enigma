import { btcService } from "../../services/btc.service";
import { krakenService } from "../../services/kraken.service";

export function loadMarkets(market, filterBy = null) {
    return async dispatch => {
        try {
            let markets;
            if (market === 'btc') {
                markets = await btcService.getBtcMarket(filterBy);
            }
            else if (market === 'kraken') {
                markets = await krakenService.getKrakenMarket(filterBy);
            }
            dispatch({ type: 'SET_MARKETS', markets })
        } catch (err) {
            console.log('marketActions: err in loadMarkets', err)
        }
    }
}