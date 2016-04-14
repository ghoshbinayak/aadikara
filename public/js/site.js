/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-csstransitions-prefixed-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,a;for(var f in C)if(C.hasOwnProperty(f)){if(e=[],n=C[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),g.push((o?"":"no-")+a.join("-"))}}function s(e){var n=w.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?w.className.baseVal=n:w.className=n)}function i(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function a(e,n){return!!~(""+e).indexOf(n)}function f(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?l(o,t||n):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=n.body;return e||(e=f(x?"svg":"body"),e.fake=!0),e}function c(e,t,r,o){var s,i,a,l,u="modernizr",p=f("div"),c=d();if(parseInt(r,10))for(;r--;)a=f("div"),a.id=o?o[r]:u+(r+1),p.appendChild(a);return s=f("style"),s.type="text/css",s.id="s"+u,(c.fake?c:p).appendChild(s),c.appendChild(p),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),p.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",l=w.style.overflow,w.style.overflow="hidden",w.appendChild(c)),i=t(p,e),c.fake?(c.parentNode.removeChild(c),w.style.overflow=l,w.offsetHeight):p.parentNode.removeChild(p),!!i}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+p(n[o])+":"+r+")");return s=s.join(" or "),c("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,o,s){function l(){p&&(delete N.style,delete N.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var u=m(e,o);if(!r(u,"undefined"))return u}for(var p,d,c,v,h,y=["modernizr","tspan"];!N.style;)p=!0,N.modElem=f(y.shift()),N.style=N.modElem.style;for(c=e.length,d=0;c>d;d++)if(v=e[d],h=N.style[v],a(v,"-")&&(v=i(v)),N.style[v]!==t){if(s||r(o,"undefined"))return l(),"pfx"==n?v:!0;try{N.style[v]=o}catch(g){}if(N.style[v]!=h)return l(),"pfx"==n?v:!0}return l(),!1}function h(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+b.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,o,s):(a=(e+" "+P.join(i+" ")+i).split(" "),u(a,n,t))}function y(e,n,r){return h(e,t,t,n,r)}var g=[],C=[],_={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=_,Modernizr=new Modernizr;var w=n.documentElement,x="svg"===w.nodeName.toLowerCase(),S="Moz O ms Webkit",b=_._config.usePrefixes?S.split(" "):[];_._cssomPrefixes=b;var E=function(n){var r,o=prefixes.length,s=e.CSSRule;if("undefined"==typeof s)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in s)return"@"+n;for(var i=0;o>i;i++){var a=prefixes[i],f=a.toUpperCase()+"_"+r;if(f in s)return"@-"+a.toLowerCase()+"-"+n}return!1};_.atRule=E;var P=_._config.usePrefixes?S.toLowerCase().split(" "):[];_._domPrefixes=P;var z={elem:f("modernizr")};Modernizr._q.push(function(){delete z.elem});var N={style:z.elem.style};Modernizr._q.unshift(function(){delete N.style}),_.testAllProps=h;_.prefixed=function(e,n,t){return 0===e.indexOf("@")?E(e):(-1!=e.indexOf("-")&&(e=i(e)),n?h(e,n,t):h(e,"pfx"))};_.testAllProps=y,Modernizr.addTest("csstransitions",y("transition","all",!0)),o(),s(g),delete _.addTest,delete _.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++)Modernizr._q[T]();e.Modernizr=Modernizr}(window,document);


/*
 *  Bootstrap Auto-Hiding Navbar - v1.0.5
 *  An extension for Bootstrap's fixed navbar which hides the navbar while the page is scrolling downwards and shows it the other way. The plugin is able to show/hide the navbar programmatically as well.
 *  http://www.virtuosoft.eu/code/bootstrap-autohidingnavbar/
 *
 *  Made by István Ujj-Mészáros
 *  Under Apache License v2.0 License
 */
;(function($, window, document, undefined) {
  var pluginName = 'autoHidingNavbar',
      $window = $(window),
      $document = $(document),
      _scrollThrottleTimer = null,
      _resizeThrottleTimer = null,
      _throttleDelay = 70,
      _lastScrollHandlerRun = 0,
      _previousScrollTop = null,
      _windowHeight = $window.height(),
      _visible = true,
      _hideOffset,
      defaults = {
        disableAutohide: false,
        showOnUpscroll: true,
        showOnBottom: true,
        hideOffset: 'auto', // "auto" means the navbar height
        animationDuration: 200
      };

  function AutoHidingNavbar(element, options) {
    this.element = $(element);
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  function hide(autoHidingNavbar) {
    if (!_visible) {
      return;
    }

    autoHidingNavbar.element.addClass('navbar-hidden').animate({
      top: -1 * parseInt(autoHidingNavbar.element.css('height'), 10)
    }, {
      queue: false,
      duration: autoHidingNavbar.settings.animationDuration
    });

    $('.dropdown.open .dropdown-toggle', autoHidingNavbar.element).dropdown('toggle');

    _visible = false;
  }

  function show(autoHidingNavbar) {
    if (_visible) {
      return;
    }

    autoHidingNavbar.element.removeClass('navbar-hidden').animate({
      top: 0
    }, {
      queue: false,
      duration: autoHidingNavbar.settings.animationDuration
    });
    _visible = true;
  }

  function detectState(autoHidingNavbar) {
    var scrollTop = $window.scrollTop(),
        scrollDelta = scrollTop - _previousScrollTop;

    _previousScrollTop = scrollTop;

    if (scrollDelta < 0) {
      if (_visible) {
        return;
      }

      if (autoHidingNavbar.settings.showOnUpscroll || scrollTop <= _hideOffset) {
        show(autoHidingNavbar);
      }
    }
    else if (scrollDelta > 0) {
      if (!_visible) {
        if (autoHidingNavbar.settings.showOnBottom && scrollTop + _windowHeight === $document.height()) {
          show(autoHidingNavbar);
        }
        return;
      }

      if (scrollTop >= _hideOffset) {
        hide(autoHidingNavbar);
      }
    }

  }

  function scrollHandler(autoHidingNavbar) {
    if (autoHidingNavbar.settings.disableAutohide) {
      return;
    }

    _lastScrollHandlerRun = new Date().getTime();

    detectState(autoHidingNavbar);
  }

  function bindEvents(autoHidingNavbar) {
    $document.on('scroll.' + pluginName, function() {
      if (new Date().getTime() - _lastScrollHandlerRun > _throttleDelay) {
        scrollHandler(autoHidingNavbar);
      }
      else {
        clearTimeout(_scrollThrottleTimer);
        _scrollThrottleTimer = setTimeout(function() {
          scrollHandler(autoHidingNavbar);
        }, _throttleDelay);
      }
    });

    $window.on('resize.' + pluginName, function() {
      clearTimeout(_resizeThrottleTimer);
      _resizeThrottleTimer = setTimeout(function() {
        _windowHeight = $window.height();
      }, _throttleDelay);
    });
  }

  function unbindEvents() {
    $document.off('.' + pluginName);

    $window.off('.' + pluginName);
  }

  AutoHidingNavbar.prototype = {
    init: function() {
      this.elements = {
        navbar: this.element
      };

      this.setDisableAutohide(this.settings.disableAutohide);
      this.setShowOnUpscroll(this.settings.showOnUpscroll);
      this.setShowOnBottom(this.settings.showOnBottom);
      this.setHideOffset(this.settings.hideOffset);
      this.setAnimationDuration(this.settings.animationDuration);

      _hideOffset = this.settings.hideOffset === 'auto' ? parseInt(this.element.css('height'), 10) : this.settings.hideOffset;
      bindEvents(this);

      return this.element;
    },
    setDisableAutohide: function(value) {
      this.settings.disableAutohide = value;
      return this.element;
    },
    setShowOnUpscroll: function(value) {
      this.settings.showOnUpscroll = value;
      return this.element;
    },
    setShowOnBottom: function(value) {
      this.settings.showOnBottom = value;
      return this.element;
    },
    setHideOffset: function(value) {
      this.settings.hideOffset = value;
      return this.element;
    },
    setAnimationDuration: function(value) {
      this.settings.animationDuration = value;
      return this.element;
    },
    show: function() {
      show(this);
      return this.element;
    },
    hide: function() {
      hide(this);
      return this.element;
    },
    destroy: function() {
      unbindEvents(this);
      show(this);
      $.data(this, 'plugin_' + pluginName, null);
      return this.element;
    }
  };

  $.fn[pluginName] = function(options) {
    var args = arguments;

    if (options === undefined || typeof options === 'object') {
      return this.each(function() {
        if (!$.data(this, 'plugin_' + pluginName)) {
          $.data(this, 'plugin_' + pluginName, new AutoHidingNavbar(this, options));
        }
      });
    } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
      var returns;

      this.each(function() {
        var instance = $.data(this, 'plugin_' + pluginName);

        if (instance instanceof AutoHidingNavbar && typeof instance[options] === 'function') {
          returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
        }
      });

      return returns !== undefined ? returns : this;
    }

  };

})(jQuery, window, document);


// Create namespace
var Tuti ={};

// list of items
Tuti.grid = $( '#product-grid' );

// the items
Tuti.griditems = Tuti.grid.children( 'div' );

// current expanded item´s index
Tuti.current = -1;

// position (top) of the expanded item
// used to know if the preview will expand in a different row
Tuti.previewPos = -1;

// extra amount of pixels to scroll the window
Tuti.scrollExtra = 0;

// last scroll position
Tuti.lastscroll = 0;

// extra margin when expanded (between the preview element and the next item row)
Tuti.marginExpanded = 10;

// transitionend events
Tuti.transEndEventNames = {
	'WebkitTransition' : 'webkitTransitionEnd',
	'MozTransition' : 'transitionend',
	'OTransition' : 'oTransitionEnd',
	'msTransition' : 'MSTransitionEnd',
	'transition' : 'transitionend'
};
Tuti.transEndEventName = Tuti.transEndEventNames[ Modernizr.prefixed( 'transition' ) ];

// support for csstransitions
Tuti.support = Modernizr.csstransitions;

// defaultTuti.settings
Tuti.settings = {
    minHeight : window.innerHeight * 0.7,
    speed : 350,
    easing : 'ease'
};



Tuti.init = function( config ) {
		
    Tuti.settings = $.extend( true, {}, Tuti.settings, config );
    Tuti.saveItemInfo(true);
    Tuti.getWinSize();
    Tuti.initEvents();
    $(".navbar-fixed-top").autoHidingNavbar();
};

// saves the item´s offset top and height (if saveheight is true)
Tuti.saveItemInfo = function ( saveheight ) {
    Tuti.griditems.each( function() {
        var $item = $( this );
        $item.data( 'offsetTop', $item.offset().top );
        if( saveheight ) {
                $item.data( 'height', $item.height() );
        }
    } );
};

Tuti.getWinSize = function getWinSize() {
    Tuti.winsize = { width : $(window).width(), height : $(window).height() };
}

Tuti.initEvents = function() {
    // when clicking an item, show the preview with the item´s info and large image;
    // close the item if already expanded.
    // also close if clicking on the item´s cross
    Tuti.griditems.on( 'click', 'span.og-close', function() {
           Tuti.hidePreview();
            return false;
    } ).children( 'div.product-tile' ).on( 'click', function(e) {
            var $item = $( this ).parent();
            // check if item already opened
            Tuti.current === $item.index() ? Tuti.hidePreview() : Tuti.showPreview( $item );
            return false;

    } ).css({'cursor': 'pointer'});

    // on window resize get the window´s size again
    // reset some values..
    $(window).on( 'debouncedresize', function() {
            
            Tuti.scrollExtra = 0;
            Tuti.previewPos = -1;
            // save item´s offset
            Tuti.saveItemInfo();
            Tuti.getWinSize();
            var preview = $.data( this, 'preview' );
            if( typeof preview != 'undefined' ) {
                   Tuti.hidePreview();
            }

    } );

}


Tuti.showPreview = function ( $item ) {

    var preview = $.data( this, 'preview' ),
            // item´s offset top
            position = $item.data( 'offsetTop' );

    Tuti.scrollExtra = 0;

    // if a preview exists and previewPos is different (different row) from item´s top, then close it
    if( typeof preview != 'undefined' ) {

            // not in the same row
            if( Tuti.previewPos !== position ) {
                    // if position > previewPos then we need to take the current preview´s height in consideration when scrolling the window
                    if( position > Tuti.previewPos ) {
                            Tuti.scrollExtra = preview.height;
                    }
                    //Tuti.hidePreview();
                    var lastpreview = $.data( this, 'preview' );
                    lastpreview.$previewEl.css('height', 0);
                    lastpreview.$item.removeClass( 'og-expanded' );

                    var $expandedItem = Tuti.griditems.eq( lastpreview.expandedIdx );
		    $expandedItem.css( 'height', $expandedItem.data( 'height' ) );
                    lastpreview.$previewEl.remove();
            }
            // same row
            else {
                    preview.update( $item );
                    return false;
            }
            
    }

    // update previewPos
    Tuti.previewPos = position;
    // initialize new preview for the clicked item
    preview = $.data( this, 'preview', new Tuti.Preview( $item ) );
    // expand preview overlay
    preview.open();
};

Tuti.hidePreview = function() {
    Tuti.current = -1;
    var preview = $.data( this, 'preview' );
    preview.close();
    $.removeData( this, 'preview' );
}

// the preview obj / overlay
Tuti.Preview = function ( $item ) {
    this.$item = $item;
    this.expandedIdx = this.$item.index();
    this.create();
    this.update();
};

// Add the methods
Tuti.Preview.prototype = {
    create : function() {
        // create Preview structure:
        this.$previewInner = $( '<div class="og-expander-inner"></div>' );
        this.$previewEl = $( '<div class="og-expander"></div>' ).append( this.$previewInner );
        // append preview element to the item
        this.$item.append( this.getEl() );
        // set the transitions for the preview and the item
        if(Tuti.support) {
                this.setTransition();
        }
    },

    update : function( $item ) {

        // update with new item´s details 
        if( $item ) {
            this.$item = $item;
        }
        
        // if already expanded, remove class "og-expanded" from current item and add it to new item
        if( Tuti.current !== -1 ) {
            var $currentItem = Tuti.griditems.eq( Tuti.current );
            $currentItem.removeClass( 'og-expanded' );
            this.$item.addClass( 'og-expanded' );
            // position the preview correctly
            this.positionPreview();
        }

        // update current value
        Tuti.current = this.$item.index();

        // update preview´s content
        var $itemEl = this.$item.children( 'script.product-tile-details' ),
            eldata = $itemEl.html();
        this.$previewInner.html( eldata );

        $('.carousel').carousel({ interval: 2000 }); 
    },

    open : function() {

            setTimeout( $.proxy( function() {	
                    // set the height for the preview and the item
                    this.setHeights();
                    // scroll to position the preview in the right place
                    this.positionPreview();
            }, this ), 25 );

    },

    setHeights : function() {

            var self = this,
                    onEndFn = function() {
                            if(Tuti.support) {
                                    self.$item.off( Tuti.transEndEventName );
                            }
                            self.$item.addClass( 'og-expanded' );
                    };

            this.calcHeight();
            this.$previewEl.css( 'height', this.height );
            this.$item.css( 'height', this.itemHeight ).on( Tuti.transEndEventName, onEndFn );

            if( !Tuti.support ) {
                    onEndFn.call();
            }

    },

    calcHeight : function() {

            var heightPreview = Tuti.winsize.height - this.$item.data( 'height' ) - Tuti.marginExpanded,
                    itemHeight = Tuti.winsize.height;

            if( heightPreview < Tuti.settings.minHeight ) {
                    heightPreview =Tuti.settings.minHeight;
                    itemHeight =Tuti.settings.minHeight + this.$item.data( 'height' ) + Tuti.marginExpanded;
            }

            this.height = heightPreview;
            this.itemHeight = itemHeight + 20;

    },

    positionPreview : function() {
            var position = this.$item.position().top;
            var itemHeight = this.$item.data('height');
            var scrollVal = position + (itemHeight/3) - Tuti.scrollExtra ;

            Tuti.lastscroll = window.scrollY;
            $('html, body').animate( { scrollTop: scrollVal }, Tuti.settings.speed );
    },

    close : function() {

        var self = this,
                onEndFn = function() {
                        if( Tuti.support ) {
                                $( this ).off( Tuti.transEndEventName );
                        }
                        self.$item.removeClass( 'og-expanded' );
                        self.$previewEl.remove();
                };

        setTimeout( $.proxy( function() {

                if( typeof this.$largeImg !== 'undefined' ) {
                        this.$largeImg.fadeOut( 'fast' );
                }
                this.$previewEl.css( 'height', 0 );
                // the current expanded item (might be different from this.$item)
                var $expandedItem = Tuti.griditems.eq( this.expandedIdx );
                $expandedItem.css( 'height', $expandedItem.data( 'height' ) ).on( Tuti.transEndEventName, onEndFn );

                if( !Tuti.support ) {
                        onEndFn.call();
                }

        }, this ), 25 );
        
        
        $('html, body').animate( { scrollTop: Tuti.lastscroll }, Tuti.settings.speed );
        return false;

    },
    setTransition  : function() {
        this.$previewEl.css( 'transition', 'height ' + Tuti.settings.speed + 'ms ' + Tuti.settings.easing );
        this.$item.css( 'transition', 'height ' + Tuti.settings.speed + 'ms ' + Tuti.settings.easing );
    },

    getEl : function() {
        return this.$previewEl;
    }
};

Tuti.init();
