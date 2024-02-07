var dadesMeteorits = [];
var map;
let contador = 0;

fetch("js/data/earthMeteorites.json")
  .then((response) => response.json())
  .then((data) => {
    dadesMeteorits = data;
    printList();
  });

function printList() {
  var resultat = document.getElementById("resultat");
  resultat.innerHTML = "";

  map = L.map("map").setView([0, 0], 2);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  var container = document.createElement("div");
  container.style.display = "flex";
  container.style.alignItems = "flex-start";

  var table = document.createElement("table");
  table.style.border = "1px solid black";

  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");

  var thButton = document.createElement("th");
  thButton.textContent = "Mostrar en el Mapa";
  headerRow.appendChild(thButton);

  var headers = ["ID", "Nombre", "Clase", "Masa"];
  headers.forEach((header) => {
    var th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  var tbody = document.createElement("tbody");

  dadesMeteorits.forEach((item, index) => {
    var row = document.createElement("tr");

    var tdButton = document.createElement("td");
    var button = document.createElement("button");
    button.textContent = "Mostrar";
    button.addEventListener("click", function () {
      showLocationOnMap(item.reclat, item.reclong, item.name);
    });
    tdButton.appendChild(button);
    row.appendChild(tdButton);

    var tdID = document.createElement("td");
    tdID.style.border = "1px solid black";
    tdID.textContent = index + 1;
    row.appendChild(tdID);

    var tdNombre = document.createElement("td");
    tdNombre.style.border = "1px solid black";
    tdNombre.textContent = item.name || "";
    row.appendChild(tdNombre);

    var tdClase = document.createElement("td");
    tdClase.style.border = "1px solid black";
    tdClase.textContent = item.recclass || "";
    row.appendChild(tdClase);

    var tdMasa = document.createElement("td");
    tdMasa.style.border = "1px solid black";
    tdMasa.textContent = item.mass || "";
    row.appendChild(tdMasa);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  container.appendChild(table);
  resultat.appendChild(container);
  document
    .getElementById("mostrarTotsBtn")
    .addEventListener("click", function () {
      showAllLocationsOnMap();
    });

  tdButton.appendChild(button);
  row.appendChild(tdButton);
}
function showLocationOnMap(lat, lon, name) {
    var iconIndex = Math.floor(Math.random() * 9); 

    var iconList = [
        blueIcon, goldIcon, redIcon, greenIcon, orangeIcon,
        yellowIcon, violetIcon, greyIcon, blackIcon
    ];

    var selectedIcon = iconList[iconIndex];

    map.setView([lat, lon], 8);

    L.marker([lat, lon], { icon: selectedIcon }).addTo(map).bindPopup(name).openPopup();
}


function showAllLocationsOnMap() {
  dadesMeteorits.forEach((item) => {
    try {
      showLocationOnMap(item.reclat, item.reclong, item.name);
    } catch (error) {
      console.error("Error ", item, error);
    }
  });
}

function getRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
var blueIcon = new L.Icon({
	iconUrl: 'img/marker-icon-2x-blue.png',
	shadowUrl: 'img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var goldIcon = new L.Icon({
	iconUrl: 'img/marker-icon-2x-gold.png',
	shadowUrl: 'img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var redIcon = new L.Icon({
	iconUrl: 'img/marker-icon-2x-red.png',
	shadowUrl: 'img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var greenIcon = new L.Icon({
	iconUrl: 'img/marker-icon-2x-green.png',
	shadowUrl: 'img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var orangeIcon = new L.Icon({
	iconUrl: 'img/marker-icon-2x-orange.png',
	shadowUrl: 'img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var yellowIcon = new L.Icon({
	iconUrl: 'img/marker-icon-2x-yellow.png',
	shadowUrl: 'img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var violetIcon = new L.Icon({
	iconUrl: 'img/marker-icon-2x-violet.png',
	shadowUrl: 'img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});
var greyIcon = new L.Icon({
	iconUrl: 'img/marker-icon-2x-grey.png',
	shadowUrl: 'img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

var blackIcon = new L.Icon({
	iconUrl: 'img/marker-icon-2x-black.png',
	shadowUrl: 'img/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});