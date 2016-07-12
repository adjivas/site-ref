function	find_begin(tab_val, val_begin)
{
	var i = 0;

	while (tab_val[i] < val_begin)
		i++;

	return (i);
}

function	get_max_of_array(tab_value)
{

	var max = 10;

	for(var x = 0; x < tab_value.length; x++)
	{
		if (tab_value[x] >= max)
			max = tab_value[x];
	}
	return (max);
}

function	update_sum()
{

	this.val_max = 10;

	var max_tmp;

	for (var x in this.group_uniteSum_value)
	{

		max_tmp = get_max_of_array(this.group_uniteSum_value[x]);

		if (this.val_max < max_tmp)
		{
			this.val_max = max_tmp;
		}
	}
	// console.log(this);
	draw_the_grid(this.val_min, this.val_max, this.nb_line, this.group_grid, this.from, new Point(this.to.x, this.from.y + this.coef_line * (this.to.y - this.from.y)));
	this.min_lvl = make_time_grid(this.from, this.to, this.time_begin, this.time_end, this.tab_mult, this.group_grid, this.coef_line, this.coef_time);

//	add_vertical_grid_line(from_l, to_l, from_t, to_t, begin, end, tab_obj)
//	this.
//	param_grid(this);
}

function	switch_visible_the_line()
{
	var print = true;

	for (var x in this.group_path)
	{
		if (this.group_path[x].visible == true)
		{
			print = false;

			this.group_path[x].visible = false;
		}
		else
		{
			this.group_path[x].visible = true;

		}

	}
	// console.log("yooooooooo=====>>>>>>>>>>>>>>>>>>>>>>>>>>> --->:"+print);
	// console.log(this.curseur_time_unite.curs_circle_beg.visible);
	if (print && !this.curseur_time_unite.curs_circle_beg.visible)
	{
		// console.log("NOOOOO");
		this.draw_the_line();
	}
		// console.log("lasxt:"+last);

	view.draw();
}

function 	get_line_path(from, to, min, max, tab_value, style, elem_id, nb_curve, tab_pos)
{
	/*
// console.log(this.time_part);
// console.log(this.time_descriptor);
// console.log(this.time_unite);

var indice = get_indice(this.time_descriptor, this.time_unite);

	*/
	 	var max_val = max;
		var delta_x = (to.x - from.x) / (tab_value.length - 2);
		var delta_y = (to.y - from.y) / max_val;
		var path = new Path();

		// path.style = style;
	    path.strokeColor = new Color({ hue: (elem_id / all_elem.length * 360), saturation: 0.7, brightness:0.8 , alpha:0.7});
	    path.strokeWidth = 4;
	    // path.fillColor = new Color({ hue: (elem_id / all_elem.length * 360), saturation: 0.7, brightness:0.8 , alpha:0.2});

		path.add(new Point(from.x, to.y - delta_y * tab_value[0]));
		for (var x in tab_pos)
		{
			path.add(new Point(tab_pos[x].pos, to.y - delta_y * tab_value[x]));

		}
		path.add(new Point(to.x, to.y - delta_y * tab_value[tab_value.length - 1]));

		// for (var x = 0; x < tab_value.length - 1; x++)
		// {
		// 	path.add(new Point(from.x + (x) * delta_x, to.y - delta_y * tab_value[x]));
		// }
		// path.simplify();
		// console.log(nb_curve);
		if (nb_curve == 0)
		{
			path.smooth();
		}
		// console.log("youpi");


		return (path);
}

function 	get_rect_path(from, to, min, max, tab_value, style, elem_id, nb_curve, tab_pos)
{
	 	var max_val = max;
		var delta_x = (to.x - from.x) / (tab_value.length - 2);
		var delta_y = (to.y - from.y) / max_val;
		var path = new Path();

		// path.style = style;
	    path.strokeColor = new Color({ hue: (elem_id / all_elem.length * 360), saturation: 0.7, brightness:0.4 , alpha:1});
	    path.strokeWidth = 4;
	    path.fillColor = new Color({ hue: (elem_id / all_elem.length * 360), saturation: 0.7, brightness:0.8 , alpha:0.1});

// 	    console.log("tab_pos:");
// 	    console.log(tab_pos);

// 	    console.log("tab_value:");
// 	    console.log(tab_value);
// //*
		if (nb_curve == 2)
		{
	    	path.add(new Point(from.x, to.y - delta_y * tab_value[0]));
	   		for (var x in tab_pos)
	    	{
	    		path.add(new Point(tab_pos[x].pos, to.y - delta_y * tab_value[x]));

	    	}
	    	path.add(new Point(to.x, to.y - delta_y * tab_value[tab_value.length - 1]));
	    }
	    else
	   	{
	   		path.add(new Point(from.x, to.y - delta_y * tab_value[0]));
	   		for (var x in tab_pos)
	    	{
	    		path.add(new Point(tab_pos[x].pos, to.y - delta_y * tab_value[x]));
/*	    		console.log(x);
	    		console.log(typeof(x));
	    		console.warn(tab_pos[parseInt(x)]);*/
	    		if (tab_pos[parseInt(x) + 1] != undefined)
	    		{
	    			// console.error("ADD");
	    			path.add(new Point(tab_pos[parseInt(x) + 1].pos, to.y - delta_y * tab_value[x]));

	    		}

	    	}
	    	path.add(new Point(to.x, to.y - delta_y * tab_value[tab_value.length - 1]));
	   	}	
//*/

/*
		for (var x = 0; x < tab_value.length - 1; x++)
		{
			path.add(new Point(from.x + (x) * delta_x, to.y - delta_y * tab_value[x]));
			if (x < tab_value.length - 2)
			{
				path.add(new Point(from.x + (x + 1) * (delta_x),to.y - delta_y * tab_value[x]));
			}
		}
*/

		path.add(new Point(to.x, to.y));
		path.add(new Point(from.x, to.y));
		path.closed = true;

		// path.smooth({CatmullRom: 1});

		return (path);
}

function	erase_curve()
{
	for (var x in this.group_path)
	{
		this.group_path[x].remove();
	}
}

function	actual_activ_elem()
{
	

	// group_gross_value[elem_id]
//	var elem_activ = []; 
	var delta_x = this.to.x - this.from.x;
	var delta_y = this.to.y - this.from.y;

	var from = new Point(this.from.x, this.from.y + delta_y * this.coef_time);
	var to = new Point(this.to.x, this.from.y + delta_y * this.coef_curs2 - this.margin);

	delta_x = to.x - from.x;
	delta_y = to.y - from.y;

	var path = new Path.Rectangle(from, to);
	// path.strokeColor = 'blue';
	path.strokeWidth = 3;

	var img_width = (delta_x < delta_y) ? delta_x : delta_y;
	img_width = (img_width < (delta_x / this.activ_elem.length)) ? img_width : (delta_x / this.activ_elem.length); 

	var marge = img_width / 20;
	var first = new Point(from.x + marge, from.y);
	var next = new Point(from.x + img_width - marge, to.y);



	this.activ_elem = [];
	var nb_elem = 0;

	this.group_logo_elem.removeChildren();
	for (var elem_id in all_elem)
	{
		if (this.group_gross_value[elem_id] != undefined && this.group_gross_value[parseInt(elem_id)].length > 0)
		{
			// console.log("elem 	:"+elem_id+"	is activ");
			this.activ_elem[nb_elem] = parseInt(elem_id);
			nb_elem++;
		}
	}

var the_color;

	for (var x in this.activ_elem)
	{
		the_color = new Color({hue: (parseInt(this.activ_elem[x]) / all_elem.length) * 360 , saturation : 0.7, brightness: 0.7});
		// console.warn(the_color);
		make_background(this.group_logo_elem, first, next, this.activ_elem[x], false, the_color);
		first.x += img_width;
		next.x += img_width;
		//	
		//this.activ_elem[x];
	}
	//console.log(this.activ_elem);
}

//	definie un path pour toute les valeur defini dans le group_
function	draw_the_line()
{
	this.update_sum();
	// console.log("max:"+this.val_max);

	//	on efface ce qui a ete fait avant (avec les path)
	//	on redefini tout les path
	this.erase_curve();
	
//	var indice = get_indice(this.time_descriptor, this.time_unite);

	if (this.min_lvl != undefined)
	{
		var tab_position = this.time_part[this.min_lvl];
		this.time_unite = this.time_descriptor[this.min_lvl].unite;
	}
	else
	{
	 	var tab_position = this.time_part[getab_post_indice(this.time_descriptor, this.time_unite)];		
	}
/*
	// console.log(this.time_part);
	// console.log(this.time_descriptor);
	// console.log(this.time_unite);

	var indice = get_indice(this.time_descriptor, this.time_unite);

*/
	for (var x in this.group_uniteSum_value)
	{
		if (this.group_uniteSum_value[x] != undefined && this.group_uniteSum_value[x].length > 0)
		{
			if (this.nb_curve >= 2)
			{
				this.group_path[x] = get_rect_path(this.from, new Point(this.to.x, this.from.y + this.coef_line * (this.to.y - this.from.y)), this.val_min, this.val_max, this.group_uniteSum_value[x], 0, x, this.nb_curve, tab_position);// ici on fait le path
			}
			else
			{
				this.group_path[x] = get_line_path(this.from, new Point(this.to.x, this.from.y + this.coef_line * (this.to.y - this.from.y)), this.val_min, this.val_max, this.group_uniteSum_value[x], 0, x, this.nb_curve, tab_position);// ici on fait le path
			}
		}
	}

	//	On dessinne les group d'image active
	// console.log(this);
	this.actual_activ_elem();
	view.draw();
}

function	uptadte_uniteSum()
{
	// ici on pourrai metre a jour le maximum
	for (var x in this.group_gross_value)
	{
		if (this.group_gross_value[x].length > 0)
		{
			this.calculate_uniteSum(x);
		}
	}
	this.draw_the_line();
}

function	actualise_time_interval(target, val1, val2)
{
	target.time_begin = val1;
	target.time_end = val2;

	target.uptadte_uniteSum();
}

function	actualise_time_unite(target, val1, val2)
{
	// console.log(this);	
	// console.log(this.unite);	
	target.time_unite = val2 - val1;

	// console.log("don't forgetme!!!");
	// var val = target.time_unite;
	// var minute = 1000 * 60;
	// var heure = minute * 60;
	// var jour = heure * 24;

	//	
	target.uptadte_uniteSum();
}

function	switch_curv()
{
	// console.log("yolo");
	this.nb_curve = (this.nb_curve + 1) % 4;
	this.draw_the_line();
}

function	switch_visible(group)
{
		for (var x in group.children)
		{
			if (group.children[x].visible == true)
				group.children[x].visible = false;
			else
				group.children[x].visible = true;
		}
		// console.log(this.group_grid.isEmpty);
		// this.draw_the_line();

		view.draw();
}

function switch_draw_histo()
{
		// il faudrai
		switch_visible(this.group_selector);
		switch_visible(this.group_grid);
		switch_visible(this.group_logo_elem);
		this.switch_visible_the_line();
		this.curseur_time_unite.switch_draw();
		this.curseur_time_interval.switch_draw();
		// switch_visible(this.group_grid);
}


//	fonctionne sur le temps brute : this.group_brute_value
function switch_activ_elem(elem_id)
{
	// la on va ou bien cree ou bien detruire
	// console.log(this.group_gross_value[elem_id]);
	if (this.group_gross_value[elem_id] == undefined || this.group_gross_value[elem_id].length == 0)
	{
		// on l'active donc on le remplis de valeur
		// console.log("update the val");
		this.fill_gross_value(elem_id);
		// this.update_unitetime_calcul(elem_id);
	}
	else
	{
		this.group_gross_value[elem_id] = [];
		this.group_uniteSum_value[elem_id] = [];
		// on le suprime
	}
		// this.draw_the_line();
}


function fill_gross_value_to_histo(elem_id)
{
	this.group_gross_value[elem_id] = [];
	var lst_phrase = all_elem_stat[elem_id].lst_senstenceId;//['lst_senstenceId'];
	// var i = 0;
// console.log(all_elem);
// console.log(all_elem_stat);
// console.log(all_phrase);

	for (var x in lst_phrase)
	{
		// console.warn(this);
		// console.log(lst_phrase);
		// console.log("x:"+x);
		// console.log("nb_phrase:"+lst_phrase[x]);
		// console.log(all_phrase[lst_phrase[x]]);
		// console.log(all_phrase);
		this.group_gross_value[elem_id][x] = all_phrase[lst_phrase[x]].time;
		// i++;
	}
	this.group_gross_value[elem_id].sort();

	this.calculate_uniteSum(elem_id);

	// console.log(this.group_gross_value);
	// return (lst_time)
}


function	get_indice(tab, val)
{

	for (var x in tab)
	{
		if (tab[x].unite == val)
		{
			return(x);
		}
	}
	return(undefined);
}

//	la on fait plus un truc ou on pre calcul la suite
function calculate_uniteSum(elem_id)
{
	/*
		ici on veux recup de la databordel
	*/
		this.group_uniteSum_value[elem_id] = [];
		// var time_unite = this.time_unite;// si non on peu metre que le resu.ta est defini en fonciton d'une variable globale
		// this.group_gross_value[elem_id] = 0;//this.//get.group_gross_value(elem_id);
		// var time_interval = 
		this.time_part = get_time_part(this.tab_mult, this.from, this.to, this.time_begin, this.time_end, this);
		// console.log(this.time_part);
		// console.log(this.time_descriptor);
		// console.log(this.time_unite);


		if (this.min_lvl != undefined)
		{
			// console.log("Minlvl")
			var indice = this.min_lvl;//get_indice(this.time_descriptor, this.time_unite);
		}
		else
		{
			// console.log(" 	->...")
			var indice = get_indice(this.time_descriptor, this.time_unite);
		}
		// console.log("Indie 	:"+indice);
		// console.log("indice: 	"+indice);
		//	il faut recupere le decoupe; 

		// console.log("size: 		"+(this.time_part[indice].length));
		// console.log(this.time_part[indice][0].time);

		var tab_length = this.time_part[indice].length;//Math.ceil((this.time_end - this.time_begin) / this.time_unite);
		var next_time = this.time_part[indice][0].time;
		var x =find_begin(this.group_gross_value[elem_id], this.time_begin);


		for(var i = 0; i < tab_length + 1; i++)
		{
			this.group_uniteSum_value[elem_id][i] = 0;
			while(this.group_gross_value[elem_id][x] < next_time && this.group_gross_value[elem_id][x] <= this.time_end)
			{
				this.group_uniteSum_value[elem_id][i]++;
				x++;
			}
			next_time += this.time_unite;
		}
		this.group_uniteSum_value[elem_id][tab_length] = this.group_uniteSum_value[elem_id][tab_length - 1];
		// console.log(this.group_uniteSum_value);
}

	//	Pour lisser lesvaleur
		// for (var i = 0; i < 5; i++)
		// {
		// 	for (var x = 1; x < this.group_uniteSum_value.length - 1; x++)
		//  	{
		//  		this.group_uniteSum_value[x] = (this.group_uniteSum_value[x - 1] + 0 * this.group_uniteSum_value[x] + this.group_uniteSum_value[x + 1]) / 2;
		//  		//path.add(new Point(from.x + (x) * delta_x, to.y - delta_y * this.group_uniteSum_value[x]));
		//  	}
		//  	this.group_uniteSum_value[this.group_uniteSum_value.length - 1] = (this.group_uniteSum_value[this.group_uniteSum_value.length - 2]);
		//  }

		// return (this.group_uniteSum_value);

function	init_curseur(from, to, prct_beg_x, prct_end_x, prct_beg_y, prct_end_y, val_beg, val_end, left, right, target, actuval, tab_mult)
{
	var delta_x = to.x - from.x;
	var delta_y = to.y - from.y;

	var pt_from			= new Point(from.x + prct_beg_x * delta_x, from.y + prct_beg_y * delta_y);
	var pt_to 			= new Point(from.x + prct_end_x * delta_x, from.y + prct_end_y * delta_y);
	if (tab_mult != undefined)
	{
		// console.warn("          111111111111111111111111111111111111111111111111");
		var curseur_unite 	= new Curseur_2(pt_from, pt_to, val_beg, val_end, left, right, target, actuval, tab_mult);
	}
	else
	{
		// console.warn("         22222222222222222222222222222222222222222222222222");
		var curseur_unite 	= new Curseur(pt_from, pt_to, val_beg, val_end, left, right, target, actuval);
	}
	return (curseur_unite);
}

function	init_curseur_time_interval(from, to, prct_beg_x, prct_end_x, prct_beg_y, prct_end_y, val_beg, val_end, left, right, target, actuval)
{
	var delta_x = to.x - from.x;
	var delta_y = to.y - from.y;

	var pt_from			= new Point(from.x + prct_beg_x * delta_x, from.y + prct_beg_y * delta_y);
	var pt_to 			= new Point(from.x + prct_end_x * delta_x, from.y + prct_end_y * delta_y);
	var curseur_unite 	= new Curseur(pt_from, pt_to, val_beg, val_end, left, right, target, actuval);
	return (curseur_unite);
}

//	avec un from et un to globale a toute la zonne ou on peu mettee des image
// function	add_activ_elem(from, to)
// {
// 	// on defini la taille en largeur et en hauteur d'un element
// 	// on calcul combient d'element
// 	// on les affiche
// }


function get_time_part(tab_mult, from, to, begin,  end, obj)
{
	var param_time = init_time_mode(1000 * 60, tab_mult);

	// console.warn("param_time");
	// console.warn(param_time);
	obj.time_descriptor = param_time;
	var all_tab = generate_time_tab(from, to, begin, end, param_time);
	// destroy_double_value(all_tab);

	return (all_tab);
}


function	Usage_history(from, to)
{
	this.from = from;															//	coin en haut a gauche
	this.to = to;															//	coin en bas  a droite
	this.delta_x = to.x - from.x;	
	this.delta_y = to.y - from.y;	

	this.time_begin		= globale_time_begin;
	this.time_end		= globale_time_end;
	this.time_unite 	= 1000 * 60 * 60 * 24; // une heure
	this.val_max		= 1;
	this.val_min		= 0;
	this.nb_line		= 6;
	this.nb_curve		= 1;



	this.group_gross_value				= [];				// temps brute 												==> recalculer a chaque activation 				+ chanement interval de temps (peut etre par complement a terme)
	this.group_uniteSum_value			= [];// les valeur par unite temporel											==> recalculer a chaque	grossevalue_update 		+ changenent unite de temps
	this.group_path						= [];// les truc qu'on affiche a l'ecran ==> c'est {ce qu'on met en visible,}   ==> recalculer a chaque unitSum_update
	this.group_logo_elem				= new Group();
	this.group_selector					= new Group();


	this.fill_gross_value 				= fill_gross_value_to_histo;
	this.switch_activ_elem				= switch_activ_elem;
	this.calculate_uniteSum				= calculate_uniteSum;
	this.uptadte_uniteSum				= uptadte_uniteSum;
	this.switch_visible_the_line		= switch_visible_the_line;
	this.update_sum 					= update_sum;
	this.draw_the_line 					= draw_the_line;
	this.erase_curve					= erase_curve;
	this.switch_curv					= switch_curv;
	this.actual_activ_elem				= actual_activ_elem;

/*
 
	Si on modifie la couche alpha des colonne, c'est pas grave si elle sont empiler et au dernier endroi. 
  * */

  	// this.indice_selector	= 4;

  	this.activ_elem = [];
  	this.tab_mult	= [5, 3, 2, 2, 3, 2, 2, 2, 7];
	this.margin		= 0.02;
	this.coef_line	= 0.5;
	this.coef_time	= 0.6;
  	this.coef_curs1 = 0.7;
  	this.coef_curs2 = 0.8;
  	this.coef_select = 0.9;

	this.time_style_grid ={strokWidth: 1,  strocColor : new Color({hue: 0, saturation: 0.8, brightness: 0.3 ,alpha: 0.3})};
//	function	Time_unite(get_next, style, unite)
	// this.time_param = [
	// 	{new Time_unite("10 minutes", this.time_style_grid, )}
	// 	];


	this.global_group					= new Group();													//	group commun de tout les element graphique genre pour faire un delete
	this.groups_line = [];												// Les group dans les quelle les ligne sont defini
	this.group_grid						= new Group();
	this.curseur_time_unite				= init_curseur(from, to, 0 , 1, this.coef_curs1 + this.margin, this.coef_select - this.margin, 1000 * 60 * 10, 1000 * 60 * 60 * 24 * 7, false, true, this, actualise_time_unite, this.tab_mult);										//	le curseur pour le time unite
	this.curseur_time_interval			= init_curseur(from, to, 0, 1, this.coef_curs2 + this.margin, this.coef_select - this.margin, globale_time_begin, globale_time_end, true, true, this, actualise_time_interval);				//	le curseur pour le time interval

this.curseur_time_interval.dady = this;

	// draw_the_grid(this.val_min, this.val_max, this.nb_line, this.group_grid, this.from, new Point(this.to.x, this.to.y - 0.25 * (this.to.y - this.from.y)));

	this.hystory; 														//	la il faubdrait faire un genre de pointeur vers l'historique

	this.switch_draw = switch_draw_histo;
	this.time_part = get_time_part(this.tab_mult, this.from, this.to, this.time_begin, this.time_end, this);

	// var all_tab = generate_time_tab(, begin, end, param_time);


	this.indice_selector = undefined;

	//	La On va cree le tableau de machin
	this.tab_unit_switch = [
		{prev: prev_day, 	next: next_day},		
		{prev: prev_week, 	next: next_week},
		{prev: the_prev_month, 	next: the_next_month}
		];

	this.tab_unit = [
		new Unite_selector(new Point(from.x + 0.01 * this.delta_x, from.y + this.delta_y * (this.coef_select + this.margin)), new Point(from.x + 0.09 * this.delta_x, from.y + this.delta_y * (1 - this.margin)), this.group_selector, this.curseur_time_interval, adapt_day,   "journee", 5),
		new Unite_selector(new Point(from.x + 0.11 * this.delta_x, from.y + this.delta_y * (this.coef_select + this.margin)), new Point(from.x + 0.19 * this.delta_x, from.y + this.delta_y * (1 - this.margin)), this.group_selector, this.curseur_time_interval, adapt_week,  "semaine", 5),
		new Unite_selector(new Point(from.x + 0.21 * this.delta_x, from.y + this.delta_y * (this.coef_select + this.margin)), new Point(from.x + 0.29 * this.delta_x, from.y + this.delta_y * (1 - this.margin)), this.group_selector, this.curseur_time_interval, adapt_month, "  mois  ", 5)
	];

// function	Prev_interval(from, to, group, curseur, parent);





	this.prev_interval = new Switch_interval(new Point(from.x + 0.81 * this.delta_x, from.y + this.delta_y * (this.coef_select + this.margin)), new Point(from.x + 0.89 * this.delta_x, from.y + this.delta_y * (1 - this.margin)), this.group_selector, this.curseur_time_interval, this, false);
	this.prev_interval = new Switch_interval(new Point(from.x + 0.91 * this.delta_x, from.y + this.delta_y * (this.coef_select + this.margin)), new Point(from.x + 0.99 * this.delta_x, from.y + this.delta_y * (1 - this.margin)), this.group_selector, this.curseur_time_interval, this, true);
	// switch_visible(this.group_selector);

// this.group_selector.obj = this.unite_day;

	// console.log("histo finished");
	// this.switch_activitie = switch_activ_elem;

	//		on va acceder a l'hysorique par un genre de parent;

	// view.draw();
	// this.actualise_hisory = actualise_hisory;
}

// function 	unselect_unite(tab)
// {
// 	for (var x in tab)
// 	{
// 		console.log(tab[x]);
// 		tab[x].strokeWidth /= 2;
// 		tab[x].shape.save_color = tab[x].shadowColor;
// 		tab[x].shape.shadowColor = undefined;
// 	}
// }

function 	select_path(path, color)
{

	path.shadowColor = (color != undefined)? color:'black';//this.strokeColor;
	path.shadowBlur = 10;
	path.strokeWidth *=2;
	// path.strokeWidth *= 3;
}

 function 	unselect_path(path)
 {
 	path.shadowColor = undefined;//(color != undefined)? color:'black';//this.strokeColor;
	path.shadowBlur = 10;
	path.strokeWidth /=2;
 }
/*


*/