import { databaseService } from './database.service';

async function getBtcMarket() {
    let { btcMarkets } = await databaseService.query();
    return btcMarkets;
}

export const btcService = {
    getBtcMarket
}
