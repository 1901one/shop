/* 
* @Author: anchen
* @Date:   2019-05-10 17:10:06
* @Last Modified by:   anchen
* @Last Modified time: 2019-05-10 17:10:41
*/

$(document).ready(function(){
          import Vue from 'vue'

        // 图片转换
        Vue.filter('replaceWH', (val, wh) => {
          return val.replace('w.h', wh)
        })

        // 时间转换
        Vue.filter('formatDates', value => {
          let date = new Date(value)
          let y = date.getFullYear()
          let m = date.getMonth() + 1
          let d = date.getDate()
          return `${y}-0${m}-0${d}`
        })
          
            
});