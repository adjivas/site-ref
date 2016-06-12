Polymer({
    is: "template-deux-parkour",
    properties: {
        steps: {
            type: Array,
            value: function () {
                return [
                    {
                        name: "Generaliste",
                        description: "A cette étape vous devrez aller voir le Generaliste ou le Pediatre afin d'établir un diagnostique blablabalablabalbalablablalablla je suis long car je suis une description.",
                        presentation: "Aller voir le Generaliste ou le Pediatre.",
                        pos: [8, 2],
                    },
                    {
                        name: "Neurologue",
                        description: "A cette étape vous devrez aller voir le Neurologue afin d'établir un diagnostique blablabalablabalbalablablalablla je suis long car je suis une description.",
                        presentation: "Aller voir le Neurologue.",
                        pos: [2, 5],
                    },
                    {
                        name: "Geneticien",
                        description: "A cette étape vous devrez aller voir le Généticien afin d'établir un diagnostique blablabalablabalbalablablalablla je suis long car je suis une description.",
                        presentation: "Aller voir le Geneticien.",
                        pos: [6, 5],
                    },
                    {
                        name: "Psychologue",
                        description: "A cette étape vous devrez aller voir le Psychologue afin d'établir un diagnostique blablabalablabalbalablablalablla je suis long car je suis une description.",
                        presentation: "Aller voir le Psychologue.",
                        pos: [10, 5],
                    },
                    {
                        name: "Orthophoniste",
                        description: "A cette étape vous devrez aller voir le Orthophoniste afin d'établir un diagnostique blablabalablabalbalablablalablla je suis long car je suis une description.",
                        presentation: "Aller voir le Orthophoniste.",
                        pos: [14, 5],
                    },
                ]
            }
        },
        connect: {
            type: Array,
            value: function () {
                return [
                    //[parent, child, mode]
                    [
                        "Generaliste", "Neurologue", 0
                    ],
                    [
                        "Generaliste", "Geneticien", 0
                    ],
                    [
                        "Generaliste", "Psychologue", 0
                    ],
                    [
                        "Generaliste", "Orthophoniste", 0
                    ],
                ]
            }
        },
        dimensions: {
            type: Array,
            value: function () {
                return [16, 7]
            }
        }
    },
    
    width: null,
    height: null,
    nodeColorNeutral: "#46464c",
    nodeColorSuccess: "#00babc",
    nodeColorFail: "red",
    strokeColorNeutral: "#46464c",
    strokeColorSuccess: "#00babc",
    strokeColorFail: "red",
    strokeColorCurrent: "#00babc",
    linkColorNeutral: "#46464c",
    linkColorSuccess: "#00babc",
    linkColorFail: "red",
    keychain: [],
    matchChain: [],
    
    addNode: function(obj, coeff, layer, i) {
        var nodeColor;
        var strokeColor;
        if (this.matchChain[obj.name] == 0) {
            nodeColor = this.nodeColorNeutral;
            strokeColor = this.strokeColorNeutral;
        } else if (this.matchChain[obj.name] == 1) {
            nodeColor = this.nodeColorSuccess;
            strokeColor = this.strokeColorSuccess;
        } else if (this.matchChain[obj.name] == 2) {
            nodeColor = this.nodeColorFail;
            strokeColor = this.strokeColorFail;
        }
        /*var simpleText = new Konva.Text({
            x: obj.pos[0] * coeff[0] - this.radius / 1.5,
            y: obj.pos[1] * coeff[1]- this.radius / 1.5,
            text: obj.name,
            fontSize: this.radius / 4,
            fontFamily: 'Comic Sans MS',
            fill: 'white'
        });*/
        var node = new Konva.Circle({
            x: obj.pos[0] * coeff[0],
            y: obj.pos[1] * coeff[1],
            radius: Math.min(coeff[0], coeff[1]),
            fill: nodeColor,
            stroke: strokeColor,
            id: obj.name,
            text: obj.name,
            strokeWidth: Math.min(coeff[0], coeff[1]) / 8
        });
        layer.add(node);
        //layer.add(simpleText);
        node.on('click', function () {
            var desc = document.getElementById("desc-diag");
            document.getElementById("description-paragraph").innerHTML = obj.description;
            document.getElementById("status").innerHTML = "<paper-button raised " +
                " onClick=\"document.querySelector('my-parkour-two').changeStatus('" + obj.name + "', \'Success\')\">Success</paper-button>" +
                "<paper-button raised onClick=\"document.querySelector('my-parkour-two').changeStatus('" + obj.name + "', \'Failure\')\">Failure</paper-button>" +
                "<paper-button raised onClick=\"document.querySelector('my-parkour-two').changeStatus('" + obj.name + "', \'ok\')\">Cancel</paper-button>"
                +
                "<paper-button raised onClick=\"document.querySelector('my-parkour-two').changeStatus('" + obj.name + "', \'Reset\')\">Reset</paper-button>";
            desc.open();
        });
        node.on('mouseover', function () {
            var rad = node.radius();
            node.radius(rad + 5);
            var pres = document.getElementById("pres-diag");
            document.getElementById("presentation-paragraph").innerHTML = obj.presentation;
            document.body.style.cursor = 'pointer';
            pres.open();
            layer.draw();
        });
        node.on('mouseleave', function () {
            var rad = node.radius();
            node.radius(rad - 5);
            var pres = document.getElementById("pres-diag");
            document.getElementById("presentation-paragraph").innerHTML = obj.presentation;
            document.body.style.cursor = 'default';
            pres.close();
            layer.draw();
        });
    },
    
    changeStatus: function (id, rep) {
        if (rep == "Success") {
            this.matchChain[id] = 2;
        } else if (rep == "Failure") {
            this.matchChain[id] = 3;
        } else if (rep == "Reset") {
            this.matchChain[id] = 0;
        }
        document.getElementById("desc-diag").close();
        if (rep != 'ok') {
            this.matchChain();
        }
    },
    
    addConnect: function (connect, layer, i) {
        var node1 = layer._getNodeById(connect[0]);
        var node2 = layer._getNodeById(connect[1]);
        var x1, y1, x2, y2, h;
        var linkColor;
        if (this.matchChain[connect[1]] == 0) {
            linkColor = this.strokeColorNeutral;
        } else if (this.matchChain[connect[1]] == 1) {
            linkColor = this.strokeColorSuccess;
        } else if (this.matchChain[connect[1]] == 2) {
            linkColor = this.strokeColorFail;
        }
        h = Math.sqrt(Math.pow(node1.x() - node2.x(), 2) + Math.pow(node1.y() - node2.y(), 2));
        x1 = Math.abs(node1.x() + ((node1.radius() + node1.strokeWidth() / 2) * ((node2.x() - node1.x()) / h)));
        y1 = Math.abs(node1.y() + ((node1.radius() + node1.strokeWidth() / 2) * ((node2.y() - node1.y()) / h)));
        x2 = Math.abs(node2.x() + ((node1.radius() + node1.strokeWidth() / 2) * ((node1.x() - node2.x()) / h)));
        y2 = Math.abs(node2.y() + ((node1.radius() + node1.strokeWidth() / 2) * ((node1.y() - node2.y()) / h)));
        var line = new Konva.Line({
            points: [x1, y1, x2, y2],
            stroke: linkColor,
            strokeWidth: this.radius / 10
        });
        layer.add(line);
    },
    
    drawConnect: function (layer) {
        for (var i = 0; i < this.connect.length; i++) {
            this.addConnect(this.connect[i], layer, i);
        }
    },
    
    getMatch: function () {
        for (var i = 0; i < this.steps.length; i++) {
            this.matchChain[this.steps[i].name] = this.keychain[i];
        }
    },
    
    drawNodes: function () {
        var stage = new Konva.Stage({
            container: "container",
            width: parseInt(document.getElementById('container').style.width),
            height: parseInt(document.getElementById('container').style.height)
        });
        this.width = stage.width();
        this.height = stage.height();
        console.log(document.getElementById('container').style.width);
        var layer = new Konva.Layer();
        var coeff = [];
        coeff.push(this.width / this.dimensions[0]);
        coeff.push(this.height / this.dimensions[1]);
        for (var i = 0; i < this.steps.length; i++) {
            this.addNode(this.steps[i], coeff, layer, i);
        }
        this.drawConnect(layer);
        stage.add(layer);
    },
    
    ready: function () {
        this.keychain = ["0", "1", "0", "0", "1"];
        this.getMatch();
        this.drawNodes();
    }
});
