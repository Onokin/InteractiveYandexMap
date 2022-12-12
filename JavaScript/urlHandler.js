const urlParamsInfo = {
    focus_region: 'focus_region',
    chervenskiy: 'borisovskiy'
};

function urlReadParameter(param){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


function urlWriteParameter(param, value){
    const urlParams = new URLSearchParams(window.location.search);
    //if (urlParams.has(param)){
    urlParams.set(param, value);
    history.replaceState(null, null, "?"+urlParams.toString());
}
function urlRemoveParameter(param){
    const urlParams = new URLSearchParams(window.location.search);
    //if (urlParams.has(param)){
    urlParams.delete(param);
    history.replaceState(null, null, "?"+urlParams.toString());
}




