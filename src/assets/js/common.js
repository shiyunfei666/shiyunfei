let contextPath = '';
/**
 * @description: 返回url的name值
 * @param {*} name
 */
function getUrlParam(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

/**
 * @description: 判断数据是否为空
 */
function isEmpty(value) {
    if (value == undefined || value == null || value === "") {
        return true;
    }
    return false;
}

/**
 * @description: 深拷贝一个数据
 * @param {*} newWeakMap 不需要传入，为数据递归服务
 */
function copyData(value, newWeakMap = new WeakMap()) {
  if (typeof value !== 'object' || value === null) {
    return value
  }
  const cached = newWeakMap.get(value)
  if (cached) {
    return cached
  }
  const result = Array.isArray(value) ? [] : {};
  Object.setPrototypeOf(result, Object.getPrototypeOf(value))
  newWeakMap.set(value, result)
  for(const key in value) {
    if(value.hasOwnProperty(key)){
      result[key] = copyData(value[key], newWeakMap)
    }
  }
  return result
}

function jumpUrl(url) {
  window.open('./' + url + '.html')
}

function jumpStep(num){
  window.history.go(num)
}

/**
 * @description: 获取随机id
 */
function getId() {
  return Math.round((Date.now() + '' + Math.random() * 10000)/1000)
}

/**
 * @description: 计算字符长度,并返回限制长度的字符串
 * @param {string} str
 * @param {number} limit
 * @return {object}
 */
function countCharacterLen(str, limit = undefined) {
  let len = 0, resultStr = '';
  if (str != null) {
      for (let i = 0; i < str.length; i++) {
          if (str.charCodeAt(i) > 127 || str.charCodeAt(i) == 94) {
              len += 2;
              if (limit && len > limit) {
                  break;
              } else {
                  resultStr += str[i];
              }
          } else {
              resultStr += str[i];
              len++;
          }
          if (limit && len >= limit) {
              break;
          }
      }
  }
  return {
    len,
    resultStr
  };
}

/**
 * @description: 绑定输入框后，直接限制输入字符,并返回限制后的字符串
 * @param {HTMLAllCollection} e
 * @param {Number} limit
 * @return {string}
 */
function limitLength(e, limit = 0){
  let val = e.currentTarget.value
  let {resultStr} = countCharacterLen(val, limit)
  e.currentTarget.value = resultStr;
  return resultStr
}

/**
 * @description: 限制数字输入框的大小
 * @param {*} limit 最大输入值
 */
function limitNumber(e, limit = 100){
  let val = e.currentTarget.value
  val = val.replace(/\D/g, '')
  val = parseInt(0 + val)
  if (val < 0) {
    val = 0
  } else if (val > limit) {
    val = limit
  }
  e.currentTarget.value = val
  return val
}

/**
 * @description: 将layui返回的时间对象格式化
 */
function getFormatTime(obj) {
  let date, hours, minutes, month, seconds, year;
  if(obj instanceof Date) {
    year = obj.getFullYear()
    month = obj.getMonth() + 1
    date = obj.getDate()
    hours = obj.getHours()
    minutes = obj.getMinutes()
    seconds = obj.getSeconds()
  } else {
    year = obj.year
    month = obj.month
    date = obj.date
    hours = obj.hours
    minutes = obj.minutes
    seconds = obj.seconds
  }
  return (
    String(year).padStart(4, '0') + '-' +
    String(month).padStart(2, '0') + '-' +
    String(date).padStart(2, '0') + ' ' +
    String(hours).padStart(2, '0') + ':' +
    String(minutes).padStart(2, '0')
  )
}

/**
 * @description: 是否为基本类型数据
 */
function isBaseData(data){
  return (typeof(data) == 'string' || typeof(data) == 'number' || typeof(data) == 'boolean')
}

/**
 * @description: 比较两个数据是否相同
 */
function deepEqual(n, m) {
  if (typeof(n) != typeof(m)) {
    return false
  }
  if (isBaseData(n)) {
    return n === m
  }
  if (!(n instanceof Object && m instanceof Object)) {
    return false
  }
  const keys1 = Object.keys(n);
  const keys2 = Object.keys(m);

    let tempKeys;
    if (keys1.length < keys2.length) {
        tempKeys = keys1
    } else {
        tempKeys = keys2
    }

  for (let index = 0; index < tempKeys.length; index++) {
    let key = tempKeys[index];
    if (n.hasOwnProperty(key) && m.hasOwnProperty(key)) {
        const val1 = n[key];
        const val2 = m[key];
        const areObjects = isObject(val1) && isObject(val2);
        if (areObjects && !deepEqual(val1, val2) ||
            !areObjects && val1 !== val2) {
            return false;
        }
    }
  }

  return true;
}

/**
 * @description: 判断是否为对象
 */
function isObject(object) {
  return object != null && typeof object === 'object';
}

function getUuid() {
    var len = 32;      //32长度
    var radix = 16;    //16进制
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;
    if (len) {
        for (i = 0; i < len; i++) {
            uuid[i] = chars[0 | Math.random() * radix];
        }
    } else {
        var r;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return uuid.join('');
}

const com = {
  getId,
  copyData,
  isBaseData,
  deepEqual,
}
console.log(com)
export default com