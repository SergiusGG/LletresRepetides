var str = "SERGIO";

var map = new Map();
var len = str.length;
for (var i = 0; i < len; i++) {
    var char = str.charAt(i)
    if (map.has(char)) {
        var value = map.get(char)
        map.set(char, value + 1)
    } else {
        map.set(char, 1)
    }
}
console.log(map);