        Polymer({
            is: "parkour-diagnostic",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                label: "Repérage",
                                name: "Repérage",
                                description: "Il n'existe pas de dispositif particulier, il s'agit d'un repérage dans le cadre des activités quotidienne de l'enfant. Un comportement de la personne peut mettre la puce à l'oreille aux acteurs de son quotidien. L'une de ses personnes repère une caractéristique particulière de l'enfant et souhaite aller plus loin afin de comprendre s'il s'agit ou non d'un TSA. <li>Famille</li><li>Medecin</li><li>Orthophoniste</li><li>Personnel scolaire</li><li>Equipe CAMSP (centre d'Action Médico-Sociale Précoce)</li> Si la personne n'est ni scolarisé ni institutionnalisée, il n'y à pas de dispositif particulier, il s'agit d'un reparage dans le cadre des activités quotidienne de l'enfant. Une des caractéristiques met la puce à l'oreille aux acteurs du quotidien de l'enfant.",
                                presentation: "Le médecin de famille doit rester attentif à la détection de tout signe ou symptôme de TSA : <li>en écoutant les parents lorsqu’ils font part de préoccupations concernant le développement de leur enfant (la recherche a démontré la validité des préoccupations des parents) ;</li><li>si les parents n’expriment pas d’inquiétude, en leur demandant directement s’ils ont des préoccupations au sujet de leur enfant \;</li><li>en se renseignant au sujet des antécédents familiaux de TSA ou d’autres difficultés de développement \;</li><li>en constatant l’incapacité de l’enfant à atteindre certains stades de développement ou en faisant participer l’enfant à des activités permettant de révéler les difficultés de développement.</li>",
                                pos: [2, 2],
                            },
                            {
                                label: "Dépistage",
                                name: "Dépistage",
                                description: "L'entourage d'une ou les personnes encadrant son quotidien",
                                presentation: "Depistage systematique des TSA chez l'enfant de moins de 3 ans",
                                pos: [4, 2],
                            },
                            {
                                label: "diagnostic",
                                name: "Diagnostic",
                                description: "",
                                presentation: "",
                                pos: [6, 2],
                            },
                            {
                                label: "Reconaissance",
                                name: "Reconaissance",
                                description: "",
                                presentation: "",
                                pos: [6, 4],
                            },
                            {
                                label: "Droits",
                                name: "Les droits",
                                description: "",
                                presentation: "Les droits associés à la reconnaissance du handicap",
                                pos: [4, 4],
                            },
                            {
                                label: "Inscription",
                                name: "Inscrire la personne",
                                description: "",
                                presentation: "",
                                pos: [2, 4],
                            },
                            {
                                label: "Recour",
                                name: "Recour Diagnostic",
                                description: "",
                                presentation: "",
                                pos: [2, 6],
                            },
                            {
                                label: "Recour",
                                name: "Recour Reconaissance",
                                description: "",
                                presentation: "",
                                pos: [4, 6],
                            },
                            {
                                label: "Recour",
                                name: "Recour Inscription",
                                description: "Le tribunal administratif de Paris a  condamné l’Etat français (le 15 juillet 2015) à verser plus de 240 000 euros de dommages au profit de sept familles d’enfants autistes, reconnaissant notamment pour la première fois le \"préjudice moral\" vécu par les famille du à certaines carences de prise en charge. Le tribunal reconnait notamment que la carence de structure adaptée en France entraine \"l\'exil\" de milliers d\'enfants en Belgique, provoquant ainsi une séparation avec sa famille. Le tribunal s\'est basé sur cette séparation pour caractérisé le préjudice moral",
                                presentation: "Tribunal Administratif",
                                pos: [6, 6],
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
                                "Repérage", "Dépistage", 0
                            ],
                            [
                                "Dépistage", "Diagnostic", 0
                            ],
                            [
                                "Diagnostic", "Reconaissance", 0
                            ],
                            [
                                "Reconaissance", "Les droits", 0
                            ],
                            [
                                "Les droits", "Inscrire la personne", 0
                            ],
                            [
                                "Diagnostic", "Recour Diagnostic", 1
                            ],
                            [
                                "Reconaissance", "Recour Reconaissance", 1
                            ],
                            [
                                "Inscrire la personne", "Recour Inscription", 1
                            ]
                        ]
                    }
                },
                dimensions: {
                    type: Array,
                    value: function () {
                        return [8, 8]
                    }
                }
            },

            nodeColorNeutral: "#373f52",
            nodeColorSuccess: "#5cc666",
    nodeColorFail: "#d11919",
    strokeColorNeutral: "#373f52",
    strokeColorSuccess: "#5cc666",
    strokeColorFail: "#d11919",
    strokeColorCurrent: "##67dd72",
    linkColorNeutral: "#373f52",
    linkColorSuccess: "#5cc666",
    linkColorFail: "#d11919",
    keychain: [],
    matchChain: [],

    addNode: function(obj, coeff, layer, i) {
        var nodeColor;
        var strokeColor;
        var shown = true;
        if (this.matchChain[obj.name] == "neutre") {
            nodeColor = this.nodeColorNeutral;
            strokeColor = this.strokeColorNeutral;
        } else if (this.matchChain[obj.name] == "en cour") {
            nodeColor = this.nodeColorNeutral;
            strokeColor = this.strokeColorSuccess;
        } else if (this.matchChain[obj.name] == "success") {
            nodeColor = this.nodeColorSuccess;
            strokeColor = this.strokeColorSuccess;
        } else if (this.matchChain[obj.name] == "echec") {
            nodeColor = this.nodeColorFail;
            strokeColor = this.strokeColorFail;
        }
        var node = new Konva.Circle({
            x: obj.pos[0] * coeff,
            y: obj.pos[1] * coeff,
            radius: coeff,
            fill: nodeColor,
            stroke: strokeColor,
            id: obj.name,
            text: obj.name,
            strokeWidth: coeff / 12
        });
        var box = new Konva.Rect({
            x: node.x() - node.radius() - node.strokeWidth(),
            y: node.y() - node.radius() - node.strokeWidth(),
            width: 2 * node.radius() + 2 * node.strokeWidth(),
            height: 2 * node.radius() + 2 * node.strokeWidth(),
        });
        var text = new Konva.Text({
            x: node.x() - node.radius(),
            y: node.y() - node.strokeWidth(),
            width: 2 * node.radius(),
            height: 3 * node.strokeWidth(),
            text: obj.label,
            fontSize: 2 * node.strokeWidth(),
            fontFamily: "Roboto",
            fontStyle: "sans-serif",
            fontVariant: "small-caps",
            fill: "white",
            align: "center"
        });
        var group = new Konva.Group();
        group.add(node);
        group.add(box);
        group.add(text);
        var img1 = new Image();
        img1.onload = function () {
            var valid = new Konva.Image({
                x: node.x() - coeff - coeff / 6,
                y: node.y() + coeff / 5,
                width: coeff / 4 + coeff / 12,
                height: coeff / 4 + coeff / 12,
                image: img1,
                id: "success" + String(i),
                visible: false
            });
            group.add(valid);
            valid.on('touchstart click', function () {
               document.querySelector("parkour-diagnostic").changeStatus(obj.name, "Success");
               layer._getNodeById("success" + String(i)).hide();
                layer._getNodeById("return" + String(i)).hide();
                layer._getNodeById("fail" + String(i)).hide();
                layer.draw();
            });
            valid.on("mouseover", function () {
                this.opacity(0.5);
                document.body.style.cursor = 'pointer';
            });
            valid.on("mouseleave", function () {
                this.opacity(1);
                document.body.style.cursor = 'default';
            });
        };
        var img2 = new Image();
        img2.onload = function () {
            var fail = new Konva.Image({
                x: node.x() + coeff / 2 + coeff / 10 - coeff / 4 - coeff / 12,
                y: node.y() + coeff / 4,
                width: coeff / 4 + coeff / 12,
                height: coeff / 4 + coeff / 12,
                image: img2,
                id: "fail" + String(i),
                visible: false
            });
            group.add(fail);
            fail.on("touchstart click", function () {
               document.querySelector("parkour-diagnostic").changeStatus(obj.name, "Failure");
               layer._getNodeById("success" + String(i)).hide();
                layer._getNodeById("return" + String(i)).hide();
                layer._getNodeById("fail" + String(i)).hide();
                layer.draw();
            });
            fail.on("mouseover", function () {
                this.opacity(0.5);
                document.body.style.cursor = 'pointer';
            });
            fail.on("mouseleave", function () {
                this.opacity(1);
                document.body.style.cursor = 'default';
            });
        };
        var img3 = new Image();
        img3.onload = function () {
            var reset = new Konva.Image({
                x: node.x() - (coeff / 4 + coeff / 12) / 2,
                y: node.y() + coeff / 4 + coeff / 12,
                width: coeff / 4 + coeff / 12,
                height: coeff / 4 + coeff / 12,
                image: img3,
                id: "return" + String(i),
                visible: false
            });
            group.add(reset);
            reset.on("touchstart click", function () {
               document.querySelector("parkour-diagnostic").changeStatus(obj.name, "Reset");
               layer._getNodeById("success" + String(i)).hide();
                layer._getNodeById("return" + String(i)).hide();
                layer._getNodeById("fail" + String(i)).hide();
                layer.draw();
            });
            reset.on("mouseover", function () {
                this.opacity(0.5);
                document.body.style.cursor = 'pointer';
            });
            reset.on("mouseleave", function () {
                this.opacity(1);
                document.body.style.cursor = 'default';
            });
        };
        img1.src = '/assets/valider.png';
        img2.src = '/assets/cancel.png';
        img3.src = '/assets/return.png';
        layer.add(group);
        //layer.add(node);
        //layer.add(box);
            group.on('click', function () {
                document.getElementById("parktext").innerHTML = "<h2>" + obj.name + ": </h2>" + obj.presentation + "<br/>" + "<div>" + obj.description + "</div>";
                });
            group.on('mouseover', function () {
                node.opacity(0.5);
                text.opacity(0.5);
                document.body.style.cursor = 'pointer';
                layer._getNodeById("fail" + String(i)).show();
                layer._getNodeById("success" + String(i)).show();
                layer._getNodeById("return" + String(i)).show();
                layer.draw();
                var pres = document.getElementById("pres-diag");
                document.getElementById("presentation-paragraph").innerHTML = obj.presentation;
                pres.open();
            });
            group.on('mouseleave', function () {
                node.opacity(1);
                text.opacity(1);
                document.body.style.cursor = 'default';
                layer._getNodeById("success" + String(i)).hide();
                layer._getNodeById("return" + String(i)).hide();
                layer._getNodeById("fail" + String(i)).hide();
                layer.draw();
                var pres = document.getElementById("pres-diag");
                pres.close();
            });
    },

    changeStatus: function (id, rep) {
        if (rep == "Success") {
            this.matchChain[id] = "success";
        } else if (rep == "Failure") {
            this.matchChain[id] = "echec";
            this.matchChain["Recour " + id] = "en cour";
        } else if (rep == "Reset") {
            var count = 0;
            var res = false;
            for (var i = 0; i < this.connect.length; i++) {
                if (this.connect[i][1] === id) {
                    count++;
                    if (this.matchChain[this.connect[i][0]] === "success") {
                        res = true;
                    }
                }
            }
            this.matchChain[id] = ((res === true) || (count === 0)) ? "en cour" : "neutre";
        } else if (rep == "ok") {
            document.getElementById("parktext").innerHTML = " ";
        }
        this.sortChain(id);
    },

    addConnect: function (connect, layer2, layer1, i, coeff) {
        if (connect[2] === 1) {
            return ;
        }
        var node1 = layer1._getNodeById(connect[0]);
        var node2 = layer1._getNodeById(connect[1]);
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
        layer2.add(line);
    },

    sortChain: function (id) {
        for (var i = 0; i < this.connect.length; i++) {
            if (this.connect[i][0] === id) {
                if ((this.matchChain[id] === "success") && (this.matchChain[this.connect[i][1]] === "neutre") && (this.connect[i][2] === 0)) {
                    console.log(this.connect[i]);
                    this.matchChain[this.connect[i][1]] = "en cour";
                }
                else if ((this.matchChain[id] === "neutre") && (this.matchChain[this.connect[i][1]] === "en cour")) {
                    this.matchChain[this.connect[i][1]] = "neutre";
                }
                else if ((this.matchChain[id] === "echec") || (this.matchChain[id] === "en cour")) {
                    if (this.matchChain[this.connect[i][1]] === "en cour") {
                        this.matchChain[this.connect[i][1]] = "neutre";
                    }
                    if ((this.connect[i][2] === 1) && (this.matchChain[id] === "echec")) {
                        this.matchChain[this.connect[i][1]] = "en cour";
                    }
                }
            }
            else if ((this.connect[i][1] === id) && (this.connect[i][2] === 1) && (this.matchChain[this.connect[i][1]] === "success")) {
                if (this.matchChain[this.connect[i][0]] === "echec") {
                    this.matchChain[this.connect[i][0]] = "en cour";
                }
            }
        }
        this.drawNodes();
    },

    drawConnect: function (layer2, layer1, coeff) {
        for (var i = 0; i < this.connect.length; i++) {
            this.addConnect(this.connect[i], layer2, layer1, i, coeff);
        }
    },

    getMatch: function () {
        for (var i = 0; i < this.steps.length; i++) {
            this.matchChain[this.steps[i].name] = this.keychain[i];
        }
    },

    drawNodes: function () {
        var test = document.querySelector("#parkour").getBoundingClientRect();
        var coeff = test.width / this.dimensions[0];
        var stage = new Konva.Stage({
            container: "container",
            width: test.width,
            height: test.height,
            y: 0,
            x: 0
        });
        var layerNode = new Konva.Layer();
        for (var i = 0; i < this.steps.length; i++) {
            this.addNode(this.steps[i], coeff, layerNode, i);
        }
        var layerConnect = new Konva.Layer();
        this.drawConnect(layerConnect, layerNode, coeff);
        stage.add(layerConnect);
        stage.add(layerNode);
    },

            start: function () {
                /*var elacombe = <%= user.elacombe %>;
                if (elacombe) {
                    this.keychain = elacombe[nom du parkour];
                } else {
                    this.keychain = getJSON(parkour.json);
                }*/
                this.keychain = ["en cour", "neutre", "neutre", "neutre", "neutre", "neutre", "neutre", "neutre", "neutre", "neutre", "neutre"];
                this.getMatch();
                this.drawNodes();
                /*$("#datepicker").datepicker({
                    altField: "#datepicker",
                    closeText: 'Fermer',
                    prevText: 'Précédent',
                    nextText: 'Suivant',
                    currentText: 'Aujourd\'hui',
                    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
                    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
                    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
                    dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
                    dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
                    weekHeader: 'Sem.',
                    dateFormat: 'dd-mm-yy'
                });*/
            }
        });
