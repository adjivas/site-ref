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
                                presentation: "",
                                pos: [2, 6],
                            },
                            {
                                name: "parkour-diagnostique",
                                description: "Parcour diagnostique généraliste",
                                presentation: "",
                                pos: [4, 6],
                            },
                            {
                                name: "Parkour diagnostique2",
                                description: "Parcour diagnostique2 généraliste",
                                presentation: "",
                                pos: [6, 6],
                            },
                            {
                                name: "Parkour diagnostique3",
                                description: "Parcour diagnostique3 généraliste",
                                presentation: "",
                                pos: [8, 6],
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

            width: window.innerWidth * 3 / 5,
            height: null,
            nodeColorNeutral: "#46464c",
            nodeColorSuccess: "#00ff97",
            nodeColorFail: "red",
            strokeColorNeutral: "#46464c",
            strokeColorSuccess: "#00ff97",
            strokeColorFail: "red",
            strokeColorCurrent: "#00babc",
            linkColorNeutral: "white",
            linkColorSuccess: "white",
            linkColorFail: "red",
            keychain: [],
            matchChain: [],

            showParkour: function (parkour) {
                document.getElementById('current-parkour').innerHTML = "<" + parkour + "></" + parkour+ ">";
                document.getElementById("parktext").innerHTML = " ";
                document.getElementById("parkbouton").innerHTML = " ";
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
                    text: obj.name,
                    strokeWidth: coeff / 12
                });
                layer.add(node);
                    /* var logo = new Konva.Image({
                        //add logo
                    });
                    layer.add(logo);*/
                    node.on('click', function () {
                        document.getElementById("parktext").innerHTML = "<h2 style=\"color: #00ff97\">" + obj.description + ": </h2>";
                        document.getElementById("parkbouton").innerHTML = "<paper-button raised onClick=\"document.querySelector('parkour-selector').showParkour('" + obj.name + "')\">Afficher</paper-button>";
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
                    document.getElementById("parkbouton").innerHTML = " ";
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
                stage.add(layer);
            },

            ready: function () {
                this.keychain = ["en cour", "neutre", "neutre", "neutre"];
                this.getMatch();
                this.drawNodes();
            }
 });
