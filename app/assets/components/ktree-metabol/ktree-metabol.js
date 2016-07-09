        Polymer({
            is: "ktree-metabol",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: "Maladies Métaboliques",
                                presentation: '<small class="subtitle" style="color: red">(HAS,Paragraphe 3.4.4, p.44)</small><p class="textktree">S’il est clair que la majorité des cas d’autisme n’ont pas d’origine métabolique, plusieurs maladies neurométaboliques peuvent comporter un phénotype autistique. </br>La majorité des maladies métaboliques sont d’origine génétique avec une hérédité le plus souvent autosomique récessive (AR). Ce type d\'hérédité, le risque de récidive après un premier enfant atteint et parfois les possibilités thérapeutiques, rendent important la mise en évidence des étiologies métaboliques.</p>',
                                pos: [7, 5],
                                label: "I",
                                enfant: "ktree-anogchro",
                            },
                            {
                                name: "Phénylcétonurie",
                                presentation: '<small class="subtitle" style="color: red">(HAS,Paragraphe 3.4.4, p.45)</small><p class="textktree">La phénylcétonurie (AR) par l\'accumulation de phénylalanine dans le cerveau est cause de retard mental, de convulsions, d\’anomalies cérébrales et de TSA. En France, le dépistage néonatal depuis plus de 30 ans de cette maladie, curable par un régime alimentaire, a fait disparaître la pathologie.</p><p class="textktree">D’après Fombonne, l’association entre autisme et phénylcétonurie a été supportée par les études réalisées avant la mise en place des mesures de prévention systématique (16).</p><p class="textktree">Ce diagnostic doit cependant être évoqué pour les enfants migrants nés hors de France dans un pays ne réalisant pas le dépistage néonatal.</p>',
                                pos: [4, 5],
                                label: "II",
                                enfant: "",
                            },
                            {
                                name: 'Déficits dans le métabolisme de la créatine',
                                presentation: '<small class="subtitle" style="color: red">(HAS,Paragraphe 3.4.4, p.45)</small>',
                                pos: [5, 4],
                                label: "III",
                                enfant: "ktree-creat",
                            },
                            {
                                name: 'Déficits dans le métabolisme cérébral des folates',
                                presentation: '<small class="subtitle" style="color: red">(HAS,Paragraphe 3.4.4, p.45)</small><p class="textktree">Les déficits dans le métabolisme cérébral des folates (AR) présentent au premier plan une symptomatologie neurologique. Le phénotype associe un retard de développement psychomoteur avec décélération de la croissance cérébrale, un retard mental avec régressions, une ataxie cérébelleuse, des dyskinésies, une épilepsie. Les TSA semblent particulièrement fréquents.</p>',
                                pos: [6.25, 3.25],
                                label: "IV",
                                enfant: "",
                            },
                            {
                                name: 'Syndrome de Smith-Lemli Opitz (SLO)',
                                presentation: '<small class="subtitle" style="color: red">(HAS,Paragraphe 3.4.4, p.45)</small><p class="textktree">Ce syndrome autosomique récessif résulte d’un défaut de synthèse du cholestérol. La maladie est liée à des mutations du gène DHCR7 codant pour la 7-déhydrocholestérol réductase. Sa prévalence est estimée entre 1/10 000 et 1/30 000 naissances vivantes.</p><p class="textktree">Le diagnostic de la maladie est évoqué à l’examen clinique. Les patients ayant un SLO présentent un retard mental, une microcéphalie, un retard de croissance, une dysmorphie particulière, une syndactylie des 2e et 3e orteils, des anomalies des organes génitaux chez les garçons. Le retard mental est modéré à sévère, des malformations multiples (organes génitaux, reins, cœur, cerveau) sont souvent présentes. Une étude récente a montré que 53 % des enfants remplissent les critères diagnostiques de l’autisme (129). </p>',
                                pos: [7.75, 3.25],
                                label: "V",
                                enfant: "",
                            },
                            {
                                name: "Autres maladies Métaboliques",
                                presentation: '<small class="subtitle" style="color: red">(HAS,Paragraphe 3.4.4, p.46)</small><p class="textktree">D’autres anomalies métaboliques (AR) peuvent comporter un autisme: déficit en adénylosuccinase, déficit en biotinidase, déficit en succinyl semialdéhyde déshydrogénase. </p>',
                                pos: [9, 4],
                                label: "VI",
                                enfant: "",
                            },
                            {
                                name: "Pathologies mitochondriales",
                                presentation: '<small class="subtitle" style="color: red">(HAS,Paragraphe 3.4.4, p.46)</small><p class="textktree">Plusieurs publications ont fait état de l’existence de pathologies mitochondriales à l’origine d’autisme infantile. Cependant, ces publications ne rapportent en général que des cas isolés. Des études ont cependant mis en évidence de manière plus large des perturbations des métabolismes énergétiques mitochondriaux chez les enfants avec autisme sans qu’un déficit particulier soit impliqué.</p>',
                                pos: [10, 5],
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
                                "Maladies Métaboliques", 'Phénylcétonurie', 0
                            ],
                            [
                                "Maladies Métaboliques", 'Déficits dans le métabolisme de la créatine', 0
                            ],
                            [
                                "Maladies Métaboliques", 'Déficits dans le métabolisme cérébral des folates', 0
                            ],
                            [
                                "Maladies Métaboliques", 'Syndrome de Smith-Lemli Opitz (SLO)', 0
                            ],
                            [
                                "Maladies Métaboliques", 'Autres maladies Métaboliques', 0
                            ],
                            [
                                "Maladies Métaboliques", 'Pathologies mitochondriales', 0
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
                        that = document.querySelector('ktree-metabol');
                        if (title != "") {
                            that = document.querySelector('ktree-metabol');
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
                        that = document.querySelector('ktree-metabol');
                        if (title != "") {
                            that = document.querySelector('ktree-metabol');
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
                    stroke: 'white',
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
                document.getElementById("menuktree").innerHTML = "<p class=\" summary\"><b style=\"color: white\">I</b>] Comorbidités</p><p class=\" summary\"><b style=\"color: white\">II</b>] Autres troubles neurodeveloppementaux (DSM-5)</p><p class=\" summary\"><b style=\"color: white\">III</b>] Troubles neuropsychiatriques</p><p class=\" summary\"><b style=\"color: white\">IV</b>] Anomalies génétiques et chrosomiques</p><p class=\" summary\"><b style=\"color: white\">V</b>] Autres maladies Métaboliques</p><p class=\" summary\"><b style=\"color: white\">VI</b>] Pathologies mitochondriales</p>";
            }
 });
