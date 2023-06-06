import { GET } from "./utils/http.js";
import { cE, qS, cityListGen, weatherGen } from "./utils/fn.js";

const cityList = [
  {
    id: 1,
    name: "Aci Bonaccorsi",
    value: "aci+bonaccorsi",
  },
  {
    id: 2,
    name: "Aci Castello",
    value: "aci+castello",
  },
  {
    id: 3,
    name: "Aci Catena",
    value: "aci+catena",
  },
  {
    id: 4,
    name: "Aci Sant'Antonio",
    value: "aci+santantonio",
  },
  {
    id: 5,
    name: "Acireale",
    value: "acireale",
  },
  {
    id: 6,
    name: "Adrano",
    value: "adrano",
  },
  {
    id: 7,
    name: "Belpasso",
    value: "belpasso",
  },
  {
    id: 8,
    name: "Biancavilla",
    value: "biancavilla",
  },
  {
    id: 9,
    name: "Bronte",
    value: "bronte",
  },
  {
    id: 10,
    name: "Calatabiano",
    value: "calatabiano",
  },
  {
    id: 11,
    name: "Caltagirone",
    value: "caltagirone",
  },
  {
    id: 12,
    name: "Camporotondo Etneo",
    value: "camporotondo+etneo",
  },
  {
    id: 13,
    name: "Castel di Iudica",
    value: "castel+di+iudica",
  },
  {
    id: 14,
    name: "Castiglione di Sicilia",
    value: "castiglione+di+sicilia",
  },
  {
    id: 15,
    name: "Catania",
    value: "catania",
  },
  {
    id: 16,
    name: "Fiumefreddo di Sicilia",
    value: "fiumefreddo+di+sicilia",
  },
  {
    id: 17,
    name: "Giarre",
    value: "giarre",
  },
  {
    id: 18,
    name: "Grammichele",
    value: "grammichele",
  },
  {
    id: 19,
    name: "Gravina di Catania",
    value: "gravina+di+Catania",
  },
  {
    id: 20,
    name: "Licodia Eubea",
    value: "licodia+eubea",
  },
  {
    id: 21,
    name: "Linguaglossa",
    value: "linguaglossa",
  },
  {
    id: 22,
    name: "Maletto",
    value: "maletto",
  },
  {
    id: 23,
    name: "Maniace",
    value: "maniace",
  },
  {
    id: 24,
    name: "Mascali",
    value: "mascali",
  },
  {
    id: 25,
    name: "Mascalucia",
    value: "mascalucia",
  },
  {
    id: 26,
    name: "Mazzarrone",
    value: "mazzarrone",
  },
  {
    id: 27,
    name: "Militello in Val di Catania",
    value: "militello+in+val+di+catania",
  },
  {
    id: 28,
    name: "Milo",
    value: "milo",
  },
  {
    id: 29,
    name: "Mineo",
    value: "mineo",
  },
  {
    id: 30,
    name: "Mirabella Imbaccari",
    value: "mirabella+imbaccari",
  },
  {
    id: 31,
    name: "Misterbianco",
    value: "misterbianco",
  },
  {
    id: 32,
    name: "Motta Sant'Anastasia",
    value: "motta+santanastasia",
  },
  {
    id: 33,
    name: "Nicolosi",
    value: "nicolosi",
  },
  {
    id: 34,
    name: "Palagonia",
    value: "palagonia",
  },
  {
    id: 35,
    name: "Paternò",
    value: "paterno",
  },
  {
    id: 36,
    name: "Pedara",
    value: "pedara",
  },
  {
    id: 37,
    name: "Piedimonte Etneo",
    value: "piedimonte+etneo",
  },
  {
    id: 38,
    name: "Raddusa",
    value: "raddusa",
  },
  {
    id: 39,
    name: "Ragalna",
    value: "ragalna",
  },
  {
    id: 40,
    name: "Ramacca",
    value: "ramacca",
  },
  {
    id: 41,
    name: "Randazzo",
    value: "randazzo",
  },
  {
    id: 42,
    name: "Riposto",
    value: "riposto",
  },
  {
    id: 43,
    name: "San Cono",
    value: "san+cono",
  },
  {
    id: 44,
    name: "San Giovanni La Punta",
    value: "san+giovanni+la+punta",
  },
  {
    id: 45,
    name: "San Gregorio di Catania",
    value: "san+gregorio+di+catania",
  },
  {
    id: 46,
    name: "San Michele di Ganzaria",
    value: "san+michele+di+ganzaria",
  },
  {
    id: 47,
    name: "San Pietro Clarenza",
    value: "san+pietro+clarenza",
  },
  {
    id: 48,
    name: "Santa Maria di Licodia",
    value: "santa+maria+di+licodia",
  },
  {
    id: 49,
    name: "Santa Venerina",
    value: "santa+venerina",
  },
  {
    id: 50,
    name: "Sant'Agata Li Battiati",
    value: "santagata+li+battiati",
  },
  {
    id: 51,
    name: "Sant'Alfio",
    value: "santalfio",
  },
  {
    id: 52,
    name: "Scordia",
    value: "scordia",
  },
  {
    id: 53,
    name: "Trecastagni",
    value: "trecastagni",
  },
  {
    id: 54,
    name: "Tremestieri Etneo",
    value: "tremestieri+etneo",
  },
  {
    id: 55,
    name: "Valverde",
    value: "valverde",
  },
  {
    id: 56,
    name: "Viagrande",
    value: "viagrande",
  },
  {
    id: 57,
    name: "Vizzini",
    value: "vizzini",
  },
  {
    id: 58,
    name: "Zafferana Etnea",
    value: "zafferana+etnea",
  },
];

const selectEl = qS(".cities");

cityList.forEach((city) => selectEl.append(cityListGen(city)));

///// EVENTS /////
// shows weather for selected city
selectEl.addEventListener("change", (e) => {
  const placeholder = qS(".placeholder");
  const wrapperEl = qS(".widgetWrapper");

  if (e.target.value !== "" && placeholder) {
    qS(".page").removeChild(placeholder);
    GET(e.target.value).then((data) => qS(".page").append(weatherGen(data)));
  } else if (e.target.value !== "" && wrapperEl) {
    qS(".page").removeChild(wrapperEl);
    GET(e.target.value).then((data) => qS(".page").append(weatherGen(data)));
  } else if (e.target.value === "") {
    const newPlaceholder = cE("p");
    newPlaceholder.className = "placeholder";
    newPlaceholder.textContent =
      "Please select a city to receive weather forecasts";
    qS(".page").removeChild(wrapperEl);
    qS(".page").appendChild(newPlaceholder);
  }
});
