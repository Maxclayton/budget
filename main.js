


$('#send-to-sheet').on('submit', function(e) {
 
    e.preventDefault();
    
    var jqxhr = $.ajax({
    
    url: "https://script.google.com/macros/s/AKfycbxxrrsxE8QwAggk0Tefxj1Wc_lEK9U2M-9w113rjfqcFuSNTOw/exec",
    method: "GET",
    dataType: "json",
    data: $('#send-to-sheet').serialize()
    
    }).success(
    
    function(e)
    {
        console.log("hello submit");
    }
    );
    });