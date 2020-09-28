let a = "Uwielbiam JavaScript";
let b = "Jestem świetnym programistą";

function stringLength(a, b) {
  if (a.length > b.length) {
    console.log(`Dlugosc stringa a, to ${a.length} znakow.`);
    return a;
  } else if (b.length > a.length) {
    console.log(`Dlugosc stringa b, to ${b.length} znakow.`);
    return b;
  }
}

console.log(stringLength(a, b));