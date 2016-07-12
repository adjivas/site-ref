/*variable globale*/
// var img_histo;
// var pt_txt_histo;
// var group_hist;



function __get_max(tab, name)
{
    var max = 0;
	for (var x in tab)
	{
        if (tab[x] != undefined && tab[x][name] > max)
            max = tab[x][name];
    }
        return (max);
}


/*
	Il faudrait connaitre la taille en largeur. connaitre la taille en hauteur. Connaitre la position, connaitre la taille de la chiane de caractere. scaler en fonctionn de l'ecran
*/



//	truc qui affiche l'image et le text, deux variable globale this.group this.img this.pt_
function display_img(event)
{
	// if (this.)


// 	console.log(this.dad);
// 	console.log(this.data);	// => elemid pour enregistrer les image selectionner

// console.log("----------------------");
// 	console.log(this);		// pour modifier le style
// 	console.log(this.style);
// 	console.log(this.strokeWidth);
// 	console.log(this.strokeColor);
	// console.log(this.data);
	if (typeof(this.data) == "number")
	{
		the_tabs[0].switch_activ_elem(this.data);
	}
	else
	{
		the_tabs[0].switch_activ_elem(0);
	}
	// console.log(this);
	// console.log(this.data);
	// console.log(this.hasShadow());
	if (!this.hasShadow())
	{
		this.shadowColor = 'black';//this.strokeColor;
		this.shadowBlur = 10;
		this.strokeWidth *= 3;
	}
	else
	{
		this.shadowColor = undefined;
		this.strokeWidth /= 3;
	}
	/*
	// 	La il faut dire a un tableau qui est activer
	// */
	// if (this.strokeWidth > 1)
	// {
	// 	// this.strokeColor
	// 	this.strokeWidth = 1;
	// 	this.strokeColor.saturation = 0.3;
	// 	// console.log(this.strokeColor.saturatiozn);
	// 	this.strokeColor.lightness = 0.3;
	// }
	// else
	// {
	// 	this.strokeWidth = 3;
	// 	this.strokeColor.saturation = 0.6;
	// 	this.strokeColor.lightness = 0.4;
	// }
	// // console.log("coucou");
	// if (this.dad.img_histo == undefined)
	// 	this.dad.img_histo = new Raster();
	// if (this.dad.pt_txt_histo == undefined)
	// 	this.dad.pt_txt_histo = new PointText();

	// this.dad.img_histo.source = all_elem[this.data]['elemurl'];
	// this.dad.img_histo.position = this.position;
	// this.dad.img_histo.strokeBounds = 'black';
	// this.dad.img_histo.style = {strokeColor: 'black',
 //    strokeWidth: 5};

	// if (this.dad.img_histo.scaling.x < 0.99)
	// 	this.dad.img_histo.scale(this.dad.img_histo.size.width / all_elem[this.data]['width']);
	// this.dad.img_histo.scale(all_elem[this.data]['width'] / this.dad.img_histo.size.width);
	// // console.log('ON est laaaa');
	// // console.log(img_histo);
	// this.dad.img_histo.position.y = this.segments[0].point.y + this.dad.img_histo.width * this.dad.img_histo.scaling.y / 2 + 10;
	// this.dad.pt_txt_histo.position.y = this.dad.img_histo.position.y + this.dad.img_histo.width * this.dad.img_histo.scaling.y / 2 + 10;
	// this.dad.pt_txt_histo.position.x = this.dad.img_histo.position.x;
	// this.dad.pt_txt_histo.content = all_elem[this.data]['taglst'];
	// // console.log(this);
	// // console.log(this.dad.group);

	// // ici on va ajouter le fond

	// //make_backgorund(this.dad.group, all_elem[this.data]['width'], this.dad.img_histo.position);

	// this.dad.group.addChild(this.dad.img_histo);
	// this.dad.group.addChild(this.dad.pt_txt_histo);
}

//	on ajoute au group un rectangle avec une fleche vers le haut et l'image de l'elemid et le texte de dans en fonction de la taille que tu lui donne
function	make_background(group, from, to, elemid, hat, color)
{
	// console.error(elemid);
	// console.log(all_elem_stat);
	var delta_x = to.x - from.x;
	var delta_y = to.y - from.y;
	var coef_img = 0.6;
	var coef_txt = 1 - coef_img;


	var marge = 6;
	var corner = 10;
	if (hat)
	{
		var rectangle = new Rectangle(new Point(from.x, from.y + marge), new Point(to.x, to.y));
	}
	else
	{
		var rectangle = new Rectangle(new Point(from.x, from.y - marge), new Point(to.x, to.y));

	}
	var cornerSize = new Size(corner, corner);
	var path = new Path.RoundRectangle(rectangle, cornerSize);
	if (color == undefined)
	{
		path.fillColor = new Color({hue:0, brigthness:0, saturation:0.3, alpha:0.3});
	}
	else
	{
		path.fillColor = color;
	}
		path.strokeColor = 'black';
	path.strokeWidth = 1;


	var point = new Point(path.position.x, path.position.y);
	var pt = new Path.Circle(point, 4);
	

	if (hat)
	{
		// pt.fillColor = new Color({hue:(x / path.segments.length) * 360, brightness:0.8, saturation:0.3});;
		var x1 		= path.segments[3].point.x;
		var x2 		= path.segments[4].point.x;
		var x_mid	= (x1 + x2) / 2;
		var y 		= path.segments[3].point.y;


		var point1 = new Point(x_mid - marge, y);
		var point3 = new Point(x_mid + marge, y);
		var point2 = new Point(x_mid, y - marge);

		path.insert(4, point1);
		path.insert(5, point2);
		path.insert(6, point3);

	}
	// console.log(path.position);
	// path.position = position;
	group.addChild(path);


	// console.log(txtItem);

	if (all_elem[elemid] == undefined)
		elemid = 0;	

	if (all_elem[elemid] != undefined)
	{
	// console.log("Youypiiiiiiii  		8****88");

		// console.log(all_elem[elemid]);
		// var 
		var coef = 0.7;
		var nb_lettre_min = 5;


		var width = to.x - from.x - marge;
		var height = to.y - from.y;
		var min = (width < height) ? width : height;
		var img = new Raster();
		var txt = new PointText(new Point(30, 30));
		txt.position = new Point(from.x + marge, from.y + (to.y - from.y) * (1 + coef) / 2 );
		txt.content = all_elem[elemid].textid;

		var max_txt = (((width - 2 * marge) * 2) / nb_lettre_min);

		var txt_size = ((((width - 2 * marge) * 2) / txt.content.length));
		txt.fontSize = (txt_size < max_txt) ? txt_size: max_txt;
		if (txt_size >= max_txt)
		{
			txt.position.x += (nb_lettre_min - txt.content.length) * txt.fontSize / 4;
		}


		img.source = all_elem[elemid]['elemurl'];
		img.position = new Point(from.x + delta_x / 2, from.y + (delta_y * coef_img + marge) / 2);
		img.strokeBounds = 'black';
		img.strokeWidth = '3';

		console.error();
		img.scale((width * coef) / img.size.width);

		group.addChild(txt);
		group.addChild(img);

		var img_size = all_elem[elemid]['width'];
	}
	else
	{
		console.error("elemid:"+elemid);
		console.log(all_elem[0]);
	}
	// console.log(txtItem.ty);

	//	on ajoute le texte et l'image
}

//	de manier sale la fonction ne fait qu'atctualiser l'histograme
function make_histogram(elem_stat)
{
	// if (group_hist == undefined)
	// {
	// 	group_hist = new Group();
	// }
	// group_hist.removeChild();
	// variable de la grille
	var copy = [];
	var max = 0;
	var min = 0;
	// var from = new Point(30, 30);
	// var to = new Point(view.size.width - 30, view.size.height - 30);
	var nb_line = 7;
	// varaible de l'histograme
	var column_size = 1;
	var marge = 0;
	var p1 = new Point();
	var p2 = new Point();
	var	coef = 1;

	copy = elem_stat.slice(0, elem_stat.length);
	copy.sort(function(a, b)
		{
//			return 0;
			if (a != undefined && b != undefined)
				return (a['nb_use'] - b['nb_use']);	
			else
				return (0);
		});

	min = copy[0]['nb_use'];
	max = __get_max(elem_stat, 'nb_use');
	// console.log(from);
	coef = (max) / (this.to.y - this.from.y);

	draw_the_grid(0, max, nb_line, this.group, this.from, this.to);

	column_size = (this.to.x - this.from.x) / (copy.length - 1);
		// console.info(copy.length);
		// console.info(copy);
	marge = column_size / 10;

	p1.x = this.from.x + marge  * 2/3;
	p2.x = this.from.x + column_size - marge * 2/3;
	p2.y = this.to.y;

	for (var x in copy)
	{
		p1.y = this.to.y - (copy[x]['nb_use'] / coef);
		var column = new Path.Rectangle(p1, p2);
		column.dad = this;
		column.data = copy[x]['elemId'];
		column.fillColor = {hue: (copy[x]['elemId'] / copy.length) * 360, saturation: 0.3, brightness: 1, alpha: 0.65};
		column.strokeColor = {hue: (copy[x]['elemId'] / copy.length) * 360, saturation: 0.3, brightness: 0.5};
		column.onMouseDown = display_img;
		// console.warn(this);
		make_background(this.group, new Point(p1.x, this.to.y + 5), new Point(p2.x, this.to.y + this.margin_y + 5), column.data, true);
		p1.x += column_size;
		p2.x += column_size;
		// (group, from, to)
		this.group.addChild(column);
	}
}

//	il faudrait rajouter la zone pour les image
function	Histograme(from, to)
{
	// console.log("nOOOOOOOOOOOOOOOOOOOOOOOn");
	// console.warn(from);
	// console.warn(to);

	// console.info("contour");
	// var contour = new Path.Rectangle(from, to);
	// contour.strokeWidth = 3;
	// contour.strokeColor = 'pink';

	this.margin_x = (to.x - from.x) / 20;
	this.margin_y = (to.y - from.y) / 8;
	this.nb_column = 20;
	this.img_height = 70;
	this.group = new Group();
	this.from = new Point(from.x + this.margin_x, from.y);
	this.to = new Point(to.x - this.margin_x, to.y - this.margin_y);
	// this.get_histo = function()
	// {
	// console.log("nOOOOOOOOOOOOOOOOOOOOOOOn");
	// 	// console.log("_____");
	// 	console.log(all_elem_stat);
	// 	console.log(this.group);
	// };


		// console.log("_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+");
		// // console.warn(this.group);
		// console.log("_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+");
 	this.draw =  make_histogram;

 	this.draw(all_elem_stat);
		switch_visible(this.group);
	this.switch_draw = function()
	{
		switch_visible(this.group);
	};

	this.display_img = display_img;

	// console.log("this:");
	// console.log("from:");
	// console.log("to:");
	// console.log("----------------------------------------------");
	// console.log(this);
	// console.log(this.from);
	// console.log(this.to);
	// console.log("----------------------------------------------");

	// console.log({this:this, from:this.from, to:this.to})
	// console.log();
	/*
		-On a besoin d'un group pour staquer tout les path.
		-une fonction pour metre invisible le 
	*/


}



/*
	-group_hist 	=> GLOBALE

	-La fonction ressoit all_elem_stat
	-elle en fait une copie
	-
*/



/*
	-La on va considerer que les donner charger ne varie oas endant la visualisation
	-on fait apparaitre l'image pour le dernier selectionee
	-on pourra selectioner plusieur image simultanement
	-pour selectioner une image il faut lui clique desse. Pour la deselectionner c'est pareille
	

	=>	on cree le graphe a la creation de l'objet
	=>	ensuite on switch le truc en visible ou invisible
*/