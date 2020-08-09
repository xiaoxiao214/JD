// 轮播图中不相同的地方：
// 1、内容区不同 img div
// 2、 左右按钮是否显示
// 3、小圆点的样式不同  位置，是否显示
// 4、动画类型
(function(){
    // 创建轮播图对象的构造函数
    function Swipper(options, wrap){
        this.wrap = wrap || $('body');//w保存被调用的对象
        this.items = options.items || [];
        this.showArrowBtn =typeof options.showArrowBtn == 'boolean'? options.showArrowBtn :true;
        this.spotPosition = options.spotPosition || 'center';
        this.showSpotBtn = typeof options.showSpotBtn == 'boolean'? options.showSpotBtn :true;
        this.type = options.type || 'fade';
        this.width = options.width ||$(this.wrap).width();
        this.height = options.height || $(this.wrap).height();
        this.nowIndex = 0;
        this.isAuto = options.isAuto;
        this.timer = null;
        this.flag = false;
        this.len = this.items.length;
        this.autoTime = options.autoTime || 1500;
        this.init = function(){
            this.creatDom();//创建轮播图结构
            this.initStyle();
            this.bindEvent();
            if(this.isAuto ){
                this.autoMove();
            }
        }
    }
  
    //创建轮播图结构
    Swipper.prototype.creatDom = function(){
        var swipperDiv = $('<div class = "my-swipper"></div>').addClass('my-swipper-'+ this.type);
        var swippperUl = $('<ul class = "my-swipper-list"></ul>');
        var spotDiv = $('<div class = "my-swipper-spot"></div>');
        for(var i = 0; i < this.len; i++){
            $('<li></li>').append($(this.items[i])).appendTo(swippperUl);
            $('<span></span>').appendTo(spotDiv).addClass(i == this.nowIndex? 'current':'');
        }
        if(this.type =='animate'){
            $('<li></li>').append($(this.items[0]).clone(true)).appendTo(swippperUl);
        }
        var leftBtn = $('<div class = "my-swipper-btn left-btn">&lt;</div>');
        var rightBtn = $('<div class = "my-swipper-btn right-btn">&gt;</div>');
        swipperDiv.append(swippperUl);
        if(this.showArrowBtn){
            swipperDiv.append(leftBtn).append(rightBtn);
        }
        if(this.showSpotBtn){
            swipperDiv.append(spotDiv);
        }
        this.wrap.append(swipperDiv);
    }
    Swipper.prototype.initStyle = function(){
        $('.my-swipper',this.wrap).css({
            width:this.width,
            height:this.height,
        });
        $('.my-swipper > .my-swipper-list >li',this.wrap).css({
            width:this.width,
            height:this.height,
        })
        if(this.type == 'fade'){
            $('.my-swipper > .my-swipper-list >li',this.wrap).hide().eq(this.nowIndex).show(); 
        } else if(this.type == 'animate'){
            $('.my-swipper > .my-swipper-list',this.wrap).css({
                width:this.width *(this.len +1),
                height:this.height,
            });
        }
        // if(this.showSpotBtn == false){
        //     $('.my-swipper > .my-swipper-spot',this.wrap).css({
        //        display:'none',
        // })
        // }
        if (!this.showArrowBtn) {
            $('.my-swiper-btn', this.wrap).hide()
          }
        $('.my-swipper-spot',this.wrap).css({
            textAlign: this.spotPosition,
        })
    }
    Swipper.prototype.bindEvent= function(){
        var self = this;
        $('.my-swipper',this.wrap).mouseenter(function(){
            clearInterval(self.timer);
        }).mouseleave(function(){
            if(self.isAuto){
                self.autoMove();
            }
        })
       $('.my-swipper >.left-btn',this.wrap).click(function(e){
        if(self.flag ){
            return false;
        }
        self.flag = true;
        if(self.nowIndex == 0){
            if(self.type == 'animate'){
                $('.my-swipper > .my-swipper-list',self.wrap).css({
                    left: -self.len *self.width,
                })
            }
            self.nowIndex = self.len- 1 ;
        } else{
            self.nowIndex --;
        }
        self.move();
       })
       $('.my-swipper >.right-btn',this.wrap).click(function(e){
        change(self);
       })

       $('.my-swipper-spot >span',this.wrap).on('mouseenter',function(e){
        if(self.flag ){
            return false;
        }
        self.flag = true;
        self.nowIndex = $(this).index();
        self.move();
        })
    }
    function change(self){
        if(self.flag ){
            return false;
        }
        self.flag = true;
        if(self.nowIndex == self.len- 1){
            if(self.type == 'animate'){
                self.nowIndex ++;
                
            } else{
                self.nowIndex = 0;
            } 
        } else{
            if (self.nowIndex == self.len){
                $('.my-swipper > my-swipper-list',self.wrap).css({
                left:0 ,
                });
                self.nowIndex = 0 ;
            }
            self.nowIndex ++;
            }
        self.move();
    }
Swipper.prototype.move = function(){
    var self = this;
    if(this.type == 'fade'){
        $('.my-swipper > .my-swipper-list >li',this.wrap).fadeOut().eq(this.nowIndex).fadeIn(function(){
            self.flag = false;
        }); 
    } else if(this.type == 'animate'){
        $('.my-swipper > .my-swipper-list',this.wrap).animate({
            left: -self.nowIndex  * self.width,
        },function(){
            self.flag = false;
        })
    }
    $('.my-swipper-spot >span',this.wrap).removeClass('current').eq(this.nowIndex % this.len).addClass('current');
}
Swipper.prototype.autoMove = function(){
    clearInterval(this.timer);
    var self = this;
    this.timer = setInterval(function(){
        // $('.my-swipper >.right-btn',self.wrap).trigger('click');
        change(self);
    }, this.autoTime)

}
//原型链上进行扩展
    $.fn.extend({
        swipper:function(options){
            var obj = new Swipper(options,this);
            obj.init();
        }    
    
    })
}())