function isLannisterSoldier(armorColor, shield) {
    if (armorColor === 'red' && shield === null) {
        console.log(true);
    } else if (armorColor === 'red' && shield === 'lion') {
        console.log(true);
    } else {
        console.log(false);
    }
}


isLannisterSoldier('black', 'jfjfjf');
isLannisterSoldier('red', null);
isLannisterSoldier(123);
isLannisterSoldier('red', 'lion');