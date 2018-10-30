!function(a){function b(){var a=location.href;return hashtag=a.indexOf("#prettyPhoto")!==-1&&decodeURI(a.substring(a.indexOf("#prettyPhoto")+1,a.length)),hashtag&&(hashtag=hashtag.replace(/<|>/g,"")),hashtag}function c(){"undefined"!=typeof theRel&&(location.hash=theRel+"/"+rel_index+"/")}function d(){location.href.indexOf("#prettyPhoto")!==-1&&(location.hash="prettyPhoto")}function e(a,b){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var c="[\\?&]"+a+"=([^&#]*)",d=new RegExp(c),e=d.exec(b);return null==e?"":e[1]}a.prettyPhoto={version:"3.1.6"},a.fn.prettyPhoto=function(f){function g(){a(".pp_loaderIcon").hide(),projectedTop=scroll_pos.scrollTop+(A/2-r.containerHeight/2),projectedTop<0&&(projectedTop=0),$ppt.fadeTo(settings.animation_speed,1),$pp_pic_holder.find(".pp_content").animate({height:r.contentHeight,width:r.contentWidth},settings.animation_speed),$pp_pic_holder.animate({top:projectedTop,left:B/2-r.containerWidth/2<0?0:B/2-r.containerWidth/2,width:r.containerWidth},settings.animation_speed,function(){$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(r.height).width(r.width),$pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed),isSet&&"image"==l(pp_images[set_position])?$pp_pic_holder.find(".pp_hoverContainer").show():$pp_pic_holder.find(".pp_hoverContainer").hide(),settings.allow_expand&&(r.resized?a("a.pp_expand,a.pp_contract").show():a("a.pp_expand").hide()),!settings.autoplay_slideshow||x||s||a.prettyPhoto.startSlideshow(),settings.changepicturecallback(),s=!0}),p(),f.ajaxcallback()}function h(b){$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility","hidden"),$pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed,function(){a(".pp_loaderIcon").show(),b()})}function i(b){b>1?a(".pp_nav").show():a(".pp_nav").hide()}function j(a,b){if(resized=!1,k(a,b),imageWidth=a,imageHeight=b,(w>B||v>A)&&doresize&&settings.allow_resize&&!z){for(resized=!0,fitting=!1;!fitting;)w>B?(imageWidth=B-200,imageHeight=b/a*imageWidth):v>A?(imageHeight=A-200,imageWidth=a/b*imageHeight):fitting=!0,v=imageHeight,w=imageWidth;(w>B||v>A)&&j(w,v),k(imageWidth,imageHeight)}return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(v),containerWidth:Math.floor(w)+2*settings.horizontal_padding,contentHeight:Math.floor(t),contentWidth:Math.floor(u),resized:resized}}function k(b,c){b=parseFloat(b),c=parseFloat(c),$pp_details=$pp_pic_holder.find(".pp_details"),$pp_details.width(b),detailsHeight=parseFloat($pp_details.css("marginTop"))+parseFloat($pp_details.css("marginBottom")),$pp_details=$pp_details.clone().addClass(settings.theme).width(b).appendTo(a("body")).css({position:"absolute",top:-1e4}),detailsHeight+=$pp_details.height(),detailsHeight=detailsHeight<=34?36:detailsHeight,$pp_details.remove(),$pp_title=$pp_pic_holder.find(".ppt"),$pp_title.width(b),titleHeight=parseFloat($pp_title.css("marginTop"))+parseFloat($pp_title.css("marginBottom")),$pp_title=$pp_title.clone().appendTo(a("body")).css({position:"absolute",top:-1e4}),titleHeight+=$pp_title.height(),$pp_title.remove(),t=c+detailsHeight,u=b,v=t+titleHeight+$pp_pic_holder.find(".pp_top").height()+$pp_pic_holder.find(".pp_bottom").height(),w=b}function l(a){return a.match(/youtube\.com\/watch/i)||a.match(/youtu\.be/i)?"youtube":a.match(/vimeo\.com/i)?"vimeo":a.match(/\b.mov\b/i)?"quicktime":a.match(/\b.swf\b/i)?"flash":a.match(/\biframe=true\b/i)?"iframe":a.match(/\bajax=true\b/i)?"ajax":a.match(/\bcustom=true\b/i)?"custom":"#"==a.substr(0,1)?"inline":"image"}function m(){if(doresize&&"undefined"!=typeof $pp_pic_holder){if(scroll_pos=n(),contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width(),projectedTop=A/2+scroll_pos.scrollTop-contentHeight/2,projectedTop<0&&(projectedTop=0),contentHeight>A)return;$pp_pic_holder.css({top:projectedTop,left:B/2+scroll_pos.scrollLeft-contentwidth/2})}}function n(){return self.pageYOffset?{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset}:document.documentElement&&document.documentElement.scrollTop?{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft}:document.body?{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft}:void 0}function o(){A=a(window).height(),B=a(window).width(),"undefined"!=typeof $pp_overlay&&$pp_overlay.height(a(document).height()).width(B)}function p(){isSet&&settings.overlay_gallery&&"image"==l(pp_images[set_position])?(itemWidth=57,navWidth="facebook"==settings.theme||"pp_default"==settings.theme?50:30,itemsPerPage=Math.floor((r.containerWidth-100-navWidth)/itemWidth),itemsPerPage=itemsPerPage<pp_images.length?itemsPerPage:pp_images.length,totalPage=Math.ceil(pp_images.length/itemsPerPage)-1,0==totalPage?(navWidth=0,$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()):$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(),galleryWidth=itemsPerPage*itemWidth,fullGalleryWidth=pp_images.length*itemWidth,$pp_gallery.css("margin-left",-(galleryWidth/2+navWidth/2)).find("div:first").width(galleryWidth+5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"),goToPage=Math.floor(set_position/itemsPerPage)<totalPage?Math.floor(set_position/itemsPerPage):totalPage,a.prettyPhoto.changeGalleryPage(goToPage),$pp_gallery_li.filter(":eq("+set_position+")").addClass("selected")):$pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")}function q(b){if(settings.social_tools&&(facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href))),settings.markup=settings.markup.replace("{pp_social}",""),a("body").append(settings.markup),$pp_pic_holder=a(".pp_pic_holder"),$ppt=a(".ppt"),$pp_overlay=a("div.pp_overlay"),isSet&&settings.overlay_gallery){currentGalleryPage=0,toInject="";for(var c=0;c<pp_images.length;c++)pp_images[c].match(/\b(jpg|jpeg|png|gif)\b/gi)?(classname="",img_src=pp_images[c]):(classname="default",img_src=""),toInject+="<li class='"+classname+"'><a href='#'><img src='"+img_src+"' width='50' alt='' /></a></li>";toInject=settings.gallery_markup.replace(/{gallery}/g,toInject),$pp_pic_holder.find("#pp_full_res").after(toInject),$pp_gallery=a(".pp_pic_holder .pp_gallery"),$pp_gallery_li=$pp_gallery.find("li"),$pp_gallery.find(".pp_arrow_next").click(function(){return a.prettyPhoto.changeGalleryPage("next"),a.prettyPhoto.stopSlideshow(),!1}),$pp_gallery.find(".pp_arrow_previous").click(function(){return a.prettyPhoto.changeGalleryPage("previous"),a.prettyPhoto.stopSlideshow(),!1}),$pp_pic_holder.find(".pp_content").hover(function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()},function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()}),itemWidth=57,$pp_gallery_li.each(function(b){a(this).find("a").click(function(){return a.prettyPhoto.changePage(b),a.prettyPhoto.stopSlideshow(),!1})})}settings.slideshow&&($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'),$pp_pic_holder.find(".pp_nav .pp_play").click(function(){return a.prettyPhoto.startSlideshow(),!1})),$pp_pic_holder.attr("class","pp_pic_holder "+settings.theme),$pp_overlay.css({opacity:0,height:a(document).height(),width:a(window).width()}).bind("click",function(){settings.modal||a.prettyPhoto.close()}),a("a.pp_close").bind("click",function(){return a.prettyPhoto.close(),!1}),settings.allow_expand&&a("a.pp_expand").bind("click",function(b){return a(this).hasClass("pp_expand")?(a(this).removeClass("pp_expand").addClass("pp_contract"),doresize=!1):(a(this).removeClass("pp_contract").addClass("pp_expand"),doresize=!0),h(function(){a.prettyPhoto.open()}),!1}),$pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click",function(){return a.prettyPhoto.changePage("previous"),a.prettyPhoto.stopSlideshow(),!1}),$pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click",function(){return a.prettyPhoto.changePage("next"),a.prettyPhoto.stopSlideshow(),!1}),m()}f=jQuery.extend({hook:"rel",animation_speed:"fast",ajaxcallback:function(){},slideshow:5e3,autoplay_slideshow:!1,opacity:.8,show_title:!0,allow_resize:!0,allow_expand:!0,default_width:500,default_height:344,counter_separator_label:"/",theme:"pp_default",horizontal_padding:20,hideflash:!1,wmode:"opaque",autoplay:!0,modal:!1,deeplinking:!0,overlay_gallery:!0,overlay_gallery_max:30,keyboard_shortcuts:!0,changepicturecallback:function(){},callback:function(){},ie6_fallback:!0,markup:'<div class="pp_pic_holder"> \t\t\t\t\t\t<div class="ppt">&nbsp;</div> \t\t\t\t\t\t<div class="pp_top"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_content_container"> \t\t\t\t\t\t\t<div class="pp_left"> \t\t\t\t\t\t\t<div class="pp_right"> \t\t\t\t\t\t\t\t<div class="pp_content"> \t\t\t\t\t\t\t\t\t<div class="pp_loaderIcon"></div> \t\t\t\t\t\t\t\t\t<div class="pp_fade"> \t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_expand" title="Expand the image">Expand</a> \t\t\t\t\t\t\t\t\t\t<div class="pp_hoverContainer"> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_next" href="#">next</a> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_previous" href="#">previous</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t<div id="pp_full_res"></div> \t\t\t\t\t\t\t\t\t\t<div class="pp_details"> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_nav"> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t\t\t\t\t<p class="currentTextHolder">0/0</p> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t<p class="pp_description"></p> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_social">{pp_social}</div> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_close" href="#">Close</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_bottom"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t</div> \t\t\t\t\t<div class="pp_overlay"></div>',gallery_markup:'<div class="pp_gallery"> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t<div> \t\t\t\t\t\t\t\t\t<ul> \t\t\t\t\t\t\t\t\t\t{gallery} \t\t\t\t\t\t\t\t\t</ul> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t</div>',image_markup:'<img id="fullResImage" src="{path}" />',flash_markup:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',quicktime_markup:'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="https://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="https://www.apple.com/quicktime/download/"></embed></object>',iframe_markup:'<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',inline_markup:'<div class="pp_inline">{content}</div>',custom_markup:"",social_tools:'<div class="twitter"><a href="//twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="//platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'},f);var r,s,t,u,v,w,x,y=this,z=!1,A=a(window).height(),B=a(window).width();return doresize=!0,scroll_pos=n(),a(window).unbind("resize.prettyphoto").bind("resize.prettyphoto",function(){m(),o()}),f.keyboard_shortcuts&&a(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto",function(b){if("undefined"!=typeof $pp_pic_holder&&$pp_pic_holder.is(":visible"))switch(b.keyCode){case 37:a.prettyPhoto.changePage("previous"),b.preventDefault();break;case 39:a.prettyPhoto.changePage("next"),b.preventDefault();break;case 27:settings.modal||a.prettyPhoto.close(),b.preventDefault()}}),a.prettyPhoto.initialize=function(){return settings=f,"pp_default"==settings.theme&&(settings.horizontal_padding=16),theRel=a(this).attr(settings.hook),galleryRegExp=/\[(?:.*)\]/,isSet=!!galleryRegExp.exec(theRel),pp_images=isSet?jQuery.map(y,function(b,c){if(a(b).attr(settings.hook).indexOf(theRel)!=-1)return a(b).attr("href")}):a.makeArray(a(this).attr("href")),pp_titles=isSet?jQuery.map(y,function(b,c){if(a(b).attr(settings.hook).indexOf(theRel)!=-1)return a(b).find("img").attr("alt")?a(b).find("img").attr("alt"):""}):a.makeArray(a(this).find("img").attr("alt")),pp_descriptions=isSet?jQuery.map(y,function(b,c){if(a(b).attr(settings.hook).indexOf(theRel)!=-1)return a(b).attr("title")?a(b).attr("title"):""}):a.makeArray(a(this).attr("title")),pp_images.length>settings.overlay_gallery_max&&(settings.overlay_gallery=!1),set_position=jQuery.inArray(a(this).attr("href"),pp_images),rel_index=isSet?set_position:a("a["+settings.hook+"^='"+theRel+"']").index(a(this)),q(this),settings.allow_resize&&a(window).bind("scroll.prettyphoto",function(){m()}),a.prettyPhoto.open(),!1},a.prettyPhoto.open=function(b){return"undefined"==typeof settings&&(settings=f,pp_images=a.makeArray(arguments[0]),pp_titles=arguments[1]?a.makeArray(arguments[1]):a.makeArray(""),pp_descriptions=arguments[2]?a.makeArray(arguments[2]):a.makeArray(""),isSet=pp_images.length>1,set_position=arguments[3]?arguments[3]:0,q(b.target)),settings.hideflash&&a("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","hidden"),i(a(pp_images).length),a(".pp_loaderIcon").show(),settings.deeplinking&&c(),settings.social_tools&&(facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href)),$pp_pic_holder.find(".pp_social").html(facebook_like_link)),$ppt.is(":hidden")&&$ppt.css("opacity",0).show(),$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity),$pp_pic_holder.find(".currentTextHolder").text(set_position+1+settings.counter_separator_label+a(pp_images).length),"undefined"!=typeof pp_descriptions[set_position]&&""!=pp_descriptions[set_position]?$pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])):$pp_pic_holder.find(".pp_description").hide(),movie_width=parseFloat(e("width",pp_images[set_position]))?e("width",pp_images[set_position]):settings.default_width.toString(),movie_height=parseFloat(e("height",pp_images[set_position]))?e("height",pp_images[set_position]):settings.default_height.toString(),z=!1,movie_height.indexOf("%")!=-1&&(movie_height=parseFloat(a(window).height()*parseFloat(movie_height)/100-150),z=!0),movie_width.indexOf("%")!=-1&&(movie_width=parseFloat(a(window).width()*parseFloat(movie_width)/100-150),z=!0),$pp_pic_holder.fadeIn(function(){switch(settings.show_title&&""!=pp_titles[set_position]&&"undefined"!=typeof pp_titles[set_position]?$ppt.html(unescape(pp_titles[set_position])):$ppt.html("&nbsp;"),imgPreloader="",skipInjection=!1,l(pp_images[set_position])){case"image":imgPreloader=new Image,nextImage=new Image,isSet&&set_position<a(pp_images).length-1&&(nextImage.src=pp_images[set_position+1]),prevImage=new Image,isSet&&pp_images[set_position-1]&&(prevImage.src=pp_images[set_position-1]),$pp_pic_holder.find("#pp_full_res")[0].innerHTML=settings.image_markup.replace(/{path}/g,pp_images[set_position]),imgPreloader.onload=function(){r=j(imgPreloader.width,imgPreloader.height),g()},imgPreloader.onerror=function(){alert("Image cannot be loaded. Make sure the path is correct and image exist."),a.prettyPhoto.close()},imgPreloader.src=pp_images[set_position];break;case"youtube":r=j(movie_width,movie_height),movie_id=e("v",pp_images[set_position]),""==movie_id&&(movie_id=pp_images[set_position].split("youtu.be/"),movie_id=movie_id[1],movie_id.indexOf("?")>0&&(movie_id=movie_id.substr(0,movie_id.indexOf("?"))),movie_id.indexOf("&")>0&&(movie_id=movie_id.substr(0,movie_id.indexOf("&")))),movie="//www.youtube.com/embed/"+movie_id,e("rel",pp_images[set_position])?movie+="?rel="+e("rel",pp_images[set_position]):movie+="?rel=1",settings.autoplay&&(movie+="&autoplay=1"),toInject=settings.iframe_markup.replace(/{width}/g,r.width).replace(/{height}/g,r.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case"vimeo":r=j(movie_width,movie_height),movie_id=pp_images[set_position];var b=/http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,c=movie_id.match(b);movie="//player.vimeo.com/video/"+c[3]+"?title=0&amp;byline=0&amp;portrait=0",settings.autoplay&&(movie+="&autoplay=1;"),vimeo_width=r.width+"/embed/?moog_width="+r.width,toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,r.height).replace(/{path}/g,movie);break;case"quicktime":r=j(movie_width,movie_height),r.height+=15,r.contentHeight+=15,r.containerHeight+=15,toInject=settings.quicktime_markup.replace(/{width}/g,r.width).replace(/{height}/g,r.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case"flash":r=j(movie_width,movie_height),flash_vars=pp_images[set_position],flash_vars=flash_vars.substring(pp_images[set_position].indexOf("flashvars")+10,pp_images[set_position].length),filename=pp_images[set_position],filename=filename.substring(0,filename.indexOf("?")),toInject=settings.flash_markup.replace(/{width}/g,r.width).replace(/{height}/g,r.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+"?"+flash_vars);break;case"iframe":r=j(movie_width,movie_height),frame_url=pp_images[set_position],frame_url=frame_url.substr(0,frame_url.indexOf("iframe")-1),toInject=settings.iframe_markup.replace(/{width}/g,r.width).replace(/{height}/g,r.height).replace(/{path}/g,frame_url);break;case"ajax":doresize=!1,r=j(movie_width,movie_height),doresize=!0,skipInjection=!0,a.get(pp_images[set_position],function(a){toInject=settings.inline_markup.replace(/{content}/g,a),$pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject,g()});break;case"custom":r=j(movie_width,movie_height),toInject=settings.custom_markup;break;case"inline":myClone=a(pp_images[set_position]).clone().append('<br clear="all" />').css({width:settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(a("body")).show(),doresize=!1,r=j(a(myClone).width(),a(myClone).height()),doresize=!0,a(myClone).remove(),toInject=settings.inline_markup.replace(/{content}/g,a(pp_images[set_position]).html())}imgPreloader||skipInjection||($pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject,g())}),!1},a.prettyPhoto.changePage=function(b){currentGalleryPage=0,"previous"==b?(set_position--,set_position<0&&(set_position=a(pp_images).length-1)):"next"==b?(set_position++,set_position>a(pp_images).length-1&&(set_position=0)):set_position=b,rel_index=set_position,doresize||(doresize=!0),settings.allow_expand&&a(".pp_contract").removeClass("pp_contract").addClass("pp_expand"),h(function(){a.prettyPhoto.open()})},a.prettyPhoto.changeGalleryPage=function(a){"next"==a?(currentGalleryPage++,currentGalleryPage>totalPage&&(currentGalleryPage=0)):"previous"==a?(currentGalleryPage--,currentGalleryPage<0&&(currentGalleryPage=totalPage)):currentGalleryPage=a,slide_speed="next"==a||"previous"==a?settings.animation_speed:0,slide_to=currentGalleryPage*(itemsPerPage*itemWidth),$pp_gallery.find("ul").animate({left:-slide_to},slide_speed)},a.prettyPhoto.startSlideshow=function(){"undefined"==typeof x?($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function(){return a.prettyPhoto.stopSlideshow(),!1}),x=setInterval(a.prettyPhoto.startSlideshow,settings.slideshow)):a.prettyPhoto.changePage("next")},a.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function(){return a.prettyPhoto.startSlideshow(),!1}),clearInterval(x),x=void 0},a.prettyPhoto.close=function(){$pp_overlay.is(":animated")||(a.prettyPhoto.stopSlideshow(),$pp_pic_holder.stop().find("object,embed").css("visibility","hidden"),a("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed,function(){a(this).remove()}),$pp_overlay.fadeOut(settings.animation_speed,function(){settings.hideflash&&a("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","visible"),a(this).remove(),a(window).unbind("scroll.prettyphoto"),d(),settings.callback(),doresize=!0,s=!1,delete settings}))},!pp_alreadyInitialized&&b()&&(pp_alreadyInitialized=!0,hashIndex=b(),hashRel=hashIndex,hashIndex=hashIndex.substring(hashIndex.indexOf("/")+1,hashIndex.length-1),hashRel=hashRel.substring(0,hashRel.indexOf("/")),setTimeout(function(){a("a["+f.hook+"^='"+hashRel+"']:eq("+hashIndex+")").trigger("click")},50)),this.unbind("click.prettyphoto").bind("click.prettyphoto",a.prettyPhoto.initialize)}}(jQuery);var pp_alreadyInitialized=!1;
;/**
 * jQuery SelectBox
 *
 * v1.2.0
 * github.com/marcj/jquery-selectBox
 */
(function(a){var b=this.SelectBox=function(c,d){if(c instanceof jQuery){if(c.length>0){c=c[0]}else{return}}this.typeTimer=null;this.typeSearch="";this.isMac=navigator.platform.match(/mac/i);d="object"===typeof d?d:{};this.selectElement=c;if(!d.mobile&&navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i)){return false}if("select"!==c.tagName.toLowerCase()){return false}this.init(d)};b.prototype.version="1.2.0";b.prototype.init=function(o){var j=a(this.selectElement);if(j.data("selectBox-control")){return false}var f=a('<a class="selectBox" />'),h=j.attr("multiple")||parseInt(j.attr("size"))>1,d=o||{},c=parseInt(j.prop("tabindex"))||0,m=this;f.width(j.outerWidth()).addClass(j.attr("class")).attr("title",j.attr("title")||"").attr("tabindex",c).css("display","inline-block").bind("focus.selectBox",function(){if(this!==document.activeElement&&document.body!==document.activeElement){a(document.activeElement).blur()}if(f.hasClass("selectBox-active")){return}f.addClass("selectBox-active");j.trigger("focus")}).bind("blur.selectBox",function(){if(!f.hasClass("selectBox-active")){return}f.removeClass("selectBox-active");j.trigger("blur")});if(!a(window).data("selectBox-bindings")){a(window).data("selectBox-bindings",true).bind("scroll.selectBox",this.hideMenus).bind("resize.selectBox",this.hideMenus)}if(j.attr("disabled")){f.addClass("selectBox-disabled")}j.bind("click.selectBox",function(p){f.focus();p.preventDefault()});if(h){o=this.getOptions("inline");f.append(o).data("selectBox-options",o).addClass("selectBox-inline selectBox-menuShowing").bind("keydown.selectBox",function(p){m.handleKeyDown(p)}).bind("keypress.selectBox",function(p){m.handleKeyPress(p)}).bind("mousedown.selectBox",function(p){if(1!==p.which){return}if(a(p.target).is("A.selectBox-inline")){p.preventDefault()}if(!f.hasClass("selectBox-focus")){f.focus()}}).insertAfter(j);if(!j[0].style.height){var n=j.attr("size")?parseInt(j.attr("size")):5;var e=f.clone().removeAttr("id").css({position:"absolute",top:"-9999em"}).show().appendTo("body");e.find(".selectBox-options").html("<li><a>\u00A0</a></li>");var l=parseInt(e.find(".selectBox-options A:first").html("&nbsp;").outerHeight());e.remove();f.height(l*n)}this.disableSelection(f)}else{var i=a('<span class="selectBox-label" />'),k=a('<span class="selectBox-arrow" />');i.attr("class",this.getLabelClass()).text(this.getLabelText());o=this.getOptions("dropdown");o.appendTo("BODY");f.data("selectBox-options",o).addClass("selectBox-dropdown").append(i).append(k).bind("mousedown.selectBox",function(p){if(1===p.which){if(f.hasClass("selectBox-menuShowing")){m.hideMenus()}else{p.stopPropagation();o.data("selectBox-down-at-x",p.screenX).data("selectBox-down-at-y",p.screenY);m.showMenu()}}}).bind("keydown.selectBox",function(p){m.handleKeyDown(p)}).bind("keypress.selectBox",function(p){m.handleKeyPress(p)}).bind("open.selectBox",function(q,p){if(p&&p._selectBox===true){return}m.showMenu()}).bind("close.selectBox",function(q,p){if(p&&p._selectBox===true){return}m.hideMenus()}).insertAfter(j);var g=f.width()-k.outerWidth()-parseInt(i.css("paddingLeft"))||0-parseInt(i.css("paddingRight"))||0;i.width(g);this.disableSelection(f)}j.addClass("selectBox").data("selectBox-control",f).data("selectBox-settings",d).hide()};b.prototype.getOptions=function(j){var f;var c=a(this.selectElement);var e=this;var d=function(i,k){i.children("OPTION, OPTGROUP").each(function(){if(a(this).is("OPTION")){if(a(this).length>0){e.generateOptions(a(this),k)}else{k.append("<li>\u00A0</li>")}}else{var l=a('<li class="selectBox-optgroup" />');l.text(a(this).attr("label"));k.append(l);k=d(a(this),k)}});return k};switch(j){case"inline":f=a('<ul class="selectBox-options" />');f=d(c,f);f.find("A").bind("mouseover.selectBox",function(i){e.addHover(a(this).parent())}).bind("mouseout.selectBox",function(i){e.removeHover(a(this).parent())}).bind("mousedown.selectBox",function(i){if(1!==i.which){return}i.preventDefault();if(!c.selectBox("control").hasClass("selectBox-active")){c.selectBox("control").focus()}}).bind("mouseup.selectBox",function(i){if(1!==i.which){return}e.hideMenus();e.selectOption(a(this).parent(),i)});this.disableSelection(f);return f;case"dropdown":f=a('<ul class="selectBox-dropdown-menu selectBox-options" />');f=d(c,f);f.data("selectBox-select",c).css("display","none").appendTo("BODY").find("A").bind("mousedown.selectBox",function(i){if(i.which===1){i.preventDefault();if(i.screenX===f.data("selectBox-down-at-x")&&i.screenY===f.data("selectBox-down-at-y")){f.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y");e.hideMenus()}}}).bind("mouseup.selectBox",function(i){if(1!==i.which){return}if(i.screenX===f.data("selectBox-down-at-x")&&i.screenY===f.data("selectBox-down-at-y")){return}else{f.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y")}e.selectOption(a(this).parent());e.hideMenus()}).bind("mouseover.selectBox",function(i){e.addHover(a(this).parent())}).bind("mouseout.selectBox",function(i){e.removeHover(a(this).parent())});var h=c.attr("class")||"";if(""!==h){h=h.split(" ");for(var g in h){f.addClass(h[g]+"-selectBox-dropdown-menu")}}this.disableSelection(f);return f}};b.prototype.getLabelClass=function(){var c=a(this.selectElement).find("OPTION:selected");return("selectBox-label "+(c.attr("class")||"")).replace(/\s+$/,"")};b.prototype.getLabelText=function(){var c=a(this.selectElement).find("OPTION:selected");return c.text()||"\u00A0"};b.prototype.setLabel=function(){var c=a(this.selectElement);var d=c.data("selectBox-control");if(!d){return}d.find(".selectBox-label").attr("class",this.getLabelClass()).text(this.getLabelText())};b.prototype.destroy=function(){var c=a(this.selectElement);var e=c.data("selectBox-control");if(!e){return}var d=e.data("selectBox-options");d.remove();e.remove();c.removeClass("selectBox").removeData("selectBox-control").data("selectBox-control",null).removeData("selectBox-settings").data("selectBox-settings",null).show()};b.prototype.refresh=function(){var c=a(this.selectElement),e=c.data("selectBox-control"),f=e.hasClass("selectBox-dropdown"),d=e.hasClass("selectBox-menuShowing");c.selectBox("options",c.html());if(f&&d){this.showMenu()}};b.prototype.showMenu=function(){var e=this,d=a(this.selectElement),j=d.data("selectBox-control"),h=d.data("selectBox-settings"),f=j.data("selectBox-options");if(j.hasClass("selectBox-disabled")){return false}this.hideMenus();var g=parseInt(j.css("borderBottomWidth"))||0;f.width(j.innerWidth()).css({top:j.offset().top+j.outerHeight()-g,left:j.offset().left});if(d.triggerHandler("beforeopen")){return false}var i=function(){d.triggerHandler("open",{_selectBox:true})};switch(h.menuTransition){case"fade":f.fadeIn(h.menuSpeed,i);break;case"slide":f.slideDown(h.menuSpeed,i);break;default:f.show(h.menuSpeed,i);break}if(!h.menuSpeed){i()}var c=f.find(".selectBox-selected:first");this.keepOptionInView(c,true);this.addHover(c);j.addClass("selectBox-menuShowing");a(document).bind("mousedown.selectBox",function(k){if(1===k.which){if(a(k.target).parents().andSelf().hasClass("selectBox-options")){return}e.hideMenus()}})};b.prototype.hideMenus=function(){if(a(".selectBox-dropdown-menu:visible").length===0){return}a(document).unbind("mousedown.selectBox");a(".selectBox-dropdown-menu").each(function(){var d=a(this),c=d.data("selectBox-select"),g=c.data("selectBox-control"),e=c.data("selectBox-settings");if(c.triggerHandler("beforeclose")){return false}var f=function(){c.triggerHandler("close",{_selectBox:true})};if(e){switch(e.menuTransition){case"fade":d.fadeOut(e.menuSpeed,f);break;case"slide":d.slideUp(e.menuSpeed,f);break;default:d.hide(e.menuSpeed,f);break}if(!e.menuSpeed){f()}g.removeClass("selectBox-menuShowing")}else{a(this).hide();a(this).triggerHandler("close",{_selectBox:true});a(this).removeClass("selectBox-menuShowing")}})};b.prototype.selectOption=function(d,j){var c=a(this.selectElement);d=a(d);var k=c.data("selectBox-control"),h=c.data("selectBox-settings");if(k.hasClass("selectBox-disabled")){return false}if(0===d.length||d.hasClass("selectBox-disabled")){return false}if(c.attr("multiple")){if(j.shiftKey&&k.data("selectBox-last-selected")){d.toggleClass("selectBox-selected");var e;if(d.index()>k.data("selectBox-last-selected").index()){e=d.siblings().slice(k.data("selectBox-last-selected").index(),d.index())}else{e=d.siblings().slice(d.index(),k.data("selectBox-last-selected").index())}e=e.not(".selectBox-optgroup, .selectBox-disabled");if(d.hasClass("selectBox-selected")){e.addClass("selectBox-selected")}else{e.removeClass("selectBox-selected")}}else{if((this.isMac&&j.metaKey)||(!this.isMac&&j.ctrlKey)){d.toggleClass("selectBox-selected")}else{d.siblings().removeClass("selectBox-selected");d.addClass("selectBox-selected")}}}else{d.siblings().removeClass("selectBox-selected");d.addClass("selectBox-selected")}if(k.hasClass("selectBox-dropdown")){k.find(".selectBox-label").text(d.text())}var f=0,g=[];if(c.attr("multiple")){k.find(".selectBox-selected A").each(function(){g[f++]=a(this).attr("rel")})}else{g=d.find("A").attr("rel")}k.data("selectBox-last-selected",d);if(c.val()!==g){c.val(g);this.setLabel();c.trigger("change")}return true};b.prototype.addHover=function(d){d=a(d);var c=a(this.selectElement),f=c.data("selectBox-control"),e=f.data("selectBox-options");e.find(".selectBox-hover").removeClass("selectBox-hover");d.addClass("selectBox-hover")};b.prototype.getSelectElement=function(){return this.selectElement};b.prototype.removeHover=function(d){d=a(d);var c=a(this.selectElement),f=c.data("selectBox-control"),e=f.data("selectBox-options");e.find(".selectBox-hover").removeClass("selectBox-hover")};b.prototype.keepOptionInView=function(e,d){if(!e||e.length===0){return}var c=a(this.selectElement),j=c.data("selectBox-control"),g=j.data("selectBox-options"),h=j.hasClass("selectBox-dropdown")?g:g.parent(),i=parseInt(e.offset().top-h.position().top),f=parseInt(i+e.outerHeight());if(d){h.scrollTop(e.offset().top-h.offset().top+h.scrollTop()-(h.height()/2))}else{if(i<0){h.scrollTop(e.offset().top-h.offset().top+h.scrollTop())}if(f>h.height()){h.scrollTop((e.offset().top+e.outerHeight())-h.offset().top+h.scrollTop()-h.height())}}};b.prototype.handleKeyDown=function(c){var k=a(this.selectElement),g=k.data("selectBox-control"),l=g.data("selectBox-options"),e=k.data("selectBox-settings"),f=0,h=0;if(g.hasClass("selectBox-disabled")){return}switch(c.keyCode){case 8:c.preventDefault();this.typeSearch="";break;case 9:case 27:this.hideMenus();this.removeHover();break;case 13:if(g.hasClass("selectBox-menuShowing")){this.selectOption(l.find("LI.selectBox-hover:first"),c);if(g.hasClass("selectBox-dropdown")){this.hideMenus()}}else{this.showMenu()}break;case 38:case 37:c.preventDefault();if(g.hasClass("selectBox-menuShowing")){var d=l.find(".selectBox-hover").prev("LI");f=l.find("LI:not(.selectBox-optgroup)").length;h=0;while(d.length===0||d.hasClass("selectBox-disabled")||d.hasClass("selectBox-optgroup")){d=d.prev("LI");if(d.length===0){if(e.loopOptions){d=l.find("LI:last")}else{d=l.find("LI:first")}}if(++h>=f){break}}this.addHover(d);this.selectOption(d,c);this.keepOptionInView(d)}else{this.showMenu()}break;case 40:case 39:c.preventDefault();if(g.hasClass("selectBox-menuShowing")){var j=l.find(".selectBox-hover").next("LI");f=l.find("LI:not(.selectBox-optgroup)").length;h=0;while(0===j.length||j.hasClass("selectBox-disabled")||j.hasClass("selectBox-optgroup")){j=j.next("LI");if(j.length===0){if(e.loopOptions){j=l.find("LI:first")}else{j=l.find("LI:last")}}if(++h>=f){break}}this.addHover(j);this.selectOption(j,c);this.keepOptionInView(j)}else{this.showMenu()}break}};b.prototype.handleKeyPress=function(e){var c=a(this.selectElement),f=c.data("selectBox-control"),d=f.data("selectBox-options");if(f.hasClass("selectBox-disabled")){return}switch(e.keyCode){case 9:case 27:case 13:case 38:case 37:case 40:case 39:break;default:if(!f.hasClass("selectBox-menuShowing")){this.showMenu()}e.preventDefault();clearTimeout(this.typeTimer);this.typeSearch+=String.fromCharCode(e.charCode||e.keyCode);d.find("A").each(function(){if(a(this).text().substr(0,this.typeSearch.length).toLowerCase()===this.typeSearch.toLowerCase()){this.addHover(a(this).parent());this.selectOption(a(this).parent(),e);this.keepOptionInView(a(this).parent());return false}});this.typeTimer=setTimeout(function(){this.typeSearch=""},1000);break}};b.prototype.enable=function(){var c=a(this.selectElement);c.prop("disabled",false);var d=c.data("selectBox-control");if(!d){return}d.removeClass("selectBox-disabled")};b.prototype.disable=function(){var c=a(this.selectElement);c.prop("disabled",true);var d=c.data("selectBox-control");if(!d){return}d.addClass("selectBox-disabled")};b.prototype.setValue=function(f){var c=a(this.selectElement);c.val(f);f=c.val();if(null===f){f=c.children().first().val();c.val(f)}var g=c.data("selectBox-control");if(!g){return}var e=c.data("selectBox-settings"),d=g.data("selectBox-options");this.setLabel();d.find(".selectBox-selected").removeClass("selectBox-selected");d.find("A").each(function(){if(typeof(f)==="object"){for(var h=0;h<f.length;h++){if(a(this).attr("rel")==f[h]){a(this).parent().addClass("selectBox-selected")}}}else{if(a(this).attr("rel")==f){a(this).parent().addClass("selectBox-selected")}}});if(e.change){e.change.call(c)}};b.prototype.setOptions=function(m){var l=a(this.selectElement),f=l.data("selectBox-control"),d=l.data("selectBox-settings"),k;switch(typeof(m)){case"string":l.html(m);break;case"object":l.html("");for(var g in m){if(m[g]===null){continue}if(typeof(m[g])==="object"){var c=a('<optgroup label="'+g+'" />');for(var e in m[g]){c.append('<option value="'+e+'">'+m[g][e]+"</option>")}l.append(c)}else{var h=a('<option value="'+g+'">'+m[g]+"</option>");l.append(h)}}break}if(!f){return}f.data("selectBox-options").remove();k=f.hasClass("selectBox-dropdown")?"dropdown":"inline";m=this.getOptions(k);f.data("selectBox-options",m);switch(k){case"inline":f.append(m);break;case"dropdown":this.setLabel();a("BODY").append(m);break}};b.prototype.disableSelection=function(c){a(c).css("MozUserSelect","none").bind("selectstart",function(d){d.preventDefault()})};b.prototype.generateOptions=function(e,f){var c=a("<li />"),d=a("<a />");c.addClass(e.attr("class"));c.data(e.data());d.attr("rel",e.val()).text(e.text());c.append(d);if(e.attr("disabled")){c.addClass("selectBox-disabled")}if(e.attr("selected")){c.addClass("selectBox-selected")}f.append(c)};a.extend(a.fn,{selectBox:function(e,c){var d;switch(e){case"control":return a(this).data("selectBox-control");case"settings":if(!c){return a(this).data("selectBox-settings")}a(this).each(function(){a(this).data("selectBox-settings",a.extend(true,a(this).data("selectBox-settings"),c))});break;case"options":if(undefined===c){return a(this).data("selectBox-control").data("selectBox-options")}a(this).each(function(){if(d=a(this).data("selectBox")){d.setOptions(c)}});break;case"value":if(undefined===c){return a(this).val()}a(this).each(function(){if(d=a(this).data("selectBox")){d.setValue(c)}});break;case"refresh":a(this).each(function(){if(d=a(this).data("selectBox")){d.refresh()}});break;case"enable":a(this).each(function(){if(d=a(this).data("selectBox")){d.enable(this)}});break;case"disable":a(this).each(function(){if(d=a(this).data("selectBox")){d.disable()}});break;case"destroy":a(this).each(function(){if(d=a(this).data("selectBox")){d.destroy();a(this).data("selectBox",null)}});break;case"instance":return a(this).data("selectBox");default:a(this).each(function(g,f){if(!a(f).data("selectBox")){a(f).data("selectBox",new b(f,e))}});break}return a(this)}})})(jQuery);
;jQuery(document).ready(function(b){function l(){h.off("change");h=b('.wishlist_table tbody input[type="checkbox"]');"undefined"!=typeof b.fn.selectBox&&b("select.selectBox").selectBox();k();m()}function t(){var a=b(".woocommerce-message");0==a.length?b("#yith-wcwl-form").prepend(yith_wcwl_l10n.labels.added_to_cart_message):a.fadeOut(300,function(){b(this).replaceWith(yith_wcwl_l10n.labels.added_to_cart_message).fadeIn()})}function u(a){var c=a.data("product-id"),d=b(".add-to-wishlist-"+c),c={add_to_wishlist:c,product_type:a.data("product-type"),action:yith_wcwl_l10n.actions.add_to_wishlist_action};if(yith_wcwl_l10n.multi_wishlist&&yith_wcwl_l10n.is_user_logged_in){var e=a.parents(".yith-wcwl-popup-footer").prev(".yith-wcwl-popup-content"),f=e.find(".wishlist-select"),g=e.find(".wishlist-name"),e=e.find(".wishlist-visibility");c.wishlist_id=f.val();c.wishlist_name=g.val();c.wishlist_visibility=e.val()}q()?b.ajax({type:"POST",url:yith_wcwl_l10n.ajax_url,data:c,dataType:"json",beforeSend:function(){a.siblings(".ajax-loading").css("visibility","visible")},complete:function(){a.siblings(".ajax-loading").css("visibility","hidden")},success:function(a){var c=b("#yith-wcwl-popup-message"),e=a.result,f=a.message;if(yith_wcwl_l10n.multi_wishlist&&yith_wcwl_l10n.is_user_logged_in){var g=b("select.wishlist-select");"undefined"!=typeof b.prettyPhoto&&"undefined"!=typeof b.prettyPhoto.close&&b.prettyPhoto.close();g.each(function(d){d=b(this);var c=d.find("option"),c=c.slice(1,c.length-1);c.remove();if("undefined"!=typeof a.user_wishlists)for(c in c=0,a.user_wishlists)"1"!=a.user_wishlists[c].is_default&&b("<option>").val(a.user_wishlists[c].ID).html(a.user_wishlists[c].wishlist_name).insertBefore(d.find("option:last-child"))})}b("#yith-wcwl-message").html(f);c.css("margin-left","-"+b(c).width()+"px").fadeIn();window.setTimeout(function(){c.fadeOut()},2E3);"true"==e?((!yith_wcwl_l10n.multi_wishlist||!yith_wcwl_l10n.is_user_logged_in||yith_wcwl_l10n.multi_wishlist&&yith_wcwl_l10n.is_user_logged_in&&yith_wcwl_l10n.hide_add_button)&&d.find(".yith-wcwl-add-button").hide().removeClass("show").addClass("hide"),d.find(".yith-wcwl-wishlistexistsbrowse").hide().removeClass("show").addClass("hide").find("a").attr("href",a.wishlist_url),d.find(".yith-wcwl-wishlistaddedbrowse").show().removeClass("hide").addClass("show").find("a").attr("href",a.wishlist_url)):"exists"==e?((!yith_wcwl_l10n.multi_wishlist||!yith_wcwl_l10n.is_user_logged_in||yith_wcwl_l10n.multi_wishlist&&yith_wcwl_l10n.is_user_logged_in&&yith_wcwl_l10n.hide_add_button)&&d.find(".yith-wcwl-add-button").hide().removeClass("show").addClass("hide"),d.find(".yith-wcwl-wishlistexistsbrowse").show().removeClass("hide").addClass("show").find("a").attr("href",a.wishlist_url),d.find(".yith-wcwl-wishlistaddedbrowse").hide().removeClass("show").addClass("hide").find("a").attr("href",a.wishlist_url)):(d.find(".yith-wcwl-add-button").show().removeClass("hide").addClass("show"),d.find(".yith-wcwl-wishlistexistsbrowse").hide().removeClass("show").addClass("hide"),d.find(".yith-wcwl-wishlistaddedbrowse").hide().removeClass("show").addClass("hide"));b("body").trigger("added_to_wishlist")}}):alert(yith_wcwl_l10n.labels.cookie_disabled)}function v(a){var c=a.parents(".cart.wishlist_table"),d=c.data("pagination"),e=c.data("per-page"),f=c.data("page");a=a.parents("[data-row-id]");c.find(".pagination-row");a=a.data("row-id");var g=c.data("id"),n=c.data("token"),d={action:yith_wcwl_l10n.actions.remove_from_wishlist_action,remove_from_wishlist:a,pagination:d,per_page:e,current_page:f,wishlist_id:g,wishlist_token:n};b("#yith-wcwl-message").html("&nbsp;");"undefined"!=typeof b.fn.block&&c.fadeTo("400","0.6").block({message:null,overlayCSS:{background:"transparent url("+yith_wcwl_l10n.ajax_loader_url+") no-repeat center",backgroundSize:"16px 16px",opacity:.6}});b("#yith-wcwl-form").load(yith_wcwl_l10n.ajax_url+" #yith-wcwl-form",d,function(){"undefined"!=typeof b.fn.unblock&&c.stop(!0).css("opacity","1").unblock();l();b("body").trigger("removed_from_wishlist")})}function w(a,c){var d=a.data("product-id"),e=b(document).find(".cart.wishlist_table"),f=e.data("pagination"),g=e.data("per-page"),n=e.data("id"),h=e.data("token"),d={action:yith_wcwl_l10n.actions.reload_wishlist_and_adding_elem_action,pagination:f,per_page:g,wishlist_id:n,wishlist_token:h,add_to_wishlist:d,product_type:a.data("product-type")};q()?b.ajax({type:"POST",url:yith_wcwl_l10n.ajax_url,data:d,dataType:"html",beforeSend:function(){"undefined"!=typeof b.fn.block&&e.fadeTo("400","0.6").block({message:null,overlayCSS:{background:"transparent url("+yith_wcwl_l10n.ajax_loader_url+") no-repeat center",backgroundSize:"16px 16px",opacity:.6}})},success:function(a){a=b(a).find("#yith-wcwl-form");c.replaceWith(a);l()}}):alert(yith_wcwl_l10n.labels.cookie_disabled)}function x(a){var c=a.parents(".cart.wishlist_table"),d=c.data("token"),e=c.data("id"),f=a.parents("[data-row-id]").data("row-id");a=a.val();var g=c.data("pagination"),h=c.data("per-page"),k=c.data("page"),d={action:yith_wcwl_l10n.actions.move_to_another_wishlist_action,wishlist_token:d,wishlist_id:e,destination_wishlist_token:a,item_id:f,pagination:g,per_page:h,current_page:k};""!=a&&("undefined"!=typeof b.fn.block&&c.fadeTo("400","0.6").block({message:null,overlayCSS:{background:"transparent url("+yith_wcwl_l10n.ajax_loader_url+") no-repeat center",backgroundSize:"16px 16px",opacity:.6}}),b("#yith-wcwl-form").load(yith_wcwl_l10n.ajax_url+" #yith-wcwl-form",d,function(){"undefined"!=typeof b.fn.unblock&&c.stop(!0).css("opacity","1").unblock();l();b("body").trigger("moved_to_another_wishlist")}))}function r(a){var c=b(this);a.preventDefault();c.parents(".wishlist-title").next().show();c.parents(".wishlist-title").hide()}function y(a){var c=b(this);a.preventDefault();c.parents(".hidden-title-form").hide();c.parents(".hidden-title-form").prev().show()}function q(){if(navigator.cookieEnabled)return!0;document.cookie="cookietest=1";var a=-1!=document.cookie.indexOf("cookietest=");document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";return a}function z(){if(0!=b(".yith-wcwl-add-to-wishlist").length&&0==b("#yith-wcwl-popup-message").length){var a=b("<div>").attr("id","yith-wcwl-message"),a=b("<div>").attr("id","yith-wcwl-popup-message").html(a).hide();b("body").prepend(a)}}function k(){h.on("change",function(){var a="",c=b(this).parents(".cart.wishlist_table"),d=c.data("id"),c=c.data("token"),e=document.URL;h.filter(":checked").each(function(){var c=b(this);a+=0!=a.length?",":"";a+=c.parents("[data-row-id]").data("row-id")});e=p(e,"wishlist_products_to_add_to_cart",a);e=p(e,"wishlist_token",c);e=p(e,"wishlist_id",d);b("#custom_add_to_cart").attr("href",e)})}function m(){"undefined"!=typeof b.prettyPhoto&&b('a[data-rel^="prettyPhoto[add_to_wishlist_"]').add('a[data-rel="prettyPhoto[ask_an_estimate]"]').unbind("click").prettyPhoto({hook:"data-rel",social_tools:!1,theme:"pp_woocommerce",horizontal_padding:20,opacity:.8,deeplinking:!1})}function p(a,b,d){d=b+"="+d;a=a.replace(new RegExp("(&|\\?)"+b+"=[^&]*"),"$1"+d);-1<a.indexOf(b+"=")||(a=-1<a.indexOf("?")?a+("&"+d):a+("?"+d));return a}var A="undefined"!==typeof wc_add_to_cart_params&&null!==wc_add_to_cart_params?wc_add_to_cart_params.cart_redirect_after_add:"",h=b('.wishlist_table tbody input[type="checkbox"]:not(:disabled)');b(document).on("yith_wcwl_init",function(){var a=b(this),c=b('.wishlist_table tbody input[type="checkbox"]:not(:disabled)');a.on("click",".add_to_wishlist",function(a){var c=b(this);a.preventDefault();u(c);return!1});a.on("click",".remove_from_wishlist",function(a){var c=b(this);a.preventDefault();v(c);return!1});a.on("adding_to_cart","body",function(a,b,c){"undefined"!=typeof b&&"undefined"!=typeof c&&0!=b.closest(".wishlist_table").length&&(c.remove_from_wishlist_after_add_to_cart=b.closest("[data-row-id]").data("row-id"),c.wishlist_id=b.closest(".wishlist_table").data("id"),wc_add_to_cart_params.cart_redirect_after_add=yith_wcwl_l10n.redirect_to_cart)});a.on("added_to_cart","body",function(a){wc_add_to_cart_params.cart_redirect_after_add=A;a=b(".wishlist_table");a.find(".added").removeClass("added");a.find(".added_to_cart").remove()});a.on("added_to_cart","body",t);a.on("cart_page_refreshed","body",l);a.on("click",".show-title-form",r);a.on("click",".wishlist-title-with-form h2",r);a.on("click",".hide-title-form",y);a.on("change",".change-wishlist",function(a){a=b(this);x(a);return!1});a.on("change",".yith-wcwl-popup-content .wishlist-select",function(a){a=b(this);"new"==a.val()?a.parents(".yith-wcwl-first-row").next(".yith-wcwl-second-row").css("display","table-row"):a.parents(".yith-wcwl-first-row").next(".yith-wcwl-second-row").hide()});a.on("change","#bulk_add_to_cart",function(){b(this).is(":checked")?c.attr("checked","checked").change():c.removeAttr("checked").change()});a.on("click","#custom_add_to_cart",function(a){var d=b(this),f=d.parents(".cart.wishlist_table");yith_wcwl_l10n.ajax_add_to_cart_enabled&&(a.preventDefault(),"undefined"!=typeof b.fn.block&&f.fadeTo("400","0.6").block({message:null,overlayCSS:{background:"transparent url("+yith_wcwl_l10n.ajax_loader_url+") no-repeat center",backgroundSize:"16px 16px",opacity:.6}}),b("#yith-wcwl-form").load(yith_wcwl_l10n.ajax_url+d.attr("href")+" #yith-wcwl-form",{action:yith_wcwl_l10n.actions.bulk_add_to_cart_action},function(){"undefined"!=typeof b.fn.unblock&&f.stop(!0).css("opacity","1").unblock();c.off("change");c=b('.wishlist_table tbody input[type="checkbox"]');"undefined"!=typeof b.fn.selectBox&&b("select.selectBox").selectBox();k();m()}))});a.on("click",".yith-wfbt-add-wishlist",function(a){a.preventDefault();a=b(this);var c=b("#yith-wcwl-form");b("html, body").animate({scrollTop:c.offset().top},500);w(a,c)});z();k();m()}).trigger("yith_wcwl_init");"undefined"!=typeof b.fn.selectBox&&b("select.selectBox").selectBox()});
;/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
;/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return u.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n=b&&b.split("/"),o=s.map,p=o&&o["*"]||{};if(a&&"."===a.charAt(0))if(b){for(a=a.split("/"),g=a.length-1,s.nodeIdCompat&&w.test(a[g])&&(a[g]=a[g].replace(w,"")),a=n.slice(0,n.length-1).concat(a),k=0;k<a.length;k+=1)if(m=a[k],"."===m)a.splice(k,1),k-=1;else if(".."===m){if(1===k&&(".."===a[2]||".."===a[0]))break;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}else 0===a.indexOf("./")&&(a=a.substring(2));if((n||p)&&o){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),n)for(l=n.length;l>0;l-=1)if(e=o[n.slice(0,l).join("/")],e&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&p&&p[d]&&(i=p[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=v.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),n.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){q[a]=b}}function j(a){if(e(r,a)){var c=r[a];delete r[a],t[a]=!0,m.apply(b,c)}if(!e(q,a)&&!e(t,a))throw new Error("No "+a);return q[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return function(){return s&&s.config&&s.config[a]||{}}}var m,n,o,p,q={},r={},s={},t={},u=Object.prototype.hasOwnProperty,v=[].slice,w=/\.js$/;o=function(a,b){var c,d=k(a),e=d[0];return a=d[1],e&&(e=f(e,b),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(b)):f(a,b):(a=f(a,b),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},p={require:function(a){return g(a)},exports:function(a){var b=q[a];return"undefined"!=typeof b?b:q[a]={}},module:function(a){return{id:a,uri:"",exports:q[a],config:l(a)}}},m=function(a,c,d,f){var h,k,l,m,n,s,u=[],v=typeof d;if(f=f||a,"undefined"===v||"function"===v){for(c=!c.length&&d.length?["require","exports","module"]:c,n=0;n<c.length;n+=1)if(m=o(c[n],f),k=m.f,"require"===k)u[n]=p.require(a);else if("exports"===k)u[n]=p.exports(a),s=!0;else if("module"===k)h=u[n]=p.module(a);else if(e(q,k)||e(r,k)||e(t,k))u[n]=j(k);else{if(!m.p)throw new Error(a+" missing "+k);m.p.load(m.n,g(f,!0),i(k),{}),u[n]=q[k]}l=d?d.apply(q[a],u):void 0,a&&(h&&h.exports!==b&&h.exports!==q[a]?q[a]=h.exports:l===b&&s||(q[a]=l))}else a&&(q[a]=d)},a=c=n=function(a,c,d,e,f){if("string"==typeof a)return p[a]?p[a](c):j(o(a,c).f);if(!a.splice){if(s=a,s.deps&&n(s.deps,s.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?m(b,a,c,d):setTimeout(function(){m(b,a,c,d)},4),n},n.config=function(a){return n(a)},a._defined=q,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(q,a)||e(r,a)||(r[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){var e=b[d];"function"==typeof e&&"constructor"!==d&&c.push(d)}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){var a=Array.prototype.unshift;return a.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};return d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;d>c;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;a>c;c++){var d=Math.floor(36*Math.random());b+=d.toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return e!==f||"hidden"!==f&&"visible"!==f?"scroll"===e||"scroll"===f?!0:d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth:!1},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){var c=b.find(".select2-results");c.append(a)},c.prototype.sort=function(a){var b=this.options.get("sorter");return b(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var b=this;this.data.current(function(c){var d=a.map(c,function(a){return a.id.toString()}),e=b.$results.find(".select2-results__option[aria-selected]");e.each(function(){var b=a(this),c=a.data(this,"data"),e=""+c.id;null!=c.element&&c.element.selected||null==c.element&&a.inArray(e,d)>-1?b.attr("aria-selected","true"):b.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(b){var c=document.createElement("li");c.className="select2-results__option";var d={role:"treeitem","aria-selected":"false"};b.disabled&&(delete d["aria-selected"],d["aria-disabled"]="true"),null==b.id&&delete d["aria-selected"],null!=b._resultId&&(c.id=b._resultId),b.title&&(c.title=b.title),b.children&&(d.role="group",d["aria-label"]=b.text,delete d["aria-selected"]);for(var e in d){var f=d[e];c.setAttribute(e,f)}if(b.children){var g=a(c),h=document.createElement("strong");h.className="select2-results__group";a(h);this.template(b,h);for(var i=[],j=0;j<b.children.length;j++){var k=b.children[j],l=this.option(k);i.push(l)}var m=a("<ul></ul>",{"class":"select2-results__options select2-results__options--nested"});m.append(i),g.append(h),g.append(m)}else this.template(b,c);return a.data(c,"data",b),c},c.prototype.bind=function(b,c){var d=this,e=b.id+"-results";this.$results.attr("id",e),b.on("results:all",function(a){d.clear(),d.append(a.data),b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("results:append",function(a){d.append(a.data),b.isOpen()&&d.setClasses()}),b.on("query",function(a){d.hideMessages(),d.showLoading(a)}),b.on("select",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("unselect",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("open",function(){d.$results.attr("aria-expanded","true"),d.$results.attr("aria-hidden","false"),d.setClasses(),d.ensureHighlightVisible()}),b.on("close",function(){d.$results.attr("aria-expanded","false"),d.$results.attr("aria-hidden","true"),d.$results.removeAttr("aria-activedescendant")}),b.on("results:toggle",function(){var a=d.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),b.on("results:select",function(){var a=d.getHighlightedResults();if(0!==a.length){var b=a.data("data");"true"==a.attr("aria-selected")?d.trigger("close",{}):d.trigger("select",{data:b})}}),b.on("results:previous",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var e=c-1;0===a.length&&(e=0);var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top,h=f.offset().top,i=d.$results.scrollTop()+(h-g);0===e?d.$results.scrollTop(0):0>h-g&&d.$results.scrollTop(i)}}),b.on("results:next",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a),e=c+1;if(!(e>=b.length)){var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top+d.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=d.$results.scrollTop()+h-g;0===e?d.$results.scrollTop(0):h>g&&d.$results.scrollTop(i)}}),b.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),b.on("results:message",function(a){d.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=d.$results.scrollTop(),c=d.$results.get(0).scrollHeight-b+a.deltaY,e=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=d.$results.height();e?(d.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(d.$results.scrollTop(d.$results.get(0).scrollHeight-d.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(b){var c=a(this),e=c.data("data");return"true"===c.attr("aria-selected")?void(d.options.get("multiple")?d.trigger("unselect",{originalEvent:b,data:e}):d.trigger("close",{})):void d.trigger("select",{originalEvent:b,data:e})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(b){var c=a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"),d.trigger("results:focus",{data:c,element:a(this)})})},c.prototype.getHighlightedResults=function(){var a=this.$results.find(".select2-results__option--highlighted");return a},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),2>=c?this.$results.scrollTop(0):(g>this.$results.outerHeight()||0>g)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){var a={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};return a}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var b=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),b.attr("title",this.$element.attr("title")),b.attr("tabindex",this._tabindex),this.$selection=b,b},d.prototype.bind=function(a,b){var d=this,e=(a.id+"-container",a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(b){a(document.body).on("mousedown.select2."+b.id,function(b){var c=a(b.target),d=c.closest(".select2"),e=a(".select2.select2-container--open");e.each(function(){var b=a(this);if(this!=d[0]){var c=b.data("element");c.select2("close")}})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){var c=b.find(".selection");c.append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()}),a.on("selection:update",function(a){c.update(a.data)})},e.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},e.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.prop("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,c){var e=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){e.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!e.options.get("disabled")){var c=a(this),d=c.parent(),f=d.data("data");e.trigger("unselect",{originalEvent:b,data:f})}})},d.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},d.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},d.prototype.selectionContainer=function(){var b=a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');return b},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.prop("title",e.title||e.text),f.data("data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id,d=b.length>1;if(d||c)return a.call(this,b);this.clear();var e=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(e)},b}),b.define("select2/selection/allowClear",["jquery","../keys"],function(a,b){function c(){}return c.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},c.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var c=this.$selection.find(".select2-selection__clear");if(0!==c.length){b.stopPropagation();for(var d=c.data("data"),e=0;e<d.length;e++){var f={data:d[e]};if(this.trigger("unselect",f),f.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle",{})}}},c.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||(c.which==b.DELETE||c.which==b.BACKSPACE)&&this._handleClear(c)},c.prototype.update=function(b,c){if(b.call(this,c),!(this.$selection.find(".select2-selection__placeholder").length>0||0===c.length)){var d=a('<span class="select2-selection__clear">&times;</span>');d.data("data",c),this.$selection.find(".select2-selection__rendered").prepend(d)}},c}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,b,d){var e=this;a.call(this,b,d),b.on("open",function(){e.$search.trigger("focus")}),b.on("close",function(){e.$search.val(""),e.$search.removeAttr("aria-activedescendant"),e.$search.trigger("focus")}),b.on("enable",function(){e.$search.prop("disabled",!1),e._transferTabIndex()}),b.on("disable",function(){e.$search.prop("disabled",!0)}),b.on("focus",function(a){e.$search.trigger("focus")}),b.on("results:focus",function(a){e.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){e.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){e._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){a.stopPropagation(),e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented();var b=a.which;if(b===c.BACKSPACE&&""===e.$search.val()){var d=e.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var f=d.data("data");e.searchRemoveChoice(f),a.preventDefault()}}});var f=document.documentMode,g=f&&11>=f;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){return g?void e.$selection.off("input.search input.searchcheck"):void e.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(g&&"input"===a.type)return void e.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&e.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{var b=this.$search.val().length+1;a=.75*b+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting"],g=["opening","closing","selecting","unselecting"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){var a={"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"};return a}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),d+=null!=c.id?"-"+c.id.toString():"-"+a.generateChars(4)},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");
if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple"))return a.selected=!1,c(a.element).is("option")?(a.element.selected=!1,void this.$element.trigger("change")):void this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){c.removeData(this,"data")})},d.prototype.query=function(a,b){var d=[],e=this,f=this.$element.children();f.each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var b;a.children?(b=document.createElement("optgroup"),b.label=a.text):(b=document.createElement("option"),void 0!==b.textContent?b.textContent=a.text:b.innerText=a.text),a.id&&(b.value=a.id),a.disabled&&(b.disabled=!0),a.selected&&(b.selected=!0),a.title&&(b.title=a.title);var d=c(b),e=this._normalizeItem(a);return e.element=b,c.data(b,"data",e),d},d.prototype.item=function(a){var b={};if(b=c.data(a[0],"data"),null!=b)return b;if(a.is("option"))b={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){b={text:a.prop("label"),children:[],title:a.prop("title")};for(var d=a.children("option"),e=[],f=0;f<d.length;f++){var g=c(d[f]),h=this.item(g);e.push(h)}b.children=e}return b=this._normalizeItem(b),b.element=a[0],c.data(a[0],"data",b),b},d.prototype._normalizeItem=function(a){c.isPlainObject(a)||(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){var c=this.options.get("matcher");return c(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){d.status&&"0"===d.status||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0),k=i.text===b.term;if(k||j)return f?!1:(a.data=g,void c(a))}if(f)return!0;var l=e.createTag(b);if(null!=l){var m=e.option(l);m.attr("data-select2-tag",!0),e.addOptions([m]),e.insertTag(g,l)}a.results=g,c(a)}var e=this;return this._removeOldTags(),null==b.term||null!=b.page?void a.call(this,b,c):void a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){var c=(this._lastTag,this.$element.find("option[data-select2-tag]"));c.each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b),d=g.$element.find("option").filter(function(){return a(this).val()===c.id});if(!d.length){var e=g.option(c);e.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([e])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",b.term.length<this.minimumInputLength?void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength?void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;return d.maximumSelectionLength>0&&f>=d.maximumSelectionLength?void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}}):void a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val("")}),c.on("focus",function(){c.isOpen()&&e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){var b=e.showSearch(a);b?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){var c=e.$results.offset().top+e.$results.outerHeight(!1),d=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1);c+50>=d&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){a(this).data("select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(b){var c=a(this).data("select2-scroll-position");a(this).scrollTop(c.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id,h=this.$container.parents().filter(b.hasScroll);h.off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return a(c.data.results)<this.minimumResultsForSearch?!1:b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},a.prototype._handleSelectOnClose=function(a,b){if(b&&null!=b.originalSelect2Event){var c=b.originalSelect2Event;if("select"===c._type||"unselect"===c._type)return}var d=this.getHighlightedResults();if(!(d.length<1)){var e=d.data("data");null!=e.element&&e.element.selected||null==e.element&&e.selected||this.trigger("select",{data:e})}},a}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){var b=a.minimum-a.input.length,c="Please enter "+b+" or more characters";return c},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),(null!=l.tokenSeparators||null!=l.tokenizer)&&(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(O){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(P){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var Q=k.loadPath(this.defaults.amdLanguageBase+"en"),R=new k(l.language);R.extend(Q),l.translations=R}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){var h=e.children[g],i=c(d,h);null==i&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var j=b(e.text).toUpperCase(),k=b(d.term).toUpperCase();return j.indexOf(k)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(this.defaults,f)};var E=new D;return E}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),a.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),a.data("data",a.data("select2Tags")),a.data("tags",!0)),a.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",a.data("ajaxUrl")),a.data("ajax--url",a.data("ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,a.data()):a.data();var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,c){null!=a.data("select2")&&a.data("select2").destroy(),this.$element=a,this.id=this._generateId(a),c=c||{},this.options=new b(c,a),e.__super__.constructor.call(this);var d=a.attr("tabindex")||0;a.data("old-tabindex",d),a.attr("tabindex","-1");var f=this.options.get("dataAdapter");this.dataAdapter=new f(a,this.options);var g=this.render();this._placeContainer(g);var h=this.options.get("selectionAdapter");this.selection=new h(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,g);var i=this.options.get("dropdownAdapter");this.dropdown=new i(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,g);var j=this.options.get("resultsAdapter");this.results=new j(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var k=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){k.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return 0>=e?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;i>h;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),(null==a||0===a.length)&&(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null;
},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),b.data("element",this.$element),b},e}),b.define("select2/compat/utils",["jquery"],function(a){function b(b,c,d){var e,f,g=[];e=a.trim(b.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each(function(){0===this.indexOf("select2-")&&g.push(this)})),e=a.trim(c.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each(function(){0!==this.indexOf("select2-")&&(f=d(this),null!=f&&g.push(f))})),b.attr("class",g.join(" "))}return{syncCssClasses:b}}),b.define("select2/compat/containerCss",["jquery","./utils"],function(a,b){function c(a){return null}function d(){}return d.prototype.render=function(d){var e=d.call(this),f=this.options.get("containerCssClass")||"";a.isFunction(f)&&(f=f(this.$element));var g=this.options.get("adaptContainerCssClass");if(g=g||c,-1!==f.indexOf(":all:")){f=f.replace(":all:","");var h=g;g=function(a){var b=h(a);return null!=b?b+" "+a:a}}var i=this.options.get("containerCss")||{};return a.isFunction(i)&&(i=i(this.$element)),b.syncCssClasses(e,this.$element,g),e.css(i),e.addClass(f),e},d}),b.define("select2/compat/dropdownCss",["jquery","./utils"],function(a,b){function c(a){return null}function d(){}return d.prototype.render=function(d){var e=d.call(this),f=this.options.get("dropdownCssClass")||"";a.isFunction(f)&&(f=f(this.$element));var g=this.options.get("adaptDropdownCssClass");if(g=g||c,-1!==f.indexOf(":all:")){f=f.replace(":all:","");var h=g;g=function(a){var b=h(a);return null!=b?b+" "+a:a}}var i=this.options.get("dropdownCss")||{};return a.isFunction(i)&&(i=i(this.$element)),b.syncCssClasses(e,this.$element,g),e.css(i),e.addClass(f),e},d}),b.define("select2/compat/initSelection",["jquery"],function(a){function b(a,b,c){c.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"),this.initSelection=c.get("initSelection"),this._isInitialized=!1,a.call(this,b,c)}return b.prototype.current=function(b,c){var d=this;return this._isInitialized?void b.call(this,c):void this.initSelection.call(null,this.$element,function(b){d._isInitialized=!0,a.isArray(b)||(b=[b]),c(b)})},b}),b.define("select2/compat/inputData",["jquery"],function(a){function b(a,b,c){this._currentData=[],this._valueSeparator=c.get("valueSeparator")||",","hidden"===b.prop("type")&&c.get("debug")&&console&&console.warn&&console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."),a.call(this,b,c)}return b.prototype.current=function(b,c){function d(b,c){var e=[];return b.selected||-1!==a.inArray(b.id,c)?(b.selected=!0,e.push(b)):b.selected=!1,b.children&&e.push.apply(e,d(b.children,c)),e}for(var e=[],f=0;f<this._currentData.length;f++){var g=this._currentData[f];e.push.apply(e,d(g,this.$element.val().split(this._valueSeparator)))}c(e)},b.prototype.select=function(b,c){if(this.options.get("multiple")){var d=this.$element.val();d+=this._valueSeparator+c.id,this.$element.val(d),this.$element.trigger("change")}else this.current(function(b){a.map(b,function(a){a.selected=!1})}),this.$element.val(c.id),this.$element.trigger("change")},b.prototype.unselect=function(a,b){var c=this;b.selected=!1,this.current(function(a){for(var d=[],e=0;e<a.length;e++){var f=a[e];b.id!=f.id&&d.push(f.id)}c.$element.val(d.join(c._valueSeparator)),c.$element.trigger("change")})},b.prototype.query=function(a,b,c){for(var d=[],e=0;e<this._currentData.length;e++){var f=this._currentData[e],g=this.matches(b,f);null!==g&&d.push(g)}c({results:d})},b.prototype.addOptions=function(b,c){var d=a.map(c,function(b){return a.data(b[0],"data")});this._currentData.push.apply(this._currentData,d)},b}),b.define("select2/compat/matcher",["jquery"],function(a){function b(b){function c(c,d){var e=a.extend(!0,{},d);if(null==c.term||""===a.trim(c.term))return e;if(d.children){for(var f=d.children.length-1;f>=0;f--){var g=d.children[f],h=b(c.term,g.text,g);h||e.children.splice(f,1)}if(e.children.length>0)return e}return b(c.term,d.text,d)?e:null}return c}return b}),b.define("select2/compat/query",[],function(){function a(a,b,c){c.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."),a.call(this,b,c)}return a.prototype.query=function(a,b,c){b.callback=c;var d=this.options.get("query");d.call(null,b)},a}),b.define("select2/dropdown/attachContainer",[],function(){function a(a,b,c){a.call(this,b,c)}return a.prototype.position=function(a,b,c){var d=c.find(".dropdown-wrapper");d.append(b),b.addClass("select2-dropdown--below"),c.addClass("select2-container--below")},a}),b.define("select2/dropdown/stopPropagation",[],function(){function a(){}return a.prototype.bind=function(a,b,c){a.call(this,b,c);var d=["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"];this.$dropdown.on(d.join(" "),function(a){a.stopPropagation()})},a}),b.define("select2/selection/stopPropagation",[],function(){function a(){}return a.prototype.bind=function(a,b,c){a.call(this,b,c);var d=["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"];this.$selection.on(d.join(" "),function(a){a.stopPropagation()})},a}),function(c){"function"==typeof b.define&&b.define.amd?b.define("jquery-mousewheel",["jquery"],c):"object"==typeof exports?module.exports=c:c(a)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(a,b,c,d){if(null==a.fn.select2){var e=["open","close","destroy"];a.fn.select2=function(b){if(b=b||{},"object"==typeof b)return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,f=Array.prototype.slice.call(arguments,1);return this.each(function(){var c=a(this).data("select2");null==c&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=c[b].apply(c,f)}),a.inArray(b,e)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});
;/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/
(function($){"use strict";$.fn.fitVids=function(options){var settings={customSelector:null,ignore:null,};if(!document.getElementById('fit-vids-style')){var head=document.head||document.getElementsByTagName('head')[0];var css='.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';var div=document.createElement('div');div.innerHTML='<p>x</p><style id="fit-vids-style">'+css+'</style>';head.appendChild(div.childNodes[1]);}
if(options){$.extend(settings,options);}
return this.each(function(){var selectors=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];if(settings.customSelector){selectors.push(settings.customSelector);}
var ignoreList='.fitvidsignore';if(settings.ignore){ignoreList=ignoreList+', '+settings.ignore;}
var $allVideos=$(this).find(selectors.join(','));$allVideos=$allVideos.not("object object");$allVideos=$allVideos.not(ignoreList);$allVideos.each(function(){var $this=$(this);if($this.parents(ignoreList).length>0){return;}
if(this.tagName.toLowerCase()==='embed'&&$this.parent('object').length||$this.parent('.fluid-width-video-wrapper').length){return;}
if((!$this.css('height')&&!$this.css('width'))&&(isNaN($this.attr('height'))||isNaN($this.attr('width'))))
{$this.attr('height',9);$this.attr('width',16);}
var height=(this.tagName.toLowerCase()==='object'||($this.attr('height')&&!isNaN(parseInt($this.attr('height'),10))))?parseInt($this.attr('height'),10):$this.height(),width=!isNaN(parseInt($this.attr('width'),10))?parseInt($this.attr('width'),10):$this.width(),aspectRatio=height/width;if(!$this.attr('id')){var videoID='fitvid'+Math.floor(Math.random()*999999);$this.attr('id',videoID);}
$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top',(aspectRatio*100)+"%");$this.removeAttr('height').removeAttr('width');});});};})(window.jQuery||window.Zepto);
;/*
 *	jQuery OwlCarousel v1.31
 *
 *	Copyright (c) 2013 Bartosz Wojciechowski
 *	http://www.owlgraphic.com/owlcarousel/
 *
 *	Licensed under MIT
 *
 */

if ( typeof Object.create !== "function" ) {
    Object.create = function( obj ) {
        function F() {};
        F.prototype = obj;
        return new F();
    };
}
(function( $, window, document, undefined ) {

    var Carousel = {
        init :function(options, el){
            var base = this;

            base.$elem = $(el);

            // options passed via js override options passed via data attributes
            base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);

            base.userOptions = options;
            base.loadContent();
        },

        loadContent : function(){
            var base = this;

            if (typeof base.options.beforeInit === "function") {
                base.options.beforeInit.apply(this,[base.$elem]);
            }

            if (typeof base.options.jsonPath === "string") {
                var url = base.options.jsonPath;

                function getData(data) {
                    if (typeof base.options.jsonSuccess === "function") {
                        base.options.jsonSuccess.apply(this,[data]);
                    } else {
                        var content = "";
                        for(var i in data["owl"]){
                            content += data["owl"][i]["item"];
                        }
                        base.$elem.html(content);
                    }
                    base.logIn();
                }
                $.getJSON(url,getData);
            } else {
                base.logIn();
            }
        },

        logIn : function(action){
            var base = this;

            base.$elem.data("owl-originalStyles", base.$elem.attr("style"))
                .data("owl-originalClasses", base.$elem.attr("class"));

            base.$elem.css({opacity: 0});
            base.orignalItems = base.options.items;
            base.checkBrowser();
            base.wrapperWidth = 0;
            base.checkVisible;
            base.setVars();
        },

        setVars : function(){
            var base = this;
            if(base.$elem.children().length === 0){return false;}
            base.baseClass();
            base.eventTypes();
            base.$userItems = base.$elem.children();
            base.itemsAmount = base.$userItems.length;
            base.wrapItems();
            base.$owlItems = base.$elem.find(".owl-item");
            base.$owlWrapper = base.$elem.find(".owl-wrapper");
            base.playDirection = "next";
            base.prevItem = 0;
            base.prevArr = [0];
            base.currentItem = 0;
            base.customEvents();
            base.onStartup();
        },

        onStartup : function(){
            var base = this;
            base.updateItems();
            base.calculateAll();
            base.buildControls();
            base.updateControls();
            base.response();
            base.moveEvents();
            base.stopOnHover();
            base.owlStatus();

            if(base.options.transitionStyle !== false){
                base.transitionTypes(base.options.transitionStyle);
            }
            if(base.options.autoPlay === true){
                base.options.autoPlay = 5000;
            }
            base.play();

            base.$elem.find(".owl-wrapper").css("display","block");

            if(!base.$elem.is(":visible")){
                base.watchVisibility();
            } else {
                base.$elem.css("opacity",1);
            }
            base.onstartup = false;
            base.eachMoveUpdate();
            if (typeof base.options.afterInit === "function") {
                base.options.afterInit.apply(this,[base.$elem]);
            }
        },

        eachMoveUpdate : function(){
            var base = this;

            if(base.options.lazyLoad === true){
                base.lazyLoad();
            }
            if(base.options.autoHeight === true){
                base.autoHeight();
            }
            base.onVisibleItems();

            if (typeof base.options.afterAction === "function") {
                base.options.afterAction.apply(this,[base.$elem]);
            }
        },

        updateVars : function(){
            var base = this;
            if(typeof base.options.beforeUpdate === "function") {
                base.options.beforeUpdate.apply(this,[base.$elem]);
            }
            base.watchVisibility();
            base.updateItems();
            base.calculateAll();
            base.updatePosition();
            base.updateControls();
            base.eachMoveUpdate();
            if(typeof base.options.afterUpdate === "function") {
                base.options.afterUpdate.apply(this,[base.$elem]);
            }
        },

        reload : function(elements){
            var base = this;
            setTimeout(function(){
                base.updateVars();
            },0);
        },

        watchVisibility : function(){
            var base = this;

            if(base.$elem.is(":visible") === false){
                base.$elem.css({opacity: 0});
                clearInterval(base.autoPlayInterval);
                clearInterval(base.checkVisible);
            } else {
                return false;
            }
            base.checkVisible = setInterval(function(){
                if (base.$elem.is(":visible")) {
                    base.reload();
                    base.$elem.animate({opacity: 1},200);
                    clearInterval(base.checkVisible);
                }
            }, 500);
        },

        wrapItems : function(){
            var base = this;
            base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
            base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
            base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
            base.$elem.css("display","block");
        },

        baseClass : function(){
            var base = this;
            var hasBaseClass = base.$elem.hasClass(base.options.baseClass);
            var hasThemeClass = base.$elem.hasClass(base.options.theme);

            if(!hasBaseClass){
                base.$elem.addClass(base.options.baseClass);
            }

            if(!hasThemeClass){
                base.$elem.addClass(base.options.theme);
            }
        },

        updateItems : function(){
            var base = this;

            if(base.options.responsive === false){
                return false;
            }
            if(base.options.singleItem === true){
                base.options.items = base.orignalItems = 1;
                base.options.itemsCustom = false;
                base.options.itemsDesktop = false;
                base.options.itemsDesktopSmall = false;
                base.options.itemsTablet = false;
                base.options.itemsTabletSmall = false;
                base.options.itemsMobile = false;
                return false;
            }

            var width = $(base.options.responsiveBaseWidth).width();

            if(width > (base.options.itemsDesktop[0] || base.orignalItems) ){
                base.options.items = base.orignalItems;
            }

            if(typeof(base.options.itemsCustom) !== 'undefined' && base.options.itemsCustom !== false){
                //Reorder array by screen size
                base.options.itemsCustom.sort(function(a,b){return a[0]-b[0];});
                for(var i in base.options.itemsCustom){
                    if(typeof(base.options.itemsCustom[i]) !== 'undefined' && base.options.itemsCustom[i][0] <= width){
                        base.options.items = base.options.itemsCustom[i][1];
                    }
                }
            } else {

                if(width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false){
                    base.options.items = base.options.itemsDesktop[1];
                }

                if(width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false){
                    base.options.items = base.options.itemsDesktopSmall[1];
                }

                if(width <= base.options.itemsTablet[0]  && base.options.itemsTablet !== false){
                    base.options.items = base.options.itemsTablet[1];
                }

                if(width <= base.options.itemsTabletSmall[0]  && base.options.itemsTabletSmall !== false){
                    base.options.items = base.options.itemsTabletSmall[1];
                }

                if(width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false){
                    base.options.items = base.options.itemsMobile[1];
                }
            }

            //if number of items is less than declared
            if(base.options.items > base.itemsAmount && base.options.itemsScaleUp === true){
                base.options.items = base.itemsAmount;
            }
        },

        response : function(){
            var base = this,
                smallDelay;
            if(base.options.responsive !== true){
                return false;
            }
            var lastWindowWidth = $(window).width();

            base.resizer = function(){
                if($(window).width() !== lastWindowWidth){
                    if(base.options.autoPlay !== false){
                        clearInterval(base.autoPlayInterval);
                    }
                    clearTimeout(smallDelay);
                    smallDelay = setTimeout(function(){
                        lastWindowWidth = $(window).width();
                        base.updateVars();
                    },base.options.responsiveRefreshRate);
                }
            };
            $(window).resize(base.resizer);
        },

        updatePosition : function(){
            var base = this;
            base.jumpTo(base.currentItem);
            if(base.options.autoPlay !== false){
                base.checkAp();
            }
        },

        appendItemsSizes : function(){
            var base = this;

            var roundPages = 0;
            var lastItem = base.itemsAmount - base.options.items;

            base.$owlItems.each(function(index){
                var $this = $(this);
                $this
                    .css({"width": base.itemWidth})
                    .data("owl-item",Number(index));

                if(index % base.options.items === 0 || index === lastItem){
                    if(!(index > lastItem)){
                        roundPages +=1;
                    }
                }
                $this.data("owl-roundPages",roundPages);
            });
        },

        appendWrapperSizes : function(){
            var base = this,
                width = base.$owlItems.length * base.itemWidth,
                cssObj;

            base.options['direction']=="rtl" ? cssObj = {"right":0,direction:"rtl"} : cssObj = {"left":0};
            base.$owlWrapper.css({"width": width});
            base.$owlWrapper.css(cssObj);

            base.appendItemsSizes();
        },

        calculateAll : function(){
            var base = this;
            base.calculateWidth();
            base.appendWrapperSizes();
            base.loops();
            base.max();
        },

        calculateWidth : function(){
            var base = this;
            base.itemWidth = Math.round(base.$elem.width()/base.options.items);
        },

        max : function(){
            var base = this;
            var maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1;
            if(base.options.items > base.itemsAmount){
                base.maximumItem = 0;
                maximum = 0;
                base.maximumPixels = 0;
            } else {
                base.maximumItem = base.itemsAmount - base.options.items;
                base.maximumPixels = maximum;
            }
            return maximum;
        },

        min : function(){
            return 0;
        },

        loops : function(){
            var base = this;

            base.positionsInArray = [0];
            base.pagesInArray = [];
            var prev = 0;
            var elWidth = 0;

            for(var i = 0; i<base.itemsAmount; i++){
                elWidth += base.itemWidth;
                base.positionsInArray.push(-elWidth);

                if(base.options.scrollPerPage === true){
                    var item = $(base.$owlItems[i]);
                    var roundPageNum = item.data("owl-roundPages");
                    if(roundPageNum !== prev){
                        base.pagesInArray[prev] = base.positionsInArray[i];
                        prev = roundPageNum;
                    }
                }
            }
        },

        buildControls : function(){
            var base = this;
            if(base.options.navigation === true || base.options.pagination === true){
                base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
            }
            if(base.options.pagination === true){
                base.buildPagination();
            }
            if(base.options.navigation === true){
                base.buildButtons();
            }
        },

        buildButtons : function(){
            var base = this;
            var buttonsWrapper = $("<div class=\"owl-buttons\"/>");
            base.owlControls.append(buttonsWrapper);

            base.buttonPrev = $("<div/>",{
                "class" : "owl-prev",
                "html" : base.options.navigationText[0] || ""
            });

            base.buttonNext = $("<div/>",{
                "class" : "owl-next",
                "html" : base.options.navigationText[1] || ""
            });

            buttonsWrapper
                .append(base.buttonPrev)
                .append(base.buttonNext);

            buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function(event){
                event.preventDefault();
            });

            buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function(event){
                event.preventDefault();
                if($(this).hasClass("owl-next")){
                    base.next();
                } else{
                    base.prev();
                }
            });
        },

        buildPagination : function(){
            var base = this;

            base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
            base.owlControls.append(base.paginationWrapper);

            base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(event){
                event.preventDefault();
                if(Number($(this).data("owl-page")) !== base.currentItem){
                    base.goTo( Number($(this).data("owl-page")), true);
                }
            });
        },

        updatePagination : function(){
            var base = this;
            if(base.options.pagination === false){
                return false;
            }

            base.paginationWrapper.html("");

            var counter = 0;
            var lastPage = base.itemsAmount - base.itemsAmount % base.options.items;

            for(var i = 0; i<base.itemsAmount; i++){
                if(i % base.options.items === 0){
                    counter +=1;
                    if(lastPage === i){
                        var lastItem = base.itemsAmount - base.options.items;
                    }
                    var paginationButton = $("<div/>",{
                        "class" : "owl-page"
                    });
                    var paginationButtonInner = $("<span></span>",{
                        "text": base.options.paginationNumbers === true ? counter : "",
                        "class": base.options.paginationNumbers === true ? "owl-numbers" : ""
                    });
                    paginationButton.append(paginationButtonInner);

                    paginationButton.data("owl-page",lastPage === i ? lastItem : i);
                    paginationButton.data("owl-roundPages",counter);

                    base.paginationWrapper.append(paginationButton);
                }
            }
            base.checkPagination();
        },
        checkPagination : function(){
            var base = this;
            if(base.options.pagination === false){
                return false;
            }
            base.paginationWrapper.find(".owl-page").each(function(i,v){
                if($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages") ){
                    base.paginationWrapper
                        .find(".owl-page")
                        .removeClass("active");
                    $(this).addClass("active");
                }
            });
        },

        checkNavigation : function(){
            var base = this;

            if(base.options.navigation === false){
                return false;
            }
            if(base.options.rewindNav === false){
                if(base.currentItem === 0 && base.maximumItem === 0){
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if(base.currentItem === 0 && base.maximumItem !== 0){
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.removeClass("disabled");
                } else if (base.currentItem === base.maximumItem){
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if(base.currentItem !== 0 && base.currentItem !== base.maximumItem){
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.removeClass("disabled");
                }
            }
        },

        updateControls : function(){
            var base = this;
            base.updatePagination();
            base.checkNavigation();
            if(base.owlControls){
                if(base.options.items >= base.itemsAmount){
                    base.owlControls.hide();
                } else {
                    base.owlControls.show();
                }
            }
        },

        destroyControls : function(){
            var base = this;
            if(base.owlControls){
                base.owlControls.remove();
            }
        },

        next : function(speed){
            var base = this;

            if(base.isTransition){
                return false;
            }

            base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
            if(base.currentItem > base.maximumItem + (base.options.scrollPerPage == true ? (base.options.items - 1) : 0)){
                if(base.options.rewindNav === true){
                    base.currentItem = 0;
                    speed = "rewind";
                } else {
                    base.currentItem = base.maximumItem;
                    return false;
                }
            }
            base.goTo(base.currentItem,speed);
        },

        prev : function(speed){
            var base = this;

            if(base.isTransition){
                return false;
            }

            if(base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items){
                base.currentItem = 0;
            } else {
                base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
            }
            if(base.currentItem < 0){
                if(base.options.rewindNav === true){
                    base.currentItem = base.maximumItem;
                    speed = "rewind";
                } else {
                    base.currentItem =0;
                    return false;
                }
            }
            base.goTo(base.currentItem,speed);
        },

        goTo : function(position,speed,drag){
            var base = this;

            if(base.isTransition){
                return false;
            }
            if(typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this,[base.$elem]);
            }
            if(position >= base.maximumItem){
                position = base.maximumItem;
            }
            else if( position <= 0 ){
                position = 0;
            }

            base.currentItem = base.owl.currentItem = position;
            if( base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true){
                base.swapSpeed(0);
                if(base.browser.support3d === true){
                    base.transition3d(base.positionsInArray[position]);
                } else {
                    base.css2slide(base.positionsInArray[position],1);
                }
                base.afterGo();
                base.singleItemTransition();

                return false;
            }
            var goToPixel = base.positionsInArray[position];

            if(base.browser.support3d === true){
                base.isCss3Finish = false;

                if(speed === true){
                    base.swapSpeed("paginationSpeed");
                    setTimeout(function() {
                        base.isCss3Finish = true;
                    }, base.options.paginationSpeed);

                } else if(speed === "rewind" ){
                    base.swapSpeed(base.options.rewindSpeed);
                    setTimeout(function() {
                        base.isCss3Finish = true;
                    }, base.options.rewindSpeed);

                } else {
                    base.swapSpeed("slideSpeed");
                    setTimeout(function() {
                        base.isCss3Finish = true;
                    }, base.options.slideSpeed);
                }
                base.transition3d(goToPixel);
            } else {
                if(speed === true){
                    base.css2slide(goToPixel, base.options.paginationSpeed);
                } else if(speed === "rewind" ){
                    base.css2slide(goToPixel, base.options.rewindSpeed);
                } else {
                    base.css2slide(goToPixel, base.options.slideSpeed);
                }
            }
            base.afterGo();
        },

        jumpTo : function(position){
            var base = this;
            if(typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this,[base.$elem]);
            }
            if(position >= base.maximumItem || position === -1){
                position = base.maximumItem;
            }
            else if( position <= 0 ){
                position = 0;
            }
            base.swapSpeed(0);
            if(base.browser.support3d === true){
                base.transition3d(base.positionsInArray[position]);
            } else {
                base.css2slide(base.positionsInArray[position],1);
            }
            base.currentItem = base.owl.currentItem = position;
            base.afterGo();
        },

        afterGo : function(){
            var base = this;

            base.prevArr.push(base.currentItem);
            base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length -2];
            base.prevArr.shift(0);

            if(base.prevItem !== base.currentItem){
                base.checkPagination();
                base.checkNavigation();
                base.eachMoveUpdate();

                if(base.options.autoPlay !== false){
                    base.checkAp();
                }
            }
            if(typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
                base.options.afterMove.apply(this,[base.$elem]);
            }
        },

        stop : function(){
            var base = this;
            base.apStatus = "stop";
            clearInterval(base.autoPlayInterval);
        },

        checkAp : function(){
            var base = this;
            if(base.apStatus !== "stop"){
                base.play();
            }
        },

        play : function(){
            var base = this;
            base.apStatus = "play";
            if(base.options.autoPlay === false){
                return false;
            }
            clearInterval(base.autoPlayInterval);
            base.autoPlayInterval = setInterval(function(){
                base.next(true);
            },base.options.autoPlay);
        },

        swapSpeed : function(action){
            var base = this;
            if(action === "slideSpeed"){
                base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
            } else if(action === "paginationSpeed" ){
                base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
            } else if(typeof action !== "string"){
                base.$owlWrapper.css(base.addCssSpeed(action));
            }
        },

        addCssSpeed : function(speed){
            var base = this;
            return {
                "-webkit-transition": "all "+ speed +"ms ease",
                "-moz-transition": "all "+ speed +"ms ease",
                "-o-transition": "all "+ speed +"ms ease",
                "transition": "all "+ speed +"ms ease"
            };
        },

        removeTransition : function(){
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                "transition": ""
            };
        },

        doTranslate : function(pixels){
            var base = this;
            base.options['direction']=="rtl" ? pixels=-pixels : pixels=pixels ;
            return {
                "-webkit-transform": "translate3d("+pixels+"px, 0px, 0px)",
                "-moz-transform": "translate3d("+pixels+"px, 0px, 0px)",
                "-o-transform": "translate3d("+pixels+"px, 0px, 0px)",
                "-ms-transform": "translate3d("+pixels+"px, 0px, 0px)",
                "transform": "translate3d("+pixels+"px, 0px,0px)"
            };
        },

        transition3d : function(value){
            var base = this;
            base.$owlWrapper.css(base.doTranslate(value));
        },

        css2move : function(value){
            var base = this, cssObj;

            base.options['direction']=="rtl" ? cssObj = {"right":value} : cssObj = {"left":value};
            base.$owlWrapper.css(cssObj);
        },

        css2slide : function(value,speed){
            var base = this, cssObj;
            base.options['direction']=="rtl" ? cssObj = {"right":value} : cssObj = {"left":value};

            base.isCssFinish = false;
            base.$owlWrapper.stop(true,true).animate(cssObj, {
                duration : speed || base.options.slideSpeed ,
                complete : function(){
                    base.isCssFinish = true;
                }
            });
        },

        checkBrowser : function(){
            var base = this;

            //Check 3d support
            var	translate3D = "translate3d(0px, 0px, 0px)",
                tempElem = document.createElement("div");

            tempElem.style.cssText= "  -moz-transform:"    + translate3D +
            "; -ms-transform:"     + translate3D +
            "; -o-transform:"      + translate3D +
            "; -webkit-transform:" + translate3D +
            "; transform:"         + translate3D;
            var	regex = /translate3d\(0px, 0px, 0px\)/g,
                asSupport = tempElem.style.cssText.match(regex),
                support3d = (asSupport !== null && asSupport.length === 1);

            var isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints;

            base.browser = {
                "support3d" : support3d,
                "isTouch" : isTouch
            };
        },

        moveEvents : function(){
            var base = this;
            if(base.options.mouseDrag !== false || base.options.touchDrag !== false){
                base.gestures();
                base.disabledEvents();
            }
        },

        eventTypes : function(){
            var base = this;
            var types = ["s","e","x"];

            base.ev_types = {};

            if(base.options.mouseDrag === true && base.options.touchDrag === true){
                types = [
                    "touchstart.owl mousedown.owl",
                    "touchmove.owl mousemove.owl",
                    "touchend.owl touchcancel.owl mouseup.owl"
                ];
            } else if(base.options.mouseDrag === false && base.options.touchDrag === true){
                types = [
                    "touchstart.owl",
                    "touchmove.owl",
                    "touchend.owl touchcancel.owl"
                ];
            } else if(base.options.mouseDrag === true && base.options.touchDrag === false){
                types = [
                    "mousedown.owl",
                    "mousemove.owl",
                    "mouseup.owl"
                ];
            }

            base.ev_types["start"] = types[0];
            base.ev_types["move"] = types[1];
            base.ev_types["end"] = types[2];
        },

        disabledEvents :  function(){
            var base = this;
            base.$elem.on("dragstart.owl", function(event) { event.preventDefault();});
            base.$elem.on("mousedown.disableTextSelect", function(e) {
                return $(e.target).is('input, textarea, select, option');
            });
        },

        gestures : function(){
            var base = this;

            var locals = {
                offsetX : 0,
                offsetY : 0,
                baseElWidth : 0,
                relativePos : 0,
                position: null,
                minSwipe : null,
                maxSwipe: null,
                sliding : null,
                dargging: null,
                targetElement : null
            };

            base.isCssFinish = true;

            function getTouches(event){
                if(event.touches){
                    return {
                        x : event.touches[0].pageX,
                        y : event.touches[0].pageY
                    };
                } else {
                    if(event.pageX !== undefined){
                        return {
                            x : event.pageX,
                            y : event.pageY
                        };
                    } else {
                        return {
                            x : event.clientX,
                            y : event.clientY
                        };
                    }
                }
            }

            function swapEvents(type){
                if(type === "on"){
                    $(document).on(base.ev_types["move"], dragMove);
                    $(document).on(base.ev_types["end"], dragEnd);
                } else if(type === "off"){
                    $(document).off(base.ev_types["move"]);
                    $(document).off(base.ev_types["end"]);
                }
            }

            function dragStart(event) {
                var event = event.originalEvent || event || window.event;

                if (event.which === 3) {
                    return false;
                }
                if(base.itemsAmount <= base.options.items){
                    return;
                }
                if(base.isCssFinish === false && !base.options.dragBeforeAnimFinish ){
                    return false;
                }
                if(base.isCss3Finish === false && !base.options.dragBeforeAnimFinish ){
                    return false;
                }

                if(base.options.autoPlay !== false){
                    clearInterval(base.autoPlayInterval);
                }

                if(base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")){
                    base.$owlWrapper.addClass("grabbing");
                }

                base.newPosX = 0;
                base.newRelativeX = 0;

                $(this).css(base.removeTransition());
                /*Bilal*/
                var position = $(this).position();

                if(base.options['direction']=="rtl") {
                    positionRight = base.$owlItems.eq(0).width()*base.currentItem;
                    locals.relativePos = positionRight;
                    locals.offsetX = -getTouches(event).x + positionRight;
                }
                else {
                    locals.relativePos = position.left;
                    locals.offsetX = getTouches(event).x - position.left;
                }

                locals.offsetY = getTouches(event).y - position.top;

                swapEvents("on");

                locals.sliding = false;
                locals.targetElement = event.target || event.srcElement;
            }

            function dragMove(event){
                var event = event.originalEvent || event || window.event;

                if(base.options['direction']=="rtl") {
                    base.newPosX = -getTouches(event).x - locals.offsetX;
                    base.newPosY = getTouches(event).y - locals.offsetY;
                    base.newRelativeX = base.newPosX + locals.relativePos;
                }
                else {
                    base.newPosX = getTouches(event).x - locals.offsetX;
                    base.newPosY = getTouches(event).y - locals.offsetY;
                    base.newRelativeX = base.newPosX - locals.relativePos;
                }

                if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
                    locals.dragging = true;
                    base.options.startDragging.apply(base,[base.$elem]);
                }

                if(base.newRelativeX > 8 || base.newRelativeX < -8 && base.browser.isTouch === true){
                    event.preventDefault ? event.preventDefault() : event.returnValue = false;
                    locals.sliding = true;
                }

                if((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false){
                    $(document).off("touchmove.owl");
                }

                var minSwipe = function(){
                    return  base.newRelativeX / 5;
                };
                var maxSwipe = function(){
                    return  base.maximumPixels + base.newRelativeX / 5;
                };

                base.newPosX = Math.max(Math.min( base.newPosX, minSwipe() ), maxSwipe() );
                if(base.browser.support3d === true){
                    base.transition3d(base.newPosX);
                } else {
                    base.css2move(base.newPosX);
                }
            }

            function dragEnd(event){
                var event = event.originalEvent || event || window.event;
                event.target = event.target || event.srcElement;

                locals.dragging = false;

                if(base.browser.isTouch !== true){
                    base.$owlWrapper.removeClass("grabbing");
                }

                if(base.options['direction']=="rtl") {
                    if (base.newRelativeX < 0) { base.dragDirection = base.owl.dragDirection = "right"; }
                    else { base.dragDirection = base.owl.dragDirection = "left"; }
                }
                else {
                    if (base.newRelativeX < 0) { base.dragDirection = base.owl.dragDirection = "left"; }
                    else { base.dragDirection = base.owl.dragDirection = "right"; }
                }

                if(base.newRelativeX !== 0){
                    var newPosition = base.getNewPosition();
                    base.goTo(newPosition,false,"drag");
                    if(locals.targetElement === event.target && base.browser.isTouch !== true){
                        $(event.target).on("click.disable", function(ev){
                            ev.stopImmediatePropagation();
                            ev.stopPropagation();
                            ev.preventDefault();
                            $(event.target).off("click.disable");
                        });
                        var handlers = $._data(event.target, "events")["click"];
                        var owlStopEvent = handlers.pop();
                        handlers.splice(0, 0, owlStopEvent);
                    }
                }
                swapEvents("off");
            }
            base.$elem.on(base.ev_types["start"], ".owl-wrapper", dragStart);
        },

        getNewPosition : function(){
            var base = this,
                newPosition;

            newPosition = base.closestItem();

            if(newPosition>base.maximumItem){
                base.currentItem = base.maximumItem;
                newPosition  = base.maximumItem;
            } else if( base.newPosX >=0 ){
                newPosition = 0;
                base.currentItem = 0;
            }
            return newPosition;
        },
        closestItem : function(){
            var base = this,
                array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
                goal = base.newPosX,
                closest = null;

            $.each(array, function(i,v){
                if( goal - (base.itemWidth/20) > array[i+1] && goal - (base.itemWidth/20)< v && base.moveDirection() === "left") {
                    closest = v;
                    if(base.options.scrollPerPage === true){
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        base.currentItem = i;
                    }
                }
                else if (goal + (base.itemWidth/20) < v && goal + (base.itemWidth/20) > (array[i+1] || array[i]-base.itemWidth) && base.moveDirection() === "right"){
                    if(base.options.scrollPerPage === true){
                        closest = array[i+1] || array[array.length-1];
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        closest = array[i+1];
                        base.currentItem = i+1;
                    }
                }
            });
            return base.currentItem;
        },

        moveDirection : function(){
            var base = this,
                direction;
            if(base.newRelativeX < 0 ){
                direction = "right";
                base.playDirection = "next";
            } else {
                direction = "left";
                base.playDirection = "prev";
            }
            return direction
        },

        customEvents : function(){
            var base = this;
            base.$elem.on("owl.next",function(){
                base.next();
            });
            base.$elem.on("owl.prev",function(){
                base.prev();
            });
            base.$elem.on("owl.play",function(event,speed){
                base.options.autoPlay = speed;
                base.play();
                base.hoverStatus = "play";
            });
            base.$elem.on("owl.stop",function(){
                base.stop();
                base.hoverStatus = "stop";
            });
            base.$elem.on("owl.goTo",function(event,item){
                base.goTo(item);
            });
            base.$elem.on("owl.jumpTo",function(event,item){
                base.jumpTo(item);
            });
        },

        stopOnHover : function(){
            var base = this;
            if(base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false){
                base.$elem.on("mouseover", function(){
                    base.stop();
                });
                base.$elem.on("mouseout", function(){
                    if(base.hoverStatus !== "stop"){
                        base.play();
                    }
                });
            }
        },

        lazyLoad : function(){
            var base = this;

            if(base.options.lazyLoad === false){
                return false;
            }
            for(var i=0; i<base.itemsAmount; i++){
                var $item = $(base.$owlItems[i]);

                if($item.data("owl-loaded") === "loaded"){
                    continue;
                }

                var	itemNumber = $item.data("owl-item"),
                    $lazyImg = $item.find(".lazyOwl"),
                    follow;

                if( typeof $lazyImg.data("src") !== "string"){
                    $item.data("owl-loaded","loaded");
                    continue;
                }
                if($item.data("owl-loaded") === undefined){
                    $lazyImg.hide();
                    $item.addClass("loading").data("owl-loaded","checked");
                }
                if(base.options.lazyFollow === true){
                    follow = itemNumber >= base.currentItem;
                } else {
                    follow = true;
                }
                if(follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length){
                    base.lazyPreload($item,$lazyImg);
                }
            }
        },

        lazyPreload : function($item,$lazyImg){
            var base = this,
                iterations = 0;
            if ($lazyImg.prop("tagName") === "DIV") {
                $lazyImg.css("background-image", "url(" + $lazyImg.data("src")+ ")" );
                var isBackgroundImg=true;
            } else {
                $lazyImg[0].src = $lazyImg.data("src");
            }
            checkLazyImage();

            function checkLazyImage(){
                iterations += 1;
                if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
                    showImage();
                } else if(iterations <= 100){//if image loads in less than 10 seconds
                    setTimeout(checkLazyImage,100);
                } else {
                    showImage();
                }
            }
            function showImage(){
                $item.data("owl-loaded", "loaded").removeClass("loading");
                $lazyImg.removeAttr("data-src");
                base.options.lazyEffect === "fade" ? $lazyImg.fadeIn(400) : $lazyImg.show();
                if(typeof base.options.afterLazyLoad === "function") {
                    base.options.afterLazyLoad.apply(this,[base.$elem]);
                }
            }
        },

        autoHeight : function(){
            var base = this;
            var $currentimg = $(base.$owlItems[base.currentItem]).find("img");

            if($currentimg.get(0) !== undefined ){
                var iterations = 0;
                checkImage();
            } else {
                addHeight();
            }
            function checkImage(){
                iterations += 1;
                if ( base.completeImg($currentimg.get(0)) ) {
                    addHeight();
                } else if(iterations <= 100){ //if image loads in less than 10 seconds
                    setTimeout(checkImage,100);
                } else {
                    base.wrapperOuter.css("height", ""); //Else remove height attribute
                }
            }

            function addHeight(){
                var $currentItem = $(base.$owlItems[base.currentItem]).height();
                base.wrapperOuter.css("height",$currentItem+"px");
                if(!base.wrapperOuter.hasClass("autoHeight")){
                    setTimeout(function(){
                        base.wrapperOuter.addClass("autoHeight");
                    },0);
                }
            }
        },

        completeImg : function(img) {
            if (!img.complete) {
                return false;
            }
            if (typeof img.naturalWidth !== "undefined" && img.naturalWidth == 0) {
                return false;
            }
            return true;
        },

        onVisibleItems : function(){
            var base = this;

            if(base.options.addClassActive === true){
                base.$owlItems.removeClass("active");
            }
            base.visibleItems = [];
            for(var i=base.currentItem; i<base.currentItem + base.options.items; i++){
                base.visibleItems.push(i);

                if(base.options.addClassActive === true){
                    $(base.$owlItems[i]).addClass("active");
                }
            }
            base.owl.visibleItems = base.visibleItems;
        },

        transitionTypes : function(className){
            var base = this;
            //Currently available: "fade","backSlide","goDown","fadeUp"
            base.outClass = "owl-"+className+"-out";
            base.inClass = "owl-"+className+"-in";
        },

        singleItemTransition : function(){
            var base = this;
            base.isTransition = true;

            var outClass = base.outClass,
                inClass = base.inClass,
                $currentItem = base.$owlItems.eq(base.currentItem),
                $prevItem = base.$owlItems.eq(base.prevItem),
                prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
                origin = Math.abs(base.positionsInArray[base.currentItem])+base.itemWidth/2;

            base.$owlWrapper
                .addClass('owl-origin')
                .css({
                    "-webkit-transform-origin" : origin+"px",
                    "-moz-perspective-origin" : origin+"px",
                    "perspective-origin" : origin+"px"
                });
            function transStyles(prevPos,zindex){
                return {
                    "position" : "relative",
                    "left" : prevPos+"px"
                };
            }

            var animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';

            $prevItem
                .css(transStyles(prevPos,10))
                .addClass(outClass)
                .on(animEnd, function() {
                    base.endPrev = true;
                    $prevItem.off(animEnd);
                    base.clearTransStyle($prevItem,outClass);
                });

            $currentItem
                .addClass(inClass)
                .on(animEnd, function() {
                    base.endCurrent = true;
                    $currentItem.off(animEnd);
                    base.clearTransStyle($currentItem,inClass);
                });
        },

        clearTransStyle : function(item,classToRemove){
            var base = this;
            item.css({
                "position" : "",
                "left" : ""
            })
                .removeClass(classToRemove);
            if(base.endPrev && base.endCurrent){
                base.$owlWrapper.removeClass('owl-origin');
                base.endPrev = false;
                base.endCurrent = false;
                base.isTransition = false;
            }
        },

        owlStatus : function(){
            var base = this;
            base.owl = {
                "userOptions"	: base.userOptions,
                "baseElement" 	: base.$elem,
                "userItems"		: base.$userItems,
                "owlItems"		: base.$owlItems,
                "currentItem"	: base.currentItem,
                "prevItem"		: base.prevItem,
                "visibleItems"	: base.visibleItems,
                "isTouch" 		: base.browser.isTouch,
                "browser"		: base.browser,
                "dragDirection" : base.dragDirection
            };
        },

        clearEvents : function(){
            var base = this;
            base.$elem.off(".owl owl mousedown.disableTextSelect");
            $(document).off(".owl owl");
            $(window).off("resize", base.resizer);
        },

        unWrap : function(){
            var base = this;
            if(base.$elem.children().length !== 0){
                base.$owlWrapper.unwrap();
                base.$userItems.unwrap().unwrap();
                if(base.owlControls){
                    base.owlControls.remove();
                }
            }
            base.clearEvents();
            base.$elem
                .attr("style", base.$elem.data("owl-originalStyles") || "")
                .attr("class", base.$elem.data("owl-originalClasses"));
        },

        destroy : function(){
            var base = this;
            base.stop();
            clearInterval(base.checkVisible);
            base.unWrap();
            base.$elem.removeData();
        },

        reinit : function(newOptions){
            var base = this;
            var options = $.extend({}, base.userOptions, newOptions);
            base.unWrap();
            base.init(options,base.$elem);
        },

        addItem : function(htmlString,targetPosition){
            var base = this,
                position;

            if(!htmlString){return false;}

            if(base.$elem.children().length === 0){
                base.$elem.append(htmlString);
                base.setVars();
                return false;
            }
            base.unWrap();
            if(targetPosition === undefined || targetPosition === -1){
                position = -1;
            } else {
                position = targetPosition;
            }
            if(position >= base.$userItems.length || position === -1){
                base.$userItems.eq(-1).after(htmlString);
            } else {
                base.$userItems.eq(position).before(htmlString);
            }

            base.setVars();
        },

        removeItem : function(targetPosition){
            var base = this,
                position;

            if(base.$elem.children().length === 0){return false;}

            if(targetPosition === undefined || targetPosition === -1){
                position = -1;
            } else {
                position = targetPosition;
            }

            base.unWrap();
            base.$userItems.eq(position).remove();
            base.setVars();
        }

    };

    $.fn.owlCarousel = function( options ){
        return this.each(function() {
            if($(this).data("owl-init") === true){
                return false;
            }
            $(this).data("owl-init", true);
            var carousel = Object.create( Carousel );
            carousel.init( options, this );
            $.data( this, "owlCarousel", carousel );
        });
    };

    $.fn.owlCarousel.options = {
        direction:'ltr',

        items : 5,
        itemsCustom : false,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,3],
        itemsTablet : [768,2],
        itemsTabletSmall : false,
        itemsMobile : [479,1],
        singleItem : false,
        itemsScaleUp : false,

        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        autoPlay : false,
        stopOnHover : false,

        navigation : false,
        navigationText : ["prev","next"],
        rewindNav : true,
        scrollPerPage : false,

        pagination : true,
        paginationNumbers : false,

        responsive : true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth	: window,


        baseClass : "owl-carousel",
        theme : "owl-theme",

        lazyLoad : false,
        lazyFollow : true,
        lazyEffect : "fade",

        autoHeight : false,

        jsonPath : false,
        jsonSuccess : false,

        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,

        addClassActive : false,
        transitionStyle : false,

        beforeUpdate : false,
        afterUpdate : false,
        beforeInit : false,
        afterInit : false,
        beforeMove : false,
        afterMove : false,
        afterAction : false,
        startDragging : false,
        afterLazyLoad: false

    };
})( jQuery, window, document );

;;(function($){$.fn.rating=function(callback){callback=callback||function(){};this.each(function(i,v){$(v).data('rating',{callback:callback}).bind('init.rating',$.fn.rating.init).bind('set.rating',$.fn.rating.set).bind('hover.rating',$.fn.rating.hover).trigger('init.rating');});};$.extend($.fn.rating,{init:function(e){var el=$(this),list='',isChecked=null,childs=el.children(),i=0,l=childs.length;for(;i<l;i++){list=list+'<a class="star" title="'+$(childs[i]).val()+'" />';if($(childs[i]).is(':checked')){isChecked=$(childs[i]).val();};};childs.hide();el.append('<div class="stars">'+list+'</div>').trigger('set.rating',isChecked);$('a',el).bind('click',$.fn.rating.click);el.trigger('hover.rating');},set:function(e,val){var el=$(this),item=$('a',el),input=undefined;if(val){item.removeClass('fullStar');input=item.filter(function(i){if($(this).attr('title')==val)
return $(this);else
return false;});input.addClass('fullStar').prevAll().addClass('fullStar');}
return;},hover:function(e){var el=$(this),stars=$('a',el);stars.bind('mouseenter',function(e){$(this).addClass('tmp_fs').prevAll().addClass('tmp_fs');$(this).nextAll().addClass('tmp_es');});stars.bind('mouseleave',function(e){$(this).removeClass('tmp_fs').prevAll().removeClass('tmp_fs');$(this).nextAll().removeClass('tmp_es');});},click:function(e){e.preventDefault();var el=$(e.target),container=el.parent().parent(),inputs=container.children('input'),rate=el.attr('title');matchInput=inputs.filter(function(i){if($(this).val()==rate)
return true;else
return false;});matchInput.attr('checked',true).siblings('input').attr('checked',false);container.trigger('set.rating',matchInput.val()).data('rating').callback(rate,e);}});})(jQuery);;(function($){"use strict";window.iwOpenWindow=function(url){window.open(url,'sharer','toolbar=0,status=0,left='+((screen.width/2)-300)+',top='+((screen.height/2)-200)+',width=650,height=380');return false;};function theme_init(){$('.iw-search-cart .search-form').on('click',function(e){$('.header-default .search-form-header,'+' .header-default .iw-header .iw-search-cart button,'+' .wrapper-header-version-3 .header.header-version-3').toggleClass('active');$('.search-form-header input').focus();return false;});if($('.iw-copy-right span').length){var iw_scrollTrigger=$(window).height(),iw_backToTop=function(){var iw_scrollTop=$(window).scrollTop();if(iw_scrollTop>iw_scrollTrigger){$('.iw-copy-right span').addClass('eff');}else{$('.iw-copy-right span').removeClass('eff');}};iw_backToTop();$(window).on('scroll',function(){iw_backToTop();});$('.iw-copy-right span').on('click',function(e){e.preventDefault();$('html,body').animate({scrollTop:0},700);});}}
function sticky_menu(){var eq=Math.ceil($('.header-version-2 .iw-nav-menu > li').length/2)-1;$('.header-version-2 .iw-nav-menu > li:eq("'+eq+'")').after($('.header-version-2 .logo'));var $header=$(".header-sticky"),$clone=$header.before($header.clone().addClass("clone"));$(window).on("scroll",function(){var fromTop=$(document).scrollTop();$('body').toggleClass("down",(fromTop>250));});if($('.header-version-2').hasClass('clone')){$('.header-version-2.header-sticky.clone .logo-wrapper ul').append($('.header-sticky.clone .logo'));}
if($('.page-template-home-page .header-version-3').length>0){$(window).on('scroll',function(){var $windows_height=$(window).height();var $scroll_windows=$(window).scrollTop();if($scroll_windows>($windows_height)){$('.header-version-3.clone, .intravel-destination-search .intravel-destination-search-inner').addClass('visible-header-3');}else{$('.header-version-3.clone').removeClass('visible-header-3');}});}}
function woocommerce_init(){var owl=$(".product-detail .product-essential .owl-carousel");if(owl.length){owl.owlCarousel({direction:$('body').hasClass('rtl')?'rtl':'ltr',items:5,itemsDesktopSmall:[979,5],itemsTablet:[768,4],itemsTabletSmall:false,itemsMobile:[479,3],pagination:false,navigation:true,navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],});}
var buttonHtml='';$('.quickview').on('click',function(e){var el=this;buttonHtml=$(el).html();$(el).html('<i class="quickviewloading fa fa-cog fa-spin"></i>');var effect=$(el).find('input').val();Custombox.open({target:woocommerce_params.ajax_url+'?action=load_product_quick_view&product_id='+el.href.split('#')[1],effect:effect?effect:'fadein',loading:{delay:2000,parent:['sk-wandering-cubes'],childrens:[['sk-cube','sk-cube1'],['sk-cube','sk-cube2']]},complete:function(){$(el).html(buttonHtml);var owl=$(".quickview-box .product-detail .product-essential .owl-carousel");owl.owlCarousel({direction:$('body').hasClass('rtl')?'rtl':'ltr',items:4,itemsDesktopSmall:[979,5],itemsTablet:[768,4],itemsTabletSmall:false,itemsMobile:[479,3],pagination:false,navigation:true,navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],});$(".quickview-body .next").click(function(){owl.trigger('owl.next');});$(".quickview-body .prev").click(function(){owl.trigger('owl.prev');});$(".quickview-body .woocommerce-main-image").click(function(e){e.preventDefault();});$(".quickview-body .owl-carousel .owl-item a").click(function(e){e.preventDefault();if($(".quickview-body .woocommerce-main-image img").length==2){$(".quickview-body .woocommerce-main-image img:first").remove();}
$(".quickview-body .woocommerce-main-image img").fadeOut(function(){$(".quickview-body .woocommerce-main-image img").stop().hide();$(".quickview-body .woocommerce-main-image img:last").fadeIn();});$(".quickview-body .woocommerce-main-image").append('<img class="attachment-shop_single wp-post-image" style="display:none;" src="'+this.href+'" alt="">');})},close:function(){$(el).html(buttonHtml);}});e.preventDefault();});$('.add_to_wishlist').on('click',function(e){if($(this).find('.fa-check').length){e.preventDefault();return;}
$(this).addClass('wishlist-adding');$(this).find('i').removeClass('fa-star').addClass('fa-cog fa-spin');});$('.yith-wcwl-add-to-wishlist').appendTo('.add-to-box');$('.yith-wcwl-add-to-wishlist .link-wishlist').appendTo('.add-to-box form.cart');if($('.variations_form .variations_button').length){$('.yith-wcwl-add-to-wishlist .link-wishlist').appendTo('.variations_form .variations_button');}
$('body').on('added_to_wishlist',function(){$('.wishlist-adding').html('<i class="fa fa-check"></i>');$('.wishlist-adding').removeClass('wishlist-adding');});$('body').on('added_to_cart',function(e,f){$('.added_to_cart.wc-forward').remove();});window.submitProductsLayout=function(layout){$('.product-category-layout').val(layout);$('.woocommerce-ordering').submit();};$("#woo-tab-contents .box-collateral").hide();$("#woo-tab-buttons li:first").attr("class","current");$("#woo-tab-contents .box-collateral:first").show();$('#woo-tab-buttons li a').click(function(e){e.preventDefault();$("#woo-tab-contents .box-collateral").hide();$("#woo-tab-buttons li").attr("class","");$(this).parent().attr("class","current");$($(this).attr('href')).fadeIn();});}
function carousel_init(){$(".owl-carousel").each(function(){var slider=$(this);var defaults={direction:$('body').hasClass('rtl')?'rtl':'ltr'};var config=$.extend({},defaults,slider.data("plugin-options"));slider.owlCarousel(config).addClass("owl-carousel-init");});$('.post-gallery .gallery,.post-text .gallery').each(function(){var galleryOwl=$(this);var classNames=this.className.toString().split(' ');var column=1;$.each(classNames,function(i,className){if(className.indexOf('gallery-columns-')!=-1){column=parseInt(className.replace(/gallery-columns-/,''));}});galleryOwl.owlCarousel({direction:$('body').hasClass('rtl')?'rtl':'ltr',items:column,singleItem:true,navigation:true,pagination:false,navigationText:["<i class=\"fa fa-arrow-left\"></i>","<i class=\"fa fa-arrow-right\"></i>"],autoHeight:true});});}
function parallax_init(){$('.iw-parallax').each(function(){$(this).css({'background-repeat':'no-repeat','background-attachment':'fixed','background-size':'100% auto','overflow':'hidden'}).parallax("50%",$(this).attr('data-iw-paraspeed'));});$('.iw-parallax-video').each(function(){$(this).parent().css({"height":$(this).attr('data-iw-paraheight'),'overflow':'hidden'});$(this).parallaxVideo("50%",$(this).attr('data-iw-paraspeed'));});};function scrollbar(){if($.mCustomScrollbar){$.mCustomScrollbar.defaults.theme="light-2";$(".scroll-y").mCustomScrollbar();$(".scroll-x").mCustomScrollbar({axis:"x",advanced:{autoExpandHorizontalScroll:true}});$(".scroll-yx").mCustomScrollbar({axis:"yx"});$(".scrollTo a").click(function(e){e.preventDefault();var $this=$(this),rel=$this.attr("rel"),el=rel==="content-y"?".scroll-y":rel==="content-x"?".scroll-x":".scroll-yx",data=$this.data("scroll-to"),href=$this.attr("href").split(/#(.+)/)[1],to=data?$(el).find(".mCSB_container").find(data):el===".scroll-yx"?eval("("+href+")"):href,output=$("#info > p code"),outputTXTdata=el===".scroll-yx"?data:"'"+data+"'",outputTXThref=el===".scroll-yx"?href:"'"+href+"'",outputTXT=data?"$('"+el+"').find('.mCSB_container').find("+outputTXTdata+")":outputTXThref;$(el).mCustomScrollbar("scrollTo",to);output.text("$('"+el+"').mCustomScrollbar('scrollTo',"+outputTXT+");");});}
var $container_isotope=$('#iw-isotope-main, #iw-isotope-travel-4-main, #iw-isotope-travel-5-main');if($container_isotope.length){$container_isotope.isotope({itemSelector:'.element-item'});$container_isotope.imagesLoaded().progress(function(){$container_isotope.isotope('layout');});}
$('.intravel-spotlight-tour .tour-item, .intravel-spotlight-destination.style2 .tour-type-item').on('touchstart',function(){var hover=$(this);if(hover.hasClass('hover')){return true;}else{hover.addClass('hover');$('a.taphover').not(this).removeClass('hover');e.preventDefault();return false;}});}
$(document).ready(function(){woocommerce_init();sticky_menu();parallax_init();theme_init();carousel_init();$(".fit-video").fitVids();$('.profile-box.style5').hover(function(){$('.profile-box.style5').removeClass('active');$(this).addClass('active');});if($('.back-to-top').length){$('a[href=#page-top]').click(function(){$('html, body').animate({scrollTop:0},'slow');return false;});}
if($('select.js-selected').length){$('select.js-selected').select2();}
$('.commentratingbox').rating();});$(window).on('load',function(){$('.se-pre-con').fadeOut('slow',function(){$(this).remove();});parallax_init();scrollbar();});})(jQuery);;;(function($,window,document,undefined){var OnePageNav=function(elem,options){this.elem=elem;this.$elem=$(elem);this.options=options;this.metadata=this.$elem.data('plugin-options');this.$win=$(window);this.sections={};this.didScroll=false;this.$doc=$(document);this.docHeight=this.$doc.height();};OnePageNav.prototype={defaults:{navItems:'a',currentClass:'current',changeHash:false,easing:'swing',filter:'',scrollSpeed:750,scrollThreshold:0.5,begin:false,end:false,scrollChange:false},init:function(){this.config=$.extend({},this.defaults,this.options,this.metadata);this.$nav=this.$elem.find(this.config.navItems);if(this.config.filter!==''){this.$nav=this.$nav.filter(this.config.filter);}
this.$nav.on('click.onePageNav',$.proxy(this.handleClick,this));this.getPositions();this.bindInterval();this.$win.on('resize.onePageNav',$.proxy(this.getPositions,this));return this;},adjustNav:function(self,$parent){self.$elem.find('.'+self.config.currentClass).removeClass(self.config.currentClass);$parent.addClass(self.config.currentClass);},bindInterval:function(){var self=this;var docHeight;self.$win.on('scroll.onePageNav',function(){self.didScroll=true;});self.t=setInterval(function(){docHeight=self.$doc.height();if(self.didScroll){self.didScroll=false;self.scrollChange();}
if(docHeight!==self.docHeight){self.docHeight=docHeight;self.getPositions();}},250);},getHash:function($link){var href=$link.attr('href');if(href){return href.split('#')[1];}
else{return'';}},getPositions:function(){var self=this;var linkHref;var topPos;var $target;self.$nav.each(function(){linkHref=self.getHash($(this));$target=$('#'+linkHref);if($target.length){topPos=$target.offset().top;self.sections[linkHref]=Math.round(topPos);}});},getSection:function(windowPos){var returnValue=null;var windowHeight=Math.round(this.$win.height()*this.config.scrollThreshold);for(var section in this.sections){if((this.sections[section]-windowHeight)<windowPos){returnValue=section;}}
return returnValue;},handleClick:function(e){var self=this;var $link=$(e.currentTarget);var $parent=$link.parent();var newLoc='#'+self.getHash($link);if(!$parent.hasClass(self.config.currentClass)){if(self.config.begin){self.config.begin();}
self.adjustNav(self,$parent);self.unbindInterval();self.scrollTo(newLoc,function(){if(self.config.changeHash){window.location.hash=newLoc;}
self.bindInterval();if(self.config.end){self.config.end();}});}
e.preventDefault();},scrollChange:function(){var windowTop=this.$win.scrollTop();var position=this.getSection(windowTop);var $parent;if(position!==null){$parent=this.$elem.find('a[href$="#'+position+'"]').parent();if(!$parent.hasClass(this.config.currentClass)){this.adjustNav(this,$parent);if(this.config.scrollChange){this.config.scrollChange($parent);}}}},scrollTo:function(target,callback){var offset=$(target).offset().top;$('html, body').animate({scrollTop:offset},this.config.scrollSpeed,this.config.easing,callback);},unbindInterval:function(){clearInterval(this.t);this.$win.unbind('scroll.onePageNav');}};OnePageNav.defaults=OnePageNav.prototype.defaults;$.fn.onePageNav=function(options){return this.each(function(){new OnePageNav(this,options).init();});};})(jQuery,window,document);