import { databaseService } from './database.service';

async function getKrakenMarket() {
    const { krakenMarkets } = await databaseService.query();
    return krakenMarkets;
}


export const krakenService = {
    getKrakenMarket
}
