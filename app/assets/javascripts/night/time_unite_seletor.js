/*



	###	Ameliortion sur la trame temporelle	###

		//	il faudrai reglerlesysteme de mois. et D'anne ...
		
		- on va faire un bouton jour, semaine, mois, anne
		- bouton [debut][precedent][suivant][fin]

		Les bouton jour, mois etc 			=>	regleron la fin du curseur
			-ajuste la position de la fin du curseur de DROITE puis le maj, en fonction del'unite voulu.
		Les bouton [suivant] [precedent]	=>	regleron le debut du curseur
			-ajuste la position 

	-on met un genre de call back avec une fonction, ou 

	-un rendu dans un (from, to),  dans un group

	###	Amelioration sur 
*/




function	adapt_day()
 {
 	// console.log(this.dady);
 	// console.log(this.dady.data);

 	var x_beg = this.dady.curs_circle_beg.position.x;
 	var x_end = this.dady.curs_circle_end.position.x
 	var time_beg = this.dady.curs_val_begin;
 	var time_end = this.dady.curs_val_end;
 	var coef = (x_end - x_beg) / (time_end - time_beg);
 	var time_day = 1000 * 60 * 60 * 24;

 //	time_beg = (time_beg - (time_beg % time_day));


 	var new_beg = x_beg - coef * (time_beg % time_day - time_day + 1);
 	var new_end = coef * time_day + new_beg;

 	// console.log("NEW POS: 	"+new_end);





 	// this.dady.maj(new_beg, new_end, true);
 	this.dady.maj(new_beg, new_end, true);
	this.dady.maj(new_beg, new_end, false);
	// this.dady.maj(new_beg, new_end, false);
	// this.dady.actuval(this.dady.target, this.dady.curs_val_begin, this.dady.curs_val_end);

	this.dady.actuval(this.dady.target, this.dady.curs_val_begin, this.dady.curs_val_end);
	this.dady.actuval(this.dady.target, this.dady.curs_val_begin, this.dady.curs_val_end);


	// console.warn(this);
	// console.warn(this.dady);
	// console.warn(this.dady.dady);
	
	if (this.dady.dady.indice_selector != undefined)unselect_path(this.dady.dady.tab_unit[this.dady.dady.indice_selector].shape);
	this.dady.dady.indice_selector = 0;

	// console.warn(this.dady.dady.indice_selector);
	// console.warn(this.dady.dady.tab_unit);
	// unselect_unite(this.dady.dady.tab_unit);

	select_path(this.dady.dady.tab_unit[this.dady.dady.indice_selector].shape);
	// console.warn(this.parent);
	// console.warn(this.parent.parent);
	// unselect_unite(this.parent.parent);
 }

function	adapt_week()
 {
 	// console.log(this.dady);
 	// console.log(this.dady.data);

 	var x_beg = this.dady.curs_circle_beg.position.x;
 	var x_end = this.dady.curs_circle_end.position.x
 	var time_beg = this.dady.curs_val_begin;
 	var time_end = this.dady.curs_val_end;
 	var coef = (x_end - x_beg) / (time_end - time_beg);
 	var time_week = 1000 * 60 * 60 * 24 * 7;

 //	time_beg = (time_beg - (time_beg % time_day));


 	var new_beg = x_beg - coef * (time_beg % time_week - time_week + (time_week / 7 * 3) + 1);
 	var new_end = coef * time_week + new_beg;

 	// console.log("NEW POS: 	"+new_end);


 	// this.dady.maj(new_beg, new_end, true);
 	this.dady.maj(new_beg, new_end, true);
	this.dady.maj(new_beg, new_end, false);
	// this.dady.maj(new_beg, new_end, false);
	// this.dady.actuval(this.dady.target, this.dady.curs_val_begin, this.dady.curs_val_end);

	this.dady.actuval(this.dady.target, this.dady.curs_val_begin, this.dady.curs_val_end);
	this.dady.actuval(this.dady.target, this.dady.curs_val_begin, this.dady.curs_val_end);
 
	if (this.dady.dady.indice_selector != undefined) unselect_path(this.dady.dady.tab_unit[this.dady.dady.indice_selector].shape);
	this.dady.dady.indice_selector = 1;

	// console.warn(this.dady.dady.indice_selector);
	// console.warn(this.dady.dady.tab_unit);
	// unselect_unite(this.dady.dady.tab_unit);

	select_path(this.dady.dady.tab_unit[this.dady.dady.indice_selector].shape);
	// console.warn(this.dady.dady.indice_selector);
 }



function	adapt_month()
 {
 	// console.log(this.dady);
 	// console.log(this.dady.data);

 	var x_beg = this.dady.curs_circle_beg.position.x;
 	var x_end = this.dady.curs_circle_end.position.x
 	var time_beg = this.dady.curs_val_begin;
 	var time_end = this.dady.curs_val_end;
 	var coef = (x_end - x_beg) / (time_end - time_beg);
 	// var time_month = 1000 * 60 * 60 * 24 * 30;

 //	time_beg = (time_beg - (time_beg % time_day));

 	var new_time_beg 	=	prev_month(time_beg);
 	var new_time_end 	=	next_month(time_beg);

 	var new_beg = x_beg - (time_beg - new_time_beg) * coef;
 	var new_end = x_end - coef * (time_end - new_time_end);

 	// console.log("NEW POS: 	"+new_end);


 	// this.dady.maj(new_beg, new_end, true);
 	this.dady.maj(new_beg, new_end, true);
	this.dady.maj(new_beg, new_end, false);
	// this.dady.maj(new_beg, new_end, false);
	// this.dady.actuval(this.dady.target, this.dady.curs_val_begin, this.dady.curs_val_end);

	this.dady.actuval(this.dady.target, this.dady.curs_val_begin, this.dady.curs_val_end);
	this.dady.actuval(this.dady.target, this.dady.curs_val_begin, this.dady.curs_val_end);

	if (this.dady.dady.indice_selector != undefined) unselect_path(this.dady.dady.tab_unit[this.dady.dady.indice_selector].shape);
	this.dady.dady.indice_selector = 2;

	// console.warn(this.dady.dady.indice_selector);
	// console.warn(this.dady.dady.tab_unit);
	// unselect_unite(this.dady.dady.tab_unit);

	select_path(this.dady.dady.tab_unit[this.dady.dady.indice_selector].shape);

	// console.warn(this.dady.dady.indice_selector);
 }













function test_time_unite_rendu()
{
	var nb_rep = 10;
	// var model = ['a'];//, 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	var model = ["A.", "B.", "B.K", "BBB", 'E', '1', '.', '0', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	var result = "";
	var incr = 15;
	var group= new Group();

	var from = new Point(view.size.width / 2, 5);
	var to = new Point(view.size.width / 2 + 100, 5+ incr );

	// from.x -= 1;
	// from.y -= 1;

	// to.x += 1;
	// to.y += 1;


	//	pou2r chaque letre
	for (var i in model)
	{
		result = "";
		//	Pour construire chaque repetition
		for (var j = 0; j < nb_rep; j++)
		{
			result += model[i];
		}
		print_txt(from, to, result, group);
		from.y += incr;
		to.y += incr
	}
}




//	La on aun truc qui ecrit dans un rectangle
function	get_txt(dad, from, to, text, group, color)
{
	//	onfait une marge la plus petite de 5% ou 10px
	//	on ecrit le text: jour, mois

	//	on peu tester la taille en finction des lettre.

	var proportional = true;
	var txt = new PointText();
	txt.position = from ;
	txt.content = text;
	if (color != undefined)
	{
		txt.fillColor = color;
	}
	else
	{
		txt.fillColor = 'black';
	}
	// txt.fillColor = 'black';

	var rect = new Path.Rectangle(from, to);
	// rect.strokeColor = 'green';

	var txt_from 	= new Point(from.x, from.y - txt.handleBounds.height);
	var txt_to 		= new Point(from.x + txt.handleBounds.width, from.y);

	var rect = new Path.Rectangle(txt_from, txt_to);
	// rect.strokeColor = 'black';

	var coefx = (to.x - from.x) / (txt_to.x - txt_from.x);
	var coefy = (to.y - from.y) / (txt_to.y - txt_from.y);
	var min = (coefx < coefy) ? coefx: coefy;

	// (coefx < coefy) ? console.warn(text+" min ==> coefx"): console.info(text+" min ==> coefy");

	if (!proportional)
	{
		txt.scaling.x *= coefx;
		txt.scaling.y *= coefy;
	}
	else
	{
		txt.scaling.x *= min;
		txt.scaling.y *= min;
	}

	//	Correction delaposition pour etre au centre du rectangle et bienscalee
	txt.position.y += (to.y - from.y) * (1 + (0.7 / coefy)) / 2;//* 1 / coefy ;
	txt.position.x += (((txt_to.x - txt_from.x) * (coefx - 1)))	/ 2;

	txt.dady = dad;
	txt.visible = false;
	// console.log(group);
	group.addChild(txt);
	view.draw();
	return (txt);
	//	on re adapte le tout pour rentrer dans le from to
}

function 	get_shape(dad, from, to, corner, strokeColor, fillColor)
{
	var rectangle = new Rectangle(new Point(from.x, from.y), new Point(to.x, to.y));
	var cornerSize = new Size(corner, corner);
	var path = new Path.RoundRectangle(rectangle, cornerSize);
	path.strokeColor = (strokeColor == undefined) ? 'black': strokeColor;
	path.fillColor = (fillColor == undefined) ? new Color({ hue: 160, saturation: 0.7, brightness:0.75, alpha: 0.8}) : fillColor;
	path.dady = dad;
	path.visible = false;
	// path.selected = true;

	return (path);

}

function	Unite_selector(from, to, group, obj, cb, text, marge)
{
	this.marge = (marge == undefined) ? 5 : marge;
	this.target = obj;
	this.shape = get_shape(obj, from, to, this.marge);
	// console.log(group);
	this.text = get_txt(obj, new Point(from.x + this.marge, from.y + this.marge), new Point(to.x - this.marge, to.y - this.marge), text, group);

	// console.log(this.text);
	// console.log(obj);
	this.text.onMouseDown = cb;
	this.shape.onMouseDown = cb;

	group.addChild(this.shape);
	group.addChild(this.text);
	// group.obj = this;


	// switch_visible(group);
	//	la on dessinne le font, le text, 
	// this.perimetre = new Path.Rectangle(from, to);
	// this.perimetre.strokeColor = 'orange';
}


function	Switch_interval(from, to, group, curseur, parent, next, marge)
{
	this.next = next; 
	this.marge = (marge == undefined) ? 5 : marge;
	// this.target = obj;
	this.shape = get_shape(this, from, to, this.marge);
	group.addChild(this.shape);
	// console.log(group);
	this.txt = (!	next) ? "precedent": "  suivant  ";
	this.text = get_txt(this, new Point(from.x + this.marge, from.y + this.marge), new Point(to.x - this.marge, to.y - this.marge), this.txt, group);

	// this.from 		= from;
	// this.to 		= to;
	// this.group 		= group;
	this.curseur 	= curseur;
	this.parent 	= parent;

	// this.

	this.text.onMouseDown = switch_inter;
	this.shape.onMouseDown = switch_inter;

	//	On doit recupetrer l'unite dans la quelle on est
	//	Definir avantun tableau avec desfonction get_next_day prev etc
	//	On doit deplacer le curseur 

}


function	prev_day(time)
{
	//	on r'envoie le jour precedent
	var day_tik = (1000 * 60 * 60 * 24);

 	return (time - day_tik - time % day_tik);
}

function	next_day(time)
{
	var day_tik = (1000 * 60 * 60 * 24);
	
 	return (time + day_tik - time % day_tik);
}

function	prev_week(time)
{
	var day_tik = (1000 * 60 * 60 * 24);
	var week_tik = day_tik * 7;

	return	(time - week_tik - (time % week_tik - 4 * day_tik) + 1);
}

function	next_week(time)
{
	var day_tik = (1000 * 60 * 60 * 24);
	var week_tik = day_tik * 7;

	return	(time + week_tik - (time % week_tik - 4 * day_tik));
}

function 	prev_month(time)
{
	var new_time = (Date(time).getDate);


	 // var time = Date.now();
    // console.log(time);
    var nb_day = new Date(time).getDate() - 2;
    var t_day = (1000 * 60 * 60 * 24);
    // time_to_console(time);
    // console.log(nb_day)
    // time_to_console(((time - (nb_day * t_day)) - (time % t_day)));
    new_time = ((time - (nb_day * t_day)) - (time % t_day));
    return (new_time);
}

function	next_month(time)
{
	var date = new Date(time);
	var month = date.getMonth();

	// console.log(time);
	// console.log(month);

	date.setUTCMonth(month + 1);
	// date.setDate(0);
	var nb_jour = date.getDate();
	// console.log("nb:jour"+ nb_jour);

	var new_time = date.getTime() - ((date.getDate()) * (1000 * 60 * 60 * 24)) - (time % (1000 * 60 * 60 * 24));
	return (new_time);
}

function 	the_prev_month(time)
{
	var date = new Date(time);
	var nb_month = date.getMonth();
	var tik_day = (1000 * 60 * 60 * 24);
	date.setUTCMonth(nb_month - 1);
	var nb_day = date.getDate();

	var new_time = date.getTime() - (nb_day - 1) * tik_day - time % tik_day;

	// console.warn(new_time);
    return (new_time);
}

function	the_next_month(time)
{
	var date = new Date(time);
	var nb_month = date.getMonth();
	var tik_day = (1000 * 60 * 60 * 24);
	date.setUTCMonth(nb_month + 1);
	var nb_day = date.getDate();

	var new_time = date.getTime() - (nb_day - 1) * tik_day - time % tik_day;

	// console.warn(new_time);
    return (new_time);
}


function	switch_inter()
{
	// console.log(this);
	// console.log(this.dady);
	// console.log(this.dady.curseur);
	// console.log(this.dady.parent);


	var x_beg = this.dady.curseur.curs_circle_beg.position.x;
	var x_end = this.dady.curseur.curs_circle_end.position.x
	var time_beg = this.dady.curseur.curs_val_begin;
	var time_end = this.dady.curseur.curs_val_end;
	var coef = (x_end - x_beg) / (time_end - time_beg);


	var i;
	var time;
	var pos_beg = pos_end = 0;

	// var 

	if (this.dady.parent.indice_selector == undefined)
		console.warn("Aucunne unite de temps selectione");
	else
	{
		i = this.dady.parent.indice_selector;
		// console.log("unite_select"+i);
		time = time_beg;

		if (!this.dady.next)
		{
			// console.log("11111");
			var t1 = this.dady.parent.tab_unit_switch[i].prev(time);
			var t2 = this.dady.parent.tab_unit_switch[i].next(t1);
		}
		else
		{
			// console.log("2222");
			var t1 = this.dady.parent.tab_unit_switch[i].next(time);
			var t2 = this.dady.parent.tab_unit_switch[i].next(t1);
			// time_to_console(t1);
			// time_to_console(t2);
		}


			pos_beg = x_beg + (t1 - time_beg) * coef;
			pos_end = x_end + (t2 - time_end) * coef;
			// pos_end = ;

			// console.log("x_beg: 	"+pos_beg);
			// console.log("x_end: 	"+pos_end);
			this.dady.curseur.maj(pos_beg, pos_end, false);
			this.dady.curseur.maj(pos_beg, pos_end, true);
			// this.dady.maj(new_beg, new_end, false);
			// this.dady.actuval(this.dady.target, this.dady.curs_val_begin, this.dady.curs_val_end);
			this.dady.curseur.actuval(this.dady.curseur.target, this.dady.curseur.curs_val_begin, this.dady.curseur.curs_val_end);
			this.dady.curseur.actuval(this.dady.curseur.target, this.dady.curseur.curs_val_begin, this.dady.curseur.curs_val_end);

		// console.log("beg: 	"+t1);
		// console.log("end: 	"+t2);

	}
	// console.log(this.group);
	// console.log(this.parent);
	// console.log(this.curseur);
}


// function	Next_interval(from, to, group, curseur, parent, marge)
// {
// 	this.marge = (marge == undefined) ? 5 : marge;
// 	// this.target = obj;
// 	this.shape = get_shape(parent, from, to, this.marge);
// 	group.addChild(this.shape);
// 	// console.log(group);
// 	this.text = get_txt(curseur, new Point(from.x + this.marge, from.y + this.marge), new Point(to.x - this.marge, to.y - this.marge), "  suivant  ", group);

// 	// this.from 		= from;
// 	// this.to 		= to;
// 	// this.group 		= group;
// 	this.curseur 	= curseur;
// 	this.parent 	= parent;
// }

//	On regarde quel unite_select est active


/*
	//	On a un truc qui affiche le text dans un rectangle
	//	On va enssuite dessiner de tour de ce rectangle
	//	Puis le rendre cklicable
*/