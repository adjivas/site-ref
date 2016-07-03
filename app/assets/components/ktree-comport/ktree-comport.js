        Polymer({
            is: "ktree-comport",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: "Emotions",
                                presentation: '<p>Globalement, lorsque des signes de souffrance, d’anxiété ou de dépression ont été mis en évidence au cours des évaluations du fonctionnement, les stratégies habituellement utilisées et ayant fait preuve d’effi cacité pour d’autres populations peuvent être proposées avec des adaptations pour les enfants/adolescents avec TSA. Par ailleurs, pour les aider à reconnaître, à vivre leurs émotions et à gérer leur anxiété, les interventions spécifi ques recommandées, selon les résultats des évaluations et avec l’accord des parents, sont les suivantes :</p><ul><li>l’adaptation de stratégies utilisées en thérapie cognitivo-comportementale pour les enfants avec autisme de haut niveau ou syndrome d’Asperger </li><li>des jeux de rôle</li><li>des groupes de parole</li><li>des psychothérapies individuelles</li></ul>',
                                pos: [2, 4],
                                enfant: "",
                            },
                            {
                                name: "Prevention, accompagnement et traitement des comportements-problemes, dont les troubles du comportement alimentaire et l’hyperactivite",
                                presentation: '<p>Toute particularité de comportement ne nécessite pas systématiquement d’intervention spécifique visant à la réduire. Parmi les interventions proposées pour prévenir l’apparition de comportements-problèmes sont recommandées :</p><ul><li> la mise en place de système de communication augmentée ou alternative cohérent dans les différents lieux de vie de l’enfant/adolescent, surtout lorsque celui-ci ne s’exprime pas ou peu oralement</li><li>l’adaptation de l’environnement (structuration spatio-temporelle, environnement sonore et lumineux…)</li><li>une anticipation des situations entraînant habituellement un comportement-problème</li></ul><p>En cas de comportements-problèmes, il est recommandé de rechercher, en collaboration avec les parents et l’entourage de l’enfant/adolescent :</p><ul><li>des comorbidités somatiques ou des phénomènes douloureux avec l’utilisation d’une échelle d’hétéroévaluation de la douleur</li><li> les contextes d’apparition des comportements-problèmes et leur fonction afin de déterminer, par une évaluation fonctionnelle, les facteurs qui déclenchent ces troubles ou les maintiennent, voire les renforcent.</li></ul><p>Si une intervention éducative spécifique ou un traitement médicamenteux sont requis, ils peuvent être commencés parallèlement aux investigations médicales à la recherche de causes somatiques, mais ne doivent pas s’y substituer.</p><p>En cas de comportements-problèmes (gêne notable, intense, répétée, durable ou présentant un danger pour l’enfant/adolescent ainsi que pour son environnement et compromettant ses apprentissages, son adaptation et son intégration sociale), il est recommandé de rechercher, en collaboration avec l’entourage, des comorbidités somatiques ou des phénomènes douloureux, ainsi que les contextes d’apparition de ces comportements et leur fonction afin de déterminer les facteurs qui les déclenchent, les maintiennent ou les renforcent. Par ailleurs, il est recommandé de promouvoir l’apprentissage de comportements adaptés pour réduire la fréquence ou l’intensité des troubles par des techniques psychologiques ou éducatives appropriées. Parmi les interventions proposées, sont recommandés :</p><ul><li>les techniques psychoéducatives comportementales</li><li> toute intervention qui obtient cet apprentissage par la valorisation de l’enfant/adolescent </li><li>certains traitements médicamenteux en association avec les stratégies non médicamenteuses citées ci-dessus</li></ul><p>Le recours aux lieux de calme-retrait ou d’apaisement doit rester une procédure d’exception. En aucun cas ces lieux ne peuvent s’apparenter à des lieux d’isolement dans lesquels serait enfermé l’enfant. Dans les cas où des équipes ont recours à ces lieux de calme-retrait ou d’apaisement, il est recommandé que leur utilisation soit encadrée par une procédure compatible avec la continuité de l’accompagnement de l’enfant et avec la sécurité et le respect de la dignité des personnes</p><p>En cas d’automutilation, le port de protections spécifiques (casque par exemple) peut être envisagé.</p><p>Enfin, il conviendra de réinterroger le projet personnalisé (objectifs, activités, communication…).</p>',
                                pos: [10, 4],
                                enfant: "",
                            },
                            {
                                name: "Sexualite",
                                presentation: '<p>Les contenus des programmes d’éducation sexuelle proposés dans le cadre du cursus scolaire à tout(e) adolescent(e) en France devraient être proposés à tout(e) adolescent(e) avec TSA de manière adaptée, par des professionnels formés, afin de tenir compte de ses particularités de communication et d’interactions sociales ainsi que de ses capacités de compréhension et de raisonnement. L’objectif est de permettre aux adolescent(e)s de trouver un comportement adapté avec leurs pairs et d’accéder à une autonomie et un épanouissement également dans ce domaine</p><p>Des programmes spécifiques et adaptés (groupes de compétences sociales, ateliers portant sur la vie affective et sociale), animés par des professionnels formés, peuvent également être proposés par les équipes d’interventions aux adolescent(e)s.</p>',
                                pos: [6, 6],
                                enfant: "",
                            },
                            {
                                name: "Domaine des emotions et du comportement",
                                presentation: '',
                                pos: [6, 3],
                                enfant: "ktree-fonc"
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
                                "Domaine des emotions et du comportement", 'Emotions', 0
                            ],
                            [
                                "Domaine des emotions et du comportement", 'Prevention, accompagnement et traitement des comportements-problemes, dont les troubles du comportement alimentaire et l’hyperactivite', 0
                            ],
                            [
                                "Domaine des emotions et du comportement", 'Sexualite', 0
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

            width: window.innerWidth * 3 / 5,
            height: null,
            nodeColorNeutral: "#226070",
            nodeColorSuccess: "#00ff97",
            nodeColorFail: "red",
            strokeColorNeutral: "#00ff97",
            strokeColorSuccess: "#fff",
            strokeColorFail: "red",
            strokeColorCurrent: "#00babc",


            showKtree: function (ktree) {
                console.log("j'aime pas les arbres");
                console.log(ktree);
                document.getElementById('container').innerHTML = "<" + ktree + "></" + ktree + ">";
                document.getElementById("ktreetext").innerHTML = " ";
                document.getElementById("ktreebouton").innerHTML = " ";
            },
            
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
                layer.add(node);
                if (obj.enfant == "") {
                    node.on('click', function () {
                        document.getElementById("ktreetext").innerHTML = "<h2 style=\"color: #00ff97\">" + obj.name + ": </h2>" + "<p  style=\"color: #00ff97\">" + obj.presentation + "</p><br/>";
                        document.getElementById("ktreebouton").innerHTML = " ";
                    });
                    node.on('mouseover', function () {
                        this.opacity(0.5);
                        document.body.style.cursor = 'pointer';
                        layer.draw();
                    });
                    node.on('mouseleave', function () {
                        this.opacity(1);
                        document.body.style.cursor = 'default';
                        layer.draw();
                    });
                } else {
                    node.on('dblclick', function() {
                        console.log(obj.enfant);
                        document.querySelector('ktree-selector').showKtree(obj.enfant);
                    });
                    node.on('click', function () {
                        document.getElementById("ktreetext").innerHTML = "<h2 style=\"color: #00ff97\">" + obj.name + ": </h2>" + "<p  style=\"color: #00ff97\">" + obj.presentation + "</p><br/>";
                        document.getElementById("ktreebouton").innerHTML = "<a><button style=\"width: 100%; height: 40px; background-color: #00ff97; color: #226070; border-radius: 15px\" onClick=\"document.querySelector('ktree-selector').showKtree('" + obj.enfant + "')\">En savoir plus</button></a>";
                    });
                    node.on('mouseover', function () {
                        this.opacity(0.5);
                        document.body.style.cursor = 'pointer';
                        layer.draw();
                    });
                    node.on('mouseleave', function () {
                        this.opacity(1);
                        document.body.style.cursor = 'default';
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
                console.log("j'aime les arbres");
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
            }
 });
