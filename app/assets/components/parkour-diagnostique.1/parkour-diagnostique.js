        Polymer({
            is: "parkour-diagnostique",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: "Comorbidités et troubles associés",
                                presentation: "",
                                pos: [4, 10],
                            },
                            {
                                name: "Comorbidités",
                                presentation: "<h3>Les TSA sont souvent associés à d’autres troubles ou pathologies</h3>",
                                pos: [4, 12],
                            },
                            {
                                name: "Autres troubles neurodeveloppementaux (DSM-5)",
                                presentation: '',
                                pos: [2, 8],
                            },
                            {
                                name: "Déficience intellectuelle",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.3.2, p.32)</small><p><b style="text-decoration: underline">Les données épidémiologiques sont issues d’études étrangères en l’absence d’études épidémiologiques françaises actuelles. </b></p><p>Dans l’ensemble des TED, la proportion de l’association avec la déficience intellectuelle est de 30 % (43).	La prévalence des TED avec déficience intellectuelle peut être estimée entre 20 et 30/10 000.</p><p>Dans la revue de Fombonne 2003, la proportion médiane de sujets avec autisme sans retard intellectuel est de 30 % (extrêmes : 0 % - 60 %), la proportion de sujets ayant un retard léger ou modéré est de 30 % (extrêmes : 6,6 % - 100 %), et la proportion de sujets ayant un retard profond est de 40 % (0 % - 81,3 %) (16). La prévalence de l’association d’une déficience intellectuelle avec les TED non spécifiés est bien plus faible : 12 % (43). Par définition, il n’y a pas de déficience intellectuelle dans les syndromes d’Asperger (43). </p>Dans la population diagnostiquée et prise en charge pour une déficience intellectuelle, la proportion de l’association avec l’autisme et l’ensemble des TED varie avec les études entre 20 % et 40 % (44). A la suite de Lorna Wing, la majorité des auteurs observent une augmentation de la prévalence de l’autisme en proportion inverse du niveau de QI.<p>L’étude chez les adolescents de Bryson et al. (44) indique que moins de la moitié de ceux chez lesquels un autisme est confirmé avait reçu auparavant ce diagnostic ou celui de « traits autistiques ». Ceci est à mettre sur le compte d’une perte de spécificité des outils diagnostiques chez les personnes avec faible QI.</p><p>Inversement, certaines caractéristiques cliniques communes à l’autisme et à la déficience intellectuelle, comme les comportements stéréotypés ou autoagressifs (45) peuvent faire porter le diagnostic d’autisme par erreur.</p>',
                                pos: [2, 6],
                            },
                            {
                                name: "Troubles de la communication",
                                presentation: "",
                                pos: [2, 4],
                            },
                            {
                                name: "Troubles Dys",
                                presentation: "",
                                pos: [2, 2],
                            },
                            {
                                name: "Troubles neuropsychiatriques",
                                presentation: '',
                                pos: [8, 10],
                            },
                            {//<h1 class="text-center"><FONT size="6">Prévalence</FONT> <br><small class="subtitle">(HAS,Paragraphe 3.3.4, p.34)</small></h1>
                                name: "Troubles neurologiques",
                                presentation: '',
                                pos: [6, 8],
                            },
                            {
                                name: "Epilepsie",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.3.3, p.33)</small><p>La prévalence de l’épilepsie dans les TED serait de 20 % à 25 % (extrêmes : 5 - 40 %) (46), alors que la prévalence de l’épilepsie dans la population générale serait de 0,5 à 1 % (47).				La prévalence de l’épilepsie dans les TED était de 21,4 % chez les sujets ayant un QI < 70 versus 8 % chez les sujets ayant un QI > 70</p><p> le sexe : une méta-analyse récente à partir de 14 études portant sur 1 530 sujets ayant un TED (dont 1 191 garçons et 339 filles) a mis en évidence une forte diminution du risque d’épilepsie chez les garçons par rapport aux filles (RR : 0,549 ; IC 95 % : 0,45 - 0,66 ; p < 0,001) (48). Les études étaient homogènes. La prévalence de l’épilepsie dans les TED était de 34,5 % chez les filles versus 18,5 % chez les garçons </br>l’âge : l’incidence de l’épilepsie dans les TED a une répartition bimodale avec un premier pic chez les enfants préscolaires et un deuxième pic à l’adolescence (16)</p><p>Le type de trouble envahissant du développement : la prévalence de l’épilepsie serait de 4 % dans le syndrome d’Asperger (49) ; de 77 % dans le trouble désintégratif de l’enfance (50) ; de 90 % dans le syndrome de Rett (51,52).</p><p>Il n’y a pas de données concernant la prévalence des TED dans l’épilepsie (46). Des antécédents de spasmes infantiles ont été rapportés chez les enfants avec TED (46). Des antécédents de crises comitiales non provoquées dans la première année de vie autres que des spasmes infantiles ont été rapportés dans une petite série de cas finlandais (53).</p>',
                                pos: [7, 7],
                            },
                            {
                                name: "Troubles psychiatriques",
                                presentation: '<h1>Prévalence <small class="subtitle">(HAS,Paragraphe 3.3.4, p.34)</small></h1><p>Dans une revue non systématique des études de suivi longitudinal de personnes avec autisme de haut niveau ou avec syndrome d’Asperger (6 études, 123 patients), la fréquence des troubles psychiatriques à l’âge adulte était de 11 % à 67 % (54). Dans une série récente d’adultes avec TSA, la fréquence des troubles psychiatriques au moment de l’évaluation ou dans les 12 mois précédents était de 75 % (55) (tableau 6 et annexe 9 – tableau 1). Ces données de fréquence ne peuvent pas être considérées comme une estimation de la prévalence des troubles psychiatriques compte tenu des problèmes d’échantillonnage et des biais de sélection des cas inhérents à ce type d’études ainsi que de l’éventail des critères diagnostiques des troubles psychiatriques utilisés (54).</p><p>Le trouble psychiatrique serait unique dans 32 % des cas et serait double ou multiple dans 27 % des cas chez des adultes avec autisme de haut niveau. Si un retard mental est associé à l’autisme, le trouble psychiatrique serait unique dans 37 % des cas et serait double dans 10 % des cas (56,57).</p>',
                                pos: [8, 6],
                            },
                            {
                                name: "Troubles de l’humeur",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.3.4, p.35)</small><p>La dépression chez les personnes avec autisme ou avec syndrome d’Asperger a fait l’objet d’une revue systématique récente. En l’absence d’études longitudinales en population pour déterminer l’incidence de la dépression sur toute la vie, les résultats sont issus d’études correspondant à des descriptions de cas uniques ou à des séries de cas (différant par leur taille, la période d’étude, l’âge des sujets, les critères diagnostiques et les méthodes d’échantillonnage) et ne permettant pas de généralisation. Les auteurs ont insisté sur la difficulté diagnostique de la dépression chez ces personnes (62) .</p><p>Dans une étude chez des enfants avec autisme, il a été rapporté des troubles de l’humeur à type de trouble dépressif caractérisé (traduction en français du terme anglo-saxon « major ») dans 20 % à 30 % des cas, de dysthymies, de troubles bipolaires 2 %, d’hypomanies, de manies (64).</p><p>Des troubles bipolaires ont été observés dans 2 % des cas chez des adultes avec autisme (QI > 70) (64) et dans 6 % des cas chez des adultes avec syndrome d’Asperger et dans 9 % des cas chez des adultes avec autisme atypique (65).</p>',
                                pos: [9, 7],
                            },
                            {
                                name: "Troubles anxieux",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.3.4, p.36)</small><p>troubles anxieux les plus fréquemment rapportés chez les enfants avec autisme seraient les troubles obsessionnels compulsifs et les phobies (64).</p><p>Il a été mis en évidence dans une étude que le niveau d’anxiété est significativement plus élevé chez des adultes avec retard mental et autisme que chez des adultes avec retard mental sans autisme (66).</p>',
                                pos: [10, 8],
                            },
                            {
                                name: "Troubles psychotiques",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.3.4, p.37)</small><p>L’association entre schizophrénie et TED, en particulier l’autisme atypique, est toujours un sujet de recherche, comme le montre la revue de Rapoport et al. (71) concernant la schizophrénie à début précoce (forme rare et sévère de schizophrénie). </p><p>Des troubles psychotiques ont été rapportés chez 5 % à 12 % des adultes avec TSA (55,67) (tableau 8 et annexe 9 - tableau 3).</p><p>Aucun trouble psychotique n’a été retrouvé dans l’étude sur des adolescents avec syndrome d’Asperger de Ghaziuddin et al. (68), ni dans les deux études sur des adultes avec autisme avec ou sans retard mental de Melville et al. et de Leyfer et al. (56,64). Dans une série de 163 adolescents et adultes avec autisme, un seul cas de schizophrénie a été rapporté (0,6 %), résultat globalement comparable à la fréquence de la schizophrénie dans la population générale (69).</p><p>Une schizophrénie a été observée dans 2 % des cas chez des adultes avec autisme de haut niveau (57) ou avec syndrome d’Asperger (65), et dans 4 % des cas chez des adultes avec autisme atypique (65).Des troubles schizophréniques ont été observés dans 30 % des cas dans la trajectoire vie entière de personnes avec autisme atypique (70).</p>',
                                pos: [13, 2],
                            },
                            {
                                name: "Catatonie",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.3.4, p.37)</small><p>La fréquence de la catatonie dans les TED serait de 6 % après l\'âge de 15 ans. Elle augmente avec l\'âge (72,73). </p>',
                                pos: [13, 4],
                            },
                            {
                                name: "Syndrome de Gilles de la Tourette",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.3.4, p.37)</small><p>La fréquence du syndrome de Gilles de la Tourette rapporté dans les études a été de 2 % chez les adultes avec autisme et retard mental (61), 5 % chez les adultes avec autisme sans retard mental (57) et de 10 % chez des enfants et adolescents avec TED (74).</p>',
                                pos: [13, 6],
                            },
                            {
                                name: "TDAH",
                                presentation: '',
                                pos: [13, 8],
                            },
                            {
                                name: "Anomalies génétiques et chrosomiques",
                                presentation: '',
                                pos: [13, 10],
                            },
                            {
                                name: "Syndromes génétiques associées aux TSA",
                                presentation: '<p>Syndromes génétiques qui incluent dans leur phénotype la possibilité de TSA</p>',
                                pos: [13, 12],
                            },
                            {
                                name: "Syndrome de Rett",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.4, p.40)</small><p>Le syndrome de Rett ne touche quasiment que les filles. Sa prévalence est de l’ordre de 1/10 000 à 1/15000. Les caractéristiques très particulières du phénotype ont conduit à une identification spécifique du syndrome dans les TED par l’American Psychiatric Association, DSM-IV (paragraphe 2.2.3 et annexe 6). Des mutations de gène MECP2 sont responsables du syndrome dans près de 90 % des filles ayant un tableau clinique typique.</p><p>La majorité des filles atteintes sont polyhandicapées, sans marche ni langage, mais certains enfants peuvent présenter des formes moins sévères ou moins typiques.</p>',
                                pos: [13, 14],
                            },
                            {
                                name: 'Le syndrome de l’X-fragile',
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.4, p.40)</small><p>Le syndrome de l\’X-fragile touche garçons et filles. La prévalence de la maladie dans la population générale est estimée à 1/5 000 chez les garçons et 1/8 000 chez les filles.</p><p>Le syndrome de l\’X-fragile est lié à la mutation du gène FMR1 situé dans la région Xq27.3 sur le chromosome X. Les mutations sont dues à une expansion d\’un triplet nucléotidique CGG. Le diagnostic est suspecté à l\’examen clinique et confirmé par l\’analyse moléculaire. L\’aspect du visage est particulier et évocateur du diagnostic chez les garçons présentant un retard mental, cet aspect est cependant évolutif avec l\'âge. La dysmorphie faciale est associée à une hyperlaxité ligamentaire et, chez les garçons, à une macroorchie d\’apparition secondaire. La plupart des garçons atteints de l\'affection ont un QI inférieur à 50, alors que les filles ont un retard mental beaucoup plus modéré, leur QI allant de 70 à 85.</p><p>Des tableaux cliniques beaucoup moins sévères peuvent se voir lorsque l’anomalie génétique n\’est pas homogène, mais présente à l\’état de mosaïque somatique (double population de cellules, certaines normales et d\’autres porteuses de l\’anomalie génique).</p><p>Sur le plan comportemental, au premier contact, le garçon avec un X-fragile (non-autiste) semble particulièrement embarrassé dans les interactions sociales directes et envahi par ses émotions, avec un regard fuyant caractéristique, pris à tort pour des signes autistiques, mais dans un environnement sécurisant, la relation duelle est habituellement de grande qualité avec un réel intérêt social et affectif.</p><p>Malgré tout, on peut retenir raisonnablement que 10 à 25 % des enfants avec un X-fragile ont un autisme. Inversement, la prévalence de l\’X-fragile dans l\’autisme est située entre 0 et 8,1 % (analyse de 8 études) (16).</p> ',
                                pos: [10, 12],
                            },
                            {
                                name: "Sclérose tubéreuse de Bourneville",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.4, p.41)</small><p>La prévalence de la STB des enfants et adolescents de moins de 20 ans était de 3,5/10 000. La prévalence de l\’autisme dans la STB était de 16 % (7/44). (108)</p><p>La prévalence de la STB chez les enfants atteints d\’autisme ou de TED était de 0,9 % (7/753) (108). La sclérose tubéreuse de Bourneville est une maladie autosomique dominante dont la prévalence est estimée à 1/10 000. Dans les deux tiers des cas, la maladie est accidentelle. Le reste des cas est hérité d’un des deux parents. L\'expressivité de la maladie est variable et sa pénétrance complète.</p><p>Deux gènes, suppresseurs de tumeurs, TSC1 (région chromosomique 9q34) et TSC2 (région chromosomique 16p13), codant respectivement pour l\’hamartine et la tubérine, sont à l\’origine de la sclérose tubéreuse de Bourneville.</p><p>La maladie est caractérisée par une atteinte multiviscérale. On note une prédominance des lésions cutanées et cérébrales. L’épilepsie (entre 70 % et 93%) et le retard mental (entre 50 % et 80 %) sont les signes neurologiques les plus fréquents.</p><p>Les atteintes cutanées sont rarement le premier motif de consultation (taches hypomélaniques ou achromiques, angiofibromes, tumeurs de Koënen des ongles). Les taches achromiques peuvent être présentes dès la naissance ou apparaître la première année de vie. Parfois suspectées à l\’examen clinique, elles doivent être recherchées systématiquement par un examen cutané à la lumière de Wood.</p><p>Des critères de diagnostic ont été établis en 1998. Le diagnostic de certitude repose sur l\’association de deux critères majeurs ou d\'un critère majeur et de deux critères mineurs. L\’étude moléculaire des deux gènes en cause est réalisable si nécessaire.</p><p>La prévalence de la STB dans l\’autisme est comprise entre 0 % et 3,8 % (10 études) (16).L\’autisme survient principalement chez les enfants ayant développé un syndrome de West (spasmes infantiles) ou une épilepsie précoce et active.</p>',
                                pos: [11, 14],
                            },
                            {
                                name: "Neurofibromatose type 1",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.4, p.42)</small><p>La NF1 est une autre neuroectodermose autosomique dominante, causée par une mutation du gène NF1, situé sur le chromosome 17. Sa prévalence est estimée entre 1/3 000 et 1/4 000. La maladie est caractérisée par des anomalies dermatologiques, des tumeurs du système nerveux central et des difficultés d’apprentissage.</p><p>Si le diagnostic est basé sur des critères cliniques, il peut être confirmé par une étude moléculaire du gène NF1.</p><p>Les seules données identifiées sont celles de la revue de Fombonne de 2003 dans laquelle la prévalence médiane de la NF1 dans l’autisme était de 0 (extrêmes : 0 - 1,4 %) (6 études). Ce taux n’excède pas le taux attendu de la NF1 dans la population des enfants avec un autisme dans l’hypothèse d’une indépendance des deux pathologies (16). </p>',
                                pos: [11, 14],
                            },
                            {
                                name: "Syndrome d’angelman",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.4, p.42)</small><p>Le syndrome est causé par la perte du gène UBE3A transmis par la mère, situé dans la région des syndromes de Prader-Willi / Angelman du chromosome 15 (15q11.2q13). Les étiologies principales du syndrome d\’Angelman sont une délétion maternelle de la région 15q11.2q13, une disomie uniparentale paternelle du chromosome 15 (deux chromosomes 15 hérités du père) ou une mutation dans le gène UBE3A. L\’étude cytogénétique avec sonde fluorescente spécifique de la région 15q11q13 (FISH) permet de confirmer une délétion mais passe à côté des disomies uniparentales qui ne sont détectées qu\’en biologie moléculaire. Le syndrome d’Angelman est caractérisé par un retard de développement, un retard mental sévère, une ataxie (avec marche souvent après trois ans), et un comportement joyeux avec des rires inappropriés. Une épilepsie (statuts d\’absence, myoclonies, crises généralisées tonicocloniques) est un surhandicap fréquent difficile à traiter. Les troubles du sommeil très pénibles pour la famille sont quasi constants.</p><p></p><p>Quarante pour cent des personnes avec un Angelman rempliraient également les critères diagnostiques d\'autisme (109)</p>',
                                pos: [11, 14],
                            },
                            {
                                name: "Syndrome de Prader-Willi",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.4, p.42)</small><p>Le syndrome de Prader-Willi se caractérise par une hypotonie précoce, des difficultés d’alimentation initiales suivies d’une hyperphagie et d’une prise de poids excessive lorsque la prise alimentaire n’est pas contrôlée. L’évolution est marquée par l’existence d’un retard du langage, d’un retard mental le plus souvent léger, de troubles du comportement, d’un hypogonadisme et d’une petite taille.</p><p>Les étiologies principales du syndrome de Prader-Willi sont une délétion de la région « Prader-Willi / Angelman » du chromosome 15 (15q11.2q13) transmise par le père, une disomie uniparentale maternelle (deux chromosomes 15 hérités de la mère) et des défauts d’empreinte parentale. Il existe un diagnostic cytogénétique ou moléculaire pour confirmer le diagnostic de syndrome de Prader-Willi.</p><p>Le risque de développer un TSA est plus fréquent lorsque l’enfant présente une disomie uniparentale plutôt qu’une délétion de la région 15q11.2q13.</p><p>La prévalence a été estimée à 1/29 500 naissances (110).</p><p>La fréquence des TSA dans les études réalisées était de 0 % à 36,5 %.</p>',
                                pos: [11, 14],
                            },
                            {
                                name: "Autres syndromes",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.4, p.42)</small><p>De nombreux autres syndromes peuvent être associés à un TSA :Syndrome alpha-thalassémie/retard mental lié à l’X (ATRX), syndrome de Sotos, myopathie de Duchenne (112,113), syndrome de Cornelia de Lange, hypomélanose d’Ito, syndrome de Joubert, syndrome de Moebius, syndrome de Cohen, dystrophie myotonique de Steinert, syndrome CHARGE, syndrome de Lujan-Fryns, syndrome de Smith-Magenis, syndrome de Timothy. Ces syndromes sont en général repérés lors de la consultation de pédiatrie ou de génétique. </p>',
                                pos: [11, 14],
                            },
                            {
                                name: "Anomalies chromosomiques mises en évidence chez des enfants avec TSA",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.4.2, p.43)</small>',
                                pos: [11, 14],
                            },
                            {
                                name: "Trisomie 21",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.4.2, p.43)</small><p>Il n’a pas été identifié d’études récentes concernant la relation entre trisomie 21 et autisme. D’après Fombonne, les données ne suggèrent pas d’association particulière entre trisomie 21 et autisme (si on prend en compte le facteur de confusion qu’est le retard mental lui aussi facteur de risque d’autisme). Dans la pratique, une épilepsie sévère et précoce (dont des spasmes infantiles diagnostiqués tardivement et résistants au traitement) et un retard mental plus sévère sont des facteurs de risque d’apparition d’autisme chez les enfants trisomiques 21.</p>',
                                pos: [11, 14],
                            },
                            {
                                name: "Délétion 22q11",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.4.2, p.43)</small><p>La délétion 22q11 est responsable du syndrome microdélétionnel le plus fréquent. Sa prévalence est de l’ordre de 1/4 000 naissances vivantes.</p><p>Cliniquement, elle est caractérisée par l\'association de plusieurs malformations : vélopalatines, cardiaques, hypoplasie du thymus et des parathyroïdes, rénales, orthopédiques, et d’une dysmorphie du visage discrète mais caractéristique. Des troubles des apprentissages sont très fréquents malgré des capacités de raisonnement préservées chez la majorité des enfants. Si le QI global est le plus souvent supérieur à 70, des dissociations importantes des fonctions cognitives sont très fréquentes, avec des difficultés particulières sur le traitement visuospatial et des troubles d’expression orale en partie liés à une insuffisance vélaire. La prévalence des TSA dans ce syndrome a été estimée à 20 % (114). Le risque de schizophrénie est aussi accru.</p>',
                                pos: [11, 14],
                            },
                            {
                                name: "Syndrome de Williams-Beuren",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.4.2, p.43)</small><p>Le syndrome de Williams-Beuren est une maladie génétique rare due à une microdélétion chromosomique située dans la région chromosomique 7q11.23. La prévalence est de 1/20 000 naissances. Le syndrome est caractérisé par une anomalie du développement qui associe des malformations cardiaques dans 75 % des cas (sténose aortique supravalvulaire le plus souvent), un retard du développement psychomoteur, une dysmorphie du visage évocatrice (faciès d’elfe) et un profil cognitif et comportemental spécifique. Le langage est très particulier, avec des compétences lexicales et syntaxiques préservées mais un déficit de la pragmatique qui est la composante communicative du langage prenant en compte le contexte. La prévalence des TSA dans le syndrome de Williams-Beuren est de 7 à 15 % (115,116).</p>',
                                pos: [11, 14],
                            },
                            {
                                name: "Syndrome 47 XXY",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.4.2, p.43)</small><p>La présence d\'un chromosome Y supplémentaire ne s\'accompagne pas de traits physiques particuliers en dehors d\'une taille souvent supérieure à la moyenne. Si les capacités cognitives sont dans des valeurs normales, des difficultés dans les apprentissages et plus rarement de troubles du comportement peuvent être présents. Des comportements autistiques ont été rapportés chez certains enfants.</p>',
                                pos: [11, 14],
                            },
                            {
                                name: "Microdélétions ou microduplications récurrentes récemment identifiées",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.4.2, p.43)</small><p>Depuis l’introduction des techniques de micropuces d’ADN comme la CGH-arrays (hybridation génomique comparative), de nombreux microremaniements génomiques ont été mis en évidence chez des enfants avec TSA, surtout lorsque le TSA est associé à une anomalie du développement ou à un syndrome malformatif. Ces anomalies génomiques ne comportent en général aucun phénotype particulier ou il est insuffisamment connu pour que des recherches ciblées sur les régions chromosomiques en cause puissent être efficaces (duplication maternelle de la région 15q11-q13 ; délétion terminale 22q13 ; délétion 16p11 ; duplication 17p11.2 ou syndrome de Potocki-Lupski ; délétion 2q37 ; délétion 7q31 ; délétions/duplications du chromosome X).</p><p>Les anomalies les plus récurrentes sont cependant actuellement de mieux en mieux définies. De nombreux autres chromosomes sont impliqués dans des microremaniements pouvant donner parfois des troubles autistiques le plus souvent associés à un retard mental, des éléments dysmorphiques et des malformations.</p><p>Il importe, lors de la découverte d\'un microremaniement chez un patient autiste, d\'effectuer la recherche chez les deux parents. L\'anomalie peut être reconnue comme responsable si le remaniement est considéré comme responsable d\'autisme dans la littérature et si aucun des parents n\'est porteur de l\'anomalie. Si un des deux parents est porteur du remaniement et est asymptomatique, il peut s\'agir d\'un variant rare génomique sans lien avec le trouble autistique ou d\'une anomalie à pénétrance incomplète.</p>',
                                pos: [11, 14],
                            },
                            {
                                name: "Anomalies géniques mises en évidence chez des enfants avec TSA",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.4.3, p.44)</small><p>Neuroligines et Shank 3 sont deux gènes majeurs d’autisme dont les mutations sont directement responsables d’autisme non syndromique.</p>',
                                pos: [11, 14],
                            },
                            {
                                name: "Neuroligines 3 et 4 (Chromosome X)",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.4.3, p.44)</small><p>En 2003, des mutations dans les gènes des Neuroligine 3 (NLGN3 en Xq13) et Neuroligine 4 (NLGN4 en Xp22.33) ont été retrouvées pour la première fois chez des enfants avec autisme. Les neuroligines sont des protéines neuronales transmembranaires impliquées dans la formation des synapses. Le phénotype des patients avec une mutation des neuroligines est très hétérogène. Les sujets n\'ont pas de dysmorphie particulière et peuvent avoir aussi bien un syndrome d\'Asperger qu\'un autisme avec retard mental ou un retard mental isolé.</p><p>La recherche de mutations dans les gènes des neuroligines 3 et 4 a fait l’objet de neuf publications (117-125). Pour une population de 861 patients autistes, l’existence d’une mutation à l’état hétérozygote a été retrouvée chez 7 sujets (0,8 %).</p><p>La faible implication des neuroligines 3 et 4 dans le diagnostic des enfants avec autisme n\'est pas en faveur d\'une recherche systématique des mutations de ces gènes, en dehors d\'une histoire familiale d\'hérédité récessive liée au chromosome X.</p>',
                                pos: [11, 14],
                            },
                            {
                                name: "Shank 3 (22q13.3)",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.4.3, p.44)</small><p>Le gène Shank3 est localisé sur la partie terminale du chromosome 22 dans la région 22q13.3. Le gène code pour une protéine qui interagit avec les neuroligines et joue un rôle dans le développement des synapses.</p><p>La délétion de la région 22q13.3 est connue pour être responsable de retard mental, d\'altération du langage et d\'autisme. Les premières mutations du gène SHANK3 ont été retrouvées en 2006 chez deux patients. Un autre patient avec un syndrome d\'Asperger avait une duplication du gène.</p><p>De nombreux autres gènes ont été incriminés, mais sont considérés aujourd’hui comme des facteurs de prédisposition/susceptibilité à l’autisme : Neurexine 1 (2p16.3) ; MECP 2 (Xq28) ; PTEN (10q23.31); ASMT (Xp22.32); CNTN4 (3p26.3); TM4SF2 (Xp11.4); CNTNAP2 (7q35-q36) ; IL1RAPL1 (Xp22.1-p21.3).</p>',
                                pos: [11, 14],
                            },
                            {
                                name: "Maladies Métaboliques",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.4.4, p.44)</small><p>S’il est clair que la majorité des cas d’autisme n’ont pas d’origine métabolique, plusieurs maladies neurométaboliques peuvent comporter un phénotype autistique.</p><p>La majorité des maladies métaboliques sont d’origine génétique avec une hérédité le plus souvent autosomique récessive (AR). Ce type d\'hérédité, le risque de récidive après un premier enfant atteint et parfois les possibilités thérapeutiques, rendent important la mise en évidence des étiologies métaboliques.</p>',
                                pos: [11, 14],
                            },
                            {
                                name: "Phénylcétonurie",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.4.4, p.45)</small><p>La phénylcétonurie (AR) par l\'accumulation de phénylalanine dans le cerveau est cause de retard mental, de convulsions, d’anomalies cérébrales et de TSA. En France, le dépistage néonatal depuis plus de 30 ans de cette maladie, curable par un régime alimentaire, a fait disparaître la pathologie.</p><p>D’après Fombonne, l’association entre autisme et phénylcétonurie a été supportée par les études réalisées avant la mise en place des mesures de prévention systématique (16).</p><p>Ce diagnostic doit cependant être évoqué pour les enfants migrants nés hors de France dans un pays ne réalisant pas le dépistage néonatal.</p>',
                                pos: [11, 14],
                            },
                            {
                                name: "Déficits dans le métabolisme de la créatine",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.4.4, p.45)</small>',
                                pos: [11, 14],
                            },
                            {
                                name: "Les déficits en synthèse de la créatine",
                                presentation: '<p>Les déficits en Guanidinoacétate méthyltransférase (GAM) et en arginine glycine amidinotransférase (AGAT) sont responsables de retard de développement psychomoteur, de retard mental, d’épilepsie, de troubles d’acquisition du langage et d’autisme. Une supplémentation orale en créatine améliore l’évolution des enfants. Ces maladies métaboliques ont une hérédité autosomique récessive.</p>',
                                pos: [11, 14],
                            },
                            {
                                name: "Le déficit en transporteur de la créatinine",
                                presentation: '<p>Le déficit en transporteur de la créatine donne un phénotype neurologique peu spécifique. Le retard est habituellement sévère, l’épilepsie et les signes autistiques sont inconstants. Des signes plus généraux, inconstants, incluent un retard de croissance staturopondéral, une microcéphalie, des troubles du transit intestinal (constipation, vomissements...). Contrairement au déficit de synthèse de la créatine, le déficit en transporteur n’est pas amélioré par une supplémentation orale en créatine et se transmet sur le mode d’une hérédité récessive liée à l’X.</p><p>Les déficits dans le métabolisme de la créatine sont repérables lors de la réalisation d’une IRM cérébrale avec séquences spectroscopiques qui montrent une absence du pic de créatine. En cas de suspicion de maladie métabolique, la réalisation de séquences spectroscopiques, lors de l\'examen IRM, est d\'un intérêt majeur. </p>',
                                pos: [11, 14],
                            },
                            {
                                name: "Déficits dans le métabolisme cérébral des folates",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.4.4, p.45)</small><p>Les déficits dans le métabolisme cérébral des folates (AR) présentent au premier plan une symptomatologie neurologique. Le phénotype associe un retard de développement psychomoteur avec décélération de la croissance cérébrale, un retard mental avec régressions, une ataxie cérébelleuse, des dyskinésies, une épilepsie. Les TSA semblent particulièrement fréquents.</p>',
                                pos: [11, 14],
                            },
                            {
                                name: "Syndrome de Smith-Lemli Opitz (SLO)",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.4.4, p.45)</small><p>Ce syndrome autosomique récessif résulte d’un défaut de synthèse du cholestérol. La maladie est liée à des mutations du gène DHCR7 codant pour la 7-déhydrocholestérol réductase. Sa prévalence est estimée entre 1/10 000 et 1/30 000 naissances vivantes.</p><p>Le diagnostic de la maladie est évoqué à l’examen clinique. Les patients ayant un SLO présentent un retard mental, une microcéphalie, un retard de croissance, une dysmorphie particulière, une syndactylie des 2e et 3e orteils, des anomalies des organes génitaux chez les garçons. Le retard mental est modéré à sévère, des malformations multiples (organes génitaux, reins, cœur, cerveau) sont souvent présentes. Une étude récente a montré que 53 % des enfants remplissent les critères diagnostiques de l’autisme (129).</p>',
                                pos: [11, 14],
                            },
                            {
                                name: "Autres maladies métaboliques",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.4.4, p.46)</small><p>D’autres anomalies métaboliques (AR) peuvent comporter un autisme: déficit en adénylosuccinase, déficit en biotinidase, déficit en succinyl semialdéhyde déshydrogénase.</p>',
                                pos: [11, 14],
                            },
                            {
                                name: "Pathologies mitochondriales",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.4.4, p.46)</small><p>Plusieurs publications ont fait état de l’existence de pathologies mitochondriales à l’origine d’autisme infantile. Cependant, ces publications ne rapportent en général que des cas isolés. Des études ont cependant mis en évidence de manière plus large des perturbations des métabolismes énergétiques mitochondriaux chez les enfants avec autisme sans qu’un déficit particulier soit impliqué. </p>',
                                pos: [11, 14],
                            },
                            {
                                name: "Troubles du sommeil",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.3.5, p.38)</small><p>Les troubles du sommeil constituent une des plaintes les plus fréquemment rapportées par les familles d’enfants avec autisme. Ainsi, la prévalence des troubles du sommeil chez les enfants avec autisme va de 45 % à 86 % selon les études (75-78), et ceci même chez les enfants avec autisme non déficitaires (75,78-80). Les parents décrivent avant tout une insomnie, avec difficulté d’endormissement, du maintien de sommeil et aussi une plus courte durée de sommeil (79,81-85). L’étude récente de Krakowiak et al. suggère que l’endormissement et les réveils nocturnes seraient les deux domaines de sommeil les plus atteints dans le groupe des enfants ayant un TSA (78).</p><p>La plupart des études ont utilisé des mesures subjectives parentales sur la base d’agendas de sommeil ou de questionnaires pour évaluer le sommeil des enfants avec autisme. Les travaux, peu nombreux, ayant réalisé une évaluation objective du sommeil à l’aide d’une polysomnographie ont confirmé les plaintes de parents. Dans ces études, il a été rapporté : une latence d’endormissement allongée, un temps total de sommeil diminué et un temps d’éveil intrasommeil augmenté, les autres anomalies observées étant plus hétérogènes (86- 89).</p><p>L’analyse de la relation entre trouble du sommeil et symptomatologie clinique de l’autisme (incluant les troubles du comportement) a été rarement rapportée. Elia et al. (86) ont observé une corrélation entre la communication non verbale, la réponse visuelle et le temps total de sommeil et les éveils nocturnes, confirmée par Limoges et al. (corrélation négative entre le temps total de sommeil et les scores d’interactions sociales et de communication sur l’ADI-R) (87). Malow et al. distinguent des enfants avec autisme “ bons dormeurs ” et “ mauvais dormeurs ”, les premiers souffrant moins de problèmes affectifs et ayant une meilleure interaction sociale (88).</p><p>Parallèlement aux études sur le sommeil, il a été recherché des troubles des rythmes circadiens chez des enfants avec autisme, en se basant sur la plainte parentale de rythmes veille-sommeil irréguliers chez leur enfant (83,90). Des anomalies de sécrétion de la mélatonine ont été mis en évidence chez des enfants avec autisme (91-94). </p>',
                                pos: [11, 14],
                            },
                            {
                                name: "Troubles du comportement alimentaire",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Troubles sensoriels",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Déficiences sensorielles",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Déficience visuelle",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.3.7, p.39)</small><p>La prévalence d’une déficience visuelle chez les personnes avec autisme est évaluée entre 0 et 11,1 % (médiane : 1,3 %) à partir d’une revue systématique fondée sur 5 études (16). La prévalence des troubles autistiques chez les enfants ayant une déficience visuelle a fait l’objet d’une revue non systématique (96). Les résultats des études sont contradictoires allant de 0 à 53,3 % pour l’ensemble autisme et traits autistiques (97,98). Ces différences peuvent être interprétées en fonction de la méthode d’étude, de la taille des groupes, du degré de sévérité de la déficience, des causes de la déficience et des troubles associés. Dans une étude plus récente (99), la prévalence de l’autisme dans une population de 257 enfants et adolescents en institution turque pour déficients visuels de toute cause était de 11,6 % (30/257) avec des différences liées à la fois à la gravité de la déficience visuelle (p = 0,015) et à l’existence de troubles associés en particulier les troubles neurologiques (p = 0,024) et la déficience intellectuelle (p = 0,001). Des études complémentaires sont nécessaires du fait du manque d’adaptation des outils actuels d’évaluation.</p>',
                                pos: [11, 14],
                            },
                            {
                                name: "Déficience auditive",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.3.7, p.40)</small><p>La prévalence d’une déficience auditive dans une série de 199 enfants avec autisme était de 9,5 % (19/199) dont 3,5 % de déficience profonde (7/199) (100).</p><p>La prévalence de l’autisme dans une population de 1 150 enfants ayant une déficience auditive était de 4 % (46/1 150) (101). </p>',
                                pos: [11, 14],
                            },
                            {
                                name: "Comportements problèmes",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Etiologie -> (causes)",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Génétique",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Environnement",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Interactions génétique/environnement",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Classifications",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "CIM-10",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "DSM-4",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "DSM-5",
                                presentation: '',
                                pos: [11, 14],
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
                                "Comorbidités et troubles associés", "Comorbidités", 0
                            ],
                        ]
                    }
                },
                dimensions: {
                    type: Array,
                    value: function () {
                        return [15, 16]
                    }
                }
            },

            width: window.innerWidth * 1 / 2,
            height: null,

            addNode: function(obj, coeff, layer, i) {
                var node = new Konva.Circle({
                    name: (obj.par === 0) ? 'n' : 'y',
                    x: obj.pos[0] * coeff,
                    y: obj.pos[1] * coeff,
                    radius: coeff / 2,
                    fill: (obj.par === 0) ? "#268e7b" : "#00ff97",
                    stroke: "#226070",
                    id: obj.name,
                    strokeWidth: coeff / 12,
                });
                layer.add(node);
                node.on('touchstart click', function () {
                    var pars;
                    var circ;
                    var res = [];
                    var tab1 = layer.find('Line');
                    var tab2 = layer.find('Circle');
                    var line;
                    for (var i = 0; i < tab1.length; i++) {
                        line = tab1[i];
                        pars = line.attrs.text.match(/\d+/g);
                        if (parseInt(pars[0]) == node._id) {
                            for (var j = 0; j != tab2.length; j++) {
                                if (tab2[j]._id == parseInt(pars[1])) {
                                    circ = tab2[j];
                                }
                            }
                            res.push(line);
                            res.push(circ);
                        }
                    }
                    for (var i = 0; i < res.length; i++) {
                        console.log(res[i].name);
                        if (res[i].name() === 'y') {
                            return ;
                        }
                    }
                    for (var i = 0; i < res.length; i++) {
                        res[i].visible(!(res[i].visible()));
                        node.name((circ.visible() === true) ? 'y' : 'n');
                    }
                    layer.draw();
                });
                node.on('mouseover', function () {
                    var rad = node.radius();
                    node.radius(rad + 5);
                    layer.draw();
                    document.getElementById("igcoord").innerHTML = '<h2>'+obj.name+'</h2>'+obj.presentation;
                    document.body.style.cursor = 'pointer';
                });
                node.on('touchstart', function () {
                    var rad = node.radius();
                    node.radius(rad + 0.5);
                    layer.draw();
                    document.getElementById("igcoord").innerHTML = '<h2>'+obj.name+'</h2>'+obj.presentation;
                    document.body.style.cursor = 'pointer';
                });
                node.on('mouseleave', function () {
                    var rad = node.radius();
                    node.radius(rad - 5);
                    layer.draw();
                    document.body.style.cursor = 'default';
                });
            },

            addConnect: function (connect, layer, coeff) {
                var node1 = layer._getNodeById(connect[0]);
                var node2 = layer._getNodeById(connect[1]);
                var x1, y1, x2, y2, h;
                h = Math.sqrt(Math.pow(node1.x() - node2.x(), 2) + Math.pow(node1.y() - node2.y(), 2));
                x1 = Math.abs(node1.x() + ((node1.radius() + node1.strokeWidth() / 2) * ((node2.x() - node1.x()) / h)));
                y1 = Math.abs(node1.y() + ((node1.radius() + node1.strokeWidth() / 2) * ((node2.y() - node1.y()) / h)));
                x2 = Math.abs(node2.x() + ((node1.radius() + node1.strokeWidth() / 2) * ((node1.x() - node2.x()) / h)));
                y2 = Math.abs(node2.y() + ((node1.radius() + node1.strokeWidth() / 2) * ((node1.y() - node2.y()) / h)));
                var line = new Konva.Line({
                    text:String(node1._id)+' '+String(node2._id),
                    points: [x1, y1, x2, y2],
                    stroke: "#226070",
                    strokeWidth: coeff / 12,
                });
                layer.add(line);
            },

            drawConnect: function (layer, coeff) {
                for (var i = 0; i < this.connect.length; i++) {
                    this.addConnect(this.connect[i], layer, coeff);
                }
            },

            ready: function () {
                var coeff = this.width / this.dimensions[0];
                this.height = coeff * this.dimensions[1];
                var stage = new Konva.Stage({
                    container: "container",
                    width: this.width,
                    height: this.height,
                    draggable: true
                });
                var layer = new Konva.Layer();
                for (var i = 0; i < this.steps.length; i++) {
                    this.addNode(this.steps[i], coeff, layer, i);
                }
                this.drawConnect(layer, coeff);
                stage.add(layer);
            }
        });