module.exports = {
	var session;
	before: funtion(browser){
		browser.session(function(result){
			session = result;
			console.log("Session: ");
			console.log(result.value);
		});
	},

	after: function(result){
		browser.session('delete', session, function(result){
			console.log("Terminating: " + result.value);
		})
	}

	'search' : function(browser){
		var title = "How Google Tests Software";
		var price-whole = "21";
		var price-frac = "59";

		function searchResult(elems){
			elems.value.forEach(function(elem){
				browser.elementIdElements(elem.ELEMENT, "css selector", "li a.s-access-detail-page", function(result){
					browser
					.assert.equal(result.title,title)
					.elementIdElement(result.ELEMENT, "css selector", "span.sx-price.sx-price-large", function(prices){
						prices.forEach(function(price){
							browser.elementIdElement(price.ELEMENT, "css selector", "span.sx-price-whole", function(whole){
								browser.assert.equal(whole.text, price-whole);
							})
							browser.elementIdElement(price.ELEMENT, "css selector", "sup.sx-price-fractional", function(frac){
								browser.assert.equal(frac.text, price-frac);
							})
						})
					})			
				})
			});
		}

		function tabs(elems){
			elems.value.forEach(function(elem){
				browser.elementIdElement(elem.ELEMENT, "css selector", "#mediaTab_heading_0 span.a-size-base.mediaTab_subTitle", function(result){
					browser.assert.equal(result.value, price)
				})
			});
		}	

		browser
		.url("https://www.amazon.com")
		.waitForElementVisible("body", 1000)
		.setValue("#twotabsearchtextbox", "Test Automation")
		.waitForElementVisible("input[class=submit]", 1000)
		.click("input[class=submit]")
		.pause(1000)
		.assert.elementPresent("#s-results-list-atf")
		.elements("css selector", "#s-results-list-atf li", searchResult)
		.end()
	}
};

