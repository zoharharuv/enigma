const initialState = {
    markets: [],
    watchlist: new Set(),
}
export function marketReducer(state = initialState, action) {
    var newState = state;
    var watchlist;
    switch (action.type) {
        case 'FILTER_MARKET':
            newState = { ...state, market: action.market }
            break;
        case 'SET_MARKETS':
            newState = { ...state, markets: action.markets }
            break;
        case 'SET_WATCHLIST':
            watchlist = new Set(state.watchlist)
            watchlist.has(action.asset) ? watchlist.delete(action.asset) : watchlist.add(action.asset)
            newState = { ...state, watchlist }
            break;
        default:
    }
    return newState;
}
