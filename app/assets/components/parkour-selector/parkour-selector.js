        Polymer({
            is: "parkour-selector",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: "parkour-diagnostiquePrecoce",
                                description: "Parcour diagnostique précoce (moins de trois ans)",
                                presentation: "Parcour diagnostique précoce (enfant de moins de trois ans).",
                                pos: [2, 4],
                            },
                            {
                                name: "parkour-diagnostique",
                                description: "Parcour diagnostique standard",
                                presentation: "Parcour diagnostique standard.",
                                pos: [4, 4],
                            },
                            {
                                name: "Parkour diagnostique2",
                                description: "Parcour diagnostique2 généraliste",
                                presentation: "",
                                pos: [6, 4],
                            },
                            {
                                name: "Parkour diagnostique3",
                                description: "Parcour diagnostique3 généraliste",
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
            nodeColorSuccess: "#1c7d5f",
            nodeColorFail: "#cc0000",
            strokeColorNeutral: "#373f52",
            strokeColorSuccess: "#1c7d5f",
            strokeColorFail: "#cc0000",
            strokeColorCurrent: "#1c7d5f",
            linkColorNeutral: "#373f52",
            linkColorSuccess: "#1c7d5f",
            linkColorFail: "#cc0000",
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
                layer.add(node);
                    /* var logo = new Konva.Image({
                        //add logo
                    });
                    layer.add(logo);*/
                    node.on('click', function () {
                        document.querySelector(obj.name).start();
                        document.getElementById("parktext").innerHTML = "<h2>" + obj.description + ": </h2>";
                        });
                    node.on('mouseover', function () {
                        this.opacity(0.5);
                        var pres = document.getElementById("pres-diag");
                        document.body.style.cursor = 'pointer';
                        layer.draw();
                        document.getElementById("presentation-paragraph").innerHTML = obj.presentation;
                        pres.open();
                    });
                    node.on('mouseleave', function () {
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
