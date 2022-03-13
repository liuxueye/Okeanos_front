# okeanos_dapp

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Available endpoints:

Endpoints that require arguments:
//localhost:2663/abci_info?
//localhost:2663/abci_query?path=_&data=_&height=_&prove=_
//localhost:2663/block?height=_
//localhost:2663/block_by_hash?hash=_
//localhost:2663/block_results?height=_
//localhost:2663/block_search?query=_&page=_&per_page=_&order_by=_
//localhost:2663/blockchain?minHeight=_&maxHeight=_
//localhost:2663/broadcast_evidence?evidence=_
//localhost:2663/broadcast_tx_async?tx=_
//localhost:2663/broadcast_tx_commit?tx=_
//localhost:2663/broadcast_tx_sync?tx=_
//localhost:2663/check_tx?tx=_
//localhost:2663/commit?height=_
//localhost:2663/consensus_params?height=_
//localhost:2663/consensus_state?
//localhost:2663/dump_consensus_state?
//localhost:2663/genesis?
//localhost:2663/genesis_chunked?chunk=_
//localhost:2663/health?
//localhost:2663/net_info?
//localhost:2663/num_unconfirmed_txs?
//localhost:2663/status?
//localhost:2663/subscribe?query=_
//localhost:2663/tx?hash=_&prove=_
//localhost:2663/tx_search?query=_&prove=_&page=_&per_page=_&order_by=_
//localhost:2663/unconfirmed_txs?limit=_
//localhost:2663/unsubscribe?query=_
//localhost:2663/unsubscribe_all?
//localhost:2663/validators?height=_&page=_&per_page=_
