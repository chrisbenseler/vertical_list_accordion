/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var VerticalListAccordion = function(opts) {
	if(opts===undefined || opts===null) {
		throw "Error: options missing";
	}
	if(opts.element===null) {
		throw "Error: element missing";
	}

	var options = {
		el: null,
		items: 3,
		li_class: "vla_list-item"
	};

	var inner_li = function(data_item) {
		return data_item.name;
	};

	for(var key in opts) {
		if(key=="inner_data") {
			inner_li = opts[key];
		} else
			options[key] = opts[key];
	}

	var $ = jQuery,
		el = options.element;

	var show_items = function(data) {
		var str = "";
		for(var i=0; i<(data.length > options.items ? options.items : data.length); i++) {
			var li = el.find("li[data-id='" + data[i].id + "']");
			if(li.length===0)
				str += "<li data-id=\"" + data[i].id + "\" class=\"vla_new-item\" style=\"display:none;\">" + inner_li(data[i]) + "</li>";
		}
		$(el).prepend(str);

		el.find("li.vla_new-item").each(function() {
			var lis = el.find("li." + options.li_class);
			if(lis.length>(options.items - 1)) {
				$(lis[options.items - 1]).slideUp(function() {
					$(this).remove();
				});
			}
			
			$(this)
				.slideDown()
				.removeClass("vla_new-item")
				.addClass(options.li_class);
		});
	};

	//reveal method(s)
	this.update = show_items;

	return this;
};