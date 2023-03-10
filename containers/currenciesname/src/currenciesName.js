const currenciesName = {
  Afghanistan: 'Afghan afghani',
  Albania: 'Albanian lek',
  Algeria: 'Algerian dinar',
  'American Samoa': 'United State Dollar',
  Andorra: 'Euro',
  Angola: 'Angolan kwanza',
  Anguilla: 'East Caribbean dollar',
  'Antigua and Barbuda': 'East Caribbean dollar',
  Argentina: 'Argentine peso',
  Armenia: 'Armenian dram',
  Aruba: 'Aruban florin',
  Australia: 'Australian dollar',
  Azerbaijan: 'Azerbaijani manat',
  Bahamas: 'Bahamian dollar',
  Bahrain: 'Bahraini dinar',
  Bangladesh: 'Bangladeshi taka',
  Barbados: 'Barbadian dollar',
  Belarus: 'New Belarusian ruble',
  Belgium: 'Euro',
  Belize: 'Belize dollar',
  Benin: 'West African CFA franc',
  Bermuda: 'Bermudian dollar',
  Bhutan: 'Bhutanese ngultrum',
  'Bolivia (Plurinational State of)': 'Bolivian boliviano',
  'Bosnia and Herzegovina': 'Bosnia and Herzegovina convertible mark',
  Botswana: 'Botswana pula',
  Brazil: 'Brazilian real',
  'British Indian Ocean Territory': 'United States dollar',
  'Virgin Islands (British)': 'United States dollar',
  'Virgin Islands (U.S.)': 'United States dollar',
  'Brunei Darussalam': 'Brunei dollar',
  Bulgaria: 'Bulgarian lev',
  'Burkina Faso': 'West African CFA franc',
  Burundi: 'Burundian franc',
  Cambodia: 'Cambodian riel',
  Cameroon: 'Central African CFA franc',
  Canada: 'Canadian dollar',
  'Cabo Verde': 'Cape Verdean escudo',
  'Cayman Islands': 'Cayman Islands dollar',
  'Central African Republic': 'Central African CFA franc',
  Chile: 'Chilean peso',
  China: 'Chinese yuan',
  Colombia: 'Colombian peso',
  Comoros: 'Comorian franc',
  Congo: 'Central African CFA franc',
  'Congo (Democratic Republic of the)': 'Congolese franc',
  'Cook Islands': 'New Zealand dollar',
  'Costa Rica': 'Costa Rican colón',
  Croatia: 'Croatian kuna',
  Cuba: 'Cuban convertible peso',
  Cyprus: 'Euro',
  'Czech Republic': 'Czech koruna',
  Denmark: 'Danish krone',
  Djibouti: 'Djiboutian franc',
  Dominica: 'East Caribbean dollar',
  'Dominican Republic': 'Dominican peso',
  Ecuador: 'United States dollar',
  Egypt: 'Egyptian pound',
  'El Salvador': 'United States dollar',
  'Equatorial Guinea': 'Central African CFA franc',
  Eritrea: 'Eritrean nakfa',
  Estonia: 'Euro',
  Ethiopia: 'Ethiopian birr',
  'Falkland Islands (Malvinas)': 'Falkland Islands pound',
  'Faroe Islands': 'Danish krone',
  Fiji: 'Fijian dollar',
  Finland: 'Euro',
  France: 'Euro',
  'French Guiana': 'Euro',
  'French Polynesia': 'CFP franc',
  Gabon: 'Central African CFA franc',
  Gambia: 'Gambian dalasi',
  Georgia: 'Georgian Lari',
  Germany: 'Euro',
  Ghana: 'Ghanaian cedi',
  Gibraltar: 'Gibraltar pound',
  Greece: 'Euro',
  Greenland: 'Danish krone',
  Grenada: 'East Caribbean dollar',
  Guadeloupe: 'Euro',
  Guam: 'United States dollar',
  Guatemala: 'Guatemalan quetzal',
  Guinea: 'Guinean franc',
  'Guinea-Bissau': 'West African CFA franc',
  Guyana: 'Guyanese dollar',
  Haiti: 'Haitian gourde',
  'Holy See': 'Euro',
  Honduras: 'Honduran lempira',
  'Hong Kong': 'Hong Kong dollar',
  Hungary: 'Hungarian forint',
  Iceland: 'Icelandic króna',
  India: 'Indian rupee',
  Indonesia: 'Indonesian rupiah',
  "Côte d'Ivoire": 'West African CFA franc',
  'Iran (Islamic Republic of)': 'Iranian rial',
  Iraq: 'Iraqi dinar',
  Ireland: 'Euro',
  Israel: 'Israeli new shekel',
  Italy: 'Euro',
  Jamaica: 'Jamaican dollar',
  Japan: 'Japanese yen',
  Jordan: 'Jordanian dinar',
  Kazakhstan: 'Kazakhstani tenge',
  Kenya: 'Kenyan shilling',
  Kiribati: 'Australian dollar',
  Kuwait: 'Kuwaiti dinar',
  Kyrgyzstan: 'Kyrgyzstani som',
  "Lao People's Democratic Republic": 'Lao kip',
  Latvia: 'Euro',
  Lebanon: 'Lebanese pound',
  Lesotho: 'Lesotho loti',
  Liberia: 'Liberian dollar',
  Libya: 'Libyan dinar',
  Liechtenstein: 'Swiss franc',
  Lithuania: 'Euro',
  Luxembourg: 'Euro',
  Macao: 'Macanese pataca',
  'Macedonia (the former Yugoslav Republic of)': 'Macedonian denar',
  Madagascar: 'Malagasy ariary',
  Malawi: 'Malawian kwacha',
  Malaysia: 'Malaysian ringgit',
  Maldives: 'Maldivian rufiyaa',
  Mali: 'West African CFA franc',
  Malta: 'Euro',
  'Marshall Islands': 'United States dollar',
  Martinique: 'Euro',
  Mauritania: 'Mauritanian ouguiya',
  Mauritius: 'Mauritian rupee',
  Mayotte: 'Euro',
  Mexico: 'Mexican peso',
  'Micronesia (Federated States of)': 'United States dollar',
  'Moldova (Republic of)': 'Moldovan leu',
  Monaco: 'Euro',
  Mongolia: 'Mongolian tögrög',
  Montenegro: 'Euro',
  Montserrat: 'East Caribbean dollar',
  Morocco: 'Moroccan dirham',
  Mozambique: 'Mozambican metical',
  Myanmar: 'Burmese kyat',
  Namibia: 'Namibian dollar',
  Nauru: 'Australian dollar',
  Nepal: 'Nepalese rupee',
  Netherlands: 'Euro',
  'New Caledonia': 'CFP franc',
  'New Zealand': 'New Zealand dollar',
  Nicaragua: 'Nicaraguan córdoba',
  Niger: 'West African CFA franc',
  Nigeria: 'Nigerian naira',
  Niue: 'New Zealand dollar',
  'Norfolk Island': 'Australian dollar',
  "Korea (Democratic People's Republic of)": 'North Korean won',
  'Northern Mariana Islands': 'United States dollar',
  Norway: 'Norwegian krone',
  Oman: 'Omani rial',
  Pakistan: 'Pakistani rupee',
  Palau: 'United States dollar',
  'Palestine, State of': 'Israeli new sheqel',
  Panama: 'United States dollar',
  'Papua New Guinea': 'Papua New Guinean kina',
  Paraguay: 'Paraguayan guaraní',
  Peru: 'Peruvian sol',
  Philippines: 'Philippine peso',
  Poland: 'Polish złoty',
  Portugal: 'Euro',
  'Puerto Rico': 'United States dollar',
  Qatar: 'Qatari riyal',
  'Republic of Kosovo': 'Euro',
  'Réunion': 'Euro',
  Romania: 'Romanian leu',
  'Russian Federation': 'Russian ruble',
  Rwanda: 'Rwandan franc',
  'Saint Barthélemy': 'Euro',
  'Saint Helena, Ascension and Tristan da Cunha': 'Saint Helena pound',
  'Saint Kitts and Nevis': 'East Caribbean dollar',
  'Saint Lucia': 'East Caribbean dollar',
  'Saint Martin (French part)': 'Euro',
  'Saint Pierre and Miquelon': 'Euro',
  'Saint Vincent and the Grenadines': 'East Caribbean dollar',
  Samoa: 'Samoan tālā',
  'San Marino': 'Euro',
  'Sao Tome and Principe': 'São Tomé and Príncipe dobra',
  'Saudi Arabia': 'Saudi riyal',
  Senegal: 'West African CFA franc',
  Serbia: 'Serbian dinar',
  Seychelles: 'Seychellois rupee',
  'Sierra Leone': 'Sierra Leonean leone',
  Singapore: 'Singapore dollar',
  Slovakia: 'Euro',
  Slovenia: 'Euro',
  'Solomon Islands': 'Solomon Islands dollar',
  Somalia: 'Somali shilling',
  'South Africa': 'South African rand',
  'Korea (Republic of)': 'South Korean won',
  Spain: 'Euro',
  'Sri Lanka': 'Sri Lankan rupee',
  Sudan: 'Sudanese pound',
  Suriname: 'Surinamese dollar',
  Swaziland: 'Swazi lilangeni',
  Sweden: 'Swedish krona',
  Switzerland: 'Swiss franc',
  'Syrian Arab Republic': 'Syrian pound',
  Taiwan: 'New Taiwan dollar',
  Tajikistan: 'Tajikistani somoni',
  'Tanzania, United Republic of': 'Tanzanian shilling',
  Thailand: 'Thai baht',
  'Timor-Leste': 'United States dollar',
  Togo: 'West African CFA franc',
  Tokelau: 'New Zealand dollar',
  Tonga: 'Tongan paʻanga',
  'Trinidad and Tobago': 'Trinidad and Tobago dollar',
  Tunisia: 'Tunisian dinar',
  Turkey: 'Turkish lira',
  Turkmenistan: 'Turkmenistan manat',
  'Turks and Caicos Islands': 'United States dollar',
  Tuvalu: 'Australian dollar',
  Uganda: 'Ugandan shilling',
  Ukraine: 'Ukrainian hryvnia',
  'United Arab Emirates': 'United Arab Emirates dirham',
  'United Kingdom of Great Britain and Northern Ireland': 'British pound',
  'United States of America': 'United States dollar',
  Uruguay: 'Uruguayan peso',
  Uzbekistan: "Uzbekistani so'm",
  Vanuatu: 'Vanuatu vatu',
  'Venezuela (Bolivarian Republic of)': 'Venezuelan bolívar',
  'Viet Nam': 'Vietnamese đồng',
  'Wallis and Futuna': 'CFP franc',
  Yemen: 'Yemeni rial',
  Zambia: 'Zambian kwacha',
  Zimbabwe: 'Botswana pula'
}

module.exports = {
  currenciesName
}