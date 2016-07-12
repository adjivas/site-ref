        Polymer({
            is: "ktree-voldemdiag",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: "Les trois volets de la démarche diagnostique",
                                presentation: '<p class=\"textktree\">Axée sur l’observation d’altérations qualitatives dans les domaines de la communication et des interactions sociales réciproques et sur celle du caractère restreint, répétitif des comportements, des intérêts et des activités, la démarche diagnostique associe trois volets :</p><ul><li class=\"textktree\">l’établissement du <b class=\"textktree\">diagnostic nosologique</b>, c’est-à-dire l’identification de signes cliniques traduisant les <b class=\"textktree\">altérations de fonction</b> au sein d’une même entité pathologique à laquelle est apportée une dénomination partagée par les autres professionnels en fonction de critères diagnostics validés</li><li class=\"textktree\">L’établissement du <b class=\"textktree\">diagnostic fonctionnel</b>, c’est-à-dire <b class=\"textktree\">le retentissement des troubles en termes de limitations d’activités et de restrictions de participation</b></li><li class=\"textktree\">la recherche de pathologies associées.</li></ul>',
                                pos: [5, 7.4],
                                col: "#d8e6ad",
                                label: "IV",
                                enfant: "ktree-diagval",
                            },
                            {
                                name: "Établissement d’un diagnostic nosologique",
                                presentation: '<p class=\"textktree\">Il s’agit de donner un nom aux troubles présentés par la personne. Actuellement, le diagnostic de l’autisme repose sur le repérage d’un certain nombre de signes cliniques. Lorsque le nombre de signes est supérieur à un certain seuil, on parlera alors d’autisme.</p><p class=\"textktree\">L’établissement du diagnostic doit s’appuyer à la fois sur le recueil d’un certain nombre de données auprès de l’entourage, en particulier l’histoire très précise du développement et la description des comportements, aptitudes, particularités et difficultés présentées par la personne, ainsi que sur l’observation directe de la personne.</p><p class=\"textktree\">Afin d’aider à l’établissement ou à la confirmation du diagnostic nosologique, des questionnaires et des procédures d’observation standardisés ont été mis au point. Les plus utilisés sont l’Autism Diagnostic Observation Schedule (ADOS) et la Childhood Autism Ratig Scale (CARS)</p>',
                                pos: [3, 5.4],
                                col: "#d8e6ad",
                                label: "V",
                                enfant: "",
                            },
                            {
                                name: "Établissement d’un diagnostic fonctionnel",
                                presentation: '<p class=\"textktree\">L’évaluation de différents domaines du fonctionnement de la personne doit être appréciée au regard des ressources et des limites de son environnement. Les modalités de ces évaluations sont variables d’une équipe à une autre. Certaines équipes proposent des évaluations regroupées sur une période courte (deux à trois jours par exemple), d’autres proposent que ces évaluations soient plus étalées dans le temps. D’autres différences de procédures existent, mais l’objectif reste que chaque personne bénéficie d’une évaluation psychologique, d’une évaluation orthophonique du langage et de la communication (et des troubles de l’oralité) et d’une évaluation du développement psychomoteur et sensori-moteur.</p><p class=\"textktree\">Le résultat du processus diagnostique et des différentes évaluations du fonctionnement ont un objectif principal dans le cadre du parcours de la personne : éclairer utilement les différents acteurs (dont la famille, la MDPH et les différents professionnels de l’intervention) quant aux orientations et aux choix à prendre à tout âge de la vie</p><p class=\"textktree\">À ce titre, les évaluations doivent aboutir à l’identification dans le dossier présenté à la MDPH, notamment dans le certificat médical, des éléments éclairants sur les répercussions dans la vie quotidienne, en particulier sur le plan :</p><ul><li class=\"textktree\">Des apprentissages, de la sphère cognitive, de la vie scolaire ou professionnelle</li><li class=\"textktree\">De la communication, du langage </li><li class=\"textktree\">Des interactions sociales ou socialisation</li><li class=\"textktree\">Des comportements, des émotions</li><li class=\"textktree\">De l’autonomie dans les actes de la vie quotidienne (toilette, habillage…)</li><li class=\"textktree\">Somatique, sensoriel, moteur</li><p class=\"textktree\">Il convient de souligner que le recueil des différentes données de l’évaluation du fonctionnement ne signifie pas le recours systématique à une batterie de bilans effectués par différents professionnels : puisque les altérations de fonctions, les limitations d’activité et les restrictions de participation sont les éléments les plus éclairants pour les MDPH, de nombreuses informations complémentaires pourront être recueillies directement auprès de la famille ou des professionnels intervenant auprès de la personne (éducateurs, enseignants…).</p>',
                                pos: [5, 5.4],
                                col: "#d8e6ad",
                                label: "V",
                                enfant: "",
                            },
                            {
                                name: "Recherche de pathologies associées",
                                presentation: '<p class=\"textktree\">L’association à l’autisme d’anomalies, de troubles ou de maladies est fréquente (voir le chapitre I). Il est donc recommandé qu’un certain nombre d’examens soient proposés : un examen de la vision et de l’audition, une consultation neuropédiatrique, une consultation génétique avec caryotype standard et recherche du syndrome de l’X fragile.</p><p class=\"textktree\">En fonction des consultations neuropédiatriques et/ou génétiques, d’autres examens peuvent compléter le bilan : bilans neurométaboliques, EEG avec sieste, IRM cérébrale ou autres examens spécialisés.</p><p class=\"textktree\">La découverte dans certaines situations d’une pathologie associée ne remet pas en cause le diagnostic d’autisme.</p>',
                                pos: [7, 5.4],
                                col: "#d8e6ad",
                                label: "V",
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
                                "Les trois volets de la démarche diagnostique", 'Établissement d’un diagnostic nosologique', 0
                            ],
                            [
                                "Les trois volets de la démarche diagnostique", 'Établissement d’un diagnostic fonctionnel', 0
                            ],
                            [
                                "Les trois volets de la démarche diagnostique", 'Recherche de pathologies associées', 0
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
            nodeColorNeutral: "#d8e6ad",
            nodeColorSuccess: "#373f52",
            nodeColorFail: "red",
            strokeColorNeutral: "#373f52",
            strokeColorSuccess: "#d8e6ad",
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
                        document.getElementById("ktreebouton").innerHTML = "<a><button id=\"boutonactive\" onClick=\"document.querySelector('ktree-selector').showKtree('ktree-diagval')\">Revenir en arrière</button></a>";
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
                        that = document.querySelector('ktree-voldemdiag');
                        if (title != "") {
                            that = document.querySelector('ktree-voldemdiag');
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
                        that = document.querySelector('ktree-voldemdiag');
                        if (title != "") {
                            that = document.querySelector('ktree-voldemdiag');
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
                fond.style.backgroundColor = '#d8e6ad';
                this.drawNodes();
                document.getElementById("ktreebouton2").innerHTML = "<a><button id=\"boutonactive\" onClick=\"document.querySelector('ktree-selector').showKtree('ktree-diagval')\">Revenir en arrière</button></a>";
                document.getElementById("menuktree").innerHTML = "<p class=\" summary\"><b class=\"romanumb\">I</b> Les trois volets de la démarche diagnostique</p><p class=\" summary\"><b class=\"romanumb\">II</b> Établissement d’un diagnostic nosologique</p><p class=\" summary\"><b class=\"romanumb\">III</b> Établissement d’un diagnostic fonctionnel</p><p class=\" summary\"><b class=\"romanumb\">IV</b> Recherche de pathologies associées</p>";
            }
 });
