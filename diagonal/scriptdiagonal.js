var rot13_dict = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  a: "n",
  b: "o",
  c: "p",
  d: "q",
  e: "r",
  f: "s",
  g: "t",
  h: "u",
  i: "v",
  j: "w",
  k: "x",
  l: "y",
  m: "z",
  n: "a",
  o: "b",
  p: "c",
  q: "d",
  r: "e",
  s: "f",
  t: "g",
  u: "h",
  v: "i",
  w: "j",
  x: "k",
  y: "l",
  z: "m",
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "~": "~",
  "`": "`",
  "°": "°",
  "=": "=",
  "§": "§",
  "[": "[",
  "]": "]",
  "}": "}",
  "{": "{",
  '"': '"',
  "’": "’"
};

let rot13_map = arg => {
  arr = arg.split("");
  arr2 = [];

  for (var i = 0; i < arr.length; i++) {
    var value = arr[i];
    if (
      value == "?" ||
      value == " " ||
      value == "!" ||
      value == "," ||
      value == "." ||
      value == "'" ||
      value == "&" ||
      value == "#" ||
      value == "$" ||
      value == "%" ||
      value == "(" ||
      value == ")" ||
      value == "^" ||
      value == "+" ||
      value == "-" ||
      value == "*" ||
      value == "/" ||
      value == "_" ||
      value == "&" ||
      value == ":" ||
      value == ";" ||
      value == "<" ||
      value == ">"
    ) {
      arr2.push(value);
    } else {
      arr2.push(rot13_dict[value]);
    }
  }
  return arr2.join("");
};
$(document).ready(function() {
  $(".img-box").hide();
  $(".button").mouseenter(function() {
    $(".button").height("40px");
    $(".button").width("300px");
    $(".button").css("background-color", "rgb(56, 115, 129)");
  });
  $(".button").mouseleave(function() {
    $(".button").height("40px");
    $(".button").width("300px");
    $(".button").css("background-color", "rgb(56, 115, 129)");
  });
  $(".button").click(function() {
    $(".img-box").fadeIn(1000);
    var toAdd = $("input[name=myInput]").val();
    var sentence = rot13_map(toAdd);
    $("#answer").html(sentence);
  });
  $(document).keydown(function(key) {
    switch (parseInt(key.which, 10)) {
      case 13:
        $(".img-box").fadeIn(1000);
        let toAdd = $("input[name=myInput]").val();
        let sentence = rot13_map(toAdd);
        $("#answer").html(sentence);
        break;
    }
  });

  $(".input").on("click", function() {
    $(".img-box").fadeOut(1000);
  });
});