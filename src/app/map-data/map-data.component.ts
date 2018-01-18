import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AjaxServeService } from '../../providers/ajax-serve.service';
declare var BMap;
declare var echarts;

export class dataFormat {
  citys: Array<Citys>;
  moveLines: Array<MoveLines>;
}
export class Citys {
  ids: any;
  types: any;
  name: any;
  value: any[];
  symbolSize: any;
  itemStyle: {
    normal: {
      color: any
    }
  }
}
export class MoveLines {
  fromName: any;
  toName: any;
  coords: any[];
}
export class userInfoObj {
  user_name: string;
  token: string;
}
@Component({
  selector: 'app-map-data',
  templateUrl: './map-data.component.html',
  styleUrls: ['./map-data.component.css']
})
export class MapDataComponent implements OnInit {
  public userinfoobj: userInfoObj;
  public options;
  public myChart;
  public geoCoordMap;
  public allData: dataFormat;
  public isLoading: boolean = true;
  public publishInfo;
  public isshow: boolean;
  public title: string;
  @ViewChild('map_container') map_container: ElementRef;
  constructor(private router: Router,
    private ajaxServe: AjaxServeService,
  ) { }

  ngOnInit() {

    setInterval(this.getAllStremInfo(), 1000)
    var allData = {
      "citys": [{
        "name": "北京",
        "value": [116.407526, 39.90403, 3],
        "symbolSize": 4,
        "itemStyle": {
          "normal": {
            "color": "#58B3CC"
          }
        }
      }, {
        "name": "沈阳",
        "value": [123.431475, 41.805698, 1],
        "symbolSize": 2,
        "itemStyle": {
          "normal": {
            "color": "#F58158"
          }
        }
      }, {
        "name": "天津",
        "value": [117.200983, 39.084158, 2],
        "symbolSize": 2,
        "itemStyle": {
          "normal": {
            "color": "#F58158"
          }
        }
      }, {
        "name": "朝阳",
        "value": [116.443108, 39.92147, 1],
        "symbolSize": 4,
        "itemStyle": {
          "normal": {
            "color": "#F58158"
          }
        }
      }],
      /****************************************/
      "moveLines": [
        {
          "fromName": "北京",
          "toName": "沈阳",
          "coords": [
            [116.407526, 39.90403],
            [123.431475, 41.805698]
          ]
        },
        {
          "fromName": "北京",
          "toName": "沈阳",
          "coords": [
            [116.407526, 39.90403],
            [123.431475, 41.805698]
          ]
        },
        {
          "fromName": "北京",
          "toName": "沈阳",
          "coords": [
            [116.407526, 39.90403],
            [123.431475, 41.805698]
          ]
        },
        {
          "fromName": "天津",
          "toName": "朝阳",
          "coords": [
            [117.200983, 39.084158],
            [116.443108, 39.92147]
          ]
        },
        {
          "fromName": "天津",
          "toName": "朝阳",
          "coords": [
            [117.200983, 39.084158],
            [116.443108, 39.92147]
          ]
        }]
    };
    console.log(allData);
    // this.initMap(allData);
  }
  getAllStremInfo() {
    var userinfo = JSON.parse(localStorage.getItem('userInfo'))
    if (userinfo !== "" && userinfo !== undefined) {
      var username = userinfo.user_name;
      var usertoken = userinfo.token;
    }
    var postData1 = {
      user_name: username,
      token: usertoken,
      key: "all",
      value: "null",
    }
    this.ajaxServe.getTtends(postData1).then(data => {
      if (data.code == 0) {
        if (data.data != []) {
          var slicedata = data.data
            .slice(0, 20)
          this.dataDispose(slicedata);
        } else {
        }
      }
    }).catch(err => {
      console.log(err);
    })
  }
  dataDispose(data) {
    console.log(data);
    if (data !== null) {
      this.allData = new dataFormat();
      this.allData.citys = [];
      this.allData.moveLines = [];
      for (var i = 0; i < data.length; i++) {
        this.allData.citys.push({
          ids: data[i].id,
          types: 1,
          name: data[i].province,
          value: [Number(data[i].long_lat[0]), Number(data[i].long_lat[1]), 2],
          symbolSize: 6,
          itemStyle: {
            normal: {
              color: '#58B3CC'
            }
          }
        });
        this.allData.citys.push({
          ids: data[i].id,
          types: 1,
          name: this.splits(data[i].server_addr),
          value: [Number(data[i].server_long_lat[0]), Number(data[i].server_long_lat[1]), 3],
          symbolSize: 4,
          itemStyle: {
            normal: {
              color: '#58B3CC'
            }
          }
        });
        this.allData.moveLines.push({
          fromName: data[i].province,
          toName: this.splits(data[i].server_addr),
          coords: [
            data[i].long_lat,
            data[i].server_long_lat
          ],
        });
        if (data[i].plays !== null) {
          var playsData = data[i].plays

          for (var j = 0; j < playsData.length; j++) {

            this.allData.citys.push({
              ids: playsData[j].id,
              types: 2,
              name: playsData[j].province,
              value: [Number(playsData[j].long_lat[0]), Number(playsData[j].long_lat[1]), 4],
              symbolSize: 4,
              itemStyle: {
                normal: {
                  color: '#F58158'
                }
              }
            })
            this.allData.citys.push({

              name: this.splits(playsData[j].ServerAddr),
              value: [Number(playsData[j].server_long_lat[0]), Number(playsData[j].server_long_lat[1]), 3],
              ids: playsData[j].id,
              types: 2,
              symbolSize: 4,
              itemStyle: {
                normal: {
                  color: '#F58158'
                }
              }
            });
            this.allData.moveLines.push({
              fromName: this.splits(data[i].server_addr),
              toName: this.splits(playsData[j].ServerAddr),
              coords: [
                playsData[j].long_lat,
                playsData[j].server_long_lat
              ],
            });
            this.allData.moveLines.push({
              fromName: this.splits(playsData[j].ServerAddr),
              toName: playsData[j].province,
              coords: [
                playsData[j].long_lat,
                playsData[j].server_long_lat
              ],
            });

          }
        }

      }
      console.log(this.allData);

      this.initMap(this.allData);

    } else {
      alert("暂无数据")
    }

  }
  splits(item) {
    // if (item !== "||" && item !== undefined) {
    item = item.split("|");
    item = item.reverse()
    for (var i = 0; i < item.length; i++) {
      if (item[i] !== "") {
        return item[i];
      }
    }
    // }
  }
  initMap(allData) {
    this.myChart = echarts.init(this.map_container.nativeElement);
    this.options = {
      backgroundColor: '#404a59',

      title: {
        text: '布卡日志分析',
        subtext: '数据来至布卡',
        left: 'center',
        textStyle: {
          color: '#fff'
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        show: true,
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['地点', '线路'],
        textStyle: {
          color: '#fff'
        }
      },
      geo: {
        map: 'china',
        label: {
          emphasis: {
            show: false
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#323c48',
            borderColor: '#404a59'
          },
          emphasis: {
            areaColor: '#2a333d'
          }
        }
      },
      series: [{
        name: '地点',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          brushType: 'stroke'
        },
        label: {
          emphasis: {
            show: true,
            position: 'right',
            formatter: '{b}'
          }
        },
        symbolSize: 2,
        showEffectOn: 'render',
        itemStyle: {
          normal: {
            color: '#46bee9'
          }
        },
        data: allData.citys
      }, {
        name: "",
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 2,
        large: true,
        effect: {
          show: true,
          constantSpeed: 30,
          symbol: 'pin',
          symbolSize: 3,
          trailLength: 0,
        },
        lineStyle: {
          normal: {
            color: new (<any>window).echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#58B3CC'
            }, {
              offset: 1,
              color: '#F58158'
            }], false),
            width: 2,
            opacity: 0.2,
            curveness: 0.1
          }
        },
        data: allData.moveLines
      },
      ]

    };
    this.myChart.resize();

    this.myChart.on('click', (params) => {

      console.log("*********")
      console.log(params)
      if (params.hasOwnProperty("data") && params.data.hasOwnProperty("types")) {
        console.log("#####")
        if (params.data.types == 1) {
          this.goPublisInfo(params.data.ids, params.data.types);
          //this.gopublish();
        } else if (params.data.types == 2) {
          this.goplaysInfo(params.data.ids, params.data.types)

        }
      } else {
        console.log("&&&&&&");

      }


    });
    this.isLoading = false;
  }
  gopublish() {
    console.log("%%%%%%%%%%%%%%%")
  }
  goPublisInfo(id, type) {
    console.log("****")
    this.title = "发布者详情";
    // var options = {
    //   keyboard: true,
    //   show: true,
    // }
    // $('#myModal').modal(options)
    var userinfo = JSON.parse(localStorage.getItem('userInfo'))
    if (userinfo !== "" && userinfo !== undefined) {
      this.userinfoobj.user_name = userinfo.user_name;
      this.userinfoobj.token = userinfo.token;
    }
    var postData1 = {
      user_name: this.userinfoobj.user_name,
      token: this.userinfoobj.token,
      types: type,
      id: id
    }
    this.ajaxServe.getstreaminfo(postData1).then(data => {

      if (data.code == 0) {
        if (data.data != []) {
          this.publishInfo = data.data;
          console.log(this.publishInfo);
          this.isshow = true;
        } else {
        }
      }
    }).catch(err => {
      console.log(err);
    })


  }
  goplaysInfo(id, type) {
    console.log("播放者信息");
    this.title = "播放着详情"
    // var options = {
    //   keyboard: true,
    //   show: true,
    // }
    // $('#myModal_1').modal(options)
    this.userinfoobj = new userInfoObj();
    var userinfo = JSON.parse(localStorage.getItem('userInfo'))
    console.log(userinfo);
    if (userinfo !== "" && userinfo !== undefined) {
      this.userinfoobj.user_name = userinfo.user_name;
      this.userinfoobj.token = userinfo.token;
    }
    var postData1 = {
      user_name: this.userinfoobj.user_name,
      token: this.userinfoobj.token,
      types: type,
      id: id
    }
    this.ajaxServe.getstreaminfo(postData1).then(data => {

      if (data.code == 0) {
        if (data.data != []) {
          this.publishInfo = data.data;
          console.log(this.publishInfo);
          this.isshow = true;
        } else {
        }
      }
    }).catch(err => {
      console.log(err);
    })

  }

}
