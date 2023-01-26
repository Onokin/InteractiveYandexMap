function buttonChecked(selectedType, enabled) {
    if (enabled && selectedType != pickType) {
        ResetPlacemarks(pickRegion);
        //pickType = selectedType;
        ShowPlacemarks(pickRegion);
    }
    else {
        return;
    }
}


function createButton(content, image, offset){
    ButtonLayout = ymaps.templateLayoutFactory.createClass([
        '<div title="{{ data.title }}" style = "margin: 5px" class="check-button ',
        '{% if state.size == "small" %}check-button_large{% endif %}',//check-button_small
        '{% if state.size == "medium" %}check-button_large{% endif %}',//check-button_medium
        '{% if state.size == "large" %}check-button_large{% endif %}',//check-button_large
        '{% if state.selected %} check-button-selected{% endif %}">',
        '<img class="check-button__img" width="20" height="20" src="{{ data.image }}" alt="{{ data.title }}">',
        '<span class="check-button__text">{{ data.content }}</span>',
        '</div>'
    ].join(''));
    let button = new ymaps.control.Button({
        data: {
            image,
            content,
            title: `Отобразить учреждения уровня "${content}"`
        },
        options: {
            layout: ButtonLayout,
            selectOnClick: true,
            position: {left: '40px', top: `${offset + 45}px`}
        }
    });
    return button;
}

function initButtons(){
    let offset = 0;
	Object.keys(schoolType).map(key => schoolType[key]).forEach(type => {
		let aux = createButton(type.title, `icons/placemarks/${type.name}.png`, offset);
		aux.events.add("press", function(){ToggleTypePlaceMarks(type)});
		map.controls.add(aux);
        aux.state.set('selected', type.isEnabled);
        offset += 30;
	});
}

