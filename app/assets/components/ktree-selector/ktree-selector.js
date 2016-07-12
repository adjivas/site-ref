        Polymer({
            is: "ktree-selector",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: "Définir l'autisme",
                                presentation: "<p class=\"textktree\">L’« autisme » renvoie à une catégorie de <b class=\"textktree\">troubles neurodéveloppementaux</b> recouvrant des réalités distinctes et amenant à rechercher des solutions différentes, variées et adaptées aux spécificités propres de chaque situation</p><p class=\"textktree\">Cette partie est consacrée à la description de ces troubles, regroupés sous le nom de « troubles du spectre de l’autisme » (TSA). Cette dénomination tend aujourd’hui à se substituer à celle de troubles envahissants du développement (TED), utilisée jusqu’à présent en référence à la <b class=\"textktree\">Classification internationale des maladies – dixième version (CIM-10)</b>, éditée par <b class=\"textktree\">l’Organisation mondiale de la santé (OMS)</b>. Elle a été retenue par les groupes de conception et de relecture de <a href=\"http://www.cnsa.fr/documentation/cnsa-dta-2016_web.pdf\" target=\"_blank\">ce guide</a>, pour une harmonisation avec la dernière classification internationale de référence, le <b class=\"textktree\">Manuel diagnostique et statistique des troubles mentaux – cinquième édition (DSM-5)</b>, adoptée en 2013 en remplacement du <b class=\"textktree\">DSM-IV</b> et traduite en français en 2015. Ces deux appellations, TED et TSA, décrivent la même entité clinique.</p>",
                                enfant: "ktree-def",
                                label: "I",
                                col: "#5cc666",
                                pos: [2, 9.4],
                            },
                            {
                                name: "Démarche diagnostique et outils validés d’évaluation",
                                presentation: "<p class=\"textktree\">Une démarche diagnostique à tout âge de la vie vise à identifier une pathologie, à confirmer un ou des troubles repérés chez une personne pour ensuite définir et organiser les interventions recommandées et adaptées au profil de la personne. Cette démarche associe l’établissement d’un diagnostic nosologique et d’un diagnostic fonctionnel des troubles et des capacités personnelles ; à partir des éléments issus de cette démarche, un premier projet personnalisé d’interventions sera co-élaboré avec la personne et sa famille.</p><p class=\"textktree\">L’étape de réalisation d’un diagnostic fonctionnel (ou « évaluation fonctionnelle »), recommandée par la HAS, a pour objectif de <b class=\"textktree\">préciser les difficultés, mais surtout les capacités de chaque personne dans les différents domaines évalués</b>. Le diagnostic fonctionnel doit aussi prendre en compte les <b class=\"textktree\">obstacles</b> rencontrés dans l’environnement de la personne ainsi que les <b class=\"textktree\">facilitateurs</b> disponibles ou à créer. Ces évaluations doivent permettre d’affiner et d’adapter les interventions proposées. La répétition de ces évaluations à intervalles réguliers permet de suivre l’évolution de la personne et d’adapter constamment l’accompagnement dans le cadre d’un projet personnalisé.</p><div class=\"bgyel\"><h3 class=\"textktree\">Lien entre la démarche diagnostique, du domaine médical et paramédical, et la démarche d’élaboration de réponses de compensation, du domaine des MDPH</h3><p class=\"textktree\"></p>Il n’est pas nécessaire d’attendre l’établissement d’un diagnostic formel (aussi bien nosologique que fonctionnel complet) pour préconiser une orientation vers des interventions personnalisées ou pour proposer et mettre en œuvre des mesures de compensation. Dès que des limitations d’activités sont identifiées et décrites, avec leurs répercussions dans la vie quotidienne de la personne, même si elles ne sont pas encore toutes connues, l’évaluation de la situation individuelle doit être enclenchée pour identifier des besoins et mettre en place des réponses adaptées.<p class=\"textktree\">Néanmoins, une suspicion de TSA peut ne pas être suffisante pour envisager la mise en œuvre de toutes les réponses de compensation proposées par les MDPH pour les personnes avec TSA. La démarche diagnostique nécessite ainsi d’être poursuivie et finalisée.</p></div>",
                                enfant: "ktree-diagval",
                                label: "II",
                                col: "#d8e6ad",
                                pos: [4, 9.4],
                            },
                            {
                                name: "Les interventions globales et coordonnées",
                                presentation: '<p class="textktree">Cette partie (exceptés les points 3 et 4) est issue des recommandations de bonnes pratiques professionnelles publiées par la HAS et l’ANESM en mars 2012 : Autisme et autres troubles envahissants du développement : interventions éducatives et thérapeutiques coordonnées chez l’enfant et l’adolescent. Cette délimitation du thème ne signifie en aucun cas que les interventions proposées aux personnes avec TSA s’arrêtent au passage à l’âge adulte. Les recommandations de bonnes pratiques professionnelles pour les adultes sont en cours de rédaction, et leurs préconisations devront être prises en compte dès leur parution. Dans l’attente de leur publication, il est conseillé de se référer, pour les adultes, aux interventions recommandées pour les enfants en 2012.</p><p class="textktree">Les interventions évoquées dans les recommandations conjointes HAS-ANESM de 2012 recouvrent les actions directes auprès de la personne avec TSA, mais également les actions indirectes avec et sur leur environnement.</p><p class="textktree"><b>Elles visent à favoriser notamment le développement du fonctionnement de la personne et l’acquisition de comportements adaptés dans plusieurs domaines</b> (sensoriel et moteur, communication et langage, interactions sociales, cognitif, émotionnel et affectif) ainsi que sa participation sociale, y compris scolaire et professionnelle, son autonomie, son indépendance, ses apprentissages et ses compétences adaptives. Leur objectif est également de réduire les obstacles environnementaux qui accentuent sa situation de handicap et de concourir à son bien-être et à son épanouissement personnel.</p><div class="bgvertf tbleuf">Il est important de rappeler en préalable, comme c’est le cas dans les recommandations de 2012, que : <ul class="tbleuf"><li class="tbleuf">les interventions proposées doivent <b>respecter la singularité de la personne</b> et de sa famille et tenir compte de leurs priorités </li><li class="tbleuf"><b >aucune approche éducative ou thérapeutique ne peut prétendre restaurer un fonctionnement normal ou améliorer le fonctionnement et la participation de la totalité des personnes avec TSA.</b> Les recommandations rappellent en effet que : « Les interventions évaluées mettent en évidence une amélioration du quotient intellectuel, des habiletés de communication, du langage, des comportements adaptatifs ou une diminution des comportements problèmes pour environ 50 % des enfants avec TED, avec ou sans retard mental. » Il est donc recommandé d’être particulièrement prudent vis-à-vis d’interventions présentées soit comme permettant de supprimer complètement les manifestations des troubles, voire de guérir totalement les personnes, soit comme exigeant l’exclusivité de l’accompagnement</li><li><b>l’intensité et le contenu des interventions doivent, quel que soit l’âge, être fixés en fonction de considérations éthiques visant à limiter les risques de sous-stimulations ou, au contraire, de surstimulations.</b></li></ul></div><p class="textktree">Enfin, il convient de souligner, à l’instar des recommandations de 2012, tout l’intérêt d’impliquer les parents, notamment en leur permettant de participer à des séances éducatives et thérapeutiques, à un accompagnement, une formation ou un programme d’éducation thérapeutique, dans l’optique notamment d’assurer la cohérence des modes d’interactions avec leur enfant et la généralisation des acquis .</p><p class="textktree">Les interventions décrites ici sont présentées de la façon suivante :</p><ul style=\"color: #00ff97\"><li class=\"textktree\"> tout d’abord, les interventions personnalisées, globales et coordonnées recommandées par l’ANESM et la HAS</li><li class=\"textktree\">puis les interventions par domaine fonctionnel, extraites des recommandations de la HAS et de l’ANESM</li><li class=\"textktree\">enfin, les autres interventions existantes, jugées non recommandées ou non consensuelles par l’ANESM et la HAS.</li></ul><div class="bgvertf">Les interventions à prendre en compte par les MDPH et leurs partenaires sont celles ayant fait l’objet d’une validation scientifique ou d’un consensus d’experts (interventions recommandées actuellement). Néanmoins, il convient de préciser l’évolution possible des interventions : de nouvelles méthodes pourront se développer au cours du temps, certaines interventions actuellement non recommandées pourront être validées scientifiquement, faire l’objet d’un consensus… Ce contexte est donc susceptible de modifier le positionnement des professionnels et la prise en compte des interventions à proposer et à recommander</div>',
                                enfant: "ktree-igc",
                                label: "III",
                                col: "",
                                pos: [6, 9.4],
                            },
                            {
                                name: "Les démarches administratives et sociales",
                                presentation: "",
                                enfant: "ktree-demarmdph",
                                col: "#BBB3E6",
                                pos: [8, 9.4],
                                label: "IV",
                            },
                            {
                                name: "Scolarisation",
                                presentation: '<p style=\"color: #00ff97\">Cette partie (exceptés les points 3 et 4) est issue des recommandations de bonnes pratiques professionnelles publiées par la HAS et l’ANESM en mars 2012 : Autisme et autres troubles envahissants du développement : interventions éducatives et thérapeutiques coordonnées chez l’enfant et l’adolescent. Cette délimitation du thème ne signifie en aucun cas que les interventions proposées aux personnes avec TSA s’arrêtent au passage à l’âge adulte. Les recommandations de bonnes pratiques professionnelles pour les adultes sont en cours de rédaction, et leurs préconisations devront être prises en compte dès leur parution. Dans l’attente de leur publication, il est conseillé de se référer, pour les adultes, aux interventions recommandées pour les enfants en 2012.</p><p style=\"color: #00ff97\">Les interventions évoquées dans les recommandations conjointes HAS-ANESM de 2012 recouvrent les actions directes auprès de la personne avec TSA, mais également les actions indirectes avec et sur leur environnement.</p><p style=\"color: #00ff97\"><b style=\"color: #00ff97\">Elles visent à favoriser notamment le développement du fonctionnement de la personne et l’acquisition de comportements adaptés dans plusieurs domaines</b> (sensoriel et moteur, communication et langage, interactions sociales, cognitif, émotionnel et affectif) ainsi que sa participation sociale, y compris scolaire et professionnelle, son autonomie, son indépendance, ses apprentissages et ses compétences adaptives. Leur objectif est également de réduire les obstacles environnementaux qui accentuent sa situation de handicap et de concourir à son bien-être et à son épanouissement personnel.</p><div class="bgvertf tbleuf">Il est important de rappeler en préalable, comme c’est le cas dans les recommandations de 2012, que : <ul class="tbleuf"><li class="tbleuf">les interventions proposées doivent <b class="tbleuf">respecter la singularité de la personne</b> et de sa famille et tenir compte de leurs priorités </li><li class="tbleuf"><b class="tbleuf">aucune approche éducative ou thérapeutique ne peut prétendre restaurer un fonctionnement normal ou améliorer le fonctionnement et la participation de la totalité des personnes avec TSA.</b> Les recommandations rappellent en effet que : « Les interventions évaluées mettent en évidence une amélioration du quotient intellectuel, des habiletés de communication, du langage, des comportements adaptatifs ou une diminution des comportements problèmes pour environ 50 % des enfants avec TED, avec ou sans retard mental. » Il est donc recommandé d’être particulièrement prudent vis-à-vis d’interventions présentées soit comme permettant de supprimer complètement les manifestations des troubles, voire de guérir totalement les personnes, soit comme exigeant l’exclusivité de l’accompagnement</li><li class="tbleuf"><b class="tbleuf">l’intensité et le contenu des interventions doivent, quel que soit l’âge, être fixés en fonction de considérations éthiques visant à limiter les risques de sous-stimulations ou, au contraire, de surstimulations.</b></li></ul></div><p style=\"color: #00ff97\">Enfin, il convient de souligner, à l’instar des recommandations de 2012, tout l’intérêt d’impliquer les parents, notamment en leur permettant de participer à des séances éducatives et thérapeutiques, à un accompagnement, une formation ou un programme d’éducation thérapeutique, dans l’optique notamment d’assurer la cohérence des modes d’interactions avec leur enfant et la généralisation des acquis .</p><p style=\"color: #00ff97\">Les interventions décrites ici sont présentées de la façon suivante :</p><ul style=\"color: #00ff97\"><li style=\"color: #00ff97\"> tout d’abord, les interventions personnalisées, globales et coordonnées recommandées par l’ANESM et la HAS</li><li style=\"color: #00ff97\">puis les interventions par domaine fonctionnel, extraites des recommandations de la HAS et de l’ANESM</li><li style=\"color: #00ff97\">enfin, les autres interventions existantes, jugées non recommandées ou non consensuelles par l’ANESM et la HAS.</li></ul><div class="bgvertf">Les interventions à prendre en compte par les MDPH et leurs partenaires sont celles ayant fait l’objet d’une validation scientifique ou d’un consensus d’experts (interventions recommandées actuellement). Néanmoins, il convient de préciser l’évolution possible des interventions : de nouvelles méthodes pourront se développer au cours du temps, certaines interventions actuellement non recommandées pourront être validées scientifiquement, faire l’objet d’un consensus… Ce contexte est donc susceptible de modifier le positionnement des professionnels et la prise en compte des interventions à proposer et à recommander</div>',
                                enfant: "",
                                col: "#D98C99",
                                pos: [10, 9.4],
                                label: "V",
                            }
                        ]
                    }
                },
                dimensions: {
                    type: Array,
                    value: function () {
                        return [11, 10]
                    }
                }
            },

            width: window.innerWidth / 3,
            height: null,
            nodeColorNeutral: "#9AEED8",
            nodeColorSuccess: "#373f52",
            nodeColorFail: "red",
            strokeColorNeutral: "#373f52",
            strokeColorSuccess: "#9AEED8",
            strokeColorFail: "red",
            strokeColorCurrent: "#00babc",


            showKtree: function (ktree) {
                console.log("j'aime pas les arbres");
                console.log(ktree);
                document.querySelector(ktree).start();
                document.getElementById("ktreetext").innerHTML = " ";
            },
            
            addNode: function(obj, coeff, layer, i) {
                var nodeColor;
                var strokeColor;
                if (obj.col != "") {
                    nodeColor = obj.col;
                    strokeColor = this.strokeColorNeutral;
                }
                else if (obj.enfant != "") {
                    nodeColor = this.nodeColorNeutral;
                    strokeColor = this.strokeColorNeutral;
                } else if (obj.enfant == "") {
                    nodeColor = this.nodeColorNeutral;
                    strokeColor = this.strokeColorSuccess;
                }
                var node = new Konva.Circle({
                    x: obj.pos[0] * coeff,
                    y: obj.pos[1] * coeff,
                    radius: coeff / 2,
                    fill: nodeColor,
                    stroke: strokeColor,
                    id: obj.name,
                    text: obj.name,
                    strokeWidth: coeff / 12
                });
                var box = new Konva.Text({
                    x: node.x() - node.radius(),
                    y: node.y() - node.strokeWidth() - 6,
                    width: 2 * node.radius(),
                    height: 2 * node.strokeWidth(),
                    text: obj.label,
                    fontSize: 7 * node.strokeWidth(),
                    fontFamily: "Arial",
                    fontStyle: "bold",
                    fontVariant: "small-caps",
                    fill: "#373f52",
                    align: "center"
                });
                var group = new Konva.Group();
                group.add(node);
                group.add(box);
                layer.add(group);
                if (obj.enfant == "") {
                    group.on('click', function () {
                        that = document.querySelector('ktree-selector');
                        document.getElementById("ktreetext").innerHTML = "<h2 class=\"padktree textktree\">" + obj.name + " : </h2><div class=\"padktree\">" + obj.presentation + "</div><br/>";
                        document.getElementById("ktreebouton").innerHTML = " ";
                    });
                    group.on('mouseover', function () {
                        this.opacity(0.5);
                        document.getElementById("ktreetext").innerHTML = "<h2 class=\"padktree textktree\">" + obj.name + " : </h2><div class=\"padktree\">" + obj.presentation + "</div><br/>";
                        document.body.style.cursor = 'pointer';
                        layer.draw();
                    });
                    group.on('mouseleave', function () {
                        this.opacity(1);
                        document.body.style.cursor = 'default';
                        var title = document.getElementById('ktreetext').getAttribute('title');
                        that = document.querySelector('ktree-selector');
                        if (title != "") {
                            that = document.querySelector('ktree-selector');
                            for (i = 0; i < that.steps.length - 1; i++) {
                                if (that.steps[i].name == title) {
                                    document.getElementById('ktreetext').innerHTML = "<h2 class=\"padktree textktree\">" + that.steps[i].name + " : </h2><div class=\"padktree\">" + that.steps[i].presentation + "</div><br/>";
                                }
                            }
                        }
                    });
                } else {
                    group.on('dblclick', function() {
                        document.querySelector('ktree-selector').showKtree(obj.enfant);
                    });
                    group.on('click', function () {
                        document.getElementById("ktreetext").innerHTML = "<h2 class=\"textktree padktree\">" + obj.name + ": </h2><div class=\"padktree\">" + obj.presentation + "</div><br/>";
                        document.getElementById('ktreetext').setAttribute("title", obj.name);
                        document.getElementById("ktreebouton").innerHTML = "<a><button id=\"boutonactive\" onClick=\"document.querySelector('ktree-selector').showKtree('" + obj.enfant + "')\">Aller plus loin</button></a>";
                    });
                    group.on('mouseover', function () {
                        this.opacity(0.5);
                        document.getElementById("ktreetext").innerHTML = "<h2 class=\"padktree textktree\">" + obj.name + " : </h2><div class=\"padktree\">" + obj.presentation + "</div><br/>";
                        document.body.style.cursor = 'pointer';
                        layer.draw();
                    });
                    group.on('mouseleave', function () {
                        this.opacity(1);
                        document.body.style.cursor = 'default';
                        layer.draw();
                        var title = document.getElementById('ktreetext').getAttribute('title');
                        that = document.querySelector('ktree-selector');
                        if (title != "") {
                            that = document.querySelector('ktree-selector');
                            for (i = 0; i < that.steps.length - 1; i++) {
                                if (that.steps[i].name == title) {
                                    document.getElementById('ktreetext').innerHTML = "<h2 class=\"padktree textktree\">" + that.steps[i].name + " : </h2><div class=\"padktree\">" + that.steps[i].presentation + "</div><br/>";
                                }
                            }
                        }
                    });
                }
            },

            drawNodes: function () {
                console.log("j'aime les arbres");
                var coeff = this.width / this.dimensions[0];
                this.height = coeff * this.dimensions[1];
                var stage = new Konva.Stage({
                    container: "container",
                    width: this.width,
                    height: this.height
                });
                var layer = new Konva.Layer();
                for (var i = 0; i < this.steps.length; i++) {
                    this.addNode(this.steps[i], coeff, layer, i);
                }
                stage.add(layer);
            },

            start: function () {
                var fond = document.getElementById('menuktree');
                fond.style.backgroundColor = 'white';
                this.drawNodes();
                document.getElementById("menuktree").innerHTML = "<p class=\" summary\"><b class=\"romanumb\">I</b> Définir l'autisme</p><p class=\" summary\"><b class=\"romanumb\">II</b> Démarche diagnostique et outils validés d’évaluation</p><p class=\" summary\"><b class=\"romanumb\">III</b> Les interventions globales et coordonnées</p><p class=\" summary\"><b class=\"romanumb\">IV</b> Les démarches administratives et sociales</p><p class=\" summary\"><b class=\"romanumb\">V</b> Scolarisation</p>";
            }
 });
