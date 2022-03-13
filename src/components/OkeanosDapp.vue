<template>
  <div id="OkeanosDapp">
    <div id="header">
      <el-form :inline="true">
        <el-form-item label="type">
          <el-select v-model="header.type" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- <span>"""""""""</span> -->
        <el-form-item label="ttl">
          <el-input-number v-model="header.ttl" :min="-1" :max="100" label="input ttl"></el-input-number>
        </el-form-item>
        <el-form-item label="index">
          <el-input-number v-model="header.index" :min="-1" :max="100" label="input index"></el-input-number>
        </el-form-item>
        <el-form-item label="path">
          <el-input v-model="header.path" placeholder="input path"></el-input>
        </el-form-item>
        <el-form-item label="source_chain_id">
          <el-input v-model="header.source_chain_id" placeholder="input source_chain_id"></el-input>
        </el-form-item>
        <el-form-item label="target_chain_id">
          <el-input v-model="header.target_chain_id" placeholder="input target_chain_id"></el-input>
        </el-form-item>
        <el-form-item label="app_id">
          <el-input v-model="header.auth.app_id" placeholder="input app_id"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div id="Send">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="key">
          <el-input v-model="body.key" placeholder="key"></el-input>
        </el-form-item>
        <el-form-item label="value">
          <el-input v-model="body.value" placeholder="value"></el-input>
        </el-form-item>
        <el-form-item label="public_key">
          <el-input v-model="body.public_key" placeholder="public_key"></el-input>
        </el-form-item>
        <el-form-item label="power">
          <el-input-number v-model="body.power" :min="-1" :max="100" label="input power"></el-input-number>
        </el-form-item>
        <el-form-item label="port">
          <el-input v-model="sendPort" placeholder="Port"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Send</el-button>
        </el-form-item>
      </el-form>
      <el-input
        type="textarea"
        :rows="10"
        placeholder="Tx State"
        v-model="send_textarea"
      >
      </el-input>
    </div>
    <div id="query">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="port">
          <el-input v-model="queryPort" placeholder="Port"></el-input>
        </el-form-item>
        <el-form-item label="query">
          <el-input v-model="body.query" placeholder="query"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onQuery">Query</el-button>
        </el-form-item>
      </el-form>
      <el-input
        type="textarea"
        :rows="10"
        placeholder="Tx State"
        v-model="query_textarea"
      >
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [{
          value: 'normal',
          label: 'normal'
        }, {
          value: 'cross',
          label: 'cross'
        }, {
          value: 'route',
          label: 'route'
        }, {
          value: 'validate',
          label: 'validate'
        }, {
          value: 'graph',
          label: 'graph'
        }],
      header: {
        type: '',
        ttl: -1,
        index: -1,
        paths: [],
        source_chain_id: '',
        target_chain_id: '',
        auth: {
          app_id: ''
        }
      },
      body: {
        key: '',
        value: '',
        public_key: '',
        power: 10,
        query: ''
      },
      sendPort: "",
      send_textarea: "",
      query_textarea: "",
      queryPort: "",
    };
  },
  methods: {
    objectTo16(obj) {
      let objTo16 = '';
      let objStr = JSON.stringify(obj);
      for (let i = 0; i < objStr.length; i++) {
        if (objStr === "") {
          return null;
        } else {
          objTo16 += objStr.charCodeAt(i).toString(16);
        }
      }
      return objTo16;
    },

    judgePort(port) {
      let baseURL1 = "";
      switch(port) {
        case '2663': baseURL1 = "/api2663";
        break;
        case '2666': baseURL1 = "/api2666";
        break;
        case '2669': baseURL1 = "/api2669";
        break;
        case '2672': baseURL1 = "/api2672";
        break;
      }
      return baseURL1;
    },

    async onSubmit() {
      let sendJson = {
        'header':
          {
            'type': this.header.type,
            'ttl': this.header.ttl,
            'index': this.header.index,
            'paths': this.header.path,
            'source_chain_id': this.header.source_chain_id,
            'target_chain_id': this.header.target_chain_id,
            'auth': this.header.auth,
          },
        'body': 
          {
            'key': this.body.key, 
            'value': this.body.value,
            'public_key': this.body.public_key, 
            'power': this.body.power
          },
      };
      let sendJson16 = this.$options.methods.objectTo16(sendJson)
      let URL = this.$options.methods.judgePort(this.sendPort) + "/broadcast_tx_commit?tx=0x" + sendJson16;
      let showSendState = await this.$http.get(URL);
      this.send_textarea = JSON.stringify(showSendState);
    },
    async onQuery() {
      let queryJson = {
        'header':
          {
            'type': this.header.type,
            'ttl': this.header.ttl,
            'index': this.header.index,
            'paths': this.header.path,
            'source_chain_id': this.header.source_chain_id,
            'target_chain_id': this.header.target_chain_id,
            'auth': this.header.auth,
          },
        'body': 
          {
            'public_key': this.body.public_key, 
            'power': this.body.power,
            'query': this.body.query
          },
      };
      let queryJson16 = this.$options.methods.objectTo16(queryJson);
      let baseURL2 = this.$options.methods.judgePort(this.queryPort)
      let URL =  baseURL2 + "/abci_query?data=0x" + queryJson16;
      let query_textarea = await this.$http.get(URL);
      this.query_textarea = JSON.stringify(query_textarea);
    },
  },
};
</script>
<style scope>
#OkeanosDapp {
  margin: 20px 20px;
}
#Send {
  margin-bottom: 20px;
  border: 1px solid #eee;
  padding: 5px;
}
#query {
  margin-bottom: 20px;
  border: 1px solid #eee;
  padding: 5px;
}
#header {
  margin-bottom: 20px;
  border: 1px solid #eee;
  padding: 5px;
}
</style>