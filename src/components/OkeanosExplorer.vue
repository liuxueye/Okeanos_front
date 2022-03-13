<template>
  <div id="OkeanosExplorer">
    <!-- <button @click="getHealth">Health</button> -->
    {{this.health}}
    <div >1-----------------------------</div>
    {{block}}
    <div >2-----------------------------</div>
    {{abci_info}}
    <div >-3----------------------------</div>
    {{abci_query}}
    <div >--4---------------------------</div>
    {{genesis}}
    <div >--5--------------------------</div>
    {{consensus_state}}
    <div >--6-------------------------</div>
    {{validators}}
    <div >--7-------------------------</div>
    {{unconfirmed_txs}}
    <div >--8------------------------</div>
    {{}}
    <div >--9-------------------------</div>
    {{}}
    <div >--10-------------------------</div>
    {{}}    
    <div >--11-------------------------</div>
    {{}}    
    <div >--12-------------------------</div>
    {{}}
    <div >-13-------------------------</div>
    {{}}
    <div >--14-------------------------</div>
    {{}}
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      health: '',
      block: '',
      abci_info: '',
      abci_query: '',
      genesis: '',
      consensus_state: '',
      validators: '',
      unconfirmed_txs: ''
    }
  },
  created() {
    this.getHealth()
    this.getBlock()
    this.getAbciInfo()
    this.getAbciQuery()
    this.getGenesis()
    this.getConsensusState()
    this.getValidators()
    this.getUnconfirmedTxs()
  },
  methods: {
    async getHealth() {
      this.health = await this.$http.get('/api2663/net_info')
    },
    async getBlock() {
      this.block = await this.$http.get('/api2663/blockchain')
    },
    async getAbciInfo() {
      this.abci_info = await this.$http.get('/api2663/abci_info')
    },
    async getAbciQuery() {
      this.abci_query = await this.$http.get('/api2663/abci_query')
    },
    async getGenesis() {
      this.genesis = await this.$http.get('/api2663/genesis')
    },
    async getConsensusState() {
      this.consensus_state = await this.$http.get('/api2663/consensus_state')
    },
    async getValidators() {
      this.validators = await this.$http.get('/api2663/validators')
    },
    async getUnconfirmedTxs() {
      this.unconfirmed_txs = await this.$http.get('/api2663/unconfirmed_txs')
    },
    async getUnconfirmedTxs() {
      this.unconfirmed_txs = await this.$http.get('/api2663/unconfirmed_txs')
    },
    //     async getUnconfirmedTxs() {
    //   this.unconfirmed_txs = await this.$http.get('/api2663/unconfirmed_txs')
    // },
    //     async getUnconfirmedTxs() {
    //   this.unconfirmed_txs = await this.$http.get('/api2663/unconfirmed_txs')
    // },
    //     async getUnconfirmedTxs() {
    //   this.unconfirmed_txs = await this.$http.get('/api2663/unconfirmed_txs')
    // },
    //     async getUnconfirmedTxs() {
    //   this.unconfirmed_txs = await this.$http.get('/api2663/unconfirmed_txs')
    // },
    //     async getUnconfirmedTxs() {
    //   this.unconfirmed_txs = await this.$http.get('/api2663/unconfirmed_txs')
    // },
  }
};
</script>

<style>
</style>