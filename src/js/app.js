var app = angular.module('app', ["ivh.treeview"]);
var stuff = stuff = [{
    id:'0',
    label:'全国',
    children:[
              {
    id: '35',
    num:'b',
    label: '北京',
    children: [
        { label: '北京',
            id: '904'
        }
        
    ]
}, {
    id: '36',
    num:'s',
    label: '上海',
    children: [
        { label: '上海' ,
        id:'905'
        }
    ]
}, {
    id: '37',
    num:'t',
    label: '天津',
    children: [
        { label: '天津' ,
            id:'903'
        }
    ]
},
 {
    id: '38',
    num:'c',
    label: '重庆',
    children: [
        { label: '云阳' ,
          id:'919'
        },
        { label: '永川' ,
        id:'920'
        },
        { label: '重庆',
            id:'906'
        }
    ]
},{
    id: '39',
    num:'g',
    label: '广东',
    children: [
        { label: '江门',
        id:'558'
        },
        { label: '中山',
            id:'557'
        },
        { label: '东莞',
            id:'556'
        },
        { label: '汕尾' ,
            id:'555'
        },
        { label: '茂名' ,
            id:'562'
        },
        { label: '湛江',
            id:'561'
        },
        { label: '阳江' ,
            id:"560"
        },
        {
            label : "佛山",
            id : "559"
        }, {
            label : "揭阳",
            id : "566"
        }, {
            label : "潮州",
            id : "565"
        }, {
            label : "清远",
            id : "564"
        }, {
            label : "肇庆",
            id : "563"
        }, {
            label : "云浮",
            id : "567"
        }, {
            label : "广州",
            id : "547"
        }, {
            label : "深圳",
            id : "548"
        }, {
            label : "珠海",
            id : "549"
        }, {
            label : "汕头",
            id : "550"
        }, {
            label : "韶关",
            id : "551"
        }, {
            label : "河源",
            id : "552"
        }, {
            label : "梅州",
            id : "553"
        }, {
            label : "惠州",
            id : "554"
        }
    ]
}
,
{
   
   label: '福建',
   num:'f',
   children: [
{
    label : "漳州",
    id : "573"
}, {
    label : "南平",
    id : "574"
}, {
    label : "莆田",
    id : "571"
}, {
    label : "泉州",
    id : "572"
}, {
    label : "龙岩",
    id : "575"
}, {
    label : "宁德",
    id : "576"
}, {
    label : "三明",
    id : "570"
}, {
    label : "厦门",
    id : "569"
}, {
    label : "福州",
    id : "568"
}
   ],
   id : "40"
},{
    label : "浙江",
    num:'z',
    children:[{
                label : "杭州",
                id : "577"
            }, {
                label : "丽水",
                id : "587"
            }, {
                label : "宁波",
                id : "578"
            }, {
                label : "湖州",
                id : "581"
            }, {
                label : "绍兴",
                id : "582"
            }, {
                label : "温州",
                id : "579"
            }, {
                label : "嘉兴",
                id : "580"
            }, {
                label : "舟山",
                id : "585"
            }, {
                label : "台州",
                id : "586"
            }, {
                label : "金华",
                id : "583"
            }, {
                label : "衢州",
                id : "584"
            }],
    id : "41"
},{
    label : "江苏",
    num:'j',
    children : [{
                label : "镇江",
                id : "592"
            }, {
                label : "常州",
                id : "591"
            }, {
                label : "扬州",
                id : "594"
            }, {
                label : "南通",
                id : "593"
            }, {
                label : "南京",
                id : "588"
            }, {
                label : "苏州",
                id : "590"
            }, {
                label : "无锡",
                id : "589"
            }, {
                label : "泰州",
                id : "600"
            }, {
                label : "连云港",
                id : "599"
            }, {
                label : "徐州",
                id : "596"
            }, {
                label : "盐城",
                id : "595"
            }, {
                label : "淮安",
                id : "598"
            }, {
                label : "宿迁",
                id : "597"
            }],
    id : "42"
}, {
    label : "山东",
    num:'s',
    children : [{
                label : "青岛",
                id : "602"
            }, {
                label : "济南",
                id : "601"
            }, {
                label : "烟台",
                id : "607"
            }, {
                label : "威海",
                id : "608"
            }, {
                label : "济宁",
                id : "609"
            }, {
                label : "泰安",
                id : "610"
            }, {
                label : "淄博",
                id : "603"
            }, {
                label : "枣庄",
                id : "604"
            }, {
                label : "东营",
                id : "605"
            }, {
                label : "潍坊",
                id : "606"
            }, {
                label : "聊城",
                id : "615"
            }, {
                label : "滨州",
                id : "616"
            }, {
                label : "菏泽",
                id : "617"
            }, {
                label : "日照",
                id : "611"
            }, {
                label : "莱芜",
                id : "612"
            }, {
                label : "德州",
                id : "613"
            }, {
                label : "临沂",
                id : "614"
            }],
    id : "43"
},{
    label : "辽宁",
    num:'l',
    children : [{
                label : "营口",
                id : "626"
            }, {
                label : "葫芦岛",
                id : "625"
            }, {
                label : "锦州",
                id : "624"
            }, {
                label : "丹东",
                id : "623"
            }, {
                label : "本溪",
                id : "622"
            }, {
                label : "抚顺",
                id : "621"
            }, {
                label : "鞍山",
                id : "620"
            }, {
                label : "大连",
                id : "619"
            }, {
                label : "朝阳",
                id : "631"
            }, {
                label : "铁岭",
                id : "630"
            }, {
                label : "辽阳",
                id : "629"
            }, {
                label : "阜新",
                id : "628"
            }, {
                label : "盘锦",
                id : "627"
            }, {
                label : "沈阳",
                id : "618"
            }],
    id : "44"
}, {
    label : "江西",
    num:'j',
    children : [{
                label : "抚州",
                id : "641"
            }, {
                label : "上饶",
                id : "642"
            }, {
                label : "吉安",
                id : "639"
            }, {
                label : "宜春",
                id : "640"
            }, {
                label : "鹰潭",
                id : "637"
            }, {
                label : "赣州",
                id : "638"
            }, {
                label : "新余",
                id : "635"
            }, {
                label : "九江",
                id : "636"
            }, {
                label : "萍乡",
                id : "634"
            }, {
                label : "景德镇",
                id : "633"
            }, {
                label : "南昌",
                id : "632"
            }],
    id : "45"
},
{
    label : "四川",
    num:'s',
    children : [{
                label : "西昌(凉山州)",
                id : "907"
            }, {
                label : "阿坝州(马尔康)",
                id : "661"
            }, {
                label : "甘孜州(康定)",
                id : "662"
            }, {
                label : "眉山",
                id : "659"
            }, {
                label : "资阳",
                id : "660"
            }, {
                label : "广元",
                id : "649"
            }, {
                label : "南充",
                id : "653"
            }, {
                label : "遂宁",
                id : "650"
            }, {
                label : "宜宾",
                id : "654"
            }, {
                label : "德阳",
                id : "647"
            }, {
                label : "内江",
                id : "651"
            }, {
                label : "绵阳",
                id : "648"
            }, {
                label : "乐山",
                id : "652"
            }, {
                label : "巴中",
                id : "657"
            }, {
                label : "攀枝花",
                id : "645"
            }, {
                label : "雅安",
                id : "658"
            }, {
                label : "泸州",
                id : "646"
            }, {
                label : "成都",
                id : "643"
            }, {
                label : "广安",
                id : "655"
            }, {
                label : "达州",
                id : "656"
            }, {
                label : "自贡",
                id : "644"
            }],
    id : "46"
}, {
    label : "陕西",
    num:'s',
    children : [{
                label : "铜川",
                id : "665"
            }, {
                label : "宝鸡",
                id : "666"
            }, {
                label : "西安",
                id : "664"
            }, {
                label : "汉中",
                id : "670"
            }, {
                label : "延安",
                id : "669"
            }, {
                label : "渭南",
                id : "668"
            }, {
                label : "咸阳",
                id : "667"
            }, {
                label : "商洛地",
                id : "673"
            }, {
                label : "安康",
                id : "672"
            }, {
                label : "榆林",
                id : "671"
            }],
    id : "47"
}, {
    label : "湖北",
    num:'h',
    children : [{
                label : "荆州",
                id : "678"
            }, {
                label : "十堰",
                id : "677"
            }, {
                label : "襄樊",
                id : "676"
            }, {
                label : "黄石",
                id : "675"
            }, {
                label : "孝感",
                id : "682"
            }, {
                label : "鄂州",
                id : "681"
            }, {
                label : "荆门",
                id : "680"
            }, {
                label : "宜昌",
                id : "679"
            }, {
                label : "武汉",
                id : "674"
            }, {
                label : "黄冈",
                id : "683"
            }, {
                label : "咸宁",
                id : "684"
            }, {
                label : "随州",
                id : "685"
            }, {
                label : "仙桃",
                id : "686"
            }, {
                label : "天门",
                id : "687"
            }, {
                label : "潜江",
                id : "688"
            }, {
                label : "神农架",
                id : "689"
            }, {
                label : "恩施州",
                id : "690"
            }],
    id : "48"
}, {
    label : "河南",
    num:'h',
    children : [{
                label : "济源",
                id : "708"
            }, {
                label : "驻马店",
                id : "707"
            }, {
                label : "许昌",
                id : "700"
            }, {
                label : "濮阳",
                id : "699"
            }, {
                label : "三门峡",
                id : "702"
            }, {
                label : "漯河",
                id : "701"
            }, {
                label : "商丘",
                id : "704"
            }, {
                label : "南阳",
                id : "703"
            }, {
                label : "周口",
                id : "706"
            }, {
                label : "信阳",
                id : "705"
            }, {
                label : "郑州",
                id : "691"
            }, {
                label : "开封",
                id : "692"
            }, {
                label : "洛阳",
                id : "693"
            }, {
                label : "平顶山",
                id : "694"
            }, {
                label : "焦作",
                id : "695"
            }, {
                label : "鹤壁",
                id : "696"
            }, {
                label : "新乡",
                id : "697"
            }, {
                label : "安阳",
                id : "698"
            }],
    id : "49"
}, {
    label : "河北",
    num:'h',
    children : [{
                label : "唐山",
                id : "710"
            }, {
                label : "石家庄",
                id : "709"
            }, {
                label : "邯郸",
                id : "712"
            }, {
                label : "秦皇岛",
                id : "711"
            }, {
                label : "保定",
                id : "714"
            }, {
                label : "邢台",
                id : "713"
            }, {
                label : "衡水",
                id : "719"
            }, {
                label : "沧州",
                id : "717"
            }, {
                label : "廊坊",
                id : "718"
            }, {
                label : "张家口",
                id : "715"
            }, {
                label : "承德",
                id : "716"
            }],
    id : "50"
}, {
    label : "山西",
    num:'s',
    children : [{
                label : "运城",
                id : "729"
            }, {
                label : "吕梁地",
                id : "730"
            }, {
                label : "忻州",
                id : "727"
            }, {
                label : "临汾",
                id : "728"
            }, {
                label : "朔州",
                id : "725"
            }, {
                label : "晋中",
                id : "726"
            }, {
                label : "长治",
                id : "723"
            }, {
                label : "晋城",
                id : "724"
            }, {
                label : "大同",
                id : "721"
            }, {
                label : "阳泉",
                id : "722"
            }, {
                label : "太原",
                id : "720"
            }],
    id : "51"
}, {
    label : "内蒙古",
    num:'n',
    children : [{
                label : "兴安盟",
                id : "742"
            }, {
                label : "阿拉善盟",
                id : "741"
            }, {
                label : "巴彦淖尔",
                id : "740"
            }, {
                label : "呼伦贝尔",
                id : "739"
            }, {
                label : "锡林郭勒",
                id : "738"
            }, {
                label : "乌兰察布",
                id : "737"
            }, {
                label : "鄂尔多斯",
                id : "736"
            }, {
                label : "通辽",
                id : "735"
            }, {
                label : "赤峰",
                id : "734"
            }, {
                label : "乌海",
                id : "733"
            }, {
                label : "包头",
                id : "732"
            }, {
                label : "呼和浩特",
                id : "731"
            }],
    id : "52"
}, {
    label : "吉林",
    num:'j',
    children : [{
                label : "辽源",
                id : "746"
            }, {
                label : "四平",
                id : "745"
            }, {
                label : "吉林",
                id : "744"
            }, {
                label : "长春",
                id : "743"
            }, {
                label : "延边州",
                id : "751"
            }, {
                label : "通化",
                id : "747"
            }, {
                label : "白山",
                id : "748"
            }, {
                label : "松原",
                id : "749"
            }, {
                label : "白城",
                id : "750"
            }],
    id : "53"
}, {
    label : "黑龙江",
    num:'h',
    children : [{
                label : "大兴安岭",
                id : "764"
            }, {
                label : "绥化",
                id : "763"
            }, {
                label : "牡丹江",
                id : "759"
            }, {
                label : "佳木斯",
                id : "760"
            }, {
                label : "七台河",
                id : "761"
            }, {
                label : "黑河",
                id : "762"
            }, {
                label : "双鸭山",
                id : "755"
            }, {
                label : "鸡西",
                id : "756"
            }, {
                label : "大庆",
                id : "757"
            }, {
                label : "伊春",
                id : "758"
            }, {
                label : "哈尔滨",
                id : "752"
            }, {
                label : "齐齐哈尔",
                id : "753"
            }, {
                label : "鹤岗",
                id : "754"
            }],
    id : "54"
}, {
    label : "安徽",
    num:'a',
    children : [{
                label : "宿州",
                id : "776"
            }, {
                label : "阜阳",
                id : "775"
            }, {
                label : "六安",
                id : "778"
            }, {
                label : "巢湖",
                id : "777"
            }, {
                label : "安庆",
                id : "772"
            }, {
                label : "铜陵",
                id : "771"
            }, {
                label : "滁州",
                id : "774"
            }, {
                label : "黄山",
                id : "773"
            }, {
                label : "淮南",
                id : "768"
            }, {
                label : "蚌埠",
                id : "767"
            }, {
                label : "淮北",
                id : "770"
            }, {
                label : "马鞍山",
                id : "769"
            }, {
                label : "芜湖",
                id : "766"
            }, {
                label : "合肥",
                id : "765"
            }, {
                label : "池州",
                id : "781"
            }, {
                label : "宣城",
                id : "780"
            }, {
                label : "亳州",
                id : "779"
            }],
    id : "55"
}, {
    label : "湖南",
    num:'h',
    children : [{
                label : "湘西州",
                id : "795"
            }, {
                label : "长沙",
                id : "782"
            }, {
                label : "邵阳",
                id : "786"
            }, {
                label : "衡阳",
                id : "785"
            }, {
                label : "湘潭",
                id : "784"
            }, {
                label : "株州",
                id : "783"
            }, {
                label : "益阳",
                id : "790"
            }, {
                label : "张家界",
                id : "789"
            }, {
                label : "常德",
                id : "788"
            }, {
                label : "岳阳",
                id : "787"
            }, {
                label : "娄底",
                id : "794"
            }, {
                label : "怀化",
                id : "793"
            }, {
                label : "永州",
                id : "792"
            }, {
                label : "郴州",
                id : "791"
            }],
    id : "56"
}, {
    label : "广西",
    num:'g',
    children : [{
                label : "柳州",
                id : "797"
            }, {
                label : "桂林",
                id : "798"
            }, {
                label : "南宁",
                id : "796"
            }, {
                label : "防城港",
                id : "801"
            }, {
                label : "钦州",
                id : "802"
            }, {
                label : "梧州",
                id : "799"
            }, {
                label : "北海",
                id : "800"
            }, {
                label : "贵港",
                id : "803"
            }, {
                label : "玉林",
                id : "804"
            }, {
                label : "河池地",
                id : "809"
            }, {
                label : "来宾",
                id : "908"
            }, {
                label : "崇左",
                id : "909"
            }, {
                label : "贺州地",
                id : "807"
            }, {
                label : "百色地",
                id : "808"
            }],
    id : "57"
}, {
    label : "海南",
    num:'h',
    children : [{
                label : "保亭",
                id : "827"
            }, {
                label : "琼中",
                id : "828"
            }, {
                label : "海口",
                id : "810"
            }, {
                label : "西南中沙群岛",
                id : "910"
            }, {
                label : "五指山",
                id : "812"
            }, {
                label : "三亚",
                id : "811"
            }, {
                label : "儋州",
                id : "814"
            }, {
                label : "琼海",
                id : "813"
            }, {
                label : "文昌",
                id : "816"
            }, {
                label : "琼山",
                id : "815"
            }, {
                label : "东方",
                id : "818"
            }, {
                label : "万宁",
                id : "817"
            }, {
                label : "定安",
                id : "820"
            }, {
                label : "澄迈",
                id : "819"
            }, {
                label : "临高",
                id : "822"
            }, {
                label : "屯昌",
                id : "821"
            }, {
                label : "昌江",
                id : "824"
            }, {
                label : "白沙",
                id : "823"
            }, {
                label : "陵水",
                id : "826"
            }, {
                label : "乐东",
                id : "825"
            }],
    id : "58"
}, {
    label : "云南",
    num:'y',
    children : [{
                label : "昆明",
                id : "829"
            }, {
                label : "曲靖",
                id : "830"
            }, {
                label : "玉溪",
                id : "831"
            }, {
                label : "保山",
                id : "832"
            }, {
                label : "昭通",
                id : "833"
            }, {
                label : "普洱(普洱)",
                id : "834"
            }, {
                label : "临沧地",
                id : "835"
            }, {
                label : "丽江地",
                id : "836"
            }, {
                label : "文山州",
                id : "837"
            }, {
                label : "红河州",
                id : "838"
            }, {
                label : "景洪（西双版纳）",
                id : "839"
            }, {
                label : "楚雄州",
                id : "840"
            }, {
                label : "大理州",
                id : "841"
            }, {
                label : "德宏州",
                id : "842"
            }, {
                label : "迪庆州(香格里拉)",
                id : "844"
            }, {
                label : "怒江州",
                id : "843"
            }],
    id : "59"
}, {
    label : "贵州",
    num:'g',
    children : [{
                label : "毕节地",
                id : "850"
            }, {
                label : "铜仁地",
                id : "849"
            }, {
                label : "安顺",
                id : "848"
            }, {
                label : "遵义",
                id : "847"
            }, {
                label : "六盘水",
                id : "846"
            }, {
                label : "贵阳",
                id : "845"
            }, {
                label : "黔南州(都匀)",
                id : "853"
            }, {
                label : "黔东南州(凯里)",
                id : "852"
            }, {
                label : "黔西南州(兴义)",
                id : "851"
            }],
    id : "60"
}, {
    label : "西藏",
    num:'x',
    children : [{
                label : "阿里地",
                id : "859"
            }, {
                label : "林芝地",
                id : "860"
            }, {
                label : "日喀则",
                id : "858"
            }, {
                label : "山南地",
                id : "857"
            }, {
                label : "昌都地",
                id : "856"
            }, {
                label : "那曲地",
                id : "855"
            }, {
                label : "拉萨",
                id : "854"
            }],
    id : "61"
}, {
    label : "甘肃",
    num:'g',
    children : [{
                label : "嘉峪关",
                id : "865"
            }, {
                label : "武威",
                id : "866"
            }, {
                label : "白银",
                id : "863"
            }, {
                label : "天水",
                id : "864"
            }, {
                label : "兰州",
                id : "861"
            }, {
                label : "金昌",
                id : "862"
            }, {
                label : "甘南州",
                id : "873"
            }, {
                label : "临夏州",
                id : "874"
            }, {
                label : "张掖地",
                id : "871"
            }, {
                label : "酒泉地",
                id : "872"
            }, {
                label : "庆阳地",
                id : "869"
            }, {
                label : "陇南地",
                id : "870"
            }, {
                label : "定西地",
                id : "867"
            }, {
                label : "平凉地",
                id : "868"
            }],
    id : "62"
}, {
    label : "宁夏",
    num:'n',
    children : [{
                label : "石嘴山",
                id : "876"
            }, {
                label : "银川",
                id : "875"
            }, {
                label : "固原",
                id : "878"
            }, {
                label : "吴忠",
                id : "877"
            }, {
                label : "中卫",
                id : "911"
            }],
    id : "63"
}, {
    label : "青海",
    num:'q',
    children : [{
                label : "海东地",
                id : "880"
            }, {
                label : "西宁",
                id : "879"
            }, {
                label : "黄南州",
                id : "882"
            }, {
                label : "海北州",
                id : "881"
            }, {
                label : "果洛州",
                id : "884"
            }, {
                label : "海南州",
                id : "883"
            }, {
                label : "海西州",
                id : "886"
            }, {
                label : "玉树州",
                id : "885"
            }],
    id : "64"
}, {
    label : "新疆",
    num:'x',
    children : [{
                label : "克孜勒苏",
                id : "895"
            }, {
                label : "巴音郭楞",
                id : "896"
            }, {
                label : "昌吉州",
                id : "897"
            }, {
                label : "博尔塔拉",
                id : "898"
            }, {
                label : "图木舒克",
                id : "915"
            }, {
                label : "哈密地",
                id : "891"
            }, {
                label : "五家渠",
                id : "916"
            }, {
                label : "和田地",
                id : "892"
            }, {
                label : "阿克苏",
                id : "893"
            }, {
                label : "喀什地",
                id : "894"
            }, {
                label : "塔城",
                id : "912"
            }, {
                label : "阿勒泰",
                id : "913"
            }, {
                label : "阿拉尔",
                id : "914"
            }, {
                label : "伊犁州",
                id : "899"
            }, {
                label : "克拉玛依",
                id : "888"
            }, {
                label : "乌鲁木齐",
                id : "887"
            }, {
                label : "吐鲁番",
                id : "890"
            }, {
                label : "石河子",
                id : "889"
            }],
    id : "65"
}, {
    label : "香港",
    num:'x',
    children : [{
                label : "香港",
                id : "900"
            }],
    id : "66"
}, {
    label : "澳门",
    num:'a',
    children : [{
                label : "澳门",
                id : "901"
            }],
    id : "67"
}, {
    label : "台湾",
    num:'t',
    children : [{
                label : "台湾",
                id : "902"
            }],
    id : "68"
}, {
    label : "马来西亚",
    num:'z',
    children : [{
                label : "马来西亚",
                id : "917"
            }],
    id : "70"
}, {
    label : "新加坡",
    num:'z',
    children : [{
                label : "新加坡",
                id : "918"
            }],
    id : "71"
}]
}
];

app.config(function(ivhTreeviewOptionsProvider) {
    ivhTreeviewOptionsProvider.set({
        defaultSelectedState: false,
        expandToDepth: -1
    });
});

app.controller('treeviewCtrl', ['$scope', '$document', 'ivhTreeviewMgr', '$filter', function($scope, $document, ivhTreeviewMgr, $filter) {
    // opts.idAttribute === 'id'
    // opts.labelAttribute === 'label'
    // opts.childrenAttribute === 'children'
    // opts.selectedAttribute === 'selected'
    // opts.useCheckboxes === true
    // opts.expandToDepth === 0
    // opts.indeterminateAttribute === '__ivhTreeviewIndeterminate'
    // opts.expandedAttribute === '__ivhTreeviewExpanded'
    // opts.defaultSelectedState === true
    // opts.validate === true
    // opts.twistieExpandedTpl === '(-)'
    // opts.twistieCollapsedTpl === '(+)'
    // opts.twistieLeafTpl === 'o'
    // opts.nodeTpl =(eh)= '...'
    // $scope.selectedNode = ['hats', 'whiskey'];

    // var getSelectedNodes = function(nodes) {
    //     var items = [];
    //     angular.forEach(nodes, function(item, index) {
    //         if (item.selected)
    //             items.push({ label: item.label });
    //         else if (item.children) {
    //             items = items.concat(getSelectedNodes(item.children));
    //         }
    //     });

    //     return items;
    // }

    // $scope.treeviewChange = function(node, isSelected, tree) {
    //     var nodes = [];
    //     angular.forEach(getSelectedNodes(tree), function(item, index) {
    //         nodes.push(item.label);
    //     });
    //     $scope.selectedNode = nodes.join(',');
    // };

    $scope.stuff = stuff;
    // $scope.showTreeView = false;
    // $scope.showTreeViewCtrl = function() {
    //     $scope.showTreeView = true;
    //     var item = ivhTreeviewMgr.selectEach($scope.stuff, $scope.selectedNode);
    // };

    // $document.on('click', function(e) {
    //     var $el = document.getElementsByClassName("dropdown-treeview");
    //     if (!$el[0].contains(e.target)) {
    //         $scope.showTreeView = false;
    //         $scope.$apply();
    //     }
    // });
    $scope.items = [{ text: ['hats', 'whiskey'] }, { text: ['hats'] }, { text: ['hats'] }]
}]);

app
    .directive('ngDropdownTreeview', ['$document', 'ivhTreeviewMgr', function($document, ivhTreeviewMgr) {
        return {
            //require: 'ngModel',
            scope: {
                sourceData: "=source",
                dataModel: '=ngModel'
            },
            replace: true,
            template: '<div class="dropdown-treeview">' +
                '<input type="text" ng-model="model" readonly="" ng-click="handleTreeview()">' + '<div  ng-show="showTreeView" class="treeview-container"><div ivh-treeview="sourceData" ivh-treeview-on-cb-change="treeviewChange(ivhNode,ivhIsSelected,ivhTree)" />' + '<div style="margin:0px auto;width:50px"><button ng-click="handleCloseClick()" style="width:100%;">关闭</button></div></div></div>',
            link: function(scope, element, attr) {
                scope.showTreeView = false;
                //初始化属性数据
                scope.handleTreeview = function() {
                    var selectedNodes=[];
                    scope.showTreeView = true;
                    ivhTreeviewMgr.deselectAll(scope.sourceData);
                    if(!angular.isArray(scope.dataModel))
                    {
                        selectedNodes=scope.dataModel.split(',');
                    }
                    else
                        selectedNodes=angular.copy(scope.dataModel);
                    ivhTreeviewMgr.selectEach(scope.sourceData, selectedNodes);
                };

                //console.log(element.find('input'),element.find(".treeview-container"));

                var getSelectedNodes = function(nodes) {
                    var items = [];
                    angular.forEach(nodes, function(item, index) {
                        if (item.selected)
                            items.push({ label: item.label,id:item.id });
                        else if (item.children) {
                            items = items.concat(getSelectedNodes(item.children));
                        }
                    });

                    return items;
                }

                //触发chang事件绑定数据
                scope.treeviewChange = function(node, isSelected, tree) {
                    var nodes = [];
                    var ids=[];
                    angular.forEach(getSelectedNodes(tree), function(item, index) {
                        nodes.push(item.label);
                        ids.push(item.id);
                    });
                    scope.model = nodes.join(',');
                    scope.dataModel=ids;
                };

                //关闭属性弹窗
                scope.handleCloseClick = function() {
                    scope.showTreeView = false;
                }

                scope.model = angular.copy(scope.dataModel.join(','));
            }
        }
    }]);
