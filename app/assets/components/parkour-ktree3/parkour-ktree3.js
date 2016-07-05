        Polymer({
            is: "parkour-ktree3",
            properties: {
                steps: {
                    type: Array,
                    value: function () {
                        return [
                            {
                                name: "Comorbidités et troubles associés",
                                description: "Receuil d’un certain nombre de données auprès de l’entourage: histoire du développement, description des comportements, aptitudes, particularités, difficultés et observation directe de la personne.<li>Questionnaire et procédure d’observation : Austin Diagnostic Observation Schedule (ADOS) ; Childhood Autisme Ratio Scale (CARS)</li>",
                                presentation: "",
                                pos: [4, 10],
                            },
                            {
                                name: "Comorbidités",
                                description: "Le but est d’éclairer utilement les différents acteurs : <li>Famille</li><li>MDPH</li><li>Professionnels de l’intervention</li> Quant aux orientation et choix à prendre. Ces évaluations doivent aboutir à l’identification dans le dossier à présenté à la MDPH des éléments éclairants sur les répercussions dans la vie quotidienne.",
                                presentation: "<h3>Les TSA sont souvent associés à d’autres troubles ou pathologies</h3>",
                                pos: [4, 12],
                            },
                            {
                                name: "Autres troubles neurodeveloppementaux (DSM-5)",
                                description: "<li>Consultation neuropédiatriques et/ou génétiques</li><li>Bilans neurométaboliques</li><li>EEG avec sieste</li><li>IRM cérébrale</li>… etc",
                                presentation: '',
                               pos: [2, 8],
                            },
                            {
                                name: "Déficience intellectuelle",
                                description: "Le défaut de diagnostic, diagnostic erroné le retard de diagnostic, sont sanctionnés par les tribunaux qui les qualifient comme fautes d’imprudence et de négligence. (Crim., 12 sept. 2006 : Bull. 2006 N° 219 p. 772, La semaine juridique, edition generale, 2007-01-17, n° 3, II-10006, p. 31-33, observations Thierry Faict et Patrick Mistretta ; retard de diagnostic : Civ. 1ere, 29 nov. 2005, Bulletin 2005 I N° 455 p. 382). La Cour de Cassation a cependant retenu que ce retard de diagnostic doit être la cause directe du dommage, qui peut être même une simple perte de chance (c’est-à-dire la disparition actuelle et certaine d’une éventualité favorable). (Arret n° 112 du 28 janvier 2010 (08-20.755 ; 08- 21.692) - Cour de cassation - Premiere chambre civile).",
                                presentation: '<small class="subtitle">(HAS,Paragraphe 3.3.2, p.32)</small>',
                                pos: [2, 6],
                            },
                            {
                                name: "Troubles de la communication",
                                description: "<li>Recours contre le médecin en se basant sur l’ article R. 4127-33 du Code de la sante publique : Le médecin doit toujours élaborer son diagnostic avec le plus grand soin, en y consacrant le temps nécessaire, en s’aidant dans toute la mesure du possible des méthodes scientifiques les mieux adaptées et, s’il y a lieu, de concours appropriés ».",
                                presentation: "",
                                pos: [2, 4],
                            },
                            {
                                name: "Troubles Dys",
                                description: "Recours contre le médecin en se basant sur l’ article R. 4127-33 du Code de la sante publique : Le médecin doit toujours élaborer son diagnostic avec le plus grand soin, en y consacrant le temps nécessaire, en s’aidant dans toute la mesure du possible des méthodes scientifiques les mieux adaptées et, s’il y a lieu, de concours appropriés ».",
                                presentation: "",
                                pos: [2, 2],
                            },
                            {
                                name: "Troubles neuropsychiatriques",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [8, 10],
                            },
                            {//<h1 class="text-center"><FONT size="6">Prévalence</FONT> <br><small class="subtitle">(HAS,Paragraphe 3.3.4, p.34)</small></h1>
                                name: "Troubles neurologiques",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [6, 8],
                            },
                            {
                                name: "Epilepsie",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [7, 7],
                            },
                            {
                                name: "Troubles psychiatriques",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [8, 6],
                            },
                            {
                                name: "Troubles de l’humeur",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [9, 7],
                            },
                            {
                                name: "Troubles anxieux",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [10, 8],
                            },
                            {
                                name: "Troubles psychotiques",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [13, 2],
                            },
                            {
                                name: "Catatonie",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [13, 4],
                            },
                            {
                                name: "Syndrome de Gilles de la Tourette",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                               pos: [13, 6],
                            },
                            {
                                name: "TDAH",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [13, 8],
                            },
                            {
                                name: "Anomalies génétiques et chrosomiques",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [13, 10],
                            },
                            {
                                name: "Syndromes génétiques associées aux TSA",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [13, 12],
                            },
                            {
                                name: "Syndrome de Rett",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [13, 14],
                            },
                            {
                                name: 'Le syndrome de l’X-fragile',
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [10, 12],
                            },
                            {
                                name: "Sclérose tubéreuse de Bourneville",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Neurofibromatose type 1",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Syndrome d’angelman",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Syndrome de Prader-Willi",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Autres syndromes",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Anomalies chromosomiques mises en évidence chez des enfants avec TSA",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Trisomie 21",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Délétion 22q11",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Syndrome de Williams-Beuren",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Syndrome 47 XXY",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Microdélétions ou microduplications récurrentes récemment identifiées",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Anomalies géniques mises en évidence chez des enfants avec TSA",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Neuroligines 3 et 4 (Chromosome X)",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Shank 3 (22q13.3)",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Maladies Métaboliques",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Phénylcétonurie",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Déficits dans le métabolisme de la créatine",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Les déficits en synthèse de la créatine",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Le déficit en transporteur de la créatinine",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Déficits dans le métabolisme cérébral des folates",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Syndrome de Smith-Lemli Opitz (SLO)",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Autres maladies métaboliques",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Pathologies mitochondriales",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Troubles du sommeil",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Troubles du comportement alimentaire",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Troubles sensoriels",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Déficiences sensorielles",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Déficience visuelle",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Déficience auditive",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Comportements problèmes",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Etiologie -> (causes)",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Génétique",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Environnement",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Interactions génétique/environnement",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "Classifications",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "CIM-10",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "DSM-4",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
                                presentation: '',
                                pos: [11, 14],
                            },
                            {
                                name: "DSM-5",
                                description: "<li>Si scolarisé : Famille, médecin, orthophoniste, personnel scolaire…</li><li>Dans un centre médico social : Famille, médecin, orthophoniste, équipe de CAMSP (centre d'Action Médico-sociale Précoce)</li><li>Ni scolarisé ni institutionnalisée : Famille, médecin, orthophoniste…</li>",
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
                                "Les interventions globales et coordonnées", "Les programmes d’interventions personnalisés, globaux et coordonnés", 0
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

            width: window.innerWidth * 6 / 12,
            height: window.innerHeight,

            addNode: function(obj, coeff, layer, i) {
                var node = new Konva.Circle({
                    name: 'n',
                    x: obj.pos[0] * coeff[0],
                    y: obj.pos[1] * coeff[1],
                    radius: Math.min(coeff[0], coeff[1]) / 2,
                    fill: "#268e7b",
                    stroke: "#226070",
                    id: obj.name,
                    strokeWidth: Math.min(coeff[0], coeff[1]) / 12,
                    visible: i === 0 ? true : false
                });
                layer.add(node);
                node.on('click', function () {
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
                    //console.log(document.getElementById("igcoord"));
                    var rad = node.radius();
                    node.radius(rad + 5);
                    layer.draw();
                    //var pres = document.getElementById("pres-diag");
                    document.getElementById("igcoord").innerHTML = '<h2>'+obj.name+'</h2>'+obj.presentation;
                    document.body.style.cursor = 'pointer';
                    //pres.open();
                });
                node.on('touchstart', function () {
                    //console.log(document.getElementById("igcoord"));
                    //var pres = document.getElementById("pres-diag");
                    document.getElementById("igcoord").innerHTML = '<h2>'+obj.name+'</h2>'+obj.presentation;
                    document.body.style.cursor = 'pointer';
                    //pres.open();
                });
                node.on('mouseleave', function () {
                    var rad = node.radius();
                    node.radius(rad - 5);
                    layer.draw();
                    //var pres = document.getElementById("pres-diag");
                    document.body.style.cursor = 'default';
                    //pres.close();
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
                    strokeWidth: Math.min(coeff[0], coeff[1]) / 12,
                    visible: false
                });
                layer.add(line);
            },

            drawConnect: function (layer, coeff) {
                for (var i = 0; i < this.connect.length; i++) {
                    this.addConnect(this.connect[i], layer, coeff);
                }
            },

            ready: function () {
                var stage = new Konva.Stage({
                    container: "container",
                    width: this.width,
                    height: this.height,
                    draggable: true
                });
                var layer = new Konva.Layer();
                var coeff = [];
                coeff.push(this.width / this.dimensions[0]);
                coeff.push(this.height / this.dimensions[1]);
                for (var i = 0; i < this.steps.length; i++) {
                    this.addNode(this.steps[i], coeff, layer, i);
                }
                this.drawConnect(layer, coeff);
                stage.add(layer);
            }
        });