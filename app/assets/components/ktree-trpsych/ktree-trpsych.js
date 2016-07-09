        Polymer({
            is: "ktree-trpsych",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: 'Troubles psychiatriques',
                                presentation: '<p class="textktree">Les troubles psychiatriques sont fréquents et souvent multiples chez les personnes ayant un TSA.</p><h2>Prévalence<small class="subtitle">(HAS,Paragraphe 3.3.4, p.34)</small></h2><p class="textktree">Dans une revue non systématique des études de suivi longitudinal de personnes avec autisme de haut niveau ou avec syndrome d’Asperger (6 études, 123 patients), la fréquence des troubles psychiatriques à l’âge adulte était de 11 % à 67 % (54). Dans une série récente d’adultes avec TSA, la fréquence des troubles psychiatriques au moment de l’évaluation ou dans les 12 mois précédents était de 75 % (55) (tableau 6 et annexe 9 – tableau 1). Ces données de fréquence ne peuvent pas être considérées comme une estimation de la prévalence des troubles psychiatriques compte tenu des problèmes d’échantillonnage et des biais de sélection des cas inhérents à ce type d’études ainsi que de l’éventail des critères diagnostiques des troubles psychiatriques utilisés (54).</p><p class="textktree">Le trouble psychiatrique serait unique dans 32 % des cas et serait double ou multiple dans 27 % des cas chez des adultes avec autisme de haut niveau. Si un retard mental est associé à l’autisme, le trouble psychiatrique serait unique dans 37 % des cas et serait double dans 10 % des cas (56,57).</p>',
                                pos: [5, 3],
                                label: "I",
                                enfant: "ktree-trneuropsy",
                            },
                            {
                                name: 'Troubles de l’humeur',
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.3.4, p.35)</small><p class="textktree">La <a>dépression</a> chez les personnes avec autisme ou avec syndrome d’Asperger a fait l’objet d’une revue systématique récente. En l’absence d’études longitudinales en population pour déterminer l’incidence de la dépression sur toute la vie, les résultats sont issus d’études correspondant à des descriptions de cas uniques ou à des séries de cas (différant par leur taille, la période d’étude, l’âge des sujets, les critères diagnostiques et les méthodes d’échantillonnage) et ne permettant pas de généralisation. Les auteurs ont insisté sur la difficulté diagnostique de la dépression chez ces personnes (62) .</p><p class="textktree">Dans une étude chez des enfants avec autisme, il a été rapporté des troubles de l’humeur à type de <a>trouble dépressif caractérisé</a> (traduction en français du terme anglo-saxon « major ») dans 20 % à 30 % des cas, de <a>dysthymies</a>, de <a>troubles bipolaires</a> 2 %, <a>d’hypomanies</a>, de <a>manies</a> (64).</p><p class="textktree">Des troubles bipolaires ont été observés dans 2 % des cas chez des adultes avec autisme (QI > 70) (64) et dans 6 % des cas chez des adultes avec syndrome d’Asperger et dans 9 % des cas chez des adultes avec autisme atypique (65).</p>',
                                pos: [1, 3],
                                label: "II",
                                enfant: "",
                            },
                            {
                                name: 'Troubles anxieux',
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.3.4, p.36)</small><p class="textktree">Les troubles anxieux les plus fréquemment rapportés chez les enfants avec autisme seraient les <a>troubles obsessionnels compulsifs</a> et les <a>phobies</a> (64).</p><p class="textktree">Il a été mis en évidence dans une étude que le niveau d’anxiété est significativement plus élevé chez des adultes avec retard mental et autisme que chez des adultes avec retard mental sans autisme (66).</p>',
                                pos: [2.25, 1.75],
                                label: "III",
                                enfant: "",
                            },
                            {
                                name: 'Troubles psychotiques',
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.3.4, p.37)</small><p class="textktree">L’association entre schizophrénie et TED, en particulier l’autisme atypique, est toujours un sujet de recherche, comme le montre la revue de Rapoport et al. (71) concernant la schizophrénie à début précoce (forme rare et sévère de schizophrénie).</p><p class="textktree">Des troubles psychotiques ont été rapportés chez 5 % à 12 % des adultes avec TSA (55,67) (tableau 8 et annexe 9 - tableau 3).</p><p class="textktree">Aucun trouble psychotique n’a été retrouvé dans l’étude sur des adolescents avec syndrome d’Asperger de Ghaziuddin et al. (68), ni dans les deux études sur des adultes avec autisme avec ou sans retard mental de Melville et al. et de Leyfer et al. (56,64). Dans une série de 163 adolescents et adultes avec autisme, un seul cas de schizophrénie a été rapporté (0,6 %), résultat globalement comparable à la fréquence de la schizophrénie dans la population générale (69).</p><p class="textktree">Une schizophrénie a été observée dans 2 % des cas chez des adultes avec autisme de haut niveau (57) ou avec syndrome d’Asperger (65), et dans 4 % des cas chez des adultes avec autisme atypique (65).Des troubles schizophréniques ont été observés dans 30 % des cas dans la trajectoire vie entière de personnes avec autisme atypique (70).</p>',
                                pos: [4, 1],
                                label: "IV",
                                enfant: "",
                            },
                            {
                                name: 'Catatonie',
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.3.4, p.37)</small><p class="textktree">La fréquence de la catatonie dans les TED serait de 6 % après l\'âge de 15 ans. Elle augmente avec l\'âge (72,73).</p>',
                                pos: [6, 1],
                                label: "V",
                                enfant: "",
                            },
                            {
                                name: 'Syndrome de Gilles de la Tourette',
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.3.4, p.37)</small><p class="textktree">La fréquence du syndrome de Gilles de la Tourette rapporté dans les études a été de 2 % chez les adultes avec autisme et retard mental (61), 5 % chez les adultes avec autisme sans retard mental (57) et de 10 % chez des enfants et adolescents avec TED (74).</p>',
                                pos: [7.75, 1.75],
                                label: "VI",
                                enfant: "",
                            },
                            {
                                name: 'TDAH',
                                presentation: '',
                                pos: [9, 3],
                                label: "VII",
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
                                "Troubles psychiatriques", 'Troubles de l’humeur', 0
                            ],
                            [
                                "Troubles psychiatriques", 'Troubles anxieux', 0
                            ],
                            [
                                "Troubles psychiatriques", 'Troubles psychotiques', 0
                            ],
                            [
                                "Troubles psychiatriques", 'Catatonie', 0
                            ],
                            [
                                "Troubles psychiatriques", 'Syndrome de Gilles de la Tourette', 0
                            ],
                            [
                                "Troubles psychiatriques", 'TDAH', 0
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
            nodeColorNeutral: "#226070",
            nodeColorSuccess: "#226070",
            nodeColorFail: "red",
            strokeColorNeutral: "#5cc666",
            strokeColorSuccess: "#9AEED8",
            strokeColorFail: "red",
            strokeColorCurrent: "#00babc",
            
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
                var box = new Konva.Text({
                    x: node.x() - node.radius(),
                    y: node.y() - node.strokeWidth(),
                    width: 2 * node.radius(),
                    height: 2 * node.strokeWidth(),
                    text: obj.label,
                    fontSize: 3 * node.strokeWidth(),
                    fontFamily: "Arial",
                    fontStyle: "bold",
                    fontVariant: "small-caps",
                    fill: "white",
                    align: "center"
                });
                var group = new Konva.Group();
                group.add(node);
                group.add(box);
                layer.add(group);
                var tmp = 0;
               if (obj.enfant == "") {
                    group.on('click', function () {
                        document.getElementById("ktreetext").innerHTML = "<h2 style=\"color: #00ff97\">" + obj.name + ": </h2>" + obj.presentation + "<br/>";
                        document.getElementById('ktreetext').setAttribute("title", obj.name);
                        document.getElementById("ktreebouton").innerHTML = " ";
                    });
                    group.on('mouseover', function () {
                        document.getElementById("ktreetext").innerHTML = "<h2 style=\"color: #00ff97\">" + obj.name + ": </h2>" + obj.presentation + "<br/>";
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
                        that = document.querySelector('ktree-trpsych');
                        if (title != "") {
                            that = document.querySelector('ktree-trpsych');
                            for (i = 0; i < that.steps.length - 1; i++) {
                                if (that.steps[i].name == title) {
                                    document.getElementById('ktreetext').innerHTML = "<h2 style=\"color: #00ff97\">" + that.steps[i].name + ": </h2>" + that.steps[i].presentation + "<br/>";
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
                        document.getElementById("ktreetext").innerHTML = "<h2 style=\"color: #00ff97\">" + obj.name + ": </h2>" + "<p  style=\"color: #00ff97\">" + obj.presentation + "</p><br/>";
                        document.getElementById('ktreetext').setAttribute("title", obj.name);
                        document.getElementById("ktreebouton").innerHTML = "<a><button style=\"width: 100%; height: 40px; background-color: #00ff97; color: #226070; border-radius: 15px\" onClick=\"document.querySelector('ktree-selector').showKtree('" + obj.enfant + "')\">En savoir plus</button></a>";
                    });
                    group.on('mouseover', function () {
                        document.getElementById("ktreetext").innerHTML = "<h2 style=\"color: #00ff97\">" + obj.name + ": </h2>" + obj.presentation + "<br/>";
                        this.opacity(0.5);
                        document.body.style.cursor = 'pointer';
                        layer.draw();
                    });
                    group.on('mouseout', function () {
                        this.opacity(1);
                        document.body.style.cursor = 'default';
                        var title = document.getElementById('ktreetext').getAttribute('title');
                        that = document.querySelector('ktree-trpsych');
                        if (title != "") {
                            that = document.querySelector('ktree-trpsych');
                            for (i = 0; i < that.steps.length - 1; i++) {
                                if (that.steps[i].name == title) {
                                    document.getElementById('ktreetext').innerHTML = "<h2 style=\"color: #00ff97\">" + that.steps[i].name + ": </h2>" + that.steps[i].presentation + "<br/>";
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
                    stroke: '#9AEED8',
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
                this.drawNodes();
                document.getElementById("menuktree").innerHTML = "<p class=\" summary\"><b style=\"color: white\">I</b>] Troubles psychiatriques</p><p class=\" summary\"><b style=\"color: white\">II</b>] Troubles de l’humeur</p><p class=\" summary\"><b style=\"color: white\">III</b>] Troubles anxieux</p><p class=\" summary\"><b style=\"color: white\">IV</b>] Troubles psychotiques</p><p class=\" summary\"><b style=\"color: white\">V</b>] Catatonie</p><p class=\" summary\"><b style=\"color: white\">VI</b>] Syndrome de Gilles de la Tourette</p><p class=\" summary\"><b style=\"color: white\">VII</b>] TDAH</p>";
            }
 });
