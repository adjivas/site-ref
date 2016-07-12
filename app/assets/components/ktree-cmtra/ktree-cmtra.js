        Polymer({
            is: "ktree-cmtra",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: "Comorbidités et troubles associés",
                                presentation: '<p class=\"textktree\">Les TSA sont souvent associés à d’autres troubles ou pathologies :</p><ul><li class=\"textktree\">D’autres troubles neurodéveloppementaux (comme évoqué dans le DSM-5) : déficience intellectuelle, troubles de la communication, troubles Dys (dont les troubles spécifiques et durables du développement des processus attentionnels et des fonctions exécutives – TDAH)</li><li class=\"textktree\">Des troubles neurologiques (épilepsie)</li><li class=\"textktree\">Des anomalies génétiques ou chromosomiques (X fragile, sclérose tubéreuse de Bourneville, neurofibromatose, syndrome d’Angelman, syndrome de Prader-Willi, trisomie 21, délétion 22q11, délétion terminale 22q13…)</li><li class=\"textktree\">Des troubles du sommeil (de tout type)</li><li class=\"textktree\">Des troubles psychiatriques (hyperactivité, particulièrement chez l’enfant, troubles de l’humeur, troubles anxieux, dépression chez l’adolescent et l’adulte, syndrome Gilles de la Tourette, troubles psychotiques…)</li><li class=\"textktree\">Des troubles sensoriels (déficience visuelle ou auditive)</li><li class=\"textktree\">Des troubles du comportement alimentaire (pouvant d’ailleurs être liés à des troubles sensoriels).</li></ul><p class=\"textktree\">Cette liste est susceptible d’évoluer dans le temps, selon les résultats de la recherche par exemple</p>',
                                pos: [4, 7.5],
                                label: "I",
                                enfant: "ktree-def",
                            },
                            {
                                name: "Comorbidités",
                                presentation: '<p class="textktree">Les TSA sont souvent associés à d’autres troubles ou pathologies.</',
                                pos: [1, 6],
                                label: "II",
                                enfant: "ktree-cmb",
                            },
                            {
                                name: 'Comportements problèmes',
                                presentation: '<p class=\"textktree\">Pour les personnes recevant un diagnostic de TSA, la probabilité de manifester des « comportements-problèmes » est significative. L’ANESM, dans le cadre de ses recommandations de 2010, définit les comportements-problèmes comme : « tout ce qui constitue une gêne notable, intense, répétée, durable ou qui présente un danger pour la personne avec autisme ou autre TED, ainsi que pour son environnement et qui compromet ses apprentissages, son adaptation et son intégration sociales. »</p><p class=\"textktree\">Cette dénomination souligne que le comportement de la personne représente un problème à résoudre pour la famille et l’ensemble des intervenants devant se mobiliser pour trouver des solutions. Le comportement en cause n’est donc pas considéré seulement comme un problème caractéristique de la personne, mais comme l’expression d’une problématique d’interaction entre la personne et son environnement. Ces comportements peuvent apparaître en raison d’une problématique somatique (douleur ou maladie intercurrente), d’une inadéquation dans la prise en charge, l’environnement ou le parcours de vie ou encore d’un déficit des apprentissages ou d’utilisation de modes de communication (expression/compréhension) adaptés à la personne. Tout comportement-problème doit en priorité conduire à s’interroger sur la présence d’une atteinte somatique et amener à une évaluation fonctionnelle pour identifier les facteurs en jeu dans l’apparition et le maintien des comportements-problèmes.</p><p class=\"textktree\">Ces comportements peuvent se manifester de diverses façons :</p><ul><li class="textktree">Autoagressivité, automutilation (se frapper la tête, s’arracher les cheveux ou les ongles…)</li><li class="textktree">Hétéroagressivité</li><li class="textktree">Destruction d’objets</li><li class="textktree">Conduites sociales ou sexuelles inadaptées (fugue, se déshabiller ou se masturber en public)</li><li class="textktree">Autostimulations et stéréotypies (tourner sur soi, courir d’un mur à l’autre, grincer des dents…) souvent en lien avec la dimension sensorielle</li><li class="textktree">Insomnies rebelles à tout traitement</li><li class="textktree">Troubles sévères du comportement alimentaire…</li></ul><p class=\"textktree\">Ils peuvent se traduire par l’apparition de manifestations non observées jusqu’alors, mais aussi par une augmentation de la fréquence ou de l’intensité de manifestations déjà rencontrées. Ces comportements-problèmes, notamment lorsqu’ils sont sévères, peuvent avoir des retentissements sur l’intégration sociale et aboutir aux situations suivantes :</p><ul><li class="textktree">Entrave aux apprentissages</li><li class="textktree">Rejet par les établissements, les services</li><li class="textktree">complexification des suivis, des mesures de compensation du handicap</li><li class="textktree">Altération de la qualité de vie des personnes avec TSA et de leur famille.</li></ul>',
                                pos: [7, 6],
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
                                "Comorbidités et troubles associés", 'Comorbidités', 0
                            ],
                            [
                                "Comorbidités et troubles associés", 'Comportements problèmes', 0
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
                        that = document.querySelector('ktree-cmtra');
                        if (title != "") {
                            that = document.querySelector('ktree-cmtra');
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
                        that = document.querySelector('ktree-cmtra');
                        if (title != "") {
                            that = document.querySelector('ktree-cmtra');
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
                document.getElementById("ktreebouton2").innerHTML = "<a><button id=\"boutonactive\" onClick=\"document.querySelector('ktree-selector').showKtree('ktree-def')\">Revenir en arrière</button></a>";
                document.getElementById("menuktree").innerHTML = "<p class=\" summary\"><b class=\"romanumb\">I</b>] Comorbidités et troubles associés</p><p class=\" summary\"><b class=\"romanumb\">II</b>] Comorbidités</p><p class=\" summary\"><b class=\"romanumb\">III</b>] Comportements problèmes</p>";
            }
 });
