<template>
  <div id="OkeanosDapp">
    <div id="Send">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="key">
          <el-input v-model="key" placeholder="key"></el-input>
        </el-form-item>
        <el-form-item label="value">
          <el-input v-model="value" placeholder="value"></el-input>
        </el-form-item>
        <el-form-item label="source">
          <el-input v-model="source" placeholder="Source"></el-input>
        </el-form-item>
        <el-form-item label="target">
          <el-input v-model="target" placeholder="Target"></el-input>
        </el-form-item>
        <el-form-item label="port">
          <el-input v-model="portPost" placeholder="Port"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Send</el-button>
        </el-form-item>
      </el-form>
      <el-input
        type="textarea"
        :rows="4"
        placeholder="Tx State"
        v-model="send_textarea"
      >
      </el-input>
    </div>
    <div id="query">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="port">
          <el-input v-model="portGet" placeholder="Port"></el-input>
        </el-form-item>
        <el-form-item label="Data">
          <el-input v-model="data" placeholder="Data"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onQuery">Query</el-button>
        </el-form-item>
      </el-form>
      <el-input
        type="textarea"
        :rows="4"
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
      key: "",
      value: "",
      source: "",
      target: "",
      portPost: "",
      send_textarea: "",
      query_textarea: "",
      data: "",
      portGet: "",
    };
  },
  methods: {
    objectTo16(obj) {
      let objTo16 = '';
      let objStr = '';
      // console.log(typeof obj);
      if (typeof obj === "object") {
        objStr = JSON.stringify(obj);
      } else {
        objStr = String(obj);
      }
      // console.log(objStr);
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
      console.log(port);
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
      console.log(baseURL1);
      return baseURL1;
    },

    async onSubmit() {
      let keyValue = {
        key: this.key,
        value: this.value,
      };
      let kv = this.$options.methods.objectTo16(keyValue)
      let URL = this.$options.methods.judgePort(this.portPost) + "/broadcast_tx_commit?tx=0x" + kv;
      // let URL1 = this.$options.methods.judgePort(this.portPost) + "/block_results?height=3";
      // console.log(URL1);
      let showSendState = await this.$http.get(URL);
      this.send_textarea = JSON.stringify(showSendState);
    },
    async onQuery() {
      let data16 = this.$options.methods.objectTo16(this.data);
      let baseURL2 = this.$options.methods.judgePort(this.portGet)
      let URL =  baseURL2 + "/abci_query?data=0x" + data16;
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
</style>