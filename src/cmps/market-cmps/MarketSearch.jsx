import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Input } from '@material-ui/core'
import { Clear } from '@material-ui/icons';
import { setFilter } from './../../store/actions/market.actions';

export const MarketSearch = memo(() => {
    const { filterBy } = useSelector(state => state.marketModule)
    const dispatch = useDispatch()

    const onSetFilter = ({ target: { value } }) => {
        dispatch(setFilter(value))
    }

    const onClearFilter = () => {
        if (!filterBy) return;
        dispatch(setFilter(''))
    }

    return (
        <section className="market-search flex align-center gap">
            <Input
                style={{
                    textTransform: 'unset',
                    fontFamily: 'monospace',
                    color: '#ffffff',
                    background: '#1c2663',
                    padding: '5px 10px'
                }}
                onChange={onSetFilter}
                value={filterBy}
                placeholder="Search all markets"
                autoComplete="off" />

            <IconButton style={{
                color: '#ffffff',
                background: '#1c2663',
                borderRadius: '0px',
                padding: '8px'
            }}
                aria-label="clear search"
                component="span"
                onClick={onClearFilter}>
                <Clear />
            </IconButton>
        </section>
    )
})