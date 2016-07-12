        Polymer({
            is: "ktree-orgdemdiag",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: "L’organisation de la démarche diagnostique",
                                presentation: '',
                                pos: [7, 7.4],
                                col: "#d8e6ad",
                                label: "V",
                                enfant: "ktree-diagval",
                            },
                            {
                                name: "Les acteurs et les niveaux de la démarche",
                                presentation: '<p class=\"textktree\">Toute équipe de professionnels peut poser un diagnostic de TSA. Néanmoins, l’équipe doit se caractériser par la pluridisciplinarité pour réaliser les trois volets de la démarche diagnostique. La recommandation de bonnes pratiques professionnelles relative au dépistage et diagnostic de l’autisme chez l’enfant (HAS/Fédération française de psychiatrie – FFP, 2005)30 précise :</p><p class=\"textktree\">« Le diagnostic est assuré auprès de toute équipe pluridisciplinaire 1) disposant de professionnels formés, compétents et suffisamment entraînés pour examiner le développement (cognitions, communication, sensorimotricité) et les aspects psychopathologiques ; 2) ayant une bonne connaissance de ce qui peut être proposé aux parents en termes de soins, d’éducation, de pédagogie et d’accompagnement de leur enfant ; 3) articulée avec les professionnels susceptibles d’assurer les consultations génétique et neurologique.</p><p class=\"textktree\">[…] ces équipes peuvent être localisées en CAMSP, CMPP [centre médico-psycho-pédagogique], cabinet de praticiens libéraux coordonnés entre eux, service de psychiatrie infanto-juvénile, service de pédiatrie, unités d’évaluation ou centres de ressources autisme régionaux (CRA). »</p><p class=\"textktree\">Pour les adultes, la démarche diagnostique est également interdisciplinaire (HAS, 2011). Il est souhaitable qu’elle soit formalisée (avec un protocole) et coordonnée avec tous les acteurs impliqués. Ces acteurs susceptibles de participer au diagnostic sont les suivants : éducateurs spécialisés, ergothérapeutes, généticiens cliniques, infirmiers, médecins généralistes, neurologues, orthophonistes, psychiatres, psychologues, psychomotriciens, radiologues. Le recueil d’éléments cliniques doit tenir compte des comportements dans divers contextes et inclure des observations directes ou rapportées par les différents intervenants.</p><h3 class=\"textktree\">Globalement, la démarche diagnostique et d’évaluation du fonctionnement peut s’organiser selon trois niveaux :</h3><ul><li class=\"textktree\"><b class=\"textktree\">Premier niveau </b>: un diagnostic simple, ne nécessitant pas l’utilisation d’outils diagnostics spécifiques (ADI, ADOS), par une équipe pluridisciplinaire de proximité située, selon les territoires de santé, au sein d’un réseau libéral coordonné (médecin généraliste, pédiatre, orthophoniste, psychiatre, psychologue, éducateur…), les CAMSP, les services de pédiatrie, les centres médico-psychologiques (CMP), les CMPP. Le recueil d’éléments cliniques doit tenir compte des comportements dans divers contextes et, de ce fait, il doit inclure des observations directes ou rapportées par les différents intervenants</li><li class=\"textktree\"><b class=\"textktree\">Deuxième niveau </b>: diagnostic de moyenne complexité, nécessitant la mise en œuvre de moyens diagnostics spécifiques (ADI, ADOS), par des acteurs de la première ligne formés à ces outils ou des équipes d’unités spécialisées dans l’évaluation des troubles du développement ou de l’autisme ;</li><li class=\"textktree\"><b class=\"textktree\">Troisième niveau</b> : un recours aux équipes départementales de référence de diagnostic de l’autisme, les CRA, pour une expertise complémentaire dans les situations de diagnostics complexes (ex. : polyhandicap associé, situations sociofamiliales compliquées, situations d’errance diagnostique).</li></ul><p class=\"textktree\">La démarche devrait s’organiser selon ces trois niveaux. Mais, selon les territoires, les équipes varient, et les niveaux de la démarche diagnostique, les parcours gradués depuis les équipes de proximité jusqu’aux CRA dans les cas complexes peuvent aussi varier.</p><div class=\"bgyel\"><h2 class=\"textktree\">Les principaux éléments à retenir :</h2><ul><li class=\"textktree\"><h3 class=\"textktree\"> Les CRA ne constituent pas les seules équipes en capacité d’établir un diagnostic nosologique et fonctionnel </h3>le troisième plan Autisme positionne clairement les CRA en tant qu’appui à des équipes de proximité.</li><li class=\"textktree\"><h3 class=\"textktree\">Un diagnostic posé par un médecin libéral, utilisant des outils standardisés recommandés, est valide. </h3>Il est souhaitable qu’y soient joints plusieurs bilans fonctionnels. Il n’y a aucune nécessité à exiger une confirmation ou une nouvelle batterie d’examens par le CRA ou toute autre équipe pluridisciplinaire.</li><li class=\"textktree\"><h3 class=\"textktree\"> Le rôle des MDPH n’est pas de confirmer ou d’infirmer le diagnostic et les évaluations du fonctionnement. </h3>Elles peuvent néanmoins, en cas de diagnostic non conforme à la classification internationale, le « questionner » pour <b class=\"textktree\">aider la personne et sa famille à s’orienter vers des équipes pluridisciplinaires en capacité de réviser/compléter le diagnostic tout en enclenchant des premières réponses au regard des altérations de fonctions identifiées.</b>De même, ces premières réponses proposées par les équipes des MDPH ne doivent pas non plus générer une interruption de la démarche diagnostique ni certaines actions engagées pour accompagner la personne</li></div>',
                                pos: [5, 5.4],
                                col: "#d8e6ad",
                                label: "V",
                                enfant: "",
                            },
                            {
                                name: "La mise en cohérence des évaluations et des interventions : le projet personnalisé",
                                presentation: '<p class=\"textktree\">La finalité des évaluations du développement et de l’état de santé, réalisées dans le cadre de la démarche diagnostique et ultérieurement, se caractérise par la défi nition d’interventions à mettre en œuvre. La traduction des résultats de ces évaluations en buts et objectifs d’interventions est une étape essentielle et participe à la définition du contenu du projet personnalisé. Évaluations et interventions doivent être directement connectées et agir réciproquement tout au long de la mise en œuvre du projet personnalisé.</p><p class=\"textktree\">Ce projet, coconstruit entre la personne accompagnée et/ou ses représentants et l’équipe de diagnostic et/ou d’intervention (selon le moment du parcours dans lequel le projet personnalisé s’inscrit), doit décrire les interventions personnalisées au regard des besoins identifiés au cours de la démarche diagnostique d’abord, puis des évaluations régulières réalisées dans le cadre de la mise en œuvre du projet personnalisé ensuite.</p><p class=\"textktree\">Les spécificités de fonctionnement des personnes avec TSA sont très diverses et évoluent tout au long de la vie. Le projet personnalisé est donc évolutif et repose, pour chaque personne, sur une évaluation régulière de son fonctionnement et de ses potentialités. Les recommandations HAS/ANESM indiquent que ce projet personnalisé doit préciser :</p><ul><li class=\"textktree\"> les objectifs fonctionnels à atteindre dans chacun des domaines ciblés à l’issue des évaluations réalisées dans le cadre de la démarche diagnostique et des réévaluations ultérieures de la situation (communication et langage, interactions sociales, cognitif, somatique…)</li><li class=\"textktree\">Les moyens proposés (types d’activités, techniques…) pour les atteindre</li><li class=\"textktree\">Les professionnels compétents pour le mettre en œuvre (secteur éducatif, pédagogique et thérapeutique)</li><li class=\"textktree\">Les échéances de réévaluation de ces objectifs</li></ul><p class=\"textktree\">Il constitue par ailleurs un support visant à favoriser et faciliter la cohérence et la continuité du parcours de la personne. La contribution de chacun des acteurs amenés à intervenir auprès de la personne de même que les modalités de coordination entre eux doivent y être mentionnées.</p><p class=\"textktree\">Les MDPH ne renseignent pas ce projet personnalisé, mais les informations contenues dans les différents volets peuvent leur être utiles dans leurs démarches de propositions de réponses de compensation (en particulier pour la mise en place du plan personnalisé de compensation et, le cas échéant, du plan d’accompagnement global).</p>',
                                pos: [9, 5.4],
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
                                "L’organisation de la démarche diagnostique", 'Les acteurs et les niveaux de la démarche', 0
                            ],
                            [
                                "L’organisation de la démarche diagnostique", 'La mise en cohérence des évaluations et des interventions : le projet personnalisé', 0
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
                        that = document.querySelector('ktree-orgdemdiag');
                        if (title != "") {
                            that = document.querySelector('ktree-orgdemdiag');
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
                        that = document.querySelector('ktree-orgdemdiag');
                        if (title != "") {
                            that = document.querySelector('ktree-orgdemdiag');
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
                document.getElementById("menuktree").innerHTML = "<p class=\" summary\"><b class=\"romanumb\">I</b> L’organisation de la démarche diagnostique</p><p class=\" summary\"><b class=\"romanumb\">II</b> Les acteurs et les niveaux de la démarche</p><p class=\" summary\"><b class=\"romanumb\">III</b> La mise en cohérence des évaluations et des interventions : le projet personnalisé</p>";
            }
 });
