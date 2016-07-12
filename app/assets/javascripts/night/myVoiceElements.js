function myVoiceLanguage(languageid, langname) {
	this.languageid = languageid;
	this.langname = langname;
	this.updatedb = function(){
		alert("db update func not yet created");
	};
};

function myVoiceTag(tagid, languageId, tagtext) {
	this.tagid = tagid;
	this.languageid = languageId;
	this.tagtext = tagtext;
	this.updatedb = function(){
		alert("db update func not yet created");
	};
};

function myVoiceLibraryLst(librarylstid, liblsttitle, libraryid) {
	this.librarylstid = librarylstid;
	this.libraryid = libraryid;  // str contenant les id des lib de l'utilisateur
	this.liblsttitle = liblsttitle;
	//this.librarylst = {};
	this.parseIdLst = function(){
		var idlst = str.split(",");
		for(var i in idlst){
			// select lib bi id in strore in libarylst
		} 
	}
	this.updatedb = function(){
		alert("db update func not yet created");
	};
};

function myVoiceLibrary(libraryId, userId, libTitle, lstelemid) {
	this.libraryid = libraryId;
	this.userid = userId;
	this.libtitle = libTitle;
	this.lstelemid = lstelemid; // str contenant les id des élément de la library
	this.elemlst = {};
	this.parseIdLst = function(){
		var idlst = str.split(",");
		for(var i in idlst){
			// select elem bi id in strore in elemlst
		} 
	}
	this.updatedb = function(){
		alert("db update func not yet created");
	};

};

function myVoiceUser(librarylstid, userId, languageid, login, password, backupurl, setings) {
	this.languageid = languageid;
	this.userid = userId;
	this.librarylstid = librarylstid;
	this.login = login;
	this.password = password;
	this.backupurl = backupurl;
	this.interfacesetings = setings;
	this.updatedb = function(){
		alert("db update func not yet created");
	};
};

function myVoiceGlobElemAssociation(globelemassoid, listelemid) {
	this.globelemassoid = globelemassoid;
	this.listelemid = listelemid;
	this.updatedb = function(){
		alert("db update func not yet created");
	};
};

function myVoiceElemAssociation(elemassoid, userId, globelemassoid, nbuse, date) {
	this.elemassoid = elemassoid;														//	son id
	this.userid = userId;																//	user
	this.globelemassoid = globelemassoid;												//	un tableu de id des element
	this.nbuse = nbuse;																	//	le nombre d'utilisation (n'a pas de sens ca sera plustot dans les stat)
	this.date = date;																				
	this.updatedb = function(){
		alert("db update func not yet created");
	};
};

//alert("myVoiceElem");

function myVoiceElem(elemUrl, soundId, textId, state) {
	this.elemid = null;
	this.elemurl = elemUrl;
	this.soundid = soundId;
	this.textid = textId;
	this.state = state;
};


// function myVoiceElem(elemid, elemUrl, Width, user, soundId, textId, taglst, state) {
// 	this.elemid = elemid;
// 	this.elemurl = elemUrl;
// 	this.user = user;
// 	this.soundid = soundId;
// 	//this.soundelem = new myVoiceSound(soundUrl, languageId, soundId);
// 	this.textid = textId;
// 	//this.textelem = new myVoiceText(text, languageId, textId);
// 	this.width = Width;
// 	this.taglst = taglst;
// 	this.state = state;
// 	this.updatedb = function(){
// 		alert("db update func not yet created");
// 	};
// };

function myVoiceContext(contextid, time, places, activiti, interlocutor) {
	this.contextid = contextid;
	this.time = time;
	this.places = places;
	this.activiti = activiti;				
	this.interlocutor = interlocutor;
	this.updatedb = function(){
		alert("db update func not yet created");
	};
};

function myVoiceElemStat(elemstatid, userId, elemid, nbuse, elemassoid) {
	this.elemstatid = elemstatid;
	this.userid = userId;
	this.elemid = elemid;
	this.nbuse = nbuse;
	this.elemassoid = elemassoid;
	this.updatedb = function(){
		alert("db update func not yet created");
	};
};

function myVoiceGlobElemStat(globelemstatid, elemstatid, nbuse) {
	this.elemstatid = elemstatid;
	this.globelemstatid = globelemstatid;
	this.nbuse = nbuse;
	this.updatedb = function(){
		alert("db update func not yet created");
	};
};

function myVoiceLerningStat(lerningstatid, contextid, elemstatid, nbtrue) {
	this.lerningstatid = lerningstatid;
	this.contextid = contextid;
	this.elemstatid = elemstatid;
	this.nbtrue = nbtrue;
	this.updatedb = function(){
		alert("db update func not yet created");
	};
};

function myVoiceSound(soundUrl, languageId, soundId) {
	this.soundid = soundId;
	this.languageid = languageId;
	this.soundurl = soundUrl;
	this.updatedb = function(){
		alert("db update func not yet created");
	};
};

function myVoiceText(text, languageId, textId) {
	this.soundid = textId;
	this.languageid = languageId;
	this.soundurl = text;
	this.updatedb = function(){
		alert("db update func not yet created");
	};
};

function debugelem(elem) {
	var	htmlText = '</br></br>Object {\n';
	var text = 'Object {\n';
	for (var i in elem) {
		if (i !== 'debug') {
			htmlText += ' [' + i + '] => ' + elem[i] + ' </br>';
			text += '\t[' + i + '] => ' + elem[i] + '\n';
		}
	}
	text = text + '}';
	console.log(text);
	alert(text);
	return htmlText;
};

function myVoiceInterfaceSetings(){
	this.backgroundColor = "";
	this.writingpolice = "";
	this.writingsize = 15;
	this.writinglogo = "URL";
	this.writingcolor = "";
	this.tabPos = 1;
	this.speakAreaPos = 1;
	this.speakAreaColor = "";
	this.nbColumn = 3;
	this.random = 1;
	this.manual = 0;
	this.DD = 0;
	this.click = 1;
	this.sound = 0;
	this.tabnav = {
		slide : 0,
		click : 1,
	};
	this.butonColor = "";
	this.language = 0;
	this.lastchange = Date.now();
}

function myVoiceElemSetings(id){
	this.elemsetingsid = id; // ID should be the same as the Element Primary key: user_elemid
	this.width = 10;
	this.writing = {
		police: "",
		policecolor: "",
		size: 15,
		color: "",
		place: 0
	};
	this.sound = 0;
	this.lastchange = Date.now();
}



/*
function myVoiceGlobaleSentence(globaLsentenceId, listElemId, listTime) {
	this.sentenceId = globaLsentenceId;
	this.listTime = listTime;
	this.nbUse = listTime.lenght;
	this.listElemId = listElemId;
	this.updatedb = function(){
		alert("db update func not yet created");
	};
};
//*/