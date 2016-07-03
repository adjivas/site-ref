        Polymer({
            is: "ktree-selector",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: "Définir l'autisme",
                                description: "Parcour diagnostique généraliste",
                                presentation: "",
                                enfant: "ktree-def",
                                pos: [2, 9],
                            },
                            {
                                name: "Démarche diagnostique et outils validés d’évaluation",
                                description: "Parcour diagnostique2 généraliste",
                                presentation: "",
                                enfant: "",
                                pos: [4, 9],
                            },
                            {
                                name: "Les interventions globales et coordonnées",
                                presentation: '<p style=\"color: #00ff97\">Cette partie (exceptés les points 3 et 4) est issue des recommandations de bonnes pratiques professionnelles publiées par la HAS et l’ANESM en mars 2012 : Autisme et autres troubles envahissants du développement : interventions éducatives et thérapeutiques coordonnées chez l’enfant et l’adolescent. Cette délimitation du thème ne signifie en aucun cas que les interventions proposées aux personnes avec TSA s’arrêtent au passage à l’âge adulte. Les recommandations de bonnes pratiques professionnelles pour les adultes sont en cours de rédaction, et leurs préconisations devront être prises en compte dès leur parution. Dans l’attente de leur publication, il est conseillé de se référer, pour les adultes, aux interventions recommandées pour les enfants en 2012.</p><p style=\"color: #00ff97\">Les interventions évoquées dans les recommandations conjointes HAS-ANESM de 2012 recouvrent les actions directes auprès de la personne avec TSA, mais également les actions indirectes avec et sur leur environnement.</p><p style=\"color: #00ff97\"><b style=\"color: #00ff97\">Elles visent à favoriser notamment le développement du fonctionnement de la personne et l’acquisition de comportements adaptés dans plusieurs domaines</b> (sensoriel et moteur, communication et langage, interactions sociales, cognitif, émotionnel et affectif) ainsi que sa participation sociale, y compris scolaire et professionnelle, son autonomie, son indépendance, ses apprentissages et ses compétences adaptives. Leur objectif est également de réduire les obstacles environnementaux qui accentuent sa situation de handicap et de concourir à son bien-être et à son épanouissement personnel.</p><div class="bgvertf tbleuf">Il est important de rappeler en préalable, comme c’est le cas dans les recommandations de 2012, que : <ul class="tbleuf"><li class="tbleuf">les interventions proposées doivent <b class="tbleuf">respecter la singularité de la personne</b> et de sa famille et tenir compte de leurs priorités </li><li class="tbleuf"><b class="tbleuf">aucune approche éducative ou thérapeutique ne peut prétendre restaurer un fonctionnement normal ou améliorer le fonctionnement et la participation de la totalité des personnes avec TSA.</b> Les recommandations rappellent en effet que : « Les interventions évaluées mettent en évidence une amélioration du quotient intellectuel, des habiletés de communication, du langage, des comportements adaptatifs ou une diminution des comportements problèmes pour environ 50 % des enfants avec TED, avec ou sans retard mental. » Il est donc recommandé d’être particulièrement prudent vis-à-vis d’interventions présentées soit comme permettant de supprimer complètement les manifestations des troubles, voire de guérir totalement les personnes, soit comme exigeant l’exclusivité de l’accompagnement</li><li class="tbleuf"><b class="tbleuf">l’intensité et le contenu des interventions doivent, quel que soit l’âge, être fixés en fonction de considérations éthiques visant à limiter les risques de sous-stimulations ou, au contraire, de surstimulations.</b></li></ul></div><p style=\"color: #00ff97\">Enfin, il convient de souligner, à l’instar des recommandations de 2012, tout l’intérêt d’impliquer les parents, notamment en leur permettant de participer à des séances éducatives et thérapeutiques, à un accompagnement, une formation ou un programme d’éducation thérapeutique, dans l’optique notamment d’assurer la cohérence des modes d’interactions avec leur enfant et la généralisation des acquis .</p><p style=\"color: #00ff97\">Les interventions décrites ici sont présentées de la façon suivante :</p><ul style=\"color: #00ff97\"><li style=\"color: #00ff97\"> tout d’abord, les interventions personnalisées, globales et coordonnées recommandées par l’ANESM et la HAS</li><li style=\"color: #00ff97\">puis les interventions par domaine fonctionnel, extraites des recommandations de la HAS et de l’ANESM</li><li style=\"color: #00ff97\">enfin, les autres interventions existantes, jugées non recommandées ou non consensuelles par l’ANESM et la HAS.</li></ul><div class="bgvertf">Les interventions à prendre en compte par les MDPH et leurs partenaires sont celles ayant fait l’objet d’une validation scientifique ou d’un consensus d’experts (interventions recommandées actuellement). Néanmoins, il convient de préciser l’évolution possible des interventions : de nouvelles méthodes pourront se développer au cours du temps, certaines interventions actuellement non recommandées pourront être validées scientifiquement, faire l’objet d’un consensus… Ce contexte est donc susceptible de modifier le positionnement des professionnels et la prise en compte des interventions à proposer et à recommander</div>',
                                enfant: "ktree-igc",
                                pos: [6, 9],
                            },
                            {
                                name: "Les démarches administratives et sociales",
                                description: "Parcour diagnostique3 généraliste",
                                presentation: "",
                                enfant: "",
                                pos: [8, 9],
                            },
                            {
                                name: "Scolarisation",
                                presentation: '<p style=\"color: #00ff97\">Cette partie (exceptés les points 3 et 4) est issue des recommandations de bonnes pratiques professionnelles publiées par la HAS et l’ANESM en mars 2012 : Autisme et autres troubles envahissants du développement : interventions éducatives et thérapeutiques coordonnées chez l’enfant et l’adolescent. Cette délimitation du thème ne signifie en aucun cas que les interventions proposées aux personnes avec TSA s’arrêtent au passage à l’âge adulte. Les recommandations de bonnes pratiques professionnelles pour les adultes sont en cours de rédaction, et leurs préconisations devront être prises en compte dès leur parution. Dans l’attente de leur publication, il est conseillé de se référer, pour les adultes, aux interventions recommandées pour les enfants en 2012.</p><p style=\"color: #00ff97\">Les interventions évoquées dans les recommandations conjointes HAS-ANESM de 2012 recouvrent les actions directes auprès de la personne avec TSA, mais également les actions indirectes avec et sur leur environnement.</p><p style=\"color: #00ff97\"><b style=\"color: #00ff97\">Elles visent à favoriser notamment le développement du fonctionnement de la personne et l’acquisition de comportements adaptés dans plusieurs domaines</b> (sensoriel et moteur, communication et langage, interactions sociales, cognitif, émotionnel et affectif) ainsi que sa participation sociale, y compris scolaire et professionnelle, son autonomie, son indépendance, ses apprentissages et ses compétences adaptives. Leur objectif est également de réduire les obstacles environnementaux qui accentuent sa situation de handicap et de concourir à son bien-être et à son épanouissement personnel.</p><div class="bgvertf tbleuf">Il est important de rappeler en préalable, comme c’est le cas dans les recommandations de 2012, que : <ul class="tbleuf"><li class="tbleuf">les interventions proposées doivent <b class="tbleuf">respecter la singularité de la personne</b> et de sa famille et tenir compte de leurs priorités </li><li class="tbleuf"><b class="tbleuf">aucune approche éducative ou thérapeutique ne peut prétendre restaurer un fonctionnement normal ou améliorer le fonctionnement et la participation de la totalité des personnes avec TSA.</b> Les recommandations rappellent en effet que : « Les interventions évaluées mettent en évidence une amélioration du quotient intellectuel, des habiletés de communication, du langage, des comportements adaptatifs ou une diminution des comportements problèmes pour environ 50 % des enfants avec TED, avec ou sans retard mental. » Il est donc recommandé d’être particulièrement prudent vis-à-vis d’interventions présentées soit comme permettant de supprimer complètement les manifestations des troubles, voire de guérir totalement les personnes, soit comme exigeant l’exclusivité de l’accompagnement</li><li class="tbleuf"><b class="tbleuf">l’intensité et le contenu des interventions doivent, quel que soit l’âge, être fixés en fonction de considérations éthiques visant à limiter les risques de sous-stimulations ou, au contraire, de surstimulations.</b></li></ul></div><p style=\"color: #00ff97\">Enfin, il convient de souligner, à l’instar des recommandations de 2012, tout l’intérêt d’impliquer les parents, notamment en leur permettant de participer à des séances éducatives et thérapeutiques, à un accompagnement, une formation ou un programme d’éducation thérapeutique, dans l’optique notamment d’assurer la cohérence des modes d’interactions avec leur enfant et la généralisation des acquis .</p><p style=\"color: #00ff97\">Les interventions décrites ici sont présentées de la façon suivante :</p><ul style=\"color: #00ff97\"><li style=\"color: #00ff97\"> tout d’abord, les interventions personnalisées, globales et coordonnées recommandées par l’ANESM et la HAS</li><li style=\"color: #00ff97\">puis les interventions par domaine fonctionnel, extraites des recommandations de la HAS et de l’ANESM</li><li style=\"color: #00ff97\">enfin, les autres interventions existantes, jugées non recommandées ou non consensuelles par l’ANESM et la HAS.</li></ul><div class="bgvertf">Les interventions à prendre en compte par les MDPH et leurs partenaires sont celles ayant fait l’objet d’une validation scientifique ou d’un consensus d’experts (interventions recommandées actuellement). Néanmoins, il convient de préciser l’évolution possible des interventions : de nouvelles méthodes pourront se développer au cours du temps, certaines interventions actuellement non recommandées pourront être validées scientifiquement, faire l’objet d’un consensus… Ce contexte est donc susceptible de modifier le positionnement des professionnels et la prise en compte des interventions à proposer et à recommander</div>',
                                enfant: "",
                                pos: [10, 9],
                            }
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
                document.getElementById('current-ktree').innerHTML = "<" + ktree + "></" + ktree + ">";
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
                        document.getElementById("ktreetext").innerHTML = "<h2 style=\"color: #00ff97\">" + obj.name + ": </h2>" + obj.presentation + "<br/>";
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
                        document.querySelector('ktree-selector').showKtree(obj.enfant);
                    });
                    node.on('click', function () {
                        document.getElementById("ktreetext").innerHTML = "<h2 style=\"color: #00ff97\">" + obj.name + ": </h2>" + obj.presentation + "<br/>";
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
                this.drawNodes();
            }
 });
