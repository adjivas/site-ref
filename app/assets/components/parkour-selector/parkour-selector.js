        Polymer({
            is: "parkour-selector",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                label: "Precoce",
                                name: "parkour-diagnosticPrecoce",
                                description: "Parcour diagnostic précoce (moins de trois ans)",
                                presentation: "Parcour diagnostic précoce (enfant de moins de trois ans).",
                                pos: [2, 4],
                            },
                            {
                                label: "Diagnostic",
                                name: "parkour-diagnostic",
                                description: "Parcour diagnostic standard",
                                presentation: "Parcour diagnostic standard.",
                                pos: [4, 4],
                            },
                            {
                                label: "Bilan Ethiologique",
                                name: "Parkour diagnostic2",
                                description: "Parcour diagnostic2 généraliste",
                                presentation: "",
                                pos: [6, 4],
                            },
                            {
                                label: "MDPH",
                                name: "Parkour diagnostic3",
                                description: "Parcour diagnostic3 généraliste",
                                presentation: "",
                                pos: [8, 4],
                            }
                        ]
                    }
                },
                dimensions: {
                    type: Array,
                    value: function () {
                        return [10, 10]
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

            showParkour: function (parkour) {
                document.querySelector(parkour).start();
                document.getElementById("parktext").innerHTML = " ";
            },

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
                    radius: coeff / 2,
                    fill: nodeColor,
                    stroke: strokeColor,
                    id: obj.name,
                    presentation: obj.presentation,
                    strokeWidth: coeff / 12
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
                group.add(text);
                layer.add(group);
                group.on('click', function () {
                        document.querySelector(obj.name).start();
                        document.getElementById("parktext").innerHTML = "<h2>" + obj.description + ": </h2>";
                        });
                group.on('mouseover', function () {
                        this.opacity(0.5);
                        var pres = document.getElementById("pres-diag");
                        document.body.style.cursor = 'pointer';
                        layer.draw();
                        document.getElementById("presentation-paragraph").innerHTML = obj.presentation;
                        pres.open();
                    });
                group.on('mouseleave', function () {
                        this.opacity(1);
                        document.body.style.cursor = 'default';
                        layer.draw();
                        var pres = document.getElementById("pres-diag");
                        document.getElementById("presentation-paragraph").innerHTML = obj.presentation;
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
                    this.matchChain[id] = "en cour";
                } else if (rep == "ok") {
                    document.getElementById("parktext").innerHTML = " ";
                }
                this.sortChain(id);
            },

            sortChain: function (id) {
                console.log(this.matchChain);
                for (var i = 0; i < this.connect.length; i++) {
                    if (this.connect[i][0] === id) {
                        if ((this.matchChain[id] === "success") && (this.matchChain[this.connect[i][1]] === "neutre")) {
                            this.matchChain[this.connect[i][1]] = "en cour";
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
                }
                this.drawNodes();
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
                var layer = new Konva.Layer();
                for (var i = 0; i < this.steps.length; i++) {
                    this.addNode(this.steps[i], coeff, layer, i);
                }
                stage.add(layer);
            },

            start: function () {
                this.keychain = ["en cour", "neutre", "neutre", "neutre"];
                this.getMatch();
                this.drawNodes();
            }
 });
