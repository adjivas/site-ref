        Polymer({
            is: "ktree-ieducom",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: "Les interventions de nature éducative, comportementale et développementales",
                                presentation: "<p>Les interventions recommandées pour les enfants par la HAS et l’ANESM en 2012 le sont également pour les adultes, dans l’attente de recommandations spécifiques.</p>",
                                pos: [2, 5],
                                enfant: "ktree-comorbpipgec",
                            },
                            {
                                name: "ABA",
                                presentation: '<div class="panel-body"><div class="tim-title"><h3>Définir l\'ABA</h3><p>Voici la définition proposée par le site "ABA : principes et application" : <a class="btn btn-click btn-lg btn-info btn-success" href="http://www.aba-sd.info" onclick="window.open(this.href); return false;" role="button">site d\'Olivier Bourgueil</a></p></div><div id="acordeon"><div class="panel-group" id="accordion"><div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" href="#collapse1">De façon simple</a></h4></div><div id="collapse1" class="panel-collapse collapse"><div class="panel-body"><p>L\'ABA c\'est l\'application de principes et lois scientifiques afin de <b>créer ou modifier</b> des comportements qui revêtent une importance sociale pour la personne et la société.</p><p>L\'ABA ne s\'applique pas qu\'à l\'autisme ! Il existe des professionnels spécialisés en ABA (mais encore très peu en France) qui aident des patients atteints de nombreuses pathologies (ex : addictions - TOC - dépression - schizophrénie etc.) ou des professionnels qui ne s\'occupent pas directement de "pathologies" mais qui fournissent des aides pour la vie quotidienne (ex : gestion des comportements alimentaires - thérapies de couples ou familiales etc.). </p><p>L\'ABA n\'est pas non plus une "méthode" miracle ou innovante, ce n\'est d\'ailleurs pas du tout une "méthode" : c\'est plutôt un cadre théorique et pratique qui oriente les professionnels dans leurs actions afin d\'aider les patients. L\'ABA existe depuis de nombreuses années mais ce n\'est que récemment que les médias ont découvert son existence. </p><p>Les lettres A.B.A viennent de l\'anglais "Applied Behavior Analysis", ce qui se traduit en français par différents termes : Analyse appliquée du comportement, Analyse comportementale appliquée, analyse du comportement appliquée etc.</p></div></div></div><div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" href="#collapse2">Définition plus complexe</a></h4></div><div id="collapse2" class="panel-collapse collapse"><div class="panel-body"><p>Une bonne définition de l\'ABA, mais un peu plus compliquée, est celle de Baer, Wolf et Risley (1968) :</p> <p>"l\'ABA est le processus d\'application des principes du comportement à l\'amélioration de comportements spécifiques et consiste simultanément à évaluer si les changements observés sont attribuables au processus d\'application, et si oui, à quelle partie de ce processus." </p></div></div></div><div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" href="#collapse3">Un peu d\'histoire</a></h4></div><div id="collapse3" class="panel-collapse collapse"><div class="panel-body"><p>L\'analyse du comportement est la science qui étudie les comportements des organismes. Cette science est née au début du 20ème siècle et on considère que c\'est John B. Watson qui a initié le changement de cap de la psychologie de l\'époque, qui s\'occupait alors quasiment exclusivement des "états de conscience", des "images mentales" et autres processus mentaux.</p><p>Selon Watson (1913) : "Les objectifs [de la psychologie] sont la prédiction et le contrôle du comportement". Ici, Watson place bien la psychologie comme une science, qui doit être capable de donner des prédictions quant à l\'apparition ou pas de certains phénomènes (ici des comportements) et qui de plus doit être capable de les contrôler.</p><p>Une des branches de l\'analyse du comportement est l\'analyse expérimentale du comportement qui, pour simplifier, consiste en la recherche et la mise en évidence, en laboratoire des principes guidant l\'apparition des comportements des organismes.</p></div></div></div><div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" href="#collapse4">Donc en fin de compte</a></h4></div><div id="collapse4" class="panel-collapse collapse"><div class="panel-body"><p>L\'analyse du comportement appliquée est la branche de l\'analyse du comportement qui se préoccupe de la façon d\'utiliser (d\'appliquer) auprès de sujets humains les résultats obtenus en laboratoire, afin de comprendre et de modifier les comportements humains qui revêtent une importance sociale.</p></div></div></div></div></div></br><span class="label label-info">En savoir plus :</span><a class="btn btn-block btn-click btn-success" href="http:\/\/www.aba-sd.info/aba-autisme/outils-devaluation" onclick="window.open(this.href); return false;" role="button">Les outils d\'évaluation</a><a class="btn btn-block btn-click btn-success" href="http:\/\/www.aba-sd.info/aba-autisme/pratiques-guidees-par-laba" onclick="window.open(this.href); return false;" role="button">Modèles d\'intervention</a><a class="btn btn-block btn-click btn-success" href="http:\/\/www.aba-sd.info/aba-autisme/communication" onclick="window.open(this.href); return false;" role="button">Communication</a><a class="btn btn-block btn-click btn-success" href="http:\/\/www.aba-sd.info/aba-autisme/comprehension-de-lenvironnement" onclick="window.open(this.href); return false;" role="button">Compréhension de l\'environnement</a><a class="btn btn-block btn-click btn-success" href="http:\/\/www.aba-sd.info/aba-autisme/comportements-repetitifs" onclick="window.open(this.href); return false;" role="button">Comportements répétitifs</a><a class="btn btn-block btn-click btn-success" href="http:\/\/www.aba-sd.info/aba-autisme/comportements-sociaux" onclick="window.open(this.href); return false;" role="button">Comportements sociaux</a></div>',
                                pos: [1, 3.5],
                                enfant: "",
                            },
                            {
                                name: "ESDM",
                                presentation: "<p>L’ESDM est un programme élaboré spécifiquement pour l’intervention auprès d’enfants âgés de douze à quarante-huit mois (le programme peut cependant être utilisé jusqu’à l’âge maximal de soixante mois).</p><p>Il a pour particularité de se baser sur le développement typique de l’enfant en regroupant les compétences habituellement observées selon quatre classes d’âge (12-18 mois, 18-24 mois, 24-36 mois, 36-48 mois).</p><p>Il s’inspire de divers modèles fréquemment utilisés dans le domaine des TSA. En effet, il emprunte à l’ABA des stratégies telles que l’incitation des comportements, le principe des renforçateurs, l’analyse du comportement, l’apprentissage progressif ou encore la nécessité de capter et maintenir l’attention de l’enfant. Dans l’ESDM, tout comme dans la méthode PRT (Pivotal Response Training), les intérêts de l’enfant guident les séances, les tentatives de communication et de participation aux activités sont renforcées même lorsqu’elles n’aboutissent pas, et les compétences acquises sont continuellement sollicitées dans le but d’assurer leur maintien.</p><p>Il s’agit de développer les capacités de l’enfant avec TSA en proposant un programme institutionnalisé et individualisé, de favoriser le développement social et émotionnel en proposant des relations interpersonnelles avec des adultes et des pairs.</p><p>Le traitement utilise des feed-back à la fois des intervenants (équipe pluridisciplinaire) et des parents. Il se centre sur le développement de la cognition et, en particulier, de la fonction symbolique et de la communication à travers l’apprentissage de gestes, signes et mots.</p>",
                                pos: [3, 3.5],
                                enfant: "",
                            },
                            {
                                name: "TEACCH",
                                presentation: "<p>Le programme TEACCH fait appel à l’analyse appliquée du comportement et se fonde sur un enseignement structuré (sur le plan spatial et temporel) dans lequel les environnements sont organisés au moyen d’informations visuelles claires et concrètes (mots, images, photos ou objets concrets). Il est conçu comme un programme développemental reposant principalement sur la structuration du milieu dont les buts sont de favoriser les apprentissages et l’autonomie, de développer des modifications environnementales pour s’adapter aux déficits de l’enfant, de maintenir une collaboration permanente entre les professionnels et les parents et enfin de fournir une continuité de cet enseignement structuré au cours du développement.</p><p>Ce programme propose des activités réglées, adaptées aux émergences cognitives de la personne telles qu’elles sont mesurées par des tests spécifiques.</p><p>Une fois une compétence établie, on apprend aux enfants à utiliser ce comportement dans un environnement moins structuré et moins « aménagé ». La généralisation des capacités et compétences s’effectue alors par la reprise, au domicile avec les parents, des exercices réalisés avec les professionnels.</p><p>L’objectif est de favoriser à long terme un fonctionnement optimal pour que, devenue adulte, la personne présentant un trouble du spectre de l’autisme s’intègre dans la société.</p>",
                                pos: [5, 3.5],
                                enfant: "",
                            },
                            {
                                name: "Prise en charge intégrative",
                                presentation: "<h4>de type <b>TED (Thérapie d’échange et de développement)</b></h4><p>La thérapie d’échange et de développement est une intervention centrée sur l’échange, dans une optique non seulement cognitive, mais aussi affective et émotionnelle. Préconisée dès les premières étapes de soin, la TED s’inscrit dans une dynamique développementale et s’adresse préférentiellement à de très jeunes enfants (moins de quatre ans).</p><p>Elle vise à rééduquer, sur la base de séquences de « jeu social » structuré, les fonctions sous-tendues par les systèmes cérébraux de la communication sociale : l’attention à autrui, l’intention, l’imitation. Elle fait découvrir à l’enfant avec TSA qu’il peut regarder, écouter, associer. Cette thérapie s’appuie entre autres sur les notions d’acquisition libre et de « curiosité physiologique ».</p><p>Il s’agit d’une approche spécifique organisée principalement autour de soins psychoéducatifs individuels réalisés au cours de plusieurs séances hebdomadaires de trente minutes chacune pendant lesquelles l’enfant est sollicité et accompagné dans différents jeux en fonction de ses intérêts et de ses capacités. Les séances s’organisent autour de trois principes généraux dont la simplification de l’environnement spatial et des stimulations, l’échange et l’imitation et enfin la réalisation de séquences motrices fonctionnelles</p>",
                                pos: [7, 3.5],
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
                                "Les interventions de nature éducative, comportementale et développementales", "ABA", 0
                            ],
                            [
                                "Les interventions de nature éducative, comportementale et développementales", "ESDM", 0
                            ],
                            [
                                "Les interventions de nature éducative, comportementale et développementales", "TEACCH", 0
                            ],
                            [
                                "Les interventions de nature éducative, comportementale et développementales", "Prise en charge intégrative", 0
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
