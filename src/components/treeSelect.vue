<template>
  <el-select
    :title="multiple? optionData.name : ''"
    ref="select"
    :value="value"
    placeholder="请选择"
    size="mini"
    multiple
    collapse-tags
    clearable
    :disabled="disabled"
    :filterable="filterable"
    :filter-method="filterMethod"
    style="width: 100%;"
    @remove-tag="remove"
    @visible-change="visibleChange"
  >
    <el-option
      ref="option"
      class="tree-select__option"
      disabled
      :value="value[0] && value[0].label"
    >
      <el-tree
        ref="tree"
        class="tree-select__tree"
        :class="`tree-select__tree--${multiple ? 'checked' : 'radio'}`"
        :node-key="nodeKey"
        :data="data"
        :props="props"
        :load="loadNode"
        lazy
        :default-expanded-keys="[value]"
        :show-checkbox="multiple"
        :highlight-current="!multiple"
        :expand-on-click-node="multiple"
        :filter-node-method="filterNode"
        @node-click="handleNodeClick"
        @check-change="handleCheckChange"
      ></el-tree>
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'TreeSelect',
  props: {
    // v-model绑定
    value: {
      type: [String, Number, Array],
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    },
    // 树形的数据
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    // 每个树节点用来作为唯一标识的属性
    nodeKey: {
      type: [String, Number],
      default: 'gid'
    },
    filterable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // tree的props配置
    props: {
      type: Object,
      default: function () {
        return {
          label: 'label',
          children: 'children',
          isLeaf: 'leaf'
        }
      }
    }
  },
  data() {
    return {
      optionData: {
        id: '',
        name: ''
      },
      filterFlag: false,
    }
  },
  watch: {
    value: {
      handler(val) {
        if (!this.isEmpty(this.data)) {
          this.init(val)
        }
      },
      immediate: true
    },
    data: function (val) {
      if (!this.isEmpty(val)) {
        this.init(this.value)
      }
    }
  },
  created() {},
  methods: {
    getId() {
      return Date.now() + '' + Math.random() * 10000
    },
    // 是否为空
    isEmpty(val) {
      for (let key in val) {
        return false
      }
      return true
    },
    handleNodeClick(data) {
      if (this.multiple) {
        return
      }
      this.$emit('input', data[this.nodeKey])
      this.$refs.select.visible = false
    },
    handleCheckChange() {
      const nodes = this.$refs.tree.getCheckedNodes()
      const value = nodes.map((item) => {
        let obj = {
          [this.nodeKey]: item[this.nodeKey],
          label: item.label
        }
        if (item.hasOwnProperty('leaf')) {
          obj.leaf = item.leaf
        }
        return obj
      })
      this.$emit('input', value)
    },
    init(val) {
      // 多选
      if (this.multiple) {
        const arr = val.map(i => i[this.nodeKey])
        this.$nextTick(() => {
          this.$refs.tree.setCheckedKeys(arr)
          const nodes = this.$refs.tree.getCheckedNodes()
          this.optionData.id = val
          this.optionData.name = nodes.map((item) => item[this.props.label])
        })
      }
      // 单选
      else {
        val = val === '' ? null : val
          this.$nextTick(() => {
            this.$refs.tree && this.$refs.tree.setCurrentKey(val)
            if (val === null) {
              return
            }
            const label = this.props.label || 'name'
            const node = this.$refs.tree.getNode(val)
            this.optionData.id = val
            this.optionData[label] = node.label
          })
      }
    },
    visibleChange(e) {
      if (e) {
        const tree = this.$refs.tree
        this.filterFlag && tree.filter('')
        this.filterFlag = false
        let selectDom = null
        if(this.multiple) {
          selectDom = tree.$el.querySelector('.el-tree-node.is-checked')
        } else {
          selectDom = tree.$el.querySelector('.is-current')
        }
        setTimeout(() => {
          this.$refs.select.scrollToOption({ $el: selectDom })
        }, 0)
      }
    },
    remove() {
      this.$emit('input', this.multiple ? [] : '')
    },
    filterMethod(val) {
      this.filterFlag = true
      this.$refs.tree.filter(val)
    },
    filterNode(value, data) {
      if (!value) return true
      const label = this.props.label || 'name'
      return data[label] && data[label].indexOf(value) !== -1
    },
    getServiceId(id, data = this.data, serviceId = -1){
      for(let i in data){
        if (data[i].level == 0) {
          serviceId = data[i][this.nodeKey]
        }
        if (data[i][this.nodeKey] == id){
          return serviceId
        } else {
          this.getServiceId(id, data[i].children, serviceId)
        }
      }
      return serviceId
    },
    loadNode(node, resolve) {
      console.log('loadNode', node, 'isLeaf', node.isLeaf)
      if (node.level == 0) {
        return resolve(this.data);
      }
      if (node.level >= 1) {
        if (node.data && node.data.children && node.data.children.length > 0) {
          return resolve(node.data.children);
        } else {
          return resolve([{gid: this.getId(), label: '111', leaf: true}])
          $.ajax({
            url: '/evaluation/admin/field/dept-list',
            type: 'GET',
            data: {
              id: node.gid,
              serviceId: this.getServiceId(node.gid)
            },
            async: false,
            success: function (res) {
              console.log('/evaluation/admin/field/dept-list', res)
              if (res.code == 1) {
                return resolve(res.data)
              }
            }
          })
        }
      }
    }
  }
}
</script>

<style>
.tree-select__option.el-select-dropdown__item {
  height: auto;
  line-height: 1;
  padding: 0;
  background-color: #fff;
}
.tree-select__tree {
  padding: 4px 20px;
  font-weight: 400;
}
.tree-select__tree.tree-select__tree--radio .el-tree-node.is-current > .el-tree-node__content {
  color: var(--primary);
  font-weight: 700;
}
.el-select-dropdown{
  z-index: 10006!important;
}
.el-select__tags .el-select__input{
  border: unset!important;
  border-radius: unset!important;
  background: unset!important;
  padding: unset!important;
  outline: none!important;
  box-shadow: unset!important;
}
.el-select-dropdown.is-multiple .el-select-dropdown__item{
  padding: 0!important;
}
.el-select-dropdown.is-multiple .el-select-dropdown__item.selected.hover{
  background-color: transparent!important;
  padding: 0!important;
}
.el-tag.el-tag--info {
  max-width: calc(100% - 50px);
}
.hideOption{
  display: none!important;
}
</style>