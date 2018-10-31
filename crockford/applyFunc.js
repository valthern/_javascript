
window.onload = function () {
	var br = '<br />';

	function add(a, b) {
		return a + b;
	}

	//var sum = add(3, 4);
	//document.writeln(sum + br);
	 
	// Create a function called Quo.
	// It makes an object  with a status property
	var Quo = function (string) {
		this.status = string;
	};

	// Give all instances  of Quo a public method
	// called get_status.
	Quo.prototype.get_status = function() {
		return this.status;
	};

	// Make an instance of Quo.
	var myQuo = new Quo("confused");
	document.writeln(myQuo.get_status() + br);

	// Make an array of 2 numbers  and add them.
	var array = [3, 7];
	var sum = add.apply(null, array);
	document.writeln(sum + br);

	// Make en object with a status member.
	var statusObject = {
		status: 'A-OK'
	};

	// statusObject does not inherit from Quo.prototype,
	// but we can invoke the get_status method on 
	// statusObject even though statusObject does not have
	// a get_status method
	var status = Quo.prototype.get_status.apply(statusObject);
	document.writeln(status + br);

	// Make a function that adds a lot of stuff.
	// Note that defining the variable sum inside of
	// the function does not interfere with the sum
	// defined outside of the function. The function
	// only sees thr inner one.
	var sum = function () {
		var sum = 0;
		for (var i = 0; i < arguments.length; i++) {
			sum += arguments[i];
		}
		document.writeln(typeof arguments + br);

		return sum;
	};

	document.writeln(sum(4, 8, 15, 16, 23, 42) + br); //108

	var add = function (a, b) {
		if (typeof a !== 'number' || typeof b !== 'number') {
			throw{
				name: 'TypeError',
				message: 'add needs numbers'
			};
		}
		return a + b;
	}

	// Make a  try_it function that calls the new add function
	// incorrectly.
	var try_it = function () {
		try {
			add("seven");
		} catch (e) {
			document.writeln(e.name + ': ' + e.message + br);
		}
	}

	try_it();

	// AUGMENTING TYPES
	Function.prototype.method = function (name, func) {
		if (!this.prototype[name]) this.prototype[name] = func;
		return this;
	}

	Number.method('integer', function () {
		return Math[this < 0 ? 'ceiling' : 'floor'](this);
	});

	document.writeln((10 / 3).integer() + br); // -3

	String.method('trim', function () {
		return this.replace(/^\s+|\s+$/g, '');
	});

	document.writeln('"' + "    neat     ".trim() + '"' + br);

	var myValue = function () {
		var value = 0;

		return {
			increment: function (inc) {
				value += typeof inc === 'number' ? inc : 1;
			},
			getValue: function () {
				return value;
			}
		};
	}();

	var quo = function (status) {
		return {
			get_status:function () {
				return status;
			}
		};
	};

	var myQuo = quo("amazed");
	document.writeln(myQuo.get_status());

	var fade = function (node) {
		var level = 1;
		var step = function () {
			var hex = level.toString(16);
			node.style.
		}
	}
};
