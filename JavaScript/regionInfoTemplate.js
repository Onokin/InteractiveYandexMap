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
            <br>В районе функционируют:
            <br><b>${data[region.name].stats.preSchool}</b> учреждений дошкольного образования; 
            <br><b>${data[region.name].stats.schoolWithPreSchool}</b> учреждений общего среднего образования, реализующих образовательную программу дошкольного образования;
            <br><b>${data[region.name].stats.school}</b> учреждений общего среднего образования;
            <br><b>${data[region.name].stats.special + data[region.name].stats.specialSchool}</b> учреждений специального образования;
            <br><b>${data[region.name].stats.dopYouth}</b> учреждений дополнительного образования детей и молодежи
        </div>
    </div>`;
}
    // Object.keys(regionInfo).map(key => regionInfo[key]).forEach(regObj => {
    //     divideRegion(data[regObj.name], regObj.name);
    //     
    // });


