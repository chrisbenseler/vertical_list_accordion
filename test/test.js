"use strict";

test("create element", function() {
	try {
		var va = new VerticalListAccordion();
	} catch (e) {
		ok("Error: options missing" == e);	
	}

	var va = new VerticalListAccordion({
		element: $("ul#mylist"),
		items: 4,
		inner_data: function(item) {
			return "<span>" + item.name + "</span>";
		}
	});
	ok(va!==null);
});

asyncTest("insertion", function() {
	
	var va = new VerticalListAccordion({
		element: $("ul#mylist"),
		items: 4,
		inner_data: function(item) {
			return "<span>" + item.name + "</span>";
		}
	});


	var data1 = [
		{id: 3, name: "nome 3"},
		{id: 2, name: "nome 2"},
		{id: 1, name: "nome 1"}
	];

	var data2 = [
		{id: 6, name: "nome 6"},
		{id: 5, name: "nome 5"},
		{id: 4, name: "nome 4"},
		{id: 3, name: "nome 3"},
		{id: 2, name: "nome 2"}					
	];

	va.update(data1);

	ok($("ul#mylist li").length == 3);

	ok($("ul#mylist li:first-child").html() == "<span>nome 3</span>");	

	va.update(data2);

	setTimeout(function () {
		ok($("ul#mylist li").length == 4, "Size: " + $("ul#mylist li").length);
		start();
	}, 1000);

	
});