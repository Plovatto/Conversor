let cel = document.getElementById("cel");
let fah = document.getElementById("fah");
let kel = document.getElementById("kel");
let ran = document.getElementById("ran");

let debounce = (func, wait) => {
  let tempo = null;
  return function () {
    clearTimeout(tempo);
    tempo = setTimeout(func, wait);
  };
};

cel.addEventListener(
  "input",
  debounce(() => {
    if (cel.value.length != 0) {
      fah.value = convertercelxfah(cel.value);
      kel.value = convertercelxkel(cel.value);
      ran.value = convertercelxran(cel.value);
    } else {
      fah.value = "";
      kel.value = "";
      ran.value = "";
    }
  }, 500)
);

fah.addEventListener(
  "input",
  debounce(() => {
    if (fah.value.length != 0) {
        cel.value = converterfahxcel(fah.value);
        kel.value = converterfahxkel(fah.value);
        ran.value = converterfahxran(fah.value);

    } else {
      cel.value = "";
      ran.value = "";
      kel.value = "";
    }
  }, 500)
);

kel.addEventListener(
    "input",
    debounce(() => {
      if (kel.value.length != 0) {
        cel.value = converterkelxcel(kel.value);
        fah.value = converterkelxfah(kel.value);
        ran.value = converterkelxran(kel.value);
      } else {
        cel.value = "";
        ran.value = "";
        fah.value = "";
      }
    }, 500)
  );

 ran.addEventListener(
    "input",
    debounce(() => {
      if (ran.value.length != 0) {
        cel.value = converterranxcel(ran.value);
        fah.value = converterranxfah(ran.value);
        kel.value = converterranxkel(ran.value);
      } else {
        cel.value = "";
        kel.value = "";
        fah.value = "";
      }
    }, 500)
  );


//celcius
let convertercelxfah = (cel) => ((Number(cel) * 9) / 5 + 32).toFixed(2);
let convertercelxkel = (cel) => (Number(cel) + 273.15).toFixed(2);
let convertercelxran = (cel) => ((Number(cel) * 9) / 5 + 491.67).toFixed(2);


//fahrenheit
let converterfahxcel = (fah) => (((Number(fah) - 32) * 5) / 9).toFixed(2);
let converterfahxkel = (fah) => (((Number(fah) - 32) * 5) / 9 + 273.15).toFixed(2);
let converterfahxran = (fah) => (Number(fah) + 459.67).toFixed(2);

//kelvin
let converterkelxcel = (kel) => (Number(kel) - 273.15).toFixed(2);
let converterkelxfah = (kel) => (((Number(kel) - 273.15) * 9) /5 + 32).toFixed(2);
let converterkelxran = (kel) => (Number(kel) * 1.8).toFixed(2);

//rankine
let converterranxcel = (ran) => (((Number(ran) - 491.67) * 5) /9).toFixed(2);
let converterranxfah = (ran) => (Number(ran) - 459.67).toFixed(2);
let converterranxkel = (ran) => ((Number(ran) * 5) /9).toFixed(2);


 