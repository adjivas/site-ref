        Polymer({
            is: "ktree-etio",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: "Etiologie",
                                presentation: '<p>Comme précédemment, la description suivante des interventions par domaine fonctionnel est extraite des recommandations de bonnes pratiques professionnelles publiées en 2012 par la HAS et l’ANESM. Pour en savoir plus, il est vivement conseillé de se reporter aux recommandations publiées.</p>',
                                pos: [5, 7],
                                enfant: "ktree-def",
                            },
                            {
                                name: "Génétique",
                                description: "Parcour diagnostique généraliste",
                                presentation: "",
                                enfant: "ktree-selector",
                                pos: [7, 6],
                            },
                            {
                                name: "Environnement",
                                presentation: '<p>Cette partie (exceptés les points 3 et 4) est issue des recommandations de bonnes pratiques professionnelles publiées par la HAS et l’ANESM en mars 2012 : Autisme et autres troubles envahissants du développement : interventions éducatives et thérapeutiques coordonnées chez l’enfant et l’adolescent. Cette délimitation du thème ne signifie en aucun cas que les interventions proposées aux personnes avec TSA s’arrêtent au passage à l’âge adulte. Les recommandations de bonnes pratiques professionnelles pour les adultes sont en cours de rédaction, et leurs préconisations devront être prises en compte dès leur parution. Dans l’attente de leur publication, il est conseillé de se référer, pour les adultes, aux interventions recommandées pour les enfants en 2012.</p><p>Les interventions évoquées dans les recommandations conjointes HAS-ANESM de 2012 recouvrent les actions directes auprès de la personne avec TSA, mais également les actions indirectes avec et sur leur environnement.</p><p><b>Elles visent à favoriser notamment le développement du fonctionnement de la personne et l’acquisition de comportements adaptés dans plusieurs domaines</b> (sensoriel et moteur, communication et langage, interactions sociales, cognitif, émotionnel et aff ectif) ainsi que sa participation sociale, y compris scolaire et professionnelle, son autonomie, son indépendance, ses apprentissages et ses compétences adaptives. Leur objectif est également de réduire les obstacles environnementaux qui accentuent sa situation de handicap et de concourir à son bien-être et à son épanouissement personnel.</p><div class="bgvertf">Il est important de rappeler en préalable, comme c’est le cas dans les recommandations de 2012, que : <ul><li>les interventions proposées doivent <b>respecter la singularité de la personne</b> et de sa famille et tenir compte de leurs priorités </li><li><b>aucune approche éducative ou thérapeutique ne peut prétendre restaurer un fonctionnement normal ou améliorer le fonctionnement et la participation de la totalité des personnes avec TSA.</b> Les recommandations rappellent en effet que : « Les interventions évaluées mettent en évidence une amélioration du quotient intellectuel, des habiletés de communication, du langage, des comportements adaptatifs ou une diminution des comportements problèmes pour environ 50 % des enfants avec TED, avec ou sans retard mental. » Il est donc recommandé d’être particulièrement prudent vis-à-vis d’interventions présentées soit comme permettant de supprimer complètement les manifestations des troubles, voire de guérir totalement les personnes, soit comme exigeant l’exclusivité de l’accompagnement</li><li><b>l’intensité et le contenu des interventions doivent, quel que soit l’âge, être fixés en fonction de considérations éthiques visant à limiter les risques de sous-stimulations ou, au contraire, de surstimulations.</b></li></ul></div><p>Enfin, il convient de souligner, à l’instar des recommandations de 2012, tout l’intérêt d’impliquer les parents, notamment en leur permettant de participer à des séances éducatives et thérapeutiques, à un accompagnement, une formation ou un programme d’éducation thérapeutique, dans l’optique notamment d’assurer la cohérence des modes d’interactions avec leur enfant et la généralisation des acquis .</p><p>Les interventions décrites ici sont présentées de la façon suivante :</p><ul><li> tout d’abord, les interventions personnalisées, globales et coordonnées recommandées par l’ANESM et la HAS</li><li>puis les interventions par domaine fonctionnel, extraites des recommandations de la HAS et de l’ANESM</li><li>enfin, les autres interventions existantes, jugées non recommandées ou non consensuelles par l’ANESM et la HAS.</li></ul><div class="bgvertf">Les interventions à prendre en compte par les MDPH et leurs partenaires sont celles ayant fait l’objet d’une validation scientifique ou d’un consensus d’experts (interventions recommandées actuellement). Néanmoins, il convient de préciser l’évolution possible des interventions : de nouvelles méthodes pourront se développer au cours du temps, certaines interventions actuellement non recommandées pourront être validées scientifiquement, faire l’objet d’un consensus… Ce contexte est donc susceptible de modifier le positionnement des professionnels et la prise en compte des interventions à proposer et à recommander</div>',
                                pos: [3, 6],
                                enfant: "ktree-manif"
                            },
                            {
                                name: "Interactions génétique/environnement",
                                presentation: '<p style="text-align: left">La description suivante des interventions est extraite des recommandations de bonnes pratiques professionnelles publiées en 2012 par la HAS et l’ANESM. Pour en savoir plus, il est vivement conseillé de se reporter à ces recommandations.</p>            <p style="text-align: left">Les interventions personnalisées, globales et coordonnées recommandées sont fondées sur une approche éducative, comportementale et développementale et présentent les caractéristiques suivantes. Elles sont :</p><ul><li><p style="text-align: left"><b style="font-size: 110%">précoces :</b> elles débutent entre l’âge de dix-huit mois et l’âge de quatre ans pour des enfants avec diagnostic de TSA ou pour lesquels un TSA est suspecté (troubles du développement pouvant évoluer vers un TSA) et durent au minimum deux ans </p></li><li><p style="text-align: left"><b style="font-size: 110%">personnalisées </b> et définies en fonction de l’évaluation initiale et continue du développement et du comportement de l’enfant suivi en tenant compte du développement typique dans les différents domaines ;</p></li><li><p style="text-align: left"><b style="font-size: 110%">fondées sur des objectifs fonctionnels </b> à court et moyen terme, ajustés au cours d’échanges entre la famille, les professionnels qui mettent en œuvre les interventions et ceux qui en assurent la supervision ; les interventions visent au minimum l’imitation, le langage, la communication, le jeu, les capacités d’interactions sociales, l’organisation motrice, la planification des actions, les capacités adaptatives des comportements dans la vie quotidienne et comportent des stratégies pour prévenir ou réduire la fréquence ou les conséquences des comportements-problèmes ; elles tiennent compte également des domaines émotionnel et sensoriel  </p></li><li><p style="text-align: left"><b style="font-size: 110%">attentives constamment à promouvoir la généralisation et le transfert des acquis</b>  à des situations nouvelles avec une transition graduelle vers des environnements, notamment sociaux, de plus en plus larges et ordinaires  </p></li><li><p style="text-align: left"><b style="font-size: 110%">mises en oeuvre par une équipe formée et régulièrement supervisée</b> par des professionnels qualifiés et expérimentés utilisant un mode commun de communication et d’interactions avec l’enfant. Les recommandations insistent également sur le fait qu’une intervention globale ne peut pas consister en une juxtaposition de pratiques éducatives, pédagogiques, rééducatives ou psychologiques avec des techniques très hétérogènes ou éclectiques.</p></li></ul><p>Pour observer des résultats efficaces, vingt-cinq heures d’interventions par semaine (temps de scolarisation avec accompagnement individuel adapté inclus) sont requises au minimum. Ces durées, qui respectent les rythmes physiologiques du sommeil en fonction de l’âge, comprennent les temps de scolarisation avec accompagnement individuel adapté et visent à faciliter l’accueil de l’enfant en crèche ou à l’école pour des durées progressivement croissantes en fonction de l’âge et de la capacité de l’enfant.</p><p>L’adaptation et la structuration de l’environnement matériel aux particularités de l’enfant (espace, temps, environnement sonore…) sont également recommandées.</p><div class="bgvertf"><p>Les interventions fondées sur un niveau de validation scientifique suffisant sont : l’analyse appliquée du comportement dite « ABA », le programme développemental dit « de Denver » ou le programme « Traitement et éducation pour enfants avec autisme ou handicap de la communication » dit « TEACCH ». Les prises en charge intégratives de type thérapie d’échange et de développement, en tant qu’interventions fondées sur une approche développementale intégrant des principes neurophysiologiques et de rééducation, sont jugées appropriées.</p><p>Les prises en charge intégratives, fondées sur les besoins individuels de l’enfant identifiés lors de l’évaluation du fonctionnement et conçues de manière transdisciplinaire pour permettre à l’enfant de rester intégré dans son milieu de vie ordinaire, sont également jugées appropriées dès lors que les critères développés ci-dessus sont respectés et en particulier que les professionnels, quel que soit leur mode d’exercice, veillent à utiliser un mode de communication et d’interaction commun et à ne pas disperser l’enfant/adolescent dans des activités éclectiques ou des lieux multiples.</p></div><p>Au-delà de quatre ans, les recommandations soulignent que la mise en place ou la poursuite des interventions s’effectue selon des dispositifs différents, en fonction du profil de développement de l’enfant et de la sévérité des symptômes. Des interventions spécifiques focalisées sur un ou deux domaines particuliers peuvent être proposées, soit isolément si l’enfant ne présente pas de déficience intellectuelle associée, soit en complément des interventions globales proposées si l’enfant présente un faible niveau de développement de la communication, des interactions sociales et du fonctionnement cognitif, ou s’il présente une grande hétérogénéité des niveaux de compétences par domaine. Les recommandations précisent que ces interventions globales comportent toutes une scolarisation, en privilégiant la scolarisation en milieu ordinaire avec un accompagnement éducatif et thérapeutique individuel à l’école et au domicile, notamment pour les enfants présentant un niveau de développement intellectuel moyen ou bon, des symptômes d’autisme d’intensité modérée et un langage fonctionnel.</p><p>À l’inverse, chez les très jeunes enfants, avant l’âge de quatre ans et dès l’âge de douze mois, l’Early Start Denver Model (ESDM) apparaît adapté, et son efficacité a été démontrée dans des études randomisées contrôlées, avec une amélioration significative des compétences cognitives, sociocommunicatives et langagières des enfants (Rogers et al., 2012, Vivanti et al., 2014). Ce programme prend la forme de séances individuelles avec les parents et l’enfant et a pour objectif de stimuler le développement sociocommunicatif de celui-ci dans toutes les situations de la vie quotidienne à travers la formation des parents et la guidance parentale. La guidance éducative des parents est particulièrement intéressante, car elle permet de travailler avec les parents et l’enfant en situation écologique, dans le milieu de vie de l’enfant, au travers de toutes les situations de la vie quotidienne permettant de stimuler le développement de l’enfant (par exemple, le repas, le change, l’habillage).</p>',
                                pos: [5, 5],
                                enfant: "ktree-cmtra",
                            }
                        ]
                    }
                },
                connect: {
                    type: Array,
                    value: function () {
                        return [
                            //[parent, child, mode]
                            [
                                "Etiologie", 'Génétique', 0
                            ],
                            [
                                "Etiologie", 'Environnement', 0
                            ],
                            [
                                "Etiologie", 'Interactions génétique/environnement', 0
                            ]
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

            width: window.innerWidth * 3 / 5,
            height: null,
            nodeColorNeutral: "#226070",
            nodeColorSuccess: "#226070",
            nodeColorFail: "red",
            strokeColorNeutral: "#00ff97",
            strokeColorSuccess: "white",
            strokeColorFail: "red",
            strokeColorCurrent: "#00babc",


            showKtree: function (ktree) {
                console.log("j'aime pas les arbres");
                console.log(ktree);
                document.getElementById('container').innerHTML = "<" + ktree + "></" + ktree + ">";
                document.getElementById("ktreetext").innerHTML = " ";
                document.getElementById("ktreebouton").innerHTML = " ";
            },
            
            addNode: function(obj, coeff, layer, i) {
                var nodeColor;
                var strokeColor;
                if (obj.enfant != "") {
                    nodeColor = this.nodeColorSuccess;
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
                layer.add(node);
                if (obj.enfant == "") {
                    node.on('click', function () {
                        document.getElementById("ktreetext").innerHTML = "<h2 style=\"color: #00ff97\">" + obj.name + ": </h2>" + "<p  style=\"color: #00ff97\">" + obj.presentation + "</p><br/>";
                        document.getElementById("ktreebouton").innerHTML = " ";
                    });
                    node.on('mouseover', function () {
                        this.opacity(0.5);
                        document.body.style.cursor = 'pointer';
                        layer.draw();
                    });
                    node.on('mouseleave', function () {
                        this.opacity(1);
                        document.body.style.cursor = 'default';
                        layer.draw();
                    });
                } else {
                    node.on('dblclick', function() {
                        console.log(obj.enfant);
                        document.querySelector('ktree-selector').showKtree(obj.enfant);
                    });
                    node.on('click', function () {
                        document.getElementById("ktreetext").innerHTML = "<h2 style=\"color: #00ff97\">" + obj.name + ": </h2>" + "<p  style=\"color: #00ff97\">" + obj.presentation + "</p><br/>";
                        document.getElementById("ktreebouton").innerHTML = "<a><button style=\"width: 100%; height: 40px; background-color: #00ff97; color: #226070; border-radius: 15px\" onClick=\"document.querySelector('ktree-selector').showKtree('" + obj.enfant + "')\">En savoir plus</button></a>";
                    });
                    node.on('mouseover', function () {
                        this.opacity(0.5);
                        document.body.style.cursor = 'pointer';
                        layer.draw();
                    });
                    node.on('mouseleave', function () {
                        this.opacity(1);
                        document.body.style.cursor = 'default';
                        layer.draw();
                    });
                }
            },

            addConnect: function (connect, layer, i, coeff) {
                var node1 = layer._getNodeById(connect[0]);
                var node2 = layer._getNodeById(connect[1]);
                var x1, y1, x2, y2, h;
                h = Math.sqrt(Math.pow(node1.x() - node2.x(), 2) + Math.pow(node1.y() - node2.y(), 2));
                x1 = Math.abs(node1.x() + ((node1.radius() + node1.strokeWidth() / 2) * ((node2.x() - node1.x()) / h)));
                y1 = Math.abs(node1.y() + ((node1.radius() + node1.strokeWidth() / 2) * ((node2.y() - node1.y()) / h)));
                x2 = Math.abs(node2.x() + ((node1.radius() + node1.strokeWidth() / 2) * ((node1.x() - node2.x()) / h)));
                y2 = Math.abs(node2.y() + ((node1.radius() + node1.strokeWidth() / 2) * ((node1.y() - node2.y()) / h)));
                var line = new Konva.Line({
                    points: [x1, y1, x2, y2],
                    stroke: 'white',
                    strokeWidth: coeff / 12,
                });
                layer.add(line);
            },

            drawConnect: function (layer, coeff) {
                for (var i = 0; i < this.connect.length; i++) {
                    this.addConnect(this.connect[i], layer, i, coeff);
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
                this.drawConnect(layer, coeff);
                stage.add(layer);
            },

            ready: function () {
                this.drawNodes();
            }
 });
