function like(n) {
    var number = parseInt($('#number'+n).text())
    number += 1
    $('#number'+n).text(number)
}
/*
    Jaja, que loco, 7 horas estuve inentando usar
el $(#id).att('innerText'), pero resulta que era
$(#id).text(value)
*/