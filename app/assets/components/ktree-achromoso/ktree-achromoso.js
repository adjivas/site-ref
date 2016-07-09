        Polymer({
            is: "ktree-achromoso",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: "Anomalies chromosomiques mises en évidence chez des enfants avec TSA",
                                presentation: '',
                                pos: [5, 4],
                                label: "I",
                                enfant: "ktree-anogchro",
                            },
                            {
                                name: 'Trisomie 21',
                                presentation: '<p>Syndromes génétiques qui incluent dans leur phénotype la possibilité de TSA</p>',
                                pos: [10, 10],
                                label: "II",
                                enfant: "",
                            },
                            {
                                name: 'Délétion 22q11 (Syndrome de Di George)',
                                presentation: '',
                                pos: [5, 6],
                                label: "III",
                                enfant: "",
                            },
                            {
                                name: "Syndrome de Williams-Beuren",
                                presentation: '<small class="subtitle" style="color: red">(HAS,Paragraphe 3.4.4, p.46)</small><p class="textktree">D\’autres anomalies métaboliques (AR) peuvent comporter un autisme: déficit en adénylosuccinase, déficit en biotinidase, déficit en succinyl semialdéhyde déshydrogénase. </p>',
                                pos: [7, 5],
                                label: "IV",
                                enfant: "",
                            },
                            {
                                name: "Syndrome 47 XXY",
                                presentation: '<small class="subtitle" style="color: red">(HAS,Paragraphe 3.4.4, p.46)</small><p class="textktree">D\’autres anomalies métaboliques (AR) peuvent comporter un autisme: déficit en adénylosuccinase, déficit en biotinidase, déficit en succinyl semialdéhyde déshydrogénase. </p>',
                                pos: [7, 5],
                                label: "V",
                                enfant: "",
                            },
                            {
                                name: "Microdélétions ou microduplications récurrentes récemment identifiées",
                                presentation: '<small class="subtitle" style="color: red">(HAS,Paragraphe 3.4.4, p.46)</small><p class="textktree">D’autres anomalies métaboliques (AR) peuvent comporter un autisme: déficit en adénylosuccinase, déficit en biotinidase, déficit en succinyl semialdéhyde déshydrogénase. </p>',
                                pos: [7, 5],
                                label: "VI",
                                enfant: "",
                            },
                            {
                                name: "Anomalies géniques mises en évidence chez des enfants avec TSA",
                                presentation: '<small class="subtitle" style="color: red">(HAS,Paragraphe 3.4.4, p.46)</small><p class="textktree">D’autres anomalies métaboliques (AR) peuvent comporter un autisme: déficit en adénylosuccinase, déficit en biotinidase, déficit en succinyl semialdéhyde déshydrogénase. </p>',
                                pos: [7, 5],
                                label: "VII",
                                enfant: "",
                            },
                            {
                                name: "Neuroligines 3 et 4 (Chromosome X)",
                                presentation: '<small class="subtitle" style="color: red">(HAS,Paragraphe 3.4.4, p.46)</small><p class="textktree">D’autres anomalies métaboliques (AR) peuvent comporter un autisme: déficit en adénylosuccinase, déficit en biotinidase, déficit en succinyl semialdéhyde déshydrogénase. </p>',
                                pos: [7, 5],
                                label: "VIII",
                                enfant: "",
                            },
                            {
                                name: "Shank 3 (22q13.3)",
                                presentation: '<small class="subtitle" style="color: red">(HAS,Paragraphe 3.4.4, p.46)</small><p class="textktree">D’autres anomalies métaboliques (AR) peuvent comporter un autisme: déficit en adénylosuccinase, déficit en biotinidase, déficit en succinyl semialdéhyde déshydrogénase. </p>',
                                pos: [7, 5],
                                label: "IX",
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
                                "Anomalies chromosomiques mises en évidence chez des enfants avec TSA", 'Trisomie 21', 0
                            ],
                            [
                                "Anomalies chromosomiques mises en évidence chez des enfants avec TSA", 'Délétion 22q11 (Syndrome de Di George)', 0
                            ],
                            [
                                "Anomalies chromosomiques mises en évidence chez des enfants avec TSA", 'Syndrome de Williams-Beuren', 0
                            ],
                            [
                                "Anomalies chromosomiques mises en évidence chez des enfants avec TSA", 'Syndrome 47 XXY', 0
                            ],
                            [
                                "Anomalies chromosomiques mises en évidence chez des enfants avec TSA", 'Microdélétions ou microduplications récurrentes récemment identifées', 0
                            ],
                            [
                                "Anomalies chromosomiques mises en évidence chez des enfants avec TSA", 'Anomalies géniques mises en évidence chez des enfants avec TSA', 0
                            ],
                            [
                                "Anomalies chromosomiques mises en évidence chez des enfants avec TSA", 'Neuroligines 3 et 4 (Chromosome X)', 0
                            ],
                            [
                                "Anomalies chromosomiques mises en évidence chez des enfants avec TSA", 'Shank 3 (22q13.3)', 0
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
                        that = document.querySelector('ktree-achromoso');
                        if (title != "") {
                            that = document.querySelector('ktree-achromoso');
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
                        that = document.querySelector('ktree-achromoso');
                        if (title != "") {
                            that = document.querySelector('ktree-achromoso');
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
                document.getElementById("menuktree").innerHTML = "<p class=\" summary\"><b style=\"color: white\">I</b>] Anomalies génétiques et chrosomiques</p><p class=\" summary\"><b style=\"color: white\">II</b>] Syndromes génétiques associées aux TSA (DSM-5)</p><p class=\" summary\"><b style=\"color: white\">III</b>] Anomalies chromosomiques mises en évidence chez des enfants avec TSA</p><p class=\" summary\"><b style=\"color: white\">IV</b>]Autres maladies Métaboliquess</p>";
            }
 });
