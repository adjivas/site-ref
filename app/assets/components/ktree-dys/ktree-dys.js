        Polymer({
            is: "ktree-dys",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: 'Troubles Dys',
                                presentation: '<p class=\"textktree\">Les troubles Dys concernent les fonctions cognitives. Ces fonctions  représentent tous les processus cérébraux par lesquels l’être humain reçoit l’information, la traite, la manipule, la communique et s’en sert pour agir. Les troubles cognitifs englobent tous les dysfonctionnements des fonctions cognitives. Ils peuvent être globaux (déficience intellectuelle) ou spéciques à une fonction cognitive particulière.</p><p class=\"textktree\">Ils affectent une ou plusieurs fonctions cognitives, mais pas le fonctionnement cognitif global (contrairement à la déficience intellectuelle). Ce sont des troubles neurodéveloppementaux (terminologie DSM-5), c’est-à-dire des troubles qui traduisent une déviation, une perturbation ou un dysfonctionnement du développement du cerveau et qui ne sont pas imputables à un manque d’apport socioculturel.</p><p class=\"textktree\">Ils sont nommés troubles cognitifs spécifiques, car ils ne peuvent être totalement expliqués ni par une deficience intellectuelle globale, ni par une déficience sensorielle ou neurologique lésionnelle, ni par un trouble du spectre autistique ou un trouble psychique.</p><p class=\"textktree\">Ils apparaissent au cours du développement de l’enfant, avant ou au cours des premiers apprentissages, et peuvent persister à l’âge adulte. Ils se répercutent de façon significative sur l’insertion scolaire, professionnelle et sociale. Ces troubles peuvent aussi avoir des conséquences affectives et comportementales. Par ailleurs, la difficulté, voire l’incapacité à automatiser une procédure, la lenteur, l’épuisement rapide, la fatigabilité sont des caractéristiques fréquemment observées et communes à l’ensemble de ces troubles. Si ces retentissements peuvent être identifiés pour chacun des troubles et cumulés dans la plupart des situations, ils ne sont néanmoins pas observés systématiquement.</p>',
                                pos: [5, 3.5],
                                label: "I",
                                enfant: "ktree-autrneuro",
                            },
                            {
                                name: "Les troubles spécifiques et durables de développement du langage oral (communément appelés dysphasies)",
                                presentation: '<h3 class=\"subktree\">Nature des altérations de fonction</h3><p class=\"textktree\">Les troubles de développement du langage oral ont une intensité variable, du simple décalage chronologique (retard de développement) au trouble durable et pathologique correspondant à un écart signi catif à la norme. Ces formes plus sévères sont communément appelées dysphasies. Celles-ci touchent le développement du langage et peuvent concerner tous les aspects, phonologique, lexical, syntaxique, voire pragmatique (le sens général donné à une phrase) et génèrent parfois des di cultés praxiques associées. Elles peuvent porter sur le versant expressif (capacité à utiliser le langage oral) et/ou réceptif (capacité à comprendre le langage oral). Certains enfants sont inintelligibles bien après trois ans.</p><h3 class=\"subktree\">Principales limitations d’activité et restrictions de participation</h3><p class=\"textktree\">Ces troubles altèrent significativement la communication et les apprentissages. Du fait des troubles de l’expression et de la compréhension du langage, il existe une limitation des capacités de communication de l’enfant sur le plan oral, au niveau expressif et/ou réceptif (pouvant aussi retentir sur le traitement du langage écrit). L’enfant ne peut alors s’exprimer correctement à l’oral : il ne peut transmettre aisément des informations, des sentiments, des affects. Éventuellement, l’enfant n’a pas la possibilité de comprendre ce qui lui est transmis comme information orale. Il peut se trouver spontanément limité pour les apprentissages puisque, sans adaptation, il ne peut être performant dans de nombreuses activités des enfants de son âge.</p><h3 class=\"subktree\">Les principaux retentissements concernent :</h3><ul><li class=\"textktree\">La communication pour établir des relations et faire connaître ses besoins élémentaires; </li><li class=\"textktree\">La compréhension des consignes orales et écrites</li><li class=\"textktree\">les relations et situations d’échanges qui, étant perturbées, peuvent créer un risque d’isolement avec des malentendus et une inadaptation des réponses, mais aussi un manque de discernement et le risque d’être influençable</li><li class=\"textktree\">Toutes les restitutions orales, en particulier dans le cadre des évaluations ou pour réciter, raconter... et les restitutions écrites dans la plupart des cas</li><li class=\"textktree\">Les apprentissages scolaires</li><li class=\"textktree\">L’inclusion scolaire et sociale</li></ul></ul><p class=\"textktree\">Quelle que soit l’ampleur du trouble du langage dans l’enfance, sa prise en charge précoce et durable permet d’améliorer le niveau de compétence. Malgré cela, à la fin du cursus scolaire, le niveau de qualification retrouvé est généralement faible.</p><p class=\"textktree\"><b class=\"textktree\">À l’âge adulte</b>, ces diffcultés, dont l’ampleur varie énormément selon les personnes, se retrouvent également. Les personnes affectées sont capables d’organiser un langage qui peut suffire dans la vie quotidienne, mais elles évoluent le plus souvent sans parler parfaitement. La lenteur dans l’exécution de certaines tâches est une caractéristique commune. Des difficultés dans les relations sociales peuvent apparaître du fait du trouble du langage. Pourtant, l’insertion en milieu professionnel est possible, car malgré des diffcultés parfois sévères, ces personnes sont en mesure d’acquérir un savoir-faire professionnel ainsi qu’une autonomie satisfaisante avec des aménagements des conditions de travail et/ou des adaptations matérielles.</p><p class=\"textktree\">Les conséquences sont plus ou moins importantes selon l’intensité des troubles qui peuvent empêcher la personne concernée de trouver sa place dans un groupe et limiter son inclusion familiale, scolaire, professionnelle et sociale. Il existe souvent, par surcroît, des conséquences a ectives et parfois comportementales avec un risque important de sentiment d’incompétence, de mauvaise estime de soi, voire de développement de troubles du comportement.</p>',
                                pos: [1, 1.5],
                                label: "I",
                                enfant: "",
                            },
                            {
                                name: "Les troubles spécifiques et durables du développement du geste et/ou des fonctions visuospatiales (troubles de l’acquisition des coordinations ou dyspraxies)",
                                presentation: '<h3 class=\"subktree\">Nature des altérations de fonction</h3><p class=\"textktree\">Ces troubles portent sur le développement moteur : apprentissage des gestes et/ou acquisition des coordinations sensori-motrices et/ou des fonctions visuospatiales. Ils correspondent à un écart significatif à la norme, sont présents dès les premiers stades du développement et se manifestent par des retards psychomoteurs prononcés, une maladresse importante et/ou une dysgraphie. Les gestes appris s’automatisent mal ou ne s’automatisent pas. Ce défaut d’automatisation entraîne une difficulté ou une impossibilité à travailler en double tâche (par exemple : écouter l’enseignant ou l’employeur et écrire en même temps). Ils sont communément appelés dyspraxies ou troubles de l’acquisition des coordinations (TAC).</p><h3 class=\"subktree\">Principales limitations d’activité et restrictions de participation</h3><p class=\"textktree\">Ces troubles retentissent significativement sur l’adaptation de l’enfant dans les différents aspects de sa vie :</p><ul><li class=\"textktree\">gêne dans l’apprentissage des gestes de la vie quotidienne : apprendre à s’habiller, à utiliser ses couverts, à se servir à boire, à lacer ses chaussures, à se coi er, à se couper les ongles, à utiliser une clé, à se moucher...</li><li class=\"textktree\">gêne dans la motricité globale, comme les troubles de l’équilibre, les coordinations globales : faire du vélo...</li><li class=\"textktree\">gêne dans les activités de motricité ne limitant l’écriture, le dessin, le coloriage, le découpage, les manipulations (expérimentales, d’instruments tels les compas, règles, équerres, rapporteurs...), la géométrie, les jeux (construction, poupées, billes, manipulation d’une manette de jeux...)</li><li class=\"textktree\">gêne dans l’utilisation et la réalisation de documents, spécialement ceux comportant des informations spatiales (tableaux, courbes, graphiques, cartes, plans...)</li><li class=\"textktree\">diffcultés pour se repérer dans l’espace, en particulier pour se déplacer dans des lieux peu familiers, se repérer sur un plan, un modèle ou une feuille.</li></ul></ul><p class=\"textktree\">Selon l’intensité des troubles, les conséquences sont plus ou moins importantes sur le plan de la scolarisation, de la vie familiale, sociale et des loisirs. Dans un contexte scolaire où le support écrit est le mode dominant, l’enfant peut se trouver dans l’impossibilité d’une prise de note lisible et rapide ; les écrits qu’il produit sont souvent inutilisables pour réviser, apprendre ou manifester ses connaissances (contrôles...).</p><p class=\"textktree\">De plus, les difficultés scolaires sont plus marquées dans certaines matières enseignées comme la géographie, la géométrie et les matières scientifiques (manipulation des tubes à essai, matières chimiques dangereuses, dissection de souris, dessin tout en regardant un microscope...), technologiques, sportives et artistiques (dessin, pratique d’un instrument de musique). Dans les filières professionnelles (CAP, baccalauréats professionnels), des difficultés dans les travaux pratiques sont à souligner.</p><p class=\"textktree\">Les activités motrices de la vie quotidienne mettent la personne facilement en échec, limitent l’acquisition de son autonomie et sa participation aux activités ludiques et de loisir (pratique d’un sport, d’un instrument de musique, travaux manuels...) en rapport avec son âge. Sa maladresse contribue à son isolement du groupe social et dans sa famille.</p><p class=\"textktree\">Les diffcultés visuospatiales peuvent entraîner une impossibilité à gérer les déplacements de manière autonome, en particulier vers des lieux inconnus, à se repérer sur un plan de quartier ou de transports en commun.</p><p class=\"textktree\">Les conséquences fonctionnelles peuvent se caractériser par une lenteur, une grande fatigabilité et une situation d’échec en particulier scolaire. Par ailleurs, ces personnes peuvent rencontrer des troubles de l’organisation qui touchent tous les domaines de la vie, qu’ils soient scolaires ou non (organisation du cartable, de la trousse, des classeurs, du bureau...), et qui aggravent leur lenteur et leur inefficacité au quotidien.</p><p class=\"textktree\">Le tout (échec scolaire, médiocre indépendance dans la vie quotidienne) contribue à une mauvaise estime de soi souvent renforcée par une incompréhension des adultes (confusion avec un manque de motivation, de la mauvaise volonté, voire une déficience intellectuelle). Cela peut générer soit des troubles de l’humeur, soit des réactions inappropriées (repli sur soi, opposition).</p><p class=\"textktree\"><b class=\"textktree\">À l’âge adulte</b>, il en résulte également la persistance de répercussions sur les différents aspects de la vie avec :</p><ul><li class=\"textktree\">des diffcultés d’autonomie dans la vie quotidienne</li><li class=\"textktree\">une dysgraphie persistante entraînant une gêne sociale importante qui se traduit par des difficultés dans la rédaction de curriculum vitæ (CV) manuscrits ou de formulaires « préformatés »</li><li class=\"textktree\">des diffcultés d’apprentissage des savoir-faire professionnels d’autant plus sévères que l’échec scolaire ne leur laisse souvent ouvertes que des professions dites « manuelles » (ou « pratiques ») pour lesquelles ces adultes sont particulièrement incompétents ; des échecs successifs à plusieurs formations professionnelles sont possibles</li><li class=\"textktree\">des diffcultés dans leurs déplacements (professionnels ou de loisir).</li></ul>',
                                pos: [3, 1.5],
                                label: "II",
                                enfant: "",
                            },
                            {
                                name: 'Les troubles spécifiques et durables de l’acquisition du langage écrit (dyslexies, dysorthographies)',
                                presentation: '<h3 class=\"subktree\">Nature des altérations de fonction</h3><p class=\"textktree\">Ces troubles se caractérisent par des altérations spécifiques et significatives de l’acquisition de la lecture (appelée communément dyslexie) et/ou de l’orthographe (appelée communément dysorthographie).</p><p class=\"textktree\">L’incapacité apparaît dès les premiers moments de l’apprentissage de la lecture sous la forme d’une difficulté à maîtriser les règles de conversion graphèmes-phonèmes et leur automatisation, ce qui implique une construction difficile d’un lexique orthographique permettant une lecture satisfaisante au regard de la norme. Finalement, le tableau évolue vers une lecture généralement hésitante, ralentie, émaillée d’erreurs, ne permettant pas d’accéder à la compréhension et qui nécessite surtout une attention soutenue générant notamment de la fatigabilité.</p><p class=\"textktree\">L’orthographe, qui se développe normalement au fur et à mesure que s’automatise la procédure de reconnaissance orthographique ou automatisée des mots, est ici très largement touchée, de sorte que la dysorthographie est généralement considérée comme la conséquence inévitable de toute dyslexie.</p><p class=\"textkree\">La déficience liée à la dyslexie peut être d’intensité très variable selon les individus et s’accompagner de troubles associés dont la présence sera elle-même facteur de sévérité. La fréquente association avec des troubles de l’attention, avec ou sans hyperactivité, est un facteur aggravant largement reconnu.</p><p class=\"textkree\">Des troubles du comportement réactionnels associés peuvent également exister.</p><h3 class=\"subktree\">Principales limitations d’activité et restrictions de participation</h3><p class=\"textktree\">Les conséquences dans la vie des personnes résultent d’une interaction entre le trouble (dyslexie ou dysorthographie) et l’utilisation du langage écrit qui est la modalité privilégiée d’enseignement, de communication d’informations, de consignes, d’énoncés d’examens, de correspondance, de soumission de candidatures... Ces troubles, qui peuvent également avoir des conséquences sur l’évolution du langage oral, interfèrent donc avec l’ensemble des apprentissages scolaires, des activités professionnelles et de la vie sociale.</p><h3 class=\"subktree\">Chez l’enfant :</h3><p class=\"textktree\">Ces troubles ont des conséquences variables en fonction de leur intensité. Dans les cas les plus sévères, il peut s’agir d’une incapacité totale à identifier les mots et donc à lire. Dans les cas plus courants, on observe à des degrés divers :</p><ul><li class=\"textktree\">une difficulté à identifier les mots</li><li class=\"textktree\">une difficulté à lire sans erreurs et de manière fluide</li><li class=\"textktree\">une lenteur exagérée de la lecture</li><li class=\"textktree\">une difficulté de compréhension des textes, due à la lenteur de décodage</li><li class=\"textktree\">une écriture lente et difficile, parfois illisible (dysgraphie)</li><li class=\"textktree\">de nombreuses erreurs d’orthographe, certaines phonétiquement plausibles, certaines aberrantes (ces erreurs sont parfois tellement éloignées de la forme correcte qu’un correcteur orthographique est inopérant)</li><li class=\"textktree\">une fatigabilité importante liée à l’activité de lecture et d’écriture</li><li class=\"textktree\">une difficulté à consolider et à mobiliser le stock orthographique</li></ul><p clas=\"textktree\">Les répercussions scolaires seront plus ou moins marquées selon les modalités pédagogiques employées et les matières enseignées :</p><ul><li class=\"textktree\">l’enfant a du mal à écrire sous la dictée de l’enseignant et à copier ce qui est écrit au tableau dans le temps imparti. Ses cahiers sont incomplets, illisibles ou incompréhensibles. Cela entraîne des difficultés à étudier les leçons et à faire les devoirs</li><li class=\"textktree\">lorsque les consignes d’un exercice sont données exclusivement par écrit</li><li class=\"textktree\">les difficultés de lecture et d’écriture entravent l’accès de l’enfant à l’information cruciale sur laquelle il est censé travailler</li><li class=\"textktree\">les matières littéraires sont classiquement les plus affectées</li><li class=\"textktree\">même en l’absence de dyscalculie associée, les matières scientifiques peuvent également être affectées de par les difficultés de compréhension des énoncés</li><li class=\"textktree\">l’apprentissage puis la pratique des langues étrangères font partie des domaines les plus régulièrement altérés chez les dyslexiques</li><li class=\"textktree\">les contrôles et examens écrits posent particulièrement problème pour ce qui concerne la compréhension des sujets écrits, de la production d’une copie lisible et correctement orthographiée et du temps excessif dédié à ces activités (par rapport à la finalité du contrôle ou de l’examen)</li><h3 class=\"subktree\">À l’âge adulte :</h3></ul><ul><li class=\"textktree\">Certaines personnes dyslexiques restent en grande difficulté pour l’orthographe. Même lorsque l’évolution est la plus favorable, les personnes dyslexiques qui parviennent à atteindre un niveau de lecture acceptable le font en utilisant des stratégies atypiques, en étant plus lentes et au prix d’e orts cognitifs très importants.</li><li class=\"textktree\">La persistance des troubles aura des conséquences sur toutes les situations requérant la production écrite et/ou l’accès à une information écrite : dans le cadre socioprofessionnel, la rédaction d’un CV ou la lecture d’annonces d’emplois, les tests de recrutement se déroulant par écrit, ainsi que l’exercice de toute profession basée sur la lecture et l’écriture ; dans les loisirs, la vie quotidienne et sociale (lecture, correspondance privée, orientation sur des panneaux, lecture des consignes d’utilisation de produits de consommation courante...).</li></ul><p class=\"textktree\">Dans tous les cas :</p><p class=\"textktree\">Les activités impliquant la lecture et l’écriture sont rendues difficiles : la lecture est lente et coûteuse ; l’écriture est malaisée, voire douloureuse, avec comme conséquence presque systématique une absence de goût pour ces activités. Leur réalisation laborieuse entraîne une fatigabilité importante et des résultats qui ne sont pas à la hauteur des efforts fournis d’où un découragement, un sentiment d’échec et d’incapacité et une altération de l’estime de soi. Quel que soit l’âge, la fragilisation psychologique avec, en particulier, un affaiblissement de l’estime de soi représente un obstacle majeur à l’épanouissement de l’individu dans son milieu.</p>',
                                pos: [5, 1.5],
                                label: "III",
                                enfant: "",
                            },
                            {
                                name: 'Les troubles spécifiques et durables des activités numériques (dyscalculies)',
                                presentation: '<h3 class=\"subktree\">Nature des altérations de fonction</h3><p class=\"textktree\">Il s’agit d’une altération spécifique et significative de la cognition mathématique, c’est-à-dire de la capacité à comprendre et à utiliser les nombres. Ces troubles retentissent sur l’insertion scolaire et sociale :</p><ul><li class=\"textktree\">les troubles spécifiques du calcul affectent les aspects procéduraux et conceptuels du calcul et du comptage ainsi que la mémorisation des faits numériques</li><li class=\"textktree\">ces troubles s’associent souvent à d’autres troubles spécifiques (troubles de l’attention et exécutifs, troubles du langage, troubles visuospatiaux).</li></ul><h3 class=\"subktree\">Principales limitations d’activité et restrictions de participation</h3><p class=\"textktree\">Ces troubles ont des répercussions sur les apprentissages dans les différents domaines des activités mathématiques, dont :</p><ul><li class=\"textktree\">l’acquisition de la comptine numérique</li><li class=\"textktree\">le dénombrement</li><li class=\"textktree\">le subitizing (reconnaissance immédiate de petites quantités)</li><li class=\"textktree\">la connaissance des systèmes numériques oral et/ou écrit</li><li class=\"textktree\">le transcodage : passage d’un code numérique à un autre</li><li class=\"textktree\">l’organisation de la numération en base 10 </li><li class=\"textktree\">le calcul mental oral</li><li class=\"textktree\">le calcul écrit posé</li><li class=\"textktree\">la résolution de problèmes</li><li class=\"textktree\">l’apprentissage des faits numériques : par exemple, les tables de multiplication.</li></ul><p class=\"textktree\">Ces troubles retentissent donc de façon significative sur l’insertion scolaire et sociale :</p><ul><li class=\"textktree\">dans la vie quotidienne, ces troubles peuvent se répercuter sur l’utilisation de sommes d’argent et tous les autres actes de nécessité courante faisant appel à la manipulation de nombres et de chiffres (durée, distance, quantité)</li><li class=\"textktree\">ces incapacités se répercutent sur les apprentissages scolaires, particulièrement en mathématiques et dans les matières nécessitant l’utilisation de données numériques.</li></ul><p class=\"textktree\">Ces troubles peuvent également se retrouver à l’âge adulte avec des répercussions du même ordre sur les plans professionnel et social.</p>',
                                pos: [7, 1.5],
                                label: "IV",
                                enfant: "",
                            },
                            {
                                name: 'Les troubles spécifiques et durables du développement des processus attentionnels et des fonctions exécutives (TDAH)',
                                presentation: '<p class=\"textktree\">On parle ici de déficits des différentes compétences attentionnelles et des fonctions dites « exécutives » (planification de l’action, contrôle de l’inhibition d’une réponse prédominante, contrôle de l’interférence, exibilité, mémoire de travail, uidité mentale, prise de décision, exploitation du feed-back). Ces dé cits, lorsqu’ils sont significatifs, permanents et précoces, définissent le « trouble déficit de l’attention/hyperactivité » (TDAH).</p><h3 class=\"subktree\">Nature des altérations de fonction</h3><p class=\"textktree\">Elles s’expriment par des écarts significatifs à la moyenne des distributions aux tests normés pour tout ou partie des fonctions attentionnelles et exécutives : attention soutenue, dirigée sélectivement sur un stimulus (attention sélective, attention sélective visuospatiale), attention partagée (divisée), contrôle attentionnel, impulsivité, mémoire de travail, exibilité, contrôle de l’inhibition, précision visuomotrice...</p><p class=\"textktree\">Elles sont permanentes, apparaissent avant l’âge scolaire et retentissent de façon significative sur les divers apprentissages (au plan scolaire, professionnel...) ainsi que sur la vie quotidienne personnelle, familiale, professionnelle et sociale.</p><p class=\"textktree\">Elles peuvent être associées à d’autres troubles comportementaux externalisés (troubles oppositionnels ou de conduite) ou internalisés (troubles anxieux, troubles de l’humeur). La comorbidité, TDAH et troubles des apprentissages, est élevée (25 à 40 %).</p><h3 class=\"subktree\">Principales limitations d’activité et restrictions de participation</h3><p class=\"textktree\">Les conséquences pour les personnes concernées peuvent toucher tous les domaines de la vie, scolaire, professionnelle ou sociale :</p><ul><li class=\"textktree\">tendance spontanée à avoir une activité désorganisée et inappropriée, tant par rapport aux buts qu’aux contextes, aussi bien dans la vie sociale que scolaire, que l’activité porte sur une tâche de routine, une tâche simple ou multiple, d’où une diminution du rendement scolaire comme professionnel</li><li class=\"textktree\">difficultés à fixer et diriger son attention, grande distractibilité</li><li class=\"textktree\">difficultés à gérer son comportement (principalement son impulsivité et son hyperactivité)</li><li class=\"textktree\">difficultés à gérer le stress et autres exigences psychologiques</li><li class=\"textktree\">difficultés dans les activités motrices fines</li><li class=\"textktree\">difficultés à acquérir un savoir-faire complexe</li><li class=\"textktree\">difficultés à lire, orthographier, calculer...</li><li class=\"textktree\">difficultés d’engagement (initiation, durée...) dans le jeu seul ou collectif</li><li class=\"textktree\">diffcultés dans les interactions de base ou complexes avec autrui</li><li class=\"textktree\">diffcultés dans les relations formelles avec des personnes ayant autorité</li><li class=\"textktree\">diffcultés dans les relations avec les pairs</li><li class=\"textktree\">difficultés dans les relations sociales informelles</li><li class=\"textktree\">difficultés dans les discussions avec une ou plusieurs personnes (engager, poursuivre, mettre fin)</li><li class=\"textktree\">difficultés dans les relations familiales comme dans les relations intimes.</li></ul><p class=\"textktree\"><b class=\"textktree\">Chez l\'enfant</b>, elles concernent essentiellement la scolarisation du fait de la perturbation des apprentissages et des difficultés relationnelles, ainsi que l’intégration sociale du fait des difficultés relationnelles dans le cadre familial ou extrafamilial.</p><p class=\"textktree\"><b class=\"textktree\">Chez l\'adulte</b>, les conséquences sont professionnelles et sociales : difficultés à obtenir un emploi stable, à le conserver ou à le quitter de manière appropriée ; difficultés d’investissement dans la vie communautaire, sociale et civique.</p><p class=\"textktree\">En l’absence d’aménagements pédagogiques ou professionnels, les acquisitions sont perturbées par des difficultés à rentrer dans un cycle préscolaire, scolaire ou dans un programme de formation professionnelle, à s’y maintenir et à l’achever.</p><p class=\"textktree\">La comorbidité fréquente avec d’autres troubles du comportement a un impact très négatif sur les dimensions a ectives et relationnelles dès le plus jeune âge et tout au long de la vie.</p>',
                                pos: [9, 1.5],
                                label: "V",
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
                                "Troubles Dys", 'Les troubles spécifiques et durables de développement du langage oral (communément appelés dysphasies)', 0
                            ],
                            [
                                "Troubles Dys", 'Les troubles spécifiques et durables du développement du geste et/ou des fonctions visuospatiales (troubles de l’acquisition des coordinations ou dyspraxies)', 0
                            ],
                            [
                                "Troubles Dys", 'Les troubles spécifiques et durables de l’acquisition du langage écrit (dyslexies, dysorthographies)', 0
                            ],
                            [
                                "Troubles Dys", 'Les troubles spécifiques et durables des activités numériques (dyscalculies)', 0
                            ],
                            [
                                "Troubles Dys", 'Les troubles spécifiques et durables du développement des processus attentionnels et des fonctions exécutives (TDAH)', 0
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
                        that = document.querySelector('ktree-dys');
                        if (title != "") {
                            that = document.querySelector('ktree-dys');
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
                        that = document.querySelector('ktree-dys');
                        if (title != "") {
                            that = document.querySelector('ktree-dys');
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
                document.getElementById("ktreebouton2").innerHTML = "<a><button id=\"boutonactive\" onClick=\"document.querySelector('ktree-selector').showKtree('ktree-cmb')\">Revenir en arrière</button></a>";
                document.getElementById("menuktree").innerHTML = "<p class=\" summary\"><b class=\"romanumb\">I</b>] Troubles Dys </p><p class=\" summary\"><b class=\"romanumb\">II</b>] Les troubles spécifiques et durables de développement du langage oral (communément appelés dysphasies)</p><p class=\" summary\"><b class=\"romanumb\">III</b>] Les troubles spécifiques et durables du développement du geste et/ou des fonctions visuospatiales (troubles de l’acquisition des coordinations ou dyspraxies)</p><p class=\" summary\"><b class=\"romanumb\">IV</b>] Les troubles spécifiques et durables des activités numériques (dyscalculies)</p><p class=\"summary\"><b class=\"romanumb\">V</b>Les troubles spécifiques et durables du développement des processus attentionnels et des fonctions exécutives (TDAH)</p>";
            }
 });
