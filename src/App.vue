<template>
  <div id="app">
    <div id="OkeanosDapp">
      <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title">OKEANOS</template>
              <el-menu-item index="1-1">
                <router-link to="OkeanosDapp">OkeanosDapp</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="OkeanosExplorer">OkeanosExplorer</router-link>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-container>
          <router-view></router-view>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<style>
a {
  text-decoration: none;
  color: #333;
  text-align: center;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
</style>
