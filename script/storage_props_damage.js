try {
    if (typeof(Storage) !== "undefined" && localStorage.skW) {
        document.forms['props_damage']['skW'].value = Number(localStorage.skW);
        document.forms['props_damage']['skN'].value = Number(localStorage.skN);
        document.forms['props_damage']['skS'].value = Number(localStorage.skS);
        document.forms['props_damage']['skT'].value = Number(localStorage.skT);
        document.forms['props_damage']['ngP'].value = Number(localStorage.ngP);
        document.forms['props_damage']['bfN'].value = Number(localStorage.bfN);
        document.forms['props_damage']['pVDA'].value = Number(localStorage.pVDA);
    } else {
        document.forms['props_damage']['skW'].value = 0;
        document.forms['props_damage']['skN'].value = 0;
        document.forms['props_damage']['skS'].value = 0;
        document.forms['props_damage']['skT'].value = 0;
        document.forms['props_damage']['ngP'].value = 0;
        document.forms['props_damage']['bfN'].value = 0;
        document.forms['props_damage']['pVDA'].value = 0;
    }
} catch (e) {
    console.log(e);
}