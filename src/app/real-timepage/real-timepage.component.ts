import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-real-timepage',
  templateUrl: './real-timepage.component.html',
  styleUrls: ['./real-timepage.component.css']
})
export class RealTimepageComponent implements OnInit {
  public options;//折线图配置项
  public options1;//柱状图配置项
  public options2;//空心圆配置
  public options3;//饼状图配置
  public options4;//空心圆配置
  public options5;//中国地图
  constructor() { }

  ngOnInit() {
    this.draw_line();
    this.draw_histogram();
    this.draw_hollowcylinde();
    this.draw_Cake();
    this.draw_hollowcylinde_1();
    this.draw_chinaMap();
    //this.draw_chinaMap1();
  }
  draw_line() {
    this.options = {
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        left: '1%',
        right: '2%',
        top: '3%',
        containLabel: true
      },
      calculable: true,
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ["11:30", "12:00", "12:30", "13:00", "14:00", "15:00", "16:00", "17:00"],
        axisLine: {
          lineStyle: {
            color: '#C3C5DE',
            width: 1,//这里是为了突出显示加上的
          }
        },
      }],
      yAxis: [{
        type: 'value',
        name: '在线人数统计',
        minInterval: 1,
        axisLabel: {
          formatter: '{value} 人'
        },
        axisLine: {
          lineStyle: {
            color: '#C3C5DE',
            width: 1,//这里是为了突出显示加上的
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ['#C3C5DE']
          }
        },
      }],
      series: [{
        symbolSize: 8,//拐点大小
        itemStyle: {
          normal: {
            color: "#89B5CE",//图标颜色
            width: 5
          },

        },
        areaStyle: {//填充区域的颜色
          normal: {
            color: '#253D69'
          }
        },
        lineStyle: {
          normal: {
            width: 2,  //连线粗细
            color: "#89B5CE"  //连线颜色
          },

        },
        // label: {
        //   normal: {
        //     show: true,
        //     position: 'inside'
        //   }
        // },
        smooth: true,
        name: '在线人数统计',
        type: 'line',
        stack: '总量',
        data: [300, 200, 400, 800, 400, 300, 300, 450, 600, 500, 400, 300, 600],

      }]
    };
    // this.isLoading = false;
  }
  //柱状图
  draw_histogram() {
    this.options1 = {
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        x2: 42,
        left: '1%',
        right: '2%',
        top: '2%',
        containLabel: true
      },

      xAxis: [{
        type: 'category',
        boundaryGap: [0, 0.01],
        data: ["个人用户", "机构用户", "体制用户", "其他用户"],
        axisLabel: {
          interval: 0,
          roteate: -30
        },
        axisLine: {
          lineStyle: {
            color: '#C3C5DE',
            width: 1,//这里是为了突出显示加上的
          }
        },
      }],
      yAxis: [
        {
          type: 'value',
          // name: '在线人数统计',
          minInterval: 1,
          axisLabel: {
            formatter: '{value}人'
          },
          axisLine: {
            lineStyle: {
              color: '#C3C5DE',
              width: 1,//这里是为了突出显示加上的
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#C3C5DE']
            }
          },
        }
      ],
      series: [{
        name: '人数',
        type: 'bar',
        data: [5, 3, 2, 1],
        barWidth: 40,
        itemStyle: {
          normal: {
            color: function (params) {
              var colorList = ['#68D7E8', '#275EB8', '#5D60E6', '#B367E6', '#29AAE3', '#B74AE5', '#0AAF9F', '#E89589', '#16A085', '#4A235A', '#C39BD3 ', '#F9E79F', '#BA4A00', '#ECF0F1', '#616A6B', '#EAF2F8', '#4A235A', '#3498DB'];
              return colorList[params.dataIndex]
            },
            label: {
              show: true,//是否展示
              textStyle: {
                fontWeight: 'bolder',
                fontSize: '12',
                fontFamily: '微软雅黑',
              }
            }

          },
        },
      }]
    };
  }
  //空心圆图
  draw_hollowcylinde() {
    this.options2 = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        itemWidth: 20,
        itemHeight: 10,

        data: ['电信', '网通', '移动', '长城', '其他'],
        textStyle: {
          color: '#fff',
          fontSize: 12
        }
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '75%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 335, name: '电信' },
            { value: 310, name: '网通' },
            { value: 234, name: '移动' },
            { value: 135, name: '长城' },
            { value: 1548, name: '其他' }
          ]
        }
      ]
    };

  }
  //圆饼图
  draw_Cake() {
    this.options3 = {
      legend: {
        // orient: 'vertical',
        // top: 'middle',
        itemWidth: 10,
        itemHeight: 10,
        bottom: 5,
        left: 'center',
        data: ['网络故障', '媒体故障', '信令故障', '音视频故障', '客户端故障', '其他故障'],
        textStyle: {
          color: '#fff',
          fontSize: 12
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} %"
      },
      calculable: true,
      series: [{
        name: '终端数据',
        type: 'pie',
        radius: '65%', //饼图的半径大小
        center: ['50%', '45%'], //饼图的位置
        data: [
          { value: 33, name: '网络故障' },
          { value: 31, name: '媒体故障' },
          { value: 23, name: '信令故障' },
          { value: 23, name: '音视频故障' },
          { value: 13, name: '客户端故障' },
          { value: 15, name: '搜索引擎' }
        ]
      }],
      color: ['rgb(247,131,131)', 'rgb(131,200,246)', 'rgb(245,222,131)', 'rgb(203,125,247)', 'rgb(113,247,174)', 'rgb(180,247,110)']
    };

  }
  //空心圆地图2
  draw_hollowcylinde_1() {
    this.options4 = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: 'right',
        itemWidth: 20,
        itemHeight: 10,
        data: ['window端', 'Mac端', 'ios端', 'ipad端', 'Android端', 'web端'],
        textStyle: {
          color: '#fff',
          fontSize: 12
        }
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '75%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 35, name: 'window端' },
            { value: 30, name: 'Mac端' },
            { value: 234, name: 'ios端' },
            { value: 135, name: 'ipad端' },
            { value: 135, name: 'Android端' },
            { value: 15, name: 'web端' }
          ]
        }
      ]
    };

  }
  draw_chinaMap() {
    console.log("进入地图了");
    this.options5 = {

      tooltip: {//提示框组件。
        trigger: 'item'//数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
      },
      legend: {
        orient: 'horizontal',//图例的排列方向
        x: 'left',//图例的位置
        data: ['订单量']
      },

      // visualMap: {//颜色的设置  dataRange
      //   x: 'left',
      //   y: 'center',
      //   splitList: [
      //     { start: 1500 },
      //     { start: 900, end: 1500 },
      //     { start: 310, end: 1000 },
      //     { start: 200, end: 300 },
      //     { start: 10, end: 200, label: '10 到 200（自定义label）' },
      //     { start: 5, end: 5, label: '5（自定义特殊颜色）', color: 'black' },
      //     { end: 100 }
      //   ],
      //   //            min: 0,
      //   //            max: 2500,
      //   //            calculable : true,//颜色呈条状
      //   text: ['高', '低'],// 文本，默认为数值文本
      //   color: ['#E0022B', '#E09107', '#A3E00B']
      // },
      // toolbox: {//工具栏
      //   show: true,
      //   orient: 'vertical',//工具栏 icon 的布局朝向
      //   x: 'right',
      //   y: 'center',
      //   feature: {//各工具配置项。
      //     mark: { show: true },
      //     dataView: { show: true, readOnly: false },//数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
      //     restore: { show: true },//配置项还原。
      //     saveAsImage: { show: true }//保存为图片。
      //   }
      // },
      roamController: {//控制地图的上下左右放大缩小 图上没有显示
        show: true,
        x: 'right',
        mapTypeControl: {
          'china': true
        }
      },
      series: [
        {
          name: '节点数据',
          type: 'map',
          mapType: 'china',
          roam: true,//是否开启鼠标缩放和平移漫游
          itemStyle: {//地图区域的多边形 图形样式
            normal: {//是图形在默认状态下的样式
              label: {
                show: true,//是否显示标签
                textStyle: {
                  color: "rgb(249, 249, 249)"
                }
              }
            },
            emphasis: {//是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
              label: { show: true }
            }
          },
          top: "3%",//组件距离容器的距离
          data: [
            { name: '北京', value: Math.round(Math.random() * 2000) },
            { name: '天津', value: Math.round(Math.random() * 2000) },
            { name: '上海', value: Math.round(Math.random() * 2000) },
            { name: '重庆', value: Math.round(Math.random() * 2000) },
            { name: '河北', value: 0 },
            { name: '河南', value: Math.round(Math.random() * 2000) },
            { name: '云南', value: 5 },
            { name: '辽宁', value: 305 },
            { name: '黑龙江', value: Math.round(Math.random() * 2000) },
            { name: '湖南', value: 200 },
            { name: '安徽', value: Math.round(Math.random() * 2000) },
            { name: '山东', value: Math.round(Math.random() * 2000) },
            { name: '新疆', value: Math.round(Math.random() * 2000) },
            { name: '江苏', value: Math.round(Math.random() * 2000) },
            { name: '浙江', value: Math.round(Math.random() * 2000) },
            { name: '江西', value: Math.round(Math.random() * 2000) },
            { name: '湖北', value: Math.round(Math.random() * 2000) },
            { name: '广西', value: Math.round(Math.random() * 2000) },
            { name: '甘肃', value: Math.round(Math.random() * 2000) },
            { name: '山西', value: Math.round(Math.random() * 2000) },
            { name: '内蒙古', value: Math.round(Math.random() * 2000) },
            { name: '陕西', value: Math.round(Math.random() * 2000) },
            { name: '吉林', value: Math.round(Math.random() * 2000) },
            { name: '福建', value: Math.round(Math.random() * 2000) },
            { name: '贵州', value: Math.round(Math.random() * 2000) },
            { name: '广东', value: Math.round(Math.random() * 2000) },
            { name: '青海', value: Math.round(Math.random() * 2000) },
            { name: '西藏', value: Math.round(Math.random() * 2000) },
            { name: '四川', value: Math.round(Math.random() * 2000) },
            { name: '宁夏', value: Math.round(Math.random() * 2000) },
            { name: '海南', value: Math.round(Math.random() * 2000) },
            { name: '台湾', value: Math.round(Math.random() * 2000) },
            { name: '香港', value: Math.round(Math.random() * 2000) },
            { name: '澳门', value: Math.round(Math.random() * 2000) }
          ]
        }
      ]
    };
  }
  // draw_chinaMap1() {
  //   console.log("进入地图2");
  //   this.option = {
  //     title: {
  //       text: 'iphone销量',
  //       subtext: '纯属虚构',
  //       x: 'center'
  //     },
  //     tooltip: {
  //       trigger: 'item'
  //     },
  //     legend: {
  //       orient: 'vertical',
  //       x: 'left',
  //       data: ['iphone3', 'iphone4', 'iphone5']
  //     },
  //     dataRange: {
  //       min: 0,
  //       max: 2500,
  //       x: 'left',
  //       y: 'bottom',
  //       text: ['高', '低'],           // 文本，默认为数值文本
  //       calculable: true
  //     },
  //     toolbox: {
  //       show: true,
  //       orient: 'vertical',
  //       x: 'right',
  //       y: 'center',
  //       feature: {
  //         mark: { show: true },
  //         dataView: { show: true, readOnly: false },
  //         restore: { show: true },
  //         saveAsImage: { show: true }
  //       }
  //     },
  //     roamController: {
  //       show: true,
  //       x: 'right',
  //       mapTypeControl: {
  //         'china': true
  //       }
  //     },
  //     series: [
  //       {
  //         name: 'iphone3',
  //         type: 'map',
  //         mapType: 'china',
  //         roam: false,
  //         itemStyle: {
  //           normal: { label: { show: true } },
  //           emphasis: { label: { show: true } }
  //         },
  //         data: [
  //           { name: '北京', value: Math.round(Math.random() * 1000) },
  //           { name: '天津', value: Math.round(Math.random() * 1000) },
  //           { name: '上海', value: Math.round(Math.random() * 1000) },
  //           { name: '重庆', value: Math.round(Math.random() * 1000) },
  //           { name: '河北', value: Math.round(Math.random() * 1000) },
  //           { name: '河南', value: Math.round(Math.random() * 1000) },
  //           { name: '云南', value: Math.round(Math.random() * 1000) },
  //           { name: '辽宁', value: Math.round(Math.random() * 1000) },
  //           { name: '黑龙江', value: Math.round(Math.random() * 1000) },
  //           { name: '湖南', value: Math.round(Math.random() * 1000) },
  //           { name: '安徽', value: Math.round(Math.random() * 1000) },
  //           { name: '山东', value: Math.round(Math.random() * 1000) },
  //           { name: '新疆', value: Math.round(Math.random() * 1000) },
  //           { name: '江苏', value: Math.round(Math.random() * 1000) },
  //           { name: '浙江', value: Math.round(Math.random() * 1000) },
  //           { name: '江西', value: Math.round(Math.random() * 1000) },
  //           { name: '湖北', value: Math.round(Math.random() * 1000) },
  //           { name: '广西', value: Math.round(Math.random() * 1000) },
  //           { name: '甘肃', value: Math.round(Math.random() * 1000) },
  //           { name: '山西', value: Math.round(Math.random() * 1000) },
  //           { name: '内蒙古', value: Math.round(Math.random() * 1000) },
  //           { name: '陕西', value: Math.round(Math.random() * 1000) },
  //           { name: '吉林', value: Math.round(Math.random() * 1000) },
  //           { name: '福建', value: Math.round(Math.random() * 1000) },
  //           { name: '贵州', value: Math.round(Math.random() * 1000) },
  //           { name: '广东', value: Math.round(Math.random() * 1000) },
  //           { name: '青海', value: Math.round(Math.random() * 1000) },
  //           { name: '西藏', value: Math.round(Math.random() * 1000) },
  //           { name: '四川', value: Math.round(Math.random() * 1000) },
  //           { name: '宁夏', value: Math.round(Math.random() * 1000) },
  //           { name: '海南', value: Math.round(Math.random() * 1000) },
  //           { name: '台湾', value: Math.round(Math.random() * 1000) },
  //           { name: '香港', value: Math.round(Math.random() * 1000) },
  //           { name: '澳门', value: Math.round(Math.random() * 1000) }
  //         ]
  //       },
  //       {
  //         name: 'iphone4',
  //         type: 'map',
  //         mapType: 'china',
  //         itemStyle: {
  //           normal: { label: { show: true } },
  //           emphasis: { label: { show: true } }
  //         },
  //         data: [
  //           { name: '北京', value: Math.round(Math.random() * 1000) },
  //           { name: '天津', value: Math.round(Math.random() * 1000) },
  //           { name: '上海', value: Math.round(Math.random() * 1000) },
  //           { name: '重庆', value: Math.round(Math.random() * 1000) },
  //           { name: '河北', value: Math.round(Math.random() * 1000) },
  //           { name: '安徽', value: Math.round(Math.random() * 1000) },
  //           { name: '新疆', value: Math.round(Math.random() * 1000) },
  //           { name: '浙江', value: Math.round(Math.random() * 1000) },
  //           { name: '江西', value: Math.round(Math.random() * 1000) },
  //           { name: '山西', value: Math.round(Math.random() * 1000) },
  //           { name: '内蒙古', value: Math.round(Math.random() * 1000) },
  //           { name: '吉林', value: Math.round(Math.random() * 1000) },
  //           { name: '福建', value: Math.round(Math.random() * 1000) },
  //           { name: '广东', value: Math.round(Math.random() * 1000) },
  //           { name: '西藏', value: Math.round(Math.random() * 1000) },
  //           { name: '四川', value: Math.round(Math.random() * 1000) },
  //           { name: '宁夏', value: Math.round(Math.random() * 1000) },
  //           { name: '香港', value: Math.round(Math.random() * 1000) },
  //           { name: '澳门', value: Math.round(Math.random() * 1000) }
  //         ]
  //       },
  //       {
  //         name: 'iphone5',
  //         type: 'map',
  //         mapType: 'china',
  //         itemStyle: {
  //           normal: { label: { show: true } },
  //           emphasis: { label: { show: true } }
  //         },
  //         data: [
  //           { name: '北京', value: Math.round(Math.random() * 1000) },
  //           { name: '天津', value: Math.round(Math.random() * 1000) },
  //           { name: '上海', value: Math.round(Math.random() * 1000) },
  //           { name: '广东', value: Math.round(Math.random() * 1000) },
  //           { name: '台湾', value: Math.round(Math.random() * 1000) },
  //           { name: '香港', value: Math.round(Math.random() * 1000) },
  //           { name: '澳门', value: Math.round(Math.random() * 1000) }
  //         ]
  //       }
  //     ]
  //   };

  // }
}
