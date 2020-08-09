$('.l-img').swipper({
    items:$('.l-img > .item'),
    showArrowBtn:true,
    spotPosition:'left',
    showSpotBtn:true,
    type:'fade',
    width:590,
    height:470,
    isAuto:true,
    autoTime: 1500,
})
$('.r-img').swipper({
    items:$('.r-img > .r-item'),
    showArrowBtn:true,
    showSpotBtn:false,
    type:'fade',
    width:190,
    height:470,
    isAuto:false,
})
$('.imgshow').swipper({
    items:$('.imgshow > .page'),
    showArrowBtn:true,
    showSpotBtn:false,
    type:'animate',
    width:800,
    height:260,
    isAuto:false,
})
$('.r-show').swipper({
    items:$('.r-show > .r-show-item'),
    showArrowBtn:false ,
    showSpotBtn:true,
    type: 'animate',
    width: 190,
    height: 260,
    isAuto:true,
    autoTime: 1500,
})
$('#myJD').addDropdown({
    width:280,
    widthCol:126,
    menuList: [{
        title: "",
        items: [{
            href: '#',
            name: '待处理订单',
        }, {
            href: '#',
            name: '消息',
        }, {
            href: '#',
            name: '返修退换货',
        }, {
            href: '#',
            name: '我的问答',
        }, {
            href: '#',
            name: '降价商品',
        }, {
            href: '#',
            name: '我的关注',
        }
        ],
    }, {
        title: '',
        items: [{
            href: '#',
            name: '我的京豆',
        }, {
            href: '#',
            name: '我的优惠券',
        }, {
            href: '#',
            name: '我的白条',
        }
        ],
    }]
  });
  $('#procurement').addDropdown({
    width:170,
    widthCol:66,
    menuList: [{
        title: '',
        items: [{
            href: '',
            name: '企业购'
        }, {
            href: '',
            name: '商用场景馆'
        }, {
            href: '',
            name: '工业品'
        }, {
            href: '',
            name: '礼品卡'
        }]
    }]
  });
  
  
  $('#service').addDropdown({
    width: 170,
    widthCol: 70,
    menuList: [{
        title: '客户',
        items: [{
            name: '帮助中心',
            href: ''
        }, {
            name: '售后服务',
            href: ''
        }, {
            name: '在线客服',
            href: '',
        }, {
            name: '意见建议',
            href: ''
        }, {
            name: '电话客服',
            href: ''
        }, {
            name: '客服邮箱',
            href: ''
        }, {
            name: '金融咨询',
            href: ''
        }, {
            name: '全球售客服'
        }]
    }, {
        title: '商户',
        items: [{
            name: '合作招商'
        }, {
            name: '学习中心'
        }, {
            name: '商家后台'
        }, {
            name: '京麦工作台'
        }, {
            name: '商家帮助'
        }, {
            name: '规则平台'
        }]
    }]
  });
  
  $('#bar-navs').addDropdown({
    direction: 'x',
    width: 1188,
    menuList: [{
        title: '特色主题',
        width:290,
        widthCol: 85,
        items: [{
            name: '新品首发'
        }, {
            name: '京东金融'
        }, {
            name: '全球售'
        }, {
            name: '国际站'
        }, {
            name: '京东会员'
        }, {
            name: '京东预售'
        }, {
            name: '买什么'
        }, {
            name: '俄语站'
        }, {
            name: '装机大师'
        }, {
            name: '0元评测'
        }, {
            name: '港澳售'
        }, {
            name: '优惠券'
        }, {
            name: '秒杀闪购'
        }, {
            name: '印尼站'
        }, {
            name: '京东金融科技'
        }, {
            name: '陪伴计划'
        }, {
            name: '出海招商'
        }, {
            name: '拍拍二手'
        }]
    }, {
        title: '行业频道',
        width: 290,
        widthCol: 85,
        items: [{
            name: '手机智能'
        }, {
            name: ' 数码玩3C'
        }, {
            name: '电脑办公'
        }, {
            name: '家用电器'
        }, {
            name: '京鱼座'
        }, {
            name: '智能服装城'
        }, {
            name: ' 京东生鲜'
        }, {
            name: '家装城'
        }, {
            name: ' 母婴食品'
        }, {
            name: '农资频道'
        }, {
            name: '整车图书'
        }, {
            name: '劳动防护'
        }]
        },{
        title: '生活服务',
        width: 290,
        widthCol: 85,
        items: [{
            name: '京东众筹'
        }, {
            name: '白条'
        }, {
            name: '京东金融App'
        }, {
            name: '京东小金库'
        }, {
            name: '理财'
        }, {
            name: '话费'
        }, {
            name: ' 水电煤'
        }, {
            name: '彩票'
        }, {
            name: '  旅行机票'
        }, {
            name: '酒店'
        }, {
            name: '电影票'
        }, {
            name: '京东到家'
        },{
            name: '游戏'
        },{
            name: '拍拍回收家'
        
        }]
    },{
        title: '更多精彩',
        width: 290,
        widthCol: 85,
        items: [{
            name: '合作招商'
        }, {
            name: '京东通信'
        }, {
            name: '京东E卡'
        }, {
            name: '企业采购'
        }, {
            name: '服务市场'
        }, {
            name: '办公生活'
        }, {
            name: '馆乡村招募'
        }, {
            name: '校园加盟'
        }, {
            name: '京东社区'
        }, {
            name: ' 游戏社区'
        }, {
            name: ' 知识产权维权'
        }]
    }]
  });

  $('.log').hover(
      function(){
          $('.hover-bac').fadeIn();
          $('.bac').fadeOut();
      },function(){
    $('.hover-bac').fadeOut( );
    $('.bac').fadeIn();
      }
  )

  var  placeholders = ["洗烘一体机","神州笔记本","超级品牌日满199减100"];
  function addPlaceholder(){
    var count = 0;
    var placeholdersTimer = setInterval(
        function(){
            $('#placeho').prop('placeholder',placeholders[count]);
            count++;
            count = count % placeholders.length;
        },1500)
  }
  addPlaceholder();


  function dealSearchData(data) {
    console.log(data)
    data = data.result || [];
    $('.drop-list').empty().show();
    
    for (var i = 0; i < data.length; i++) {
       $('<li><a href="#">' + data[i][0] + '</a> <span class="number"></span></li>').appendTo($('.drop-list'))
    }
}

var inputTimer = null;
var showSearchTimer = null;
  $('#placeho').on('keyup',function(){
    var val = $(this).val();
    if(val){
        clearTimeout(inputTimer);
        inputTimer = setTimeout(function () {
            $.ajax({
                type: 'GET',
                url: 'https://suggest.taobao.com/sug',
                data: {
                    code: 'utf-8',
                    q: val,
                    // _ksTS: '1576761011741_312',
                    callback: 'dealSearchData',
                    k: 1,
                    // area: 'c2c',
                    bucketid: 10,
                    stats_click:'search_radio_all:1',
                    initiative_id: 'staobaoz_20191225',
                },
                dataType: 'jsonp'
            })
        }, 500)
    }
  }).mouseleave(function () {
   showSearchTimer = setTimeout(function () {
       $('.drop-list').hide()
   }, 500); 
}).mouseenter(function () {
    clearTimeout(showSearchTimer);
});

$('.drop-list').mouseleave(function () {
    showSearchTimer = setTimeout(function () {
        $('.drop-list').hide()
    }, 500);
}).mouseenter(function () {
    clearTimeout(showSearchTimer)
});

// 广告区域
$('.ad').hover(function () {
    $('.ad-hover', this).animate({
        width: 790,
    })
}, function () {
    $('.ad-hover', this).animate({
        width: 0,
    })
})
//倒计时区域
var endTime = new Date('2019-12-26 24:00').getTime();
setInterval(function () {
    var nowTime = new Date().getTime();
    var hour = Math.floor((endTime - nowTime) / 1000 / 60 / 60);
    var minute = parseInt((endTime - nowTime) / 1000 / 60) - hour * 60;
    var second = parseInt((endTime - nowTime) / 1000) - hour * 60 * 60 - minute * 60;
    if (hour < 10) {
        hour = '0' + hour;
    }
    $('.timmer__unit--hour').text(hour);
    if (minute < 10) {
        minute = '0' + minute;
    }
    $('.timmer__unit--minute').text(minute);
    if (second < 10) {
        second = '0' + second;
    }
    $('.timmer__unit--second').text(second)
    console.log(hour,minute,second)
}, 1000)

$('.lists-items-nav').hover(function(){
    $('.items-items-content').css({
        display:"block",
    }).mouseleave(function(){
        $('.items-items-content').css({
            display:"none",
    })
})
})