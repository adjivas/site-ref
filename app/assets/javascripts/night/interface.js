



function my_stat()
{

	var min = (view.size.width < view.size.height) ? view.size.width : view.size.height;
	var tabs_height = ((min / 10) < 50) ? (min / 10) : 50;

	min = ((min / 20) < 30) ? (min / 20): 30;
	
	var stat_margin	= min;
	var from		= new Point(stat_margin, stat_margin);
	var to			= new Point(view.size.width - stat_margin , view.size.height - stat_margin - tabs_height - stat_margin);

	var from_curs	= new Point(stat_margin,  view.size.height - stat_margin - tabs_height);
	var to_curs		= new Point(view.size.width - stat_margin , view.size.height - stat_margin);		
	var test = new Histograme(from, to);
	
	the_tabs	= [new Usage_history(from, to), test];

	var tab_title = ["time line", "total use", "Camembert"];

	var tabs = new Tabs(the_tabs, tab_title, from_curs, to_curs);


	view.draw();
}


