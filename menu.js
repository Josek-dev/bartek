$(function(){
			
    var currentIndex = 0;
    var _offset = 10;
    
    var $menuLi = $("#menu-list li");
    var $line = $("#menu-line");
    
    $menuLi.on("mouseover", function(){
        
        var _$this = $(this);
                        
        TweenMax.killTweensOf($line);
        
        if( _$this.index() > currentIndex ){
            
            TweenMax.to($line, 0.5, {css: {width:  (_$this.position().left + _$this.outerWidth()) - $line.position().left + _offset/2 }, onComplete:function(){
                currentIndex = _$this.index();
                TweenMax.to($line, 0.5, { css:{ left : _$this.position().left, width: _$this.outerWidth() } });
            } });
            
        } else {
            
            TweenMax.to($line, 0.5, {css: { left: _$this.position().left, width:  ($line.position().left + $line.outerWidth()) - _$this.position().left + _offset/2 }, onComplete:function(){
                currentIndex = _$this.index();
                TweenMax.to($line, 0.5, { css:{ width: _$this.outerWidth()  } });
            } });
            
        }
                        
    });	
                
});
