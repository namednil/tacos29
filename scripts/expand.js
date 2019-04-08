function setExpand(id) {
    $(document).ready(function(){
            $("#"+id+" tr:odd").addClass("odd");
            $("#"+id+" tr:not(.odd)").hide();
            $("#"+id+" tr:first-child").show();
            
            $("#"+id+" tr.odd").click(function(){
                $(this).next("tr").toggle();
                $(this).find(".arrow").toggleClass("up");
            });
        });
}
