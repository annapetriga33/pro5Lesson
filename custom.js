function isLannisterSoldier(armorColor, shield) {
    if (armorColor == 'red' && shield === null || shield === 'lion') {
        return true;
    } else {
        return false;
    }
}

isLannisterSoldier ('black', 'jfjfjf') ? console.log('Ланнистер') : console.log('Не ланнистер');
isLannisterSoldier ('red', null) ? console.log('Ланнистер') : console.log('Не ланнистер');
isLannisterSoldier ('black', null) ? console.log('Ланнистер') : console.log('Не ланнистер');
isLannisterSoldier ('red', 'lion') ? console.log('Ланнистер') : console.log('Не ланнистер');


