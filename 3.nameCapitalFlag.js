var xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
xhr.send();
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    let res = JSON.parse(this.response);
    res.forEach((element) => {
      console.log(`
Name : ${element.name}
Capital : ${element.capital}
flag : ${element.flag}
`);
    });
  }
};

// Output:
// Name : Afghanistan
// Capital : Kabul
// flag : https://restcountries.eu/data/afg.svg

// Name : Åland Islands
// Capital : Mariehamn
// flag : https://restcountries.eu/data/ala.svg

// Name : Albania
// Capital : Tirana
// flag : https://restcountries.eu/data/alb.svg

// Name : Algeria
// Capital : Algiers
// flag : https://restcountries.eu/data/dza.svg

// Name : American Samoa
// Capital : Pago Pago
// flag : https://restcountries.eu/data/asm.svg

// Name : Andorra
// Capital : Andorra la Vella
// flag : https://restcountries.eu/data/and.svg

// Name : Angola
// Capital : Luanda
// flag : https://restcountries.eu/data/ago.svg

// Name : Anguilla
// Capital : The Valley
// flag : https://restcountries.eu/data/aia.svg

// Name : Antarctica
// Capital :
// flag : https://restcountries.eu/data/ata.svg

// Name : Antigua and Barbuda
// Capital : Saint John's
// flag : https://restcountries.eu/data/atg.svg

// Name : Argentina
// Capital : Buenos Aires
// flag : https://restcountries.eu/data/arg.svg

// Name : Armenia
// Capital : Yerevan
// flag : https://restcountries.eu/data/arm.svg

// Name : Aruba
// Capital : Oranjestad
// flag : https://restcountries.eu/data/abw.svg

// Name : Australia
// Capital : Canberra
// flag : https://restcountries.eu/data/aus.svg

// Name : Austria
// Capital : Vienna
// flag : https://restcountries.eu/data/aut.svg

// Name : Azerbaijan
// Capital : Baku
// flag : https://restcountries.eu/data/aze.svg

// Name : Bahamas
// Capital : Nassau
// flag : https://restcountries.eu/data/bhs.svg

// Name : Bahrain
// Capital : Manama
// flag : https://restcountries.eu/data/bhr.svg

// Name : Bangladesh
// Capital : Dhaka
// flag : https://restcountries.eu/data/bgd.svg

// Name : Barbados
// Capital : Bridgetown
// flag : https://restcountries.eu/data/brb.svg

// Name : Belarus
// Capital : Minsk
// flag : https://restcountries.eu/data/blr.svg

// Name : Belgium
// Capital : Brussels
// flag : https://restcountries.eu/data/bel.svg

// Name : Belize
// Capital : Belmopan
// flag : https://restcountries.eu/data/blz.svg

// Name : Benin
// Capital : Porto-Novo
// flag : https://restcountries.eu/data/ben.svg

// Name : Bermuda
// Capital : Hamilton
// flag : https://restcountries.eu/data/bmu.svg

// Name : Bhutan
// Capital : Thimphu
// flag : https://restcountries.eu/data/btn.svg

// Name : Bolivia (Plurinational State of)
// Capital : Sucre
// flag : https://restcountries.eu/data/bol.svg

// Name : Bonaire, Sint Eustatius and Saba
// Capital : Kralendijk
// flag : https://restcountries.eu/data/bes.svg

// Name : Bosnia and Herzegovina
// Capital : Sarajevo
// flag : https://restcountries.eu/data/bih.svg

// Name : Botswana
// Capital : Gaborone
// flag : https://restcountries.eu/data/bwa.svg

// Name : Bouvet Island
// Capital :
// flag : https://restcountries.eu/data/bvt.svg

// Name : Brazil
// Capital : Brasília
// flag : https://restcountries.eu/data/bra.svg

// Name : British Indian Ocean Territory
// Capital : Diego Garcia
// flag : https://restcountries.eu/data/iot.svg

// Name : United States Minor Outlying Islands
// Capital :
// flag : https://restcountries.eu/data/umi.svg

// Name : Virgin Islands (British)
// Capital : Road Town
// flag : https://restcountries.eu/data/vgb.svg

// Name : Virgin Islands (U.S.)
// Capital : Charlotte Amalie
// flag : https://restcountries.eu/data/vir.svg

// Name : Brunei Darussalam
// Capital : Bandar Seri Begawan
// flag : https://restcountries.eu/data/brn.svg

// Name : Bulgaria
// Capital : Sofia
// flag : https://restcountries.eu/data/bgr.svg

// Name : Burkina Faso
// Capital : Ouagadougou
// flag : https://restcountries.eu/data/bfa.svg

// Name : Burundi
// Capital : Bujumbura
// flag : https://restcountries.eu/data/bdi.svg

// Name : Cambodia
// Capital : Phnom Penh
// flag : https://restcountries.eu/data/khm.svg

// Name : Cameroon
// Capital : Yaoundé
// flag : https://restcountries.eu/data/cmr.svg

// Name : Canada
// Capital : Ottawa
// flag : https://restcountries.eu/data/can.svg

// Name : Cabo Verde
// Capital : Praia
// flag : https://restcountries.eu/data/cpv.svg

// Name : Cayman Islands
// Capital : George Town
// flag : https://restcountries.eu/data/cym.svg

// Name : Central African Republic
// Capital : Bangui
// flag : https://restcountries.eu/data/caf.svg

// Name : Chad
// Capital : N'Djamena
// flag : https://restcountries.eu/data/tcd.svg

// Name : Chile
// Capital : Santiago
// flag : https://restcountries.eu/data/chl.svg

// Name : China
// Capital : Beijing
// flag : https://restcountries.eu/data/chn.svg

// Name : Christmas Island
// Capital : Flying Fish Cove
// flag : https://restcountries.eu/data/cxr.svg

// Name : Cocos (Keeling) Islands
// Capital : West Island
// flag : https://restcountries.eu/data/cck.svg

// Name : Colombia
// Capital : Bogotá
// flag : https://restcountries.eu/data/col.svg

// Name : Comoros
// Capital : Moroni
// flag : https://restcountries.eu/data/com.svg

// Name : Congo
// Capital : Brazzaville
// flag : https://restcountries.eu/data/cog.svg

// Name : Congo (Democratic Republic of the)
// Capital : Kinshasa
// flag : https://restcountries.eu/data/cod.svg

// Name : Cook Islands
// Capital : Avarua
// flag : https://restcountries.eu/data/cok.svg

// Name : Costa Rica
// Capital : San José
// flag : https://restcountries.eu/data/cri.svg

// Name : Croatia
// Capital : Zagreb
// flag : https://restcountries.eu/data/hrv.svg

// Name : Cuba
// Capital : Havana
// flag : https://restcountries.eu/data/cub.svg

// Name : Curaçao
// Capital : Willemstad
// flag : https://restcountries.eu/data/cuw.svg

// Name : Cyprus
// Capital : Nicosia
// flag : https://restcountries.eu/data/cyp.svg

// Name : Czech Republic
// Capital : Prague
// flag : https://restcountries.eu/data/cze.svg

// Name : Denmark
// Capital : Copenhagen
// flag : https://restcountries.eu/data/dnk.svg

// Name : Djibouti
// Capital : Djibouti
// flag : https://restcountries.eu/data/dji.svg

// Name : Dominica
// Capital : Roseau
// flag : https://restcountries.eu/data/dma.svg

// Name : Dominican Republic
// Capital : Santo Domingo
// flag : https://restcountries.eu/data/dom.svg

// Name : Ecuador
// Capital : Quito
// flag : https://restcountries.eu/data/ecu.svg

// Name : Egypt
// Capital : Cairo
// flag : https://restcountries.eu/data/egy.svg

// Name : El Salvador
// Capital : San Salvador
// flag : https://restcountries.eu/data/slv.svg

// Name : Equatorial Guinea
// Capital : Malabo
// flag : https://restcountries.eu/data/gnq.svg

// Name : Eritrea
// Capital : Asmara
// flag : https://restcountries.eu/data/eri.svg

// Name : Estonia
// Capital : Tallinn
// flag : https://restcountries.eu/data/est.svg

// Name : Ethiopia
// Capital : Addis Ababa
// flag : https://restcountries.eu/data/eth.svg

// Name : Falkland Islands (Malvinas)
// Capital : Stanley
// flag : https://restcountries.eu/data/flk.svg

// Name : Faroe Islands
// Capital : Tórshavn
// flag : https://restcountries.eu/data/fro.svg

// Name : Fiji
// Capital : Suva
// flag : https://restcountries.eu/data/fji.svg

// Name : Finland
// Capital : Helsinki
// flag : https://restcountries.eu/data/fin.svg

// Name : France
// Capital : Paris
// flag : https://restcountries.eu/data/fra.svg

// Name : French Guiana
// Capital : Cayenne
// flag : https://restcountries.eu/data/guf.svg

// Name : French Polynesia
// Capital : Papeetē
// flag : https://restcountries.eu/data/pyf.svg

// Name : French Southern Territories
// Capital : Port-aux-Français
// flag : https://restcountries.eu/data/atf.svg

// Name : Gabon
// Capital : Libreville
// flag : https://restcountries.eu/data/gab.svg

// Name : Gambia
// Capital : Banjul
// flag : https://restcountries.eu/data/gmb.svg

// Name : Georgia
// Capital : Tbilisi
// flag : https://restcountries.eu/data/geo.svg

// Name : Germany
// Capital : Berlin
// flag : https://restcountries.eu/data/deu.svg

// Name : Ghana
// Capital : Accra
// flag : https://restcountries.eu/data/gha.svg

// Name : Gibraltar
// Capital : Gibraltar
// flag : https://restcountries.eu/data/gib.svg

// Name : Greece
// Capital : Athens
// flag : https://restcountries.eu/data/grc.svg

// Name : Greenland
// Capital : Nuuk
// flag : https://restcountries.eu/data/grl.svg

// Name : Grenada
// Capital : St. George's
// flag : https://restcountries.eu/data/grd.svg

// Name : Guadeloupe
// Capital : Basse-Terre
// flag : https://restcountries.eu/data/glp.svg

// Name : Guam
// Capital : Hagåtña
// flag : https://restcountries.eu/data/gum.svg

// Name : Guatemala
// Capital : Guatemala City
// flag : https://restcountries.eu/data/gtm.svg

// Name : Guernsey
// Capital : St. Peter Port
// flag : https://restcountries.eu/data/ggy.svg

// Name : Guinea
// Capital : Conakry
// flag : https://restcountries.eu/data/gin.svg

// Name : Guinea-Bissau
// Capital : Bissau
// flag : https://restcountries.eu/data/gnb.svg

// Name : Guyana
// Capital : Georgetown
// flag : https://restcountries.eu/data/guy.svg

// Name : Haiti
// Capital : Port-au-Prince
// flag : https://restcountries.eu/data/hti.svg

// Name : Heard Island and McDonald Islands
// Capital :
// flag : https://restcountries.eu/data/hmd.svg

// Name : Holy See
// Capital : Rome
// flag : https://restcountries.eu/data/vat.svg

// Name : Honduras
// Capital : Tegucigalpa
// flag : https://restcountries.eu/data/hnd.svg

// Name : Hong Kong
// Capital : City of Victoria
// flag : https://restcountries.eu/data/hkg.svg

// Name : Hungary
// Capital : Budapest
// flag : https://restcountries.eu/data/hun.svg

// Name : Iceland
// Capital : Reykjavík
// flag : https://restcountries.eu/data/isl.svg

// Name : India
// Capital : New Delhi
// flag : https://restcountries.eu/data/ind.svg

// Name : Indonesia
// Capital : Jakarta
// flag : https://restcountries.eu/data/idn.svg

// Name : Côte d'Ivoire
// Capital : Yamoussoukro
// flag : https://restcountries.eu/data/civ.svg

// Name : Iran (Islamic Republic of)
// Capital : Tehran
// flag : https://restcountries.eu/data/irn.svg

// Name : Iraq
// Capital : Baghdad
// flag : https://restcountries.eu/data/irq.svg

// Name : Ireland
// Capital : Dublin
// flag : https://restcountries.eu/data/irl.svg

// Name : Isle of Man
// Capital : Douglas
// flag : https://restcountries.eu/data/imn.svg

// Name : Israel
// Capital : Jerusalem
// flag : https://restcountries.eu/data/isr.svg

// Name : Italy
// Capital : Rome
// flag : https://restcountries.eu/data/ita.svg

// Name : Jamaica
// Capital : Kingston
// flag : https://restcountries.eu/data/jam.svg

// Name : Japan
// Capital : Tokyo
// flag : https://restcountries.eu/data/jpn.svg

// Name : Jersey
// Capital : Saint Helier
// flag : https://restcountries.eu/data/jey.svg

// Name : Jordan
// Capital : Amman
// flag : https://restcountries.eu/data/jor.svg

// Name : Kazakhstan
// Capital : Astana
// flag : https://restcountries.eu/data/kaz.svg

// Name : Kenya
// Capital : Nairobi
// flag : https://restcountries.eu/data/ken.svg

// Name : Kiribati
// Capital : South Tarawa
// flag : https://restcountries.eu/data/kir.svg

// Name : Kuwait
// Capital : Kuwait City
// flag : https://restcountries.eu/data/kwt.svg

// Name : Kyrgyzstan
// Capital : Bishkek
// flag : https://restcountries.eu/data/kgz.svg

// Name : Lao People's Democratic Republic
// Capital : Vientiane
// flag : https://restcountries.eu/data/lao.svg

// Name : Latvia
// Capital : Riga
// flag : https://restcountries.eu/data/lva.svg

// Name : Lebanon
// Capital : Beirut
// flag : https://restcountries.eu/data/lbn.svg

// Name : Lesotho
// Capital : Maseru
// flag : https://restcountries.eu/data/lso.svg

// Name : Liberia
// Capital : Monrovia
// flag : https://restcountries.eu/data/lbr.svg

// Name : Libya
// Capital : Tripoli
// flag : https://restcountries.eu/data/lby.svg

// Name : Liechtenstein
// Capital : Vaduz
// flag : https://restcountries.eu/data/lie.svg

// Name : Lithuania
// Capital : Vilnius
// flag : https://restcountries.eu/data/ltu.svg

// Name : Luxembourg
// Capital : Luxembourg
// flag : https://restcountries.eu/data/lux.svg

// Name : Macao
// Capital :
// flag : https://restcountries.eu/data/mac.svg

// Name : Macedonia (the former Yugoslav Republic of)
// Capital : Skopje
// flag : https://restcountries.eu/data/mkd.svg

// Name : Madagascar
// Capital : Antananarivo
// flag : https://restcountries.eu/data/mdg.svg

// Name : Malawi
// Capital : Lilongwe
// flag : https://restcountries.eu/data/mwi.svg

// Name : Malaysia
// Capital : Kuala Lumpur
// flag : https://restcountries.eu/data/mys.svg

// Name : Maldives
// Capital : Malé
// flag : https://restcountries.eu/data/mdv.svg

// Name : Mali
// Capital : Bamako
// flag : https://restcountries.eu/data/mli.svg

// Name : Malta
// Capital : Valletta
// flag : https://restcountries.eu/data/mlt.svg

// Name : Marshall Islands
// Capital : Majuro
// flag : https://restcountries.eu/data/mhl.svg

// Name : Martinique
// Capital : Fort-de-France
// flag : https://restcountries.eu/data/mtq.svg

// Name : Mauritania
// Capital : Nouakchott
// flag : https://restcountries.eu/data/mrt.svg

// Name : Mauritius
// Capital : Port Louis
// flag : https://restcountries.eu/data/mus.svg

// Name : Mayotte
// Capital : Mamoudzou
// flag : https://restcountries.eu/data/myt.svg

// Name : Mexico
// Capital : Mexico City
// flag : https://restcountries.eu/data/mex.svg

// Name : Micronesia (Federated States of)
// Capital : Palikir
// flag : https://restcountries.eu/data/fsm.svg

// Name : Moldova (Republic of)
// Capital : Chișinău
// flag : https://restcountries.eu/data/mda.svg

// Name : Monaco
// Capital : Monaco
// flag : https://restcountries.eu/data/mco.svg

// Name : Mongolia
// Capital : Ulan Bator
// flag : https://restcountries.eu/data/mng.svg

// Name : Montenegro
// Capital : Podgorica
// flag : https://restcountries.eu/data/mne.svg

// Name : Montserrat
// Capital : Plymouth
// flag : https://restcountries.eu/data/msr.svg

// Name : Morocco
// Capital : Rabat
// flag : https://restcountries.eu/data/mar.svg

// Name : Mozambique
// Capital : Maputo
// flag : https://restcountries.eu/data/moz.svg

// Name : Myanmar
// Capital : Naypyidaw
// flag : https://restcountries.eu/data/mmr.svg

// Name : Namibia
// Capital : Windhoek
// flag : https://restcountries.eu/data/nam.svg

// Name : Nauru
// Capital : Yaren
// flag : https://restcountries.eu/data/nru.svg

// Name : Nepal
// Capital : Kathmandu
// flag : https://restcountries.eu/data/npl.svg

// Name : Netherlands
// Capital : Amsterdam
// flag : https://restcountries.eu/data/nld.svg

// Name : New Caledonia
// Capital : Nouméa
// flag : https://restcountries.eu/data/ncl.svg

// Name : New Zealand
// Capital : Wellington
// flag : https://restcountries.eu/data/nzl.svg

// Name : Nicaragua
// Capital : Managua
// flag : https://restcountries.eu/data/nic.svg

// Name : Niger
// Capital : Niamey
// flag : https://restcountries.eu/data/ner.svg

// Name : Nigeria
// Capital : Abuja
// flag : https://restcountries.eu/data/nga.svg

// Name : Niue
// Capital : Alofi
// flag : https://restcountries.eu/data/niu.svg

// Name : Norfolk Island
// Capital : Kingston
// flag : https://restcountries.eu/data/nfk.svg

// Name : Korea (Democratic People's Republic of)
// Capital : Pyongyang
// flag : https://restcountries.eu/data/prk.svg

// Name : Northern Mariana Islands
// Capital : Saipan
// flag : https://restcountries.eu/data/mnp.svg

// Name : Norway
// Capital : Oslo
// flag : https://restcountries.eu/data/nor.svg

// Name : Oman
// Capital : Muscat
// flag : https://restcountries.eu/data/omn.svg

// Name : Pakistan
// Capital : Islamabad
// flag : https://restcountries.eu/data/pak.svg

// Name : Palau
// Capital : Ngerulmud
// flag : https://restcountries.eu/data/plw.svg

// Name : Palestine, State of
// Capital : Ramallah
// flag : https://restcountries.eu/data/pse.svg

// Name : Panama
// Capital : Panama City
// flag : https://restcountries.eu/data/pan.svg

// Name : Papua New Guinea
// Capital : Port Moresby
// flag : https://restcountries.eu/data/png.svg

// Name : Paraguay
// Capital : Asunción
// flag : https://restcountries.eu/data/pry.svg

// Name : Peru
// Capital : Lima
// flag : https://restcountries.eu/data/per.svg

// Name : Philippines
// Capital : Manila
// flag : https://restcountries.eu/data/phl.svg

// Name : Pitcairn
// Capital : Adamstown
// flag : https://restcountries.eu/data/pcn.svg

// Name : Poland
// Capital : Warsaw
// flag : https://restcountries.eu/data/pol.svg

// Name : Portugal
// Capital : Lisbon
// flag : https://restcountries.eu/data/prt.svg

// Name : Puerto Rico
// Capital : San Juan
// flag : https://restcountries.eu/data/pri.svg

// Name : Qatar
// Capital : Doha
// flag : https://restcountries.eu/data/qat.svg

// Name : Republic of Kosovo
// Capital : Pristina
// flag : https://restcountries.eu/data/kos.svg

// Name : Réunion
// Capital : Saint-Denis
// flag : https://restcountries.eu/data/reu.svg

// Name : Romania
// Capital : Bucharest
// flag : https://restcountries.eu/data/rou.svg

// Name : Russian Federation
// Capital : Moscow
// flag : https://restcountries.eu/data/rus.svg

// Name : Rwanda
// Capital : Kigali
// flag : https://restcountries.eu/data/rwa.svg

// Name : Saint Barthélemy
// Capital : Gustavia
// flag : https://restcountries.eu/data/blm.svg

// Name : Saint Helena, Ascension and Tristan da Cunha
// Capital : Jamestown
// flag : https://restcountries.eu/data/shn.svg

// Name : Saint Kitts and Nevis
// Capital : Basseterre
// flag : https://restcountries.eu/data/kna.svg

// Name : Saint Lucia
// Capital : Castries
// flag : https://restcountries.eu/data/lca.svg

// Name : Saint Martin (French part)
// Capital : Marigot
// flag : https://restcountries.eu/data/maf.svg

// Name : Saint Pierre and Miquelon
// Capital : Saint-Pierre
// flag : https://restcountries.eu/data/spm.svg

// Name : Saint Vincent and the Grenadines
// Capital : Kingstown
// flag : https://restcountries.eu/data/vct.svg

// Name : Samoa
// Capital : Apia
// flag : https://restcountries.eu/data/wsm.svg

// Name : San Marino
// Capital : City of San Marino
// flag : https://restcountries.eu/data/smr.svg

// Name : Sao Tome and Principe
// Capital : São Tomé
// flag : https://restcountries.eu/data/stp.svg

// Name : Saudi Arabia
// Capital : Riyadh
// flag : https://restcountries.eu/data/sau.svg

// Name : Senegal
// Capital : Dakar
// flag : https://restcountries.eu/data/sen.svg

// Name : Serbia
// Capital : Belgrade
// flag : https://restcountries.eu/data/srb.svg

// Name : Seychelles
// Capital : Victoria
// flag : https://restcountries.eu/data/syc.svg

// Name : Sierra Leone
// Capital : Freetown
// flag : https://restcountries.eu/data/sle.svg

// Name : Singapore
// Capital : Singapore
// flag : https://restcountries.eu/data/sgp.svg

// Name : Sint Maarten (Dutch part)
// Capital : Philipsburg
// flag : https://restcountries.eu/data/sxm.svg

// Name : Slovakia
// Capital : Bratislava
// flag : https://restcountries.eu/data/svk.svg

// Name : Slovenia
// Capital : Ljubljana
// flag : https://restcountries.eu/data/svn.svg

// Name : Solomon Islands
// Capital : Honiara
// flag : https://restcountries.eu/data/slb.svg

// Name : Somalia
// Capital : Mogadishu
// flag : https://restcountries.eu/data/som.svg

// Name : South Africa
// Capital : Pretoria
// flag : https://restcountries.eu/data/zaf.svg

// Name : South Georgia and the South Sandwich Islands
// Capital : King Edward Point
// flag : https://restcountries.eu/data/sgs.svg

// Name : Korea (Republic of)
// Capital : Seoul
// flag : https://restcountries.eu/data/kor.svg

// Name : South Sudan
// Capital : Juba
// flag : https://restcountries.eu/data/ssd.svg

// Name : Spain
// Capital : Madrid
// flag : https://restcountries.eu/data/esp.svg

// Name : Sri Lanka
// Capital : Colombo
// flag : https://restcountries.eu/data/lka.svg

// Name : Sudan
// Capital : Khartoum
// flag : https://restcountries.eu/data/sdn.svg

// Name : Suriname
// Capital : Paramaribo
// flag : https://restcountries.eu/data/sur.svg

// Name : Svalbard and Jan Mayen
// Capital : Longyearbyen
// flag : https://restcountries.eu/data/sjm.svg

// Name : Swaziland
// Capital : Lobamba
// flag : https://restcountries.eu/data/swz.svg

// Name : Sweden
// Capital : Stockholm
// flag : https://restcountries.eu/data/swe.svg

// Name : Switzerland
// Capital : Bern
// flag : https://restcountries.eu/data/che.svg

// Name : Syrian Arab Republic
// Capital : Damascus
// flag : https://restcountries.eu/data/syr.svg

// Name : Taiwan
// Capital : Taipei
// flag : https://restcountries.eu/data/twn.svg

// Name : Tajikistan
// Capital : Dushanbe
// flag : https://restcountries.eu/data/tjk.svg

// Name : Tanzania, United Republic of
// Capital : Dodoma
// flag : https://restcountries.eu/data/tza.svg

// Name : Thailand
// Capital : Bangkok
// flag : https://restcountries.eu/data/tha.svg

// Name : Timor-Leste
// Capital : Dili
// flag : https://restcountries.eu/data/tls.svg

// Name : Togo
// Capital : Lomé
// flag : https://restcountries.eu/data/tgo.svg

// Name : Tokelau
// Capital : Fakaofo
// flag : https://restcountries.eu/data/tkl.svg

// Name : Tonga
// Capital : Nuku'alofa
// flag : https://restcountries.eu/data/ton.svg

// Name : Trinidad and Tobago
// Capital : Port of Spain
// flag : https://restcountries.eu/data/tto.svg

// Name : Tunisia
// Capital : Tunis
// flag : https://restcountries.eu/data/tun.svg

// Name : Turkey
// Capital : Ankara
// flag : https://restcountries.eu/data/tur.svg

// Name : Turkmenistan
// Capital : Ashgabat
// flag : https://restcountries.eu/data/tkm.svg

// Name : Turks and Caicos Islands
// Capital : Cockburn Town
// flag : https://restcountries.eu/data/tca.svg

// Name : Tuvalu
// Capital : Funafuti
// flag : https://restcountries.eu/data/tuv.svg

// Name : Uganda
// Capital : Kampala
// flag : https://restcountries.eu/data/uga.svg

// Name : Ukraine
// Capital : Kiev
// flag : https://restcountries.eu/data/ukr.svg

// Name : United Arab Emirates
// Capital : Abu Dhabi
// flag : https://restcountries.eu/data/are.svg

// Name : United Kingdom of Great Britain and Northern Ireland
// Capital : London
// flag : https://restcountries.eu/data/gbr.svg

// Name : United States of America
// Capital : Washington, D.C.
// flag : https://restcountries.eu/data/usa.svg

// Name : Uruguay
// Capital : Montevideo
// flag : https://restcountries.eu/data/ury.svg

// Name : Uzbekistan
// Capital : Tashkent
// flag : https://restcountries.eu/data/uzb.svg

// Name : Vanuatu
// Capital : Port Vila
// flag : https://restcountries.eu/data/vut.svg

// Name : Venezuela (Bolivarian Republic of)
// Capital : Caracas
// flag : https://restcountries.eu/data/ven.svg

// Name : Viet Nam
// Capital : Hanoi
// flag : https://restcountries.eu/data/vnm.svg

// Name : Wallis and Futuna
// Capital : Mata-Utu
// flag : https://restcountries.eu/data/wlf.svg

// Name : Western Sahara
// Capital : El Aaiún
// flag : https://restcountries.eu/data/esh.svg

// Name : Yemen
// Capital : Sana'a
// flag : https://restcountries.eu/data/yem.svg

// Name : Zambia
// Capital : Lusaka
// flag : https://restcountries.eu/data/zmb.svg

// Name : Zimbabwe
// Capital : Harare
// flag : https://restcountries.eu/data/zwe.svg
