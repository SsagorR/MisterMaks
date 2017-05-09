var id = '#dollar1';
var idColor = '#dollar';

$('#dollar, #euro, #pound, #rubl').on('click', function(){
	$(id).hide();
	$(idColor).removeClass('clicked');
	idColor = this;
	$(this).addClass('clicked');
	id = "#" + this.id + 1;
	$(id).css('display', 'inline-flex');
});
