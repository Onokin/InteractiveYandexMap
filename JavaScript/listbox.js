function createButton(){
    ButtonLayout = ymaps.templateLayoutFactory.createClass([
        '<div title="{{ data.title }}" class="check-button ',
        '{% if state.size == "small" %}check-button_small{% endif %}',
        '{% if state.size == "medium" %}check-button_medium{% endif %}',
        '{% if state.size == "large" %}check-button_large{% endif %}',
        '{% if state.selected %} check-button-selected{% endif %}">',
        '<img class="check-button__img" width="20" height="20" src="{{ data.image }}" alt="{{ data.title }}">',
        '<span class="check-button__text">{{ data.content }}</span>',
        '</div>'
    ].join(''));
    let button = new ymaps.control.Button({
        data: {
            // Зададим иконку для кнопки.
            image: 'icons/gears.png',
            // Текст на кнопке.
            content: 'Save1',
            // Текст всплывающей подсказки.
            title: 'Click to save the route'
        },
        options: {
            layout: ButtonLayout,
            // Зададим опции кнопки.
            selectOnClick: true,
            // У кнопки будет три состояния: иконка, текст и текст + иконка.
            // Зададим три значения ширины кнопки для всех состояний.
            maxWidth: [600, 400, 500],
            float: 'right', 
            floatIndex: 100,
        }
    });
    console.log(button);
    //map.controls.add(button2, { float: 'right', floatIndex: 100 });
    return button;
}
function initListBox() {
    ymaps.ready(function () {
		//button3.state.set('selected', true);
        // let aux = createButton();
        // map.controls.add(aux);
















        var listBoxItems = [
            new ymaps.control.ListBoxItem({
                data: {
                    key: 'berezinskiy',
                    content: 'Березинский район',
                    center: [29.072636, 53.834761],
                    zoom: 10
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    key: 'borisovskiy',
                    content: 'Борисовский район',
                    center: [28.547355, 54.302751],
                    zoom: 10
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    key: 'chervenskiy',
                    content: 'Червенский район',
                    center: [28.456921, 53.759927],
                    zoom: 10
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    key: 'dzerzhinskiy',
                    content: 'Дзержинский район',
                    center: [27.129131, 53.754721],
                    zoom: 10
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    key: 'jodino',
                    content: 'г. Жодино',
                    center: [28.321572, 54.094370],
                    zoom: 10
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    key: 'kletskiy',
                    content: 'Клецкий район',
                    center: [26.674879, 52.954451],
                    zoom: 10
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    key: 'kopilskiy',
                    content: 'Копыльский район',
                    center: [27.078115, 53.114260],
                    zoom: 10
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    key: 'krupski',
                    content: 'Крупский район',
                    center: [29.169546, 54.331909],
                    zoom: 10
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    key: 'logoyski',
                    content: 'Логойский район',
                    center: [27.826618, 54.360789],
                    zoom: 10
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    key: 'lubanski',
                    content: 'Любанский район',
                    center: [28.101674, 52.720794],
                    zoom: 10
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    key: 'minskiy',
                    content: 'Минский район',
                    center: [27.523320, 54.002003],
                    zoom: 10
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    key: 'molodzechnenskiy',
                    content: 'Молодечненский район',
                    center: [26.898183, 54.243188],
                    zoom: 10
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    key: 'myadzelskiy',
                    content: 'Мядельский район',
                    center: [26.921233, 54.861927],
                    zoom: 10
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    key: 'nesvizhskiy',
                    content: 'Несвижский район',
                    center: [26.69192, 53.21858],
                    zoom: 10
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    key: 'pukhovichskiy',
                    content: 'Пуховичский район',
                    center: [28.029431, 53.482359],
                    zoom: 10
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    key: 'slutskiy',
                    content: 'Слуцкий район',
                    center: [27.606414, 53.078004],
                    zoom: 10
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    key: 'smolevichskiy',
                    content: 'Смолевичский район',
                    center: [28.166406, 53.993751],
                    zoom: 10
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    key: 'soligorskiy',
                    content: 'Солигорский район',
                    center: [27.447628, 52.695799],
                    zoom: 10
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    key: 'starodorozhskiy',
                    content: 'Стародорожский район',
                    center: [28.235073, 53.045443],
                    zoom: 10
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    key: 'stolbcovskiy',
                    content: 'Столбцовский район',
                    center: [26.709680, 53.600667],
                    zoom: 10
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    key: 'uzdenskiy',
                    content: 'Узденский район',
                    center: [27.304302, 53.433592],
                    zoom: 10
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    key: 'vileyskiy',
                    content: 'Вилейский район',
                    center: [27.112691, 54.509978],
                    zoom: 10
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    key: 'volozhinskiy',
                    content: 'Воложинский район',
                    center: [26.643205, 54.014162],
                    zoom: 10
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    key: 'regionSub',
                    content: 'Учреждения областного подчинения',
                    center: [27.525773, 53.89079],
                    zoom: 8
                }
            })
        ];

        var compareListBoxItems = function (a, b) {


            if (a.data.get('key') == 'regionSub') {
                return 1;
            }
            if (b.data.get('key') == 'regionSub') {
                return -1;
            }

            if (a.data.get('key') == 'jodino') {
                return 1;
            }
            if (b.data.get('key') == 'jodino') {
                return -1;
            }

            if (a.data.get('content') < b.data.get('content')) {
                return -1;
            }
            if (a.data.get('content') > b.data.get('content')) {
                return 1;
            }
            return 0;
        }

        listBoxItems.sort(compareListBoxItems);



        ListBoxLayout = ymaps.templateLayoutFactory.createClass(
            "<button id='my-listbox-header' class='btn btn-success dropdown-toggle' data-toggle='dropdown'>" +
            "{{data.title}} <span class='caret'></span>" +
            "</button>" +
            "<ul id='my-listbox'" +
            " class='dropdown-menu' role='menu' aria-labelledby='dropdownMenu'" +
            " style='display: {% if state.expanded %}block{% else %}none{% endif %};'></ul>", {

            build: function () {
                ListBoxLayout.superclass.build.call(this);
                this.childContainerElement = $('#my-listbox').get(0);
                this.events.fire('childcontainerchange', {
                    newChildContainerElement: this.childContainerElement,
                    oldChildContainerElement: null
                });
            },

            getChildContainerElement: function () {
                return this.childContainerElement;
            },

            clear: function () {
                this.events.fire('childcontainerchange', {
                    newChildContainerElement: null,
                    oldChildContainerElement: this.childContainerElement
                });
                this.childContainerElement = null;
                ListBoxLayout.superclass.clear.call(this);
            }
        }),

            ListBoxItemLayout = ymaps.templateLayoutFactory.createClass(
                "<li><a>{{data.content}}</a></li>"
            ),

            listBoxItems,

            listBox = new ymaps.control.ListBox({
                items: listBoxItems,
                data: {
                    title: 'Выберите район'
                },
                options: {
                    layout: ListBoxLayout,
                    itemLayout: ListBoxItemLayout
                }
            });

        listBox.events.add('click', function (e) {
            var item = e.get('target');
            if (item != listBox) {
                switch (item.data.get('key')) {
                    case 'berezinskiy':
                        FocusOnRegion(regionInfo.berezinskiy);
                        break;

                    case 'borisovskiy':
                        FocusOnRegion(regionInfo.borisovskiy);
                        break;

                    case 'chervenskiy':
                        FocusOnRegion(regionInfo.chervenskiy);
                        break;

                    case 'dzerzhinskiy':
                        FocusOnRegion(regionInfo.dzerzhinskiy);
                        break;

                    case 'jodino':
                        FocusOnRegion(regionInfo.jodino);
                        break;

                    case 'kletskiy':
                        FocusOnRegion(regionInfo.kletskiy);
                        break;

                    case 'kopilskiy':
                        FocusOnRegion(regionInfo.kopilskiy);
                        break;

                    case 'krupski':
                        FocusOnRegion(regionInfo.krupski);
                        break;

                    case 'logoyski':
                        FocusOnRegion(regionInfo.logoyski);
                        break;

                    case 'lubanski':
                        FocusOnRegion(regionInfo.lubanski);
                        break;

                    case 'minskiy':
                        FocusOnRegion(regionInfo.minskiy);
                        break;

                    case 'molodzechnenskiy':
                        FocusOnRegion(regionInfo.molodzechnenskiy);
                        break;

                    case 'myadzelskiy':
                        FocusOnRegion(regionInfo.myadzelskiy);
                        break;

                    case 'nesvizhskiy':
                        FocusOnRegion(regionInfo.nesvizhskiy);
                        break;

                    case 'pukhovichskiy':
                        FocusOnRegion(regionInfo.pukhovichskiy);
                        break;

                    case 'slutskiy':
                        FocusOnRegion(regionInfo.slutskiy);
                        break;

                    case 'smolevichskiy':
                        FocusOnRegion(regionInfo.smolevichskiy);
                        break;

                    case 'soligorskiy':
                        FocusOnRegion(regionInfo.soligorskiy);
                        break;

                    case 'starodorozhskiy':
                        FocusOnRegion(regionInfo.starodorozhskiy);
                        break;

                    case 'stolbcovskiy':
                        FocusOnRegion(regionInfo.stolbcovskiy);
                        break;

                    case 'uzdenskiy':
                        FocusOnRegion(regionInfo.uzdenskiy);
                        break;

                    case 'vileyskiy':
                        FocusOnRegion(regionInfo.vileyskiy);
                        break;

                    case 'volozhinskiy':
                        FocusOnRegion(regionInfo.volozhinskiy);
                        break;

                    case 'regionSub':
                        FocusOnRegion(regionInfo.regionSub);
                        break;

                    default:
                        alert("Нет таких значений");
                        break;
                }
                listBox.collapse();
            }
        });

        map.controls.add(listBox, { float: 'left' });
    });
}
