        Polymer({
            is: "ktree-manif",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: "Les principales manifestations",
                                presentation: '<p class=\"textktree\">Les troubles du spectre de l’autisme sont des troubles précoces : les signes sont habituellement réunis dans les trois premières années de la vie.</p><p class=\"textktree\">La façon dont les TSA se manifestent est multiple avec des <b>profils cliniques hétérogènes</b> résultant de la variété des symptômes, du degré d’autisme présenté, des pathologies et troubles éventuellement associés, de la présence ou non d’une déficience intellectuelle et de l’évolution propre de la personne, qui peut être liée en partie aux accompagnements proposés. La nature et l’intensité des troubles varient selon les personnes, mais aussi au cours du temps pour une même personne</p><p class=\"textktree\">Malgré l’hétérogénéité des profils, <b>deux types de manifestations définissent les TSA : les troubles de la communication et des interactions sociales, les comportements stéréotypés et intérêts restreints</b>. Il existe de plus des particularités communes aux TSA : sensorielles et cognitives. En fonction des personnes et de leur environnement, les conséquences de ces manifestations cliniques sur la réalisation de leurs activités et leur participation sociale sont variables.</p>',
                                pos: [1, 7.5],
                                label: "I",
                                enfant: "ktree-def"
                            },
                            {
                                name: "Communication et interactions sociales",
                                presentation: '',
                                pos: [1, 6],
                                label: "II",
                                enfant: "ktree-cominter",
                            },
                            {
                                name: "Comportements stéréotypés et intérêts restreints",
                                presentation: '<p class=\"textktree\">Les personnes avec TSA possèdent des centres d’intérêt restreints et souvent atypiques (ex. : les changements climatiques, les mécanismes des objets…) qui peuvent rapidement devenir envahissants pour eux-mêmes et pour leurs proches. Leurs activités ont également tendance à être répétitives, et ces personnes présentent fréquemment des actions ou des mouvements stéréotypés (ex. : des balancements du tronc ou d’autres parties du corps) qui peuvent également perturber leur apprentissage et leur intégration sociale</p><p class=\"textktree\">Elles peuvent être fascinées par des objets inhabituels (bouts de ficelle, plumes, miettes…) ou utiliser de façon inhabituelle des objets ou des jouets (faire tourner indéfiniment une roue de petite voiture…). Elles ont souvent besoin de rituels plus ou moins complexes et supportent très mal les changements dans le quotidien du fait d’un besoin d’immuabilité des situations et de l’environnement. Il peut s’agir de stéréotypies motrices (mouvements répétés, maniérisme…), liées aux objets (utilisation de manière répétée d’un objet sans prendre en considération sa fonction), vocales (production ou reproduction répétées de sons, de mots ou de phrases : écholalies), sensorielles (visuelles, auditives, tactiles)…</p><p class=\"textktree\">Tous ces comportements sont plus ou moins envahissants et peuvent persister au-delà de l’enfance ou au contraire s’atténuer. Ils peuvent également s’accentuer dans certaines situations ou réapparaître à certaines périodes de la vie</p><p class=\"textktree\">Ces comportements répétitifs sont également des indicateurs du niveau de stress, de fatigue ou d’ennui, mais aussi des préférences sensorielles de la personne.</p><p class=\"textktree\">Des études22 montrent une amélioration modérée de ces comportements chez l’adulte par rapport à l’adolescent :</p><ul><li>10 % d’adultes n’ont plus de manifestations, 42 % ont des comportements décrits comme légers, 35 % comme moyens et 11 % comme sévères</li><li>de l’adolescence à l’âge adulte, une réduction de ces comportements de 97 à 87 % est observée, notamment en ce qui concerne les préoccupations et les maniérismes complexes </li><li>disparition de l’utilisation répétitive d’objets chez 46 % des sujets à l’âge adulte</li></ul><p class=\"textktree\">Enfin, à titre d’exemple, des études23 ayant inclus des personnes adultes avec TSA ont montré que 20 % d’entre elles ont eu une bonne évolution, 30 % ont eu une évolution qualifiée de moyenne et 50 % une évolution décrite comme pauvre. Ces études ont également observé les faits suivants :</p><ul><li> la majorité de cette population vit au domicile des parents ou dans des foyers. Seulement 1,5 à 10 % des personnes ont un logement autonome </li><li> 56 % peuvent travailler à temps partiel, cinq heures par semaine en moyenne, 1 à 10 % ont un travail à temps complet</li><li> 85 % des personnes avec TSA ont un accès aux loisirs avec des aides</li><li></li>46 % ont une activité sportive au moins une fois par semaine</ul>',
                                pos: [2.5, 5],
                                label: "III",
                                enfant: "",
                            },
                            {
                                name: 'Les particularités communes aux TSA',
                                presentation: '',
                                pos: [4, 5],
                                label: "IV",
                                enfant: "ktree-parcom",
                            },
                            {
                                name: 'Evolution des troubles',
                                presentation: '',
                                pos: [5.5, 6],
                                label: "V",
                                enfant: "ktree-evotr",
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
                                "Les principales manifestations", 'Communication et interactions sociales', 0
                            ],
                            [
                                "Les principales manifestations", 'Comportements stéréotypés et intérêts restreints', 0
                            ],
                            [
                                "Les principales manifestations", 'Les particularités communes aux TSA', 0
                            ],
                            [
                                "Les principales manifestations", 'Evolution des troubles', 0
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
                        that = document.querySelector('ktree-manif');
                        if (title != "") {
                            that = document.querySelector('ktree-manif');
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
                        that = document.querySelector('ktree-manif');
                        if (title != "") {
                            that = document.querySelector('ktree-manif');
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
                document.getElementById("menuktree").innerHTML = "<p class=\" summary\"><b class=\"romanumb\">I</b>] Les principales manifestations</p><p class=\" summary\"><b class=\"romanumb\">II</b>] Communication et interactions sociales</p><p class=\" summary\"><b class=\"romanumb\">III</b>] Comportements stéréotypés et intérêts restreints</p><p class=\" summary\"><b class=\"romanumb\">IV</b>] Les particularités communes aux TSA</p><p class=\" summary\"><b class=\"romanumb\">V</b>] Evolution des troubles</p>";
            }
 });
