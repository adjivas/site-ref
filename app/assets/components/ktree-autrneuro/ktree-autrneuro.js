        Polymer({
            is: "ktree-autrneuro",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: "Autres troubles neurodeveloppementaux (DSM-5)",
                                presentation: '',
                                pos: [1.25, 4.5],
                                label: "I",
                                enfant: "ktree-cmb",
                            },
                            {
                                name: "Déficience intellectuelle",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.3.2, p.32)</small><p class="textktree underline">Les données épidémiologiques sont issues d’études étrangères en l’absence d’études épidémiologiques françaises actuelles.</p><p class="textktree">Dans l’ensemble des TED, la proportion de l’association avec la déficience intellectuelle est de 30 % (43).	La prévalence des TED avec déficience intellectuelle peut être estimée entre 20 et 30/10 000.</p><p class="textktree">Dans la revue de Fombonne 2003, la proportion médiane de sujets avec autisme sans retard intellectuel est de 30 % (extrêmes : 0 % - 60 %), la proportion de sujets ayant un retard léger ou modéré est de 30 % (extrêmes : 6,6 % - 100 %), et la proportion de sujets ayant un retard profond est de 40 % (0 % - 81,3 %) (16). La prévalence de l’association d’une déficience intellectuelle avec les TED non spécifiés est bien plus faible : 12 % (43). Par définition, il n’y a pas de déficience intellectuelle dans les syndromes d’Asperger (43).</p><p class="textktree">Dans la population diagnostiquée et prise en charge pour une déficience intellectuelle, la proportion de l’association avec l’autisme et l’ensemble des TED varie avec les études entre 20 % et 40 % (44). A la suite de Lorna Wing, la majorité des auteurs observent une augmentation de la prévalence de l’autisme en proportion inverse du niveau de QI.</p><p class="textktree">L’étude chez les adolescents de Bryson et al. (44) indique que moins de la moitié de ceux chez lesquels un autisme est confirmé avait reçu auparavant ce diagnostic ou celui de « traits autistiques ». Ceci est à mettre sur le compte d’une perte de spécificité des outils diagnostiques chez les personnes avec faible QI.</p><p class="textktree">Inversement, certaines caractéristiques cliniques communes à l’autisme et à la déficience intellectuelle, comme les comportements stéréotypés ou autoagressifs (45) peuvent faire porter le diagnostic d’autisme par erreur.</p>',
                                pos: [1, 2],
                                label: "II",
                                enfant: "",
                            },
                            {
                                name: 'Troubles de la communication',
                                presentation: '',
                                pos: [3, 2.5],
                                label: "III",
                                enfant: "",
                            },
                            {
                                name: 'Troubles Dys',
                                presentation: '',
                                pos: [5, 3.5],
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
                                "Autres troubles neurodeveloppementaux (DSM-5)", 'Déficience intellectuelle', 0
                            ],
                            [
                                "Autres troubles neurodeveloppementaux (DSM-5)", 'Troubles de la communication', 0
                            ],
                            [
                                "Autres troubles neurodeveloppementaux (DSM-5)", 'Troubles Dys', 0
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
                        that = document.querySelector('ktree-autrneuro');
                        if (title != "") {
                            that = document.querySelector('ktree-autrneuro');
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
                        that = document.querySelector('ktree-autrneuro');
                        if (title != "") {
                            that = document.querySelector('ktree-autrneuro');
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
                document.getElementById("ktreebouton2").innerHTML = "<a><button id=\"boutonactive\" onClick=\"document.querySelector('ktree-selector').showKtree('ktree-cmb')\">Revenir en arrière</button></a>";
                document.getElementById("menuktree").innerHTML = "<p class=\" summary\"><b class=\"romanumb\">I</b>] Autres troubles neurodéveloppementaux </p><p class=\" summary\"><b class=\"romanumb\">II</b>] Déficience intellectuelle</p><p class=\" summary\"><b class=\"romanumb\">III</b>] Troubles de la communication</p><p class=\" summary\"><b class=\"romanumb\">IV</b>] Troubles Dys</p>";
            }
 });
