/*
	Une [** DISCUTION **] est destiner a reutiliser frequament les meme phrase.
	
	Elle est defini par :
		-un ensemble de phrase	: avec des stat du type nombre d'utilisation par image
		-un nombre max de mot par phrase
		-un monbre max de phrase par conversation
		-un temp moyen entre chaque phrase

		(plus tard)
		-un ou plusieur moment dans la journe (valable plus tard)
		-un mode: quotidien, hebdomadere, aucasionel

	Elle se complexifie au court du temps:
		-En augmentant/enrichissant sont panelle de phrase
		-En augmentant le nombre max de mot par phrase
		-En augmentant le nombre max de phrase par discution
		-en diminuant le temp moyen entre deux phrase

	Declanchement:   == C'est le fait qu'elle apparaisse ou non dans la journer ==
		Ca sera gere en amont, il y aura un manageur de conversaqui choisira de qui declancher quand

	Realisation:     == C'est quand elle genere les phrase de la cnversation ==
		-on determine le nombre de phrase;

		pour chaque phrase:
			-On choisie le nombre de mot dans la phrase
			-On choisie une phrase dans l'historique de la conversation (il y aura tout les doublon pour augmenter la probailiter de se repeter)
			-On l'indice de mutation
			-On rajoute un mot au hasard (ou pas) apres l'indice de mutation (plus tard ce pourra etre selon les mot les plus utiliser dans la conversarion)
			-On met a jour les stat.

*/

/*
	-Image disponible
	-Conversation existante

	-historique:temporel
	-Historique:'alphabetique'
	
	-Action journalier
*/

/*
	Globale managment:
		- system d'aprentissage:
				fournis les image disponible a lutilisation // Au debut ce serra juste (1/100 pour chaque utilisation) || (1/10 par jour)

		- manage conversation:
				cree un nouvelle conversation,
				declanche les conversation 
*/


/*
-on genere les plage d'activiter
-on les dessine

-on genere des conversation qui genere des conversation. (l'augmentation pourra etre deffini en fonction de la conplexite de ce qui a ete produit en parole)
-on defini 2/3 regle pour genere une phrase 	
*/


//Variable globale
var tab_discution = [];
var activ;
var minute_tik = 60000;
var hour_tik = 3600000;
var day_tik = 86400000;

var globale_time_begin;
var globale_time_end;

// var time_wakeup = 0;// 7h30
// var time_asleep = 0;// 22h00
// var time_interval = 0;// 2h
// var time_precision = 0;// 2h


function	Stat_tab(tab)
{
	this.min 				= get_the_min(tab);
	this.max 				= get_the_max(tab);
	this.moyenne 			= get_moyenne(tab);
	this.median 			= get_median(tab);
	this.ecart_type 		= get_eccart_type(tab);
}

//	speech
function	Discussion(time, average_sentence,time_unite)
{
	this.history = [];
	this.time = time;							//le temps dans la journer en sois
	this.sentence_pop = average_sentence;		//nombre moyen de phrase
	this.pop_by_sentence = 1;
	this.time_unite = time_unite;				//le temp entre deux phrase

	//	Pre statistique
	this.nb_use = 0;
	this.nb_img = 0;
	this.nb_sentence = 0;
}

function	Activite()
{
	this.time_morning 	= 6  * hour_tik;// 7h30
	this.time_sleep 	= 20 * hour_tik;// 22h00
	this.time_interval 	= 2  * hour_tik;// 2h
	this.time_precision = 1;// parametre de generation
}

function	Manage_activite(time_begening, nb_day)
{
	var size = all_elem.length; 

	this.speech_by_day = 4;
	this.sentence_length = 4;
	this.vocabulary = [];			//{elemid:Math.ceil(Math.random() * size)} //  liste des element du vocabulaire  on pourrai aussi faire une liste de paire de poid [{elem:elem_id, coef:1}];	
	this.begening = time_begening;
	this.ending = time_begening + nb_day * (1000 * 60 * 60 * 24);
	this.nb_day = nb_day;
	this.time_line = [];			//[{begening:beg, ending:end}];	
	this.discussions = [];			// d'objet Discutin
	this.glob_history = [];			// d'objet sentence

	//	actualisation des varaible globale sur le temps
	globale_time_begin = this.begening;
	globale_time_end = this.ending;
}




/*
	// this.history = [];
	this.time = time;
	this.sentence_pop = average_sentence;		//nombre moyen de phrase
	this.pop_by_sentence = 1;
	// this.average_sentence_length = average_sentence;		//nombre moyen de phrase
	this.time_unite = time_unite;

*/

// function	updtt


function	time_to_console(time)
{
	var date = new Date(time);
	// var hour = date.getHours();
	// var min = date.getMinutes();
	console.log(date.toUTCString());
}



/*
	Return:
		-1: a > b
		 0: a == b
		 1: a < b 
*/
function	cmp_time(a, b)
{
	// on compare le temp d'aparition.
	// console.log("cmp_time");
	// console.log(a);
	// console.log(b);
	if (a == undefined || b == undefined)
		return (0);
	return (b.time - a.time);
}

function	cmp_alphabetic(a, b)
{
	// on compare les phrase avec leur id
	//	il fautcomparer deux tableau de 
	
	var min = a.listElemId.length >= b.listElemId.length ? b.listElemId.length : a.listElemId.length;
	var x = 0;
	while (x < min && a.listElemId[x] == b.listElemId[x])
	{
		x++;
	}
	if (x < min)
	{
		return (b.listElemId[x] - a.listElemId[x]);
	}
	else
	{
		// a.listElemId[x] != b.listElemId[x];
		return (b.listElemId.length - a.listElemId.length);
	}
}



// function	add_discution(man_activ)
// {
// 	var indice = man_activ.length - 1;
// 	man_activ.discussions[indice] = new Discussion(Math.random() * day_tik, 1, minute_tik);
// 	// var discution = new Discussion();
// 	// On cree la premiere discution
// }

// function	fill_glob_history(man_activ)
// {

// }


function	print_timeline(man_activ)
{
	var result = "";
	var hour = 0;
	var min = 0;
	var date = {};

	for (var x = 0; x < man_activ.nb_day; x++)
	{
		delete date;
		date = new Date(man_activ.time_line[x].begening);
		hour = date.getHours();
		min = date.getMinutes();
		console.log("matin 	"+hour+":"+min);

		delete date;
		date = new Date(man_activ.time_line[x].ending);
		hour = date.getHours();
		min = date.getMinutes();
		console.log("soir	"+hour+":"+min+"\n\n\n");
	}
}

function	fill_time_line(ocupy)
{
	var activ = new Activite();
	var beg;
	var end;
	var tmp = ocupy.begening;

	// console.log(ocupy);

	for (var x = 0; x < ocupy.nb_day; x++)
	{
		beg = generate_coef(activ.time_morning + tmp, activ.time_precision, hour_tik * 2);
		end = generate_coef(activ.time_sleep + tmp, activ.time_precision, hour_tik * 1.5);
		ocupy.time_line[x] = {begening:beg, ending:end};
		tmp += day_tik;
		// console.log(x);
	}
	// console.log(ocupy);
}

function	generate_coef(value, precision, plage)
{
	// var nb_time = 10;
	var result = 0;
	var curseur = 0;		//	valeur qui centre un peu les valeur;

	for (var i = 0; i < precision; i++)
	{
		if (curseur > 0 && curseur <= 1)
			result += (((Math.random() + curseur)/ 2) - 0.5) * plage;
		else
			result += ((Math.random() - 0.5) * plage);
	}
	result /= precision;
	result += value;
	return (result);
}




/*
	L'idee ici serra de cree 
		-un contexte temporel : (une periode, et des heure de lever et de coucher pour chaque journee)
			puis
		-declancher 
		-un acteur evenmentciel.
*/

function insert(index, item, tab) {
  tab.splice(index, 0, item);
}


function	insert_sort(elem, tab, cmp)
{
	var min = 0;
	var max = tab.length - 1;
	var mid = Math.floor((min + max) / 2);


	//	on test d'abord le premier et le dernier
	//	on le fait par dicotomie ou approche similaire
	if (cmp(elem, tab[0], cmp) >= 0)
		insert(0, elem, tab);
	else if (cmp(tab[tab.length - 1], elem) >= 0)
		tab[tab.length] = elem;
	else
	{
		// on l'insert par dicotomie
		// var a = min;
		while (!(cmp(tab[mid], elem) >= 0 && cmp(elem, tab[mid + 1] >= 0)))
		{
			// on increm min, max, mid
			if (cpm(elem, tab[mid] > 0))
			{
				max = mid;
				mid = Math.floor((max + min) / 2);
			}
			else if (cmp(elem, tab[mid]) == 0)
			{
				// on a trouver une reponse
				// on insert apres
				break;
			}
			else
			{
				min = mid;
				mid = Math.floor((max + min) / 2);
			}
		}
		// on insert la phrase entre mid et mid + 1
		// donc a l'indice mid + 1 mais il faut pousser ceux de derier
		insert(mid + 1, elem, tab);
	}
}

//	pour updater l'historique principale
function	merge_list(to_insert, to_copy, cmp)
{
	to_insert.sort(cmp);
	//on insert les ellement de to_copy dans to_insert'
	for (var x = 0; x < to_copy.length; x++)
	{
		insert_sort(to_copy[x], to_insert, cmp);
	}
}

function	elem_is_not_include(elem, vocabulary)
{
	for (var x in vocabulary)
	{
		if (elem.elemid == vocabulary[x].elemid)
		{
			return (false);
		}
	}
	return (true);
}


function	generate_sentence(time, vocabulary, nb_elem, hystory, indice)
{
	// la il faut construire une liste;
	var nb_max = Math.ceil(nb_elem * ((Math.random() + 0.6 ) / 2));
	var listElemId = [];
	var vocab_copy = vocabulary.slice(0, vocabulary.length);
	// var vocab_new = [];
	var indice = 0;
	var indice_sentence = 0;
	var tmp;
	var stop = 0;
	var tmp2;

	//	on copi le vocabulaire dans un tableau
	//	on prend un element qu'on lui retir
	//	on recomence
	// console.log("Generate sentence");
	// console.log("vocabulary:"+nb_max);
	// console.log("nb_elem:"+nb_elem+"\n");
	// console.warn(vocabulary);
	// console.warn(vocab_copy);
	nb_max = nb_max > vocab_copy.length ? vocab_copy.length : nb_max;
	for (var x = 0; x < nb_max; x++)
	{
		stop = 0;
		indice = Math.floor((vocab_copy.length) * Math.random());
		tmp2 = "";
		while (vocab_copy[indice % vocab_copy.length] == undefined)
		{
			// tmp2 = vocab_copy[];
			indice = ((indice + 1) % vocab_copy.length);
			stop++;
			if (stop > 200)
			{
				stop = -1;
				break;
			}
		}

		if (stop >= 0)
		{
			// console.info("vacob_copy:"+indice);
			// console.log("indice:"+indice);
			// console.log(vocab_copy);
			// console.log(vocab_copy[indice]);
			// console.log(vocab_copy[indice].elemid);
			// tmp = parseInt(vocab_copy[indice].elemid);
			// console.error(indice);
			// console.error(vocab_copy[indice]);
			// console.error(tmp);
			listElemId[x] = parseInt(vocab_copy[indice].elemid);
			vocab_copy[indice] = undefined;
			// la il faut cree une phrase avec le bon nombre de mots et sans doublon
			// console.warn(listElemId);
			// console.warn("indice:");
		}
		else
		{
			console.error("On a un elem d'image indeterminer...");
			console.log("x:"+x);
			console.log("nb_max:"+nb_max);
			console.log("indice:"+indice);
			console.log(listElemId);
			console.log(vocab_copy);
			console.log(vocabulary);
			// console.error("On a trop de truc indeterminer	x:"+x+"	nb_max:"+nb_max+"	indice:"+indice);
			// // console.log("copy");
			// console.log(vocab_copy);

		}
	// console.log("indice:"+indice);

	}
	var sentence = new  myVoiceSentence(all_phrase.length, listElemId, time);
	//all_phrase[all_phrase.length] = sentence;
	// console.warn(listElemId);
	return (sentence);
}

//	genere les phrase d'une journer pour une conversation
function	play_speech(speech, time_day, vocabulary, indice_sentence)
{
	//lisrte des senstens dite
	var lst_sentence = [];
	var during_time = speech.time_unite;
	var nb_sentence = speech.sentence_pop - 1 + Math.floor(Math.random() * 2.99);
	var time = generate_coef(time_day + speech.time, 3, hour_tik * 2);
	//generate_coef(value, precision, plage);
	// var indice = ;
	
	if (nb_sentence < 1)
		nb_sentence = 1;
	// console.log("play_speech nb_sentence:"+nb_sentence);
	for (var x = 0; x < nb_sentence; x++)
	{
		// il faut mieux determiner le temps;

		lst_sentence[x] = generate_sentence(time, vocabulary, speech.pop_by_sentence, speech.hystory, x + indice_sentence);
		//add_one_sentence(lst_sentence[x]);
		// console.log(lst_sentence[x].listElemId);

		add_one_sentence(lst_sentence[x]);
		// all_phrase[lst_sentence[x]['sentenceId']] = lst_sentence[x];
		// actual_elem_stat(lst_sentence[x]);
		
		// console.warn(lst_sentence[x]);

		speech.nb_img += lst_sentence[x].listElemId.length;
		speech.nb_sentence++;
		time += speech.time_unite;
	}
	// la il faut merge ave
	speech.nb_use++;
	// time_to_console(time);
	return (lst_sentence);
}


//	genere toute les conversation de la journe
function	realise_day(man_activ, time)
{
	// on genere toute les discution sensser etre presente dans la journer en question.
	// pour une discution: play_spech();
	var tempon = [];


	for (var x = 0; x < man_activ.discussions.length; x++)
	{

			  // play_speech(speech, time_day, vocabulary, indice_sentence)
		tempon = play_speech(man_activ.discussions[x], time, man_activ.vocabulary, man_activ.glob_history.length);
		// console.log("tempon:");
		// console.log(tempon);
		//	la il faut actualiser l'historique globale glob_history
		merge_list(man_activ.glob_history, tempon, cmp_time);
		merge_list(man_activ.discussions[x].history, tempon, cmp_time);
		time += day_tik ;//+ (1000 * 60 * 60 * 3);
		console.log();
	}

}

function reset_glb_var()
{
	last_said_vocable = 0;
	last_said_sentence_length = 0;
	last_said_sentence_pop = 0;
	last_said_pop_by_sentence = 0;
	last_said_time_unite = 0;
	last_speech_by_day = 0;
	// last_sentence_by_speech = 0;
	all_said = 0;
}

function	senario_1(nb_day)
{
	// console.error("i come from here");
	reset_glb_var();
	// get_image(all_elem);																
	var delta_time = hour_tik * 15;
	var time_speech = Math.random() * delta_time + hour_tik * 8;

	// var nb_day = 90;
	var time = Date.now() - (nb_day * day_tik);
	time = time - (time % day_tik);
	var man_activ = new Manage_activite(time, nb_day);


	// preparation du temp de parole
	fill_time_line(man_activ);
	man_activ.discussions[0] = new Discussion(time_speech, 1, minute_tik * 15);
	man_activ.vocabulary[0] = all_elem[parseInt(Math.random() * all_elem.length)];
	// print_timeline(man_activ);
	//cree une conversastion

	// on genraire toute les conversation de hcaque jour et on fait evoluer les parametre.
	for (var x = 0; x < nb_day; x++)
	{
		realise_day(man_activ, time + x * day_tik);
		update_param(man_activ);
		// ensuite on maj si besoin
	}
	// console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
	// console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
	// console.log(man_activ);
//	all_phrase = man_activ.glob_history;
}

/*

	on va rtacer le processus

*/


/*
	-si on transfert un senario dans le truc general, on peu l'afficher.
	-on link le resultat de chaque journer dans la time line

*/