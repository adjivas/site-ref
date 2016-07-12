/*
	L'idee ici ce serra de faire un genre d'outil globale. Ca va remplacer l'interface.
	on vaux aussi des petit truc pour cliquer et modifier des option. courbe (ligne, ligne lisser, carer)



	histo_img: modifier le scroling, et les echele de time unite, et un calcul adoussi.

	systeme de psedo navigation dans toute les phrase (trier par ordre 'alphabetique')


	systeme de conversation: genre voloila c'est tres tres opti tout beau tout ca.




	Un onglet c'est: un titre, un rectangle a cliquer, un objet a stoquer, une fonction a appeler (sans parametre)






*/

/*
	-histroique image
	-histograme nb utilisation
	-camembert
	-affichage des phrase
*/

//	from et to, c'est les caracteristique du truc a cliquer ( au debut un rectangle )

function	tab_click()
{
	this.dad.obj.switch_draw();
}

// function	Tab(rect, obj, from, to)
// {
// 	// this.title	= "";
// 	// this.rect 	= rect;
// 	// this.obj 	= obj;

// 	// this.rect.dad = this;
// 	// this.rect.onClick = tab_click;
// }



//	les objet doive avoir unefonction switch_draw()
//	title		=> le titre
//	obj  		=> le truc qui fait le job
//	from, to    => 

function	init_the_tabs(tab_obj, tab_title, from, to, style)
{
	// on est sanser sortir/initialiser/remplir un tableau d'objet ou de truc pour les tab
	var delta_x = (to.x - from.x) / tab_obj.length;

	var from_x = from.x;
	var from_y = from.y;
	var to_x = from.x + delta_x;
	var to_y = to.y;

	var tab = [];
	// view.draw();

	for (var x in tab_obj)
	{
		// il faut faire varier les position
		tab[x] = init_one_tab(tab_title[x], tab_obj[x], new Point(from_x, from_y), new Point(to_x,to_y), style, x);
		from_x += delta_x;
		to_x += delta_x;
	// view.draw(	);

	}
	// view.draw();

	return (tab);
}

function	init_one_tab(title, obj, from, to, style, id)
{
	//path.closed = true;
	//	ici on va formater un path ou un group avec  un text et un rectangle
	// style : justification = 'center'


	var path = new Path.RoundRectangle(new Rectangle(from, to), new Size(20, 20));
	// view.draw();
	var txt = new PointText();
	// view.draw();


	txt.content = title;
	txt.style = {strokeColor : 'black'};
	txt.justification = 'center';
	txt.position = new Point((from.x + to.x) / 2, (from.y + to.y) / 2);
	txt.dad = path;

	// console.log(txt);

	path.obj = obj;
	path.style = style;
	path.addChild(txt);
	path.indice = id;

	path.onMouseDown = function(event)
	{
		// console.log();
		// console.log(this);
		indice_prev = indice;
		indice = this.indice;	// permet de diriger l'ipute de l'affichage

			if (indice_prev == indice)
			{
				if (indice == 0)
				{
					// console.log("yes III");
					// console.log(this);
					// console.log(this.obj);
					// console.log(this.obj.switch_curv);
					this.obj.switch_curv();
					this.obj.draw_the_line();
					// console.log("nb_curve:"+this.obj.nb_curve);
				}
				// console.log("On ne change pas l'image actuelle");
			}

			else
			{
				if (indice_prev != undefined)
				{
					the_tabs[indice_prev].switch_draw();
				}
				// console.log("on affiche la nouvelle immage");
				the_tabs[indice].switch_draw();
			}
	};
	txt.onMouseDown = function(event)
	{
		this.dad.onMouseDown(event);
	};

	return (path);
}

//	on va juste cree des onglet qui link vers une fonction d'un objet. On pourrait meme passer et l'objet et le nom de la fonction.
//	donc tout ce qui est dimmentionement. ce n'est pas gere ici.
function	Tabs(tab_obj, tab_title, from, to)
{
	// this.margin = 20;
	// this.tab_height = 20;

	this.tab_style = {	fillColor: 	new Color({ hue: (0.3 * 360), saturation: 0.2, brightness:0.8 , alpha:0.1}),
					  	strokeColor : new Color({ hue: (0.3 * 360), saturation: 0.2, brightness:0.3 , alpha:0.9}),
						strokeWidth: 2
					};


	this.onglet = init_the_tabs(tab_obj, tab_title, from, to, this.tab_style);	// c'est la liste des obj

}





/*
- 	DONE 	rendre le texte cliquable
-	DONE 	gere le prebleme d'affichage des curseur du 1er onglet
-	DONE 	gere l'affichage des curseur en surcouche; (est ce que on les re cree qui ils apparesse ?....)

-	tester avec d'autre objet;
		-definir/transformer les autre objet... 
-	redefinir la selection des image par l'histograme
-	attaquer la representation des phrase psr truc alphabethique		=> repere les moins utiliser

-	faire un corespondance entre ce qui est selectioner et le code couleur
-	ameliorer l'histogramme
-	mettre des dates dans la grille de l'historique
-	ammeliorer de scroling des curseur (?eritage?)


-	FAIRE LA LIAISON BASE DE DONNER
*/