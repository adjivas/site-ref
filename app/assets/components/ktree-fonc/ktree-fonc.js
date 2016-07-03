        Polymer({
            is: "ktree-fonc",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: "Les interventions par domaines fonctionnels",
                                presentation: '<p style=\"color: #00ff97\">Comme précédemment, la description suivante des interventions par domaine fonctionnel est extraite des recommandations de bonnes pratiques professionnelles publiées en 2012 par la HAS et l’ANESM. Pour en savoir plus, il est vivement conseillé de se reporter aux recommandations publiées.</p>',
                                pos: [6, 7],
                                enfant: "ktree-igc"
                            },
                            {
                                name: "Domaine de la communication et du language",
                                presentation: '<p style=\"color: #00ff97\">Les recommandations insistent fortement sur le fait que, pour tout enfant/adolescent avec TSA, même en l’absence de développement de la langue orale, tout projet personnalisé doit comporter des objectifs fonctionnels dans le domaine de la communication verbale et non verbale.</p><p style=\"color: #00ff97\">Le développement de la fonction de communication nécessite notamment le développement de l’attention et la mise en situation d’interactions sociales (imitation, manipulation d’objets, d’images, jeu…) introduisant progressivement des changements pour augmenter le champ de communication. De ce fait, les interventions spécifiques pouvant être recommandées sont :</p><ul style=\"color: #00ff97\"><li style=\"color: #00ff97\"> des séances d’orthophonie (le rythme des séances doit être fonction des besoins de la personne, de ses contraintes personnelles et environnementales ; l’implication des autres intervenants, familiaux ou professionnels, est recommandée pour faciliter la généralisation de ses acquis).</li></ul>',
                                pos: [2, 7],
                                enfant: "",
                            },
                            {
                                name: "Domaine des interactions sociales",
                                presentation: '<p style=\"color: #00ff97\">Le développement de la réciprocité des échanges sociaux nécessite des interventions ciblant le développement du jeu fonctionnel ou symbolique, de l’imitation et de la compréhension des règles sociales. La formation de l’environnement social immédiat de l’enfant/adolescent (famille, assistante maternelle, personnel de crèche, école…) est requise ainsi que son accompagnement dans les situations sociales ordinaires (à l’école, dans les magasins, dans toute situation sociale de vie courante).</p><p style=\"color: #00ff97\">Parmi les interventions proposées pour aider l’enfant/adolescent à développer ses habiletés sociales, sont recommandées :</p><ul style=\"color: #00ff97\"><li style=\"color: #00ff97\"> les interventions éducatives, comportementales et développementales individuelles mises en œuvre dans le cadre d’interventions précoces, globales et coordonnées.</li><li style=\"color: #00ff97\"> les interventions en séances individuelles et/ou en petit groupe permettant d’expérimenter des situations de partage, tour de rôle, attention à l’autre, reconnaissance et prise en compte des émotions, pensées et intentions de l’autre (théorie de l’esprit) afin d’aider l’enfant/adolescent à anticiper, prévoir, comprendre l’autre, généraliser et apprendre.</li></ul><p style=\"color: #00ff97\">Pour les enfants/adolescents avec TSA, qui présentent des compétences très hétérogènes selon les domaines de fonctionnement, en particulier pour les enfants/adolescents présentant un bon fonctionnement intellectuel ou un syndrome d’Asperger, il est recommandé de mettre en œuvre des interventions spécifiques structurées, centrées sur le développement des habiletés sociales (habileté de jeu, compréhension des situations sociales, compréhension des émotions…). Les thérapies cognitivo-comportementales spécifiquement adaptées aux personnes avec TSA peuvent être utilisées chez les enfants/adolescents ayant un bon niveau de développement du langage oral.</p>',
                                pos: [3, 6],
                                enfant: "",
                            },
                            {
                                name: "Domaine cognitif",
                                presentation: '<p style=\"color: #00ff97\">Pour tout enfant/adolescent avec TSA, tout projet personnalisé doit comporter des objectifs fonctionnels dans le domaine cognitif en vue de favoriser le développement de ses capacités cognitives : attention, mémoire, représentation dans le temps et l’espace, anticipation et planifi cation des actions, processus de pensée, langage.</p><p style=\"color: #00ff97\">Par conséquent, les interventions recommandées peuvent être les suivantes :</p><ul style=\"color: #00ff97\"><li style=\"color: #00ff97\">les interventions éducatives, comportementales et développementales mises en œuvre avant quatre ans sous forme d’interventions précoces, globales et coordonnées</li><li style=\"color: #00ff97\"> l’utilisation initiale des centres d’intérêt particuliers de l’enfant/adolescent</li><li style=\"color: #00ff97\"> les interventions thérapeutiques telles que l’orthophonie, la psychomotricité, le suivi par un psychologue</li><li style=\"color: #00ff97\">les activités éducatives et pédagogiques, dont les activités ludiques, culturelles et artistiques…, adaptées au niveau de développement de l’enfant/adolescent et tenant compte de son âge chronologique </li><li style=\"color: #00ff97\"> la collaboration entre professionnels de santé, psychologues, éducateurs et enseignants en vue de faciliter l’adaptation par l’enseignant des moyens pédagogiques mis en œuvre au cours de la scolarisation </li><li style=\"color: #00ff97\">la structuration de l’environnement pour l’aider à connaître les activités proposées et à planifier ses actions.</li></ul><p style=\"color: #00ff97\">Lorsque l’enfant/adolescent ne s’exprime pas oralement, il est recommandé de l’aider à construire ses propres modalités de raisonnement à partir de tout autre moyen de communication (langage écrit, système de communication augmentée ou alternative…).</p>',
                                pos: [4, 5],
                                enfant: "",
                            },
                            {
                                name: "Domaine sensoriel et moteur",
                                presentation: '<p style=\"color: #00ff97\">En cas de troubles praxiques, posturaux, toniques ou gnosiques interférant avec les activités quotidiennes (habillage, alimentation, loisirs) ou les apprentissages scolaires (écriture, lecture), la psychomotricité et l’ergothérapie peuvent être proposées, parfois de façon combinée, pour favoriser le développement de la motricité et des praxies</p><p style=\"color: #00ff97\">Dans les cas où une hypersensibilité importante existe, un travail d’atténuation ou de modulation de cette sensorialité exacerbée peut être suggéré ainsi qu’un aménagement de l’environnement pour agir sur les stimulations sensorielles gênantes (lumière, bruit…). Dans les cas où une hyperacousie est mise en évidence et entraîne une souffrance chez l’enfant/adolescent, des filtres auditifs peuvent être proposés pour limiter les effets négatifs de l’hyperacousie sur la concentration et le comportement</p><p style=\"color: #00ff97\">Pour information, les pratiques dites « d’intégration sensorielle », très diverses, n’ont pas fait preuve de leur efficacité au vu des données publiées. Cependant, pour certains enfants/adolescents avec TSA dont les évaluations du fonctionnement montrent des particularités sensorielles ou motrices, ces pratiques peuvent apporter des bénéfices en termes d’attention, de réduction du stress ou vis-à-vis de comportements inadaptés aux stimulations sensorielles (accord d’experts).</p><p>Les activités physiques et sportives, les activités musicales et les activités réalisées avec les animaux ne peuvent être considérées en l’état des connaissances comme thérapeutiques, mais constituent des pratiques pouvant participer à l’épanouissement personnel et social de certains enfants/adolescents avec TSA, selon leurs centres d’intérêt, s’ils bénéficient d’un accompagnement spécifique.</p><p style=\"color: #00ff97\">Les troubles visuels ou auditifs, confirmés par les examens ophtalmologiques ou oto-rhino-laryngologiques, doivent faire l’objet de traitements appropriés recommandés (prescription de lunettes, rééducation orthoptique de troubles neuro-visuels…).</p>',
                                pos: [5, 4],
                                enfant: "",
                            },
                            {
                                name: "Domaine des emotions et du comportement",
                                presentation: '',
                                pos: [6, 3],
                                enfant: "ktree-comport",
                            },
                            {
                                name: "Domaine somatique",
                                presentation: '<p style=\"color: #00ff97\">Comme pour toute personne, l’enfant/adolescent avec TSA doit pouvoir bénéficier des mêmes actions de prévention, d’éducation à la santé, de surveillance et de traitement en fonction des besoins somatiques repérés lors des évaluations ou des bilans ophtalmologiques, ORL, odontologiques… Toute modification de comportement doit amener à rechercher une cause somatique. Pour les personnes avec TSA, le suivi somatique est particulièrement important. Leurs spécificités sensorielles et de communication ont souvent pour effet des réactions paradoxales à la douleur et à son expression (décalage dans le temps, impression d’absence…).</p><p style=\"color: #00ff97\">Pour la mise en œuvre des procédures diagnostiques ou thérapeutiques, en accord avec les parents, il est recommandé aux équipes accompagnant la personne ainsi qu’aux professionnels sollicités plus ponctuellement d’anticiper, de se coordonner et de faciliter la planification et, si nécessaire, l’accompagnement lors des consultations afin de tenir compte des particularités de fonctionnement des personnes avec TSA.</p><p style=\"color: #00ff97\">Une familiarisation progressive des personnes aux situations de consultation, de bilan et de soins potentiellement anxiogènes est recommandée tout comme la mise en œuvre des apprentissages anticipant les situations de soins (notamment apprendre à la personne à mettre des mots ou des images sur ses sensations, ses ressentis – échelles visuelles d’intensité de la douleur – ou ses sentiments ; lui apprendre à connaître et à désigner les différentes parties de son corps, ainsi qu’à répondre à des consignes simples, utiles lors d’une consultation).</p>',
                                pos: [7, 4],
                                enfant: "",
                            },
                            {
                                name: "Domaine de l’autonomie dans les activites de la vie quotidienne",
                                presentation: '<p style=\"color: #00ff97\">Pour tout enfant/adolescent avec TSA, tout projet personnalisé doit comporter des objectifs fonctionnels dans le domaine de l’autonomie dans les activités de la vie quotidienne (habillage, toilette, courses, activités ménagères, repas, transport…). Cette nécessité vise à favoriser le développement d’une autonomie personnelle et sociale par un apprentissage spécifique lors de séances de rééducation (ergothérapie), d’activités physiques et sportives ou d’activités éducatives puis par un entraînement en situation de vie quotidienne au domicile, à l’école, au travail, sur ses lieux de loisirs et de vacances et de façon générale dans les lieux publics que l’enfant/adolescent est amené à fréquenter. </p>',
                                pos: [8, 5],
                                enfant: "",
                            },
                            {
                                name: "Domaine des apprentissages scolaires et préprofessionels",
                                presentation: '<p style=\"color: #00ff97\">Tout enfant/adolescent en âge scolaire doit bénéficier d’une scolarisation effective, en milieu ordinaire ou adapté.</p><p style=\"color: #00ff97\">Le volume horaire des activités proposées aux enfants/adolescents avec TSA dans le champ scolaire doit atteindre, dès que possible, le même volume horaire que celui dont bénéficie tout enfant/adolescent du même âge, dans la mesure où le mode de scolarisation est adapté aux aptitudes de l’enfant/adolescent et où cela ne le met pas en situation d’échec ou de souffrance.</p><p style=\"color: #00ff97\">Dans les établissements scolaires, les pratiques suivantes sont recommandées pour certains enfants/adolescents avec TSA :</p><ul style=\"color: #00ff97\"><li style=\"color: #00ff97\"> augmentation progressive du temps de scolarisation pour atteindre, dès que possible, le même volume horaire que tout enfant/adolescent du même âge</li><li style=\"color: #00ff97\"> accompagnement ou tutorat par un professionnel formé aux TSA. Il peut s’agir d’un auxiliaire de vie scolaire (AVS), individuel ou mutualisé, et/ou d’un autre professionnel suivant l’enfant/adolescent au sein d’une structure médico-sociale ou sanitaire ; cet accompagnement n’est pas systématique, mais en fonction des situations individuelles</li><li style=\"color: #00ff97\">tutorat par d’autres élèves, sous réserve qu’ils soient volontaires, sensibilisés au fonctionnement d’un élève avec TSA et qu’ils soient encadrés par l’équipe éducative.</li></ul><p style=\"color: #00ff97\">Dans les établissements scolaires, une information sur les caractéristiques d’une situation individuelle peut être donnée, en accord avec l’enfant/adolescent et ses parents, aux pairs ou aux personnes de leur entourage social pour favoriser la compréhension des particularités de fonctionnement, l’acceptation et l’inclusion de l’enfant/adolescent avec TSA dans un environnement ordinaire.</p><p style=\"color: #00ff97\">Parallèlement aux enseignements délivrés dans les établissements scolaires et de formation professionnelle, il est recommandé que tout adolescent avec TSA dont l’évaluation aurait mis en évidence des besoins spécifiques dans ce domaine puisse bénéficier d’un accompagnement spécifique lors d’un stage ou d’une recherche de stage, de formation ou d’emploi.</p>',
                                pos: [9, 6],
                                enfant: "",
                            },
                            {
                                name: "Domaine de l’environnement materiel",
                                presentation: '<p style=\"color: #00ff97\">Pour tout enfant/adolescent avec TSA dont l’évaluation du fonctionnement aurait mis en évidence des besoins spécifiques d’adaptation ou de structuration matérielle de l’environnement, du temps ou de l’espace, des aménagements doivent être mis en œuvre, éventuellement avec l’aide de professionnels spécialisés.</p>',
                                pos: [10, 7],
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
                                "Les interventions par domaines fonctionnels", 'Domaine cognitif', 0
                            ],
                            [
                                "Les interventions par domaines fonctionnels", 'Domaine des interactions sociales', 0
                            ],
                            [
                                "Les interventions par domaines fonctionnels", 'Domaine de la communication et du language', 0
                            ],
                            [
                                "Les interventions par domaines fonctionnels", 'Domaine sensoriel et moteur', 0
                            ],
                            [
                                "Les interventions par domaines fonctionnels", 'Domaine des emotions et du comportement', 0
                            ],
                            [
                                "Les interventions par domaines fonctionnels", 'Domaine somatique', 0
                            ],
                            [
                                "Les interventions par domaines fonctionnels", 'Domaine de l’autonomie dans les activites de la vie quotidienne', 0
                            ],
                            [
                                "Les interventions par domaines fonctionnels", 'Domaine des apprentissages scolaires et préprofessionels', 0
                            ],
                            [
                                "Les interventions par domaines fonctionnels", 'Domaine de l’environnement materiel', 0
                            ],
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
