        Polymer({
            is: "ktree-diagval",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: "Démarche diagnostique et outils validés d’évaluation",
                                presentation: "<p class=\"textktree\">Une démarche diagnostique à tout âge de la vie vise à identifier une pathologie, à confirmer un ou des troubles repérés chez une personne pour ensuite définir et organiser les interventions recommandées et adaptées au profil de la personne. Cette démarche associe l’établissement d’un diagnostic nosologique et d’un diagnostic fonctionnel des troubles et des capacités personnelles ; à partir des éléments issus de cette démarche, un premier projet personnalisé d’interventions sera co-élaboré avec la personne et sa famille.</p><p class=\"textktree\">L’étape de réalisation d’un diagnostic fonctionnel (ou « évaluation fonctionnelle »), recommandée par la HAS, a pour objectif de <b class=\"textktree\">préciser les difficultés, mais surtout les capacités de chaque personne dans les différents domaines évalués</b>. Le diagnostic fonctionnel doit aussi prendre en compte les <b class=\"textktree\">obstacles</b> rencontrés dans l’environnement de la personne ainsi que les <b class=\"textktree\">facilitateurs</b> disponibles ou à créer. Ces évaluations doivent permettre d’affiner et d’adapter les interventions proposées. La répétition de ces évaluations à intervalles réguliers permet de suivre l’évolution de la personne et d’adapter constamment l’accompagnement dans le cadre d’un projet personnalisé.</p><div class=\"bgyel\"><h3 class=\"textktree\">Lien entre la démarche diagnostique, du domaine médical et paramédical, et la démarche d’élaboration de réponses de compensation, du domaine des MDPH</h3><p class=\"textktree\"></p>Il n’est pas nécessaire d’attendre l’établissement d’un diagnostic formel (aussi bien nosologique que fonctionnel complet) pour préconiser une orientation vers des interventions personnalisées ou pour proposer et mettre en œuvre des mesures de compensation. Dès que des limitations d’activités sont identifiées et décrites, avec leurs répercussions dans la vie quotidienne de la personne, même si elles ne sont pas encore toutes connues, l’évaluation de la situation individuelle doit être enclenchée pour identifier des besoins et mettre en place des réponses adaptées.<p class=\"textktree\">Néanmoins, une suspicion de TSA peut ne pas être suffisante pour envisager la mise en œuvre de toutes les réponses de compensation proposées par les MDPH pour les personnes avec TSA. La démarche diagnostique nécessite ainsi d’être poursuivie et finalisée.</p></div>",
                                enfant: "ktree-selector",
                                label: "I",
                                col: "#d8e6ad",
                                pos: [4, 9.4],
                            },
                            {
                                name: "Les acteurs du repérage et du dépistage",
                                presentation: "<p class=\"textktree\">Le repérage et le dépistage constituent les phases initiales de la démarche diagnostique mettant en évidence la présence d’un risque de TSA. Les acteurs de la petite enfance (pédiatres, médecins et professionnels de PMI, médecins généralistes, orthophonistes et autres professionnels de santé libéraux, équipes de centre d’action médico-sociale précoce – CAMSP…), mais aussi tous professionnels amenés à recevoir de jeunes enfants (dans les crèches, les haltes-garderies, les réseaux d’assistantes maternelles, les écoles) ainsi que les familles et le médecin de famille jouent un rôle déterminant dans la prévention par le repérage précoce des TSA.</p><p class=\"textktree\">Le médecin de famille doit rester attentif à la détection de tout signe ou symptôme de TSA :</p><ul><li class=\"textktree\">En écoutant les parents lorsqu’ils font part de préoccupations concernant le développement de leur enfant (la recherche a démontré la validité des préoccupations des parents) </li><li class=\"textktree\">Si les parents n’expriment pas d’inquiétude, en leur demandant directement s’ils ont des préoccupations au sujet de leur enfant </li><li class=\"textktree\">en se renseignant au sujet des antécédents familiaux de TSA ou d’autres difficultés de développement</li><li class=\"textktree\">En constatant l’incapacité de l’enfant à atteindre certains stades de développement ou en faisant participer l’enfant à des activités permettant de révéler les difficultés de développement.</li></ul><p class=\"textktree\">Il existe certains tests de dépistage standardisés pour évaluer le risque de TSA</p><li class=\"textktree\">Le Checklist for Autism in Toddlers (CHAT – Baron-Cohen et coll., 1996) intègre des observations comportementales directes ; il peut également être utilisé par des médecins ne possédant pas de formation spécifique sur les TSA</li><li class=\"textktree\"> le Modified Cheklist for Autism in Toddlers (M-CHAT – Robins, Fein, Barton and Green, 2001) est un court questionnaire qui peut être donné aux parents d’enfants âgés de seize à trente mois et renseigné dans la salle d’attente</li> <p class=\"textktree\">Si les résultats du dépistage sont positifs, cela ne signifie pas que l’enfant est susceptible de présenter un diagnostic de TSA. Il est alors recommandé d’orienter l’enfant vers une équipe de diagnostic pluridisciplinaire pour une évaluation complète des différents domaines de fonctionnement de l’enfant et pour écarter d’autres trouble de la communication.</p><p class=\"textktree\">Enfin, dans le cadre des missions qui leur sont confiées, les centres de protection maternelle et infantile (PMI) peuvent également jouer un rôle dans le repérage précoce des TSA lors des consultations infantiles. Ils peuvent faire le lien entre l’équipe de soins de l’enfant et l’équipe scolaire qui va l’accueillir. Ils ont également un rôle d’accompagnement des familles confrontées à cette pathologie.</p><p class=\"textktree\">Étant donné le manque de spécificité des signes d’appel chez l’adulte, il est important, devant des difficultés persistantes de communication et d’adaptation sociale de la personne à son environnement, de penser aussi à un TSA. Les signes d’appel impliquent pour les médecins de rechercher leur survenue précoce et de les replacer dans l’histoire des personnes. Il est souhaitable d’impliquer également les équipes des structures médico-sociales dans le repérage des TSA et, plus largement, les professionnels travaillant au quotidien avec les adultes.</p>",
                                enfant: "",
                                col: "#d8e6ad",
                                label: "II",
                                pos: [1, 7.4],
                            },
                            {
                                name: "Les principaux enjeux de la démarche diagnostique",
                                presentation: '<p class=\"textktree\">Le diagnostic concerne le domaine médical. Il est étayé par des observations cliniques, associé à des examens complémentaires et relève, chaque fois que cela s’avère nécessaire, d’une démarche pluridisciplinaire avec une évaluation médicale, orthophonique ou encore une évaluation psychocognitive, sensorielle et/ou des interactions sociales. Il s’agit de la confirmation du trouble, de l’identification de la pathologie et des altérations de fonction ainsi que de l’appréciation du contexte dans lequel ce trouble se situe (cognitif, social…) et de ses conséquences dans la vie quotidienne</p><p class=\"textktree\">Si le diagnostic nosologique est important, les éléments du <b class=\"textktree\">diagnostic fonctionnel</b> constituent le socle de l’analyse d’une situation individuelle dans la mesure où les altérations de fonction, les compétences de la personne et les retentissements dans la vie quotidienne y sont identifiés</p><div class=\"bgyel\"><h3 class=\"textktree\">L’enjeu de la démarche diagnostique consiste à développer une coopération partenariale, notamment entre les acteurs du diagnostic et les équipes des MDPH. </h3><p class=\"textktree\">Cette coopération doit faciliter l’analyse de la situation de la personne par la MDPH en lui fournissant des éléments clairement énoncés en ce qui concerne les types de troubles, la sévérité et l’évolution des troubles, les compétences (ressources ou leviers) et contraintes existantes ou émergentes, les altérations de fonctions, les limitations d’activité et la restriction de participation. Cette transmission des informations produites par les acteurs de la démarche diagnostique est capitale pour permettre aux équipes des MDPH d’appréhender la situation de handicap, au sens de la loi de 2005, et de proposer des réponses de compensation.</p></div><p class=\"textktree\">Par ailleurs, l’enjeu consiste aussi à développer la réciprocité des échanges et l’articulation entre la démarche diagnostique et les interventions éducatives et thérapeutiques coordonnées, comme l’évoquent les recommandations conjointes de la HAS et de l’ANESM de 2012 (enfants et adolescents). Même pour une personne très jeune, les altérations de fonctions et l’identification de troubles du développement conduisant à la suspicion de TSA doivent enclencher des interventions au plus tôt sans empêcher – notamment – le bénéfice d’un mode de garde ni la scolarisation.</p><div class=\"bgyel\"><h3 class=\"textktree\">Les enjeux de la précocité</h3><p class=\"textktree\">La mise en place d’un dispositif territorial de repérage, de diagnostic et d’interventions précoces fait partie des priorités fixées par la totalité des plans d’actions régionaux autisme pilotés par les ARS et élaborés en 2013 et 2014. Ces dispositifs sont en cours de développement dans les territoires. Les enjeux de la précocité sont multiples :</p><ul><li class=\"textktree\">Une plus grande plasticité du cerveau et du neurodéveloppement avant quatre ans, qui permet un bénéfice accru des interventions éducatives et thérapeutiques menées au cours de cette période</li><li class=\"textktree\">un effet bénéfique de ces interventions pour des enfants présentant des troubles de la socialisation et/ou communication proches des TSA, notamment d’autres troubles des interactions et des troubles sévères du langage </li><li class=\"textktree\">l’instauration d’emblée d’un rapport de confiance et d’une alliance éducative et thérapeutique avec les parents, avant qu’ils ne se soient épuisés à faire reconnaître et à gérer seuls les troubles déjà perceptibles de leur enfant</li><li class=\"textktree\">Un temps nécessaire de préparation à la scolarisation, élément majeur du bon neurodéveloppement des enfants avec TSA.</li></ul><p class=\"textktree\">Les recommandations de bonnes pratiques de l’ANESM et de la HAS de mars 2012 préconisent ainsi la mise en œuvre d’un projet personnalisé d’interventions dans les trois mois suivant le diagnostic. Elles soulignent néanmoins que la mise en place des interventions comme recommandé peut débuter avant même que l’ensemble des évaluations initiales soit terminé, dès qu’un trouble du développement est observé (voir le chapitre 2.2 des recommandations précitées).</p><p class=\"textktree\">Par ailleurs, dès qu’un trouble du développement est constaté et lorsque les interventions globales ne sont pas disponibles dans les trois mois suivant le diagnostic, les recommandations préconisent de proposer dans un premier temps aux parents et à leur enfant des interventions ciblées sur le développement de la communication et du langage afin d’améliorer les interactions sociales entre l’enfant et son environnement, la mise en œuvre d’interventions globales devant ensuite prendre le relais dès que possible.</p></div>',
                                pos: [3, 7.4],
                                col: "#d8e6ad",
                                label: "III",
                                enfant: ""
                            },
                            {
                                name: "Les trois volets de la démarche diagnostique",
                                presentation: '<p class=\"textktree\">Axée sur l’observation d’altérations qualitatives dans les domaines de la communication et des interactions sociales réciproques et sur celle du caractère restreint, répétitif des comportements, des intérêts et des activités, la démarche diagnostique associe trois volets :</p><ul><li class=\"textktree\">l’établissement du <b class=\"textktree\">diagnostic nosologique</b>, c’est-à-dire l’identification de signes cliniques traduisant les <b class=\"textktree\">altérations de fonction</b> au sein d’une même entité pathologique à laquelle est apportée une dénomination partagée par les autres professionnels en fonction de critères diagnostics validés</li><li class=\"textktree\">L’établissement du <b class=\"textktree\">diagnostic fonctionnel</b>, c’est-à-dire <b class=\"textktree\">le retentissement des troubles en termes de limitations d’activités et de restrictions de participation</b></li><li class=\"textktree\">la recherche de pathologies associées.</li></ul>',
                                pos: [5, 7.4],
                                col: "#d8e6ad",
                                label: "IV",
                                enfant: "ktree-voldemdiag",
                            },
                            {
                                name: "L’organisation de la démarche diagnostique",
                                presentation: '',
                                pos: [7, 7.4],
                                col: "#d8e6ad",
                                label: "V",
                                enfant: "ktree-orgdemdiag",
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
                                "Démarche diagnostique et outils validés d’évaluation", 'Les acteurs du repérage et du dépistage', 0
                            ],
                            [
                                "Démarche diagnostique et outils validés d’évaluation", 'Les principaux enjeux de la démarche diagnostique', 0
                            ],
                            [
                                "Démarche diagnostique et outils validés d’évaluation", 'Les trois volets de la démarche diagnostique', 0
                            ],
                            [
                                "Démarche diagnostique et outils validés d’évaluation", "L’organisation de la démarche diagnostique", 0
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
            width: window.innerWidth / 3,
            height: null,
            nodeColorNeutral: "#d8e6ad",
            nodeColorSuccess: "#373f52",
            nodeColorFail: "red",
            strokeColorNeutral: "#373f52",
            strokeColorSuccess: "#d8e6ad",
            strokeColorFail: "red",
            strokeColorCurrent: "#00babc",
            
            addNode: function(obj, coeff, layer, i) {
                var nodeColor;
                var strokeColor;
               if (obj.enfant != "") {
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
                var tmp = 0;
               if (obj.enfant == "") {
                    group.on('click', function () {
                        document.getElementById("ktreetext").innerHTML = "<h2 class=\"textktree padktree\">" + obj.name + ": </h2><div class=\"padktree\">" + obj.presentation + "</div><br/>";
                        document.getElementById('ktreetext').setAttribute("title", obj.name);
                        document.getElementById("ktreebouton").innerHTML = " ";
                    });
                    group.on('mouseover', function () {
                        document.getElementById("ktreetext").innerHTML = "<h2 class=\"textktree padktree\">" + obj.name + ": </h2><div class=\"padktree\">" + obj.presentation + "</div><br/>";
                        this.opacity(0.5);
                        document.body.style.cursor = 'pointer';
                        layer.draw();
                    });
                    if (tmp == 0)
                    {
                    group.on('mouseout', function () {
                        this.opacity(1);
                        document.body.style.cursor = 'default';
                        var title = document.getElementById('ktreetext').getAttribute('title');
                        that = document.querySelector('ktree-diagval');
                        if (title != "") {
                            that = document.querySelector('ktree-diagval');
                            for (i = 0; i < that.steps.length - 1; i++) {
                                if (that.steps[i].name == title) {
                                    document.getElementById('ktreetext').innerHTML = "<h2 class=\"textktree padktree\">" + that.steps[i].name + ": </h2><div class=\"padktree\">" + that.steps[i].presentation + "</div><br/>";
                                }
                            }
                        }
                        layer.draw();
                    })};
                } else {
                    group.on('dblclick', function() {
                        console.log(obj.enfant);
                        document.querySelector('ktree-selector').showKtree(obj.enfant);
                    });
                    group.on('click', function () {
                        document.getElementById("ktreetext").innerHTML = "<h2 class=\"textktree padktree\">" + obj.name + ": </h2><div class=\"padktree\">" + obj.presentation + "</div><br/>";
                        document.getElementById('ktreetext').setAttribute("title", obj.name);
                        document.getElementById("ktreebouton").innerHTML = "<a><button id=\"boutonactive\" onClick=\"document.querySelector('ktree-selector').showKtree('" + obj.enfant + "')\">Aller plus loin</button></a>";
                    });
                    group.on('mouseover', function () {
                        document.getElementById("ktreetext").innerHTML = "<h2 class=\"textktree padktree\">" + obj.name + ": </h2><div class=\"padktree\">" + obj.presentation + "</div><br/>";
                        this.opacity(0.5);
                        document.body.style.cursor = 'pointer';
                        layer.draw();
                    });
                    group.on('mouseout', function () {
                        this.opacity(1);
                        document.body.style.cursor = 'default';
                        var title = document.getElementById('ktreetext').getAttribute('title');
                        that = document.querySelector('ktree-diagval');
                        if (title != "") {
                            that = document.querySelector('ktree-diagval');
                            for (i = 0; i < that.steps.length - 1; i++) {
                                if (that.steps[i].name == title) {
                                    document.getElementById('ktreetext').innerHTML = "<h2 class=\"textktree padktree\">" + that.steps[i].name + ": </h2><div class=\"padktree\">" + that.steps[i].presentation + "</div><br/>";
                                }
                            }
                        }
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
                    stroke: '#373f52',
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

            start: function () {
                var fond = document.getElementById('menuktree');
                fond.style.backgroundColor = '#d8e6ad';
                this.drawNodes();
                document.getElementById("ktreebouton2").innerHTML = "<a><button id=\"boutonactive\" onClick=\"document.querySelector('ktree-selector').showKtree('ktree-selector')\">Revenir en arrière</button></a>";
                document.getElementById("menuktree").innerHTML = "<p class=\" summary\"><b class=\"romanumb\">I</b> Démarche diagnostique et outils validés d’évaluation</p><p class=\" summary\"><b class=\"romanumb\">II</b> Les acteurs du repérage et du dépistage</p><p class=\" summary\"><b class=\"romanumb\">III</b> Les principaux enjeux de la démarche diagnostique</p><p class=\" summary\"><b class=\"romanumb\">IV</b> Les trois volets de la démarche diagnostique</p><p class=\" summary\"><b class=\"romanumb\">V</b> L’organisation de la démarche diagnostique</p>";
            }
 });
