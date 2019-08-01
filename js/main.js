$("#add").on("click", function() {
    let $input = $('input').val();
    $('.main').append(`<div id="xBox"><span id="square">X</span>${$input}</div>`);
    $('input').val("");
})

$(".main").on("click", function() {
    let $listOfText = $('#xBox');
    $listOfText.remove();
});