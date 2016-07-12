        Polymer({
            is: "ktree-cmb",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: "Comorbidités",
                                presentation: '<p class="textktree">Les TSA sont souvent associés à d’autres troubles ou pathologies.</p>',
                                pos: [1, 6],
                                label: "I",
                                enfant: "ktree-cmtra",
                            },
                            {
                                name: "Autres troubles neurodeveloppementaux (DSM-5)",
                                presentation: '',
                                pos: [1.25, 4.5],
                                label: "II",
                                enfant: "ktree-autrneuro",
                            },
                            {
                                name: 'Troubles neuropsychiatriques',
                                presentation: '',
                                pos: [4, 5],
                                label: "III",
                                enfant: "ktree-trneuropsy",
                            },
                            {
                                name: 'Anomalies génétiques et chrosomiques',
                                presentation: '',
                                pos: [7.75, 5.4],
                                label: "IV",
                                enfant: "ktree-anogchro",
                            },
                            {
                                name: 'Troubles du sommeil',
                                presentation: '<small class=\"subtitle\">(HAS,Paragraphe 3.3.5, p.38)</small><p class=\"textktree\">Les troubles du sommeil constituent une des plaintes les plus fréquemment rapportées par les familles d’enfants avec autisme. Ainsi, la prévalence des troubles du sommeil chez les enfants avec autisme va de 45 % à 86 % selon les études (75-78), et ceci même chez les enfants avec autisme non déficitaires (75,78-80). Les parents décrivent avant tout une insomnie, avec difficulté d’endormissement, du maintien de sommeil et aussi une plus courte durée de sommeil (79,81-85). L’étude récente de Krakowiak et al. suggère que l’endormissement et les réveils nocturnes seraient les deux domaines de sommeil les plus atteints dans le groupe des enfants ayant un TSA (78).</p><p class=\"textktree\">La plupart des études ont utilisé des mesures subjectives parentales sur la base d’agendas de sommeil ou de questionnaires pour évaluer le sommeil des enfants avec autisme.</p><p class=\"textktree\">Les travaux, peu nombreux, ayant réalisé une évaluation objective du sommeil à l’aide d’une <a href="https://fr.wikipedia.org/w/index.php?search=polysomnographie" target="_blank" >polysomnographie</a> ont confirmé les plaintes de parents. Dans ces études, il a été rapporté : une <a href="https://fr.wikipedia.org/w/index.php?search=Latence" target="_blank">latence</a> d’endormissement allongée, un temps total de sommeil diminué et un temps d’éveil intrasommeil augmenté, les autres anomalies observées étant plus hétérogènes (86- 89).</p><p class=\"textktree\">L’analyse de la relation entre trouble du sommeil et symptomatologie clinique de l’autisme (incluant les troubles du comportement) a été rarement rapportée. Elia et al. (86) ont observé une corrélation entre la communication non verbale, la réponse visuelle et le temps total de sommeil et les éveils nocturnes, confirmée par Limoges et al. (corrélation négative entre le temps total de sommeil et les scores d’interactions sociales et de communication sur l’ADI-R) (87). Malow et al. distinguent des enfants avec autisme “ bons dormeurs ” et “ mauvais dormeurs ”, les premiers souffrant moins de problèmes affectifs et ayant une meilleure interaction sociale (88).</p><p class=\"textktree\">Parallèlement aux études sur le sommeil, il a été recherché des troubles des rythmes <a href="https://fr.wikipedia.org/w/index.php?search=circadien" target="_blank">circadiens</a> chez des enfants avec autisme, en se basant sur la plainte parentale de rythmes veille-sommeil irréguliers chez leur enfant (83,90). Des anomalies de sécrétion de la <a href="https://fr.wikipedia.org/w/index.php?search=mélatonine" target="_blank">mélatonine</a> ont été mis en évidence chez des enfants avec autisme (91-94).</p>',
                                pos: [7.75, 6.6],
                                label: "V",
                                enfant: "",
                            },
                            {
                                name: 'Troubles du comportement alimentaire',
                                presentation: '',
                                pos: [4, 7],
                                label: "VI",
                                enfant: "",
                            },
                            {
                                name: 'Troubles sensoriels : déficiences sensorielles',
                                presentation: '',
                                pos: [1.25, 7.5],
                                label: "VII",
                                enfant: "ktree-senso",
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
                                "Comorbidités", 'Autres troubles neurodeveloppementaux (DSM-5)', 0
                            ],
                            [
                                "Comorbidités", 'Troubles neuropsychiatriques', 0
                            ],
                            [
                                "Comorbidités", 'Anomalies génétiques et chrosomiques', 0
                            ],
                            [
                                "Comorbidités", 'Troubles du sommeil', 0
                            ],
                            [
                                "Comorbidités", 'Troubles du comportement alimentaire', 0
                            ],
                            [
                                "Comorbidités", 'Troubles sensoriels : déficiences sensorielles', 0
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
                        that = document.querySelector('ktree-cmb');
                        if (title != "") {
                            that = document.querySelector('ktree-cmb');
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
                        that = document.querySelector('ktree-cmb');
                        if (title != "") {
                            that = document.querySelector('ktree-cmb');
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
                document.getElementById("ktreebouton2").innerHTML = "<a><button id=\"boutonactive\" onClick=\"document.querySelector('ktree-selector').showKtree('ktree-cmtra')\">Revenir en arrière</button></a>";
                document.getElementById("menuktree").innerHTML = "<p class=\" summary\"><b class=\"romanumb\">I</b>] Comorbidités</p><p class=\" summary\"><b class=\"romanumb\">II</b>] Autres troubles neurodeveloppementaux (DSM-5)</p><p class=\" summary\"><b class=\"romanumb\">III</b>] Troubles neuropsychiatriques</p><p class=\" summary\"><b class=\"romanumb\">IV</b>] Anomalies génétiques et chrosomiques</p><p class=\" summary\"><b class=\"romanumb\">V</b> Troubles du sommeil</p><p class=\" summary\"><b class=\"romanumb\">VI</b> Troubles du comportement alimentaire</p><p class=\" summary\"><b class=\"romanumb\">VII</b> Troubles sensoriels : déficiences sensorielles</p>";
            }
 });
