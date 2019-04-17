$("#flipbook").turn({
    width: 600,
    height: 500,
    autoCenter: true
});

$("#flipbook").bind("turning", function(event, page, view) {
    if (page==1) {
        event.preventDefault(); //will not happen at page 1
    }else{
    }
});