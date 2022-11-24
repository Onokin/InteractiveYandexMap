ymaps.ready(function() {
	
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
            })
        ];
	
	var compareListBoxItems = function(a,b){
		
		if(a.data.get('key') == 'jodino'){
			return 1;
		}
		if(b.data.get('key') == 'jodino'){
			return -1;
		}
		
		if(a.data.get('content') < b.data.get('content')){
			return -1;
		}
		if(a.data.get('content') > b.data.get('content')){
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

            build: function() {
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
						ShowBerezenskiy();
						break;
						
					case 'borisovskiy':
						ShowBorisovskiy();
						break;
							
					case 'chervenskiy':
						ShowChervenskiy();
						break;
		
					case 'dzerzhinskiy':
						ShowDzerzhinskiy();
						break;
								
					case 'jodino':
						ShowJodino();
						break;
								
					case 'kletskiy':
						ShowKletskiy();
						break;
								
					case 'kopilskiy':
						ShowKopilskiy();
						break;
								
					case 'krupski':
						ShowKrupski();
						break;
								
					case 'logoyski':
						ShowLogoyski();
						break;
								
					case 'lubanski':
						ShowLubanski();
						break;
								
					case 'minskiy':
						ShowMinskiy();
						break;
								
					case 'molodzechnenskiy':
						ShowMolodzechnenskiy();
						break;
								
					case 'myadzelskiy':
						ShowMyadzelskiy();
						break;
								
					case 'nesvizhskiy':
						ShowNesvizhskiy();
						break;
								
					case 'pukhovichskiy':
						ShowPukhovichskiy();
						break;
								
					case 'slutskiy':
						ShowSlutskiy();
						break;
								
					case 'smolevichskiy':
						ShowSmolevichskiy();
						break;
								
					case 'soligorskiy':
						ShowSoligorskiy();
						break;
								
					case 'starodorozhskiy':
						ShowStarodorozhskiy();
						break;
								
					case 'stolbcovskiy':
						ShowStolbcovskiy();
						break;
								
					case 'uzdenskiy':
						ShowUzdenskiy();
						break;
								
					case 'vileyskiy':
						ShowVileyskiy();
						break;
									
					case 'volozhinskiy':
						ShowVolozhinskiy();
						break;
						
					default:
						alert( "Нет таких значений" );
						break;
				}
				
                map.setCenter(
                    item.data.get('center'),
                    item.data.get('zoom'), 
					{ duration: 400	}
                );
            }
        });
	

	
});
