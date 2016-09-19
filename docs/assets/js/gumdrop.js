
function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}

// Close alerts *deprecated* jquery is no longer included by default
$("document").ready(function(){
	$("#hide").click(function(){	
		$("#theDiv").hide("fast");
	});
	$("#show").click(function(){	
		$("#theDiv").show("normal");
	});
	$("#toggle").click(function(){
		$("#theDiv").toggle(500, function(){null});
	});		
});