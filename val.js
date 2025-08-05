is_Blank =  function(input) {
    if (input.length === 0)
        return true;
    else
        return false;
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));

is_string = function(input) {
  if (Object.prototype.toString.call(input) === '[object String]')
    return true;
  else
     return false;   
    };
console.log(is_string("w3resource"));
console.log(is_string([1,2,4,0]));


string_to_array = function (str) {
    return str.trim().split(" ");
};
console.log(string_to_array("Robin Singh"));


truncate_string = function (str1, length) {
    if ((str1.constructor === String) && (length>0)) {
        return str1.slice(0, length);
    }
};
console.log(truncate_string("Robin Singh",4));


abbrev_name = function (str1) {
    var split_names = str1.trim().split(" ");
    
    if (split_names.length > 1) {
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
    return split_names[0];
};
console.log(abbrev_name("Robin Singh"));


protect_email = function (user_email) {
    var avg, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};
console.log(protect_email("robin_singh@example.com"));


string_parameterize = function (str1) {
    return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
};
console.log(string_parameterize("Robin Singh from USA."));


capitalize = function(str1){
  return str1.charAt(0).toUpperCase() + str1.slice(1);
}    
console.log(capitalize('js string exercises'));
 


