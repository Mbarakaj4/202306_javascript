function editProfile() {
    $(".card-body h1").text("Pepe Ramirez")
}

function addConnections(n, bool) {
    var num = parseInt($(".req").text())
    $(".req").text(num -= 1)
    $("#" + n).css("display", "none")

    if (bool) {
        var num = parseInt($(".req2").text())
        $(".req2").text(num += 1)
    }
}
