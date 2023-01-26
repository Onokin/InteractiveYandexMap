function numericalDeclension(count){
    let aux = "";

    if(count % 100 < 20 && count % 100 >10)
    {
        aux = "Учреждений";
    }
    else
    {
        switch (count % 10)
        {
            case 1: 
                aux = "Учреждение";
                break;

            case 2:
            case 3:    
            case 4: 
                aux = "Учреждения";
                break;

            case 5:
            case 6:
            case 7:
            case 8:
            case 9:    
            case 0:
                aux = "Учреждений";
                break;

            default: 
                aux = "Учреждение";
                break;
        }
    }
    return aux.toLowerCase();
}

function AddInfo(region) {
    if(region.AddInfo)
    {
        region.AddInfo(region);
        return;
    }
    let info = document.getElementById('info-content');
    info.innerHTML +=
        `<div class="${region.name}" style="display: none;">
        <div style="text-align: center;">
            <a href="${region.mainLink}" target="_blank"><img class="img-info" src="${region.image}"
                    alt="${region.districtName}"></a>
        </div>
        <div style="margin: 20px 10px">
            <h4>${region.fullName}</h4>
            ${region.address},
            <br>тел.: ${region.phone}
            <br><a href="${region.mainLink}" target="_blank">${region.mainLink}</a>
            <br>В ${region.regionalDeclension} районе функционируют:
            <br><b>${data[region.name].stats.preSchool}</b> ${numericalDeclension(data[region.name].stats.preSchool)} дошкольного образования; 
            <br><b>${data[region.name].stats.schoolWithPreSchool}</b> ${numericalDeclension(data[region.name].stats.schoolWithPreSchool)} общего среднего образования, реализующих образовательную программу дошкольного образования;
            <br><b>${data[region.name].stats.school}</b> ${numericalDeclension(data[region.name].stats.school)} общего среднего образования;
            <br><b>${data[region.name].stats.special + data[region.name].stats.specialSchool}</b> ${numericalDeclension(data[region.name].stats.special + data[region.name].stats.specialSchool)} специального образования;
            <br><b>${data[region.name].stats.dopYouth}</b> ${numericalDeclension(data[region.name].stats.dopYouth)} дополнительного образования детей и молодежи
        </div>
    </div>`;
}



