
var last_said_vocable = 0;
var last_said_sentence_length = 0;
var last_said_sentence_pop = 0;
var last_said_pop_by_sentence = 0;
var last_said_time_unite = 0;
var last_speech_by_day = 0;
// var last_sentence_by_speech = 0;

var all_said;	// le nombre dit depuis la dernier fois: 

function	update_glb_vocabulary(man_activ)
{
	var learning_nb = 10;
	var condition1 = Math.random() < ((all_said - last_said_vocable) / learning_nb);
	var condition2 = man_activ.vocabulary.length < all_elem.length;
	var unused_elem = [];
	var indice = 0;

	if (condition1 && condition2)
	{
		// on fait la liste des mots non apris.
		// on en prend un au hasard.
		// console.log(all_elem);
		unused_elem = def_unused_elem(all_elem, man_activ.vocabulary);
		// console.log("unused_elem:");
		// console.log(unused_elem);
		indice = Math.floor(Math.random() * unused_elem.length);
		man_activ.vocabulary[man_activ.vocabulary.length] = unused_elem[indice];

		last_said_vocable = all_said;
	}
}

/*
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
*/

function	add_one_speech()
{
	var minute = 1000 * 60;
	var heure = minute * 60;
	var time_begin = 7 * heure;
	var time_fourchette = 02 * heure;


	var time_speech = Math.random() * time_fourchette + time_begin;
	var speech = new Discussion(time_speech, 1, (1000 * 60) * 15);
	
	// man_activ.discussions[0] = new Discussion(time_speech, 1, minute_tik * 15);
	return(speech);
}

function	update_speech_by_day(man_activ)
{
	var learning_nb = 10;

	// console.log("all_said:"+all_said);
	// console.log("last_speech_by_day:"+last_speech_by_day);
	// console.log("diff:"+(all_said - last_speech_by_day));
	var condition1 = Math.random() < ((all_said - last_speech_by_day) / learning_nb);
	var unused_elem = [];
	var indice = 0;

	if (condition1)
	{
		man_activ.discussions[man_activ.discussions.length] = add_one_speech();
		man_activ.speech_by_day++;
		last_speech_by_day = all_said;
	}
}
//	var last_all;	// le nomre de mot total a ce moment la
	//on ajoute une image si random() < 
	// le nombre de phrase produite / nb_image_maitriser/appri

	//	1/10 				:chaque jour
	//	1/( - nb_image * Math.random())	:chaque jour
	/*
		-on sauvgarde le dernier nombre de phrase produite ou/et le dernier nombre de mot employer quand on a updater
		-on le compare au nombre acuel.
		-si diff / nb_mot

		

	*/

// function update_speech_by_day(argument) {
// 	// body...
// }

function	update_glb_sentence_length(man_activ)
{
	var learning_nb = 7 + (20 * man_activ.sentence_length / 5);
	var condition1 = Math.random() < ((all_said - last_said_sentence_length) / learning_nb);

	if (condition1)
	{
		// on incrementeglb_sentence_length
		man_activ.sentence_length++;
		last_said_sentence_length = all_said;
	}

}



function	update_sentence_pop(speech, max_pop)
{
	var learning_nb = 5 + (15 * speech.pop_by_sentence / 5);
	
	var condition1 = speech.sentence_pop < max_pop && Math.random() < (((all_said - last_said_sentence_pop) / learning_nb));

	if (condition1)
	{
		// Il faut faire une truc
		speech.sentence_pop++;
		last_said_sentence_pop = all_said;
	}
}


function	update_pop_by_sentence(speech, max_pop)
{
	var learning_nb = 10 + (5 * speech.pop_by_sentence / 5);

	var condition1 = speech.pop_by_sentence < max_pop && Math.random() < ((all_said - last_said_pop_by_sentence) / learning_nb);

	if (condition1)
	{
		// Il faut faire une truc
		speech.pop_by_sentence++;
		last_said_pop_by_sentence = all_said;
	}

}


function	update_time_unite(speech)
{
	var learning_nb = 3;

	var condition1 = Math.random() * 1.1 < ((all_said - last_said_time_unite) / learning_nb);

	if (condition1)
	{
		speech.time_unite *= 0.95;
		last_said_time_unite = all_said;
	}

}





function	get_nb_all_said(man_activ)
{
	//	on conte le nombre totale de mot employer dans chanque discution.
	var totale_word = 0;

	for (var x = 0; x < man_activ.discussions.length; x++)
	{
		totale_word += man_activ.discussions[x].nb_img;
	}
	return (totale_word);
}

function	not_include(elem, vocabulary)
{
	// console.log("youpi");
	// console.log(elem);
	// console.log(vocabulary);
	for (var x in vocabulary)
	{
		// console.warn("x:"+x);
		// console.log(vocabulary[x]);
		if (vocabulary[x] != undefined && elem.elemid == vocabulary[x].elemid)
		{
			return (false);
		}
	}
	return (true);
}

function	def_unused_elem(list_elem, vocabulary)
{
	var lst = [];

	for (var x in list_elem)
	{
		if (not_include(list_elem[x], vocabulary))
		{
			lst[lst.length] = list_elem[x];
		}
	}
	return (lst);
}

// function update_sentence_by_speech(speech)
// {
// 	var learning_nb = 10;

// 	var condition1 = Math.random() * 1.1 < ((all_said - last_sentence_by_speech) / learning_nb);

// 	if (condition1)
// 	{
// 		speech.time_unite *= 0.95;
// 		last_sentence_by_speech = all_said;
// 	}

// }

function	update_param(man_activ)
{
	var max_img_by_sentence = 7;

	all_said = get_nb_all_said(man_activ);
	update_glb_vocabulary(man_activ);
	update_speech_by_day(man_activ);
	update_glb_sentence_length(man_activ);

	for (var x in man_activ.discussions)
	{
		x[0] = "coucou";
		update_sentence_pop(man_activ.discussions[x], man_activ.sentence_length);
		update_pop_by_sentence(man_activ.discussions[x], max_img_by_sentence);
		update_time_unite(man_activ.discussions[x]);
		// update_sentence_by_speech(man_activ.discussions[x]);

	}
}
