Vertical List Accordion
=======================
Javascript component to create an accordion effect in a list when data is updated. Depens on jQuery. New elements are shown on the top of the list with slideUp() effect and olds will be removed with slideDown() effect;

Example
=======
Run example.html or access http://jsfiddle.net/chrisbenseler/d53pt/

Usage
=====
<pre>
//create an new object and define the ul element
var va = new VerticalListAccordion({
	element: $("ul")
});
//pass array with data in json format (NOTE: each item must have an id key)
var data = [
	{id: 3, name: "name 3"},
	{id: 2, name: "name 2"},
	{id: 1, name: "name 1"}
];
//update accordion
va.update(data);
</pre>

Default behaviour
=================
- items in the list: 3. To change, pass 'items' in constructor
Example:
<pre>
var va = new VerticalListAccordion({
	element: $("ul"),
	items: 5
});
</pre>

- li class name: 'vla_list-item'. To change, pass 'li_class' in constructor
Example:
<pre>
var va = new VerticalListAccordion({
	element: $("ul"),
	li_class: "my_custom_class"
});
</pre>

- li content: print attribute 'name' from each item in array. To change, pass 'inner_data' in constructor, with a function that returns the desired output. This function receies the array item as parameter
Example:
<pre>
var va = new VerticalListAccordion({
	element: $("ul"),
	inner_data: function(item) {
		return "<span>" + item.name + "</span>";
	}
});
//this will output the item.name surrounded by the name attribute
</pre>

License
=======
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.