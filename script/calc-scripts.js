
var Str = 0;
var StrAdd = 0;
var Dex = 0;
var DexAdd = 0;
var Ing = 0;
var IngAdd = 0;
var Spi = 0;
var SpiAdd = 0;
var Sta = 0;
var StaAdd = 0;
var MaxHP = 0;
var MaxHPAdd = 0;
var MaxMP = 0;
var MaxMPAdd = 0;

var MinMeleeDamage = 0;
var MaxMeleeDamage = 0;
var MinShotDamage = 0;
var MaxShotDamage = 0;
var MeleePower = 0;
var MeleePowerAdd = 0;
var MagicPower = 0;
var MagicPowerAdd = 0;
var ShotPower = 0;
var ShotPowerAdd = 0;
var binglu = 0;
var BaseMin = 0;
var BaseMax = 0;
var BaseMelee = 0;
var BaseMagic = 0;
var BaseShot = 0;
var SkillDamageProbAdd = 0;
var SkillDamageAdd = 0;
var NeigongPropertyProbAdd = 0;
var NeigongBuffProbAdd = 0;
var PhysicVaDamageProbAdd = 0;
var MagicVaDamageProbAdd = 0;

var HurtCount = 2;

function calc() {
    MinMeleeDamage = Number(document.forms['props']['minM'].value);
    MaxMeleeDamage = Number(document.forms['props']['maxM'].value);
    MinShotDamage = Number(document.forms['props']['minS'].value);
    MaxShotDamage = Number(document.forms['props']['maxS'].value);
    MeleePower = Number(document.forms['props']['meP'].value);
    MagicPower = Number(document.forms['props']['maP'].value);
    ShotPower = Number(document.forms['props']['shP'].value);
    binglu = Number(document.forms['props']['binglu'].value);

    for (i = 0; i < ids.length; i++) {
        var idsi = ids[i], TAG_FORMULA_GET_DMG_TYPE = tags[i];
        if (typeof argvs != 'undefined') {
            argv = argvs[i];
        }
        for (j = 0; j < idsi.length; j++) {
            var val = eval(args[i][j]);
            if (!isNaN(val)) {
                val = Math.floor(val);
            }
            document.getElementById(idsi[j]).innerHTML = val;
        }
    }

    if (typeof(Storage) !== "undefined") {
        localStorage.minM = MinMeleeDamage;
        localStorage.maxM = MaxMeleeDamage;
        localStorage.minS = MinShotDamage;
        localStorage.maxS = MaxShotDamage;
        localStorage.meP = MeleePower;
        localStorage.maP = MagicPower;
        localStorage.shP = ShotPower;
        localStorage.binglu = binglu;
    }
}

function calc_damage_base(base, skP, sk, ngP, bfP, vaP, bl, c) {
    var d = Math.floor(base * (1 + skP))
    d = Math.floor((d + sk * c) * (1 + ngP))
    d = Math.floor(d * (1 + bfP))
    d = Math.floor(d * (1 + vaP))
    d = Math.floor((d + bl) / c);
    return d
}

function calc_damage() {
    try{
        var skW = Number(document.forms['props_damage']['skW'].value);
        var skN = Number(document.forms['props_damage']['skN'].value);
        var skS = Number(document.forms['props_damage']['skS'].value);
        var skT = Number(document.forms['props_damage']['skT'].value);
        var ngP = Number(document.forms['props_damage']['ngP'].value);
        var bfN = Number(document.forms['props_damage']['bfN'].value);
        var pVDA = Number(document.forms['props_damage']['pVDA'].value);
        SkillDamageProbAdd = skW / 10.0 + skN / 10.0 + skS / 100.0;
        SkillDamageAdd = skT;
        NeigongPropertyProbAdd = ngP / 100.0;
        NeigongBuffProbAdd = bfN / 100.0;
        PhysicVaDamageProbAdd = pVDA / 100.0;
        binglu = Number(document.forms['props']['binglu'].value);
        var VaDamageProbAdd = PhysicVaDamageProbAdd + 1;
        var BaseDamage = eval(BaseMin) + eval(BaseMelee) + eval(BaseMagic) + eval(BaseShot);
        var damageMin = calc_damage_base(BaseDamage, SkillDamageProbAdd, SkillDamageAdd, NeigongPropertyProbAdd, NeigongBuffProbAdd, 0, binglu, eval(HurtCount))
        var damageVaMin = calc_damage_base(BaseDamage, SkillDamageProbAdd, SkillDamageAdd, NeigongPropertyProbAdd, NeigongBuffProbAdd, VaDamageProbAdd, binglu, eval(HurtCount))
        BaseDamage = eval(BaseMax) + eval(BaseMelee) + eval(BaseMagic) + eval(BaseShot);
        var damageMax = calc_damage_base(BaseDamage, SkillDamageProbAdd, SkillDamageAdd, NeigongPropertyProbAdd, NeigongBuffProbAdd, 0, binglu, eval(HurtCount))
        var damageVaMax = calc_damage_base(BaseDamage, SkillDamageProbAdd, SkillDamageAdd, NeigongPropertyProbAdd, NeigongBuffProbAdd, VaDamageProbAdd, binglu, eval(HurtCount))
        document.getElementById("damage_min").innerHTML = damageMin;
        document.getElementById("damage_max").innerHTML = damageMax;
        document.getElementById("damage_va_min").innerHTML = damageVaMin;
        document.getElementById("damage_va_max").innerHTML = damageVaMax;

        if (typeof(Storage) !== "undefined") {
            localStorage.skW = skW;
            localStorage.skN = skN;
            localStorage.skS = skS;
            localStorage.skT = skT;
            localStorage.ngP = ngP;
            localStorage.bfN = bfN;
            localStorage.pVDA = pVDA;
        }
    }catch (e) {
        console.log(e);
    }
}

function calc_jm() {
    var YangLevel = Number(document.forms['props_jm']['yaL'].value);
    var YinLevel = Number(document.forms['props_jm']['yiL'].value);
    var TaijiLevel = Number(document.forms['props_jm']['tjL'].value);

    for (i = 0; i < ids.length; i++) {
        var argv = argvs[i];
        var val = eval(args[i]);
        if (!isNaN(val)) {
            val = Math.floor(val);
        }
        document.getElementById(ids[i]).innerHTML = val;
    }

    if (typeof(Storage) !== "undefined") {
        localStorage.yaL = YangLevel;
        localStorage.yiL = YinLevel;
        localStorage.tjL = TaijiLevel;
    }
}

function mean(a, b) {
    return Math.floor((Number(a) + Number(b)) / 2);
}

function sel_to_disp(selid, tgtid, len) {
    var s = document.getElementById(selid).value;
    for (var i = 0; i < len; i++) {
        document.getElementById(tgtid+i).style.display = 'none';
    }
    document.getElementById(tgtid+s).style.display = 'table';
}