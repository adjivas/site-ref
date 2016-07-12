        Polymer({
            is: "ktree-clas",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: 'Classifications',
                                presentation: '<p class=\"textktree\">L’« autisme » renvoie à une catégorie de <b class=\"textktree\">troubles neurodéveloppementaux</b> recouvrant des réalités distinctes et amenant à rechercher des solutions différentes, variées et adaptées aux spécificités propres de chaque situation</p><p class=\"textktree\">Cette partie est consacrée à la description de ces troubles, regroupés sous le nom de « troubles du spectre de l’autisme » (TSA). Cette dénomination tend aujourd’hui à se substituer à celle de troubles envahissants du développement (TED), utilisée jusqu’à présent en référence à la <b class=\"textktree\">Classification internationale des maladies – dixième version (CIM-10)</b>, éditée par <b class=\"textktree\">l’Organisation mondiale de la santé (OMS)</b>. Elle a été retenue par les groupes de conception et de relecture de <a href=\"http://www.cnsa.fr/documentation/cnsa-dta-2016_web.pdf\" target=\"_blank\">ce guide</a>, pour une harmonisation avec la dernière classification internationale de référence, le <b class=\"textktree\">Manuel diagnostique et statistique des troubles mentaux – cinquième édition (DSM-5)</b>, adoptée en 2013 en remplacement du <b class=\"textktree\">DSM-IV</b> et traduite en français en 2015. Ces deux appellations, TED et TSA, décrivent la même entité clinique.</p>',
                                pos: [10, 7.5],
                                label: "V",
                                enfant: "ktree-def",
                            },
                            {
                                name: "Les troubles envahissants du développement dans la CIM-10",
                                presentation: "<p class=\"textktree\">Dans la CIM-1010, l’autisme est classé parmi les TED, qu’elle définit comme suit : « [les TED sont un] groupe de troubles caractérisés par des altérations qualitatives des interactions sociales réciproques et des modalités de communication, ainsi que par un répertoire d’intérêts et d’activités restreint, stéréotypé et répétitif. Ces anomalies qualitatives constituent une caractéristique envahissante du fonctionnement du sujet, en toutes situations. » Les TED se caractérisent par la grande diversité de leur expression sur le plan symptomatologique. Pour mieux appréhender cette diversité clinique, la CIM-10 propose huit catégories de TED, identifiées de la façon suivante :</p><ul><li class=\"textktree\"><b class=\"textktree\">Autisme infantile </b>: c’est un trouble envahissant du développement qui apparaît avant trois ans . Il altère le domaine de la communication, des interactions sociales et le domaine du comportement, des activités et des intérêts, prenant un caractère restreint, répétitif et stéréotypé</li><li class=\"textktree\"><b class=\"textktree\">Autisme atypique </b>: il se distingue de l’autisme infantile par l’âge de survenue plus tardif ou par la symptomatologie incomplète ou par les deux ensembles</li><li class=\"textktree\"><b class=\"textktree\">Syndrome de Rett </b>: un syndrome génétique spécifique</li><li class=\"textktree\"><b class=\"textktree\">Autre trouble désintégratif de l’enfance </b>: trouble caractérisé par un développement normal jusqu’à deux ans, suivi d’une perte des acquisitions, associée à des anomalies qualitatives de fonctionnement social</li><li class=\"textktree\"><b class=\"textktree\">Hyperactivité associée à un retard mental et à des mouvements stéréotypés </b>: il s’agit d’une hyperactivité motrice sévère associée à un retard mental, un comportement et des activités répétitives et stéréotypées, sans altération sociale de type autistique</li><li class=\"textktree\"><b class=\"textktree\">Syndrome d’Asperger </b>: ce TED est marqué par l’absence de retard du développement cognitif et du langage, avec atteinte du fonctionnement social du comportement et des activités comme dans l’autisme typique </li><li class=\"textktree\">Autres troubles envahissants du développement</li><li class=\"textktree\">Trouble envahissant du développement, sans précision (catégorie diagnostique résiduelle pour des troubles évoquant cliniquement un TED, mais pour lesquels on manque d’information).</li></ul><p class=\"textktree\">La distinction entre les différentes catégories de TED est en partie fondée sur l’âge d’apparition, les signes cliniques (l’association ou non à un retard mental, à un trouble du langage) ou sur la présence d’une atteinte génétique (ex. : syndrome de Rett). L’autisme représente environ le tiers des TED, et le syndrome d’Asperger moins de 10 % (étude épidémiologique de Fombonne, 2009)</p><div class=\"bgblue\"><p class=\"textktree\"><h3 class=\"subktree\">Point de vigilance</h3>L’utilisation de la CIM-10 permet d’identifier différentes catégories de troubles. Néanmoins, les troubles peuvent évoluer et retentir différemment sur les fonctionnements, les capacités et les activités des personnes. La symptomatologie clinique peut en effet être différente selon les individus, ainsi que les retentissements fonctionnels. Par ailleurs, pour un même individu, les troubles peuvent évoluer, parfois apparaître ou régresser, retentissant alors de manière différente sur les capacités de fonctionnement de la personne</p></div><p class=\"textktree\">Tout diagnostic doit être posé en se référant à la CIM-10. En complément de cette classification, la démarche peut recourir au DSM-5, autre classification internationale de référence.</p><p class=\"textktree\">D’autres classifications sont cependant encore utilisées par certains professionnels, comme :</p><ul><li class=\"textktree\">La classification internationale d’origine américaine (DSMIV-TR) : elle apporte des éléments utiles sur le plan clinique et dans le cadre de la recherche ; elle peut être utilisée en complément de la classification de référence (CIM-10)</li><li class=\"textktree\">La classification française (CFTMEA-R) : son apport, sur le plan clinique, ne fait pas consensus. Les termes « psychose précoce », « psychose infantile » et « psychose infantile précoce » antérieurement utilisés ne sont plus acceptés au vu des connaissances actuelles. Tout diagnostic figurant en classification CFTMEA doit être mentionné en équivalent CIM-10</li></ul><p class=\"textktree\">L’expérience clinique a montré par ailleurs de grandes incertitudes sur les limites et la différenciation clinique des différentes catégories de TED. Certains éléments sont discutés au sein de la communauté scientifique :</p><ul><li class=\"textktree\">La validité de la distinction entre le syndrome d’Asperger et l’autisme sans retard mental, dit « Autisme de haut niveau » est toujours discutée sur le plan scientifique</li><li class=\"textktree\">Les catégories « Autisme atypique », « Autres TED » et « TED, sans précision » (CIM-10) ont des limites imprécises dont les relations avec l’autisme infantile sont discutées</li><li class=\"textktree\">les différentes situations cliniques regroupées dans les catégories « Autres TED » et « TED, sans précision » ont donné lieu à des propositions de descriptions (Multiple Complex Developmental Disorders, « dysharmonie multiple et complexe du développement ») non encore validées</li><li class=\"textktree\"> La catégorie des « Troubles désintégratifs de l’enfance » forme un groupe hétérogène dont une description plus précise serait nécessaire du fait de l’existence éventuelle au sein de ce groupe d’encéphalopathies actuellement identifiables.</li></ul>",
                                enfant: "",
                                label: "I",
                                pos: [6, 5.5],
                            },
                            {
                                name: "Les troubles du spectre de l’autisme dans le DSM-5",
                                presentation: '<p class=\"textktree\">Depuis plusieurs années est apparue une tendance à considérer les différentes catégories de TED comme de simples variantes d’une même pathologie avec l’idée d’un continuum d’un même trouble, le « trouble du spectre de l’autisme ». Cette conception a été officialisée en 2013 par le DSM-5 et rend compte de l’étendue et de l’hétérogénéité des troubles. Elle est utilisée en complément de la CIM-10, classification de référence des pathologies.</p><p class=\"textktree\">L’autisme est situé dans un chapitre du DSM-5 intitulé « Troubles neurodéveloppementaux ». Les critères ont été revus : ils réunissent désormais les troubles des interactions et les troubles de la communication et prennent en compte les particularités sensorielles, cognitives et langagières observées chez un grand nombre de personnes avec TSA. Leur possible association à une pathologie médicale, génétique ou à un autre trouble du développement est également spécifiée</p><p class=\"textktree\">Les critères DSM-5 apparaissent moins sensibles et plus spécifiques que ceux du DSM-IV. Ils ne retiennent que 75 à 90 % des TED inclus par le DSM-IV. C’est parmi les diagnostics de syndrome d’Asperger et de TED non spécifié (TED NOS) du DSM-IV que se trouvent le plus de cas non retenus par les critères DSM-5.</p>',
                                pos: [8, 5.5],
                                label: "II",
                                enfant: ""
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
                                "Classifications", 'Les troubles envahissants du développement dans la CIM-10', 0
                            ],
                            [
                                "Classifications", 'Les troubles du spectre de l’autisme dans le DSM-5', 0
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
            nodeColorNeutral: "#5cc666",
            nodeColorSuccess: "#373f52",
            nodeColorFail: "red",
            strokeColorNeutral: "#373f52",
            strokeColorSuccess: "#5cc666",
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
                        that = document.querySelector('ktree-clas');
                        if (title != "") {
                            that = document.querySelector('ktree-clas');
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
                        that = document.querySelector('ktree-clas');
                        if (title != "") {
                            that = document.querySelector('ktree-clas');
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
                fond.style.backgroundColor = '#5cc666';
                this.drawNodes();
                document.getElementById("ktreebouton2").innerHTML = "<a><button id=\"boutonactive\" onClick=\"document.querySelector('ktree-selector').showKtree('ktree-def')\">Revenir en arrière</button></a>";
                document.getElementById("menuktree").innerHTML = "<p class=\" summary\"><b class=\"romanumb\">I</b> Classifications</p><p class=\" summary\"><b class=\"romanumb\">II</b> Les troubles envahissants du développement dans la CIM-10</p><p class=\" summary\"><b class=\"romanumb\">III</b> Les troubles du spectre de l’autisme dans le DSM-5</p>";
            }
 });
