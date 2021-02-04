<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" foo="foo" />
    <HelloWorld msg="Welcome to Your Vue.js App" foo="foo" ref="hello">
      <template>人面桃花相映红,人面不知何处去，桃花依旧笑春风</template>
      <template v-slot:content='slotProps'>从此以后我遇见青山，遇见白雾，独尝世间悲与苦，却不能与你相逢{{slotProps.bg}}</template>
    </HelloWorld> -->
    <kForm></kForm>
    <!-- <p>{{work}}</p> -->
    <el-autocomplete
      class="inline-input"
      ref="input"
      v-model="url"
      :fetch-suggestions="querySearch" 
      placeholder="请选择或输入视频源地址" 
      style="width:780px"
      @mouseenter.native="isHover = true"
      @mouseleave.native="isHover = false"
    >
      <i v-if="showsClear" class="el-icon-circle-close el-input__icon" slot="suffix" @click="handleIconClick"></i>
      <i v-else class="el-icon-arrow-down el-input__icon" slot="suffix" @click="handleIconClick"></i>
      <template slot-scope="{ item }">
        <div @click="choose(item)">
          <span style="float: left">{{ item.name }}</span>
          <span style="margin-left:15px;color: #8492a6; font-size: 13px">({{ item.value }})</span>
        </div>
      </template>
    </el-autocomplete>
       <el-select v-model="ruleForm.subjectId" filterable placeholder="请选择学科" @blur="selectBlur">
       <el-option
           v-for="item in subjectList"
           :key="item.id"
           :label="item.name"
           :value="item.id">
        </el-option>
   </el-select>

  </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
    import kForm from '@/components/form/index.vue'

    export default {
        name: 'Home',
        props: {
            clearable: {
                type: Boolean,
                default: true,
            }
        },
        provide() {
            return {
                someThing: '海水梦悠悠，君愁我亦愁'
            }
        },
        components: {
            // HelloWorld,
            kForm
        },
        computed: {
            showsClear() {
                return this.clearable && this.url && this.isHover
            },
        },
        data() {
            return {
                work: '小舟从此逝,江海寄余生',
                isHover: false,
                url: '',
                videoTableData: []
            }
        },
        mounted() {
            // this.$refs['hello'].bg = 'I lost you forever'
            // this.$children[0].bg = "I can't find you "
            this.$children[0].bg = "I can't find you"
            this.$refs['hello'].bg = ' 海水梦悠悠，君愁我亦愁 I lost you forever'
            this.$refs['hello'].bg = ''
            this.$refs['hello'].bg = ''
            this.$refs['hello'].bg = ''
            this.$refs['hello'].bg = 'ererwerwerwerwerwerwe'
            this.$refs['hello'].bg = 'wrwerwerwer与兔兔'
            this.getvideoTableData()
  },
  methods: {
    handleIconClick () {
      if (this.showsClear) {
        this.url = '';
      } else {
        this.$refs.input.focus();
      }
    },
    querySearch(queryString, cb) {
      var videoTableData = this.videoTableData;
      var results = queryString ? videoTableData.filter(this.createStateFilter(queryString)) : videoTableData;
      cb(results);
    },
    createStateFilter(queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) >=0);
      };
    },
    getvideoTableData (){
      this.videoTableData = [{
        name:'文件分享.mp4',
        value:'dshgfdshfjdshghfhsd……'  
       }
      ]
    }

  }
}
</script>
