$(document).ready(function() {

    $('#add-button').click(function() {
        $('ul').append('<li class="item">' + $('input#add-item').val() + '</li>' + '<button class="remove">Remove</button>');
    });

    $('#add-select-button').click(function() {
        $('ul').append('<li class="item">' + $('select#add-item').val() + '</li>' + '<button class="remove">Remove</button>');
    });

    // $('#remove-button').click(function() {
    //     alert("clicked");
    //     $('ul').remove('<li class="item">' - $('input#add-item').val() - '</li>' - '<button class="remove">Remove</button>');



    // });


    $("ul").on("click", ".remove", function() {
        $(this).prev(".item").remove();
        $(this).remove();

    })

});