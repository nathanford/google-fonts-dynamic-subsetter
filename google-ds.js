googleDS = function (font, weights, subset) {

	stripScripts = function (ele) {
	  
	  var scripts = ele.getElementsByTagName('script'),
	  		i = scripts.length;
	  
	  while (i--) {
	    scripts[i].parentNode.removeChild(scripts[i]);
	  }
	  
	  return ele;
	  
	}

	var fontname = font.replace(' ', '+'),
			weights = (weights != '') ? ':' + weights : '',
	
			head = document.getElementsByTagName('head')[0],
	    body = document.getElementsByTagName('body')[0],
	    
	    content = stripScripts(body),
	  
	    subset = '';
	
	content = content.textContent;
	
	for(var i = 0; i < content.length; i++){
	
	  if( subset.indexOf(content[i])==-1 ) subset += content[i];
	  
	}
	
	if (subset != '') subset = "&text=" + encodeURIComponent(subset);
	
	head.innerHTML += "<link href=\"http://fonts.googleapis.com/css?family=" + fontname + weights + subset + "\" rel=\"stylesheet\" type=\"text/CSS\">";

}