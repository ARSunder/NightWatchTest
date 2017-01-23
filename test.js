module.exports = {
	'search' : function(browser){
		var title = "How Google Tests Software";
		var price = "$21.59";

		function searchResult(elems){
			elems.value.forEach(function(elem){
				browser.elementIdElements(elem.ELEMENT, "css selector", "li a", function(result){
					browser
					.assert.equal(result.title,title)
					.click(elem)
					.pause(1000)
					.waitForElementVisible("body", 1000)
					.assert.elementPresent("#mediaTabs_tabSet")
					.elements("css selector", "#mediaTabs_tabSet li", tabs)					
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