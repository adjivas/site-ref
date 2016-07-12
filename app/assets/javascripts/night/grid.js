function draw_the_grid(min, max, nb_line, group, from, to)
{
    group.removeChildren();
    var size_data = max - min;
    var delta_val = size_data / nb_line;
    var coef = (to.y - from.y) / (max - min);

    var y = 0.0;
    while (y <= size_data)
    {
        // console.log("y:"+y);
        var text = new PointText(new Point(0, to.y));
        var path = new Path;
        var p1 = new Point();
        var p2 = new Point();

        p1.x = from.x;
        p1.y =  to.y - (y * coef);

        p2.x = to.x;
        p2.y =  to.y - (y * coef);

        path.add(p1);
        path.add(p2);
        path.strokeColor = 'black';

        text.content = "" + parseInt(y + min);// + "." + parseInt(((y + min) % 1) * 10);
        text.position = new Point(from.x - 15, to.y - (y * coef));
        text.fillColor = 'grey';
        group.addChild(text);
        group.addChild(path);

        // path.visible = false;
        // text.visible = false;

       	var test = (to.y - (y * coef));

        y += delta_val;
    }
    // view.draw();
}

//	On veux faire une grille temporelle avec des barre et du texte. On ajoutera tout au groupe de grille
//	Il faudra donc selectionner des point tmporelle et leurs equivalent a l'ecran.
//	on va definir un objet qui decrit les selection temporel a faire (en gros une fonction next() )
//

/*	
 *	on peu regler les nom d'ungroup afichable avec les multiple
 *
 *
 *	10	minutes
 *	20	minutes
 *	30	minutes
 *	
 *	1	heure
 *	2	heure
 *	3	heure
 *	6	heure
 *	12	heure
 *
 *	1	jour
 *	2
 *	3
 *	(7)	jour
 *	
 *	// les mois ca va eter un peu special
 * 1	mois
 * 2
 * 3
 * 6
 * 12
 *
 * */

//	objet de parametrage. On en fera un array pour dessiner toute les ligne
function	Time_unite(get_next, unite)
{
//	this.title;
	this.get_next = get_next;		//	fonction qui prend le temps et qui renvoie le premier suivant (donc potentielement lui meme) Servira pour definir le dexeime de tous
	// this.style = style;			//	
	this.unite = unite;			//	si unite est defini on incremente normaleent ou sinon avec get next...
}




//	On a va generer tout les interval
function	init_time_mode(time_init_unite, tab_mult)
{
	var tab = [];
	var val = time_init_unite;
	for (var x in tab_mult)
	{
		tab[x] = new Time_unite(get_next_from_unite, val * tab_mult[x]);
		// tab[x].style.strokeWidth = x;
		val *= tab_mult[x];
	}

	tab[tab.length - 1].get_next = get_next_week;
	//	la il faudrai faire tout les mois qui n'ont plus de unite
//function	generate_time_tab(from, to, begin, end, tab_init)
	// generate_time_tab(from, to, begin, end, time_init_unite)
	tab[tab.length] = new Time_unite(get_next_month);
	return (tab);
}

function	get_next_from_unite(time)
{
	//	On va recupere l'unite d'apres. Quand on appelle la fonction on a realiser le temps mais on dois conaitre le suivant pour ajouter l'unite. 
	// console.warn(this.unite / (1000 * 60 * 10));
	// console.info("return:"+(( time + (time - (time % this.unite)))) / (1000 * 60));
	// time_to_console(time);
	// time_to_console((time + ));

	return ( time + (this.unite - (time % this.unite)));
}
// 
function	get_next_week(time)
{
	var d = new Date(time);
	var time_day = 1000 * 60 * 60 * 24;
//	l'idee est de trouver le jour suivant donc
// console.error(d.getDay());
	var time = time + ((7 - d.getDay()) * time_day) - (time % time_day);
	// console.error("nb day: "+(new Date(time).getDay()));
	return (time);
}

function	get_next_month(time)
{
	var d = new Date(time);	
	var time_day = 1000 * 60 * 60 * 24;
	d.setUTCMonth(d.getMonth() + 1) ;
	var time = d.getTime() - ((d.getDate()) * time_day) - d.getTime % time_day;
	return (time);
}



function	draw_time_line(tab_unit, all_tab, from, to, begin, end, group, coef_line, coef_time)
{
	var min_line 	= 40; 
	var min_text 	= 40;
	var min_lvl		= 100; //
	var	coef = (to.x - from.x) / (end - begin);

	var time;
	var minute;
	var hour;
	var week = ["D", "L", "M", "M", "J", "V", "S"];

	if (coef_time == undefined)
		coef_time = 0.7;
	if (coef_line == undefined)
		coef_line = 0.6;
	
	// console.log("OUIIIII");

	for (var lvl in tab_unit)
	{
// console.log("time:"+(tab_unit[lvl].unite / (1000 * 60))+" minutes"+"	nb_elem: "+all_tab[lvl].length);
		if (tab_unit[lvl].unite != undefined)
		{
			if (tab_unit[lvl].unite * coef > min_line)
			{
				//	il faderait actualiser si c'est le plus peutit lvl:1
				if (lvl < min_lvl)
				{
					min_lvl = lvl;
				}
	
				// path.strokeWidth = 3 * lvl;
				// console.log(all_tab[lvl]);
				for (var y in all_tab[lvl])
				{
					if (all_tab[lvl][y] != undefined)
					{
						var path = new Path();
						path.style = tab_unit[lvl].style;
						
						path.add(new Point(all_tab[lvl][y].pos, from.y));
						path.add(new Point(all_tab[lvl][y].pos, from.y + coef_line * (to.y - from.y)));
						path.style.strokeColor = 'black';
						// console.log("width 	:"+(lvl));
						path.style.strokeWidth = lvl / 4 + 0.1;
						// console.log(path);
						// console.log("x:"+all_tab[lvl][y].pos);
						group.addChild(path);
					}
				}
			}
			if (tab_unit[lvl].unite * coef > min_text)
			{
				for (var y in all_tab[lvl])
				{
					if (all_tab[lvl][y] != undefined)
					{
						var pt = new PointText();
						pt.position = new Point(all_tab[lvl][y].pos, from.y + ((coef_time + coef_line) / 2) * (to.y - from.y));
						if (tab_unit[lvl].unite < (1000 * 60 * 60 * 24))
						{
							time = all_tab[lvl][y].time;
							minute = (((time) % (1000 * 60 * 60)) / (1000 * 60));
							hour = (((time) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
							if (minute == 0)
								pt.content = "" + (parseInt(hour) + ":" + "00");
							else
								pt.content = "" + (parseInt(hour) + ":" + (parseInt(minute)));
							pt.fillColor = 'grey';
							// console.log(pt.content.length);
						}
						else if (tab_unit[lvl].unite <= (1000 * 60 * 60 * 24 * 7))
						{
							time = all_tab[lvl][y].time;
							var date = new Date(time);
							pt.content = week[date.getDay()] + " " + date.getDate();

						}
						if (tab_unit[lvl].unite == (1000 * 60 * 60 * 24 * 7))
						{
							pt.fillColor = 'blue';
						}

						pt.position.x -= pt.content.length * 2.7;
						group.addChild(pt);
					}
				}
			}
		}
	}
	return (min_lvl);
}


//	LA FONCTION DESTROY

function	destroy_double_value(all_tab)
{
	var prev = 0;
	var j = 0;

	for (var lvl = 1; lvl <all_tab.length; lvl++)
	{
		prev = 0;
		for (var i = 0 ; i < all_tab[lvl].length ; i++)
		{
			j = prev;
			if (all_tab[lvl][i] != undefined)
			{
				while ( (all_tab[lvl - 1][j] == undefined && (j < all_tab[lvl - 1].length)) || (((j < all_tab[lvl - 1].length) && all_tab[lvl - 1][j].time != all_tab[lvl][i].time)))
				{
					j++;
				}
				if (all_tab[lvl - 1][j] != undefined && all_tab[lvl - 1][j].time == all_tab[lvl][i].time)
				{
					// console.log("CHOOOOOPER");
					all_tab[lvl - 1][j] = undefined;
				}
			}
			prev = j + 1;
		}
	}
}


/*	input:	1000 * 60;
 //	on peu aussi scaller l'affichage en fonction du zoom. genre une focntuon auto-scale
 	var	time_init_unite = 60000;
	var	tab mult = [10, 3, 2, 3, 2, 2];

 *	input * (((((((10) * 3) * 2)) * 3) * 2) * 2) * (7); //* mois , anne etc 	
 * */

//	On va initialiser le socle de temps pour les 6 premier puis pour les semaine
//	on a donc les position et le temps
function	generate_time_tab(from, to, begin, end, tab_init)
{
	//	On va cree un tableau de tableau 
	var all_tab = [];
	var the_time = 0;
	var	i = 0;
	var delta_x = to.x - from.x;
	var delta_time = end - begin;
	var coef = delta_x / delta_time;
	var ok = true;


	for (var x in tab_init)
	{
// var txt = '';
// var count = 0;

		i = 0;
		all_tab[x] = [];

		// if (tab_init[x].unite != undefined)

			// console.log("lvl: 	"+x+"	nb_elem	:"+(delta_time / (tab_init[x].unite))+" dist 	:"+(parseInt(tab_init[x].unite * coef)));
	
		// if (tab_init[x + 1] != undefined)
		// 	the_time = tab_init[x].get_next(begin);
		// else
		// console.log(tab_init[x].get_next);
			the_time = tab_init[x].get_next(begin);
	
		// console.log(tab_init[x].get_next);
		// console.warn("x:"+x+" 	nbr day: "+(new Date(the_time).getDay())+"	unite:"+(tab_init[x].unite / (1000 * 60 * 60 * 24)));
	// console.log("		the_time:"+(the_time / (1000 * 60)))
		// time_to_console(the_time);    
		while (the_time <= end)
		{
			all_tab[x][i] = {};
			all_tab[x][i].time = 	the_time;
			all_tab[x][i].pos = (the_time - begin) * coef + from.x;
			// console.warn("UNITEs:"+tab_init[x].unite);
// console.log("___--=> POSITION: "+all_tab[x][i].pos);
			// if (tab_init[x].unite != undefined)
			// 	the_time += tab_init[x].unite;
			// else
			 	the_time = tab_init[x].get_next(the_time);
			i++

		}
		// console.log("Oh OH oH ==>"+txt);
	}
	// console.log("END GENERATION");
	return (all_tab);
}









//	make_time_grid(this.from, this.to,this.begin, this.end, this.tab_mult, this.group.grid)
function	make_time_grid(from, to, begin, end, tab_mult, grid, coef_line, coef_time)
{//	from, to, begin, end, 
	// var style = {strokeColor: new Color(0.1, 0.1, 0.1)};
	var param_time = init_time_mode(1000 * 60, tab_mult);

	var all_tab = generate_time_tab(from, to, begin, end, param_time);
	destroy_double_value(all_tab);
	
	// console.log("all tab:");
	
	// destroy_double_value(all_tab);

	// console.log(all_tab);
	



	// console.log("...........................");

	// console.error(all_tab);

	// console.log(param_time);
	// console.log(all_tab);
	var res = draw_time_line(param_time, all_tab, from, to, begin, end, grid, coef_line, coef_time);
	// console.log("result: 	"+res);
	return (res);

	// console.log("\n\n\n\n\n\n");
	// console.log(param_time);
	// console.log("\n\n\n\n\n\n");
	// console.log(all_tab);
//function	generate_time_tab(from, to, begin, end, tab_init)
		// generate_time_tab(from, to, begin, end, tab_init);
}












/*
function	draw_time(position, txt, group)
{

}

//	Dans le tableau il y a tout les {temps, positon, liste phrase}
function	draw_vertical_line(tab)
{
	
}


function	get_pos_tab(form, to, begin, end, unite)
{

}

function	get_time_tab(begin, end, unite)
{

}

function	add_vertical_grid_line(from_l, to_l, from_t, to_t, begin, end, tab_obj)
{
}

function	param_grid()
{
}
*/

