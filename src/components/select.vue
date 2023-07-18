<template>
  <div
    class="wzc_select"
    :disabled="disabled"
    :class="{ 'multiple': multiple }"
    :style="styleVar" >
    <div
      class="divSelect"
      :class="{ 'drop_down': isListShow }"
      ref="divSelect" >
      <div class="divSelectinput" @click="dropDownSelect">
        <!-- 选中后的内容 -->
        <div
          class="selectinfos"
          :disabled="disabled"
          :title="getLabel(valueList[0])"
          :class="{ 'no_select': getValue(valueList[0]) == '' }"
          v-if="!multiple">
          &nbsp;{{ getLabel(valueList[0]) }}&nbsp;
        </div>
        <div v-if="multiple" class="selectMultiple">
          <div class="icon-com" v-for="d in valueList">
            <span>{{ getLabel(d) }}</span>
            <i class="close" @click.stop="deleteItem(d)"></i>
          </div>
        </div>
        <p class="flexP"></p>
        <!-- 三角形图标 -->
        <i class="imgthree fa fa-caret-up" :class="{ 'is-reverse': isListShow }"></i>
      </div>
    </div>
    <!-- 下拉框列表 -->
    <transition name="drop-down" >
      <div class="selectlist" v-if="isListShow" ref="dropDown">
        <ul class="wzc_option_list copyListbox" :style="styleVar">
          <li
            class="wzc_option"
            @click="checkAllHandler"
            v-if="multiple && checkall">
            <div class="wzc_option_dropdown_item">
              <label class="select-container" :for="checkallId">
                <div class="checkbox s-checkbox">
                  <input
                    type="checkbox"
                    :name="checkallId"
                    :id="checkallId"
                    v-model="checkallValue">
                  <i></i>
                </div>
                <div class="mr-clamp2" style="flex: 1">全选</div>
              </label>
            </div>
          </li>
          <li class="wzc_option"
            v-for="item in data"
            :key="item.id"
            :style="styleVar"
            @click="currentSelect(item)">
            <div
              v-if="item && item.type && item.type == 'create'"
              class="wzc_option_dropdown_item icon-com default"
              @click.stop="item.clickHook && item.clickHook()">
              <i :class="item.addIcon"></i>
              {{ getLabel(item) }}
            </div>
            <div
              v-else
              class="wzc_option_dropdown_item"
              :class="{active: getValue(item) == value}">
              <label class="select-container" :for="item.id">
                <div class="checkbox s-checkbox" v-if="multiple">
                  <input
                    type="checkbox"
                    :name="item.id"
                    :id="item.id"
                    :checked="value ? value.filter(i => this.deepEqual(i, item))['length'] > 0 : false">
                  <i></i>
                </div>
                <div class="mr-clamp2" style="flex: 1">{{ getLabel(item) }}</div>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import com from '@/assets/js/common.js'
const {getId, copyData, isBaseData, deepEqual} = com
export default {
  name:'select-common',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    placeholder: {
      type: String,
      default: '请选择'
    },
    width: {
      type: Number,
      default: 180
    },
    height: {
      type: Number,
      default: 32
    },
    data: {
      type: Array
    },
    value: {
      default: ''
    },
    label: {
      type: String
    },
    multiple:{
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否绑定value值，绑定后，value返回value值或集合
    bindvalue: {
      type: Boolean,
      default: false
    },
    // 开启全选选项，需要先开启多选
    checkall: {
      type: Boolean,
      default: false
    },
    closeoptions: {
      type: Number
    }
  },
  watch: {
    isListShow(val){
      if(val){
        this.setOptionPosition()
      } else {
        document.body.removeChild(this.$refs.dropDown)
      }
    },
    value: {
      handler(){
        this.changeValueList()
      },
      deep: true
    },
    closeoptions(){
      this.scrollEvent()
    }
  },
  data() {
    return {
      isListShow: false,
      valueList: [],   // 选中的数据集合
      checkallId: this.getId() + 'checkall',
      checkallValue: false,
    };
  },
  mounted() {
    document.addEventListener("click", this.clickEvent)
    document.addEventListener('scroll', this.scrollEvent)
  },
  computed: {
    styleVar() {
      return {
        '--select-height': this.height + 'px',
        '--select-width': this.width + 'px'
      }
    }
  },
  created(){
    this.changeValueList()
  },
  methods: {
    getId,
    copyData,
    isBaseData,
    deepEqual,
    setOptionPosition(){
      this.$nextTick(() => {
        document.body.appendChild(this.$refs.dropDown)
        let {x, y, top, bottom} = this.$refs.divSelect.getBoundingClientRect()
        let height = this.$refs.dropDown.offsetHeight
        let str = ''
        if ($(window).height() - bottom < height + 5) {
          str = `position: fixed; top: ${top - height - 5}px; left: ${x}px`;
        } else {
          str = `position: fixed; top: ${bottom + 3}px; left: ${x}px`;
        }
        this.$refs.dropDown.style.cssText = str
      })
    },
    getLabel(item){
      return item ? (this.isBaseData(item) ? item : (this.label ? item[this.label] : item.name)) : this.placeholder
    },
    getValue(item){
      return item ? (this.bindvalue ? (item.value ? item.value: item.id) : item) : ''
    },
    revertData(arr = [], data){
      if(arr && arr.filter(i => this.deepEqual(i, data))['length'] > 0){
        for(let i in arr){
          if(this.deepEqual(arr[i], data)){
            arr.splice(i,1)
            break
          }
        }
      }else{
        arr.push(data)
      }
      return arr
    },
    changeValueList(){
      this.valueList = []
      if (this.multiple && !this.value instanceof Array) {
        console.error('multiple选项时，value应当是个数组，现在是：' + this.value)
        return
      }

      let value = this.copyData(this.value);
      if (!this.multiple) {
        value = [this.value]
      }
      for (let i in this.data) {
        for (let j in value) {
          if (this.deepEqual(this.getValue(this.data[i]), value[j])) {
            this.valueList.push(this.data[i])
          }
        }
      }
      if (this.multiple && this.checkall) {
        this.checkallValue = this.data.length == this.valueList.length
      }

      console.log('value', value)
      // value改变，重新设置option位置
      if (this.isListShow) {
        this.setOptionPosition()
      }
      console.log('valueList:' + JSON.stringify(this.valueList))
    },
    dropDownSelect() {
      if(this.disabled)return
      this.isListShow = !this.isListShow;
    },
    currentSelect(item) {
      let value;
      if (this.multiple) {
        value = this.revertData(this.value || [], this.getValue(item))
      } else {
        this.isListShow = !this.isListShow;
        value = this.getValue(item)
      }
      console.log(this.multiple, JSON.stringify(value))
      this.change(value);
    },
    change(data){
      this.$emit('input', data);
      this.$emit('change', data);
    },
    clickEvent(e){
      if(this.$refs.divSelect && this.$refs.dropDown) {
        if (
          !!this.$refs.divSelect.contains(e.target) ||
          !!this.$refs.dropDown.contains(e.target)
        ) {
          return;
        } else {
          this.isListShow = false;
        }
      }  
    },
    scrollEvent(){
      this.isListShow = false
    },
    deleteItem(i){
      this.isListShow = false
      this.currentSelect(i)
    },
    checkAllHandler(){
      if (this.checkallValue) {
        this.change([]);
      } else {
        this.change(this.data.map(i => this.getValue(i)));
      }
      this.checkallValue = !this.checkallValue
    }
  },
  beforeDestroy(){
    if(document.body.contains(this.$refs.dropDown)){
      document.body.removeChild(this.$refs.dropDown)
    }
    document.removeEventListener("click", this.clickEvent)
    document.removeEventListener('scroll', this.scrollEvent)
  }
};
</script>
<style>
.wzc_select {
  border: 1px solid #CFCFCF;
  border-radius: 2px;
  height: var(--select-height);
  width: var(--select-width);
  line-height: var(--select-height);
}
.wzc_select:disabled{
  cursor: not-allowed;
}
.wzc_select.multiple{
  height: auto;
  min-height: var(--select-height);
}
.divSelect {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border:2px solid #f3f3f3;
}
.drop_down {
  border: 2px solid #2663FF;
}
.divSelectinput {
  height: 100%;
  min-height: 26px;
  margin: 0 5px 0 12px;
  display: flex;
}
.selectinfos {
  width: calc(100% - 20px);
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.selectinfos:disabled{
  cursor: not-allowed;
}
.no_select {
  color: #ccc;
}
.imgthree {
  width: 16px;
  line-height: var(--select-height);
  text-align: center;
  transform: rotate(0deg);
  transition: all 0.1s;
  background: url(/static/img/arrow-select.svg) no-repeat center center;
  background-size: 16px 16px;
}
.imgthree:before {
  cursor: pointer;
  color: #ccc;
}
.imgthree.is-reverse {
  transform: rotate(180deg);
}
.selectlist {
  margin-top: 1px;
  z-index: 99999;
  position: relative;
  background-color: transparent;
}
.wzc_option_list {
  width: var(--select-width);
  padding: 3px 0px;
  border-radius: 4px;
  border: 1px solid #E7E7E9;
  background: #FFF;
  box-shadow: 0px 6px 24px 0px rgba(31, 35, 41, 0.10);
  margin: 0;
  max-height: 280px;
  overflow: auto;
}
.drop-down-enter {
  opacity: 0;
  transform:translate(0px, -80px) scaleY(0.2);
}
.drop-down-leave-to {
  opacity: 0;
  transform:translate(0px, -80px) scaleY(0.2);
}
.drop-down-enter-active {
  transition: all 0.1s ease-in;
}
.drop-down-leave-active {
  transition: all 0.1s ease;
}
.wzc_option {
  list-style: none;
  height:auto;
  width: 100%;
}
.wzc_option_dropdown_item {
  height: 100%;
  width: 100%;
  line-height:20px;
  cursor: pointer;
  margin: 0 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px 12px;
}
.wzc_option_dropdown_item:hover {
  background-color: #F0F2F7;
}
.wzc_option_dropdown_item.active{
  color: var(--primary);
}
.wzc_option_dropdown_item .select-container{
  pointer-events: none;
  margin: 0;
}
.select-container{
  display: flex;
  display: -webkit-flex;
  justify-content: flex-start;
  align-items: center;
}
  .s-checkbox{
    margin-right: 7px;
  }
.select-container  .checkbox {
  width: 16px;
  height: 16px;
  position: relative;
  margin: 0 11px 0 0;
  flex-grow: 0;
  flex-shrink: 0;
  cursor: pointer;
}
 .select-container  .checkbox > input {
  visibility: hidden;
}
.select-container  .checkbox > input + i {
  display: inline-block;
  width: 100%;
  height: 100%;
  border: 1px solid #C3CCD9;
  border-radius: 3px;
  cursor: pointer;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(0.9);
}
.select-container  .checkbox > input:checked + i {
  border: none;
  background: url(/static/img/selected.svg) no-repeat center center;
  background-size: 100% 100%;
  transform: scale(1);
}
 .select-container  .checkbox > input:disabled + i {
  background: #EBEEF2;
  border: 1px solid #E1E3E5;
}
#box .evaluate-select-gray{
  padding-left: 0;
}
.selectMultiple {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.selectMultiple .icon-com {
  border-radius: 2px;
  background: rgba(0, 132, 255, 0.08);
  padding: 0px 2px 0px 6px;
}
.selectMultiple .icon-com span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>