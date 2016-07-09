        Polymer({
            is: "ktree-syngenassoc",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: 'Syndromes génétiques associées aux TSA',
                                presentation: '<p>Syndromes génétiques qui incluent dans leur phénotype la possibilité de TSA</p>',
                                pos: [3, 5],
                                label: "I",
                                enfant: "ktree-anogchro",
                            },
                            {
                                name: 'Syndrome de Rett',
                                presentation: '<small class="subtitle" style="color: red">HAS,Paragraphe 3.4, p.40</small><p class="textktree">Le syndrome de Rett ne touche quasiment que les filles. Sa prévalence est de l’ordre de 1/10 000 à 1/15000. Les caractéristiques très particulières du phénotype ont conduit à une identification spécifique du syndrome dans les TED par l’American Psychiatric Association, DSM-IV (paragraphe 2.2.3 et annexe 6). Des mutations de gène MECP2 sont responsables du syndrome dans près de 90 % des filles ayant un tableau clinique typique.</p><p class="textktree">La majorité des filles atteintes sont polyhandicapées, sans marche ni langage, mais certains enfants peuvent présenter des formes moins sévères ou moins typiques. </p>',
                                pos: [1, 4],
                                label: "II",
                                enfant: "",
                            },
                            {
                                name: "Le syndrome de l’X-fragile",
                                presentation: '<small class="subtitle" style="color: red">HAS,Paragraphe 3.4, p.40</small><p class="textktree">Le syndrome de l’X-fragile touche garçons et filles. La prévalence de la maladie dans la population générale est estimée à 1/5 000 chez les garçons et 1/8 000 chez les filles.</p><p class="textktree">Le syndrome de l’X-fragile est lié à la mutation du gène FMR1 situé dans la région Xq27.3 sur le chromosome X. Les mutations sont dues à une expansion d’un triplet nucléotidique CGG.</p><p class="textktree">Le diagnostic est suspecté à l’examen clinique et confirmé par l’analyse moléculaire. L’aspect du visage est particulier et évocateur du diagnostic chez les garçons présentant un retard mental, cet aspect est cependant évolutif avec l\'âge. La dysmorphie faciale est associée à une hyperlaxité ligamentaire et, chez les garçons, à une macroorchie d’apparition secondaire. La plupart des garçons atteints de l\'affection ont un QI inférieur à 50, alors que les filles ont un retard mental beaucoup plus modéré, leur QI allant de 70 à 85.</p><p class="textktree">Des tableaux cliniques beaucoup moins sévères peuvent se voir lorsque l’anomalie génétique n’est pas homogène, mais présente à l’état de mosaïque somatique (double population de cellules, certaines normales et d’autres porteuses de l’anomalie génique).</p><p class="textktree">Sur le plan comportemental, au premier contact, le garçon avec un X-fragile (non-autiste) semble particulièrement embarrassé dans les interactions sociales directes et envahi par ses émotions, avec un regard fuyant caractéristique, pris à tort pour des signes autistiques, mais dans un environnement sécurisant, la relation duelle est habituellement de grande qualité avec un réel intérêt social et affectif.</p><p class="textktree">Malgré tout, on peut retenir raisonnablement que 10 à 25 % des enfants avec un X-fragile ont un autisme. Inversement, la prévalence de l’X-fragile dans l’autisme est située entre 0 et 8,1 % (analyse de 8 études) (16).</p>',
                                pos: [3, 3],
                                label: "III",
                                enfant: "",
                            },
                            {
                                name: "Sclérose tubéreuse de Bourneville",
                                presentation: '<small class="subtitle" style="color: red">HAS,Paragraphe 3.4, p.41</small><p class="textktree">La prévalence de la STB des enfants et adolescents de moins de 20 ans était de 3,5/10 000. La prévalence de l’autisme dans la STB était de 16 % (7/44). (108)</p><p class="textktree">La prévalence de la STB chez les enfants atteints d’autisme ou de TED était de 0,9 % (7/753) (108). La sclérose tubéreuse de Bourneville est une maladie autosomique dominante dont la prévalence est estimée à 1/10 000. Dans les deux tiers des cas, la maladie est accidentelle. Le reste des cas est hérité d’un des deux parents. L\'expressivité de la maladie est variable et sa pénétrance complète.</p><p class="textktree">Deux gènes, suppresseurs de tumeurs, TSC1 (région chromosomique 9q34) et TSC2 (région chromosomique 16p13), codant respectivement pour l’hamartine et la tubérine, sont à l’origine de la sclérose tubéreuse de Bourneville.</p><p class="textktree">La maladie est caractérisée par une atteinte multiviscérale. On note une prédominance des lésions cutanées et cérébrales. L’épilepsie (entre 70 % et 93%) et le retard mental (entre 50 % et 80 %) sont les signes neurologiques les plus fréquents.</p><p class="textktree">Les atteintes cutanées sont rarement le premier motif de consultation (taches hypomélaniques ou achromiques, angiofibromes, tumeurs de Koënen des ongles). Les taches achromiques peuvent être présentes dès la naissance ou apparaître la première année de vie. Parfois suspectées à l’examen clinique, elles doivent être recherchées systématiquement par un examen cutané à la lumière de Wood.</p><p class="textktree">Des critères de diagnostic ont été établis en 1998. Le diagnostic de certitude repose sur l’association de deux critères majeurs ou d\'un critère majeur et de deux critères mineurs. L’étude moléculaire des deux gènes en cause est réalisable si nécessaire.</p><p class="textktree">La prévalence de la STB dans l’autisme est comprise entre 0 % et 3,8 % (10 études) (16). L’autisme survient principalement chez les enfants ayant développé un syndrome de West (spasmes infantiles) ou une épilepsie précoce et active.</p>',
                                pos: [5, 4],
                                label: "IV",
                                enfant: "",
                            },
                            {
                                name: "Neurofibromatose type 1",
                                presentation: '<small class="subtitle" style="color: red">HAS,Paragraphe 3.4, p.42</small><p class="textktree">La NF1 est une autre neuroectodermose autosomique dominante, causée par une mutation du gène NF1, situé sur le chromosome 17. Sa prévalence est estimée entre 1/3 000 et 1/4 000. La maladie est caractérisée par des anomalies dermatologiques, des tumeurs du système nerveux central et des difficultés d’apprentissage.</p><p class="textktree">Si le diagnostic est basé sur des critères cliniques, il peut être confirmé par une étude moléculaire du gène NF1.</p><p class="textktree">Les seules données identifiées sont celles de la revue de Fombonne de 2003 dans laquelle la prévalence médiane de la NF1 dans l’autisme était de 0 (extrêmes : 0 - 1,4 %) (6 études). Ce taux n’excède pas le taux attendu de la NF1 dans la population des enfants avec un autisme dans l’hypothèse d’une indépendance des deux pathologies (16).</p>',
                                pos: [7, 5],
                                label: "V",
                                enfant: "",
                            },
                            {
                                name: "Syndrome d’angelman",
                                presentation: '<small class="subtitle" style="color: red">HAS,Paragraphe 3.4, p.42</small><p class="textktree">Le syndrome est causé par la perte du gène UBE3A transmis par la mère, situé dans la région des syndromes de Prader-Willi / Angelman du chromosome 15 (15q11.2q13). Les étiologies principales du syndrome d’Angelman sont une délétion maternelle de la région 15q11.2q13, une disomie uniparentale paternelle du chromosome 15 (deux chromosomes 15 hérités du père) ou une mutation dans le gène UBE3A. L’étude cytogénétique avec sonde fluorescente spécifique de la région 15q11q13 (FISH) permet de confirmer une délétion mais passe à côté des disomies uniparentales qui ne sont détectées qu’en biologie moléculaire.</p><p class="textktree">Le syndrome d’Angelman est caractérisé par un retard de développement, un retard mental sévère, une ataxie (avec marche souvent après trois ans), et un comportement joyeux avec des rires inappropriés. Une épilepsie (statuts d’absence, myoclonies, crises généralisées tonicocloniques) est un surhandicap fréquent difficile à traiter. Les troubles du sommeil très pénibles pour la famille sont quasi constants.</p><p class="textktree">Quarante pour cent des personnes avec un Angelman rempliraient également les critères diagnostiques d\'autisme (109)</p>',
                                pos: [5, 6],
                                label: "VI",
                                enfant: "",
                            },
                            {
                                name: "Syndrome de Prader-Willi",
                                presentation: '<small class="subtitle" style="color: red">HAS,Paragraphe 3.4, p.42</small><p class="textktree">Le syndrome de Prader-Willi se caractérise par une hypotonie précoce, des difficultés d’alimentation initiales suivies d’une hyperphagie et d’une prise de poids excessive lorsque la prise alimentaire n’est pas contrôlée. L’évolution est marquée par l’existence d’un retard du langage, d’un retard mental le plus souvent léger, de troubles du comportement, d’un hypogonadisme et d’une petite taille.</p><p class="textktree">Les étiologies principales du syndrome de Prader-Willi sont une délétion de la région « Prader-Willi / Angelman » du chromosome 15 (15q11.2q13) transmise par le père, une disomie uniparentale maternelle (deux chromosomes 15 hérités de la mère) et des défauts d’empreinte parentale. Il existe un diagnostic cytogénétique ou moléculaire pour confirmer le diagnostic de syndrome de Prader-Willi.</p><p class="textktree">Le risque de développer un TSA est plus fréquent lorsque l’enfant présente une disomie uniparentale plutôt qu’une délétion de la région 15q11.2q13.</p><p class="textktree">La prévalence a été estimée à 1/29 500 naissances (110).</br>La fréquence des TSA dans les études réalisées était de 0 % à 36,5 %. </p>',
                                pos: [3, 7],
                                label: "VII",
                                enfant: "",
                            },
                            {
                                name: "Autres syndromes",
                                presentation: '<small class="subtitle" style="color: red">HAS,Paragraphe 3.4, p.42</small><p class="textktree">De nombreux autres syndromes peuvent être associés à un TSA :Syndrome alpha-thalassémie/retard mental lié à l’X (ATRX), syndrome de Sotos, myopathie de Duchenne (112,113), syndrome de Cornelia de Lange, hypomélanose d’Ito, syndrome de Joubert, syndrome de Moebius, syndrome de Cohen, dystrophie myotonique de Steinert, syndrome CHARGE, syndrome de Lujan-Fryns, syndrome de Smith-Magenis, syndrome de Timothy. Ces syndromes sont en général repérés lors de la consultation de pédiatrie ou de génétique.</p>',
                                pos: [1, 6],
                                label: "VIII",
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
                                "Syndromes génétiques associées aux TSA", 'Syndrome de Rett', 0
                            ],
                            [
                                "Syndromes génétiques associées aux TSA", 'Le syndrome de l’X-fragile', 0
                            ],
                            [
                                "Syndromes génétiques associées aux TSA", 'Sclérose tubéreuse de Bourneville', 0
                            ],
                            [
                                "Syndromes génétiques associées aux TSA", 'Neurofibromatose type 1', 0
                            ],
                            [
                                "Syndromes génétiques associées aux TSA", 'Syndrome d’angelman', 0
                            ],
                            [
                                "Syndromes génétiques associées aux TSA", 'Syndrome de Prader-Willi', 0
                            ],
                            [
                                "Syndromes génétiques associées aux TSA", 'Autres syndromes', 0
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
                        that = document.querySelector('ktree-syngenassoc');
                        if (title != "") {
                            that = document.querySelector('ktree-syngenassoc');
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
                        that = document.querySelector('ktree-syngenassoc');
                        if (title != "") {
                            that = document.querySelector('ktree-syngenassoc');
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
                document.getElementById("menuktree").innerHTML = "<p class=\" summary\"><b style=\"color: white\">I</b>] Syndromes génétiques associées aux TSA</p><p class=\" summary\"><b style=\"color: white\">II</b>] Syndrome de Rett</p><p class=\" summary\"><b style=\"color: white\">III</b>] Le syndrome de l’X-fragile</p><p class=\" summary\"><b style=\"color: white\">IV</b>] Sclérose tubéreuse de Bourneville</p><p class=\" summary\"><b style=\"color: white\">IV</b>] Neurofibromatose type 1</p><p class=\" summary\"><b style=\"color: white\">V</b>] Syndrome d’angelman</p><p class=\" summary\"><b style=\"color: white\">VI</b>] Syndrome de Prader-Willi</p><p class=\" summary\"><b style=\"color: white\">VII</b>] Autres syndromes</p>";
            }
 });
