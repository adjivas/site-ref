        Polymer({
            is: "ktree-cominter",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: "Communication et interactions sociales",
                                presentation: '',
                                pos: [1, 6],
                                label: "I",
                                enfant: "ktree-manif",
                            },
                            {
                                name: "La communication verbale et non verbale",
                                presentation: '<p class=\"textktree\">Les troubles durables relatifs à la communication portent sur l’acquisition de la parole, du langage ou de toute forme de communication non verbale. Ils touchent de façon quantitative et qualitative :</p><ul><li class=\"textktree\"><b class=\"textktree\">le versant expressif</b> : retard de parole et/ou de langage, présence de néologismes, jargon, difficultés dans la structure syntaxique et morphosyntaxique (difficultés dans l’utilisation des pronoms, inversions pronominales), registre et fonctions du langage très restreints (pas ou peu de demandes, verbales ou non, spontanées exprimées), règles de la conversation non intégrées (non-respect du tour de parole, pas de prise en compte des conversations), altération de la prosodie et de l’intonation (intensité de la voix souvent inadaptée, trop forte, ton monotone et prosodie souvent mimétique ou artificielle), inadéquation des réponses aux questions (écholalies immédiates et différées, c’est-à-dire répétitions de tout ou d’une partie d’une phrase, quelques persévérations), invariance verbale (monologues présents en situation de jeu, stéréotypies verbales, mais pouvant varier), altération de l’expression non verbale (contact oculaire insuffisant, expressivité faciale réduite, expressivité corporelle inadaptée, gestes sociaux ou conventionnels peu utilisés comme hochements de têtes, gestes descriptifs…)</li><li class=\"textktree\"><b class=\"textktree\">le versant réceptif</b> : difficulté de compréhension de la parole, des mots, du sens littéral et figuré des phrases, des mimiques et des attitudes corporelles ; difficulté de compréhension du sens, de l’implicite et du second degré du langage</li><li class=\"textktree\"><b class=\"textktree\">l’utilisation du langage dans sa fonction sociale</b> : langage pas ou peu dirigé vers l’autre, mauvaise adaptation au contexte, trouble de la pragmatique</li><li class=\"textktree\"><b class=\"textktree\">le jeu</b> : altération du jeu (capacités de faire semblant, de créativité, d’imitation, de jeu symbolique, production de jeu répétitif et stéréotypé, de jeu non fonctionnel).</li></ul><p class=\"textktree\">Ces troubles peuvent limiter les capacités d’inclusion sociale, scolaire, professionnelle, du fait de leurs conséquences sur :</p><ul><li class=\"textktree\">la communication pour établir des relations et faire connaître ses besoins élémentaires</li><li class=\"textktree\">les restitutions orales</li><li class=\"textktree\">la compréhension des consignes orales et écrites</li><li class=\"textktree\">les relations et situations d’échanges (fonction sociale du langage)</li><li class=\"textktree\">les apprentissages scolaires</li></ul>',
                                pos: [0.75, 4],
                                label: "II",
                                enfant: "",
                            },
                            {
                                name: 'Les interactions sociales',
                                presentation: '<p class=\"textktree\">Les troubles relatifs aux interactions sociales sont globaux. Ils touchent dès les premiers stades du développement les interactions précoces entre la personne et son entourage. La personne est isolée et ne recherche pas le contact des autres et particulièrement des personnes de son âge. Lorsque l’intérêt social se développe, les modes d’entrée en communication sont maladroits, et la personne ne parvient pas à maintenir l’échange durablement. L’interaction sociale avec l’environnement humain peut être améliorée si celui-ci s’adapte à la personne et lui facilite la situation.<br>Ainsi, peuvent être altérés :</p><ul><li class=\"textktree\">la capacité à regarder, pointer, montrer, partager (échange par le regard, pointage pour partager un intérêt en commun, coordination entre regard et vocalisation dans les initiatives sociales, désignation des objets)</li><li class=\"textktree\">l’orientation à l’appel du prénom</li><li class=\"textktree\">la capacité d’attention conjointe (capacité à partager un événement avec autrui en attirant et maintenant l’attention de l’autre vers un objet ou une personne dans le but d’obtenir une observation commune et conjointe)</li><li class=\"textktree\">la réciprocité sociale ou émotionnelle (capacité d’empathie et de compréhension des états émotionnels de l’autre, partage de plaisir, offre de réconfort, réponse aux sollicitations sociales en particulier des pairs, jeux de groupe avec les pairs, demande d’aide, bavardage et commentaires, initiation de la relation sociale)</li><li class=\"textktree\">la capacité de jeu partagé (symbolique ou réel)</li><li class=\"textktree\">le niveau de développement de la théorie de l’esprit (capacités à attribuer des états mentaux à soi-même et aux autres et à interpréter le comportement d’autrui en termes d’états mentaux), de la motivation et de l’attention sociale.</li></ul><p class=\"textktree\">Ces altérations peuvent limiter les capacités d’inclusion sociale, scolaire, professionnelle, du fait de leurs conséquences sur les relations et situations d’échange : les relations sont perturbées et peuvent créer des situations de malentendus, de conflits, d’isolement. Par ailleurs, ces troubles ont particulièrement un impact sur le fonctionnement de la vie familiale au quotidien et sur la vie sociale de la famille (confinement à domicile, souffrance éventuelle de la fratrie…).</p>',
                                pos: [2.25, 4],
                                label: "III",
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
                                "Communication et interactions sociales", 'La communication verbale et non verbale', 0
                            ],
                            [
                                "Communication et interactions sociales", 'Les interactions sociales', 0
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
                        that = document.querySelector('ktree-cominter');
                        if (title != "") {
                            that = document.querySelector('ktree-cominter');
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
                        that = document.querySelector('ktree-cominter');
                        if (title != "") {
                            that = document.querySelector('ktree-cominter');
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
                document.getElementById("menuktree").innerHTML = "<p class=\" summary\"><b class=\"romanumb\">I</b>Communication et interactions sociales</p><p class=\" summary\"><b class=\"romanumb\">II</b>La communication verbale et non verbale</p><p class=\" summary\"><b class=\"romanumb\">III</b>Les interactions sociales</p>";
            }
 });
