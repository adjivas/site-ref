        Polymer({
            is: "ktree-parcom",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: 'Les particularités communes aux TSA',
                                presentation: '',
                                pos: [4, 5],
                                label: "IV",
                                enfant: "ktree-manif",
                            },
                            {
                                name: 'Particularités sensorielles',
                                presentation: '<p class=\"textktree\">Sont évoquées ici les « particularités sensorielles » relatives au niveau du traitement de l’information sensorielle et non les atteintes des fonctions visuelles ou auditives. Ces particularités se caractérisent par une grande variabilité du point de vue de leur expression et de leur impact dans la vie quotidienne.</p><p class=\"textktree\">Les particularités du traitement sensoriel peuvent en effet toucher tous les systèmes sensoriels : visuel (capacité de voir), auditif (perception des sons), tactile (perception du toucher, mais aussi de la pression, de la douleur et de la température), olfactif (capacité de sentir), gustatif (sens du goût) ainsi que la proprioception (capacité de percevoir des stimuli internes à l’organisme, notamment ceux liés à la position et aux mouvements du corps) et le système vestibulaire (détection du mouvement et position centrale dans l’oreille interne, équilibre).</p><p class=\"textktree\">Ces particularités ont des conséquences multiples sur l’adaptation des personnes dans leur environnement et sur les apprentissages cognitifs et sociaux.</p><p class=\"textktree\">Par ailleurs, elles peuvent contribuer à l’émergence de comportements-problèmes du fait de l’impossibilité de réguler les stimuli environnementaux. Comme le souligne la HAS, « Les particularités sensorielles sont parfois à l’origine de troubles graves du comportement. Ainsi, la présence d’automutilation quelle qu’en soit la forme, occasionnelle ou fréquente, est observée chez la moitié des adultes avec autisme et est probablement liée à l’existence de troubles sensoriels.»</p><p class=\"textktree bgblue\">Ainsi, les personnes avec TSA ne présentent pas de déficit sensoriel proprement dit, mais peuvent retenir et porter leur intérêt sur des caractéristiques de l’environnement différentes comparé à une personne « neurotypique », et leur réaction peut alors être exagérée (hyperactivité), modérée, inexistante (hypoactivité) ou entraîner une recherche itérative de stimulation.</p><p class=\"textktree\">Ces particularités peuvent limiter les capacités d’inclusion sociale, scolaire, professionnelle du fait de leurs conséquences sur :</p><ul><li class=\"textktree\">la communication réceptive et expressive (absence de réponse aux interpellations, absence de compréhension de l’intonation de voix, recours au toucher au lieu de la parole…)</li><li class=\"textktree\">l’organisation du quotidien (anxiété lors de la toilette, du brossage des dents, lors de la coupe des cheveux ou des ongles, inadaptation de l’habillage à la température extérieure, absence de conscience du danger…)</li><li class=\"textktree\">les soins et les examens somatiques (anxiété lors de l’examen clinique, à la pose des électrodes d’électroencéphalogramme – EEG…)</li><li class=\"textktree\">les déplacements dans les transports (inquiétude dans les transports en commun, mal des transports…)</li><li class=\"textktree\">les activités d’apprentissage (impossibilité de toucher certains matériaux – colle… –, de se concentrer dans le bruit de la classe…)</li><li class=\"textktree\">l’alimentation (tri sélectif, dégoût vis-à-vis d’odeurs…)</li><li class=\"textktree\">la fréquentation de certains lieux sociaux (réaction négative dans les centres commerciaux, impossibilité de rester dans une file d’attente, pleurs ou fuite à l’aboiement d’un chien…)</li><li class=\"textktree\">la participation à certaines activités de loisirs (impossibilité ou difficulté à contenir son excitation dans des activités impliquant le mouvement, intérêt limité aux activités calmes à l’intérieur, peur lors des roulades…)</li></ul>',
                                pos: [2.5, 3],
                                label: "V",
                                enfant: "",
                            },
                            {
                                name: 'Particularités cognitives',
                                presentation: '<p class=\"textktree\">Les particularités du fonctionnement cognitif présentées par les personnes avec TSA conditionnent la manière dont elles emmagasinent, utilisent et restituent l’information et donc la façon dont elles appréhendent leur environnement physique et social. Ces particularités doivent être prises en compte pour comprendre le fonctionnement de ces personnes, identifier leurs besoins et leurs ressources, adapter les accompagnements et développer leur potentiel d’apprentissage et d’adaptation. Elles concernent les capacités intellectuelles, les fonctions exécutives, le langage et les particularités de traitement de l’information sensorielle </p><p class=\"textktree\">Le développement des capacités intellectuelles chez les personnes avec TSA présente des particularités : ces personnes présentent souvent un profil hétérogène. En effet, le niveau atteint dans un domaine peut être significativement différent dans un autre domaine. L’analyse des différents domaines de compétence peut ainsi montrer des pics de performance associés à des résultats en chute dans d’autres domaines. Les îlots de défi cits peuvent être très inférieurs à la moyenne, malgré un bon profil cognitif. Un profil cognitif déficitaire a un retentissement négatif exponentiel sur les autres domaines de développement (notamment la communication et les relations sociales) et sur l’adaptation des comportements.</p><p class=\"textktree\">Généralement, les tâches impliquant l’abstraction, la compréhension verbale et non verbale, l’agencement de séquences temporelles et le codage de l’information mettent davantage en difficulté les personnes avec TSA. L’utilisation de matériel symbolique fait ainsi chuter leurs capacités de discrimination. En revanche, leurs capacités spatiales et perceptives sont généralement bonnes ainsi que leur mémoire de données brutes (« par cœur »). Leur capacité à discriminer des stimuli est correcte quand il s’agit de matériel concret. Leur performance perceptive est meilleure sur le plan visuel et auditif.</p><p class=\"textktree\">À l’heure actuelle, si des déficits des fonctions exécutives sont relevés chez des personnes avec TSA, le débat reste ouvert quant au lien de proportionnalité entre l’importance de ces troubles exécutifs et les répercussions fonctionnelles. En effet, des personnes montrant une altération importante des fonctions exécutives en situation de test ne présentent pas forcément des manifestations autistiques sévères dans la vie quotidienne. L’inverse est également constaté.</p><p class=\"textktree\">Les capacités d’inclusion sociale, scolaire, professionnelle sont limitées du fait des difficultés rencontrées dans les apprentissages et le quotidien :</p><ul><li class=\"textktree\">difficultés dans l’organisation, la planification des actions et des mouvements</li><li class=\"textktree\">difficultés à s’adapter et à avoir une flexibilité face au changement (répétition de la même méthode dans chaque exercice sans adaptation par exemple)</li><li class=\"textktree\">difficultés à maîtriser l’enchaînement logique</li><li class=\"textktree\">difficultés à conceptualiser</li><li class=\"textktree\">difficultés à généraliser (impossibilité à réutiliser une compétence apprise dans un contexte au sein d’un autre environnement).</li></ul>',
                                pos: [5.5, 3],
                                label: "V",
                                enfant: "",
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
                                "Les particularités communes aux TSA", 'Particularités sensorielles', 0
                            ],
                            [
                                "Les particularités communes aux TSA", 'Particularités cognitives', 0
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
            nodeColorNeutral: "#5cc666",
            nodeColorSuccess: "#373f52",
            nodeColorFail: "red",
            strokeColorNeutral: "#373f52",
            strokeColorSuccess: "#5cc666",
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
                        that = document.querySelector('ktree-manif');
                        if (title != "") {
                            that = document.querySelector('ktree-manif');
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
                        that = document.querySelector('ktree-manif');
                        if (title != "") {
                            that = document.querySelector('ktree-manif');
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
                fond.style.backgroundColor = '#5cc666';
                this.drawNodes();
                document.getElementById("ktreebouton2").innerHTML = "<a><button id=\"boutonactive\" onClick=\"document.querySelector('ktree-selector').showKtree('ktree-manif')\">Revenir en arrière</button></a>";
                document.getElementById("menuktree").innerHTML = "<p class=\" summary\"><b class=\"romanumb\">I</b>] Les principales manifestations</p><p class=\" summary\"><b class=\"romanumb\">II</b>] Communication et interactions sociales</p><p class=\" summary\"><b class=\"romanumb\">III</b>] Comportements stéréotypés et intérêts restreints</p><p class=\" summary\"><b class=\"romanumb\">IV</b>] Les particularités communes aux TSA</p><p class=\" summary\"><b class=\"romanumb\">V</b>] Evolution des troubles</p>";
            }
 });
