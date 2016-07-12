        Polymer({
            is: "ktree-evotr",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: 'Evolution des troubles',
                                presentation: '',
                                pos: [5.5, 6],
                                label: "V",
                                enfant: "ktree-manif",
                            },
                            {
                                name: "Trajectoire de l’enfance à l’âge adulte",
                                presentation: '<h3 class=\"subktree\">L\'enfance</h3><p class=\"textktree\">Les TSA sont des troubles précoces dont les premiers signes surviennent à la fin de la première année de vie, avec toutefois un diagnostic qui ne peut être établi avec fiabilité avant l’âge de deux ans. D’autre part, des enfants de moins de deux ans avec un tableau initial évoquant fortement les TSA peuvent évoluer vers d’autres troubles du neurodéveloppement, notamment la déficience intellectuelle, les troubles du langage ou les troubles spécifiques et durables du développement des processus attentionnels et des fonctions exécutives (TDAH).</p><p class=\"textktree\">Les signes cliniques peuvent être présents avant trois ans, mais l’ensemble des troubles peut n’être présent qu’autour de quatre ou cinq ans. Le diagnostic peut néanmoins parfois être évoqué et même posé plus précocement. Pour les très jeunes enfants, avant trois ans, le dépistage de symptômes évocateurs de TSA doit conduire à la mise en place d’interventions précoces et de suivis en fonction de la situation et des bilans réalisés (orthophonie, psychomotricité…).</p><p class=\"textktree\">Une fois le diagnostic posé, il reste stable pendant toute la vie dans 80 à 96 % des cas. Mais les difficultés dans la vie quotidienne, sociale, scolaire ou professionnelle évoluent.</p><h3 class=\"subktree\">L\'adolescence</h3><p class=\"textktree\">À l’adolescence, 20 à 30 % des personnes avec TSA montrent une aggravation des troubles pendant un à deux ans, dont 90 % s’améliorent ensuite. Néanmoins, d’une façon générale, des améliorations surviennent pendant l’adolescence dans le domaine de la communication, des comportements répétitifs et des intérêts restreints.</p><h3 class=\"subktree\">L\'âge adulte</h3><p class=\"textktree\">Lors du passage à l’âge adulte, certaines personnes conservent des troubles du comportement, mais dans 50 % des cas, les troubles s’améliorent. Le domaine qui évolue le moins est celui de la réciprocité sociale. Néanmoins, 20 % des sujets avec autisme gardent des troubles comportementaux sévères.</p>',
                                pos: [3.5, 4],
                                label: "I",
                                enfant: ""
                            },
                            {
                                name: "Évolution des manifestations des TSA",
                                presentation: '<h3 class=\"subktree\">Les troubles de la communication et des interactions sociales</h3><p class=\"textktree\">La communication s’améliore pendant la trajectoire de vie entière, mais elle reste souvent déficitaire. Dans les études analysant la communication, toujours citées par la HAS, il a été observé un très bon langage chez 1,5 % des enfants avec TSA (alors que cette proportion est de 16 % chez l’adulte) et un bon langage chez 18 % des enfants avec TSA et chez 30 % des adultes. Le langage reste néanmoins largement déficitaire pour plus de la moitié des personnes avec TSA, notamment du fait des écholalies et des persévérations. Alors qu’à l’adolescence le langage verbal est un peu moins bon, surtout parasité par des questions obsessionnelles et des écholalies, le langage de l’adulte s’améliore : un tiers possède un langage fonctionnel, et il est noté une augmentation de l’utilisation de langage ; seulement 10 % des adultes avec TSA n’ont pas de langage</p><p class=\"textktree\">La communication non verbale est meilleure chez l’adolescent que chez l’adulte avec une amélioration et une augmentation du pointage et une diminution de l’utilisation du corps de l’autre pour communiquer.</p><p class=\"textktree\">Les troubles des interactions sociales sont l’élément le plus persistant au cours de la vie. Ils s’améliorent, mais moins que les troubles de la communication : 56 % des personnes n’auraient aucune relation amicale. Lorsque cette relation existe, elle serait à 45 % uniquement avec des pairs. Peu de personnes avec un diagnostic TSA se marient et peu ont des enfants.</p><h3 class=\"subktree\">Les comportements stéréotypés et intérêts restreints</h3><p class=\"textktree\">Des études montrent une amélioration modérée de ces comportements chez l’adulte par rapport à l’adolescent</p><ul><li class="textktree">10 % d’adultes n’ont plus de manifestations, 42 % ont des comportements décrits comme légers, 35 % comme moyens et 11 % comme sévères</li><li class="textktree">De l’adolescence à l’âge adulte, une réduction de ces comportements de 97 à 87 % est observée, notamment en ce qui concerne les préoccupations et les maniérismes complexes</li><li class="textktree">Disparition de l’utilisation répétitive d’objets chez 46 % des sujets à l’âge adulte</li></ul><p class=\"textktree\">Enfin, à titre d’exemple, des études ayant inclus des personnes adultes avec TSA ont montré que 20 % d’entre elles ont eu une bonne évolution, 30 % ont eu une évolution qualifiée de moyenne et 50 % une évolution décrite comme pauvre. Ces études ont également observé les faits suivants :</p><ul><li class="textktree">La majorité de cette population vit au domicile des parents ou dans des foyers. Seulement 1,5 à 10 % des personnes ont un logement autonome</li><li class="textktree"> 56 % peuvent travailler à temps partiel, cinq heures par semaine en moyenne, 1 à 10 % ont un travail à temps complet</li><li class="textktree">85 % des personnes avec TSA ont un accès aux loisirs avec des aides</li><li class="textktree">46 % ont une activité sportive au moins une fois par semaine.</li></ul>',
                                pos: [7.5, 4],
                                label: "II",
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
                                "Evolution des troubles", 'Trajectoire de l’enfance à l’âge adulte', 0
                            ],
                            [
                                "Evolution des troubles", 'Évolution des manifestations des TSA', 0
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
                        that = document.querySelector('ktree-evotr');
                        if (title != "") {
                            that = document.querySelector('ktree-evotr');
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
                        that = document.querySelector('ktree-evotr');
                        if (title != "") {
                            that = document.querySelector('ktree-evotr');
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
                document.getElementById("menuktree").innerHTML = "<p class=\" summary\"><b class=\"romanumb\">I</b>] Evolution des troubles</p><p class=\" summary\"><b class=\"romanumb\">II</b>] Trajectoire de l’enfance à l’âge adulte</p><p class=\" summary\"><b class=\"romanumb\">III</b>] Évolution des manifestations des TSA</p>";
            }
 });
