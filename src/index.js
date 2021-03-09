
exports.min = function min (array) {
	if (array === undefined || array.length === 0) { array = 0 }
	else {
		array = (Array.isArray(array)) ? array : Array.from(arguments);
		array = Math.min(...array);
	}
  return array;
}

exports.max = function max (array) {
	if (array === undefined || array.length === 0) { array = 0 }
	else {
		array = (Array.isArray(array)) ? array : Array.from(arguments);
		array = Math.max(...array);
	}
  return array;
}

exports.avg = function avg (array) {
	if (array === undefined || array.length === 0) { array = 0 }
	else {
		array = (Array.isArray(array)) ? array : Array.from(arguments);
		array = array.reduce((sum, current) => sum + current, 0) / array.length;
	}
  return array;
}
