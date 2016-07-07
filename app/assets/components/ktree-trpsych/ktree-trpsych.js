        Polymer({
            is: "ktree-trpsych",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: 'Troubles psychiatriques',
                                presentation: '<p class="textktree">Les troubles psychiatriques sont fréquents et souvent multiples chez les personnes ayant un TSA.</p><h2>Prévalence<small class="subtitle">(HAS,Paragraphe 3.3.4, p.34)</small></h2><p class="textktree">Dans une revue non systématique des études de suivi longitudinal de personnes avec autisme de haut niveau ou avec syndrome d’Asperger (6 études, 123 patients), la fréquence des troubles psychiatriques à l’âge adulte était de 11 % à 67 % (54). Dans une série récente d’adultes avec TSA, la fréquence des troubles psychiatriques au moment de l’évaluation ou dans les 12 mois précédents était de 75 % (55) (tableau 6 et annexe 9 – tableau 1). Ces données de fréquence ne peuvent pas être considérées comme une estimation de la prévalence des troubles psychiatriques compte tenu des problèmes d’échantillonnage et des biais de sélection des cas inhérents à ce type d’études ainsi que de l’éventail des critères diagnostiques des troubles psychiatriques utilisés (54).</p><p class="textktree">Le trouble psychiatrique serait unique dans 32 % des cas et serait double ou multiple dans 27 % des cas chez des adultes avec autisme de haut niveau. Si un retard mental est associé à l’autisme, le trouble psychiatrique serait unique dans 37 % des cas et serait double dans 10 % des cas (56,57).</p>',
                                pos: [5, 3],
                                label: "I",
                                enfant: "ktree-trneuropsy",
                            },
                            {
                                name: 'Troubles de l’humeur',
                                presentation: '<p>Le job coaching, ou supported employment, est un accompagnement personnalisé et structuré auprès d’une personne pour son accès et son maintien dans l’emploi. L’accent est mis sur l’autonomisation et la responsabilisation de la personne. L’accompagnement est centré sur la mise en valeur et l’expression des ressources personnelles du salarié en équilibre avec les besoins de l’entreprise. Ce service spécifique peut être proposé par des associations ou des cabinets spécialisés.</p><p>Si, au début de son intervention sur le lieu de travail, le job coach accompagne de façon intensive la personne avec TSA, son accompagnement devient ensuite plus ponctuel, et il se retire progressivement pour viser l’autonomie complète de la personne accompagnée. Des interventions exceptionnelles peuvent néanmoins être proposées en cas de difficultés à gérer des changements, rencontrées par la personne avec TSA ou par ses collègues</p><p>Sur le plan pratique, le job coaching implique non seulement un travail préalable avec l’adulte en situation de handicap pour identifier ses compétences et ses diffi cultés (ateliers autour des compétences sociales à mettre en œuvre en entreprise par exemple), mais aussi avec l’entreprise. Le job coach réalise ainsi une analyse de poste et propose des aménagements à l’entreprise (structuration du temps et de l’espace, décomposition des tâches et des consignes en énoncés élémentaires, transformation des consignes verbales en consignes visuelles, recours à des casques audio pour permettre à la personne de mieux se concentrer et diminuer le bruit environnant…). Outre l’accompagnement proposé à la personne avec TSA, le job coach accompagne ainsi l’employeur et ses salariés dans la compréhension du fonctionnement de la personne avec TSA et dans la mise en place d’un environnement facilitateur pour celle-ci. L’ajustement est mutuel et facilité par ce tiers extérieur à l’entreprise.</p><p>Il convient de souligner que le job coach peut aussi être amené à intervenir au domicile de la personne pour l’aider dans les actes de sa vie personnelle, qui peuvent influencer la qualité de son travail (connexion internet, travaux sur son trajet habituel…).</p>',
                                pos: [1, 3],
                                label: "II",
                                enfant: "",
                            },
                            {
                                name: 'Troubles anxieux',
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.3.2, p.32)</small><p class="textktree">La prévalence de l’épilepsie dans les TED serait de 20 % à 25 % (extrêmes : 5 - 40 %) (46), alors que la prévalence de l’épilepsie dans la population générale serait de 0,5 à 1 % (47).</p><p class="textktree">La prévalence de l’épilepsie dans les TED était de 21,4 % chez les sujets ayant un QI < 70 versus 8 % chez les sujets ayant un QI > 70.</p><p class="textktree">Le sexe : une méta-analyse récente à partir de 14 études portant sur 1 530 sujets ayant un TED (dont 1 191 garçons et 339 filles) a mis en évidence une forte diminution du risque d’épilepsie chez les garçons par rapport aux filles (RR : 0,549 ; IC 95 % : 0,45 - 0,66 ; p < 0,001) (48). Les études étaient homogènes. La prévalence de l’épilepsie dans les TED était de 34,5 % chez les filles versus 18,5 % chez les garçons ; l’âge : l’incidence de l’épilepsie dans les TED a une répartition bimodale avec un premier pic chez les enfants préscolaires et un deuxième pic à l’adolescence (16).</p><p class="textktree">le type de trouble envahissant du développement : la prévalence de l’épilepsie serait de 4 % dans le syndrome d’Asperger (49) ; de 77 % dans le trouble désintégratif de l’enfance (50) ; de 90 % dans le syndrome de Rett (51,52).</p><p class="textktree">Il n’y a pas de données concernant la prévalence des TED dans l’épilepsie (46). Des antécédents de spasmes infantiles ont été rapportés chez les enfants avec TED (46). Des antécédents de crises comitiales non provoquées dans la première année de vie autres que des spasmes infantiles ont été rapportés dans une petite série de cas finlandais (53).</p>',
                                pos: [2.25, 1.75],
                                label: "III",
                                enfant: "",
                            },
                            {
                                name: 'Troubles psychotiques',
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.3.2, p.32)</small><p class="textktree">La prévalence de l’épilepsie dans les TED serait de 20 % à 25 % (extrêmes : 5 - 40 %) (46), alors que la prévalence de l’épilepsie dans la population générale serait de 0,5 à 1 % (47).</p><p class="textktree">La prévalence de l’épilepsie dans les TED était de 21,4 % chez les sujets ayant un QI < 70 versus 8 % chez les sujets ayant un QI > 70.</p><p class="textktree">Le sexe : une méta-analyse récente à partir de 14 études portant sur 1 530 sujets ayant un TED (dont 1 191 garçons et 339 filles) a mis en évidence une forte diminution du risque d’épilepsie chez les garçons par rapport aux filles (RR : 0,549 ; IC 95 % : 0,45 - 0,66 ; p < 0,001) (48). Les études étaient homogènes. La prévalence de l’épilepsie dans les TED était de 34,5 % chez les filles versus 18,5 % chez les garçons ; l’âge : l’incidence de l’épilepsie dans les TED a une répartition bimodale avec un premier pic chez les enfants préscolaires et un deuxième pic à l’adolescence (16).</p><p class="textktree">le type de trouble envahissant du développement : la prévalence de l’épilepsie serait de 4 % dans le syndrome d’Asperger (49) ; de 77 % dans le trouble désintégratif de l’enfance (50) ; de 90 % dans le syndrome de Rett (51,52).</p><p class="textktree">Il n’y a pas de données concernant la prévalence des TED dans l’épilepsie (46). Des antécédents de spasmes infantiles ont été rapportés chez les enfants avec TED (46). Des antécédents de crises comitiales non provoquées dans la première année de vie autres que des spasmes infantiles ont été rapportés dans une petite série de cas finlandais (53).</p>',
                                pos: [4, 1],
                                label: "IV",
                                enfant: "",
                            },
                            {
                                name: 'Catatonie',
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.3.2, p.32)</small><p class="textktree">La prévalence de l’épilepsie dans les TED serait de 20 % à 25 % (extrêmes : 5 - 40 %) (46), alors que la prévalence de l’épilepsie dans la population générale serait de 0,5 à 1 % (47).</p><p class="textktree">La prévalence de l’épilepsie dans les TED était de 21,4 % chez les sujets ayant un QI < 70 versus 8 % chez les sujets ayant un QI > 70.</p><p class="textktree">Le sexe : une méta-analyse récente à partir de 14 études portant sur 1 530 sujets ayant un TED (dont 1 191 garçons et 339 filles) a mis en évidence une forte diminution du risque d’épilepsie chez les garçons par rapport aux filles (RR : 0,549 ; IC 95 % : 0,45 - 0,66 ; p < 0,001) (48). Les études étaient homogènes. La prévalence de l’épilepsie dans les TED était de 34,5 % chez les filles versus 18,5 % chez les garçons ; l’âge : l’incidence de l’épilepsie dans les TED a une répartition bimodale avec un premier pic chez les enfants préscolaires et un deuxième pic à l’adolescence (16).</p><p class="textktree">le type de trouble envahissant du développement : la prévalence de l’épilepsie serait de 4 % dans le syndrome d’Asperger (49) ; de 77 % dans le trouble désintégratif de l’enfance (50) ; de 90 % dans le syndrome de Rett (51,52).</p><p class="textktree">Il n’y a pas de données concernant la prévalence des TED dans l’épilepsie (46). Des antécédents de spasmes infantiles ont été rapportés chez les enfants avec TED (46). Des antécédents de crises comitiales non provoquées dans la première année de vie autres que des spasmes infantiles ont été rapportés dans une petite série de cas finlandais (53).</p>',
                                pos: [6, 1],
                                label: "V",
                                enfant: "",
                            },
                            {
                                name: 'Syndrome de Gilles de la Tourette',
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.3.2, p.32)</small><p class="textktree">La prévalence de l’épilepsie dans les TED serait de 20 % à 25 % (extrêmes : 5 - 40 %) (46), alors que la prévalence de l’épilepsie dans la population générale serait de 0,5 à 1 % (47).</p><p class="textktree">La prévalence de l’épilepsie dans les TED était de 21,4 % chez les sujets ayant un QI < 70 versus 8 % chez les sujets ayant un QI > 70.</p><p class="textktree">Le sexe : une méta-analyse récente à partir de 14 études portant sur 1 530 sujets ayant un TED (dont 1 191 garçons et 339 filles) a mis en évidence une forte diminution du risque d’épilepsie chez les garçons par rapport aux filles (RR : 0,549 ; IC 95 % : 0,45 - 0,66 ; p < 0,001) (48). Les études étaient homogènes. La prévalence de l’épilepsie dans les TED était de 34,5 % chez les filles versus 18,5 % chez les garçons ; l’âge : l’incidence de l’épilepsie dans les TED a une répartition bimodale avec un premier pic chez les enfants préscolaires et un deuxième pic à l’adolescence (16).</p><p class="textktree">le type de trouble envahissant du développement : la prévalence de l’épilepsie serait de 4 % dans le syndrome d’Asperger (49) ; de 77 % dans le trouble désintégratif de l’enfance (50) ; de 90 % dans le syndrome de Rett (51,52).</p><p class="textktree">Il n’y a pas de données concernant la prévalence des TED dans l’épilepsie (46). Des antécédents de spasmes infantiles ont été rapportés chez les enfants avec TED (46). Des antécédents de crises comitiales non provoquées dans la première année de vie autres que des spasmes infantiles ont été rapportés dans une petite série de cas finlandais (53).</p>',
                                pos: [7.75, 1.75],
                                label: "VI",
                                enfant: "",
                            },
                            {
                                name: 'TDAH',
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.3.2, p.32)</small><p class="textktree">La prévalence de l’épilepsie dans les TED serait de 20 % à 25 % (extrêmes : 5 - 40 %) (46), alors que la prévalence de l’épilepsie dans la population générale serait de 0,5 à 1 % (47).</p><p class="textktree">La prévalence de l’épilepsie dans les TED était de 21,4 % chez les sujets ayant un QI < 70 versus 8 % chez les sujets ayant un QI > 70.</p><p class="textktree">Le sexe : une méta-analyse récente à partir de 14 études portant sur 1 530 sujets ayant un TED (dont 1 191 garçons et 339 filles) a mis en évidence une forte diminution du risque d’épilepsie chez les garçons par rapport aux filles (RR : 0,549 ; IC 95 % : 0,45 - 0,66 ; p < 0,001) (48). Les études étaient homogènes. La prévalence de l’épilepsie dans les TED était de 34,5 % chez les filles versus 18,5 % chez les garçons ; l’âge : l’incidence de l’épilepsie dans les TED a une répartition bimodale avec un premier pic chez les enfants préscolaires et un deuxième pic à l’adolescence (16).</p><p class="textktree">le type de trouble envahissant du développement : la prévalence de l’épilepsie serait de 4 % dans le syndrome d’Asperger (49) ; de 77 % dans le trouble désintégratif de l’enfance (50) ; de 90 % dans le syndrome de Rett (51,52).</p><p class="textktree">Il n’y a pas de données concernant la prévalence des TED dans l’épilepsie (46). Des antécédents de spasmes infantiles ont été rapportés chez les enfants avec TED (46). Des antécédents de crises comitiales non provoquées dans la première année de vie autres que des spasmes infantiles ont été rapportés dans une petite série de cas finlandais (53).</p>',
                                pos: [9, 3],
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
                                "Troubles psychiatriques", 'Troubles de l’humeur', 0
                            ],
                            [
                                "Troubles psychiatriques", 'Troubles anxieux', 0
                            ],
                            [
                                "Troubles psychiatriques", 'Troubles psychotiques', 0
                            ],
                            [
                                "Troubles psychiatriques", 'Catatonie', 0
                            ],
                            [
                                "Troubles psychiatriques", 'Syndrome de Gilles de la Tourette', 0
                            ],
                            [
                                "Troubles psychiatriques", 'TDAH', 0
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
            strokeColorNeutral: "#00ff97",
            strokeColorSuccess: "white",
            strokeColorFail: "red",
            strokeColorCurrent: "#00babc",


            showKtree: function (ktree) {
                document.getElementById('current-ktree').innerHTML = "<" + ktree + "></" + ktree + ">";
                document.getElementById("ktreetext").innerHTML = " ";
                document.getElementById("ktreebouton").innerHTML = " ";
            },
            
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
                        that = document.querySelector('ktree-trpsych');
                        if (title != "") {
                            that = document.querySelector('ktree-trpsych');
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
                        that = document.querySelector('ktree-trpsych');
                        if (title != "") {
                            that = document.querySelector('ktree-trpsych');
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

            ready: function () {
                this.drawNodes();
                document.getElementById("menuktree").innerHTML = "<p class=\" summary\"><b style=\"color: white\">I</b>] Troubles psychiatriques</p><p class=\" summary\"><b style=\"color: white\">II</b>] Troubles de l’humeur</p><p class=\" summary\"><b style=\"color: white\">III</b>] Troubles anxieux</p><p class=\" summary\"><b style=\"color: white\">IV</b>] Troubles psychotiques</p><p class=\" summary\"><b style=\"color: white\">V</b>] Catatonie</p><p class=\" summary\"><b style=\"color: white\">VI</b>] Syndrome de Gilles de la Tourette</p><p class=\" summary\"><b style=\"color: white\">VII</b>] TDAH</p>";
            }
 });
