        Polymer({
            is: "ktree-anoma",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: 'Anomalies chromosomiques mises en évidence chez des enfants avec TSA',
                                presentation: '<p class=\" summary\"><b class=\"romanumb\">I</b> Anomalies chromosomiques mises en évidence chez des enfants avec TSA</p><p class=\" summary\"><b class=\"romanumb\">II</b> Trisomie 21</p><p class=\" summary\"><b class=\"romanumb\">III</b> Délétion 22q11 (Syndrome de Di George)</p><p class=\" summary\"><b class=\"romanumb\">IV</b> Syndrome de Williams-Beuren</p><p class=\" summary\"><b class=\"romanumb\">V</b> Syndrome 47 XXY</p><p class=\" summary\"><b class=\"romanumb\">VI</b> Microdélétions ou microduplications récurrentes récemment identifiées</p><p class=\" summary\"><b class=\"romanumb\">VII</b> Neuroligines 3 et 4 (Chromosome X)</p><p class=\" summary\"><b class=\"romanumb\">VIII</b> Shank 3 (22q13.3)</p>',
                                pos: [5, 4],
                                label: "I",
                                enfant: "ktree-anogchro",
                            },
                            {
                                name: 'Trisomie 21',
                                presentation: '<small class="subtitle redsmall">(HAS,Paragraphe 3.4.2, p.43)</small><p class="textktree>Il n’a pas été identifié d’études récentes concernant la relation entre <a href="https://fr.wikipedia.org/w/index.php?search=trisomie 21" target="_blank">trisomie 21</a> et autisme. D’après Fombonne, les données ne suggèrent pas d’association particulière entre trisomie 21 et autisme (si on prend en compte le facteur de confusion qu’est le retard mental lui aussi facteur de risque d’autisme). Dans la pratique, une épilepsie sévère et précoce (dont des spasmes infantiles diagnostiqués tardivement et résistants au traitement) et un retard mental plus sévère sont des facteurs de risque d’apparition d’autisme chez les enfants trisomiques 21.</p>',
                                pos: [5, 6],
                                label: "II",
                                enfant: "",
                            },
                            {
                                name: 'Délétion 22q11 (Syndrome de Di George)',
                                presentation: '<small class="subtitle redsmall">(HAS,Paragraphe 3.4.2, p.43)</small><p class="textktree">La délétion 22q11 est responsable du syndrome microdélétionnel le plus fréquent. Sa prévalence est de l’ordre de 1/4 000 naissances vivantes. Cliniquement, elle est caractérisée par l\'association de plusieurs malformations : vélopalatines, cardiaques, hypoplasie du thymus et des parathyroïdes, rénales, orthopédiques, et d’une dysmorphie du visage discrète mais caractéristique. Des troubles des apprentissages sont très fréquents malgré des capacités de raisonnement préservées chez la majorité des enfants. Si le QI global est le plus souvent supérieur à 70, des dissociations importantes des fonctions cognitives sont très fréquentes, avec des difficultés particulières sur le traitement visuospatial et des troubles d’expression orale en partie liés à une insuffisance vélaire. La prévalence des TSA dans ce syndrome a été estimée à 20 % (114). Le risque de schizophrénie est aussi accru.</p>',
                                pos: [3, 5.5],
                                label: "III",
                                enfant: "",
                            },
                            {
                                name: 'Syndrome de Williams-Beuren',
                                presentation: '<small class="subtitle redsmall">(HAS,Paragraphe 3.4.2, p.43)</small><p class="textktree">Le syndrome de Williams-Beuren est une maladie génétique rare due à une microdélétion chromosomique située dans la région chromosomique 7q11.23. La prévalence est de 1/20 000 naissances. Le syndrome est caractérisé par une anomalie du développement qui associe des malformations cardiaques dans 75 % des cas (sténose aortique supravalvulaire le plus souvent), un retard du développement psychomoteur, une dysmorphie du visage évocatrice (faciès d’elfe) et un profil cognitif et comportemental spécifique. Le langage est très particulier, avec des compétences lexicales et syntaxiques préservées mais un déficit de la pragmatique qui est la composante communicative du langage prenant en compte le contexte. La prévalence des TSA dans le syndrome de Williams-Beuren est de 7 à 15 % (115,116).</p>',
                                pos: [2, 4],
                                label: "IV",
                                enfant: "",
                            },
                            {
                                name: 'Syndrome 47 XXY',
                                presentation: '<small class="subtitle redsmall">(HAS,Paragraphe 3.4.2, p.43)</small><p class="textktree">La présence d\'un chromosome Y supplémentaire ne s\'accompagne pas de traits physiques particuliers en dehors d\'une taille souvent supérieure à la moyenne. Si les capacités cognitives sont dans des valeurs normales, des difficultés dans les apprentissages et plus rarement de troubles du comportement peuvent être présents. Des comportements autistiques ont été rapportés chez certains enfants. </p>',
                                pos: [3, 2.5],
                                label: "V",
                                enfant: "",
                            },
                            {
                                name: 'Microdélétions ou microduplications récurrentes récemment identifiées',
                                presentation: '<small class="subtitle redsmall">(HAS,Paragraphe 3.4.2, p.43)</small><p class="textktree">Depuis l’introduction des techniques de micropuces d’ADN comme la CGH-arrays (hybridation génomique comparative), de nombreux microremaniements génomiques ont été mis en évidence chez des enfants avec TSA, surtout lorsque le TSA est associé à une anomalie du développement ou à un syndrome malformatif. Ces anomalies génomiques ne comportent en général aucun phénotype particulier ou il est insuffisamment connu pour que des recherches ciblées sur les régions chromosomiques en cause puissent être efficaces (duplication maternelle de la région 15q11-q13 ; délétion terminale 22q13 ; délétion 16p11 ; duplication 17p11.2 ou syndrome de Potocki-Lupski ; délétion 2q37 ; délétion 7q31 ; délétions/duplications du chromosome X).</p><p class="textktree">Les anomalies les plus récurrentes sont cependant actuellement de mieux en mieux définies. De nombreux autres chromosomes sont impliqués dans des microremaniements pouvant donner parfois des troubles autistiques le plus souvent associés à un retard mental, des éléments dysmorphiques et des malformations.</p><p class="textktree">Il importe, lors de la découverte d\'un microremaniement chez un patient autiste, d\'effectuer la recherche chez les deux parents. L\'anomalie peut être reconnue comme responsable si le remaniement est considéré comme responsable d\'autisme dans la littérature et si aucun des parents n\'est porteur de l\'anomalie. Si un des deux parents est porteur du remaniement et est asymptomatique, il peut s\'agir d\'un variant rare génomique sans lien avec le trouble autistique ou d\'une anomalie à pénétrance incomplète.  </p>',
                                pos: [5, 2],
                                label: "VI",
                                enfant: "",
                            },
                            {
                                name: 'Neuroligines 3 et 4 (Chromosome X)',
                                presentation: '<small class="subtitle redsmall">(HAS,Paragraphe 3.4.2, p.43)</small><p class="textktree">En 2003, des mutations dans les gènes des Neuroligine 3 (NLGN3 en Xq13) et Neuroligine 4 (NLGN4 en Xp22.33) ont été retrouvées pour la première fois chez des enfants avec autisme. Les neuroligines sont des protéines neuronales transmembranaires impliquées dans la formation des synapses. Le phénotype des patients avec une mutation des neuroligines est très hétérogène. Les sujets n\'ont pas de dysmorphie particulière et peuvent avoir aussi bien un syndrome d\'Asperger qu\'un autisme avec retard mental ou un retard mental isolé.</p><p class="textktree">La recherche de mutations dans les gènes des neuroligines 3 et 4 a fait l’objet de neuf publications (117-125). Pour une population de 861 patients autistes, l’existence d’une mutation à l’état hétérozygote a été retrouvée chez 7 sujets (0,8 %). </p><p class="textktree">La faible implication des neuroligines 3 et 4 dans le diagnostic des enfants avec autisme n\'est pas en faveur d\'une recherche systématique des mutations de ces gènes, en dehors d\'une histoire familiale d\'hérédité récessive liée au chromosome X. </p>',
                                pos: [7, 2.5],
                                label: "VII",
                                enfant: "",
                            },
                            {
                                name: 'Shank 3 (22q13.3)',
                                presentation: '<p class="textktree">Le gène Shank3 est localisé sur la partie terminale du chromosome 22 dans la région 22q13.3. Le gène code pour une protéine qui interagit avec les neuroligines et joue un rôle dans le développement des synapses.</p><p class="textktree">La délétion de la région 22q13.3 est connue pour être responsable de retard mental, d\'altération du langage et d\'autisme. Les premières mutations du gène SHANK3 ont été retrouvées en 2006 chez deux patients. Un autre patient avec un syndrome d\'Asperger avait une duplication du gène.</p><p class="textktree">De nombreux autres gènes ont été incriminés, mais sont considérés aujourd’hui comme des facteurs de prédisposition/susceptibilité à l’autisme : Neurexine 1 (2p16.3) ; MECP 2 (Xq28) ; PTEN (10q23.31); ASMT (Xp22.32); CNTN4 (3p26.3); TM4SF2 (Xp11.4); CNTNAP2 (7q35-q36) ; IL1RAPL1 (Xp22.1-p21.3).</p>',
                                pos: [8, 4],
                                label: "VIII",
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
                                "Anomalies chromosomiques mises en évidence chez des enfants avec TSA", 'Trisomie 21', 0
                            ],
                            [
                                "Anomalies chromosomiques mises en évidence chez des enfants avec TSA", 'Délétion 22q11 (Syndrome de Di George)', 0
                            ],
                            [
                                "Anomalies chromosomiques mises en évidence chez des enfants avec TSA", 'Syndrome de Williams-Beuren', 0
                            ],
                            [
                                "Anomalies chromosomiques mises en évidence chez des enfants avec TSA", 'Syndrome 47 XXY', 0
                            ],
                            [
                                "Anomalies chromosomiques mises en évidence chez des enfants avec TSA", 'Microdélétions ou microduplications récurrentes récemment identifiées', 0
                            ],
                            [
                                "Anomalies chromosomiques mises en évidence chez des enfants avec TSA", 'Neuroligines 3 et 4 (Chromosome X)', 0
                            ],
                            [
                                "Anomalies chromosomiques mises en évidence chez des enfants avec TSA", 'Shank 3 (22q13.3)', 0
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
                        that = document.querySelector('ktree-anoma');
                        if (title != "") {
                            that = document.querySelector('ktree-anoma');
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
                        that = document.querySelector('ktree-anoma');
                        if (title != "") {
                            that = document.querySelector('ktree-anoma');
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
                this.drawNodes();
                document.getElementById("ktreebouton2").innerHTML = "<a><button id=\"boutonactive\" onClick=\"document.querySelector('ktree-selector').showKtree('ktree-anogchro')\">Revenir en arrière</button></a>";
                document.getElementById("menuktree").innerHTML = "<p class=\" summary\"><b class=\"romanumb\">I</b> Anomalies chromosomiques mises en évidence chez des enfants avec TSA</p><p class=\" summary\"><b class=\"romanumb\">II</b> Trisomie 21</p><p class=\" summary\"><b class=\"romanumb\">III</b> Délétion 22q11 (Syndrome de Di George)</p><p class=\" summary\"><b class=\"romanumb\">IV</b> Syndrome de Williams-Beuren</p><p class=\" summary\"><b class=\"romanumb\">V</b> Syndrome 47 XXY</p><p class=\" summary\"><b class=\"romanumb\">VI</b> Microdélétions ou microduplications récurrentes récemment identifiées</p><p class=\" summary\"><b class=\"romanumb\">VII</b> Neuroligines 3 et 4 (Chromosome X)</p><p class=\" summary\"><b class=\"romanumb\">VIII</b> Shank 3 (22q13.3)</p>";
            }
 });
