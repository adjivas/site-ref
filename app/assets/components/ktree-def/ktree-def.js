        Polymer({
            is: "ktree-def",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: "Définir l'autisme",
                                presentation: "<p class=\"textktree\">L’« autisme » renvoie à une catégorie de <b class=\"textktree\">troubles neurodéveloppementaux</b> recouvrant des réalités distinctes et amenant à rechercher des solutions différentes, variées et adaptées aux spécificités propres de chaque situation</p><p class=\"textktree\">Cette partie est consacrée à la description de ces troubles, regroupés sous le nom de « troubles du spectre de l’autisme » (TSA). Cette dénomination tend aujourd’hui à se substituer à celle de troubles envahissants du développement (TED), utilisée jusqu’à présent en référence à la <b class=\"textktree\">Classification internationale des maladies – dixième version (CIM-10)</b>, éditée par <b class=\"textktree\">l’Organisation mondiale de la santé (OMS)</b>. Elle a été retenue par les groupes de conception et de relecture de <a href=\"http://www.cnsa.fr/documentation/cnsa-dta-2016_web.pdf\" target=\"_blank\">ce guide</a>, pour une harmonisation avec la dernière classification internationale de référence, le <b class=\"textktree\">Manuel diagnostique et statistique des troubles mentaux – cinquième édition (DSM-5)</b>, adoptée en 2013 en remplacement du <b class=\"textktree\">DSM-IV</b> et traduite en français en 2015. Ces deux appellations, TED et TSA, décrivent la même entité clinique.</p>",
                                enfant: "ktree-selector",
                                label: "I",
                                pos: [2, 9.4],
                            },
                            {
                                name: "Les principales manifestations",
                                presentation: '<p class=\"textktree\">Les troubles du spectre de l’autisme sont des troubles précoces : les signes sont habituellement réunis dans les trois premières années de la vie.</p><p class=\"textktree\">La façon dont les TSA se manifestent est multiple avec des <b>profils cliniques hétérogènes</b> résultant de la variété des symptômes, du degré d’autisme présenté, des pathologies et troubles éventuellement associés, de la présence ou non d’une déficience intellectuelle et de l’évolution propre de la personne, qui peut être liée en partie aux accompagnements proposés. La nature et l’intensité des troubles varient selon les personnes, mais aussi au cours du temps pour une même personne</p><p class=\"textktree\">Malgré l’hétérogénéité des profils, <b>deux types de manifestations définissent les TSA : les troubles de la communication et des interactions sociales, les comportements stéréotypés et intérêts restreints</b>. Il existe de plus des particularités communes aux TSA : sensorielles et cognitives. En fonction des personnes et de leur environnement, les conséquences de ces manifestations cliniques sur la réalisation de leurs activités et leur participation sociale sont variables.</p>',
                                pos: [1, 7.5],
                                label: "II",
                                enfant: "ktree-manif"
                            },
                            {
                                name: "Comorbidités et troubles associés",
                                presentation: '<p class=\"textktree\">Les TSA sont souvent associés à d’autres troubles ou pathologies :</p><ul><li class=\"textktree\">D’autres troubles neurodéveloppementaux (comme évoqué dans le DSM-5) : déficience intellectuelle, troubles de la communication, troubles Dys (dont les troubles spécifiques et durables du développement des processus attentionnels et des fonctions exécutives – TDAH)</li><li class=\"textktree\">Des troubles neurologiques (épilepsie)</li><li class=\"textktree\">Des anomalies génétiques ou chromosomiques (X fragile, sclérose tubéreuse de Bourneville, neurofibromatose, syndrome d’Angelman, syndrome de Prader-Willi, trisomie 21, délétion 22q11, délétion terminale 22q13…)</li><li class=\"textktree\">Des troubles du sommeil (de tout type)</li><li class=\"textktree\">Des troubles psychiatriques (hyperactivité, particulièrement chez l’enfant, troubles de l’humeur, troubles anxieux, dépression chez l’adolescent et l’adulte, syndrome Gilles de la Tourette, troubles psychotiques…)</li><li class=\"textktree\">Des troubles sensoriels (déficience visuelle ou auditive)</li><li class=\"textktree\">Des troubles du comportement alimentaire (pouvant d’ailleurs être liés à des troubles sensoriels).</li></ul><p class=\"textktree\">Cette liste est susceptible d’évoluer dans le temps, selon les résultats de la recherche par exemple</p>',
                                pos: [4, 7.5],
                                label: "III",
                                enfant: "ktree-cmtra",
                            },
                            {
                                name: "Etiologie",
                                presentation: '',
                                pos: [7, 7.5],
                                label: "IV",
                                enfant: "ktree-etio",
                            },
                            {
                                name: 'Classifications',
                                presentation: '<p class=\"textktree\">L’« autisme » renvoie à une catégorie de <b class=\"textktree\">troubles neurodéveloppementaux</b> recouvrant des réalités distinctes et amenant à rechercher des solutions différentes, variées et adaptées aux spécificités propres de chaque situation</p><p class=\"textktree\">Cette partie est consacrée à la description de ces troubles, regroupés sous le nom de « troubles du spectre de l’autisme » (TSA). Cette dénomination tend aujourd’hui à se substituer à celle de troubles envahissants du développement (TED), utilisée jusqu’à présent en référence à la <b class=\"textktree\">Classification internationale des maladies – dixième version (CIM-10)</b>, éditée par <b class=\"textktree\">l’Organisation mondiale de la santé (OMS)</b>. Elle a été retenue par les groupes de conception et de relecture de <a href=\"http://www.cnsa.fr/documentation/cnsa-dta-2016_web.pdf\" target=\"_blank\">ce guide</a>, pour une harmonisation avec la dernière classification internationale de référence, le <b class=\"textktree\">Manuel diagnostique et statistique des troubles mentaux – cinquième édition (DSM-5)</b>, adoptée en 2013 en remplacement du <b class=\"textktree\">DSM-IV</b> et traduite en français en 2015. Ces deux appellations, TED et TSA, décrivent la même entité clinique.</p>',
                                pos: [10, 7.5],
                                label: "V",
                                enfant: "ktree-clas",
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
                                "Définir l'autisme", 'Les principales manifestations', 0
                            ],
                            [
                                "Définir l'autisme", 'Comorbidités et troubles associés', 0
                            ],
                            [
                                "Définir l'autisme", 'Etiologie', 0
                            ],
                            [
                                "Définir l'autisme", 'Classifications', 0
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
                        that = document.querySelector('ktree-def');
                        if (title != "") {
                            that = document.querySelector('ktree-def');
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
                        that = document.querySelector('ktree-def');
                        if (title != "") {
                            that = document.querySelector('ktree-def');
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
                document.getElementById("ktreebouton2").innerHTML = "<a><button id=\"boutonactive\" onClick=\"document.querySelector('ktree-selector').showKtree('ktree-selector')\">Revenir en arrière</button></a>";
                document.getElementById("menuktree").innerHTML = "<p class=\" summary\"><b class=\"romanumb\">I</b> Définir l'autisme</p><p class=\" summary\"><b class=\"romanumb\">II</b> Les principales manifestations</p><p class=\" summary\"><b class=\"romanumb\">III</b> Comorbidités et troubles associés</p><p class=\" summary\"><b class=\"romanumb\">IV</b> Etiologie</p><p class=\" summary\"><b class=\"romanumb\">V</b> Classifications</p>";
                
            }
 });
