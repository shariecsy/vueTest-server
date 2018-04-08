<template>
  <div id="secondcomponent">
      <h1>I am another page</h1>
      <a href="###">written by {{ author }}</a>
      <p>
          感谢
          <a href="###">ddd</a>大神知道
      </p>
      <!-- <ul> -->
          <!-- <li v-for="item in articles">{{item}}</li> -->
      <!-- </ul> -->
      <p>
          {{
              hospital
          }}
      </p>
      <el-card class="box-card">
          <div slot="header" class="clearfix">
              <h1 style="line-height:36px;color:#20A0FF">豆瓣电影排行榜</h1>
          </div>
          <div v-for="article in articles">{{article}}</div>
      </el-card>
  </div>
</template>
<script>

export default {
  data(){
      return{
          author:"微信公众号",
          articles:[
              '电影一',
              '电影二',
              '电影三'
          ],
          hospital:''
      }
  },
  mounted: function(){
      this.$http.post('http://localhost:8081/v1.0/records/getDetail',{id:8},{emulateJSON: true}).then(function(res){
          this.hospital=res.data.result[0].hospital;
          console.log(res.data.result[0].hospital)
      },function(res){
          console.log(res);
      })
  }
}
</script>
