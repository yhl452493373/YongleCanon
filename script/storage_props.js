
if (typeof(Storage) !== "undefined" && localStorage.minM) {
    document.forms['props']['minM'].value = Number(localStorage.minM);
    document.forms['props']['maxM'].value = Number(localStorage.maxM);
    document.forms['props']['minS'].value = Number(localStorage.minS);
    document.forms['props']['maxS'].value = Number(localStorage.maxS);
    document.forms['props']['meP'].value = Number(localStorage.meP);
    document.forms['props']['maP'].value = Number(localStorage.maP);
    document.forms['props']['shP'].value = Number(localStorage.shP);
    document.forms['props']['binglu'].value = Number(localStorage.binglu);
} else {
    document.forms['props']['minM'].value = 10;
    document.forms['props']['maxM'].value = 20;
    document.forms['props']['minS'].value = 20;
    document.forms['props']['maxS'].value = 40;
    document.forms['props']['meP'].value = 100;
    document.forms['props']['maP'].value = 100;
    document.forms['props']['shP'].value = 100;
    document.forms['props']['binglu'].value = 0;
}