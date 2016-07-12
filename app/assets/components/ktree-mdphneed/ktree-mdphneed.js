        Polymer({
            is: "ktree-mdphneed",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: "Les informations nécessaires aux MDPH pour identifier les besoins",
                                presentation: "<p class=\"textktree\">Depuis la loi du 11 février 2005, la Maison Départementale des Personnes Handicapées a pour mission d’évaluer les situations de handicap. Cette évaluation est confiée à une instance pluridisplinaire (art L. 146-8 du Code de l’Action Sociale et des Familles).</p><p class=\"textktree\">Cette évaluation permet de proposer des réponses adaptées et personnalisées en fonction des besoins des personnes et de respecter un droit essentiel : le droit à la compensation.</p><p class=\"textktree\">Afin d’évaluer de façon précise la situation de la personne, l’équipe pluridisciplinaire de la MDPH a besoin de plusieurs informations : </p>",
                                enfant: "ktree-demarmdph",
                                label: "II",
                                pos: [6, 7.4],
                            },
                            {
                                name: "Les altérations de fonctions",
                                presentation: "<p class=\"textktree\">Puisqu’il ne s’agit que d’altération, cela signifie que l’intervention de la MDPH peut se faire alors même qu’il n’existe pas (encore) de diagnostic. En effet, une altération peut être révélée lors du dépistage ou au cours du diagnostic, sans que celui-ci ne soit définitif. Pour que l’altération soit retenue, il faut :</p><ul><li class=\"textktree\">Qu’elle soit confirmée</li><li class=\"textktree\">Que son évaluation soit supérieure à un an</li><li class=\"textktree\">Qu’il existe des conséquences dans la vie de la personne</li></ul><p class=\"textktree\">Une fois cette altération prouvée, la MDPH peut envisager l’application d’un droit à la compensation et élaborer un plan afin de mettre en place toutes les mesures répondant aux besoins de la personne handicapée.</p>",
                                enfant: "ktree-selector",
                                label: "I",
                                pos: [4, 5.4],
                            },
                            {
                                name: "La réalisation d’activités et la participation sociale",
                                presentation: '<p class=\"textktree\">Cela concerne tous les domaines, qu’il s’agisse de l’apprentissage d’actes élémentaires, de l’activité professionnel ou des relations avec autrui…</p><p class=\"textktree\">L’équipe pluridisciplinaire évaluera alors le degré de réalisation de ces activités et prendra également en compte les types de prise en charge médicales, thérapeutiques ou rééducatives nécessaires afin d’évaluer le niveau des répercussions dans la vie quotidienne et de proposer la compensation la plus pertinente possible.</p>',
                                pos: [6, 5.4],
                                label: "III",
                                enfant: ""
                            },
                            {
                                name: "Aides et accompagnement",
                                presentation: '<p class=\"textktree\"> Afin de cerner au mieux le handicap de la personne et ses besoins, il est nécessaire de connaitre les différentes aides et accompagnements mis en place, ainsi que leurs répercussions. Ces informations recueillies grâces à divers documents (projet de vie de la personne, certificat médical, comptes rendus, bilans…etc.) permettront à l’équipe disciplinaire de compléter et d’apprécier de manière plus fine la situation individuelle de la personne handicapée.</p><p class=\"textktree\">L’équipe pluridisplinaire se base donc sur plusieurs éléments du quotidien, de la personne, sa famille, et les professionnels qui sont intervenus. Ce panel d’information lui permettra premièrement d’identifier les besoins de la personne pour ensuite évaluer les besoins de compensation. La démarche d’évaluation est structurée par le Guide d’Evaluation des Besoins de Compensation des Personnes Handicapées (GEVA). </p><p class=\"textktree\">En principe, les informations transmises sont divisées en plusieurs volets afin de donner une vision d’ensemble, plus ergonomique et donc plus pertinente pour évaluer la situation individuelle : </p><ul><li class=\"textktree\">Volet identification</li><li class=\"textktree\">Volet habitat et cadre de vie</li><li class=\"textktree\">Volet parcours de formation</li><li class=\"textktree\">Volet parcours professionnel</li><li class=\"textktree\">Volet médical</li><li class=\"textktree\">Volet psychologique</li><li class=\"textktree\">Volet familial, social et budgétaire</li></ul><p class=\"textktree\">Un autre guide répertorie les informations relatives à la scolarité (GEVA-sco) et vient compléter ce guide.</p><p class=\"textktree\">Ce panel d’informations triées permet une analyse globale de la situation de handicap et rend possible l’évaluation des critères d’éligibilité aux différentes prestations de compensation.</p><p class=\"textktree\">C’est ensuite la Commission des Droits et de l’Autonomie des Personnes Handicapées (CDAPH) qui reconnaitra, ou non, le handicap de la personne. De cette reconnaissance découlera de nombreux droits, notamment la compensation.</p><p class=\"textktree\">Cependant, de nombreuses interventions sont possibles sans cette reconnaissance et sans recourir à la MDPH</p>',
                                pos: [8, 5.4],
                                label: "IV",
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
                                "Les informations nécessaires aux MDPH pour identifier les besoins", 'Les altérations de fonctions', 0
                            ],
                            [
                                "Les informations nécessaires aux MDPH pour identifier les besoins", 'La réalisation d’activités et la participation sociale', 0
                            ],
                            [
                                "Les informations nécessaires aux MDPH pour identifier les besoins", 'Aides et accompagnement', 0
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
            nodeColorNeutral: "#BBB3E6",
            nodeColorSuccess: "#373f52",
            nodeColorFail: "red",
            strokeColorNeutral: "#373f52",
            strokeColorSuccess: "#BBB3E6",
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
                        that = document.querySelector('ktree-mdphneed');
                        if (title != "") {
                            that = document.querySelector('ktree-mdphneed');
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
                        that = document.querySelector('ktree-mdphneed');
                        if (title != "") {
                            that = document.querySelector('ktree-mdphneed');
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
                fond.style.backgroundColor = '#BBB3E6';
                this.drawNodes();
                document.getElementById("ktreebouton2").innerHTML = "<a><button id=\"boutonactive\" onClick=\"document.querySelector('ktree-selector').showKtree('ktree-selector')\">Revenir en arrière</button></a>";
                document.getElementById("menuktree").innerHTML = "<p class=\" summary\"><b class=\"romanumb\">I</b> Les informations nécessaires aux MDPH pour identifier les besoins</p><p class=\" summary\"><b class=\"romanumb\">II</b> Les altérations de fonctions</p><p class=\" summary\"><b class=\"romanumb\">III</b> Les altérations de fonctions</p><p class=\" summary\"><b class=\"romanumb\">IV</b> Aides et accompagnement</p>";
            }
 });
