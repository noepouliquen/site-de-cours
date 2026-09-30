/*
 * Contenu de révision : SIC S5, approche sémiologique (Ralitza Bonéva).
 * Tout est tiré des 3 PDF du cours. Chaque élément porte sa source :
 *   "2:28"      = Cours 2, diapo 28
 *   "3:42-43"   = Cours 3, diapos 42 à 43
 *   "1:14;1:17" = plusieurs sources
 * Les « pistes » (liens entre notions que le cours ne formule pas lui-même)
 * sont marquées piste: true, pour ne jamais les présenter comme du cours.
 * Mise en forme autorisée dans les textes : **gras** et *italique*.
 */
window.MATIERES = window.MATIERES || {};
window.MATIERES.semiotique = {
  id: "semiotique",
  titre: "Sémiologie de la communication",
  code: "SIC S5",
  enseignante: "Ralitza Bonéva",
  examen: {
    date: "2026-10-01",
    libelle: "jeudi 1er octobre 2026",
    duree: 90,
    format: "Développement écrit de 3 sujets abordés en cours, en 1h30 (14/20), plus l'exercice pratique sur une conversation avec l'IA (6/20).",
    source: "3:2"
  },

  parties: [
    { id: "intro", num: "Intro", titre: "Qu'est-ce que la communication ?", cours: "Cours 1, diapos 1-12", couleur: "slate" },
    { id: "p1", num: "I", titre: "Bases biologiques de la communication non verbale", cours: "Cours 1, diapos 13-38", couleur: "rouge" },
    { id: "p2", num: "II", titre: "La communication chez certaines espèces vivantes", cours: "Cours 2", couleur: "teal" },
    { id: "p3", num: "III", titre: "La communication non verbale chez les humains", cours: "Cours 3", couleur: "plum" },
    { id: "p4", num: "IV", titre: "La communication verbale", cours: "Cours 4", couleur: "bleu" },
    { id: "p5", num: "V", titre: "La communication multimodale (médias, IA)", cours: "Cours 5", couleur: "ocre" }
  ],

  /* ------------------------------------------------------------------ */
  /* FICHES : sections de cours, chaque point = [texte, source]          */
  /* ------------------------------------------------------------------ */
  fiches: {
    intro: [
      { titre: "Définir la communication", points: [
        ["Terme qui recouvre un large spectre de phénomènes, avec des usages différents : « établir une communication entre deux pièces », « les communications sont faciles dans cette région », « une communication téléphonique ».", "1:2"],
        ["**Noyau sémantique** : l'idée d'un déplacement d'un endroit à un autre, ou de lier ce qui est séparé, c'est-à-dire **la mise en relation**.", "1:2"],
        ["**Définition du TLFi** : processus par lequel une personne (ou un groupe) émet un message et le transmet à une autre qui le reçoit, avec une marge d'erreurs due au codage par l'émetteur, au décodage par le récepteur et au canal emprunté.", "1:2"]
      ]},
      { titre: "La théorie de l'information : le modèle de Shannon", points: [
        ["Pendant la Deuxième Guerre mondiale, **Claude Shannon**, mathématicien et ingénieur à la *Bell Telephone Company*, crée le modèle mathématique de la communication : le modèle des **cinq « petites boîtes »**.", "1:3"],
        ["Les 5 boîtes : **source → émetteur → canal → récepteur → destinataire**, avec une **source de bruit** qui perturbe le canal. Schéma présenté « d'après Warren Weaver, *Théorie mathématique de la communication* ».", "1:4-5"],
        ["Fonctionnement : la source énonce un message, l'émetteur le code et le transforme en signal, le canal (qui peut être bruité) l'achemine, le récepteur le décode et reconstitue un message, qu'il transmet au destinataire.", "1:5"],
        ["**Défauts** de ce « modèle télégraphique » : l'information est assimilée à la quantité de signal, **la signification n'est pas prise en compte** ; dans la communication humaine le canal est un système complexe ; **le récepteur est passif**, comme une cible, et l'information un projectile ; il est difficile d'isoler un sens ; un même mot ne véhicule pas la même quantité d'information selon **le contexte** ; **l'interprétation** du message n'est pas prise en compte.", "1:6"]
      ]},
      { titre: "Trois types de communication", points: [
        ["**1. Non verbale** : manifestations chimiques et neuronales (entre cellules), biologiques et éthologiques (chez les animaux, d'une génération à l'autre par les gènes, l'ADN), chez les humains (comportement, gestualité), intentionnelle ou non (postures, mimiques, silence).", "1:7"],
        ["« **Il est impossible de ne pas communiquer** » : école de Palo Alto (Gregory Bateson, Paul Watzlawick). Deux niveaux : **message et relation**. Exemple : « Il pleut, stp, sors pas. »", "1:7"],
        ["**2. Verbale** : langue naturelle, dit et non-dit, implicites et malentendus, formes indirectes, intonation (prosodie), **méta-communication** (« Regarde-moi lorsque je te parle »), métalangage.", "1:8"],
        ["Dans la communication verbale : la théorie d'**Erving Goffman** (face et rituels de communication), l'(im)politesse (respect, honneur, dignité), le **modèle orchestral** (ajustements réciproques), ressemblances et différences entre communication animale et humaine.", "1:8"],
        ["**3. Multimodale** : mélange du verbal et du non verbal ; communication médiatisée (écrit, téléphone, Internet, visio) ; directe ou indirecte, par canal différé (lettre, mail, SMS), avec ou sans traces ; interpersonnelle ou en groupe ; culturelle ou de masse (images, livres, films, publicité).", "1:9"]
      ]},
      { titre: "Séquences de films étudiées en cours", points: [
        ["*La double vie de Véronique* (Krzysztof Kieślowski, 1991) : quels types de communication ? Communication réussie ou échec entre les deux personnages ? Pourquoi Véronique quitte-t-elle brusquement le café ?", "1:11"],
        ["*Délits flagrants* (Raymond Depardon, 1994) : quels types de communication ? Pourquoi l'avocat change-t-il brusquement de ton ? Qu'est-ce qui compte le plus pour les personnages, l'échange d'information ou la relation ?", "1:12"]
      ]}
    ],

    p1: [
      { titre: "1. Les neurones miroirs", points: [
        ["Découverts en **1992** à l'**Université de Parme** (Italie) par **Vittorio Gallese et Giacomo Rizzolatti**, en neurosciences.", "1:14"],
        ["Catégorie de neurones qui s'activent quand un individu (humain ou animal) **exécute** une action, quand il **observe** un autre individu exécuter la même action, ou quand il **imagine** cette action. Ils sont « miroirs » car ils reflètent ce qui se passe chez autrui.", "1:14"],
        ["Ils jouent un rôle dans : l'**apprentissage par imitation**, la **reconnaissance des affects** d'autrui, l'**empathie**, l'**anticipation des intentions** d'autrui, la **contagion émotionnelle** et ses effets de masse.", "1:14"]
      ]},
      { titre: "Le désir mimétique (René Girard)", points: [
        ["Phénomène décrit par l'anthropologue **René Girard depuis 1961** : l'imitation de l'autre est à la base de l'existence humaine. Le désir d'être comme autrui pousse à désirer les mêmes objets, à viser les mêmes objectifs, ce qui engendre **rivalité, haine et violence**.", "1:15"],
        ["Girard découvre ce mécanisme **une trentaine d'années avant les neurosciences**.", "1:15"],
        ["Exemple : **des enfants qui se disputent le même jouet**. Le désir mimétique est sans objet propre : c'est la convergence des désirs qui définit l'objet et déclenche des rivalités où **les modèles deviennent des obstacles et les obstacles des modèles**.", "1:15"],
        ["Le mimétisme engendre la rivalité, et la rivalité renforce le mimétisme. « **Faire de l'Autre un modèle, c'est faire de lui un rival.** »", "1:15"],
        ["**Triangle mimétique** : le désir est orienté par un **médiateur**. Le prestige que le sujet attribue à son modèle éveille le désir de l'imiter, donc de désirer l'objet qu'il imagine désiré par ce modèle. « C'est l'être qu'il désire » (Girard 1972).", "1:16"],
        ["Œuvres citées : *Mensonge romantique et vérité romanesque* (1961), *Dostoïevski : du double à l'unité* (1963), *La Violence et le Sacré* (1972).", "1:16"],
        ["**Le bouc émissaire** : rite du judaïsme (le grand prêtre confessait sur le bouc les transgressions des Israélites, puis on l'envoyait dans le désert). Sens moderne : désignation d'une **victime expiatoire pour apaiser la violence d'un groupe** ; une fois sacrifié, il devient héros ou Dieu (extériorisation du médiateur, évitement de la violence).", "1:17"]
      ]},
      { titre: "2. L'empathie", points: [
        ["Mot importé de l'allemand et de l'anglais, dont le sens a varié au XXe siècle. Aujourd'hui : capacité de **se mettre à la place d'autrui** pour reconnaître ce qu'il éprouve (grâce aux neurones miroirs), mais aussi aptitude à **résoudre un problème de changement de perspective et de choix de référenciation** (Berthoz 2004).", "1:18"],
        ["À distinguer de **sympathie, compassion, pitié**.", "1:18"],
        ["La subordination et le sentiment d'être mal valorisé empêchent le rapport empathique : « l'empathie n'a pas de place là où a disparu la liberté de choisir son point de vue » (**Alain Berthoz**, 2004).", "1:18"],
        ["Selon **Paul Ricœur** (2008), l'empathie est ressentie au niveau du corps propre, par une sorte de **résonance** avec le corps de l'autre, nécessaire à toute interaction réussie.", "1:18"],
        ["Origine : traduction de l'allemand **Einfühlung** (« ressentir l'autre de l'intérieur »), employé en **1873 par Robert Vischer** pour la projection de soi dans un objet extérieur. En anglais, *empathy* : **Edward Titchener**, début du XXe siècle. **Theodor Lipps** l'étend à l'expérience vécue d'autrui : l'exemple du **funambule**, dont on fait mentalement chaque pas (cité par Matthieu Ricard, *Plaidoyer pour l'altruisme*, 2013).", "1:19"],
        ["Termes limitrophes : **compassion** (partager les maux d'autrui) ; **pitié** (affliction devant les souffrances d'autrui, qui porte à les soulager, et peut être offensante) ; **commisération** (littéraire, prendre part à la misère d'autrui). La compassion a une valeur plus forte : **souffrir avec autrui comme si l'on était à sa place**.", "1:20"],
        ["L'empathie relève du « dialogisme interne, des autres en soi » (**Alain Rabatel**, 2014). C'est autant une **construction sociale et culturelle**, stimulée ou inhibée, qu'une propriété personnelle : les cours d'empathie à l'école signalent une anomalie du vivre-ensemble.", "1:21"],
        ["**Carence en empathie** : engourdissement empathique ou régression de l'empathie en **curiosité**. Exemple : dans *France* (Bruno Dumont, 2021), les passants filment la présentatrice France de Meurs en larmes.", "1:21-22"]
      ]},
      { titre: "3. La communication chimique", points: [
        ["Communication **interne entre cellules** et **externe entre organismes** : avec l'évolution, des signaux chimiques se dirigent vers l'extérieur et deviennent des signaux entre organismes (phéromones, sueur).", "1:23"],
        ["L'odorat est une extériorisation de la communication chimique entre les cellules : **hormone (à l'intérieur) → phéromone (à l'extérieur)**.", "1:23"],
        ["L'odorat et le toucher sont probablement les sens les plus primitifs. Les **serpents** suivent les traces de phéromones à distance (proies et partenaires).", "1:24"],
        ["Le **nouveau-né** reconnaît sa mère à l'odeur juste après la naissance (expériences avec des tampons imbibés de lait). La **sueur** humaine contient des indications sur les émotions (peur, dégoût, bonheur).", "1:24"],
        ["Les signaux chimiques transmettent des **informations authentiques car leur émission est involontaire**. L'information olfactive parvient au cortex **sans passer par le thalamus** : le chemin est plus direct.", "1:24"],
        ["**Expérience des cafards** (projet « Leurre », chercheurs français, belges et suisses ; film *Alice au pays des cafards*, Jean-Pierre Gibrat, 2006) : un robot-blatte, **InsBot** (Université libre de Bruxelles), pourvu d'une robe de phéromones, est introduit dans une colonie.", "1:25"],
        ["Les cafards préfèrent naturellement l'abri sombre. Les robots les incitent à préférer **l'abri clair** : peu à peu tous s'y rassemblent. **La préférence naturelle est modifiée.** Objectif : refaire l'expérience avec des poules et des moutons.", "1:26-31"]
      ]},
      { titre: "4. Le nudge", points: [
        ["Théorie du nudge (**Richard Thaler et Cass Sunstein, 2008**) : un nudge (« coup de pouce ») est une **incitation douce et discrète** qui pousse à changer de comportement ou à faire un choix précis, **sans contrainte ni interdiction**.", "1:32"],
        ["Buts : pousser les citoyens aux « bonnes décisions » (lutter contre l'obésité, favoriser le recyclage, réguler la consommation d'énergie). La méthode **utilise les biais cognitifs**.", "1:32"],
        ["Exemples : inciter à déclarer ses ressources sur Internet (2013-2014) ; **une mouche dessinée au fond des urinoirs** ; des cendriers-sondages ludiques ; des **lignes blanches resserrées** pour faire ralentir. Illustration : des empreintes de pieds rouges au sol d'un ascenseur.", "1:32-33"],
        ["Le nudge doit être **éthique**, sinon on parle de **sludge**. Il doit s'appliquer avec énormément de garde-fous.", "1:32"]
      ]},
      { titre: "5. L'umwelt", points: [
        ["Terme de **Jacob von Uexküll (1920)** : le **monde propre à chaque espèce**, qui réagit à certains facteurs et pas à d'autres. Il dépend de ce que l'organisme perçoit de l'environnement.", "1:35"],
        ["Exemple : **la tique** réagit à 3 facteurs : l'**odeur de l'acide butyrique**, la **température de 36°** de l'hôte, la **pilosité** de sa peau. Dès qu'elle perçoit un mammifère, elle se laisse tomber sur lui.", "1:35"],
        ["Deux schémas fondamentaux de comportement : **la prédation** (face à la proie ou au partenaire sexuel : investissement euphorique, attraction) et **la fuite** (face au prédateur : investissement dysphorique, répulsion).", "1:35"],
        ["Les organes spécifiques de chaque espèce prédéterminent des perceptions spécifiques, donc son umwelt.", "1:36"]
      ]}
    ],

    p2: [
      { titre: "L'éthologie", points: [
        ["Éthologie = « étude des mœurs » : étude des comportements des animaux et de l'homme, fondée sur **l'observation**, dans le milieu naturel. Elle vise à comprendre l'évolution, l'adaptation et la représentation que les animaux se font de l'environnement.", "2:2"],
        ["Au carrefour des sciences de la nature et des sciences humaines. Elle distingue les **actes à structure invariante** (patrimoine génétique) des **actes acquis** (individuellement ou collectivement).", "2:2"]
      ]},
      { titre: "1. Le camouflage", points: [
        ["Camouflage **chimique, vocal ou visuel** : méthode de **simulation** (se faire passer pour quelqu'un d'autre) ou de **dissimulation** (passer inaperçu en se fondant dans l'environnement).", "2:3"],
        ["**3 catégories de camouflage visuel** : (i) variation du **chromatisme**, prendre la couleur de l'environnement (chevreuils, écureuils, taupes, requins) ; (ii) prendre une **texture ou une morphologie** différente (lézards, papillons, grenouilles) ; (iii) reproduire le **mouvement** d'une autre espèce (insectes qui imitent le mouvement des feuilles).", "2:3"],
        ["**2 stratégies** : stratégie de **survivance** chez les proies (fuir les prédateurs) et stratégie de **nourriture** chez les prédateurs (se procurer des proies).", "2:4"],
        ["Sous-stratagème : faire le mort par immobilisation, la **thanatose**. Le champion : **l'opossum**.", "2:4-5"],
        ["Le camouflage est une **communication mensongère (Eco 1975)** : l'animal est capable de mentir, d'anticiper le comportement du prédateur, de se projeter dans l'avenir, en prévoyant comment le destinataire du message va réagir.", "2:4"]
      ]},
      { titre: "2. Le comportement rituel", points: [
        ["**Ritualisation** : donner un caractère répétitif et systématique à des gestes jusqu'à les rendre mécaniques. Elle facilite le passage d'un comportement individuel à un **comportement collectif** (ex. monter dans le bus par la porte avant).", "2:12"],
        ["Dans les parades nuptiales comme dans les confrontations entre rivaux, **les gestes de menace et d'apaisement alternent**.", "2:12"],
        ["Les rites, langage non verbal, servent à **éviter le passage à l'acte violent** et à réconcilier les adversaires (**Huxley, 1971**).", "2:12"],
        ["La ritualisation déclenche chez le destinataire **une réponse prévisible** : le risque d'une réponse imprévue diminue.", "2:12"],
        ["Dans la **parade nuptiale**, tous les sens sont impliqués (postures, déplacements, vocalisations, touchers) : une mise en scène mâle / femelle. Le signal est **multimodal**, avec une **variabilité** et une **finalité**. Exemples : le paradisier superbe, la roue du paon.", "2:13-14"]
      ]},
      { titre: "3. Les oiseaux", points: [
        ["Les cris et chants échangent de l'information : **danger, nourriture**, appel des petits à leurs parents.", "2:15"],
        ["Les chants sont **acquis par stades** (apprentissage). Des oiseaux grandis en captivité émettent des chants « **dénaturés** ».", "2:15"],
        ["Ils varient d'une communauté à l'autre dans une même espèce : **sociolectes, dialectes, idiolectes**. Rôle du social dans l'apprentissage.", "2:15"],
        ["**Laurence Henry (2005)** : l'oiseau est un très bon modèle des bases neurobiologiques de la communication vocale et de l'apprentissage du langage ; structures de base partagées + motifs propres à la région, la colonie, l'individu.", "2:20"],
        ["**Le perroquet Alex** (*Avian Learning EXperiment*, **1977-2007**), perroquet gris du Gabon étudié par l'éthologue **Irene Pepperberg**.", "2:16"],
        ["Alex : **environ 150 mots** de vocabulaire, en **comprend environ 1000** ; décrit forme, couleur et matière de **50 objets** ; compte **jusqu'à six** ; distingue **sept couleurs** ; comprend « plus gros que », « plus petit que », « pareil », « différent », « au-dessus », « en dessous ».", "2:17"],
        ["Alex réagit au mot « beau » (concept esthétique ?), dit qu'il en a assez, s'excuse pour dédramatiser, demande une banane et refuse la noix, et **invente « banerry »** (banane + cerise) pour la pomme.", "2:17"]
      ]},
      { titre: "4. Les baleines", points: [
        ["Les baleines **possèdent des neurones miroirs**. Question posée à partir d'un sonogramme de leur chant : **est-ce un récit ?**", "2:21"],
        ["Lestel cite la **variation des chants** des baleines comme exemple de messages construits et de nouvelles expressions.", "2:44"]
      ]},
      { titre: "5. Les abeilles", points: [
        ["L'éthologue **Karl von Frisch** (1886-1982), auteur de *Vie et mœurs des abeilles*, **prix Nobel en 1973**.", "2:22"],
        ["**Hiérarchie très stricte** : la reine, les ouvrières de l'intérieur et de l'extérieur, les exploratrices.", "2:22"],
        ["La « **danse des abeilles** » : système de communication par lequel une butineuse (exploratrice) informe les autres **du lieu où se trouve la nourriture**.", "2:22"],
        ["**Danse en rond** : source proche (**moins de 50 m**). Des cercles très rapides, **8 à 10 tours en une quinzaine de secondes**, puis un demi-cercle en sens inverse.", "2:22-23"],
        ["**Danse en huit** (frétillante) : distance plus grande. Elle est **orientée par rapport au soleil** et indique donc la **direction**. Demi-cercle, ligne droite en frétillant, demi-cercle de l'autre côté.", "2:24-25"],
        ["Plus la source est proche, plus la danse est rapide : **9 à 10 « 8 » en 15 s à 100 m, 7 à 200 m, 4,5 à 1 km, 2 à 6 km**. L'abeille a trois ocelles sur la tête.", "2:24;2:26"],
        ["Conclusion : un système efficace pour les variations de **position et de distance**, mais avec **un unique objet : la localisation de la nourriture** (et le choix d'un logement).", "2:27"]
      ]},
      { titre: "Benveniste contre Lestel : les animaux ont-ils un langage ?", points: [
        ["**Émile Benveniste (1952)**, « Communication animale et langage humain » (*Diogène* n°1, repris dans *Problèmes de linguistique générale*, 1966) : la danse des abeilles **n'est pas un langage mais un code de signaux**. « La notion de langage n'a cours que par un abus de termes. »", "2:28-29"],
        ["**Argument 1** : les abeilles ne connaissent pas **le dialogue**, condition du langage humain.", "2:30"],
        ["**Argument 2** : aucune abeille ne peut **construire un message à partir d'un autre message** (argument que le cours propose d'infirmer avec un extrait du film).", "2:30"],
        ["**Argument 3** : le message se rapporte **toujours à la nourriture** ; les seules variantes concernent sa localisation.", "2:30"],
        ["**Argument 4** : chez l'abeille, il existe un **rapport nécessaire entre la référence et la forme** (signe motivé), qui n'existe pas dans le langage humain.", "2:30"],
        ["**Dominique Lestel (2002)**, philosophe-éthologue, « Langage et communications animales » (*Langages*, vol. 36) répond point par point.", "2:43-44"],
        ["Messages construits à partir d'autres messages : cris d'alarme des singes, variation des chants de baleines, **dialectes transmis entre générations** chez les oiseaux.", "2:44"],
        ["**Méta-communication** : signaux de jeu (l'animal « dit » : « ceci est un jeu »), partage de motifs de chants entre sous-espèces d'oiseaux, signal d'alarme sans danger réel.", "2:44"],
        ["Nouvelles expressions (variations des chants) ; **tromperies et ruses** (camouflage, faux cris d'alarme pour voler la nourriture) ; **dialogue** (choix interactif du site d'une ruche, rituels en duo, animaux domestiques qui répondent aux ordres).", "2:44"]
      ]},
      { titre: "6. Les singes", points: [
        ["Langage codé des émotions chez les **chimpanzés** : gestuelle et expressions corporelles. Tendre la main = **apaisement** ; s'embrasser = **émoi** ; s'accroupir = **allégeance**.", "2:31"],
        ["Le **regard** est fondamental : fixer dans les yeux = **menace et défi** ; dans une relation amicale, le regard perd son agressivité.", "2:31"],
        ["Le **singe vervet** émet des **cris d'alerte différents selon le prédateur** : aigle, léopard, serpent.", "2:32"],
        ["Prérequis biologiques du langage (tableau) : larynx « bas perché » (Sapiens / Neandertal, -400 000 ans), **nécessaire mais pas suffisant** ; aire de Broca (Homo erectus, 1,8 million d'années), qui existe sous forme primitive chez le chimpanzé ; gène FoxP2 : le langage ne peut pas être lié à un seul gène.", "2:35"],
        ["Prérequis culturels : outils de pierre (2,5 millions d'années, mais les chimpanzés ont des techniques similaires sans langage), bifaces, parures (85 000 ans), navigation (Sapiens en Australie, -60 000), rites funéraires (sépulture avec offrandes, -80 000). L'évolution est une **représentation buissonnante et non linéaire**.", "2:34;2:36"],
        ["**Sarah** (psychologue **David Premack**) : un langage artificiel de figures collées sur un tableau magnétique. Ces signes sont **arbitraires** comme les mots humains. Exemple de phrase : « Sarah donner pomme Mary » (pomme = triangle bleu).", "2:37-39"],
        ["Sarah manie des **concepts abstraits** (« le même que », « différent de », « le nom de », « la couleur de »), la négation, pose des questions. « Rouge » est un plastique gris : à « quelle est la couleur du mot rouge ? » elle répond « gris ». Elle utilise la langue comme **métalangue** et est **sensible à la syntaxe**, sans parler spontanément.", "2:38"],
        ["**Lana** (**Duane Rumbaugh**, années 1970) : des **lexigrammes** sur des boutons d'ordinateur ; elle appuie et entend le mot. Environ **100 lexigrammes**. Un ordinateur contrôle la console 24h/24 et **enregistre toutes les entrées et sorties**, c'est l'avantage de l'expérience. **Kanzi** : même principe.", "2:40-41"]
      ]},
      { titre: "7. Les finalités de la communication animale", points: [
        ["**(i) Maintenir l'appartenance au groupe** (« identité coloniale ») : l'odeur de la colonie permet aux sentinelles des **fourmis** de laisser entrer les leurs et de chasser les intrus ; les mères **vervets** reconnaissent les cris de leurs enfants et ceux des autres.", "2:42"],
        ["**(ii) Fixer les relations** (rôles et hiérarchies) : chez les **abeilles**, la reine et les ouvrières (nettoyeuse, nourrice…) ; chez les **chiens**, la domination par le corps droit et rigide, les oreilles, la queue, le regard direct.", "2:42"],
        ["**(iii) Assurer la pérennité du groupe** (protection, alimentation, reproduction) : les phéromones des fourmis informent sur l'état de santé, une fourmi attaquée émet une **phéromone d'alerte** ; stridulation ; cris d'alarme du vervet.", "2:42"]
      ]},
      { titre: "Conclusion sur la communication animale", points: [
        ["Un **nombre restreint d'éléments**, de combinaisons et d'informations. La communication concerne surtout la **satisfaction des besoins**, ancrée dans **l'ici et maintenant**.", "2:45"],
        ["**Créativité quasi absente**, combinaisons limitées (illimitées dans les langues humaines), **pas d'abstraction**. Transmission en contact direct, pas de stockage pour un usage futur : c'est **une communication de l'instant, qui ignore l'histoire**.", "2:45"],
        ["Mais elle est **plus complexe que le schéma émetteur / récepteur** : un signal sexuel s'adresse aussi aux rivaux (pour les décourager) et peut exposer l'animal aux prédateurs. Chaque destinataire lit différemment le même signal : un choix en termes de **coûts / bénéfices**.", "2:46"]
      ]}
    ],

    p3: [
      { titre: "1. Le corps communique", points: [
        ["Le « langage » du corps est étudié par la médecine, la psychanalyse, la phénoménologie, la **kinésique**, la **proxémique**, la **prosodie**. C'est d'abord la médecine qui a étudié le corps.", "3:3"],
        ["**1.1 Sémiologie médicale** : les maladies se manifestent par des **symptômes** ; relation de **cause à effet**, selon le modèle de l'**inférence** (si /boutons rouges/ alors « varicelle »). Ce sont des signaux non intentionnels : **des indices**.", "3:3"],
        ["Le diagnostic différentiel est essentiel. Autisme, névrose, aphasie, dépression affectent la communication, avec des manifestations non verbales différentes (posture renfermée, gestualité convulsive, tics).", "3:4"],
        ["**1.2 Phénoménologie** : **Maurice Merleau-Ponty**, *Phénoménologie de la perception* (**1945**). Le **schéma corporel** est l'image que nous nous faisons de notre corps (données intéroceptives, proprioceptives, extéroceptives) : sentir, se sentir, se sentir sentant. Il se structure dès les premiers jours (moi / non-moi).", "3:4"],
        ["La « réponse » de l'environnement à nos actions est liée au concept de soi, à l'estime de soi et à la confiance en soi.", "3:4"]
      ]},
      { titre: "1.3 Sémiologie de la communication : indice, signal, symbole", points: [
        ["**Georges Mounin et Luis Jorge Prieto** (années 1970) : la sémiologie de la communication étudie **tous les systèmes de communication non linguistiques** ; la linguistique étudie les signes verbaux.", "3:5"],
        ["Trois types de signes **selon la progression dans l'intentionnalité** :", "3:5"],
        ["**Indice** : fait perceptible qui renseigne sur un autre fait non immédiatement perceptible. **Non intentionnel.** Ex. : des traces de pas dans la neige (on reconnaît oiseau, chien, humain).", "3:5"],
        ["**Signal** : fait produit **intentionnellement ou non**. Ex. : un sifflement.", "3:5"],
        ["**Symbole** : signal **intentionnel**, dans un **rapport constant, pour une culture donnée**, avec ce qu'il signifie. Ex. : la balance → la justice.", "3:5"],
        ["Le **signe linguistique** (le mot) est **arbitraire** : aucune ressemblance entre signifiant et référent, rapport fixé par convention (chat, *cat*, *кот*). Il est intentionnel, sauf exceptions pathologiques (logorrhée, glossolalie). « Chat » a quatre lettres, /chat/ a quatre pattes ; « **le mot chien ne mord pas** ».", "3:11"],
        ["Deux types de signes selon la relation signifiant / référent : **arbitraire et motivé**. Un signe **motivé** s'explique par une logique de ressemblance ou de construction.", "3:11"],
        ["Exemples de signes motivés : **onomatopées** (« miaou », « tic-tac ») ; **mots construits** (« tire-bouchon », « porte-plume ») ; **signes visuels ou iconiques** (un cœur, les panneaux routiers, les pictogrammes, toutes les images).", "3:12"],
        ["**Magritte**, *La Trahison des images* (1929) : relation motivée entre signe visuel et référent. **Kandinsky**, *Saint Georges et le dragon* (1910) : ressemblance moindre, mais relation toujours motivée.", "3:13-14"],
        ["La langue a-t-elle une iconicité intrinsèque ? L'exemple **Takete / Maluma** (forme pointue / forme arrondie). Les pictogrammes de toilettes montrent des **degrés d'iconicité**.", "3:15-16"]
      ]},
      { titre: "Les signes du corps (tableau)", points: [
        ["Recul brusque → peur, étonnement. Sueur → peur, maladie, effort. Larmes → joie, tristesse. Figement bouche entrouverte → surprise. Sourire → joie, malignité. Froncer les sourcils → colère, incompréhension.", "3:17"],
        ["Doigt pointé → montrer. Main devant les yeux de l'autre → « ne regarde pas ». Frapper du pied → agacement, impatience. Frapper des mains → applaudir, appeler. Modulation de la voix → solennité (grave), excitation (vite), colère (fort).", "3:17"]
      ]},
      { titre: "2. L'École de Palo Alto", points: [
        ["La « **nouvelle communication** » ou le « **collège invisible** » : une équipe pluridisciplinaire réunie dans les **années 1950** : anthropologues et linguistes (**Gregory Bateson, Edward T. Hall, Ray Birdwhistell**), psychiatres (**Donald Jackson, Paul Watzlawick**).", "3:19"],
        ["Études expérimentales sur des enregistrements vidéo, « **la cigarette de Doris** » : **au moins 75 % de la communication est non verbale**.", "3:19"],
        ["Un enfant s'initie d'abord au **code non verbal** (sourires, mimiques, gestes, intonations), auquel il répond par mimétisme.", "3:19"],
        ["La communication ne relève pas d'une théorie du message (encodage, transmission, décodage : Shannon et Weaver) mais d'**une théorie du comportement et de la relation**.", "3:19"],
        ["Tous les types d'interaction sont étudiés : échanges ordinaires, rites, comportements pathologiques, relations diplomatiques. **Tout comportement a une signification** et participe d'une interaction (le hall de gare).", "3:20"],
        ["L'axiome « **on ne peut pas ne pas communiquer** » dépasse le **logocentrisme** (l'idée qu'il n'y aurait pas de communication sans paroles). Même silencieuse, une personne influence la situation, donc participe.", "3:20"],
        ["La culture **s'incorpore** et s'exprime par le corps : marcher, s'asseoir, écouter, regarder, toucher.", "3:21"],
        ["**Birdwhistell** : « Un individu ne communique pas ; il prend part à une communication ou il en devient un élément. […] il n'est pas auteur de la communication, il y participe. »", "3:21"],
        ["Trois niveaux : **verbal**, **para-verbal** (intonations, rythme, débit, timbre) et **non verbal** (proxémie, postures, mimo-gestuelle). L'échange verbal n'est qu'un aspect.", "3:21"],
        ["Birdwhistell fonde la **kinésique** (intensité, durée, étendue, rythme, flux gestuel ; « accents gestuels » régionaux).", "3:22"],
        ["**Communication orchestrale** : les personnes participent comme les musiciens d'un orchestre, avec seulement une grille de la situation. Elle s'oppose à la communication **télégraphique** de Shannon et Weaver : **modèle de partage vs modèle de transmission**.", "3:22-23"],
        ["Palo Alto récuse la psychanalyse freudienne et défend les **thérapies brèves** (le thérapeute propose une solution). Watzlawick : *Faites vous-même votre malheur* (1983), *Comment réussir à échouer* (1986), *Stratégie de la thérapie brève* (1997, avec Nardone).", "3:23"]
      ]},
      { titre: "Les 5 axiomes de la communication (1967)", points: [
        ["*Une logique de la communication* (**1967**), **Paul Watzlawick, Janet Helmick Beavin et Don D. Jackson**.", "3:28"],
        ["**(i)** « Il est **impossible de ne pas communiquer** ».", "3:28"],
        ["**(ii)** Communication **verbale (digitale)** et **non verbale (analogique)** : le contexte, le cadre, la prosodie, les silences ; la méta-communication.", "3:28"],
        ["**(iii)** Deux niveaux : **contenu** (information) et **relation** (domination, reproches, scènes de ménage, cercle vicieux).", "3:28"],
        ["**(iv)** **Ponctuation de la séquence des faits** : fixer le début et la fin ; « la prédiction qui se réalise ».", "3:28"],
        ["**(v)** Interaction **symétrique** (à égalité) ou **complémentaire** (position haute / position basse) ; la communication paradoxale (double bind).", "3:28"]
      ]},
      { titre: "Le double bind (double contrainte)", points: [
        ["En **1956**, **Bateson, Jackson, Haley et Weakland** publient « Vers une théorie de la schizophrénie », où apparaît le concept de **double bind**.", "3:24"],
        ["Situation émotionnellement pénible où **deux injonctions qui s'opposent** sont intensifiées par **une troisième contrainte** qui empêche d'en sortir. L'ambiguïté est imposée et maintenue : la situation est **insoluble**. « Le fléau de notre temps ».", "3:24"],
        ["Exemple cité par Didier Anzieu (2012) : « **Tu es un monstre ; seule une maman peut t'aimer** ». Autres exemples : « **Soyez spontané !** » dit par un jury d'embauche ; « Désobéissez ! ».", "3:24"],
        ["« Condamné si vous le faites ; condamné si vous ne le faites pas. » La dernière séquence d'*À bout de souffle* (Godard, 1960) est un double bind.", "3:25"]
      ]},
      { titre: "3. La PMG : posturo-mimo-gestualité (Cosnier)", points: [
        ["**Jacques Cosnier**, *Geste, cognition et communication* (Nouveaux Actes Sémiotiques n°52-53-54, PULIM, **1997**).", "3:29"],
        ["Principes directeurs : **interactivité** (les énoncés sont **co-produits** par les interactants, activité conjointe émetteur / récepteur) et **multicanalité** (mélange variable de verbal et de non verbal, le non verbal comprenant le vocal, la prosodie, et la PMG).", "3:29"],
        ["Dans une interaction s'échangent un **contenu propositionnel** (aspect informatif) et une **maintenance et régulation de la relation**.", "3:29"],
        ["**L'énoncé total** : « Il n'existe pas une langue des gestes qui serait parallèle à une langue verbale, il existe une **composante gestuelle du langage**. » Verbal et non verbal s'analysent **en synergie**.", "3:30"],
        ["Classification fonctionnelle **corpo-centriste** : les **déictiques d'auto-désignation** ; la **loi de désignation** : le corps du parleur sert d'ancrage (« j'ai mal au ventre » comme « il a mal au ventre » : le parleur désigne son propre ventre).", "3:30"],
        ["Les **déictiques spatio-temporels** (ici, là, maintenant, hier…) ne se comprennent que par rapport à la **situation d'énonciation**, le **je-ici-maintenant** : « demain » dit le 10/01/2020, c'est le 11/01/2020.", "3:31"],
        ["Deux grands types de gestes : **communicatifs** (liés à l'échange discursif) et **extra-communicatifs** (gestes de confort).", "3:31"]
      ]},
      { titre: "Les gestes communicatifs et extra-communicatifs", points: [
        ["**Quasi-linguistiques** : substituables à la parole. « Ras le bol » (poignet au front), « fou » (index sur la tempe), « se tourner les pouces ».", "3:32"],
        ["**Référentiels co-verbaux** : simultanés à la parole, ce sont les **gestes déictiques** (autoréférentiels et spatio-temporels).", "3:32"],
        ["**Illustratifs iconiques** : **spatiographiques** (« il était face à moi »), **pictographiques** (« un type énorme » : bras en arrondi), **kinémimiques** (« il court ! » : bras qui miment la course).", "3:32"],
        ["**Expressifs co-verbaux** : mimiques faciales des émotions (joie, peur, colère, tristesse, dégoût, surprise), **culturellement déterminées**.", "3:33"],
        ["**Paraverbaux** : gestes de **battement** ou de scansion qui rythment la parole (compter sur ses doigts ; « je-ne-suis-pas-d'accord ! » avec un coup de poing à chaque syllabe).", "3:33"],
        ["**Synchronisateurs** (dès le 2e jour après la naissance) : **autosynchronie** (le locuteur coordonne ses gestes et sa parole) et **hétérosynchronie** (l'allocutaire coordonne ses gestes avec les paroles du locuteur).", "3:33"],
        ["**Extra-communicatifs** (confort) : auto-contact, grattages, manipulation d'objets (bague, bracelets, cravate), balancement du pied. **Synchronisme extra-communicatif** : marcher au même rythme (rôle des neurones miroirs) ; la danse en est une version stylisée.", "3:34"],
        ["Normes implicites : **tours de parole**, règles prosodiques (pauses qui invitent à parler). Les messages du corps **mentent rarement**. L'usage du corps est **spécifique à chaque ethnie**.", "3:35"]
      ]},
      { titre: "La communication affective", points: [
        ["Tout dialogue comporte un travail d'**attribution d'affects à autrui** et d'**affichage de ses propres affects**. C'est normé par la culture : les « **règles de cadrage affectif** ».", "3:36"],
        ["Communication **émotionnelle** : manifestations **spontanées**, non contrôlées (tremblements, pâleurs, sueurs, pleurs, rires). Communication **émotive** : **élaboration secondaire**, mise en scène contrôlée des affects, voire **simulation** (jouer un rôle, ex. *France* de Dumont).", "3:36-37"],
        ["Affects **toniques** (stables : « avoir bon caractère ») vs affects **phasiques** (passagers : « ce matin je suis triste »).", "3:37"],
        ["**Échoïsation** (synchronie mimétique) : le rire appelle le rire, la tristesse appelle la tristesse, par contagion ou appréhension empathique.", "3:37"],
        ["**Convergence** communicationnelle : sourires et mimiques syntones, contact oculaire, orientation frontale du tronc, hochements de tête, posture inclinée vers l'avant, gesticulation co-verbale.", "3:38"],
        ["**Divergence** communicationnelle : asynchronie des mimiques, absence de sourire, contacts oculaires rares et brefs, mouvements des jambes et immobilité des bras, rareté des hochements de tête, posture distanciée, fréquence des extra-communicatifs autocentrés.", "3:38"]
      ]},
      { titre: "4. La proxémique (Edward T. Hall)", points: [
        ["Fondateur : **Edward T. Hall (1963)**. La proxémique étudie la perception et l'usage de l'espace par l'homme : « l'usage que l'homme fait de l'espace en tant que **produit culturel spécifique** ».", "3:39"],
        ["Comme l'animal a un territoire, l'homme a un espace individuel, une **bulle psychologique**. La relation à l'espace est **inconsciente**. But de Hall : construire un **système**, l'équivalent de la structure phonologique ou du tableau périodique (Winkin, 1996).", "3:39"],
        ["Chaque culture a son code. Pour le monde nord-occidental : **4 distances**, chacune en mode proche et mode éloigné.", "3:40"],
        ["**Intime** : proche = corps à corps (acte sexuel, lutte), vision brouillée ; éloigné = **15 à 44 cm**, odeur, mi-voix, famille. Si un étranger y entre, on recule, on fuit le regard (métro aux heures de pointe).", "3:42"],
        ["**Personnelle** : proche = **45 à 74 cm**, à portée de main, familiarité ; éloigné = **75 à 125 cm**, limite de l'emprise physique, bavardages, collègues.", "3:42"],
        ["**Sociale** : proche = **1,25 à 2,10 m**, voix pleine, pas de contact, table ou guichet (distance administrative) ; éloigné = **2,10 à 3,60 m**, coefficient hiérarchique ou souci de tranquillité.", "3:42-43"],
        ["**Publique** : proche = **3,60 à 7,50 m**, individu face à une collectivité (professeur / élèves), information formelle ; éloigné = **7,50 m et plus**, homme politique ou comédiens, feed-back minimal, **communication spectacle**.", "3:43"],
        ["**Espaces à organisation fixe** (*La dimension cachée*) : villes planifiées (centre / périphérie, place / rue), couloirs, jardin (vestige du potager), haie ou muret (**protection symbolique** entre public et privé), sonnette (il faut demander la permission d'entrer).", "3:44-45"],
        ["**Espaces à organisation semi-fixe** : **Humphry Osmond**, médecin dans un hôpital américain, relie l'espace semi-fixe et le comportement. Espace **sociofuge** (qui sépare : salles d'attente des gares) vs **sociopète** (qui rassemble : terrasses de cafés, vieux drugstores).", "3:45-47"],
        ["**Robert Sommer**, cafétéria de l'hôpital : conversations **en coin (F-A) 2 fois plus nombreuses que côte à côte (C-B)**, elles-mêmes 2 fois plus que **face à face (C-D)**, 3 fois plus que **en diagonale (C-F)**. Solution : de petites tables carrées dans le hall, et **les conversations entre personnes âgées ont doublé**.", "3:48-49"]
      ]},
      { titre: "Conclusion : le corps et ses langages", points: [
        ["Mimiques, regards, gestes, posture, distance, orientation : le corps est **producteur de signaux** et **surface où ils se manifestent**.", "3:50"],
        ["Le corps produit du sens **au-delà des intentions** : communication involontaire.", "3:50"],
        ["Les signaux du corps ont des **degrés de conscience et d'intentionnalité variables** et sont **multicanaux** : le corps produit des **indices** (symptômes), des **signaux**, des **symboles** ou des signes.", "3:50"]
      ]}
    ],

    p4: [
      { titre: "1. Le schéma de Shannon et Weaver (1949)", points: [
        ["**Claude Shannon et Warren Weaver**, *Théorie mathématique de la communication* (**1949**).", "4:2"],
        ["Le message peut être en mots écrits ou parlés, en images, en musique. **L'émetteur transforme le message en signal**, envoyé par le **canal** jusqu'au **récepteur**.", "4:3"],
        ["Exemples : au **téléphone**, l'émetteur transforme la pression du son vocal en courant électrique variable (le signal), qui parcourt un fil métallique (le canal). En **télégraphie**, l'émetteur encode des mots en séquences de courant (points, traits, blancs).", "4:3"],
        ["Pour le **langage parlé** : la source est le **cerveau** de X, l'émetteur son **organe vocal**, le signal la pression sonore, le canal **l'air**, le récepteur **l'oreille** de Y (un « émetteur inversé »), la destination le cerveau de Y (Bougnoux, 1993).", "4:4"],
        ["La réflexion porte sur **la transmission d'un signal**, pas sur le contenu ni la signification. Le schéma réduit la communication orale à un transfert d'ondes sonores.", "4:4"],
        ["Le **bruit** : les altérations qui s'ajoutent au signal (distorsions du son ou de l'image, erreurs de transmission). Pour Shannon et Weaver, il faut **éliminer le bruit** pour améliorer le signal.", "4:5"],
        ["**Information ≠ signification.** Un choix binaire = une unité d'information, un **bit** (*binary digit*). Deviner une carte parmi 32 : chaque question élimine la moitié des possibilités, il faut **5 bits**.", "4:5"]
      ]},
      { titre: "2. Le schéma de Jakobson : 6 facteurs, 6 fonctions", points: [
        ["Avec **Roman Jakobson** (1963), **le message a une signification**. Il introduit les notions de **fonction du langage**, de **destinateur** et de **destinataire**.", "4:6"],
        ["**6 facteurs** : le destinateur envoie un message au destinataire ; le message requiert un **contexte** (le « référent »), un **code** commun en tout ou en partie, et un **contact**, c'est-à-dire un canal physique **et une connexion psychologique** (Jakobson, 1963).", "4:6"],
        ["**6 fonctions** : destinateur → **émotive** (expressive) ; destinataire → **conative** ; message → **poétique** ; contexte → **référentielle** ; contact → **phatique** ; code → **métalinguistique**.", "4:7-8"],
        ["Les 6 fonctions sont **solidaires**, mais l'une peut dominer. Dès l'Antiquité : *docere* (informer), *movere* (émouvoir), *placere* (plaire). **Karl Bühler** (1936) : représentation, appel, expression.", "4:9"]
      ]},
      { titre: "Les 6 fonctions en détail", points: [
        ["**Émotive / expressive** (destinateur) : il communique ses impressions, émotions, jugements (« J'ai faim », « Je suis triste »). La couche purement émotive : les **interjections** (« Zut ! »), à la forme phonique inhabituelle, qui résument un énoncé.", "4:10"],
        ["**Conative** (destinataire) : attirer son attention pour qu'il se sente **concerné** (la « cible » en publicité, le lectorat, le public ; la propagande). Marques : **impératif, vocatif, interpellation**.", "4:11"],
        ["Conatif **direct** : « va ouvrir la porte ». Conatif **indirect** : « on sonne » (le destinataire doit faire une inférence). Exemples d'affiches du cours : interpeller « les jeunes », propagande, humour, responsabiliser.", "4:11-18"],
        ["**Poétique** (message) : l'énoncé joue avec **sa forme** (ordre des mots, sonorités, point de vue). Elle n'est pas limitée à la poésie : elle y est **dominante**, ailleurs **subsidiaire**.", "4:19"],
        ["**Référentielle / dénotative** (contexte) : ce dont on parle (« Il pleut »). Prédominante mais **jamais seule**. Strictement référentiels : « route barrée », télégrammes, étiquettes. « On en dit toujours plus que ce qu'on voulait dire. »", "4:21"],
        ["**Phatique** (contact) : **maintenir le contact** (« hein », « n'est-ce pas », « tu vois », « Allô, André ? »). Elle précède le langage articulé (gazouillis du nouveau-né). **Tous les comportements de politesse** (salutations, remerciements) en relèvent.", "4:23-24"],
        ["**Malinowski** (1923) : questions sur la santé, remarques sur le temps… ne servent pas à informer, elles remplissent **une fonction sociale**.", "4:24"],
        ["**Métalinguistique** (code) : utiliser le même code (ex. les feux de circulation) et **prendre le langage comme objet** (« le mot *lit* a trois lettres »). Corriger « le livre *que* je t'ai parlé » en « *dont* » : activité métalinguistique **sans** métalangage ; expliquer la règle du pronom relatif : **avec** métalangage.", "4:25-26"],
        ["Il faut la même langue **et des champs culturels qui coïncident au moins en partie**.", "4:26"]
      ]},
      { titre: "Dénotation, connotation, métalangage ; réception et compréhension", points: [
        ["**Barthes (1967)**, trois ordres du langage : **dénotation** (« nuit » = obscurité), **connotation** (« la nuit des temps » = le chaos, une époque ancienne), **métalangage** (« *nuit* est la racine de *nuitée* »).", "4:26-28"],
        ["**Recevoir un message n'est pas le comprendre** : les champs culturels ne se recouvrent jamais totalement, d'où l'échec (aphasie de Wernicke) ou la nécessité de traduire.", "4:29-30"],
        ["Seule la **langue naturelle a le pouvoir d'interpréter** (Benveniste) : elle peut parler d'elle-même et de tous les autres langages.", "4:30"],
        ["**Décodage** = opération mécanique, exécutée par un appareil. **Interprétation** = opération subjective et culturelle.", "4:31"],
        ["**Défauts de Jakobson** : il ignore les facteurs extra-linguistiques (PMG), psychologiques et culturels ; il imagine un « **tête-à-tête idéal** » et transparent.", "4:31"]
      ]},
      { titre: "3. Kerbrat-Orecchioni (1980) : les compétences", points: [
        ["**Catherine Kerbrat-Orecchioni** (1980) décrit l'échange en termes de **compétences** : la langue n'est pas maîtrisée également par tous, l'échange n'est **ni harmonieux ni limpide**.", "4:32"],
        ["Au lieu d'un code identique : **deux idiolectes partiellement communs**. Elle prend en compte la **dissymétrie** entre production et reconnaissance, et place au centre les « **ratés** » (dont l'impolitesse). « La compréhension est un cas particulier du malentendu » (**Culioli**).", "4:32"],
        ["Elle distingue le **référent** de la **situation** (contraintes de l'« univers du discours ») et les **modèles de production** et **d'interprétation**. Exemple : « L'ordre sera maintenu coûte que coûte » (ministre) = **promesse** aux bons citoyens + **menace** aux fauteurs de troubles.", "4:34"],
        ["**Compétences linguistiques** : phonétiques (enrhumé, accent), syntaxiques (construire des phrases), sémantiques (cohérence, sinon « coq-à-l'âne »), paralinguistiques (prosodie : « tu ne sors pas ce soir ! » / « ? »).", "4:36"],
        ["**Compétences idéologiques et culturelles** (connaissances, valeurs, convictions) ; **déterminations psy** (états phasiques ou toniques, cf. Cosnier) ; **univers du discours** : la situation (écrit ou oral, lieu, temps, participants) et les **contraintes du genre** (conte, altercation, consultation, cours).", "4:37"],
        ["Limite : un modèle **verbo-centriste**, sans PMG ni proxémique.", "4:37"]
      ]},
      { titre: "4. Le modèle des intentions d'Umberto Eco (1973)", points: [
        ["**Umberto Eco** remet en cause la **transparence** : on peut communiquer pour **simuler ou dissimuler** une identité, une condition, une passion ; l'allocutaire juge l'intention. Il insiste sur la **dimension stratégique**.", "4:38"],
        ["Un tableau de **8 cas** selon 3 critères : émission **volontaire (+) ou involontaire (−)** ; réception **consciente (+) ou subliminale (−)** ; **intention attribuée** par le récepteur (+ ou −).", "4:39-40"],
        ["**(1) Communication normale** (+ + +) : c'est la communication selon Jakobson. **(2) Simulation** (+ + −) : émission volontaire (vêtements, accent) perçue comme involontaire, comme **le camouflage** des animaux.", "4:40"],
        ["**(3)(4)** émis volontairement, perçus inconsciemment ; **(5)(6)** émis involontairement, perçus consciemment. Exemple : des élèves qui rangent leurs affaires, et le prof qui y voit (ou non) un signal de fin de cours.", "4:41"],
        ["**(7)** involontaire et subliminal, interprété après coup comme volontaire (quelqu'un glisse et s'exclame). **(8)** personne ne prend conscience de l'échange : cela **contredit Palo Alto** (« on ne peut pas ne pas communiquer »).", "4:42"],
        ["Conclusion : la communication commence par **l'attribution d'intention et de sens**. La communication « normale » de Jakobson n'est qu'**un cas sur huit**. Eco envisage la **non-communication**.", "4:43"]
      ]},
      { titre: "5. La pragmatique et Erving Goffman", points: [
        ["**Pragmatique linguistique** : le langage en situation d'énonciation, le discours en acte (*speech event*), ses usagers. **Ethnométhodologie** : Harold **Garfinkel** (1967) ; l'analyse conversationnelle décrit comment surgit un tour de parole. **Sociolinguistique** : Labov, Fishman, Goffman.", "4:44"],
        ["**Erving Goffman** (1922-1982), **élève de Ray Birdwhistell** : il applique à sa propre société les **méthodes d'observation** de l'anthropologie.", "4:44"],
        ["Ouvrages : *La Mise en scène de la vie quotidienne* (1973), *Les Rites d'interaction* (1974), *Stigmates* (1975), *Asiles* (1979), *Façons de parler* (1987).", "4:46"],
        ["**A) Ordre social** : une interaction n'est jamais une simple suite d'actions / réactions, c'est toujours « **un certain type d'ordre social** », qui fonctionne comme la société entière. Dans l'interaction, **chacun préserve la face de l'autre et la sienne** ; seules des sanctions morales maintiennent l'ordre.", "4:46-47"],
        ["**B) La face** : chacun donne **une image valorisée de lui-même**, organise une **mise en scène de son Moi**. La face est un « **territoire du moi** » qu'on protège.", "4:48"],
        ["**Brown et Levinson** (*Politesse*, 1987) : **face négative** = le territoire qu'on garde secret ; **face positive** = ce qu'on expose (au sens photographique, pas bon / mauvais).", "4:48"],
        ["L'enjeu est aussi d'**établir et maintenir le contact**. Deux moments délicats : **l'ouverture et la fin** de l'interaction (risque d'intrusion, de rejet, de **perdre la face**).", "4:49"],
        ["Le sujet est un **portemanteau** : il porte plusieurs **masques** selon la situation. Deux attitudes : **contractuelle** (les rituels) et **conflictuelle** (les stratégies).", "4:51"],
        ["**Le langage recouvre la relation** sans l'exprimer directement : John demande à Marsha ce qu'elle a pensé du film, et chacune de ses 8 réponses possibles parle en fait de leur relation (*Façons de parler*, 1987).", "4:53"],
        ["Les **localisateurs** : « le petit machin sous l'évier » à la quincaillerie ; ce sont des « marques d'essai » (Sacks et Schegloff). Entre inconnus, on cherche des connaissances communes pour pouvoir faire allusion.", "4:54-55"]
      ]},
      { titre: "Les rituels et les stratégies (Goffman)", points: [
        ["Fonctions du **rituel** : **diminuer les risques** de chaque interaction ; faciliter le rapprochement et l'interruption **sans offense**.", "4:49"],
        ["**1. Rituels d'accès et de congé** : ouverture et fermeture de l'interaction (**salutations, adieux**).", "4:50"],
        ["**2. Rituels de confirmation** : montrer l'attention portée à autrui et confirmer sa face : « t'as raison », « oui, bien sûr, mais », et en non verbal la distance, le hochement de tête, le sourire.", "4:50"],
        ["**3. Rituels de réparation** : réparer une offense réelle ou potentielle, après ou même **avant** (« Pardon… » – « C'est moi ! » ; s'excuser avant d'emprunter un stylo).", "4:50"],
        ["**Stratégies** des échanges conflictuels : **masquage, démasquage, contre-démasquage**, semblables au camouflage animal.", "4:52"],
        ["Exemple de **l'opossum** : il fait le mort (**masquage**) ; le prédateur le touche (**démasquage**) ; il reste rigide et dégage une odeur qui fait fuir (**contre-démasquage**). L'interaction est spontanée quand domine l'attitude contractuelle, **programmée** quand elle devient stratégique.", "4:52"],
        ["Exemple de conversation stratégique : *Nous, les vivants* (Roy Andersson, 2007), le dialogue d'Ole et de sa femme.", "4:56"]
      ]},
      { titre: "La politesse (Kerbrat-Orecchioni, 2010)", points: [
        ["« L'impolitesse en interaction » (**2010**) : l'interaction est un balancier entre **FTA** (*Face Threatening Acts*, actes menaçant la face) et **FFA** (*Face Flattering Acts*, actes flatteurs). La **politesse** = stratégies de **ménagement et de valorisation** des faces d'autrui, pour préserver l'ordre de l'interaction.", "4:57"],
        ["**Politesse** : « Je voudrais une baguette » (conditionnel). **Hyperpolitesse** : « Pourriez-vous avoir l'amabilité… » (excès, peut basculer dans l'impolitesse par ironie). **Non-politesse** : « Une gauloise filtre » (absence **normale** au tabac). **Impolitesse** : « Je veux une baguette » (absence **anormale**). **Polirudesse** : pseudo-politesse ou pseudo-impolitesse.", "4:57"],
        ["Combiner attaque et politesse : un **adoucisseur** (politesse négative, qui peut basculer si l'adoucisseur est insuffisant) ; ou un FTA sous **une enveloppe courtoise** (« agression tropique ») où le sens dérivé l'emporte (métaphore, ironie).", "4:58"],
        ["La politesse ostentatoire sert surtout à construire **l'ethos du locuteur**.", "4:58"]
      ]},
      { titre: "Conclusion sur la communication verbale", points: [
        ["La partie la plus dynamique des échanges est **linguistique** : usages, codes, politesse, étiquette. La communication mêle **éthique et esthétique**.", "4:59"],
        ["**Jeu de miroirs** : « Je sais que tu sais » (Ronald **Laing**), jusqu'à « je sais que tu sais que je sais que tu sais ». Seuls les humains conçoivent ces **méta-représentations croisées**.", "4:59"],
        ["Au-delà des besoins primaires : des **valeurs symboliques** (politesse, idéaux, face, identité), la quantité et la qualité des échanges, la **transmission du patrimoine culturel**.", "4:60"]
      ]}
    ],

    p5: [
      { titre: "1. La communication médiatisée : 3 critères", points: [
        ["Le **média** est un moyen de communication ou de diffusion d'information. On classe les technologies selon **3 critères** : **réversibilité / irréversibilité**, **synchronie / asynchronie**, **unicité / multiplicité des pôles**.", "5:2"],
        ["**Réversible** : l'émetteur peut devenir récepteur et inversement (la télécopie). **Irréversible** : télévision, radio ; le flux va de la source vers la cible, **pas de rétroaction** sur le même canal.", "5:2"],
        ["**Synchronie** (pour les médias réversibles) : échange en temps réel ou différé. Télécopie, courriel, poste = réversibles mais **asynchrones**. Téléphone = réversible et **synchrone** (on peut interrompre). Pour un média irréversible, la question ne se pose pas.", "5:4"],
        ["**Pôles** : Shannon et Weaver = 2 pôles. TV, radio = **un à plusieurs** (structure hiérarchique). Télécopie, courriel = **plusieurs à un** (le soutien des citoyens aux juges de Milan, enquête « mains propres »).", "5:6-7"],
        ["**Internet** permet toutes les formes ; la vraie nouveauté est **plusieurs à plusieurs** (la visioconférence, en synchronie).", "5:8"],
        ["Tableau : télévision et radio = un à plusieurs, irréversibles ; téléphone = un à un, réversible, synchrone ; télécopieur et courrier = réversibles, asynchrones ; Internet = toutes les formes + plusieurs à plusieurs, réversible ou non, synchrone ou non.", "5:9"]
      ]},
      { titre: "2. L'IA : caractéristiques", points: [
        ["Un **moteur de recherche très performant**.", "5:10"],
        ["**Plusieurs critères de recherche** : le **Prompt Engineering** (l'art de rédiger les instructions).", "5:10"],
        ["La possibilité **d'approfondir** la recherche d'information.", "5:10"],
        ["Une **forme dialogique**, une **simulation** : emploi de **déictiques**, **reprise du thème**.", "5:10"],
        ["Une certaine **illusion de communication de face-à-face**.", "5:10"],
        ["Une certaine **prise de conscience de l'IA de ce qu'elle est** : **méta-communication** (communication sur la communication).", "5:10"]
      ]}
    ]
  },

  /* ------------------------------------------------------------------ */
  /* SUJETS : 21 sujets de contrôle officiels + 3 transversaux (bonus)   */
  /* plan = étapes du plan type ; points = checklist [texte, source]     */
  /* ------------------------------------------------------------------ */
  sujets: [
    { id: "p1-1", partie: "p1", officiel: true, src: "1:38",
      q: "Comment ont été découverts les neurones miroirs ? Comment les détermine-t-on ? Dans quels processus prennent-ils part ?",
      plan: [
        "Intro : les bases biologiques de la communication non verbale ; les neurones miroirs expliquent comment on « communique » avant même de parler.",
        "I. La découverte : 1992, Université de Parme, Gallese et Rizzolatti, en neurosciences.",
        "II. Les déterminer : ils s'activent dans 3 situations (exécuter, observer, imaginer la même action), d'où le nom « miroirs ».",
        "III. Les processus : imitation, reconnaissance des affects, empathie, anticipation des intentions, contagion émotionnelle.",
        "Conclusion / ouverture : Girard avait décrit le désir mimétique 30 ans avant ; on les retrouve dans le synchronisme des corps (Cosnier) et chez les baleines."
      ],
      points: [
        ["Date : 1992", "1:14"],
        ["Lieu : Université de Parme (Italie)", "1:14"],
        ["Chercheurs : Vittorio Gallese et Giacomo Rizzolatti, neurosciences", "1:14"],
        ["Activation quand on exécute une action", "1:14"],
        ["… quand on observe un autre l'exécuter", "1:14"],
        ["… quand on imagine cette action", "1:14"],
        ["Sens du mot « miroirs » : refléter ce qui se passe chez autrui", "1:14"],
        ["Processus : apprentissage par imitation", "1:14"],
        ["Processus : reconnaître les affects d'autrui + empathie", "1:14"],
        ["Processus : anticiper les intentions d'autrui", "1:14"],
        ["Processus : contagion émotionnelle, effets de masse", "1:14"],
        ["Ouverture : désir mimétique de Girard, décrit 30 ans avant", "1:15"],
        ["Ouverture : synchronisme extra-communicatif (marcher au même rythme)", "3:34"]
      ]},
    { id: "p1-2", partie: "p1", officiel: true, src: "1:38",
      q: "Qu'est-ce que le désir mimétique ? Qui l'a découvert ? Quel est le rapport entre le désir mimétique et les neurones miroirs ?",
      plan: [
        "Intro : l'imitation comme base de l'existence humaine selon René Girard, anthropologue.",
        "I. Le désir mimétique : définition, triangle mimétique (sujet, médiateur, objet), exemple des enfants et du jouet.",
        "II. Ses effets : rivalité, violence ; « faire de l'Autre un modèle, c'est en faire un rival » ; le bouc émissaire.",
        "III. Le rapport avec les neurones miroirs : Girard l'a décrit dès 1961, 30 ans avant leur découverte (1992) ; les neurones miroirs interviennent dans l'imitation.",
        "Conclusion : une intuition anthropologique confirmée par les neurosciences."
      ],
      points: [
        ["René Girard, anthropologue, depuis 1961", "1:15"],
        ["Définition : désirer être comme autrui → désirer les mêmes objets", "1:15"],
        ["Conséquences : rivalité, haine, violence", "1:15"],
        ["Exemple : enfants qui se disputent le même jouet", "1:15"],
        ["Les modèles deviennent des obstacles et les obstacles des modèles", "1:15"],
        ["« Faire de l'Autre un modèle, c'est faire de lui un rival »", "1:15"],
        ["Triangle mimétique et rôle du médiateur (prestige du modèle)", "1:16"],
        ["« C'est l'être qu'il désire » (Girard 1972)", "1:16"],
        ["Au moins une œuvre citée (*Mensonge romantique et vérité romanesque*, 1961)", "1:16"],
        ["Bouc émissaire : victime expiatoire qui apaise la violence du groupe", "1:17"],
        ["Rapport : Girard précède les neurosciences d'une trentaine d'années", "1:15"],
        ["Rapport : les neurones miroirs (1992) jouent un rôle dans l'imitation", "1:14"]
      ]},
    { id: "p1-3", partie: "p1", officiel: true, src: "1:38",
      q: "Qu'est-ce que l'empathie ? Quels sont les termes limitrophes ?",
      plan: [
        "Intro : un mot dont le sens a varié tout au long du XXe siècle.",
        "I. Origine : Einfühlung, Vischer (1873), Titchener, Lipps et le funambule.",
        "II. Définitions actuelles : se mettre à la place d'autrui (neurones miroirs) + changement de perspective (Berthoz) ; résonance du corps (Ricœur) ; dialogisme (Rabatel) ; construction sociale ; carence en empathie (France de Dumont).",
        "III. Termes limitrophes : sympathie, compassion, pitié, commisération, et ce qui les distingue.",
        "Conclusion : une capacité innée mais aussi culturellement stimulée ou inhibée."
      ],
      points: [
        ["Einfühlung : « ressentir l'autre de l'intérieur »", "1:19"],
        ["Robert Vischer, 1873 : projection de soi dans un objet", "1:19"],
        ["Titchener (empathy) et Lipps (exemple du funambule)", "1:19"],
        ["Se mettre à la place d'autrui, lien avec les neurones miroirs", "1:18"],
        ["Berthoz 2004 : changement de perspective et choix de référenciation", "1:18"],
        ["Citation Berthoz : pas d'empathie sans liberté de choisir son point de vue", "1:18"],
        ["Ricœur 2008 : résonance au niveau du corps propre", "1:18"],
        ["Rabatel 2014 : dialogisme interne, « des autres en soi »", "1:21"],
        ["Construction sociale et culturelle (cours d'empathie à l'école)", "1:21"],
        ["Carence : régression en curiosité, exemple de *France* (Dumont 2021)", "1:21-22"],
        ["Compassion : souffrir avec autrui comme à sa place (plus fort)", "1:20"],
        ["Pitié : affliction devant la souffrance, envie de la soulager, peut être offensante", "1:20"],
        ["Commisération (emploi littéraire) et sympathie", "1:18;1:20"]
      ]},
    { id: "p1-4", partie: "p1", officiel: true, src: "1:38",
      q: "Qu'est-ce que la communication chimique ? Chez quels organismes est-elle présente ?",
      plan: [
        "Intro : la forme la plus primitive de communication non verbale.",
        "I. Définition : de la communication interne entre cellules à la communication externe entre organismes ; hormone → phéromone.",
        "II. Chez quels organismes : cellules, serpents, humains (nouveau-né, sueur), fourmis, cafards.",
        "III. Particularités : information authentique car involontaire ; chemin direct vers le cortex ; l'expérience InsBot montre qu'on peut s'en servir pour modifier un comportement.",
        "Conclusion : odorat et toucher, sens les plus primitifs."
      ],
      points: [
        ["Interne (entre cellules) → externe (entre organismes)", "1:23"],
        ["Hormone (intérieur) → phéromone (extérieur) ; l'odorat l'extériorise", "1:23"],
        ["Odorat et toucher : sens les plus primitifs", "1:24"],
        ["Serpents : traces de phéromones (proies, partenaires)", "1:24"],
        ["Nouveau-né : reconnaît l'odeur de sa mère", "1:24"],
        ["Sueur humaine : indique peur, dégoût, bonheur", "1:24"],
        ["Informations authentiques car émission involontaire", "1:24"],
        ["Chemin olfactif direct : cortex sans passer par le thalamus", "1:24"],
        ["Fourmis : odeur de la colonie, phéromone d'alerte", "2:42"],
        ["Expérience InsBot : robot à phéromones, cafards amenés vers l'abri clair", "1:25-31"]
      ]},
    { id: "p1-5", partie: "p1", officiel: true, src: "1:38",
      q: "Comment peut-on décrire le nudge ? Quel est son contraire ?",
      plan: [
        "Intro : influencer sans contraindre.",
        "I. Définition : Thaler et Sunstein (2008), « coup de pouce », incitation douce et discrète, sans contrainte ni interdiction, qui utilise les biais cognitifs.",
        "II. Finalités et exemples : santé, recyclage, énergie ; mouche des urinoirs, lignes resserrées, cendriers-sondages, déclarations en ligne.",
        "III. Limite éthique : le contraire est le sludge ; nécessité de garde-fous.",
        "Ouverture possible : l'expérience des cafards InsBot, où une influence discrète modifie une préférence naturelle."
      ],
      points: [
        ["Richard Thaler et Cass Sunstein, 2008", "1:32"],
        ["« Coup de pouce » : incitation douce et discrète", "1:32"],
        ["Sans contrainte ni interdiction", "1:32"],
        ["Utilise les biais cognitifs", "1:32"],
        ["Finalités : obésité, recyclage, énergie", "1:32"],
        ["Exemple : la mouche au fond des urinoirs", "1:32"],
        ["Exemple : lignes blanches resserrées pour ralentir", "1:32"],
        ["Autres exemples : cendriers-sondages, déclarations en ligne (2013-2014)", "1:32"],
        ["Doit être éthique, avec des garde-fous", "1:32"],
        ["Contraire : le sludge", "1:32"]
      ]},
    { id: "p1-6", partie: "p1", officiel: true, src: "1:38",
      q: "Qu'est-ce que l'umwelt ? Quels sont les deux schémas fondamentaux de comportement des espèces vivantes ?",
      plan: [
        "Intro : chaque espèce perçoit un monde différent.",
        "I. L'umwelt : Jacob von Uexküll (1920), monde propre à chaque espèce, qui dépend de ses organes et de ses perceptions.",
        "II. L'exemple de la tique : 3 facteurs seulement (acide butyrique, 36°, pilosité).",
        "III. Les deux schémas : prédation (euphorie, attraction) et fuite (dysphorie, répulsion).",
        "Conclusion : la communication dépend de ce que chaque espèce est capable de percevoir."
      ],
      points: [
        ["Jacob von Uexküll, 1920", "1:35"],
        ["Monde propre à chaque espèce, qui réagit à certains facteurs et pas à d'autres", "1:35"],
        ["Dépend de ce que l'organisme perçoit ; les organes prédéterminent les perceptions", "1:35-36"],
        ["Tique : odeur de l'acide butyrique", "1:35"],
        ["Tique : température de 36°", "1:35"],
        ["Tique : pilosité de la peau", "1:35"],
        ["Prédation : proie ou partenaire sexuel, investissement euphorique, attraction", "1:35"],
        ["Fuite : prédateur, investissement dysphorique, répulsion", "1:35"]
      ]},

    { id: "p2-1", partie: "p2", officiel: true, src: "2:47",
      q: "Dans quel sens le comportement rituel peut-il être considéré comme une communication animale ?",
      plan: [
        "Intro : l'éthologie observe des comportements répétés qui transmettent un message.",
        "I. La ritualisation : rendre des gestes répétitifs et mécaniques ; passage de l'individuel au collectif.",
        "II. Ce que le rite communique : menace / apaisement, éviter la violence (Huxley 1971), réponse prévisible du destinataire.",
        "III. La parade nuptiale : signal multimodal, variable, avec une finalité (paradisier, paon).",
        "Conclusion : Lestel voit dans les rituels en duo de véritables dialogues."
      ],
      points: [
        ["Définition : caractère répétitif et systématique jusqu'à devenir mécanique", "2:12"],
        ["Passage d'un comportement individuel à collectif (bus par la porte avant)", "2:12"],
        ["Alternance de gestes de menace et d'apaisement", "2:12"],
        ["Éviter le passage à l'acte violent, réconcilier (Huxley 1971)", "2:12"],
        ["Réponse prévisible, moins de risque d'imprévu", "2:12"],
        ["Parade nuptiale : tous les sens impliqués", "2:13"],
        ["Signal multimodal, variabilité, finalité", "2:13"],
        ["Exemples : paradisier superbe, roue du paon", "2:13-14"],
        ["Ouverture : rituels en duo = dialogues (Lestel)", "2:44"]
      ]},
    { id: "p2-2", partie: "p2", officiel: true, src: "2:47",
      q: "Décrivez les finalités de la communication animale.",
      plan: [
        "Intro : chez l'animal, communiquer sert d'abord la survie du groupe.",
        "I. Maintenir l'appartenance au groupe (identité coloniale) : fourmis, vervets.",
        "II. Fixer les relations, rôles et hiérarchies : abeilles, chiens.",
        "III. Assurer la pérennité du groupe (protection, alimentation, reproduction) : phéromones des fourmis, cris d'alarme.",
        "Conclusion : une communication de l'ici et maintenant, mais un même signal lu différemment selon le destinataire (coûts / bénéfices)."
      ],
      points: [
        ["Finalité 1 : appartenance au groupe, identité coloniale", "2:42"],
        ["Fourmis : l'odeur de la colonie trie les siens et les intrus", "2:42"],
        ["Vervets : les mères reconnaissent les cris des enfants", "2:42"],
        ["Finalité 2 : fixer les rôles et hiérarchies", "2:42"],
        ["Abeilles : reine, ouvrières (nettoyeuse, nourrice…)", "2:42"],
        ["Chiens : domination par la posture, oreilles, queue, regard", "2:42"],
        ["Finalité 3 : pérennité (protection, alimentation, reproduction)", "2:42"],
        ["Fourmis : phéromones sur la santé, phéromone d'alerte, stridulation", "2:42"],
        ["Conclusion : besoins, ici et maintenant", "2:45"],
        ["Conclusion : signal sexuel = coûts / bénéfices (partenaire, rivaux, prédateurs)", "2:46"]
      ]},
    { id: "p2-3", partie: "p2", officiel: true, src: "2:47",
      q: "Quels sont les arguments d'Émile Benveniste contre le langage des abeilles ? Quels arguments Dominique Lestel oppose-t-il à Émile Benveniste ?",
      plan: [
        "Intro : la danse des abeilles (von Frisch) pose la question d'un langage animal.",
        "I. Benveniste (1952) : un code de signaux, pas un langage ; ses 4 arguments.",
        "II. Lestel (2002) : messages construits, méta-communication, nouvelles expressions, ruses, dialogue.",
        "III. Bilan : les limites réelles (ici et maintenant, pas d'abstraction) mais une communication plus complexe que émetteur / récepteur.",
        "Conclusion : un débat entre linguiste et philosophe-éthologue."
      ],
      points: [
        ["Benveniste 1952, « Communication animale et langage humain »", "2:28"],
        ["Thèse : code de signaux et non langage ; « abus de termes »", "2:28-29"],
        ["Arg. 1 : pas de dialogue", "2:30"],
        ["Arg. 2 : pas de message construit à partir d'un autre message", "2:30"],
        ["Arg. 3 : toujours la nourriture, seules variantes = localisation", "2:30"],
        ["Arg. 4 : rapport nécessaire forme / référence (signe motivé)", "2:30"],
        ["Lestel 2002, « Langage et communications animales »", "2:43"],
        ["Messages à partir d'autres messages (alarme des singes, chants des baleines, dialectes des oiseaux)", "2:44"],
        ["Méta-communication : signaux de jeu « ceci est un jeu »", "2:44"],
        ["Tromperies et ruses : faux cris d'alarme, camouflage", "2:44"],
        ["Dialogue : choix du site de la ruche, rituels en duo, ordres des humains", "2:44"],
        ["Bilan : plus complexe que émetteur / récepteur", "2:46"]
      ]},
    { id: "p2-4", partie: "p2", officiel: true, src: "2:47",
      q: "Pourquoi le camouflage de certaines espèces peut-il être considéré comme une communication mensongère ? Décrivez la typologie de signaux de camouflage.",
      plan: [
        "Intro : le camouflage est une production de signaux.",
        "I. Simulation et dissimulation ; camouflage chimique, vocal, visuel.",
        "II. Typologie visuelle : chromatisme, texture / morphologie, mouvement. Deux stratégies : survivance et nourriture. La thanatose.",
        "III. Une communication mensongère (Eco 1975) : mentir, anticiper, se projeter, prévoir la réaction du destinataire.",
        "Conclusion : Lestel cite les tromperies et ruses contre Benveniste."
      ],
      points: [
        ["Chimique, vocal ou visuel", "2:3"],
        ["Simulation (se faire passer pour un autre) / dissimulation (passer inaperçu)", "2:3"],
        ["Chromatisme : chevreuils, écureuils, taupes, requins", "2:3"],
        ["Texture ou morphologie : lézards, papillons, grenouilles", "2:3"],
        ["Mouvement : insectes qui imitent les feuilles", "2:3"],
        ["Stratégie de survivance (proies) / de nourriture (prédateurs)", "2:4"],
        ["Thanatose : faire le mort, l'opossum", "2:4-5"],
        ["Eco 1975 : communication mensongère", "2:4"],
        ["Mentir, anticiper, se projeter dans l'avenir, prévoir la réaction du destinataire", "2:4"],
        ["Ouverture : tromperies et ruses (Lestel)", "2:44"]
      ]},
    { id: "p2-5", partie: "p2", officiel: true, src: "2:47",
      q: "Décrivez les particularités de la communication des oiseaux. Quelles sont les capacités d'Alex le perroquet gris du Gabon ?",
      plan: [
        "Intro : l'oiseau, modèle de l'apprentissage du langage (Laurence Henry 2005).",
        "I. Cris et chants : information (danger, nourriture), apprentissage par stades, chants dénaturés en captivité, dialectes et idiolectes.",
        "II. Alex (1977-2007, Irene Pepperberg) : vocabulaire, compréhension, catégories, concepts relationnels.",
        "III. Au-delà de l'information : « beau », dire qu'il en a assez, s'excuser, refuser, inventer un mot (banerry).",
        "Conclusion : Lestel cite les dialectes transmis entre générations contre Benveniste."
      ],
      points: [
        ["Chants et cris : danger, nourriture, appels des petits", "2:15"],
        ["Acquis par stades ; chants « dénaturés » en captivité", "2:15"],
        ["Sociolectes, dialectes, idiolectes ; rôle du social", "2:15"],
        ["Laurence Henry 2005 : bon modèle neurobiologique", "2:20"],
        ["Alex, 1977-2007, Irene Pepperberg, perroquet gris du Gabon", "2:16"],
        ["~150 mots, en comprend ~1000", "2:17"],
        ["Forme, couleur, matière de 50 objets ; 7 couleurs ; compte jusqu'à 6", "2:17"],
        ["Concepts relationnels (plus gros, pareil, différent, au-dessus…)", "2:17"],
        ["Dit qu'il en a assez, s'excuse, refuse la noix", "2:17"],
        ["Invente « banerry » (banane + cerise) pour la pomme", "2:17"]
      ]},
    { id: "p2-6", partie: "p2", officiel: true, src: "2:47",
      q: "Décrivez les particularités de la communication des abeilles.",
      plan: [
        "Intro : Karl von Frisch, prix Nobel 1973.",
        "I. Une société hiérarchisée : reine, ouvrières, exploratrices.",
        "II. La danse : en rond (< 50 m) et en huit (orientée par le soleil, vitesse selon la distance).",
        "III. Limites : un seul objet (nourriture, logement) ; Benveniste y voit un code de signaux ; Lestel cite le choix interactif du site de la ruche.",
        "Conclusion : un système très efficace mais fermé."
      ],
      points: [
        ["Karl von Frisch, *Vie et mœurs des abeilles*, Nobel 1973", "2:22"],
        ["Hiérarchie : reine, ouvrières intérieur / extérieur, exploratrices", "2:22"],
        ["La butineuse informe du lieu de la nourriture", "2:22"],
        ["Danse en rond : < 50 m, 8 à 10 tours en ~15 s", "2:22"],
        ["Danse en huit : plus loin, orientée par rapport au soleil (direction)", "2:24"],
        ["Vitesse : 9-10 « 8 » à 100 m … 2 à 6 km", "2:24"],
        ["Unique objet : localisation de la nourriture (et logement)", "2:27"],
        ["Benveniste : code de signaux, pas langage", "2:28"],
        ["Lestel : choix interactif du site de la ruche = dialogue", "2:44"]
      ]},
    { id: "p2-7", partie: "p2", officiel: true, src: "2:47",
      q: "Décrivez les particularités de la communication des singes.",
      plan: [
        "Intro : les primates, les plus proches de l'humain.",
        "I. En milieu naturel : langage codé des émotions chez les chimpanzés, rôle du regard ; cris d'alerte des vervets selon le prédateur.",
        "II. Les prérequis du langage : biologiques (larynx, Broca, FoxP2) et culturels (outils, parures, rites).",
        "III. Les expériences : Sarah (Premack, signes arbitraires, métalangue, syntaxe), Lana (Rumbaugh, lexigrammes), Kanzi.",
        "Conclusion : des capacités réelles, mais pas de parole spontanée."
      ],
      points: [
        ["Chimpanzés : main tendue = apaisement, s'embrasser = émoi, s'accroupir = allégeance", "2:31"],
        ["Regard fixe = menace et défi", "2:31"],
        ["Vervets : cris d'alerte distincts (aigle, léopard, serpent)", "2:32"],
        ["Prérequis biologiques : larynx nécessaire mais pas suffisant ; Broca ; pas un seul gène", "2:35"],
        ["Prérequis culturels : outils, parures, navigation, rites funéraires", "2:36"],
        ["Sarah, David Premack : figures sur tableau magnétique", "2:37"],
        ["Sarah : signes arbitraires (« rouge » = plastique gris)", "2:38"],
        ["Sarah : concepts abstraits, négation, questions, métalangue, syntaxe", "2:38"],
        ["Lana, Duane Rumbaugh, années 1970 : lexigrammes, ~100", "2:40-41"],
        ["Lana : tout est enregistré par l'ordinateur", "2:41"],
        ["Kanzi : même principe", "2:41"]
      ]},

    { id: "p3-1", partie: "p3", officiel: true, src: "3:51",
      q: "Décrivez la typologie des signes communicationnels chez l'homme selon la sémiologie de la communication de L. J. Prieto et G. Mounin.",
      plan: [
        "Intro : le corps communique ; la sémiologie médicale lit déjà des indices (symptômes).",
        "I. La sémiologie de la communication (années 1970) : les systèmes non linguistiques.",
        "II. Indice, signal, symbole, classés selon la progression dans l'intentionnalité, avec exemples.",
        "III. Le signe linguistique : arbitraire ; opposition arbitraire / motivé (onomatopées, mots construits, icônes, Magritte).",
        "Conclusion : le corps produit indices, signaux et symboles selon son degré d'intention."
      ],
      points: [
        ["Mounin et Prieto, années 1970", "3:5"],
        ["Objet : les systèmes de communication non linguistiques", "3:5"],
        ["Critère : progression dans l'intentionnalité", "3:5"],
        ["Indice : non intentionnel ; traces de pas dans la neige", "3:5"],
        ["Signal : intentionnel ou non ; sifflement", "3:5"],
        ["Symbole : intentionnel, rapport constant dans une culture ; balance → justice", "3:5"],
        ["Symptômes médicaux = indices (inférence)", "3:3"],
        ["Signe linguistique arbitraire (chat / cat / кот)", "3:11"],
        ["Signe motivé : onomatopées, mots construits, icônes", "3:11-12"],
        ["Magritte, *La Trahison des images*", "3:13"],
        ["Conclusion : le corps produit indices, signaux, symboles", "3:50"]
      ]},
    { id: "p3-2", partie: "p3", officiel: true, src: "3:51",
      q: "Quels sont les principes directeurs de l'analyse posturo-mimo-gestuelle (PMG) ?",
      plan: [
        "Intro : Jacques Cosnier (1997) analyse le corps du parleur dans l'interaction.",
        "I. Interactivité : les énoncés sont co-produits.",
        "II. Multicanalité : verbal + vocal (prosodie) + PMG ; contenu propositionnel + régulation de la relation.",
        "III. L'énoncé total : une composante gestuelle du langage, analyse en synergie ; univers corpo-centriste, déictiques.",
        "Conclusion : on ne peut pas séparer ce qui est dit de la façon dont le corps le dit."
      ],
      points: [
        ["Jacques Cosnier, *Geste, cognition et communication*, 1997", "3:29"],
        ["Interactivité : énoncés co-produits, activité conjointe", "3:29"],
        ["Multicanalité : verbal + non verbal (prosodie + PMG)", "3:29"],
        ["Contenu propositionnel + maintenance / régulation de la relation", "3:29"],
        ["Énoncé total : composante gestuelle du langage (citation)", "3:30"],
        ["Verbal et non verbal analysés en synergie", "3:30"],
        ["Univers corpo-centriste, loi de désignation (« j'ai / il a mal au ventre »)", "3:30"],
        ["Déictiques et situation d'énonciation (je-ici-maintenant)", "3:31"],
        ["Lien avec Palo Alto : contenu et relation", "3:28"]
      ]},
    { id: "p3-3", partie: "p3", officiel: true, src: "3:51",
      q: "Décrivez la typologie des gestes communicatifs selon l'analyse posturo-mimo-gestuelle.",
      plan: [
        "Intro : Cosnier distingue gestes communicatifs et extra-communicatifs.",
        "I. Gestes liés au contenu : quasi-linguistiques, référentiels co-verbaux (déictiques), illustratifs (spatiographiques, pictographiques, kinémimiques).",
        "II. Gestes liés à l'expression et au rythme : expressifs co-verbaux, paraverbaux (battements), synchronisateurs (auto- et hétérosynchronie).",
        "III. Par contraste, les extra-communicatifs (confort) et le synchronisme.",
        "Conclusion : le geste accompagne, remplace ou rythme la parole."
      ],
      points: [
        ["Quasi-linguistiques : substituables à la parole (ras le bol, fou)", "3:32"],
        ["Référentiels co-verbaux : déictiques", "3:32"],
        ["Illustratifs spatiographiques (« il était face à moi »)", "3:32"],
        ["Illustratifs pictographiques (« un type énorme »)", "3:32"],
        ["Illustratifs kinémimiques (« il court ! »)", "3:32"],
        ["Expressifs co-verbaux : mimiques des émotions, culturellement déterminées", "3:33"],
        ["Paraverbaux : battements, scansion (compter sur les doigts)", "3:33"],
        ["Synchronisateurs : autosynchronie / hétérosynchronie, dès le 2e jour", "3:33"],
        ["Contraste : extra-communicatifs (auto-contact, objets, pied)", "3:34"]
      ]},
    { id: "p3-4", partie: "p3", officiel: true, src: "3:51",
      q: "Donnez, à l'aide d'exemples, une illustration de l'opposition entre divergence et convergence communicationnelle.",
      plan: [
        "Intro : tout dialogue comporte un travail sur les affects (attribution et affichage).",
        "I. Cadre : communication émotionnelle / émotive, affects toniques / phasiques, échoïsation.",
        "II. La convergence : ses signes, avec un exemple concret.",
        "III. La divergence : ses signes, avec un exemple concret.",
        "Conclusion : l'induction émotionnelle existe dans la convergence et disparaît dans la divergence."
      ],
      points: [
        ["Attribution d'affects à autrui + affichage des siens", "3:36"],
        ["Règles de cadrage affectif (culturelles)", "3:36"],
        ["Échoïsation : le rire appelle le rire", "3:37"],
        ["Induction émotionnelle en convergence, absente en divergence", "3:37"],
        ["Convergence : sourires, mimiques syntones, contact oculaire", "3:38"],
        ["Convergence : buste orienté de face, hochements, posture penchée en avant, gestes co-verbaux", "3:38"],
        ["Divergence : asynchronie des mimiques, pas de sourire, regards rares et brefs", "3:38"],
        ["Divergence : jambes qui bougent, bras immobiles, posture distanciée, gestes autocentrés", "3:38"],
        ["Un exemple concret pour chaque (à toi de l'inventer ou de le prendre dans un film vu en cours)", "1:11-12"]
      ]},
    { id: "p3-5", partie: "p3", officiel: true, src: "3:51",
      q: "Quelles sont les innovations concernant la théorie de la communication apportées par les chercheurs de l'École de Palo Alto ?",
      plan: [
        "Intro : années 1950, le « collège invisible », une équipe pluridisciplinaire.",
        "I. Rompre avec Shannon : une théorie du comportement et de la relation ; communication orchestrale vs télégraphique.",
        "II. Le non verbal au centre : « on ne peut pas ne pas communiquer », 75 % de non verbal, trois niveaux, kinésique, culture incorporée.",
        "III. Les 5 axiomes (1967), le double bind (1956) et les thérapies brèves.",
        "Conclusion : l'individu ne communique pas, il participe à la communication (Birdwhistell)."
      ],
      points: [
        ["Membres : Bateson, Hall, Birdwhistell, Jackson, Watzlawick (années 1950)", "3:19"],
        ["Théorie du comportement et de la relation, pas du message", "3:19"],
        ["Orchestrale vs télégraphique ; partage vs transmission", "3:22-23"],
        ["« On ne peut pas ne pas communiquer », dépasser le logocentrisme", "3:20"],
        ["La cigarette de Doris : au moins 75 % de non verbal", "3:19"],
        ["3 niveaux : verbal, para-verbal, non verbal", "3:21"],
        ["Citation de Birdwhistell (on participe à la communication)", "3:21"],
        ["Kinésique ; culture incorporée", "3:21-22"],
        ["5 axiomes, 1967 (Watzlawick, Beavin, Jackson)", "3:28"],
        ["Double bind, 1956", "3:24"],
        ["Thérapies brèves, rejet de la psychanalyse freudienne", "3:23"]
      ]},
    { id: "p3-6", partie: "p3", officiel: true, src: "3:51",
      q: "Qu'est-ce que le double bind ?",
      plan: [
        "Intro : un concept de l'École de Palo Alto sur la communication paradoxale.",
        "I. Origine : 1956, Bateson, Jackson, Haley et Weakland, « Vers une théorie de la schizophrénie ».",
        "II. Définition : deux injonctions contradictoires + une troisième contrainte qui empêche d'en sortir ; situation insoluble.",
        "III. Exemples : « Tu es un monstre… » (Anzieu), « Soyez spontané ! », « Désobéissez ! », *À bout de souffle*.",
        "Conclusion : lien avec le 5e axiome (communication paradoxale) ; « le fléau de notre temps »."
      ],
      points: [
        ["1956, Bateson, Jackson, Haley, Weakland", "3:24"],
        ["Article « Vers une théorie de la schizophrénie »", "3:24"],
        ["Deux injonctions qui s'opposent", "3:24"],
        ["Une troisième contrainte empêche d'en sortir", "3:24"],
        ["Ambiguïté imposée et maintenue, situation insoluble", "3:24"],
        ["Exemple : « Tu es un monstre ; seule une maman peut t'aimer » (Anzieu)", "3:24"],
        ["Exemple : « Soyez spontané ! » (jury d'embauche)", "3:24"],
        ["« Condamné si vous le faites, condamné si vous ne le faites pas » ; *À bout de souffle*", "3:25"],
        ["Lien avec le 5e axiome : communication paradoxale", "3:28"]
      ]},
    { id: "p3-7", partie: "p3", officiel: true, src: "3:51",
      q: "Qu'est-ce que la proxémique ? Quelles sont les 4 distances fondamentales déterminées par Edward T. Hall ?",
      plan: [
        "Intro : Edward T. Hall (1963), membre du courant de Palo Alto.",
        "I. La proxémique : usage de l'espace comme produit culturel ; bulle psychologique inconsciente ; construire un système.",
        "II. Les 4 distances (monde nord-occidental), chacune en mode proche et éloigné, avec mesures et exemples.",
        "III. L'organisation de l'espace : fixe (villes, haies, sonnette) et semi-fixe (sociofuge / sociopète).",
        "Conclusion : chaque culture a son propre code de distance."
      ],
      points: [
        ["Edward T. Hall, 1963", "3:39"],
        ["Usage de l'espace comme produit culturel spécifique", "3:39"],
        ["Bulle psychologique, relation à l'espace inconsciente", "3:39"],
        ["Chaque culture a son code ; étude du monde nord-occidental", "3:40"],
        ["Intime : 15-44 cm (éloigné), corps à corps (proche)", "3:42"],
        ["Personnelle : 45-74 cm / 75-125 cm", "3:42"],
        ["Sociale : 1,25-2,10 m / 2,10-3,60 m", "3:42-43"],
        ["Publique : 3,60-7,50 m / 7,50 m et plus", "3:43"],
        ["Un exemple par distance (métro, collègues, guichet, politique)", "3:42-43"],
        ["Ouverture : espaces fixes et semi-fixes", "3:44-45"]
      ]},
    { id: "p3-8", partie: "p3", officiel: true, src: "3:51",
      q: "Quelles relations ont été établies entre espace et échanges conversationnels par le psychologue Robert Sommer ? Quelle est la différence entre espaces sociofuge et sociopète ?",
      plan: [
        "Intro : la proxémique de Hall et l'organisation semi-fixe de l'espace.",
        "I. Sociofuge / sociopète : Humphry Osmond, définitions et exemples.",
        "II. L'étude de Sommer à la cafétéria de l'hôpital : la position autour de la table change le nombre de conversations.",
        "III. L'application : les petites tables carrées doublent les conversations.",
        "Conclusion : aménager l'espace, c'est aménager la communication."
      ],
      points: [
        ["Humphry Osmond, médecin, premier à relier espace semi-fixe et comportement", "3:45"],
        ["Sociofuge : sépare (salles d'attente des gares)", "3:45"],
        ["Sociopète : rassemble (terrasses de cafés, vieux drugstores)", "3:45"],
        ["Sommer : cafétéria de l'hôpital", "3:49"],
        ["En coin (F-A) : 2 fois plus que côte à côte (C-B)", "3:48-49"],
        ["Côte à côte : 2 fois plus que face à face (C-D)", "3:48-49"],
        ["Face à face : 3 fois plus qu'en diagonale (C-F)", "3:48-49"],
        ["Solution : petites tables carrées, conversations doublées", "3:49"]
      ]},

    { id: "p4-1", partie: "p4", officiel: true, src: "4:61",
      q: "Décrivez le schéma de la communication de Shannon et Weaver avec ses cinq éléments.",
      plan: [
        "Intro : la *Théorie mathématique de la communication* (1949), née pendant la Seconde Guerre mondiale chez Bell.",
        "I. Les 5 éléments (source, émetteur, canal, récepteur, destinataire) + le bruit, avec l'exemple du téléphone ou du langage parlé.",
        "II. Les notions clés : signal, bruit à éliminer, information ≠ signification, le bit (5 bits pour une carte parmi 32).",
        "III. Les limites : transmission sans signification, récepteur passif, pas de contexte ni d'interprétation.",
        "Conclusion : Jakobson lui ajoute la signification, Palo Alto l'oppose à la communication orchestrale."
      ],
      points: [
        ["Shannon et Weaver, *Théorie mathématique de la communication*, 1949", "4:2"],
        ["Contexte : Seconde Guerre mondiale, Bell Telephone Company", "1:3"],
        ["Les 5 éléments dans l'ordre : source, émetteur, canal, récepteur, destinataire", "1:4-5"],
        ["L'émetteur transforme le message en signal", "4:3"],
        ["Exemple du téléphone (courant électrique, fil) ou de la télégraphie", "4:3"],
        ["Langage parlé : cerveau, organe vocal, air, oreille (Bougnoux)", "4:4"],
        ["Le bruit, à éliminer pour améliorer le signal", "4:5"],
        ["Information ≠ signification ; le bit (32 cartes = 5 bits)", "4:5"],
        ["Limites : récepteur passif, contexte et interprétation ignorés", "1:6"],
        ["Ouverture : communication télégraphique vs orchestrale", "3:23"]
      ]},
    { id: "p4-2", partie: "p4", officiel: true, src: "4:61",
      q: "Le schéma de la communication de Roman Jakobson : ressemblances et dissemblances entre le modèle de Jakobson et celui de Shannon et Weaver.",
      plan: [
        "Intro : deux schémas de référence, l'un mathématique (1949), l'autre linguistique (1963).",
        "I. Ressemblances : un schéma d'un pôle à l'autre ; émetteur / récepteur deviennent destinateur / destinataire ; canal → contact ; code commun (encodeur / décodeur).",
        "II. Dissemblances : chez Jakobson le message a une signification ; 6 facteurs et 6 fonctions ; contexte ; connexion psychologique ; interprétation au lieu d'un décodage mécanique.",
        "III. Limites communes : un « tête-à-tête idéal » et transparent, sans PMG ni facteurs psychologiques et culturels.",
        "Conclusion : Kerbrat-Orecchioni et Eco corrigent ces limites (Jakobson = 1 cas sur 8 chez Eco)."
      ],
      points: [
        ["Shannon et Weaver : transmission d'un signal, pas de signification", "4:4"],
        ["Jakobson : le message a une signification", "4:6"],
        ["Émetteur / récepteur → destinateur / destinataire", "4:10"],
        ["Les 6 facteurs : destinateur, destinataire, message, contexte, code, contact", "4:6"],
        ["Contact = canal physique + connexion psychologique", "4:6"],
        ["Code commun à l'encodeur et au décodeur, en tout ou en partie", "4:6"],
        ["6 fonctions du langage (absentes chez Shannon)", "4:7-8"],
        ["Décodage (mécanique) vs interprétation (subjective, culturelle)", "4:31"],
        ["Défauts de Jakobson : pas de PMG ni de facteurs psy / culturels, tête-à-tête idéal", "4:31"],
        ["Ouverture : chez Eco, la communication de Jakobson n'est qu'1 cas sur 8", "4:40;4:43"]
      ]},
    { id: "p4-3", partie: "p4", officiel: true, src: "4:61",
      q: "Quelles sont les six fonctions du langage selon Jakobson ?",
      plan: [
        "Intro : Jakobson (1963), 6 facteurs de la communication, à chacun sa fonction ; héritage de l'Antiquité (docere, movere, placere) et de Bühler (1936).",
        "I. Les fonctions centrées sur les personnes : émotive (destinateur), conative (destinataire).",
        "II. Les fonctions centrées sur le message et son monde : poétique (message), référentielle (contexte).",
        "III. Les fonctions centrées sur le lien et le code : phatique (contact), métalinguistique (code).",
        "Conclusion : les fonctions sont solidaires, l'une domine selon le message ; limites du schéma."
      ],
      points: [
        ["Chaque fonction associée à son facteur", "4:7-8"],
        ["Émotive : « J'ai faim », les interjections (« Zut ! »)", "4:10"],
        ["Conative : impératif, vocatif ; « va ouvrir la porte » / « on sonne »", "4:11"],
        ["Conative et publicité : la cible, la propagande", "4:11"],
        ["Poétique : jeu sur la forme, pas limitée à la poésie", "4:19"],
        ["Référentielle : « Il pleut », « route barrée », jamais seule", "4:21"],
        ["Phatique : « Allô ? », « tu vois », politesse ; Malinowski", "4:23-24"],
        ["Métalinguistique : « le mot lit a trois lettres », dont / que", "4:25-26"],
        ["Fonctions solidaires, l'une dominante", "4:9"],
        ["Antiquité (docere, movere, placere) et Bühler (1936)", "4:9"]
      ]},
    { id: "p4-4", partie: "p4", officiel: true, src: "4:61",
      q: "Quelles corrections apporte C. Kerbrat-Orecchioni au modèle de R. Jakobson ?",
      plan: [
        "Intro : Jakobson imagine un échange idéal et transparent ; Kerbrat-Orecchioni (1980) parle de compétences.",
        "I. Du code commun aux idiolectes : dissymétrie production / reconnaissance, les « ratés » au centre, Culioli.",
        "II. Les compétences : linguistiques (phonétiques, syntaxiques, sémantiques, paralinguistiques), idéologiques et culturelles, déterminations psy.",
        "III. L'univers du discours : situation et contraintes de genre ; modèles de production et d'interprétation (l'exemple du ministre).",
        "Conclusion : un modèle plus réaliste mais verbo-centriste (pas de PMG ni de proxémique)."
      ],
      points: [
        ["Kerbrat-Orecchioni, 1980 : l'échange en termes de compétences", "4:32"],
        ["L'échange n'est ni harmonieux ni limpide", "4:32"],
        ["Deux idiolectes partiellement communs au lieu d'un code identique", "4:32"],
        ["Dissymétrie production / reconnaissance ; les ratés au centre", "4:32"],
        ["« La compréhension est un cas particulier du malentendu » (Culioli)", "4:32"],
        ["Référent ≠ situation ; modèles de production et d'interprétation", "4:34"],
        ["Exemple du ministre : promesse et menace", "4:34"],
        ["Compétences linguistiques (4 types)", "4:36"],
        ["Compétences idéologiques et culturelles ; déterminations psy", "4:37"],
        ["Univers du discours : situation + contraintes du genre", "4:37"],
        ["Limite : modèle verbo-centriste", "4:37"]
      ]},
    { id: "p4-5", partie: "p4", officiel: true, src: "4:61",
      q: "Comment le modèle des intentions d'Umberto Eco redéfinit-il la communication ? Inclut-il les autres modèles et comment ?",
      plan: [
        "Intro : Eco (1973) remet en cause la transparence de la communication.",
        "I. Simuler, dissimuler, juger l'intention : la dimension stratégique.",
        "II. Le tableau des 8 cas selon 3 critères (émission, réception, intention attribuée), avec exemples.",
        "III. Les autres modèles inclus : Jakobson = cas 1 ; la simulation (cas 2) rejoint le camouflage ; le cas 8 s'oppose à Palo Alto.",
        "Conclusion : la communication commence par l'attribution d'intention ; elle peut être subliminale, ou ne pas avoir lieu."
      ],
      points: [
        ["Umberto Eco, 1973 : transparence remise en cause", "4:38"],
        ["Simuler ou dissimuler une identité, une condition, une passion", "4:38"],
        ["Dimension stratégique ; l'allocutaire juge l'intention", "4:38"],
        ["3 critères : émission (+/−), réception consciente ou subliminale, intention attribuée", "4:40"],
        ["8 cas au total", "4:39"],
        ["Cas 1 = communication normale = Jakobson", "4:40"],
        ["Cas 2 = simulation, comme le camouflage animal", "4:40"],
        ["Exemple des élèves qui rangent leurs affaires (cas 3 à 6)", "4:41"],
        ["Cas 8 : personne n'en a conscience, contredit Palo Alto", "4:42"],
        ["La communication commence par l'attribution d'intention et de sens", "4:43"],
        ["Jakobson n'est qu'1 cas sur 8 ; Eco envisage la non-communication", "4:43"]
      ]},
    { id: "p4-6", partie: "p4", officiel: true, src: "4:61",
      q: "Quels sont les concepts proposés par Erving Goffman ? Quel est le rôle de la face dans les interactions quotidiennes ?",
      plan: [
        "Intro : Goffman (1922-1982), élève de Birdwhistell, observe sa propre société ; la pragmatique et la sociolinguistique.",
        "I. L'ordre social : toute interaction est un petit ordre social.",
        "II. Mise en scène, face, masques : la face comme territoire du moi, face positive / négative (Brown et Levinson), le sujet portemanteau.",
        "III. Le rôle de la face au quotidien : établir et maintenir le contact, ne pas perdre la face, rituels (contractuel) ou stratégies (conflictuel) ; le langage recouvre la relation (John et Marsha).",
        "Conclusion : lien avec la politesse de Kerbrat-Orecchioni (FTA / FFA)."
      ],
      points: [
        ["Goffman (1922-1982), élève de Birdwhistell, méthodes d'observation", "4:44"],
        ["Un ou deux ouvrages (*La Mise en scène de la vie quotidienne*, 1973 ; *Les Rites d'interaction*, 1974)", "4:46"],
        ["Ordre social : l'interaction fonctionne comme la société", "4:46-47"],
        ["Chacun préserve la face de l'autre et la sienne", "4:47"],
        ["Face = image valorisée de soi, « territoire du moi », mise en scène du Moi", "4:48"],
        ["Face positive / négative (Brown et Levinson, 1987)", "4:48"],
        ["Établir et maintenir le contact ; ouverture et fin = moments délicats", "4:49"],
        ["Le sujet portemanteau, plusieurs masques ; perdre la face", "4:51"],
        ["Attitudes contractuelle (rituels) et conflictuelle (stratégies)", "4:51"],
        ["Le langage recouvre la relation : John et Marsha", "4:53"],
        ["Ouverture : politesse, FTA et FFA", "4:57"]
      ]},
    { id: "p4-7", partie: "p4", officiel: true, src: "4:61",
      q: "Quels types de rituels y a-t-il, selon E. Goffman, et quel est le rôle du rituel dans l'interaction ?",
      plan: [
        "Intro : chez Goffman, toute interaction risque de faire perdre la face.",
        "I. Le rôle du rituel : diminuer les risques, rapprocher et interrompre sans offense ; il relève de l'attitude contractuelle.",
        "II. Les 3 rituels : accès et congé, confirmation, réparation, avec exemples verbaux et non verbaux.",
        "III. Ouverture : la fonction phatique de Jakobson (politesse, salutations) et les rituels animaux (menace / apaisement).",
        "Conclusion : le rituel protège la face et l'ordre de l'interaction."
      ],
      points: [
        ["Rôle : diminuer les risques de chaque interaction", "4:49"],
        ["Rôle : rapprochement et interruption sans offense", "4:49"],
        ["Accès et congé : salutations, adieux", "4:50"],
        ["Confirmation : « t'as raison », « oui, bien sûr, mais »", "4:50"],
        ["Confirmation en non verbal : distance, hochement de tête, sourire", "4:50"],
        ["Réparation : après ou avant l'offense (« Pardon… » – « C'est moi ! »)", "4:50"],
        ["Les rituels relèvent de l'attitude contractuelle", "4:51"],
        ["Lien : fonction phatique, politesse", "4:24"],
        ["Lien : ritualisation animale (Huxley)", "2:12"]
      ]},
    { id: "p4-8", partie: "p4", officiel: true, src: "4:61",
      q: "Pouvons-nous comparer les stratégies linguistiques décrites par E. Goffman aux stratégies décrites dans le comportement des animaux en éthologie ?",
      plan: [
        "Intro : Goffman lui-même fait la comparaison.",
        "I. Les stratégies de Goffman : masquage, démasquage, contre-démasquage, dans l'attitude conflictuelle.",
        "II. Les stratégies animales : camouflage (simulation / dissimulation), communication mensongère (Eco), thanatose ; l'exemple de l'opossum qui illustre les trois étapes.",
        "III. Les limites de la comparaison : chez l'humain, la face, le langage qui recouvre la relation, les méta-représentations croisées (« je sais que tu sais ») ; l'animal reste dans l'ici et maintenant.",
        "Conclusion : oui pour la logique stratégique, non pour la complexité symbolique."
      ],
      points: [
        ["Masquage, démasquage, contre-démasquage", "4:52"],
        ["Exemple de l'opossum dans le cours de Goffman", "4:52"],
        ["Interaction spontanée (contractuelle) vs programmée (stratégique)", "4:52"],
        ["Camouflage : simulation et dissimulation", "2:3"],
        ["Communication mensongère (Eco 1975), thanatose", "2:4"],
        ["Cas 2 d'Eco : la simulation, comme le camouflage", "4:40"],
        ["Rites animaux : menace et apaisement", "2:12"],
        ["Limite : méta-représentations croisées, propres à l'humain", "4:59"],
        ["Limite : communication animale de l'instant, sans abstraction", "2:45"]
      ]},
    { id: "p4-9", partie: "p4", officiel: true, src: "4:61",
      q: "Qu'est-ce que la politesse, selon C. Kerbrat-Orecchioni, et quels sont les termes connexes ?",
      plan: [
        "Intro : la face de Goffman et de Brown et Levinson ; « L'impolitesse en interaction » (2010).",
        "I. Définition : un balancier entre FTA et FFA ; ménager et valoriser les faces d'autrui pour préserver l'ordre de l'interaction.",
        "II. Les termes connexes avec leurs exemples : politesse, hyperpolitesse, non-politesse, impolitesse, polirudesse.",
        "III. Combiner attaque et politesse : adoucisseur (politesse négative), agression tropique ; la politesse ostentatoire et l'ethos.",
        "Conclusion : la communication comme mélange d'éthique et d'esthétique."
      ],
      points: [
        ["Kerbrat-Orecchioni, « L'impolitesse en interaction », 2010", "4:57"],
        ["FTA (menacent la face) et FFA (flattent la face)", "4:57"],
        ["Définition : ménager et valoriser les faces d'autrui", "4:57"],
        ["Politesse : « Je voudrais une baguette »", "4:57"],
        ["Hyperpolitesse : « Pourriez-vous avoir l'amabilité… »", "4:57"],
        ["Non-politesse (normale) : « Une gauloise filtre »", "4:57"],
        ["Impolitesse (anormale) : « Je veux une baguette »", "4:57"],
        ["Polirudesse : pseudo-politesse / pseudo-impolitesse", "4:57"],
        ["Adoucisseur, politesse négative ; agression tropique", "4:58"],
        ["Politesse ostentatoire = ethos du locuteur", "4:58"],
        ["Lien : la face (Goffman ; Brown et Levinson)", "4:48"]
      ]},

    { id: "b-2", partie: "intro", officiel: false, src: "1:7-9",
      q: "Présentez les trois types de communication (non verbale, verbale, multimodale).",
      plan: [
        "Intro : la communication, mise en relation (TLFi).",
        "I. La communication non verbale : chimique, biologique, humaine ; « impossible de ne pas communiquer ».",
        "II. La communication verbale : implicites, prosodie, méta-communication, Goffman, politesse.",
        "III. La communication multimodale : médiatisée, directe / indirecte, de masse.",
        "Conclusion : le plus souvent, ces modalités se combinent."
      ],
      points: [
        ["Non verbale : chimique, neuronale, éthologique, humaine", "1:7"],
        ["« Il est impossible de ne pas communiquer » ; message et relation", "1:7"],
        ["Verbale : dit / non-dit, implicites, prosodie", "1:8"],
        ["Méta-communication (« Regarde-moi quand je te parle »)", "1:8"],
        ["Goffman : face et rituels ; politesse", "1:8"],
        ["Multimodale : médiatisée (téléphone, Internet…)", "1:9"],
        ["Directe / indirecte, avec ou sans traces", "1:9"],
        ["Communication de masse : images, films, publicité", "1:9"]
      ]},
    { id: "b-3", partie: "intro", officiel: false, src: "3:22-23",
      q: "Communication télégraphique et communication orchestrale : comparez les deux modèles.",
      plan: [
        "Intro : deux façons de penser la communication.",
        "I. Le modèle télégraphique (Shannon et Weaver) : transmission d'un message, 5 boîtes, bruit.",
        "II. Le modèle orchestral (Palo Alto) : partage, comportement et relation, tout le monde participe.",
        "III. Ce que la comparaison montre : sens, contexte, non verbal, relation.",
        "Conclusion : modèle de transmission vs modèle de partage."
      ],
      points: [
        ["Télégraphique = Shannon et Weaver, transmission", "3:23;1:4"],
        ["Défauts : signification, récepteur passif, contexte", "1:6"],
        ["Orchestrale = Palo Alto, partage", "3:22-23"],
        ["Image de l'orchestre et de la grille de la situation", "3:22"],
        ["Théorie du comportement et de la relation", "3:19"],
        ["Birdwhistell : on participe à la communication", "3:21"],
        ["« On ne peut pas ne pas communiquer »", "3:20"],
        ["Contenu et relation (axiome iii)", "3:28"]
      ]}
  ],

  /* ------------------------------------------------------------------ */
  /* FLASHCARDS : [partie, recto, verso, source]                         */
  /* ------------------------------------------------------------------ */
  flashcards: [
    ["intro", "Le noyau sémantique du mot « communication » ?", "L'idée d'un déplacement d'un endroit à un autre, ou de lier ce qui est séparé : **la mise en relation**.", "1:2"],
    ["intro", "Qui a créé le modèle mathématique de la communication, et dans quel contexte ?", "**Claude Shannon**, mathématicien et ingénieur à la Bell Telephone Company, pendant la Deuxième Guerre mondiale.", "1:3"],
    ["intro", "Les 5 « petites boîtes » de Shannon ?", "**Source → émetteur → canal → récepteur → destinataire**, avec une source de **bruit** sur le canal.", "1:4-5"],
    ["intro", "Pourquoi dit-on que le modèle de Shannon est « télégraphique » ?", "La **signification** n'est pas prise en compte, le **récepteur est passif** (une cible), le **contexte** et **l'interprétation** sont ignorés.", "1:6"],
    ["intro", "Les 3 types de communication présentés en introduction ?", "**Non verbale**, **verbale**, **multimodale**.", "1:7-9"],
    ["intro", "Les deux niveaux de la communication selon Palo Alto, avec l'exemple du cours ?", "**Message et relation**. Exemple : « Il pleut, stp, sors pas. »", "1:7"],
    ["intro", "Un exemple de méta-communication ?", "« **Regarde-moi lorsque je te parle.** »", "1:8"],
    ["intro", "Le format de l'épreuve finale ?", "**3 sujets du cours à développer à l'écrit en 1h30** (14/20) + l'exercice pratique avec l'IA (6/20).", "3:2"],

    ["p1", "Neurones miroirs : quand, où, par qui ?", "**1992**, **Université de Parme**, **Vittorio Gallese et Giacomo Rizzolatti**.", "1:14"],
    ["p1", "Dans quelles 3 situations les neurones miroirs s'activent-ils ?", "Quand on **exécute** une action, quand on **observe** quelqu'un l'exécuter, quand on l'**imagine**.", "1:14"],
    ["p1", "Les processus où interviennent les neurones miroirs ?", "**Imitation**, reconnaissance des **affects**, **empathie**, **anticipation des intentions**, **contagion émotionnelle** (effets de masse).", "1:14"],
    ["p1", "Le désir mimétique : qui, depuis quand ?", "**René Girard**, anthropologue, depuis **1961**.", "1:15"],
    ["p1", "Définir le désir mimétique.", "Le désir d'être comme autrui pousse à **désirer les mêmes objets**, d'où **rivalité, haine et violence**.", "1:15"],
    ["p1", "Le triangle mimétique ?", "**Sujet – médiateur (modèle) – objet** : on désire l'objet qu'on imagine désiré par un modèle prestigieux.", "1:16"],
    ["p1", "Rapport entre désir mimétique et neurones miroirs ?", "Girard décrit l'imitation **une trentaine d'années avant** la découverte des neurones miroirs (1992), qui interviennent dans l'**apprentissage par imitation**.", "1:14-15"],
    ["p1", "« Faire de l'Autre un modèle, c'est… »", "« … **faire de lui un rival**. »", "1:15"],
    ["p1", "Le bouc émissaire (sens moderne) ?", "Une **victime expiatoire** désignée pour **apaiser la violence** d'un groupe ; une fois sacrifiée, elle devient héros ou Dieu.", "1:17"],
    ["p1", "L'empathie selon Alain Berthoz (2004) ?", "Se mettre à la place d'autrui, et **résoudre un problème de changement de perspective et de choix de référenciation**.", "1:18"],
    ["p1", "Complète Berthoz : « l'empathie n'a pas de place là où… »", "« … a disparu **la liberté de choisir son point de vue** ».", "1:18"],
    ["p1", "Einfühlung ?", "Mot allemand traduit par « empathie » : **ressentir l'autre de l'intérieur**. Employé par **Robert Vischer en 1873**.", "1:19"],
    ["p1", "L'exemple de Theodor Lipps pour l'empathie ?", "**Le funambule** : on fait mentalement chaque pas avec lui, en ajoutant inquiétude et vertige.", "1:19"],
    ["p1", "Pitié ou compassion : laquelle est la plus forte ?", "La **compassion** : souffrir avec autrui comme si l'on était à sa place. La pitié : affliction qui porte à soulager, parfois offensante.", "1:20"],
    ["p1", "Un exemple de carence en empathie vu en cours ?", "*France* (**Bruno Dumont, 2021**) : les passants **filment** la présentatrice en larmes. L'empathie régresse en **curiosité**.", "1:21-22"],
    ["p1", "Hormone et phéromone : quelle différence ?", "L'hormone agit **à l'intérieur**, la phéromone **à l'extérieur**. L'odorat extériorise la communication chimique entre cellules.", "1:23"],
    ["p1", "Pourquoi les signaux chimiques sont-ils des informations authentiques ?", "Parce que **leur émission est involontaire**.", "1:24"],
    ["p1", "Particularité du trajet de l'information olfactive ?", "Elle parvient au cortex **sans passer par le thalamus** : chemin plus direct.", "1:24"],
    ["p1", "L'expérience InsBot, en une phrase ?", "Un **robot-cafard couvert de phéromones** amène peu à peu toute une colonie à préférer **l'abri clair** au lieu de l'abri sombre.", "1:25-31"],
    ["p1", "Le nudge : auteurs et définition ?", "**Thaler et Sunstein (2008)** : une **incitation douce et discrète**, sans contrainte ni interdiction, qui utilise les **biais cognitifs**.", "1:32"],
    ["p1", "Deux exemples de nudge du cours ?", "La **mouche au fond des urinoirs** ; les **lignes blanches resserrées** pour ralentir. (Aussi : cendriers-sondages, déclarations en ligne.)", "1:32"],
    ["p1", "Le contraire du nudge ?", "Le **sludge** : un nudge qui n'est pas éthique.", "1:32"],
    ["p1", "L'umwelt ?", "Terme de **Jacob von Uexküll (1920)** : le **monde propre à chaque espèce**, qui réagit à certains facteurs et pas à d'autres.", "1:35"],
    ["p1", "Les 3 facteurs auxquels réagit la tique ?", "L'odeur de l'**acide butyrique**, la **température de 36°**, la **pilosité** de la peau.", "1:35"],
    ["p1", "Les 2 schémas fondamentaux de comportement ?", "**Prédation** (euphorique, attraction) et **fuite** (dysphorique, répulsion).", "1:35"],

    ["p2", "L'éthologie ?", "L'« étude des mœurs » : les comportements des animaux (et de l'homme), par **l'observation** en milieu naturel.", "2:2"],
    ["p2", "Simulation ou dissimulation ?", "**Simulation** : se faire passer pour un autre. **Dissimulation** : passer inaperçu dans l'environnement.", "2:3"],
    ["p2", "Les 3 catégories de camouflage visuel ?", "**Chromatisme** (couleur), **texture ou morphologie**, **mouvement** d'une autre espèce.", "2:3"],
    ["p2", "Les 2 stratégies du camouflage ?", "**Survivance** (proies qui fuient les prédateurs) et **nourriture** (prédateurs qui chassent).", "2:4"],
    ["p2", "La thanatose ?", "**Faire le mort** par immobilisation. Champion : **l'opossum**.", "2:4-5"],
    ["p2", "Pourquoi le camouflage est-il une communication mensongère ?", "Selon **Eco (1975)**, l'animal **ment**, **anticipe** la réaction du prédateur et **se projette dans l'avenir**.", "2:4"],
    ["p2", "La ritualisation ?", "Rendre des gestes **répétitifs et systématiques** jusqu'à les rendre mécaniques ; passage de l'individuel au **collectif**.", "2:12"],
    ["p2", "À quoi servent les rites selon Huxley (1971) ?", "À **éviter le passage à l'acte violent** et à réconcilier les adversaires.", "2:12"],
    ["p2", "Les 3 caractéristiques du signal de parade nuptiale ?", "**Multimodal**, **variable**, avec une **finalité**.", "2:13"],
    ["p2", "Sociolectes, dialectes, idiolectes : chez qui ?", "Chez les **oiseaux** : les chants varient d'une communauté à l'autre dans une même espèce.", "2:15"],
    ["p2", "Que chantent les oiseaux élevés en captivité ?", "Des chants « **dénaturés** » : le chant s'apprend par stades.", "2:15"],
    ["p2", "Alex : espèce, dates, chercheuse ?", "Un **perroquet gris du Gabon**, **1977-2007**, étudié par **Irene Pepperberg**.", "2:16"],
    ["p2", "Les chiffres d'Alex ?", "**~150 mots** dits, **~1000** compris, **50 objets** décrits, compte **jusqu'à 6**, **7 couleurs**.", "2:17"],
    ["p2", "Qu'est-ce que « banerry » ?", "Le mot **inventé par Alex** pour la pomme : **banane + cerise**.", "2:17"],
    ["p2", "Karl von Frisch ?", "Éthologue (1886-1982), *Vie et mœurs des abeilles*, **prix Nobel 1973**.", "2:22"],
    ["p2", "La danse en rond ?", "Source **à moins de 50 m** : cercles rapides, **8 à 10 tours en ~15 s**, puis demi-cercle inverse.", "2:22"],
    ["p2", "La danse en huit ?", "Source **plus lointaine** ; orientée **par rapport au soleil**, elle donne la **direction**.", "2:24"],
    ["p2", "Vitesse de la danse en huit et distance ?", "Plus c'est proche, plus c'est rapide : **9-10 « 8 » en 15 s à 100 m**, 7 à 200 m, 4,5 à 1 km, **2 à 6 km**.", "2:24"],
    ["p2", "La thèse de Benveniste (1952) ?", "La danse des abeilles **n'est pas un langage mais un code de signaux**.", "2:28"],
    ["p2", "Les 4 arguments de Benveniste ?", "(1) pas de **dialogue** ; (2) pas de message construit sur un autre **message** ; (3) toujours la **nourriture** ; (4) rapport **nécessaire** forme / référence.", "2:30"],
    ["p2", "Les contre-arguments de Lestel (2002) ?", "Messages construits, **méta-communication** (« ceci est un jeu »), nouvelles expressions, **ruses**, **dialogue** (choix du site de la ruche).", "2:44"],
    ["p2", "Sarah : qui l'a étudiée, et comment ?", "**David Premack** : un langage artificiel de **figures collées sur un tableau magnétique**.", "2:37"],
    ["p2", "Quelle est la couleur du mot « rouge » pour Sarah ?", "**Gris** : le signe est un plastique gris. Preuve que ses signes sont **arbitraires** et qu'elle manie une **métalangue**.", "2:38"],
    ["p2", "Lana ?", "Expérience de **Duane Rumbaugh** (années 1970) : **~100 lexigrammes** sur des boutons d'ordinateur ; **tout est enregistré**.", "2:40-41"],
    ["p2", "Trois signes émotionnels des chimpanzés ?", "Main tendue = **apaisement** ; s'embrasser = **émoi** ; s'accroupir = **allégeance**. Regard fixe = **menace**.", "2:31"],
    ["p2", "Les cris d'alerte du singe vervet ?", "Des cris **différents selon le prédateur** : aigle, léopard, serpent.", "2:32"],
    ["p2", "Les 3 finalités de la communication animale ?", "**Appartenance au groupe**, **rôles et hiérarchies**, **pérennité du groupe** (protection, alimentation, reproduction).", "2:42"],
    ["p2", "Pourquoi dit-on que la communication animale « ignore l'histoire » ?", "Transmission en contact direct, **pas de stockage** d'information pour un usage futur : c'est **une communication de l'instant**.", "2:45"],
    ["p2", "Le dilemme coûts / bénéfices d'un signal sexuel ?", "Il attire le partenaire et décourage les rivaux, mais **expose aux prédateurs**.", "2:46"],

    ["p3", "Sémiologie médicale : quel type de signe est un symptôme ?", "Un **indice** : signal non intentionnel, lu par **inférence** (si boutons rouges, alors varicelle).", "3:3"],
    ["p3", "Le schéma corporel (Merleau-Ponty) ?", "L'**image que nous nous faisons de notre corps** (données intéro-, proprio-, extéroceptives). *Phénoménologie de la perception*, **1945**.", "3:4"],
    ["p3", "La sémiologie de la communication : qui, quand, quel objet ?", "**Mounin et Prieto**, années **1970** : les systèmes de communication **non linguistiques**.", "3:5"],
    ["p3", "L'indice ?", "Fait perceptible qui renseigne sur un fait non perceptible. **Non intentionnel.** Ex. : traces de pas dans la neige.", "3:5"],
    ["p3", "Le signal ?", "Fait produit **intentionnellement ou non**. Ex. : un sifflement.", "3:5"],
    ["p3", "Le symbole ?", "Signal **intentionnel**, en rapport **constant pour une culture** avec ce qu'il signifie. Ex. : balance → justice.", "3:5"],
    ["p3", "Pourquoi le signe linguistique est-il arbitraire ?", "Aucune ressemblance entre signifiant et référent : **convention** (chat, *cat*, *кот*). « Le mot chien ne mord pas. »", "3:11"],
    ["p3", "3 familles de signes motivés ?", "**Onomatopées** (miaou), **mots construits** (tire-bouchon), **signes iconiques** (panneaux, pictogrammes, images).", "3:12"],
    ["p3", "Que montre *La Trahison des images* (Magritte, 1929) ?", "Une **relation motivée** entre le signe visuel et son référent.", "3:13"],
    ["p3", "Les membres de l'École de Palo Alto ?", "**Bateson, Hall, Birdwhistell** (anthropologues, linguistes), **Jackson, Watzlawick** (psychiatres). Années 1950.", "3:19"],
    ["p3", "« La cigarette de Doris » : qu'a-t-elle montré ?", "Qu'**au moins 75 %** de la communication est **non verbale**.", "3:19"],
    ["p3", "Citation de Birdwhistell ?", "« Un individu **ne communique pas** ; il **prend part** à une communication ou il en devient un élément. »", "3:21"],
    ["p3", "Les 3 niveaux de la communication selon Palo Alto ?", "**Verbal**, **para-verbal** (intonation, rythme, débit), **non verbal** (proxémie, postures, gestes).", "3:21"],
    ["p3", "Communication orchestrale ou télégraphique ?", "**Orchestrale** = Palo Alto, modèle de **partage**. **Télégraphique** = Shannon et Weaver, modèle de **transmission**.", "3:22-23"],
    ["p3", "Les 5 axiomes (Watzlawick et al., 1967) ?", "(1) impossible de ne pas communiquer ; (2) digital / analogique ; (3) contenu / relation ; (4) ponctuation des faits ; (5) symétrique / complémentaire.", "3:28"],
    ["p3", "Digital ou analogique ?", "**Digital** = verbal. **Analogique** = non verbal (contexte, prosodie, silences).", "3:28"],
    ["p3", "Interaction symétrique ou complémentaire ?", "**Symétrique** : à égalité. **Complémentaire** : position haute / position basse.", "3:28"],
    ["p3", "Le double bind : origine ?", "**1956**, **Bateson, Jackson, Haley, Weakland**, « Vers une théorie de la schizophrénie ».", "3:24"],
    ["p3", "Le double bind : définition ?", "**Deux injonctions contradictoires** + **une troisième contrainte** qui empêche d'en sortir : situation **insoluble**.", "3:24"],
    ["p3", "Deux exemples de double bind ?", "« **Soyez spontané !** » (jury d'embauche) ; « Tu es un monstre ; seule une maman peut t'aimer » (Anzieu).", "3:24"],
    ["p3", "La PMG : auteur et ouvrage ?", "**Jacques Cosnier**, *Geste, cognition et communication*, **1997**.", "3:29"],
    ["p3", "Les 2 principes directeurs de la PMG ?", "**Interactivité** (énoncés co-produits) et **multicanalité** (verbal + prosodie + PMG).", "3:29"],
    ["p3", "L'énoncé total selon Cosnier ?", "Pas de « langue des gestes » parallèle : une **composante gestuelle du langage**, à analyser **en synergie**.", "3:30"],
    ["p3", "Les déictiques ?", "Des mots (ici, maintenant, demain…) compris seulement par rapport à la **situation d'énonciation** : le **je-ici-maintenant**.", "3:31"],
    ["p3", "Les gestes quasi-linguistiques ?", "Gestes **substituables à la parole** : « ras le bol », « fou », « se tourner les pouces ».", "3:32"],
    ["p3", "Les 3 illustratifs iconiques ?", "**Spatiographiques** (disposition), **pictographiques** (forme), **kinémimiques** (action).", "3:32"],
    ["p3", "Autosynchronie et hétérosynchronie ?", "**Auto** : le locuteur coordonne ses gestes avec sa parole. **Hétéro** : l'allocutaire se coordonne avec les paroles du locuteur.", "3:33"],
    ["p3", "Les gestes extra-communicatifs ?", "Gestes **de confort** : auto-contact, grattages, manipulation d'objets, balancement du pied.", "3:34"],
    ["p3", "Communication émotionnelle ou émotive ?", "**Émotionnelle** : spontanée, non contrôlée. **Émotive** : mise en scène contrôlée, voire **simulation**.", "3:36"],
    ["p3", "Affects toniques ou phasiques ?", "**Toniques** : stables (le caractère). **Phasiques** : passagers (« ce matin je suis triste »).", "3:37"],
    ["p3", "L'échoïsation ?", "Synchronie mimétique : **le rire appelle le rire**, la tristesse appelle la tristesse.", "3:37"],
    ["p3", "Signes de convergence communicationnelle ?", "Sourires, mimiques syntones, **contact oculaire**, buste de face, **hochements de tête**, posture **penchée en avant**, gestes co-verbaux.", "3:38"],
    ["p3", "Signes de divergence communicationnelle ?", "Pas de sourire, **regards rares**, jambes qui bougent et bras immobiles, **posture distanciée**, gestes **autocentrés**.", "3:38"],
    ["p3", "La proxémique ?", "**Edward T. Hall (1963)** : l'usage que l'homme fait de l'espace **en tant que produit culturel spécifique**.", "3:39"],
    ["p3", "Distance intime ?", "Proche : corps à corps. Éloignée : **15 à 44 cm**, famille, mi-voix.", "3:42"],
    ["p3", "Distance personnelle ?", "Proche : **45 à 74 cm**. Éloignée : **75 à 125 cm** (collègues, bavardages).", "3:42"],
    ["p3", "Distance sociale ?", "Proche : **1,25 à 2,10 m** (guichet). Éloignée : **2,10 à 3,60 m** (hiérarchie, tranquillité).", "3:42-43"],
    ["p3", "Distance publique ?", "Proche : **3,60 à 7,50 m** (prof / élèves). Éloignée : **7,50 m et plus** (politique, spectacle).", "3:43"],
    ["p3", "Sociofuge ou sociopète ?", "**Sociofuge** : sépare (salle d'attente de gare). **Sociopète** : rassemble (terrasse de café). Notion d'**Humphry Osmond**.", "3:45"],
    ["p3", "Le résultat de Robert Sommer ?", "Assis **en coin** : le plus de conversations ; puis côte à côte, face à face, diagonale. Les **petites tables carrées** doublent les conversations.", "3:48-49"],
    ["p3", "Conclusion du cours 3 : que produit le corps ?", "Des **indices** (symptômes), des **signaux**, des **symboles**, selon son degré d'intention.", "3:50"],

    ["p4", "Shannon et Weaver : titre et date de l'ouvrage ?", "*Théorie mathématique de la communication*, **1949**.", "4:2"],
    ["p4", "Dans le langage parlé, qui joue quel rôle chez Shannon ?", "Source = **cerveau** de X ; émetteur = **organe vocal** ; canal = **l'air** ; récepteur = **oreille** de Y ; destination = cerveau de Y.", "4:4"],
    ["p4", "Qu'est-ce qu'un bit ?", "L'unité d'information d'un **choix binaire**. Trouver une carte parmi 32 demande **5 bits**.", "4:5"],
    ["p4", "Le bruit selon Shannon et Weaver ?", "Les altérations qui s'ajoutent au signal ; il faut **l'éliminer** pour améliorer le signal.", "4:5"],
    ["p4", "Les 6 facteurs de Jakobson ?", "**Destinateur, destinataire, message, contexte, code, contact.**", "4:6"],
    ["p4", "Les 6 fonctions de Jakobson, dans l'ordre des facteurs ?", "**Émotive** (destinateur), **conative** (destinataire), **poétique** (message), **référentielle** (contexte), **phatique** (contact), **métalinguistique** (code).", "4:7-8"],
    ["p4", "Le contact chez Jakobson, c'est quoi exactement ?", "Un **canal physique** et une **connexion psychologique** entre destinateur et destinataire.", "4:6"],
    ["p4", "Les 3 fonctions de Karl Bühler (1936) ?", "**Représentation**, **appel**, **expression**.", "4:9"],
    ["p4", "Les 3 fonctions de l'Antiquité ?", "*Docere* (informer), *movere* (émouvoir), *placere* (plaire).", "4:9"],
    ["p4", "Fonction émotive : marque la plus pure ?", "Les **interjections** (« Zut ! »).", "4:10"],
    ["p4", "Conatif direct ou indirect ?", "Direct : « **va ouvrir la porte** ». Indirect : « **on sonne** » (il faut faire une inférence).", "4:11"],
    ["p4", "La fonction poétique est-elle réservée à la poésie ?", "Non : elle y est **dominante**, ailleurs **subsidiaire**. Tout texte a un souci de la forme.", "4:19"],
    ["p4", "Exemples d'énoncés strictement référentiels ?", "« **Route barrée** », les télégrammes, les étiquettes.", "4:21"],
    ["p4", "La fonction phatique, avec exemples ?", "Maintenir le contact : « **Allô ?** », « tu vois », « n'est-ce pas », et **toute la politesse** (salutations, remerciements).", "4:23-24"],
    ["p4", "Ce que dit Malinowski (1923) des propos sur la météo ?", "Ils ne servent pas à informer : ils remplissent **une fonction sociale**.", "4:24"],
    ["p4", "Activité métalinguistique avec ou sans métalangage ?", "**Sans** : corriger « que » en « dont ». **Avec** : expliquer la règle avec des termes de grammaire (« pronom relatif »…).", "4:25-26"],
    ["p4", "Dénotation, connotation, métalangage (Barthes) ?", "« **Nuit** » (obscurité) ; « **la nuit des temps** » (le chaos) ; « *nuit* est la racine de *nuitée* ».", "4:27-28"],
    ["p4", "Décodage ou interprétation ?", "**Décodage** : mécanique, fait par un appareil. **Interprétation** : subjective et culturelle.", "4:31"],
    ["p4", "Les 2 défauts du schéma de Jakobson ?", "Il ignore la **PMG** et les facteurs psy et culturels ; il suppose un « **tête-à-tête idéal** » transparent.", "4:31"],
    ["p4", "L'idée clé de Kerbrat-Orecchioni (1980) ?", "Parler de **compétences** : deux **idiolectes partiellement communs**, un échange ni harmonieux ni limpide.", "4:32"],
    ["p4", "Citation de Culioli ?", "« La compréhension est **un cas particulier du malentendu**. »", "4:32"],
    ["p4", "Les 4 compétences linguistiques (Kerbrat-Orecchioni) ?", "**Phonétiques**, **syntaxiques**, **sémantiques**, **paralinguistiques** (prosodie).", "4:36"],
    ["p4", "La limite du modèle de Kerbrat-Orecchioni ?", "Il est **verbo-centriste** : ni PMG ni proxémique.", "4:37"],
    ["p4", "Les 3 critères du tableau d'Eco (1973) ?", "Émission **volontaire ou non** ; réception **consciente ou subliminale** ; **intention attribuée** par le récepteur.", "4:40"],
    ["p4", "Cas 1 et cas 2 chez Eco ?", "**1** : communication normale (= Jakobson). **2** : **simulation**, volontaire mais perçue comme involontaire, comme le camouflage.", "4:40"],
    ["p4", "Pourquoi le cas 8 d'Eco pose problème ?", "Personne ne prend conscience de l'échange : cela **contredit Palo Alto** (« on ne peut pas ne pas communiquer »).", "4:42"],
    ["p4", "La conclusion d'Eco ?", "La communication commence par **l'attribution d'intention**. La communication « normale » n'est qu'**un cas sur huit**.", "4:43"],
    ["p4", "Qui a fondé l'ethnométhodologie ?", "**Harold Garfinkel**, *Studies in Ethnomethodology* (1967).", "4:44"],
    ["p4", "Erving Goffman : dates et maître ?", "**1922-1982**, **élève de Ray Birdwhistell**.", "4:44"],
    ["p4", "La face selon Goffman ?", "L'**image valorisée** que chacun donne de lui ; un « **territoire du moi** » qu'on protège.", "4:48"],
    ["p4", "Face positive et face négative (Brown et Levinson, 1987) ?", "**Positive** : ce qu'on expose. **Négative** : le territoire qu'on garde secret (au sens photographique).", "4:48"],
    ["p4", "Les 3 rituels de Goffman ?", "**Accès et congé** (salutations), **confirmation** (« t'as raison »), **réparation** (« Pardon… »).", "4:50"],
    ["p4", "À quoi sert le rituel ?", "**Diminuer les risques** de l'interaction ; rapprocher et interrompre **sans offense**.", "4:49"],
    ["p4", "Les 3 stratégies de Goffman ?", "**Masquage, démasquage, contre-démasquage** (ex. l'opossum).", "4:52"],
    ["p4", "L'image du portemanteau chez Goffman ?", "L'individu porte **plusieurs masques** selon la situation, comme un portemanteau des vêtements.", "4:51"],
    ["p4", "FTA et FFA ?", "**FTA** : actes qui **menacent** la face. **FFA** : actes qui **flattent** la face (Kerbrat-Orecchioni, 2010).", "4:57"],
    ["p4", "Non-politesse ou impolitesse ?", "**Non-politesse** : absence **normale** de marqueur (« Une gauloise filtre »). **Impolitesse** : absence **anormale** (« Je veux une baguette »).", "4:57"],
    ["p4", "Hyperpolitesse et polirudesse ?", "**Hyperpolitesse** : marqueurs excessifs (« Pourriez-vous avoir l'amabilité… »). **Polirudesse** : pseudo-politesse ou pseudo-impolitesse.", "4:57"],
    ["p4", "« Je sais que tu sais » : de qui ?", "**Ronald Laing** : les méta-représentations croisées, propres aux humains.", "4:59"],

    ["p5", "Les 3 critères pour classer les médias ?", "**Réversibilité**, **synchronie**, **nombre de pôles**.", "5:2"],
    ["p5", "Média réversible ou irréversible ?", "**Réversible** : l'émetteur peut devenir récepteur (télécopie). **Irréversible** : TV, radio, pas de rétroaction.", "5:2"],
    ["p5", "Pourquoi le téléphone est-il synchrone ?", "On échange en **temps réel** : on peut interrompre l'autre à tout moment.", "5:4"],
    ["p5", "Courriel et poste : synchrones ?", "Non : réversibles mais **asynchrones**, il faut attendre le message pour répondre.", "5:4"],
    ["p5", "La vraie nouveauté d'Internet ?", "La communication **plusieurs à plusieurs** (ex. la visioconférence, en synchronie).", "5:8"],
    ["p5", "Les 6 caractéristiques de l'IA dans le cours ?", "Moteur de recherche **très performant** ; **prompt engineering** ; **approfondir** ; **forme dialogique**, simulation (déictiques, reprise du thème) ; **illusion de face-à-face** ; **méta-communication**.", "5:10"],
    ["p5", "Le prompt engineering ?", "**L'art de rédiger les instructions** données à l'IA.", "5:10"],
    ["p5", "Selon le cours, que simule l'IA ?", "Une **forme dialogique** : emploi de **déictiques**, **reprise du thème**, avec une **illusion de face-à-face**.", "5:10"]
  ],

  /* ------------------------------------------------------------------ */
  /* QUIZ : [partie, question, choix[], index bonne, explication, source] */
  /* ------------------------------------------------------------------ */
  quiz: [
    ["intro", "Dans le modèle de Shannon, où intervient le bruit ?", ["Sur la source", "Sur le canal", "Chez le destinataire", "Dans le message"], 1, "Le bruit perturbe le canal, entre émetteur et récepteur.", "1:4-5"],
    ["intro", "Lequel n'est PAS un défaut du modèle de Shannon cité en cours ?", ["La signification n'est pas prise en compte", "Le récepteur est passif", "Il ignore le contexte", "Il oublie l'émetteur"], 3, "L'émetteur fait bien partie des 5 boîtes. Les trois autres sont des défauts cités.", "1:6"],
    ["intro", "« Regarde-moi lorsque je te parle » est un exemple de…", ["Double bind", "Méta-communication", "Déictique", "Nudge"], 1, "Parler de la communication elle-même : c'est de la méta-communication.", "1:8"],
    ["p1", "Où ont été découverts les neurones miroirs ?", ["Palo Alto", "Parme", "Bruxelles", "Paris"], 1, "Université de Parme, 1992, Gallese et Rizzolatti.", "1:14"],
    ["p1", "Combien d'années avant les neurosciences Girard a-t-il décrit le désir mimétique ?", ["Une dizaine", "Une trentaine", "Une cinquantaine", "Un siècle"], 1, "Girard découvre ce mécanisme une trentaine d'années avant les neurosciences.", "1:15"],
    ["p1", "Dans le triangle mimétique, qui oriente le désir ?", ["L'objet", "Le rival", "Le médiateur", "Le bouc émissaire"], 2, "Le médiateur (le modèle) oriente le désir du sujet.", "1:16"],
    ["p1", "Qui a employé le mot Einfühlung en 1873 ?", ["Theodor Lipps", "Edward Titchener", "Robert Vischer", "Alain Berthoz"], 2, "Robert Vischer, pour la projection de soi dans un objet extérieur.", "1:19"],
    ["p1", "Pourquoi les signaux chimiques sont-ils authentiques ?", ["Ils sont codés", "Leur émission est involontaire", "Ils passent par le thalamus", "Ils sont appris"], 1, "L'émission est involontaire, donc l'information ne ment pas.", "1:24"],
    ["p1", "Dans l'expérience InsBot, où finissent les cafards ?", ["Sous l'abri sombre", "Sous l'abri clair", "Hors des abris", "Ils se séparent en deux groupes"], 1, "Les robots à phéromones les amènent tous sous l'abri clair, contre leur préférence naturelle.", "1:26;1:31"],
    ["p1", "Quel est le contraire du nudge ?", ["Le sludge", "Le double bind", "La thanatose", "Le logocentrisme"], 0, "Un nudge non éthique s'appelle un sludge.", "1:32"],
    ["p1", "À quelle température réagit la tique ?", ["30°", "36°", "38°", "40°"], 1, "36°, la température de l'organisme hôte.", "1:35"],
    ["p2", "Le champion de la thanatose ?", ["Le caméléon", "L'opossum", "Le lézard", "Le requin"], 1, "L'opossum fait le mort.", "2:4-5"],
    ["p2", "Qui qualifie le camouflage de communication mensongère ?", ["Eco", "Huxley", "Benveniste", "Lestel"], 0, "Eco (1975).", "2:4"],
    ["p2", "Les insectes qui imitent le mouvement des feuilles relèvent de quelle catégorie de camouflage ?", ["Chromatisme", "Texture", "Mouvement", "Thanatose"], 2, "Reproduire le mouvement d'une autre espèce ou d'un autre genre.", "2:3"],
    ["p2", "Combien de mots Alex comprenait-il environ ?", ["150", "500", "1000", "5000"], 2, "Environ 150 mots de vocabulaire, environ 1000 compris.", "2:17"],
    ["p2", "La danse en rond indique une source…", ["À moins de 50 m", "À environ 200 m", "À plus d'1 km", "Au-delà de 6 km"], 0, "Moins de 50 m.", "2:22"],
    ["p2", "Par rapport à quoi la danse en huit est-elle orientée ?", ["La reine", "La ruche", "Le soleil", "Le vent"], 2, "Elle est orientée par rapport au soleil, et donne ainsi la direction.", "2:24"],
    ["p2", "Pour Benveniste, la danse des abeilles est…", ["Un langage simplifié", "Un code de signaux", "Un dialogue", "Une métalangue"], 1, "« Pas un langage mais un code de signaux ».", "2:28"],
    ["p2", "Lequel est un argument de Lestel contre Benveniste ?", ["Les abeilles parlent de nourriture", "Les signaux de jeu : « ceci est un jeu »", "Le rapport nécessaire forme / référence", "L'absence de dialogue"], 1, "Les signaux de jeu montrent une méta-communication animale.", "2:44"],
    ["p2", "Pour Sarah, quelle est la couleur du mot « rouge » ?", ["Rouge", "Bleu", "Gris", "Vert"], 2, "Le signe « rouge » est un plastique gris : ses signes sont arbitraires.", "2:38"],
    ["p2", "Quel est l'avantage de l'expérience Lana ?", ["Lana parle", "Tout est enregistré par l'ordinateur", "Elle a appris 1000 signes", "Elle vit en liberté"], 1, "Toutes les entrées et sorties ont été systématiquement enregistrées.", "2:41"],
    ["p3", "Des traces de pas dans la neige sont…", ["Un symbole", "Un signal", "Un indice", "Un signe arbitraire"], 2, "Un fait perceptible non intentionnel qui renseigne sur un autre fait : un indice.", "3:5"],
    ["p3", "Une balance pour représenter la justice est…", ["Un indice", "Un symbole", "Un symptôme", "Un déictique"], 1, "Signal intentionnel en rapport constant, dans une culture, avec ce qu'il signifie.", "3:5"],
    ["p3", "« Tic-tac » est un signe…", ["Arbitraire", "Motivé", "Déictique", "Extra-communicatif"], 1, "Une onomatopée imite le bruit : c'est un signe motivé.", "3:12"],
    ["p3", "Un panneau routier « virage serré » est, selon le cours, un signe…", ["Arbitraire", "Motivé (iconique)", "Non intentionnel", "Indiciel"], 1, "Les panneaux routiers font partie des signes visuels ou iconiques, motivés.", "3:12"],
    ["p3", "Selon « la cigarette de Doris », quelle part de la communication est non verbale ?", ["Au moins 25 %", "Au moins 50 %", "Au moins 75 %", "100 %"], 2, "Au moins 75 %.", "3:19"],
    ["p3", "Quel axiome oppose « position haute » et « position basse » ?", ["Contenu / relation", "Digital / analogique", "Symétrique / complémentaire", "Ponctuation des faits"], 2, "L'interaction complémentaire met les partenaires en position haute et basse.", "3:28"],
    ["p3", "« Soyez spontané ! » est un exemple de…", ["Nudge", "Double bind", "Déictique", "Échoïsation"], 1, "Une injonction paradoxale impossible à satisfaire.", "3:24"],
    ["p3", "Mimer la course en disant « il court ! » est un geste…", ["Kinémimique", "Pictographique", "Spatiographique", "Quasi-linguistique"], 0, "Les kinémimiques reprennent des éléments de l'action décrite.", "3:32"],
    ["p3", "Tourner l'index sur la tempe pour dire « fou » est un geste…", ["Paraverbal", "Quasi-linguistique", "Extra-communicatif", "Synchronisateur"], 1, "Il peut remplacer la parole : c'est un quasi-linguistique.", "3:32"],
    ["p3", "Faire tourner sa bague pendant qu'on parle est un geste…", ["Communicatif", "Extra-communicatif", "Déictique", "Expressif"], 1, "Un geste de confort, extra-communicatif.", "3:34"],
    ["p3", "Lequel est un signe de divergence communicationnelle ?", ["Hochements de tête", "Posture penchée en avant", "Regards rares et brefs", "Buste orienté de face"], 2, "Les trois autres sont des signes de convergence.", "3:38"],
    ["p3", "À 1 m de quelqu'un, dans quelle distance est-on selon Hall ?", ["Intime", "Personnelle", "Sociale", "Publique"], 1, "Personnelle, mode éloigné : 75 à 125 cm.", "3:42"],
    ["p3", "Un guichet de banque correspond à quelle distance ?", ["Intime", "Personnelle", "Sociale", "Publique"], 2, "Distance sociale, mode proche : la distance administrative.", "3:42"],
    ["p3", "Une terrasse de café est un espace…", ["Sociofuge", "Sociopète", "Fixe", "Intime"], 1, "Sociopète : il favorise le contact.", "3:45"],
    ["p3", "Chez Sommer, quelle position produit le plus de conversations ?", ["Face à face", "Côte à côte", "En coin", "En diagonale"], 2, "De part et d'autre d'un coin (F-A).", "3:48-49"],
    ["p4", "Combien de bits faut-il pour trouver une carte parmi 32 ?", ["3", "5", "8", "32"], 1, "Chaque question binaire élimine la moitié des cartes : 5 bits.", "4:5"],
    ["p4", "« Allô, André ? » relève de quelle fonction ?", ["Conative", "Phatique", "Référentielle", "Poétique"], 1, "Vérifier le contact : fonction phatique.", "4:23"],
    ["p4", "« On sonne », pour demander d'aller ouvrir, c'est…", ["Du conatif direct", "Du conatif indirect", "Du phatique", "De l'émotif"], 1, "Le destinataire doit faire une inférence : conatif indirect.", "4:11"],
    ["p4", "« Le mot lit a trois lettres » relève de quelle fonction ?", ["Référentielle", "Poétique", "Métalinguistique", "Expressive"], 2, "Le langage parle de lui-même.", "4:25"],
    ["p4", "« Zut ! » illustre surtout la fonction…", ["Émotive", "Conative", "Phatique", "Métalinguistique"], 0, "Les interjections forment la couche purement émotive.", "4:10"],
    ["p4", "Pour Kerbrat-Orecchioni, destinateur et destinataire partagent…", ["Un code identique", "Deux idiolectes partiellement communs", "Aucun code", "Un métalangage"], 1, "Elle remplace le code commun par deux idiolectes partiellement communs.", "4:32"],
    ["p4", "Dans le tableau d'Eco, la communication selon Jakobson correspond au…", ["Cas 1", "Cas 2", "Cas 5", "Cas 8"], 0, "Cas 1 : émission volontaire, réception consciente, intention reconnue.", "4:40"],
    ["p4", "Quel cas d'Eco contredit Palo Alto ?", ["Cas 1", "Cas 2", "Cas 4", "Cas 8"], 3, "Personne ne prend conscience de l'échange.", "4:42"],
    ["p4", "S'excuser avant d'emprunter un stylo est un rituel…", ["D'accès", "De confirmation", "De réparation", "De congé"], 2, "Un rituel de réparation peut précéder l'offense.", "4:50"],
    ["p4", "L'opossum qui reste rigide et dégage une odeur quand on le touche fait du…", ["Masquage", "Démasquage", "Contre-démasquage", "Rituel de congé"], 2, "Il répond à la tactique de démasquage du prédateur.", "4:52"],
    ["p4", "« Une gauloise filtre » au bureau de tabac, c'est de la…", ["Politesse", "Non-politesse", "Impolitesse", "Hyperpolitesse"], 1, "Absence normale de marqueur de politesse dans ce contexte.", "4:57"],
    ["p4", "Goffman était l'élève de…", ["Bateson", "Birdwhistell", "Jakobson", "Hall"], 1, "Erving Goffman, élève de Ray Birdwhistell.", "4:44"],
    ["p5", "La télévision est un média…", ["Réversible et synchrone", "Irréversible, un à plusieurs", "Réversible, plusieurs à un", "Un à un"], 1, "Pas de rétroaction sur le même canal, un émetteur pour plusieurs récepteurs.", "5:2;5:9"],
    ["p5", "Le courriel est…", ["Réversible et asynchrone", "Irréversible", "Réversible et synchrone", "Plusieurs à plusieurs uniquement"], 0, "On peut répondre, mais en différé.", "5:4"],
    ["p5", "Selon le cours, le prompt engineering est…", ["Un bug de l'IA", "L'art de rédiger les instructions", "Un moteur de recherche", "Une fonction du langage"], 1, "C'est un des critères de recherche propres à l'IA.", "5:10"]
  ],

  /* ------------------------------------------------------------------ */
  /* PAIRES (jeu d'association) : [auteur, notion, source]               */
  /* ------------------------------------------------------------------ */
  paires: [
    ["Claude Shannon", "Le modèle des 5 petites boîtes", "1:3"],
    ["Gallese et Rizzolatti", "Les neurones miroirs", "1:14"],
    ["René Girard", "Le désir mimétique", "1:15"],
    ["Robert Vischer", "Einfühlung (1873)", "1:19"],
    ["Alain Berthoz", "L'empathie comme changement de perspective", "1:18"],
    ["Thaler et Sunstein", "Le nudge", "1:32"],
    ["Jacob von Uexküll", "L'umwelt", "1:35"],
    ["Eco", "Le camouflage, communication mensongère", "2:4"],
    ["Huxley", "Les rites évitent la violence", "2:12"],
    ["Irene Pepperberg", "Le perroquet Alex", "2:16"],
    ["Karl von Frisch", "La danse des abeilles", "2:22"],
    ["Émile Benveniste", "Un code de signaux, pas un langage", "2:28"],
    ["Dominique Lestel", "La méta-communication animale", "2:44"],
    ["David Premack", "La guenon Sarah", "2:37"],
    ["Duane Rumbaugh", "Lana et les lexigrammes", "2:40"],
    ["Mounin et Prieto", "Indice, signal, symbole", "3:5"],
    ["Merleau-Ponty", "Le schéma corporel", "3:4"],
    ["Ray Birdwhistell", "La kinésique", "3:22"],
    ["Watzlawick, Beavin, Jackson", "Les 5 axiomes", "3:28"],
    ["Bateson et al.", "Le double bind", "3:24"],
    ["Jacques Cosnier", "La posturo-mimo-gestualité", "3:29"],
    ["Edward T. Hall", "La proxémique", "3:39"],
    ["Humphry Osmond", "Sociofuge / sociopète", "3:45"],
    ["Robert Sommer", "Les conversations à la cafétéria", "3:49"],
    ["Roman Jakobson", "Les 6 fonctions du langage", "4:6-8"],
    ["Karl Bühler", "Représentation, appel, expression", "4:9"],
    ["Malinowski", "La fonction sociale des propos sur la météo", "4:24"],
    ["Roland Barthes", "Dénotation, connotation, métalangage", "4:27"],
    ["Kerbrat-Orecchioni", "Compétences, idiolectes, FTA et FFA", "4:32;4:57"],
    ["Antoine Culioli", "La compréhension, cas particulier du malentendu", "4:32"],
    ["Umberto Eco (1973)", "Le modèle des intentions, 8 cas", "4:38-39"],
    ["Harold Garfinkel", "L'ethnométhodologie", "4:44"],
    ["Erving Goffman", "La face et les rituels", "4:48-50"],
    ["Brown et Levinson", "Face positive et face négative", "4:48"],
    ["Ronald Laing", "« Je sais que tu sais »", "4:59"]
  ],

  /* ------------------------------------------------------------------ */
  /* REPÈRES chronologiques : [année, qui, quoi, source]                  */
  /* ------------------------------------------------------------------ */
  reperes: [
    ["1873", "Robert Vischer", "Emploie le mot Einfühlung (empathie)", "1:19"],
    ["1920", "Jacob von Uexküll", "L'umwelt", "1:35"],
    ["1939-45", "Claude Shannon", "Modèle mathématique de la communication (pendant la Deuxième Guerre mondiale)", "1:3"],
    ["1945", "Maurice Merleau-Ponty", "*Phénoménologie de la perception*, le schéma corporel", "3:4"],
    ["années 50", "École de Palo Alto", "La « nouvelle communication »", "3:19"],
    ["1952", "Émile Benveniste", "« Communication animale et langage humain »", "2:28"],
    ["1956", "Bateson, Jackson, Haley, Weakland", "Le double bind", "3:24"],
    ["1961", "René Girard", "Le désir mimétique (*Mensonge romantique et vérité romanesque*)", "1:15-16"],
    ["1963", "Edward T. Hall", "La proxémique", "3:39"],
    ["1967", "Watzlawick, Beavin, Jackson", "*Une logique de la communication*, les 5 axiomes", "3:28"],
    ["années 70", "Mounin et Prieto", "Sémiologie de la communication : indice, signal, symbole", "3:5"],
    ["années 70", "Duane Rumbaugh", "L'expérience Lana", "2:40"],
    ["1971", "Huxley", "Les rites comme langage qui évite la violence", "2:12"],
    ["1972", "René Girard", "*La Violence et le Sacré*", "1:16"],
    ["1973", "Karl von Frisch", "Prix Nobel (danse des abeilles)", "2:22"],
    ["1975", "Eco", "Le camouflage, communication mensongère", "2:4"],
    ["1977-2007", "Irene Pepperberg", "Le perroquet Alex", "2:16"],
    ["1992", "Gallese et Rizzolatti", "Découverte des neurones miroirs à Parme", "1:14"],
    ["1997", "Jacques Cosnier", "*Geste, cognition et communication* (PMG)", "3:29"],
    ["2002", "Dominique Lestel", "« Langage et communications animales »", "2:43"],
    ["2004", "Alain Berthoz", "L'empathie comme changement de perspective", "1:18"],
    ["2005", "Laurence Henry", "L'oiseau, modèle de l'apprentissage du langage", "2:20"],
    ["2008", "Thaler et Sunstein", "Le nudge", "1:32"],
    ["2008", "Paul Ricœur", "L'empathie comme résonance du corps propre", "1:18"],
    ["2014", "Alain Rabatel", "Le dialogisme interne, « des autres en soi »", "1:21"],
    ["1923", "Bronislaw Malinowski", "La fonction sociale des échanges (fonction phatique)", "4:24"],
    ["1936", "Karl Bühler", "Représentation, appel, expression", "4:9"],
    ["1949", "Shannon et Weaver", "*Théorie mathématique de la communication*", "4:2"],
    ["1963", "Roman Jakobson", "Les 6 facteurs et les 6 fonctions du langage", "4:6"],
    ["1967", "Roland Barthes", "Dénotation, connotation, métalangage", "4:27"],
    ["1967", "Harold Garfinkel", "*Studies in Ethnomethodology*", "4:44"],
    ["1973", "Umberto Eco", "Le modèle des intentions (8 cas)", "4:39"],
    ["1973", "Erving Goffman", "*La Mise en scène de la vie quotidienne*", "4:46"],
    ["1974", "Erving Goffman", "*Les Rites d'interaction*", "4:46"],
    ["1980", "Catherine Kerbrat-Orecchioni", "L'échange en termes de compétences", "4:32"],
    ["1987", "Brown et Levinson", "*Politesse* : face positive et face négative", "4:48"],
    ["1987", "Erving Goffman", "*Façons de parler*", "4:46"],
    ["2010", "Catherine Kerbrat-Orecchioni", "« L'impolitesse en interaction » : FTA et FFA", "4:57"]
  ],

  /* ------------------------------------------------------------------ */
  /* EXERCICE IA (6/20)                                                   */
  /* ------------------------------------------------------------------ */
  exoIA: {
    consigne: "Réaliser une communication avec l'IA sur un sujet qui vous intéresse et analyser cette communication selon les modalités délimitées durant le cours. Qu'est-ce qui différencie l'IA d'un moteur de recherche ? Relever des marqueurs de communication et d'énonciation : emploi de déictiques, marqueurs interactionnels ou relationnels (différents de ceux qui véhiculent seulement des informations), marqueurs de dépassement de la distance sociale, etc.",
    consigneSrc: "3:2",
    etapes: [
      "**Choisis un sujet qui t'intéresse vraiment** (la consigne le demande). Exemple : une question de pub, de motion design, de 3D. *(5 min)*",
      "**Mène une vraie conversation de 8 à 10 échanges.** Pour faire apparaître les marqueurs, varie les situations : dis bonjour, remercie, contredis l'IA une fois, demande-lui son avis (« et toi, t'en penses quoi ? »), demande-lui ce qu'elle est. *(20 à 30 min)*",
      "**Garde une trace** : copie la conversation ou fais des captures, tu dois pouvoir citer ses phrases exactes. *(5 min)*",
      "**Tape la même question dans un moteur de recherche** et note ce qui change (forme de la réponse, dialogue ou pas, relation ou pas). *(10 min)*",
      "**Relève les marqueurs** avec la grille ci-dessous, en collant les citations exactes. *(30 à 45 min)*",
      "**Rédige l'analyse** : pour chaque marqueur, cite la phrase, nomme la notion du cours et son auteur, puis explique ce que ça montre. *(1h à 1h30)*"
    ],
    grille: [
      { titre: "1. Déictiques", quoi: "« je », « tu / vous », « ici », « maintenant », « aujourd'hui », « demain »… Qui est le « je » de l'IA ? A-t-elle un ici et un maintenant ?", notions: "Les déictiques ne se comprennent que par la situation d'énonciation, le je-ici-maintenant (Cosnier). Le cours cite l'emploi des déictiques comme une marque de la **simulation** du dialogue par l'IA.", src: "3:30-31;5:10" },
      { titre: "2. Reprise du thème", quoi: "L'IA reprend tes mots, renvoie à ce que tu as dit avant : « comme tu le disais », « pour revenir à ta question ».", notions: "Forme dialogique, reprise du thème (cours 5). Les énoncés sont co-produits par les interactants (interactivité, Cosnier).", src: "5:10;3:29" },
      { titre: "3. Marqueurs phatiques (garder le contact)", quoi: "« Bonjour ! », « N'hésite pas si… », « Tu veux que je développe ? », « J'espère que ça t'aide » : des phrases qui n'informent pas mais entretiennent le lien.", notions: "Fonction phatique (Jakobson) ; Malinowski : ces propos ont une fonction sociale. Rituels d'accès et de congé (Goffman).", src: "4:23-24;4:50" },
      { titre: "4. Marqueurs relationnels, face et politesse", quoi: "Compliments (« Excellente question ! »), excuses (« Désolé pour la confusion »), approbation (« Tu as raison »), adoucisseurs (« peut-être », « si tu veux »).", notions: "Niveau de la relation vs niveau du contenu (Palo Alto). La face et les rituels de confirmation et de réparation (Goffman). FFA, adoucisseurs, hyperpolitesse (Kerbrat-Orecchioni).", src: "3:28;4:48;4:50;4:57-58" },
      { titre: "5. Dépassement de la distance sociale", quoi: "Tutoiement, familiarité, humour, émojis, ton complice ou confident. L'IA se rapproche-t-elle comme on passerait de la distance sociale à la distance personnelle ?", notions: "Les 4 distances de Hall, prises au sens figuré. L'« illusion de communication de face-à-face » que le cours attribue à l'IA.", src: "3:42-43;5:10" },
      { titre: "6. Fonction conative (t'interpeller)", quoi: "Questions qu'elle te pose, impératifs : « Dis-moi… », « Essaie de… », « Tu préfères quelle option ? ».", notions: "Fonction conative : impératif, interpellation, le destinataire doit se sentir concerné (Jakobson).", src: "4:11" },
      { titre: "7. Affects affichés (fonction expressive)", quoi: "« Je trouve que… », « Je suis ravi de t'aider », « C'est passionnant ! ». L'IA exprime-t-elle des émotions ? Sont-elles vécues ?", notions: "Fonction émotive (Jakobson). Communication émotive = mise en scène, voire simulation d'affects (Cosnier). Le cas 2 d'Eco : la simulation.", src: "4:10;3:36-37;4:40" },
      { titre: "8. Méta-communication", quoi: "Quand l'IA parle d'elle-même ou de sa réponse : « En tant qu'IA, je ne peux pas… », « Je vais te répondre en 3 points ».", notions: "Le cours parle d'une « certaine prise de conscience de l'IA de ce qu'elle est » : la méta-communication. Fonction métalinguistique (Jakobson) ; axiome ii de Palo Alto.", src: "5:10;4:25;3:28" },
      { titre: "9. L'IA comme média", quoi: "Classe l'échange selon les 3 critères : réversible ou non ? synchrone ou non ? combien de pôles ?", notions: "Les 3 critères de la communication médiatisée et le tableau récapitulatif (cours 5).", src: "5:2;5:4;5:9" }
    ],
    pistes: [
      { texte: "**IA ou moteur de recherche ?** Le cours donne lui-même la base de la réponse : l'IA est un moteur de recherche très performant, **mais** elle a une forme dialogique, simule le face-à-face et fait de la méta-communication. Ta conversation doit montrer ces différences avec des exemples.", src: "5:10" },
      { texte: "Un moteur de recherche ressemble à une **transmission d'informations** (modèle de Shannon). L'IA **co-produit** l'échange et entretient une relation : tu peux discuter si elle se rapproche du modèle orchestral, ou si ce n'est qu'une illusion.", src: "4:4;3:23;3:29;5:10" },
      { texte: "L'IA n'a **pas de corps** : ni posturo-mimo-gestualité, ni proxémique réelle. Les modèles verbaux (Jakobson, Kerbrat-Orecchioni) lui conviennent mieux que ceux du non verbal. Ses marques d'empathie relèvent-elles de la communication émotive, donc d'une simulation ?", src: "3:29;4:31;4:37;3:36" },
      { texte: "Avec **Eco**, tu peux te demander quelle intention tu attribues à l'IA : ses compliments sont-ils sincères, stratégiques, ou sans intention du tout ?", src: "4:38;4:43" }
    ]
  }
};
