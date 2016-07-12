
// un va cree un objet curseur.

// -position variable,
// -on poura augmenter	=> DANS un espace temprel FIX.
// -quand on deplace le curseur, il reste a ca place.

// */

//	On va cree un curseur don les valeur sont scalable 



function	Curseur(from, to, val_beg, val_end, left, right, target, actuval)
// function	Curseur(from, to, val_beg, val_end, left, right)
{

	// this.perimetre = new Path.Rectangle(from, to);
	// this.perimetre.strokeColor = 'orange';


	this.group = new Group();
	// console.warn(actuval);
	this.left_mobile = left;
	this.right_mobile = right;
	// this.left_mobile = left;
	// this.right_mobile = right;

	this.target = target;
	this.actuval = actuval; // en gros c'eset une parite de l'adresse avec myDad
	// console.warn(this.actuval);
	// this.name_val_end = name_val_end;
	
	this.from = from;
	this.to = to;
	this.inter_val_begin = val_beg;
	this.inter_val_end = val_end;
	this.curs_val_begin = val_beg;
	this.curs_val_end = val_end;
	this.marge = (to.y - from.y) / 10;
	this.get_time_interval = function()
		{
			return({begin: this.curs_val_begin, end: this.curs_val_end});
		};


	this.delta_y = (to.y - from.y);
	// this.rayon = this.delta_y / 2;
	this.hue = 160;

	this.style_active_style	= {
		fillColor: new Color({ hue: this.hue, saturation: 0.7, brightness:0.8}),
		strokeColor: new Color({ hue: this.hue, saturation: 0.7, brightness:0.2}),
    	strokeWidth: Math.ceil(this.delta_y / 30) + 1
    };

	this.style_passive_style = {
		fillColor: new Color({ hue: this.hue, saturation: 0.3, brightness:0.7}),
		strokeColor: new Color({ hue: this.hue, saturation: 0.3, brightness:0.3}),
    	strokeWidth: Math.ceil(this.delta_y / 30) + 1
    };


//	Ligne du fond
	this.line_interval = new Path();
	this.line_interval.add(new Point(from.x, from.y + this.delta_y / 4));
	this.line_interval.add(new Point(to.x, from.y + this.delta_y / 4));
	this.line_interval.add(new Point(to.x, to.y - this.delta_y / 4));
	this.line_interval.add(new Point(from.x, to.y - this.delta_y / 4));
	this.line_interval.closed = true;
	this.line_interval.style = this.style_passive_style;


//	ligne de valeur
	this.line_curs = new Path();
	this.line_curs.add(new Point(from.x, from.y + this.delta_y / 4));
	this.line_curs.add(new Point(to.x, from.y + this.delta_y / 4));
	this.line_curs.add(new Point(to.x, to.y - this.delta_y / 4));
	this.line_curs.add(new Point(from.x, to.y - this.delta_y / 4));
	this.line_curs.closed = true;
	this.line_curs.style = this.style_active_style;
	this.line_curs.data = this;
	this.line_curs.onMouseDrag = drag_curs_line;


//	Les crecle de debut et de fin
	this.curs_circle_beg = new Path.Circle(new Point(from.x, (from.y + to.y) / 2), this.delta_y / 2);
	this.curs_circle_end = new Path.Circle(new Point(to.x, (from.y + to.y) / 2), this.delta_y / 2);

	if (this.left_mobile)
	{
		this.curs_circle_beg.style = this.style_active_style;
	}
	this.curs_circle_beg.data = this;
	this.curs_circle_beg.onMouseDrag = drag_curs_begin;


	if (this.right_mobile)
	{ 
		this.curs_circle_end.style = this.style_active_style;
	}
	this.curs_circle_end.data = this;
	this.curs_circle_end.onMouseDrag = drag_curs_end;

	this.delta_val = this.curs_circle_end.position.y * this.curs_circle_beg.position.y ;

	this.maj = curseur_val_maj; // fonction de mis a jour genre calcul coef + reaffichage tout ca
	// this.actuval = function(){};
	// this.onMouseDrag = drag_curs;
	view.draw();

	// console.log(this.line_interval);


	this.group.addChild(this.line_interval);
	this.group.addChild(this.line_curs);
	this.group.addChild(this.curs_circle_beg);
	this.group.addChild(this.curs_circle_end);

	this.switch_draw = function()
	{
		// console.log("yolooooo");
		for (var x in this.group.children)
		{
			// console.log(this.group.children[x].visible);
			if (this.group.children[x].visible == true)
			{
				// console.log("thug1");
				this.group.children[x].visible = false;
				// console.log(this.group.children[x].visible);

			}
			else
			{
				// console.log("thug2");
				this.group.children[x].visible = true;
				// console.log(this.group.children[x].visible);
			}
		}
		view.draw();
	};

	this.switch_draw();

	view.draw();
	// this.drag_beg;
}

function drag_curs_begin(event)
{
	// console.log("BEGIN");
	// console.log("beg.x: " + this.data.curs_circle_beg.position.x + "	beg.y: " + this.data.curs_circle_beg.position.y);
	// console.log(event);
	// console.log(event);

	// console.log(this);
	// console.log(this);


	if(this.data.left_mobile)
	{
		this.data.maj(event.point.x, this.data.curs_circle_end.position.x, true);
		view.draw();
		this.data.actuval(this.data.target, this.data.curs_val_begin, this.data.curs_val_end);
	}
	// curseur_val_maj(, this.);
}

function drag_curs_end(event)
{
	// console.log("END");
	// console.log("end.x: " + this.data.curs_circle_end.position.x + "	end.y: " + this.data.curs_circle_end.position.y);
	
	// console.log(this.right_mobile);
	if (this.data.right_mobile)
	{
	// console.log(event);
		this.data.maj( this.data.curs_circle_beg.position.x, event.point.x, false);
		view.draw();

		// console.log(this.data);
		// console.log(typeof(this.data.actuval));
		// console.log(this.data.actuval);
		// console.log(this.data.actuval);
		this.data.actuval(this.data.target, this.data.curs_val_begin, this.data.curs_val_end);
	}
	// console.log(event);
	// this.maj(from.x, to.x);
	// curseur_val_maj(, this.);
}

function drag_curs_line(event)
{
	// console.log("delta:");
	// console.log(event.delta);
	// console.log(this.data.line_curs.position);
	// console.log(this.position);
	if (this.data.right_mobile && this.data.left_mobile)
	{
		var x_beg = this.data.curs_circle_beg.position.x + event.delta.x;
		var x_end = this.data.curs_circle_end.position.x + event.delta.x;

		if (!((x_beg < this.data.from.x) || (x_end > this.data.to.x)))
			this.data.maj(x_beg, x_end, true);
		//	la il faudrai mraquer le debut, la fin et le delta;


		view.draw();	
		this.data.actuval(this.data.target, this.data.curs_val_begin, this.data.curs_val_end);
	// this.actuval();
	}

}

// function drag_curs(event)
// {
// 	curseur_val_maj();
// }

//	affiche la modification et met a jour les valeurs
function	curseur_val_maj(x_beg, x_end, beg)
{
	//	recalle les valeur
	if (beg)
	{

		if (x_beg < this.from.x)
			x_beg = this.from.x;

		if (x_end < x_beg + this.marge)
			x_end = x_beg + this.marge;
	}

		if (x_end > this.to.x)
			x_end = this.to.x;

		if (x_beg > x_end - this.marge)
			x_beg = x_end - this.marge;

	if (!beg)
	{

		if (x_beg < this.from.x)
			x_beg = this.from.x;

		if (x_end < x_beg + this.marge)
			x_end = x_beg + this.marge;
	}




	var delta_val_x = this.to.x - this.from.x;
	var delta_time = this.inter_val_end - this.inter_val_begin;
	var val = x_beg - this.from.x;
	var segment = this.line_curs.segments;

	//	on redefini la valeur de debut;
	this.curs_val_begin = (val / delta_val_x) * delta_time + this.inter_val_begin;
	// on redessine le curseur begin
	this.curs_circle_beg.position.x = x_beg;
	// on redessine la ligne begin
	

	// console.log(this.line_curs.segments[0].point.x);
	segment[0].point.x = x_beg;
	segment[3].point.x = x_beg;



	val = x_end - this.from.x;
	//	on redefini la valeur de fin
	this.curs_val_end = (val / delta_val_x) * delta_time + this.inter_val_begin;
	// on redessine le curseur end
	this.curs_circle_end.position.x = x_end;
	// on redessine la ligne end
	segment[1].point.x = x_end;
	segment[2].point.x = x_end;

	// console.log("val:	"+val);
	// console.log("delta_val_x:	"+delta_val_x);
	// console.log("delta_time:	"+delta_time);
	// console.log("this.inter_val_begin:	"+this.inter_val_begin);

	//	il faut avoir la position x_beg
	//	il faut avoir la position x_ebd
	//	on doit donc maj
	//		la position de: line_curs;

}




/*
un va cree un objet curseur.

-position variable,
-on poura augmenter	=> UN espace temprel AMOVIBLE.

*/

//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================
//	================================================================================================================================================================================================================================================================




function drag_curs_end_fix(event)
{
	// console.log("END");
	// console.log("end.x: " + this.data.curs_circle_end.position.x + "	end.y: " + this.data.curs_circle_end.position.y);
	
	// console.log(this.right_mobile);
	if (this.data.right_mobile)
	{
	// console.log(event);
		this.data.maj( this.data.curs_circle_beg.position.x, event.point.x, false);
		view.draw();

		// console.log(this.data);
		// console.log(typeof(this.data.actuval));
		// console.log(this.data.actuval);
		// console.log(this.data.actuval);
		this.data.actuval(this.data.target, this.data.curs_val_begin, this.data.curs_val_end);
	}
	// console.log(event);
	// this.maj(from.x, to.x);
	// curseur_val_maj(, this.);
}





//	cette fonction dois dir en dessou de quelle valeur est elle
function	get_info(val, obj)
{
	var x_beg = obj.from.x;
	var delta_x = obj.to.x - obj.from.x;
	var ratio = ((val - x_beg) / delta_x);
	
	var indice = Math.round(ratio * (obj.unite.length - 1));

	// console.log(obj);
	// console.log(obj.unite);
	// console.log(obj.unite.length);
	// console.log("val: 		"+(val - x_beg));
	// console.log("ratio: 	"+ratio);
	// console.log("indice: 	"+indice);

	return({indice:indice, x_end:((indice + 0.0) / (obj.unite.length - 1)) * delta_x + x_beg});
	// var i = 0;

	// for (i = 1; i < tab_unite.lenght - 1; i++)
	// {
	// 	if (val >= (tab_unite[i] + tab_unite[i - 1]) / 2 && val <= (tab_unite[i] + tab_unite[i + 1]) / 2)
	// 	{

	// 	}
	// }

	// return (i);
}

function	curseur_val_maj_fix(x_beg, x_end, beg)
{
	//	recalle les valeur
	if (beg)
	{

		if (x_beg < this.from.x)
			x_beg = this.from.x;

		if (x_end < x_beg + this.marge)
			x_end = x_beg + this.marge;
	}

		if (x_end > this.to.x)
			x_end = this.to.x;

		if (x_beg > x_end - this.marge)
			x_beg = x_end - this.marge;

	if (!beg)
	{

		if (x_beg < this.from.x)
			x_beg = this.from.x;

		if (x_end < x_beg + this.marge)
			x_end = x_beg + this.marge;
	}

	var result = get_info(x_end, this);

	x_end = result.x_end;


	var delta_val_x = this.to.x - this.from.x;
	var delta_time = this.inter_val_end - this.inter_val_begin;
	var val = x_beg - this.from.x;
	var segment = this.line_curs.segments;


//	ICI on va cree les segment en fonction des valeur
	
	

	//	on redefini la valeur de debut;
	this.curs_val_begin = (val / delta_val_x) * delta_time + this.inter_val_begin;
	// on redessine le curseur begin
	this.curs_circle_beg.position.x = x_beg;
	// on redessine la ligne begin
	

	// console.log(this.line_curs.segments[0].point.x);
	segment[0].point.x = x_beg;
	segment[3].point.x = x_beg;



	val = this.unite[result.indice];
	//	on redefini la valeur de fin
	this.curs_val_begin = 0;//(val / delta_val_x) * delta_time + this.inter_val_begin;
	this.curs_val_end = val;//(val / delta_val_x) * delta_time + this.inter_val_begin;
	// on redessine le curseur end
	this.curs_circle_end.position.x = x_end;
	// on redessine la ligne end
	segment[1].point.x = x_end;
	segment[2].point.x = x_end;

	// console.log("val:	"+val);
	// console.log("delta_val_x:	"+delta_val_x);
	// console.log("delta_time:	"+delta_time);
	// console.log("this.inter_val_begin:	"+this.inter_val_begin);

	//	il faut avoir la position x_beg
	//	il faut avoir la position x_ebd
	//	on doit donc maj
	//		la position de: line_curs;

}











//	2eme edition avec les valeur
//	n va deja faire apparaitre les 

function	init_unite(init_val, tab_mult,  obj)
{
	var tab_unit = [];
	var val = init_val;
	// console.log("tab_mult:");
	// console.log(tab_mult);
	// console.log(tab_mult.length);
	for (var x = 0; x < tab_mult.length; x++)
	{
		// console.log('IM NOT HERE');
		val *= tab_mult[x];
		tab_unit[x] = val;
	}
	add_interstice(tab_unit, obj);
	return (tab_unit);
}

function	add_interstice(tab_unit, obj)
{
	// console.warn("OUIIIIIII");
	// console.info(tab_unit);
	 // console.log(obj);
	// console.log(obj);
	// console.error(tab_unit);
	// console.log(obj);
	// console.log(obj.from);
	// console.log(obj.to);

	var marge = 4;

	var coef_x = (obj.to.x - obj.from.x) / (tab_unit.length - 1);

	for (var x in tab_unit)
	{
		//	On va parcourir toute lesinterval
		var path = new Path();

		path.add(new Point(obj.from.x + x * coef_x, obj.from.y));
		path.add(new Point(obj.from.x + x * coef_x, obj.to.y));

		path.strokeWidth = marge;
		// path.strokeColor = new Color({hue:0, brightness:0.03, saturation: 0.7, alpha: 0.6});
		// path.alpha = 0.6; 
		path.strokeCap = 'round';
		// console.log("you");

		// path.add(new Point());

		obj.group.addChild(path);
		// console.error(tab_unit[x]);
	}
}

function	Curseur_2(from, to, val_beg, val_end, left, right, target, actuval, tab_mult)
// function	Curseur(from, to, val_beg, val_end, left, right)
{
	this.group = new Group();
	// console.warn(actuval);
	this.left_mobile = left;
	this.right_mobile = right;
	// this.left_mobile = left;
	// this.right_mobile = right;

	this.target = target;
	this.actuval = actuval; // en gros c'eset une parite de l'adresse avec myDad
	// console.warn(this.actuval);
	// this.name_val_end = name_val_end;
	
	this.from = from;
	this.to = to;
	this.inter_val_begin = val_beg;
	this.inter_val_end = val_end;
	this.curs_val_begin = val_beg;
	this.curs_val_end = val_end;
	this.marge = (to.y - from.y) / 10;
	this.get_time_interval = function()
		{
			console.error({begin: this.curs_val_begin, end: this.curs_val_end});
			return({begin: this.curs_val_begin, end: this.curs_val_end});
		};


	this.delta_y = (to.y - from.y);
	// this.rayon = this.delta_y / 2;
	this.hue = 160;

	this.style_active_style	= {
		fillColor: new Color({ hue: this.hue, saturation: 0.7, brightness:0.8}),
		strokeColor: new Color({ hue: this.hue, saturation: 0.7, brightness:0.2}),
    	strokeWidth: Math.ceil(this.delta_y / 30) + 1
    };

	this.style_passive_style = {
		fillColor: new Color({ hue: this.hue, saturation: 0.3, brightness:0.7}),
		strokeColor: new Color({ hue: this.hue, saturation: 0.3, brightness:0.3}),
    	strokeWidth: Math.ceil(this.delta_y / 30) + 1
    };


//	Ligne du fond
	this.line_interval = new Path();
	this.line_interval.add(new Point(from.x, from.y + this.delta_y / 4));
	this.line_interval.add(new Point(to.x, from.y + this.delta_y / 4));
	this.line_interval.add(new Point(to.x, to.y - this.delta_y / 4));
	this.line_interval.add(new Point(from.x, to.y - this.delta_y / 4));
	this.line_interval.closed = true;
	// this.line_interval.style = this.style_passive_style;


//	ligne de valeur
	this.line_curs = new Path();
	this.line_curs.add(new Point(from.x, from.y + this.delta_y / 4));
	this.line_curs.add(new Point(to.x, from.y + this.delta_y / 4));
	this.line_curs.add(new Point(to.x, to.y - this.delta_y / 4));
	this.line_curs.add(new Point(from.x, to.y - this.delta_y / 4));
	this.line_curs.closed = true;
	// this.line_curs.style = this.style_active_style;
	this.line_curs.data = this;
	this.line_curs.onMouseDrag = drag_curs_line;






//	Les crecle de debut et de fin
	this.curs_circle_beg = new Path.Circle(new Point(from.x, (from.y + to.y) / 2), this.delta_y / 2);
	this.curs_circle_end = new Path.Circle(new Point(to.x, (from.y + to.y) / 2), this.delta_y / 2);

	if (this.left_mobile)
	{
		// this.curs_circle_beg.style = this.style_active_style;
	}
	this.curs_circle_beg.data = this;
	this.curs_circle_beg.onMouseDrag = drag_curs_begin;


	if (this.right_mobile)
	{ 
		// this.curs_circle_end.style = this.style_active_style;
	}
	this.curs_circle_end.data = this;
	this.curs_circle_end.onMouseDrag = drag_curs_end_fix;

	this.delta_val = this.curs_circle_end.position.y * this.curs_circle_beg.position.y ;

	this.maj = curseur_val_maj_fix; // fonction de mis a jour genre calcul coef + reaffichage tout ca
	// this.actuval = function(){};
	// this.onMouseDrag = drag_curs;




//	add_interstice(this);




	view.draw();

	// console.log(this.line_interval);

	// console.log("befooooor");
	this.group.addChild(this.line_interval);
	this.group.addChild(this.line_curs);
//	Les truc intermediaire
	this.unite = init_unite((1000 * 60), tab_mult, this);

	this.group.addChild(this.curs_circle_beg);
	this.group.addChild(this.curs_circle_end);
	// console.log("afteeeeer");

	this.switch_draw = function()
	{
		// console.log("yolooooo");
		for (var x in this.group.children)
		{
			// console.log(this.group.children[x].visible);
			if (this.group.children[x].visible == true)
			{
				// console.log("thug1");
				this.group.children[x].visible = false;
				// console.log(this.group.children[x].visible);

			}
			else
			{
				// console.log("thug2");
				this.group.children[x].visible = true;
				// console.log(this.group.children[x].visible);
			}
		}
		view.draw();
	};

	this.switch_draw();

	view.draw();
	// this.drag_beg;
}



