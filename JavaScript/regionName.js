const regionName = {
    berezinskiy: 'berezinskiy',
    chervenskiy: 'borisovskiy'
};

const regionInfo = {
    "berezinskiy": {
        "name": "berezinskiy",
        "districtName": "Березинский район",
        "mainLink" : "http://berezino.edu.by/",
        "infoTemplateCrutch": "Березинском районе",
        "fullName" : "Управление по образованию, спорту и туризму Березинского районного исполнительного комитета",
        "address" : "223311, г. Березино, ул. Октябрьская, 18",
        "phone": "+375 (17) 156-36-50",
        "image" : "images/berezinskiy.png",
        "image2" : "",
        "center": [
            29.072636,
            53.834761
        ],
        "zoom": 10
    },
    "borisovskiy": {
        "name": "borisovskiy",
        "districtName": "Борисовский район",
        "mainLink" : "https://rooborisov.by/",
        "fullName" : "Управление по образованию Борисовского районного исполнительного комитета",
        "address" : "222520, г. Борисов, ул. Орджоникидзе, 9",
        "phone": "+375 (17) 798-11-70",
        "image" : "images/Борисовский.png",
        "image2" : "",
        "center": [
            28.547355,
            54.302751
        ],
        "zoom": 10
    },
    "chervenskiy": {
        "name": "chervenskiy",
        "districtName": "Червенский район",
        "mainLink" : "http://cherven.edu.by/",
        "fullName" : "Управление по образованию, спорту и туризму Червенского районного исполнительного комитета",
        "address" : "223232, г. Червень, пл.Свободы,1",
        "phone": "+375 (17) 957-50-42",
        "image" : "images/Червенский.png",
        "image2" : "",
        "center": [
            28.456921,
            53.759927
        ],
        "zoom": 10
    },
    "dzerzhinskiy": {
        "name": "dzerzhinskiy",
        "districtName": "Дзержинский район",
        "mainLink" : "https://uo.schoolnet.by/",
        "fullName" : "Управление по образованию, спорту и туризму Дзержинского районного исполнительного комитета",
        "address" : "222720, г. Дзержинск, ул. Кирова, 10",
        "phone": "+375 (17) 167-68-60",
        "image" : "images/Дзержинский.png",
        "image2" : "",
        "center": [
            27.129131,
            53.754721
        ],
        "zoom": 10
    },
    "jodino": {
        "name": "jodino",
        "districtName": "г. Жодино",
        "mainLink" : "https://zhodino-edu.gov.by/",
        "fullName" : "Отдел по образованию, спорту и туризму Жодинского городского исполнительного комитета",
        "address" : "222161, г. Жодино, пер. Молодёжный, 3",
        "phone": "+375 (17) 756-30-76",
        "image" : "images/Жодино.png",
        "image2" : "",
        "center": [
            28.321572,
            54.094370
        ],
        "zoom": 12.5
    },
    "kletskiy": {
        "name": "kletskiy",
        "districtName": "Клецкий район",
        "mainLink" : "https://kletsk-asveta.gov.by/",
        "fullName" : "Управление по образованию, спорту и туризму Клецкого районного исполнительного комитета",
        "address" : "222531, г.Клецк, пл. Маяковского, 10",
        "phone": "+375 (17) 935-06-75",
        "image" : "images/Клецкий.png",
        "image2" : "",
        "center": [
            26.674879,
            52.954451
        ],
        "zoom": 10
    },
    "kopilskiy": {
        "name": "kopilskiy",
        "districtName": "Копыльский район",
        "mainLink" : "http://kopyl.edu.by/",
        "fullName" : "Управление по образованию, спорту и туризму Копыльского районного исполнительного комитета",
        "address" : "223927, г. Копыль, пл. Ленина, 6",
        "phone": "+375 (17) 195-05-87",
        "image" : "images/Копыльский.png",
        "image2" : "",
        "center": [
            27.078115,
            53.114260
        ],
        "zoom": 10
    },
    "krupski": {
        "name": "krupski",
        "districtName": "Крупский район",
        "mainLink" : "https://uost-krupki.obr.by/",
        "fullName" : "Управление по образованию, спорту и туризму Крупского районного исполнительного комитета",
        "address" : "222001, г. Крупки, пер. Вокзальный, 11",
        "phone": "+375 (17) 965-55-43",
        "image" : "images/Крупский.jpg",
        "image2" : "",
        "center": [
            29.169546,
            54.331909
        ],
        "zoom": 10
    },
    "logoyski": {
        "name": "logoyski",
        "districtName": "Логойский район",
        "mainLink" : "https://logoysk-edu.gov.by/",
        "fullName" : "Управление по образованию, спорту и туризму Логойского районного исполнительного комитета",
        "address" : "223141, г. Логойск, ул.Советская, 15",
        "phone": "+375 (17) 745-58-51",
        "image" : "images/Логойский.png",
        "image2" : "",
        "center": [
            27.826618,
            54.360789
        ],
        "zoom": 10
    },
    "lubanski": {
        "name": "lubanski",
        "districtName": "Любанский район",
        "mainLink" : "http://luban.edu.by/",
        "fullName" : "Управление по образованию, спорту и туризму Любанского районного исполнительного комитета",
        "address" : "223812, г. Любань, ул. Первомайская, 24а",
        "phone": "+375 (17) 946-45-50",
        "image" : "images/Любанский.png",
        "image2" : "",
        "center": [
            28.101674,
            52.720794
        ],
        "zoom": 10
    },
    "minskiy": {
        "name": "minskiy",
        "districtName": "Минский район",
        "mainLink" : "https://minsk-roo.gov.by/",
        "fullName" : "Управление по образованию Минского районного исполнительного комитета",
        "address" : "220073, г. Минск, ул. Ольшевского, 8",
        "phone": "+375 (17) 378-40-72",
        "image" : "images/Минский.png",
        "image2" : "",
        "center": [
            27.523320,
            54.002003
        ],
        "zoom": 10
    },
    "minsk": {
        "name": "minsk",
        "districtName": "Минск",
        "mainLink" : "https://do.minsk.edu.by/do/files/map/index.html",
    },
    "molodzechnenskiy": {
        "name": "molodzechnenskiy",
        "districtName": "Молодечненский район",
        "mainLink" : "https://uomrik.gov.by/",
        "fullName" : "Управление по образованию Молодечненского районного исполнительного комитета",
        "address" : "222310, г. Молодечно, ул. Виленская, 6",
        "phone": "+375 (17) 677-04-22",
        "image" : "images/Молодечненский.png",
        "image2" : "",
        "center": [
            26.898183,
            54.243188
        ],
        "zoom": 10
    },
    "myadzelskiy": {
        "name": "myadzelskiy",
        "districtName": "Мядельский район",
        "mainLink" : "http://myadel.edu.by/",
        "fullName" : "Управление по образованию, спорту и туризму Мядельского районного исполнительного комитета",
        "address" : "222397, г. Мядель, пл. Шаранговича, 2",
        "phone": "+375 (17) 974-08-10",
        "image" : "images/Мядельский.png",
        "image2" : "",
        "center": [
            26.921233,
            54.861927
        ],
        "zoom": 10
    },
    "nesvizhskiy": {
        "name": "nesvizhskiy",
        "districtName": "Несвижский район",
        "mainLink" : "http://несвиж-асвета.бел/",
        "fullName" : "Управление по образованию, спорту и туризму Несвижского районного исполнительного комитета",
        "address" : "222603, г. Несвиж, ул. Советская, 1",
        "phone": "+375 (17) 705-17-53",
        "image" : "images/Несвижский.png",
        "image2" : "",
        "center": [
            26.69192,
            53.21858
        ],
        "zoom": 10
    },
    "pukhovichskiy": {
        "name": "pukhovichskiy",
        "districtName": "Пуховичский район",
        "mainLink" : "http://obrazovanie-pukhovichi.by/",
        "fullName" : "Управление по образованию, спорту и туризму Пуховичского районного исполнительного комитета",
        "address" : "222811, г. Марьина Горка, ул. Ленинская, 47",
        "phone": "+375 (17) 134-57-86",
        "image" : "images/Пуховичский.jpg",
        "image2" : "",
        "center": [
            28.029431,
            53.482359
        ],
        "zoom": 10
    },
    "slutskiy": {
        "name": "slutskiy",
        "districtName": "Слуцкий район",
        "mainLink" : "https://slutsk-vedy.gov.by/",
        "fullName" : "Управление по образованию Слуцкого районного исполнительного комитета",
        "address" : "223610, г. Слуцк, ул. Ленина, 189",
        "phone": "+375 (17) 957-50-42",
        "image" : "images/Слуцкий.png",
        "image2" : "",
        "center": [
            27.606414,
            53.078004
        ],
        "zoom": 10
    },
    "smolevichskiy": {
        "name": "smolevichskiy",
        "districtName": "Смолевичский район",
        "mainLink" : "https://smoledu.by/",
        "fullName" : "Управление по образованию, спорту и туризму Смолевичского районного исполнительного комитета",
        "address" : "222201, г. Смолевичи, ул. Советская,119",
        "phone": "+375 (17) 762-79-61",
        "image" : "images/Смолевичский.png",
        "image2" : "",
        "center": [
            28.166406,
            53.993751
        ],
        "zoom": 10
    },
    "soligorskiy": {
        "name": "soligorskiy",
        "districtName": "Солигорский район",
        "mainLink" : "http://edusoligorsk.by/",
        "fullName" : "Управление по образованию Солигорского районного исполнительного комитета",
        "address" : "223710, г. Солигорск, ул. Козлова, 35",
        "phone": "+375 (17) 423-77-91",
        "image" : "images/Солигорский.png",
        "image2" : "",
        "center": [
            27.447628,
            52.695799
        ],
        "zoom": 10
    },
    "starodorozhskiy": {
        "name": "starodorozhskiy",
        "districtName": "Стародорожский район",
        "mainLink" : "https://starye-dorogi.by/",
        "fullName" : "Управление по образованию, спорту и туризму Стародорожского районного исполнительного комитета",
        "address" : "222932, г. Старые Дороги, ул. Пролетарская, 38",
        "phone": "+375 (17) 925-59-97",
        "image" : "images/Стародорожский.png",
        "image2" : "",
        "center": [
            28.235073,
            53.045443
        ],
        "zoom": 10
    },
    "stolbcovskiy": {
        "name": "stolbcovskiy",
        "districtName": "Столбцовский район",
        "mainLink" : "https://stolbtsy-edu.gov.by/",
        "fullName" : "Управление по образованию, спорту и туризму Столбцовского районного исполнительного комитета",
        "address" : "222666, г. Столбцы, ул. Социалистическая, 17",
        "phone": "+375 (17) 177-41-42",
        "image" : "images/Столбцовский.png",
        "image2" : "",
        "center": [
            26.709680,
            53.600667
        ],
        "zoom": 10
    },
    "uzdenskiy": {
        "name": "uzdenskiy",
        "districtName": "Узденский район",
        "mainLink" : "https://uzda-asveta.gov.by/",
        "fullName" : "Управление по образованию, спорту и туризму Узденского районного исполнительного комитета",
        "address" : "223411, г. Узда, ул. Советская, 22",
        "phone": "+375 (17) 186-53-88",
        "image" : "images/Узденский.png",
        "image2" : "",
        "center": [
            27.304302,
            53.433592
        ],
        "zoom": 10
    },
    "vileyskiy": {
        "name": "vileyskiy",
        "districtName": "Вилейский район",
        "mainLink" : "https://vileyka-edu.gov.by/",
        "fullName" : "Управление по образованию, спорту и туризму Вилейского районного исполнительного комитета",
        "address" : "222410, г. Вилейка, ул. Партизанская, 44",
        "phone": "+375 (17) 713-18-84",
        "image" : "images/Вилейский.jpg",
        "image2" : "",
        "center": [
            27.112691,
            54.509978
        ],
        "zoom": 10
    },
    "volozhinskiy": {
        "name": "volozhinskiy",
        "districtName": "Воложинский район",
        "mainLink" : "https://volozhin-edu.gov.by/",
        "fullName" : "Управление по образованию, спорту и туризму Воложинского районного исполнительного комитета",
        "address" : "222357, г. Воложин, ул. Партизанская, 15",
        "phone": "+375 (17) 726-89-75",
        "image" : "images/Воложинский.png",
        "image2" : "",
        "center": [
            26.643205,
            54.014162
        ],
        "zoom": 10
    },
    "regionSub": {
        "name": "regionSub",
        "districtName": "Учреждения областного подчинения",
        "mainLink" : "https://uomoik.gov.by",
        "fullName" : "Главное управление по образованию Минского областного исполнительного комитета",
        "address" : "220030, г. Минск, ул. Энгельса, 4",
        "phone": "+375 (17) 517-34-82",
        "image" : "images/oblast.png",
        "image2" : "images/oblast2.png",
        "center": [
            27.525773,
            53.89079
        ],
        "zoom": 8
    }
};
