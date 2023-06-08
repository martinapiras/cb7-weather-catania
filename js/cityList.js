const cityList = [
  {
    id: 1,
    name: "Aci Bonaccorsi",
    value: "lat=37.5976&lon=15.1079",
  },
  {
    id: 2,
    name: "Aci Castello",
    value: "lat=37.5583&lon=15.1346",
  },
  {
    id: 3,
    name: "Aci Catena",
    value: "lat=37.596&lon=15.1402",
  },
  {
    id: 4,
    name: "Aci Sant'Antonio",
    value: "lat=37.6062&lon=15.1202",
  },
  {
    id: 5,
    name: "Acireale",
    value: "lat=37.6125&lon=15.1663",
  },
  {
    id: 6,
    name: "Adrano",
    value: "lat=37.6618&lon=14.8348",
  },
  {
    id: 7,
    name: "Belpasso",
    value: "lat=37.5947&lon=14.9834",
  },
  {
    id: 8,
    name: "Biancavilla",
    value: "lat=37.6451&lon=14.8671",
  },
  {
    id: 9,
    name: "Bronte",
    value: "lat=37.7895&lon=14.8342",
  },
  {
    id: 10,
    name: "Calatabiano",
    value: "lat=37.8209&lon=15.228",
  },
  {
    id: 11,
    name: "Caltagirone",
    value: "lat=37.2368&lon=14.5126",
  },
  {
    id: 12,
    name: "Camporotondo Etneo",
    value: "lat=37.5657&lon=15.0032",
  },
  {
    id: 13,
    name: "Castel di Iudica",
    value: "lat=37.4948&lon=14.6474",
  },
  {
    id: 14,
    name: "Castiglione di Sicilia",
    value: "lat=37.8821&lon=15.1214",
  },
  {
    id: 15,
    name: "Catania",
    value: "lat=37.5021&lon=15.0872",
  },
  {
    id: 16,
    name: "Fiumefreddo di Sicilia",
    value: "lat=37.7915&lon=15.2092",
  },
  {
    id: 17,
    name: "Giarre",
    value: "lat=37.7269&lon=15.1877",
  },
  {
    id: 18,
    name: "Grammichele",
    value: "lat=37.2123&lon=14.6397",
  },
  {
    id: 19,
    name: "Gravina di Catania",
    value: "lat=37.5555&lon=15.063",
  },
  {
    id: 20,
    name: "Licodia Eubea",
    value: "lat=37.1571&lon=14.7061",
  },
  {
    id: 21,
    name: "Linguaglossa",
    value: "lat=37.8432&lon=15.1388",
  },
  {
    id: 22,
    name: "Maletto",
    value: "lat=37.83&lon=14.8625",
  },
  {
    id: 23,
    name: "Maniace",
    value: "lat=37.8831&lon=14.7981",
  },
  {
    id: 24,
    name: "Mascali",
    value: "lat=37.7558&lon=15.1959",
  },
  {
    id: 25,
    name: "Mascalucia",
    value: "lat=37.5922&lon=15.0299",
  },
  {
    id: 26,
    name: "Mazzarrone",
    value: "lat=37.0883&lon=14.5613",
  },
  {
    id: 27,
    name: "Militello in Val di Catania",
    value: "lat=37.2748&lon=14.7934",
  },
  {
    id: 28,
    name: "Milo",
    value: "lat=37.7233&lon=15.1159",
  },
  {
    id: 29,
    name: "Mineo",
    value: "lat=37.2654&lon=14.6901",
  },
  {
    id: 30,
    name: "Mirabella Imbaccari",
    value: "lat=37.3275&lon=14.4463",
  },
  {
    id: 31,
    name: "Misterbianco",
    value: "lat=37.5341&lon=14.9538",
  },
  {
    id: 32,
    name: "Motta Sant'Anastasia",
    value: "lat=37.5131&lon=14.9659",
  },
  {
    id: 33,
    name: "Nicolosi",
    value: "lat=37.616&lon=15.0255",
  },
  {
    id: 34,
    name: "Palagonia",
    value: "lat=37.3283&lon=14.7448",
  },
  {
    id: 35,
    name: "Paternò",
    value: "lat=37.571&lon=14.9027",
  },
  {
    id: 36,
    name: "Pedara",
    value: "lat=37.6169&lon=15.0567",
  },
  {
    id: 37,
    name: "Piedimonte Etneo",
    value: "lat=37.8069&lon=15.1766",
  },
  {
    id: 38,
    name: "Raddusa",
    value: "lat=37.4757&lon=14.5339",
  },
  {
    id: 39,
    name: "Ragalna",
    value: "lat=37.6345&lon=14.947",
  },
  {
    id: 40,
    name: "Ramacca",
    value: "lat=37.3881&lon=14.6927",
  },
  {
    id: 41,
    name: "Randazzo",
    value: "lat=37.8774&lon=14.9501",
  },
  {
    id: 42,
    name: "Riposto",
    value: "lat=37.7306&lon=15.2009",
  },
  {
    id: 43,
    name: "San Cono",
    value: "lat=37.2914&lon=14.3661",
  },
  {
    id: 44,
    name: "San Giovanni La Punta",
    value: "lat=37.5761&lon=15.0981",
  },
  {
    id: 45,
    name: "San Gregorio di Catania",
    value: "lat=37.5653&lon=15.1118",
  },
  {
    id: 46,
    name: "San Michele di Ganzaria",
    value: "lat=37.2814&lon=14.4255",
  },
  {
    id: 47,
    name: "San Pietro Clarenza",
    value: "lat=37.5689&lon=15.0229",
  },
  {
    id: 48,
    name: "Santa Maria di Licodia",
    value: "lat=37.6148&lon=14.8906",
  },
  {
    id: 49,
    name: "Santa Venerina",
    value: "lat=37.6874&lon=15.1383",
  },
  {
    id: 50,
    name: "Sant'Agata Li Battiati",
    value: "lat=37.5574&lon=15.08",
  },
  {
    id: 51,
    name: "Sant'Alfio",
    value: "lat=37.7424&lon=15.1418",
  },
  {
    id: 52,
    name: "Scordia",
    value: "lat=37.2981&lon=14.8408",
  },
  {
    id: 53,
    name: "Trecastagni",
    value: "lat=37.6186&lon=15.078",
  },
  {
    id: 54,
    name: "Tremestieri Etneo",
    value: "lat=37.5812&lon=15.0709",
  },
  {
    id: 55,
    name: "Valverde",
    value: "lat=37.5769&lon=15.1242",
  },
  {
    id: 56,
    name: "Viagrande",
    value: "lat=37.6078&lon=15.0966",
  },
  {
    id: 57,
    name: "Vizzini",
    value: "lat=37.1609&lon=14.7497",
  },
  {
    id: 58,
    name: "Zafferana Etnea",
    value: "lat=37.6822&lon=15.108",
  },
];

export default cityList;
