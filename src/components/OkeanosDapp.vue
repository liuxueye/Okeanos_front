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
    async onSubmit() {
      let keyValue = {
        key: this.key,
        value: this.value,
      };
      console.log(keyValue);
      let keyValueTo16 = "";
      for (let i = 0; i < keyValue.length; i++) {
        if (keyValue === "") {
          alert("There cannot be empty");
        } else {
          keyValueTo16 += keyValue.charCodeAt(i).toString(16);
        }
      }
      let URL = this.portPost + "broadcast_tx_commit";
      let showSendState = await this.$http.post(URL, {
        data: {
          tx: keyValueTo16,
        },
      });
    },
    async onQuery() {
      let dataTo16 = "";
      for (let i = 0; i < this.data.length; i++) {
        if (this.data === "") {
          alert("There cannot be empty");
        } else {
          dataTo16 += this.data.charCodeAt(i).toString(16);
        }
      }
      // let URL = this.port + "/account/address";

      // console.log(URL);
      this.query_textarea = await this.$http.get(
        "/account/address"
        // {
        //   params: {
        //     address: "7334A4B2668DE1CEF0DD7DBA695C29449EC3A0D0",
        //   },
        // }
        // {
        //   params: {
        //     data: "0x" + dataTo16,
        //   },
        // }
      );
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