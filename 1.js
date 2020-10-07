$(document).ready(function() {
    $("#keyword").keyup(function() {
        var k = $(this).val();
        $("#star-table > tbody > tr").hide();
        var temp = $("#star-table > tbody > tr > td:nth-child(n):contains('" + k + "')");
        $(temp).parent().show();
    })
})