(function(){

    function Dropdown(options,wrap){
        this.wrap = wrap;
        this.width = options.width;
        this.widthCol = options.widthCol ;
        this.menuList = options.menuList || [];
        this.direction = options.direction || 'y';
        this.init = function(){
            console.log("===")
            this.creatDom();
            this.initStyle();
    }
}
    Dropdown.prototype.creatDom = function(){
        var dropdownDiv = $('<div class="my-dropdown"></div>');
        this.menuList.forEach(function(ele,index){
            var oDl = $('<dl></dl>');
            if(ele.title){
                 $('<dt></dt>').text(ele.title).appendTo(oDl);
            }
            ele.items.forEach(function(item){
                $('<dd><a href="' + item.href + '">' + item.name + '</a></dd>').appendTo(oDl)
            })
            dropdownDiv.append(oDl);
        })
        $(this.wrap).append(dropdownDiv);
        };


        Dropdown.prototype.initStyle = function () {
            $('.my-dropdown', this.wrap).css({
              width: this.width,
            })
            $('.my-dropdown', this.wrap).find('dl').find('dd').css({
                width: this.widthCol,
            })
            console.log( $('.my-dropdown',this.wrap).width())
            console.log( $('dd',this.wrap).width())
            if(this.direction == 'x'){
                $('.my-dropdown ', this.wrap).css({
                   float:' left',
                   right: -75,
                   padding:'10px 0'
                  }).find('dl').css({
                      float:'left',
                  })
                for (var i = 0; i < this.menuList.length; i++) {
                $('.my-dropdown', this.wrap).find('dl').css({
                    width: this.menuList[i].width,
                    borderLeft: '1px solid #eee',
                    borderBottom: 'none'
                }).find('dd').css({
                    width: this.menuList[i].widthCol,
                });
                }  
            }

          }

    $.fn.extend({
        addDropdown:function(options){
            var obj = new Dropdown(options,this);
            obj.init();
        }
   
    })
}())