<script>
$('.select-checkbox').change(function(){
		$('#modal-selected-items-title').html('Are you sure you want to delete the selected item(s)? ');
		$('#modal-selected-items-button').show();
		var title= $(this).attr('data-title');
		var image= $(this).attr('data-image');
		var bannerID= $(this).attr('data-id');
		if(this.checked){
			 $('#modal-selected-items').append("<div id='"+bannerID+"'>*"+'. '+ title +"<img src='"+image+"' height='40px'><input type='hidden' name='id[]' id='input"+bannerID+"' value='"+bannerID+"'><br><br></div>");
		}else{
			$('#modal-selected-items').find('#'+bannerID).remove();
		}
	});
</script>
