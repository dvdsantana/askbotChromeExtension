var KMapp = {};

KMapp.loadOptions = function() {
    var url = localStorage['KM.siteURL'];
    
    if (url == undefined) {
        alert('Not config found!');
    } else {
        document.getElementById('url').value = url;
    }
}

KMapp.saveOptions = function() {
    localStorage['KM.siteURL'] = document.getElementById('url').value;
}

// Load previous saved options from local storage.
document.body.onload = KMapp.loadOptions();

document.getElementById('saveURL').onclick = KMapp.saveOptions;