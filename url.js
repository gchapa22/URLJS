window.urls = (function(){
	var urls = {
		//pendiente
		get: function (){
		    var sURLVariables = window.location.split('/');
		    var rtrn = {}
		    
		}

		// Returns the extension of the file of the current URL
		getExtension: function(){
		    var sURLVariables = window.location.pathname;
		    if (sURLVariables.indexOf(".")>=0){
		    	return sURLVariables.split(".")[1];
		    }
		}

		// Returns the extension of the file of a provided URL
		getExtension: function(value){
		    var sURLVariables = value.split(".")[1].split("/");
		    if (sURLVariables[sURLVariables.length-1].length>0 && sURLVariables[sURLVariables.length-1].indexOf(".")>0)
		    {
		    	return sURLVariables[sURLVariables.length-1].split(".")[1];
		    }
		    else if (sURLVariables[sURLVariables.length-2].indexOf(".")>0)
		    {
		    	return sURLVariables[sURLVariables.length-2].split(".")[1];
		    }
		}

		getPort: function(){
			return window.location.port.toString().trim()==""? "80": window.location.port.toString();
		}

		getProtocol: function(){
			return window.location.protocol
		}

		getProtocol: function(value){
			return value.split(":")[0]+":"
		}

		hasExtension: function(){
		    return window.location.pathname.indexOf(".")>=0;
		}

		// Returns true if the current URL is valid
		isValid: function(){
			return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(window.location.href);
		}

		// Returns true if the URL provided is valid
		isValid: function(value){
			return  /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
		}

		// Returns true if the current URL has parameters
		hasParam: function(){
			return window.location.search.substring(1).length>0;
		}

		// Returns a Json Array with the id's and values of the URL parameters. 
		getParams: function(){
		    var sURLVariables = window.location.search.substring(1);.split('&');
		    var jsonArr = []
		    for (var i = 0; i < sURLVariables.length; i++)
		    {
		    	var sParameter= sURLVariables[i].split('=');
		    	jsonArr.push({
		    		id: sParameter[0],
		    		optionValue: sParameter[1]
		    	});
		    }
		    return jsonArr;
		}

		// Returns the value of the specified parameter name
		getParam: function(param){
		    var sURLVariables = window.location.search.substring(1);.split('&');
		    for (var i = 0; i < sURLVariables.length; i++)
		    {
		        var sParameterName = sURLVariables[i].split('=');
		        if (sParameterName[0] == sParam)
		        {
		            return sParameterName[1];
		        }
		    }
		}

		// Returns the domain of the current URL
		getDomain: function(){
			var origin = window.location.origin.split(".");
			return origin[origin.length-1];
		}

		// Returns the domain name of the current URL 
		getDomainName: function(){
			return window.location.origin;
		}

		// Returns true if the current URL has a subdomain, false if not.
		hasSubdomain: function(){
			var origin = window.location.origin.split(".");
			return origin.length>=3 && origin[0].indexOf("www")<0;
		}
		// Returns the subdomain of the current URL.
		getSubDomain: function(){
			var origin = window.location.origin.split(".");
			if (origin.length>=3 && origin[0].indexOf("www")<0)
			{
				return origin[0].split("//")[1];
			}
		}

	}
})();