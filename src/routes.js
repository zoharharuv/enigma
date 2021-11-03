import { AppBoard } from './pages/AppBoard';
import { WatchList } from './pages/WatchList';

const routes = [
    {
        path: '/',
        component: AppBoard
    },
    {
        path: '/market/:market',
        component: AppBoard
    },
    {
        path: '/watchlist',
        component: WatchList
    }
]

export default routes;