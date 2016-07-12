        Polymer({
            is: "ktree-creat",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: 'Déficits dans le métabolisme de la créatine',
                                presentation: '<small class="subtitle" style="color: red">(HAS,Paragraphe 3.4.4, p.45)</small>',
                                pos: [5, 2],
                                label: "I",
                                enfant: "ktree-metabol",
                            },
                            {
                                name: "Les déficits en synthèse de la créatine",
                                presentation: '<p class="textktree">Les déficits en Guanidinoacétate méthyltransférase (GAM) et en arginine glycine amidinotransférase (AGAT) sont responsables de retard de développement psychomoteur, de retard mental, d’épilepsie, de troubles d’acquisition du langage et d’autisme. Une supplémentation orale en <a>créatine</a> améliore l’évolution des enfants. Ces maladies métaboliques ont une hérédité autosomique récessive.</p>',
                                pos: [3, 1],
                                label: "II",
                                enfant: "",
                            },
                            {
                                name: "Le déficit en transporteur de la créatinine",
                                presentation: '<p class="textktree">Le déficit en transporteur de la <a>créatine</a> donne un phénotype neurologique peu spécifique. Le retard est habituellement sévère, l’épilepsie et les signes autistiques sont inconstants. Des signes plus généraux, inconstants, incluent un retard de croissance <a>staturopondéral</a>, une <a>microcéphalie</a>, des troubles du transit intestinal (constipation, vomissements...). Contrairement au déficit de synthèse de la <a>créatine</a>, le déficit en transporteur n’est pas amélioré par une supplémentation orale en créatine et se transmet sur le mode d’une hérédité récessive liée à l’X.</p><p class="textktree">Les déficits dans le métabolisme de la créatine sont repérables lors de la réalisation d’une IRM cérébrale avec séquences spectroscopiques qui montrent une absence du pic de créatine. En cas de suspicion de maladie métabolique, la réalisation de séquences spectroscopiques, lors de l\'examen IRM, est d\'un intérêt majeur.</p>',
                                pos: [7, 1],
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
                                "Déficits dans le métabolisme de la créatine", 'Les déficits en synthèse de la créatine', 0
                            ],
                            [
                                "Déficits dans le métabolisme de la créatine", 'Le déficit en transporteur de la créatinine', 0
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
                        that = document.querySelector('ktree-creat');
                        if (title != "") {
                            that = document.querySelector('ktree-creat');
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
                        that = document.querySelector('ktree-creat');
                        if (title != "") {
                            that = document.querySelector('ktree-creat');
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
                document.getElementById("ktreebouton2").innerHTML = "<a><button id=\"boutonactive\" onClick=\"document.querySelector('ktree-selector').showKtree('ktree-metabol')\">Revenir en arrière</button></a>";
                document.getElementById("menuktree").innerHTML = "<p class=\" summary\"><b class=\"romanumb\">I</b>] Comorbidités</p><p class=\" summary\"><b class=\"romanumb\">II</b>] Autres troubles neurodeveloppementaux (DSM-5)</p><p class=\" summary\"><b class=\"romanumb\">III</b>] Troubles neuropsychiatriques</p><p class=\" summary\"><b class=\"romanumb\">IV</b>] Anomalies génétiques et chrosomiques</p>";
            }
 });
