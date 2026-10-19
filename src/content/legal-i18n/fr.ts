import type { LegalI18nSet } from "./types";

const IDENTITY = {
  h: "Responsable du traitement",
  p: [
    "OneSpec est un produit numérique de CORE829 SRL, qui l'exploite depuis son siège social Str. Mihai Eminescu, 10, Roman, România, CUI/CIF RO54616345 — Reg. com. J2026029428009, téléphone +40 766 668 482 (Roumanie) · +39 375 946 8881 (Italie), PEC (courrier électronique certifié italien) : non applicable — CORE829 SRL est une société de droit roumain, qui ne dispose pas de ce système.",
    "Pour toute demande relative aux données personnelles, vous pouvez écrire à hello@onespec.eu. Aucun délégué à la protection des données (DPO) n'a été désigné ; coordonnées du DPO : non applicable — aucun DPO désigné à la date de révision.",
  ],
};

const RIGHTS = {
  h: "Droits de la personne concernée",
  p: [
    "En tant que personne concernée, vous pouvez exercer les droits prévus aux articles 15 à 22 du RGPD : accès, rectification, effacement, limitation, portabilité, opposition et retrait du consentement.",
    "Accès et portabilité : depuis la page Compte, vous pouvez télécharger à tout moment une copie de vos données au format JSON ; l'export comprend aussi les tickets d'assistance que vous avez ouverts (avec les réponses de notre équipe et les noms des fichiers joints) et les messages envoyés depuis la page « Nous contacter » avec votre adresse e-mail. L'export comprend aussi les notes internes de traitement de vos tickets, dans les limites prévues par la loi (les informations concernant d'autres personnes ou qui porteraient atteinte aux droits d'autrui sont exclues). Les données techniques de sécurité (par exemple l'adresse IP, conservée uniquement sous forme de hash) sont des données personnelles pseudonymisées et peuvent être demandées à hello@onespec.eu.",
    "Effacement : depuis la page Compte, vous pouvez demander la suppression du compte ; la demande est exécutée après un délai de réflexion de 30 jours, sauf obligation de conservation. La suppression du compte efface aussi les tickets d'assistance que vous avez ouverts, leurs messages, notes internes et pièces jointes, ainsi que les messages envoyés depuis la page « Nous contacter » avec votre e-mail.",
    "Réclamation : vous pouvez introduire une réclamation auprès de l'autorité de contrôle si vous estimez que le traitement enfreint la réglementation. Le responsable du traitement étant établi en Roumanie, l'autorité chef de file est l'Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP, dataprotection.ro) ; vous pouvez en tout cas vous adresser à l'autorité du pays où vous résidez ou travaillez (pour la France, la CNIL ; pour l'Italie, le Garante per la protezione dei dati personali).",
  ],
};

const CONTACT = {
  h: "Contacts pour les questions juridiques et contractuelles",
  p: [
    "Pour les questions contractuelles, contestations ou communications juridiques relatives au présent document : office@core829.net.",
    "Pour les demandes commerciales : sales@core829.net. Pour l'assistance sur le service et les demandes de forfaits Enterprise sur mesure : hello@onespec.eu.",
  ],
};

export const FR: LegalI18nSet = {
  privacy: {
    title: "Politique de confidentialité",
    summary: "Quelles données personnelles nous traitons, pourquoi et pendant combien de temps.",
    sections: [
      IDENTITY,
      {
        h: "Données traitées",
        p: [
          "Compte : nom, adresse e-mail, langue préférée, pays (déduit à l'inscription du réseau ou de la langue du navigateur), date de naissance (demandée à l'inscription uniquement pour vérifier la majorité), date d'inscription, statut de vérification de l'e-mail.",
          "Vérification en deux étapes (facultative) : si vous l'activez, nous conservons le secret de l'application d'authentification sous forme chiffrée, l'empreinte (hash) des codes de récupération et le nombre de tentatives erronées ; nous ne conservons pas les codes à usage unique générés par votre application.",
          "Organisation : raison sociale, numéro de TVA, adresse, téléphone et e-mail saisis par l'utilisateur dans les paramètres de personnalisation.",
          "Demandes de devis générées par le widget : nom, e-mail, téléphone, société et message du client potentiel, avec la configuration technique choisie et le prix indicatif calculé.",
          "Données techniques du widget : hash de l'adresse IP (l'IP en clair n'est pas conservée), user agent, résultat de la vérification anti-robot, score anti-spam.",
          "Assistance : objet, texte et pièces jointes (images ou PDF) des tickets que vous ouvrez depuis la plateforme, catégorie, statut, éventuelle note de 1 à 5, réponses de notre équipe et notes internes de traitement (non visibles pour vous).",
          "Page « Nous contacter » (pour ceux qui ne parviennent pas à se connecter) : nom, adresse e-mail et message que vous saisissez, sujet choisi, langue et hash de l'adresse IP (l'IP en clair n'est pas conservée) utilisé pour limiter les abus.",
          "Journal d'activité (audit log) des actions administratives et des opérations sensibles, y compris les actions sur les tickets (identifiants et type d'action, sans le texte des messages).",
          "Programme de parrainage : code d'invitation, comptes liés, statut de l'invitation et montant de la récompense ; pour les récompenses en argent, l'identifiant du compte Stripe Connect et les documents fiscaux envoyés (facture et certificat de résidence fiscale).",
        ],
      },
      {
        h: "Finalités et bases juridiques",
        p: [
          "Fourniture du service et gestion du compte — exécution du contrat (art. 6.1.b RGPD).",
          "Assistance par tickets — exécution du contrat (art. 6.1.b). Réponse aux messages envoyés depuis la page « Nous contacter » par des personnes sans compte — mesures précontractuelles ou contractuelles prises à la demande de la personne concernée (art. 6.1.b) et, pour les demandes non contractuelles, intérêt légitime à répondre (art. 6.1.f).",
          "Sécurité, prévention des abus, limitation de fréquence et audit (y compris sur la page « Nous contacter » et sur les tickets) — intérêt légitime (art. 6.1.f).",
          "Les e-mails relatifs aux tickets (nouvelle réponse, ticket résolu) sont des messages de service liés à votre demande, non des communications commerciales ; vous pouvez les désactiver dans les préférences de notification.",
          "Envoi de communications sur le produit et commerciales — consentement (art. 6.1.a), révocable depuis la page Compte.",
          "Obligations fiscales et comptables liées aux abonnements payants — obligation légale (art. 6.1.c).",
          "Programme de parrainage — exécution du règlement accepté (art. 6.1.b) ; vérification et conservation des documents fiscaux des récompenses en argent — obligation légale (art. 6.1.c) ; contrôles anti-abus — intérêt légitime (art. 6.1.f).",
        ],
      },
      {
        h: "Conservation",
        p: [
          "Données du compte : pendant toute la durée de la relation, supprimées dans les 30 jours suivant la demande de suppression.",
          "Demandes de devis, journal d'activité et journaux de sécurité : conservés tant que l'organisation est active sur la plateforme ; il n'existe pas à ce jour de suppression automatique programmée de ces données, qui sont supprimées sur demande selon la procédure décrite à la section « Droits de la personne concernée ».",
          "Tickets d'assistance : les tickets clos sont supprimés automatiquement, avec messages, notes internes et pièces jointes, 730 jours (24 mois) après la dernière activité ; les tickets résolus sans autre réponse se ferment d'eux-mêmes après 7 jours ; les fichiers téléversés mais jamais envoyés sont supprimés après 24 heures. Cette durée sert à gérer d'éventuelles contestations sur l'assistance fournie et à défendre un droit en justice.",
          "Messages de la page « Nous contacter » : supprimés 90 jours après leur traitement et en tout cas dans les 365 jours suivant leur réception.",
          "Notifications dans l'application : 365 jours. Journal des e-mails de service envoyés : 90 jours.",
          "À la suppression du compte, nous supprimons aussi les tickets, messages, notes internes et pièces jointes que vous avez ouverts et les messages « Nous contacter » envoyés avec votre e-mail ; seuls les identifiants et le type d'action, sans texte, restent dans le journal d'activité.",
          "Documents fiscaux relatifs aux abonnements payants : pendant la durée prévue par la réglementation fiscale et comptable applicable au siège social du responsable du traitement.",
        ],
      },
      {
        h: "Assistance et tickets : qui voit quoi",
        p: [
          "Un ticket est visible par la personne qui l'a ouvert, par les propriétaires et administrateurs de son organisation sur la plateforme et par le personnel d'assistance de OneSpec expressément autorisé et tenu à la confidentialité. Chaque ouverture d'une pièce jointe par notre personnel est enregistrée. Avant d'être mises à disposition, les pièces jointes font l'objet d'un contrôle de sécurité automatique (détection de contenus malveillants et signature d'intégrité) ; les fichiers refusés ne sont pas conservés. Il s'agit d'un contrôle interne, non d'un service antivirus tiers. Les notes internes de l'équipe ne sont pas visibles pour le client.",
          "Pour vos coordonnées et la gestion de l'assistance, OneSpec agit en tant que responsable du traitement. Si en revanche vous saisissez dans le ticket des données personnelles de tiers (par exemple les clients de votre organisation), OneSpec les traite en tant que sous-traitant, pour le compte de votre organisation, conformément à l'accord de traitement des données (DPA) et uniquement pour résoudre la demande. Ne saisissez que les données strictement nécessaires.",
          "N'envoyez jamais de mots de passe, codes de vérification, données de cartes de paiement, catégories particulières de données personnelles (art. 9 RGPD, par exemple des données de santé) ni de pièces d'identité : ils ne sont pas nécessaires à l'assistance.",
        ],
      },
      {
        h: "Prestataires et sous-traitants ultérieurs",
        p: [
          "OneSpec s'appuie sur les prestataires suivants, qui traitent des données pour le compte du responsable du traitement sur la base d'accords conformes à l'art. 28 RGPD :",
          "• Convex (Convex, Inc.) — base de données, backend applicatif et stockage des fichiers joints aux tickets d'assistance. Localisation des données : États-Unis d'Amérique.",
          "• Stripe (Stripe Payments Europe, Ltd.) — gestion des abonnements et des paiements ; les données de carte sont traitées directement par Stripe et ne transitent pas par OneSpec ni ne sont conservées par elle.",
          "• Resend (Resend, Inc.) — envoi des e-mails transactionnels (codes de vérification, notifications de devis, alertes sur les tickets d'assistance ; ces dernières ne reprennent pas le texte des messages).",
          "• Cloudflare Turnstile (Cloudflare, Inc.) — vérification anti-robot sur l'envoi des devis depuis le widget et sur les formulaires de connexion, d'inscription, de récupération du mot de passe et « Nous contacter ».",
          "• Vercel (Vercel, Inc.) — hébergement de l'application web et du site, mesure des performances (Speed Insights, sans cookies) et statistiques de visite agrégées (Web Analytics, sans cookies, uniquement avec consentement préalable).",
          "• PostHog (PostHog Inc.) — analyse de produit et enregistrement de session (clics, défilement, navigation) pour détecter et corriger les dysfonctionnements ; les valeurs saisies dans les champs des formulaires restent masquées. Actif uniquement après consentement explicite via la bannière cookies.",
          "• Sentry (Functional Software, Inc.) — détection des erreurs techniques ; l'enregistrement visuel de la session (Session Replay) n'est actif qu'après le même consentement, tandis que le seul signalement des erreurs reste toujours actif pour garantir la sécurité et la stabilité du service.",
          "Les éventuels transferts vers des pays tiers reposent sur les clauses contractuelles types de la Commission européenne. La liste à jour des sous-traitants ultérieurs et leurs détails est disponible sur demande à hello@onespec.eu.",
        ],
      },
      RIGHTS,
      {
        h: "Modifications",
        p: [
          "Les éventuelles mises à jour de la présente politique sont publiées sur cette page avec la nouvelle date de révision. Les modifications substantielles sont également communiquées par e-mail aux utilisateurs inscrits.",
        ],
      },
      CONTACT,
    ],
  },
  "termini-di-servizio": {
    title: "Conditions de service",
    summary: "Les conditions contractuelles entre OneSpec et l'organisation cliente.",
    sections: [
      {
        h: "Objet",
        p: [
          "Les présentes Conditions régissent l'utilisation de la plateforme OneSpec par l'organisation cliente (« Client ») et les personnes qu'elle autorise.",
          "OneSpec est un produit numérique de CORE829 SRL, qui en est le fournisseur et le titulaire des contrats, de la facturation et des paiements (gérés via Stripe). Dans les présentes Conditions, « OneSpec » désigne le service et son équipe.",
        ],
      },
      {
        h: "Compte et inscription",
        p: [
          "L'accès nécessite la création d'un compte et la vérification de l'adresse e-mail.",
          "Les nouvelles inscriptions peuvent être ouvertes ou suspendues par OneSpec. Chaque organisation accède au service avec le forfait payant choisi, aux conditions indiquées au moment de l'adhésion.",
        ],
      },
      {
        h: "Forfaits et prix",
        p: [
          "OneSpec propose deux familles d'abonnement : les forfaits « Devis en ligne » (Level 1, Level 2, Level 3), consacrés au configurateur publiable sur le site du Client et, lorsqu'il est inclus, au configurateur Showroom ; et les forfaits « Plateforme complète » (Base, Pro, Agency, Enterprise), qui comprennent aussi les modules de gestion du travail. Le Client choisit librement la famille et le forfait et peut passer de l'une à l'autre à tout moment depuis la section « Forfait et facturation ».",
          "Les forfaits, limites et prix en vigueur sont ceux publiés sur la page des prix au moment de la souscription. Les prix sont indiqués hors TVA, appliquée sur la facture selon la réglementation en vigueur.",
          "Conditions économiques détaillées, facturation, taxes applicables et modes de paiement : les prix sont ceux indiqués sur la page Forfaits et au moment de l'achat lors du paiement ; l'abonnement se renouvelle automatiquement chaque mois ou chaque année et peut être résilié à tout moment depuis la page Facturation, avec effet à la fin de la période déjà payée ; les paiements sont gérés par Stripe ; les taxes applicables sont calculées et indiquées lors du paiement selon la réglementation en vigueur ; en cas de non-paiement, l'accès peut être suspendu après les relances prévues par le service.",
          "Le non-paiement peut entraîner la suspension de l'accès après notification.",
        ],
      },
      {
        h: "Forfaits « Devis en ligne » (Level 1, Level 2, Level 3)",
        p: [
          "Les forfaits Level sont facturés exclusivement mensuellement, ne prévoient pas de période d'essai gratuite et peuvent être résiliés à tout moment avec effet à la fin de la période déjà payée.",
          "Chaque forfait Level comprend, pour chaque mois civil, un nombre maximal de : demandes de devis reçues par le configurateur public ; documents PDF téléchargeables par le Client ; envois WhatsApp effectués par le Client depuis l'application ; et, lorsque c'est prévu, devis, documents et envois WhatsApp du configurateur Showroom. Il comprend aussi un nombre maximal de configurateurs et d'utilisateurs. Les valeurs de chaque forfait sont celles publiées sur la page des prix ; Level 2 et Level 3 prévoient respectivement le double et le quintuple des limites mensuelles de Level 1.",
          "Un document PDF ou un envoi WhatsApp relatif à la même demande ou au même devis n'est compté qu'une seule fois : le télécharger ou l'envoyer à nouveau ne consomme pas d'unités supplémentaires. Les compteurs sont remis à zéro le premier jour de chaque mois civil.",
          "Les demandes reçues au-delà de la limite mensuelle ne sont pas perdues : elles sont enregistrées, mais les coordonnées du demandeur ne deviennent visibles pour le Client qu'après le passage à un forfait supérieur ou à partir du premier jour du mois suivant. Une fois la limite mensuelle de PDF ou d'envois WhatsApp atteinte, les fonctions correspondantes redeviennent disponibles le mois suivant ou avec un forfait supérieur.",
          "Les modules non inclus dans les forfaits Level (notamment devis B2B avec signature, clients et affaires, chantiers, métrés, pose, réceptions, dossiers QR, statistiques et, selon le forfait, Showroom et logistique) restent visibles mais inutilisables. La mention « Powered by OneSpec » est affichée dans le configurateur du forfait Level 1 ; les forfaits Level 2 et Level 3 comprennent la personnalisation à la marque du Client (marque blanche).",
          "Les limites mesurent l'utilisation des fonctions de l'application ; le Client s'engage à ne pas les contourner par des moyens techniques (voir « Utilisation acceptable »).",
        ],
      },
      {
        h: "Changement de forfait, résiliation et suspension",
        p: [
          "Le passage à un forfait supérieur prend effet immédiatement : les nouvelles limites s'appliquent aussitôt et les demandes enregistrées au-delà de la limite du mois en cours deviennent visibles. Le passage à un forfait inférieur, ou d'un forfait « Plateforme complète » à un forfait Level, n'entraîne aucune suppression de données : les modules non inclus dans le nouveau forfait deviennent temporairement inutilisables et redeviennent disponibles avec un forfait qui les comprend.",
          "Le passage à un forfait comptant moins d'utilisateurs que les utilisateurs actifs du Client n'est possible qu'après avoir retiré les utilisateurs en excès. Si le Client dispose de plus de configurateurs publiés que n'en prévoit le nouveau forfait Level, seuls les configurateurs les plus anciens dans la limite du forfait restent accessibles au public.",
          "En cas de résiliation ou de suspension de l'abonnement, pour tout forfait, le configurateur public cesse d'être disponible pour les visiteurs à la fin de la période payée. Les demandes éventuellement reçues pendant la suspension sont enregistrées, mais leurs coordonnées ne deviennent visibles qu'à la réactivation de l'abonnement.",
        ],
      },
      {
        h: "Remboursements",
        p: [
          "OneSpec est un produit numérique fourni par abonnement (mensuel ou annuel) : l'accès à la plateforme et à ses fonctions est mis à la disposition du Client immédiatement au moment du paiement ou du renouvellement. Pour cette raison, sauf disposition impérative de la loi applicable, les sommes versées ne sont pas remboursables, ni en tout ni en partie, y compris en cas de non-utilisation du service pendant la période déjà payée.",
          "En cas de passage à un forfait inférieur (downgrade), l'éventuel crédit acquis sur la période déjà payée n'est pas remboursé en argent mais reste disponible comme crédit sur la plateforme, appliqué automatiquement au prochain renouvellement ou prélèvement — consultable à tout moment dans la section « Forfait et facturation » du compte.",
          "La résiliation de l'abonnement (annulation du renouvellement) ne donne droit à aucun remboursement de la somme déjà versée pour la période en cours : l'accès reste actif jusqu'à la fin de cette période, comme indiqué au moment de la résiliation.",
          "Les droits impératifs éventuellement prévus par la loi applicable en cas de non-fourniture du service imputable à OneSpec demeurent réservés.",
        ],
      },
      {
        h: "Codes promotionnels",
        p: [
          "OneSpec peut proposer, pour des périodes et en quantités limitées, des codes promotionnels à saisir sur la page de paiement. Les conditions de chaque code (réduction, forfaits concernés, nombre maximal d'utilisations et éventuelle date d'expiration) sont celles communiquées avec le code et appliquées par le système de paiement au moment de l'achat ; une fois les utilisations disponibles épuisées ou la date d'expiration dépassée, le code n'est plus valable.",
          "Sauf indication contraire, un code promotionnel : n'est valable que pour le premier achat d'un nouvel abonnement et une seule fois par Client ; s'applique uniquement à la première facture des forfaits facturés mensuellement, le prix catalogue en vigueur s'appliquant dès la facture suivante ; n'est valable ni pour le forfait Enterprise ni pour la facturation annuelle ; ne se cumule pas avec la réduction du programme de parrainage ; n'a aucune valeur monétaire, n'est pas cessible et ne donne droit à aucun remboursement ni crédit.",
          "La TVA, lorsqu'elle est due, est calculée sur le montant réduit. OneSpec peut refuser ou retirer une réduction obtenue en violation de ces conditions, par exemple en ouvrant plusieurs comptes pour la même organisation.",
        ],
      },
      {
        h: "Utilisation acceptable",
        p: [
          "Le Client s'engage à ne pas utiliser le service pour des activités illicites, à ne pas tenter de contourner les limites techniques, de sécurité ou d'utilisation de son forfait et à ne pas téléverser de contenus dont il ne détient pas les droits. Le Client conserve en lieu sûr ses identifiants et les codes de récupération de la vérification en deux étapes, que nous recommandons d'activer pour toutes les personnes ayant accès à la plateforme.",
          "Le Client est responsable des contenus, tarifs et données qu'il saisit et de leur conformité aux réglementations applicables.",
        ],
      },
      {
        h: "Assistance",
        p: [
          "L'assistance est fournie par les tickets de la section « Support » de la plateforme et, pour ceux qui ne parviennent pas à se connecter, par la page « Nous contacter ». Le personnel de OneSpec répond les jours ouvrables.",
          "Les délais de première réponse et de résolution que OneSpec se fixe sont des objectifs internes, non des garanties ni des niveaux de service contraignants, sauf accord écrit différent avec le Client Enterprise (voir « Limitation de responsabilité » et les conditions de disponibilité convenues).",
          "Dans les tickets, le Client s'engage à ne pas saisir de mots de passe, codes de vérification, données de cartes de paiement ou données personnelles non nécessaires, à ne pas joindre de contenus illicites, offensants ou dont il ne détient pas les droits, et à n'utiliser que les pièces jointes autorisées (images PNG, JPG, WebP et PDF, jusqu'à 3 fichiers par message et 8 Mo chacun). OneSpec peut supprimer les contenus non conformes et clore les tickets qui abusent du service. Les pièces jointes sont vérifiées automatiquement et celles qui échouent au contrôle de sécurité sont refusées.",
          "Un ticket résolu sans autre réponse se ferme automatiquement après 7 jours ; les tickets clos et leurs pièces jointes sont supprimés selon les délais indiqués dans la politique de confidentialité.",
        ],
      },
      {
        h: "Prix indicatifs du configurateur",
        p: [
          "Les prix affichés par le widget sont des estimations indicatives calculées sur les tarifs fournis par le Client et ne constituent pas une offre contractuelle envers le consommateur final, sauf paramétrage différent autorisé par les réglementations locales.",
        ],
      },
      {
        h: "Limitation de responsabilité",
        p: [
          "Le service est fourni « en l'état ». Dans les limites permises par la loi, la responsabilité de OneSpec est limitée au montant versé par le Client à OneSpec au cours des douze mois précédant l'événement à l'origine du dommage, à l'exclusion en tout cas des pertes indirectes (manque à gagner, perte de clients ou de données non imputable à OneSpec) ; les responsabilités que la loi ne permet pas de limiter (dol, faute lourde, dommages corporels) demeurent réservées.",
          "Les droits impératifs du Client consommateur, le cas échéant, demeurent réservés.",
        ],
      },
      {
        h: "Durée, rétractation et droit applicable",
        p: [
          "Le contrat a une durée égale à la période d'abonnement et se renouvelle sauf résiliation.",
          "Portabilité et changement de fournisseur (règlement (UE) 2023/2854, « Data Act ») : à tout moment, y compris après la résiliation et pendant au moins 30 jours, le Client peut exporter ses données depuis la page Compte dans un format structuré (JSON) ou demander une aide à la migration vers un autre fournisseur en écrivant à hello@onespec.eu ; passé ce délai, les données sont supprimées conformément à la politique de confidentialité.",
          "S'agissant d'un service par abonnement destiné à une organisation professionnelle, le droit de rétractation prévu par le Code de la consommation italien pour les contrats à distance conclus avec des consommateurs ne s'applique pas. Même s'il était applicable, ce droit serait en tout cas perdu pour la fourniture de contenu numérique non fourni sur un support matériel dont l'exécution a commencé avec l'accord exprès du Client, avec renonciation au droit de rétractation, lors de l'activation de l'abonnement (art. 59, lettre o, décret législatif italien 206/2005).",
          "La relation est régie par le droit roumain (avec application impérative des règles de l'UE, en particulier le RGPD), à l'exclusion de la Convention de Vienne sur la vente internationale de marchandises. Juridiction compétente : les tribunaux compétents de Roman / Neamț (Roumanie), siège social de CORE829 SRL, sans préjudice de la juridiction impérative du consommateur le cas échéant.",
        ],
      },
      CONTACT,
    ],
  },
  "termini-di-utilizzo": {
    title: "Conditions d'utilisation",
    summary: "Règles d'utilisation de l'application web et du widget intégrable.",
    sections: [
      {
        h: "Utilisateurs autorisés",
        p: [
          "L'accès à l'espace réservé est permis aux seules personnes autorisées par l'organisation, chacune avec des identifiants personnels et un rôle attribué.",
          "L'utilisateur doit conserver ses identifiants en lieu sûr et signaler sans délai tout accès non autorisé.",
        ],
      },
      {
        h: "Widget intégrable",
        p: [
          "Le widget ne peut être intégré que sur les domaines indiqués dans la configuration. L'intégration est contrôlée par des en-têtes de sécurité (Content-Security-Policy avec la liste des domaines autorisés).",
          "Il est interdit de modifier, d'obscurcir ou de reconditionner le widget ou de l'utiliser pour collecter des données à des fins autres que la demande de devis.",
        ],
      },
      {
        h: "Disponibilité et maintenance",
        p: [
          "OneSpec peut suspendre temporairement le service pour maintenance ou pour des raisons de sécurité, en réduisant autant que possible la gêne occasionnée.",
          "Niveaux de service (SLA) spécifiques : sauf accord écrit différent, OneSpec s'engage sur un objectif de disponibilité mensuelle de 99,5 % (hors maintenance programmée annoncée à l'avance), sans crédits automatiques ; des niveaux de service et délais de réponse dédiés peuvent être convenus par écrit avec le Client Enterprise.",
        ],
      },
      {
        h: "Propriété intellectuelle",
        p: [
          "Le logiciel, l'interface et la documentation de OneSpec restent la propriété de CORE829 SRL. Les données, tarifs et marques du Client restent la propriété du Client.",
        ],
      },
      CONTACT,
    ],
  },
  cookie: {
    title: "Cookies et technologies similaires",
    summary: "Quels cookies et stockages locaux utilisent le site onespec.eu et la plateforme.",
    sections: [
      {
        h: "Cookies techniques essentiels",
        p: [
          "L'authentification utilise un cookie de session nécessaire au fonctionnement de l'espace réservé. Sans ce cookie, la connexion est impossible. Il ne nécessite pas de consentement.",
          "Le site onespec.eu comme la plateforme enregistrent la langue choisie dans un cookie technique (« NEXT_LOCALE »), pour vous afficher les pages dans votre langue lors de votre prochaine visite. Il ne contient pas de données personnelles et ne nécessite pas de consentement.",
        ],
      },
      {
        h: "Stockage local fonctionnel",
        p: [
          "La préférence de thème (clair/sombre) est enregistrée dans le navigateur via localStorage avec la clé « onespec-theme ». C'est une donnée technique qui ne quitte pas l'appareil.",
        ],
      },
      {
        h: "Code d'invitation (stockage local)",
        p: [
          "Si vous arrivez sur OneSpec par un lien d'invitation (contenant « ?ref=… »), le code d'invitation est enregistré dans le navigateur via localStorage avec la clé « onespec-ref » pendant 30 jours, dans le seul but de relier votre inscription à la personne qui vous a invité. Ce n'est pas un cookie, il ne contient pas de données personnelles et n'est pas transmis à des tiers ; vous pouvez le supprimer à tout moment en effaçant les données du site.",
        ],
      },
      {
        h: "Vérification anti-robot (Cloudflare Turnstile)",
        p: [
          "Les formulaires de connexion, d'inscription, de récupération du mot de passe et « Nous contacter », ainsi que l'envoi des devis depuis le widget, utilisent Cloudflare Turnstile pour vérifier que c'est une personne qui les remplit. C'est une mesure de sécurité strictement nécessaire qui ne requiert pas de consentement ; elle n'est utilisée ni pour la publicité ni pour profiler les utilisateurs.",
        ],
      },
      {
        h: "Mesure des performances",
        p: [
          "Les performances des pages sont mesurées avec Vercel Speed Insights, qui n'utilise pas de cookies et ne suit pas les utilisateurs individuels.",
        ],
      },
      {
        h: "Statistiques de visite (avec consentement préalable)",
        p: [
          "Sur le site onespec.eu et sur la plateforme, nous utilisons Vercel Web Analytics pour compter de manière agrégée les pages visitées (page, pays, type d'appareil et de navigateur). Il n'utilise pas de cookies, ne crée pas de profils et ne permet pas de vous reconnaître d'un jour à l'autre ; avant l'envoi, nous retirons des adresses des pages les paramètres et les codes des liens privés.",
          "Il ne s'active que si vous acceptez les outils facultatifs dans la bannière cookies ; tant que vous n'acceptez pas, ou si vous refusez, rien n'est envoyé. Vous pouvez changer d'avis à tout moment : sur le site, depuis le lien « Préférences cookies » en bas de page.",
        ],
      },
      {
        h: "Enregistrement de votre choix sur les cookies",
        p: [
          "Votre choix dans la bannière (j'accepte / je refuse) est enregistré dans le navigateur via localStorage, avec la clé « onespec-cookie-consent » sur la plateforme et « onespec-site-consent » sur le site, pour ne pas vous le redemander à chaque visite. C'est une donnée technique qui ne quitte pas l'appareil.",
        ],
      },
      {
        h: "Analyse et enregistrement de session (avec consentement préalable)",
        p: [
          "Nous utilisons PostHog pour l'analyse de produit et l'enregistrement de session (clics, défilement, parcours de navigation) et Sentry Replay pour revoir visuellement ce qui a causé une erreur technique — tous deux servent à détecter et corriger les dysfonctionnements de la plateforme. Les valeurs saisies dans les champs des formulaires restent toujours masquées dans l'enregistrement.",
          "Ces outils ne s'activent pas automatiquement : au premier accès, une bannière demande le consentement ; tant qu'il n'est pas accepté, aucune donnée de navigation n'est collectée par ces outils. Le seul signalement technique des erreurs (sans enregistrement visuel ni données de navigation) reste en revanche toujours actif, comme mesure de sécurité et de stabilité du service.",
          "Aucun cookie publicitaire ou de profilage commercial tiers n'est utilisé.",
        ],
      },
      CONTACT,
    ],
  },
  gdpr: {
    title: "Droits des personnes concernées (RGPD)",
    summary: "Comment exercer l'accès, la portabilité, la rectification, l'effacement et l'opposition.",
    sections: [
      IDENTITY,
      RIGHTS,
      {
        h: "Comment exercer vos droits",
        p: [
          "Depuis la page Compte : export des données (JSON, y compris les tickets d'assistance et les messages « Nous contacter »), mise à jour du profil, gestion des consentements, demande de suppression.",
          "Par e-mail à hello@onespec.eu pour les demandes que vous ne pouvez pas traiter vous-même. Nous répondons dans un délai d'un mois, prolongeable de deux mois pour les demandes complexes.",
        ],
      },
      {
        h: "Traitements automatisés",
        p: [
          "Le calcul du prix indicatif et les contrôles anti-abus (limitation de fréquence, vérification anti-robot, score anti-spam) sont automatisés mais ne produisent pas d'effets juridiques sur la personne concernée. Les décisions commerciales sur la demande restent du ressort de l'organisation.",
        ],
      },
      CONTACT,
    ],
  },
  sicurezza: {
    title: "Sécurité et contrôles",
    summary: "Les mesures techniques et organisationnelles effectivement adoptées.",
    sections: [
      {
        h: "Protection des données en transit et au repos",
        p: [
          "Toutes les communications passent par TLS. Les données au repos sont chiffrées par les fournisseurs d'infrastructure (Convex, Vercel).",
          "Détails sur les clés et la gestion du chiffrement au repos : les données au repos sont chiffrées avec des algorithmes standard du secteur (AES-256) par les fournisseurs d'infrastructure, qui gèrent les clés ; OneSpec n'a pas accès aux clés et n'en conserve aucune copie.",
        ],
      },
      {
        h: "Contrôle des accès",
        p: [
          "Accès fondé sur les rôles (propriétaire, administrateur, membre) avec vérification côté serveur à chaque opération. Chaque enregistrement sensible est rattaché à l'organisation et les requêtes sont isolées par organisation.",
          "Un unique super-administrateur de la plateforme est défini par une liste d'adresses e-mail dans une variable d'environnement.",
          "Gestion des sessions avec possibilité de révoquer chaque appareil et de se déconnecter de tous les appareils.",
        ],
      },
      {
        h: "Secrets et configuration",
        p: [
          "Les clés et secrets sont gérés par des variables d'environnement de la plateforme de déploiement et ne figurent ni dans le code, ni dans les journaux, ni dans les réponses d'erreur.",
        ],
      },
      {
        h: "En-têtes de sécurité",
        p: [
          "L'application applique HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy et une Content-Security-Policy qui interdit l'intégration de l'espace réservé. Le widget utilise une CSP dédiée avec la liste des domaines autorisés par organisation.",
        ],
      },
      {
        h: "Limitation de fréquence et anti-abus",
        p: [
          "Limites appliquées à : la connexion, l'envoi de devis depuis le widget (par IP et par configurateur), les exports de données. Vérification anti-robot Cloudflare Turnstile sur les envois du widget.",
        ],
      },
      {
        h: "Journal d'activité",
        p: [
          "Les actions administratives et les opérations sensibles (publication des catalogues, changements de statut, exports, demandes de suppression) sont enregistrées avec l'auteur, l'objet et l'horodatage.",
        ],
      },
      {
        h: "Sauvegarde et continuité",
        p: [
          "Les sauvegardes et la restauration sont gérées par le fournisseur de la base de données. Politique de sauvegarde, objectifs RPO/RTO et tests de restauration périodiques : le fournisseur sauvegarde l'infrastructure et OneSpec peut exporter les données ; aucun objectif contractuel de RPO/RTO n'est garanti à ce jour ; ils sont vérifiés périodiquement et communiqués sur demande.",
        ],
      },
      {
        h: "Gestion des vulnérabilités et réponse aux incidents",
        p: [
          "Analyse des dépendances et des secrets, mises à jour et revue de sécurité avant les mises en production.",
          "Procédure de réponse aux incidents et délais de notification : en cas de violation de données personnelles, OneSpec lance la procédure interne de confinement et d'analyse et en informe le Client dans les meilleurs délais et en tout cas dans les 72 heures suivant sa découverte, afin qu'il puisse remplir les obligations de l'art. 33 RGPD.",
          "Pour les signalements de sécurité : hello@onespec.eu.",
        ],
      },
      CONTACT,
    ],
  },
  "regolamento-inviti": {
    title: "Règlement du programme de parrainage",
    summary: "Comment fonctionnent les récompenses, réductions, paiements et contrôles du programme « Invitez et économisez ».",
    sections: [
      {
        h: "Présentation du programme",
        p: [
          "Le programme « Invitez et économisez » permet à une organisation cliente de OneSpec (le « parrain ») d'inviter une autre entreprise (le « filleul ») au moyen de son code ou lien personnel. Le programme est une initiative commerciale de OneSpec, peut être activé, modifié ou suspendu à tout moment et concerne exclusivement des clients professionnels (B2B).",
          "Version du règlement : en vigueur depuis le 19 octobre 2026, approuvée par l'administrateur de CORE829 SRL ; les modifications ultérieures sont publiées sur cette page avec la nouvelle date et ne s'appliquent pas aux récompenses déjà acquises.",
        ],
      },
      {
        h: "Avantages",
        p: [
          "Le filleul bénéficie d'une réduction de 10 % sur la première facture de l'abonnement payant, calculée sur le prix catalogue du forfait et du cycle choisis. La réduction ne se cumule pas avec les codes promotionnels.",
          "Le parrain obtient une récompense égale à 10 % du prix catalogue, hors TVA, du forfait et du cycle de facturation effectivement achetés par le filleul (l'annuel est calculé comme dix mensualités). La récompense n'est due qu'une seule fois par compte filleul.",
          "Le forfait Enterprise, géré commercialement, est exclu du programme automatique.",
        ],
      },
      {
        h: "Quand la récompense est acquise",
        p: [
          "La récompense n'est acquise qu'après le premier paiement réel du filleul et après 30 jours, à condition que dans l'intervalle le paiement n'ait été ni remboursé ni contesté et que l'abonnement du filleul soit en règle.",
          "Un paiement réduit par un code promotionnel ne compte pas comme premier paiement réel : la récompense est acquise à partir du premier paiement suivant effectué sans code promotionnel (voir « Codes promotionnels » dans les Conditions de service).",
          "Chaque parrain peut recevoir au maximum 10 récompenses sur 12 mois consécutifs. Si le parrain n'est pas éligible dans les 90 jours suivant la fin de la période d'attente, l'invitation expire sans récompense.",
        ],
      },
      {
        h: "Comment la récompense est versée",
        p: [
          "Le propriétaire de l'organisation choisit entre deux modalités : un crédit sur le solde Stripe, qui réduit les prochaines factures de OneSpec, ou un virement en argent via Stripe Connect sur le compte relié par le parrain. Le paiement en argent nécessite de compléter la vérification d'identité demandée par Stripe.",
          "Le crédit n'est pas convertible en argent : c'est une remise sur les abonnements OneSpec du parrain, déduite des factures suivantes émises par CORE829 SRL, et il ne nécessite aucun document.",
          "La récompense en argent est la contrepartie d'un service d'apport d'affaires rendu par le parrain à CORE829 SRL. Lorsqu'elle est acquise, OneSpec demande au parrain par e-mail : (a) la facture de la récompense au nom de CORE829 SRL, Str. Mihai Eminescu 10, Roman, România, CUI/CIF RO54616345 ; (b) si le parrain n'est pas établi en Roumanie, le certificat de résidence fiscale délivré par l'administration fiscale de son pays et valable pour l'année du paiement. Les documents sont envoyés à office@core829.net ; le virement ne part qu'après leur vérification.",
          "TVA : si le parrain est établi dans un autre État membre de l'UE, la prestation est réputée rendue en Roumanie et la facture est émise sans TVA, avec la mention de l'autoliquidation (« reverse charge », articles 44 et 196 de la directive 2006/112/CE) ; la taxe est acquittée par CORE829 SRL. Si le parrain est établi en Roumanie et immatriculé à la TVA, la facture mentionne la TVA roumaine ; s'il n'est pas immatriculé, elle est émise sans TVA. Si le parrain est établi hors de l'UE, la facture suit les règles de son pays. Dans tous les cas, le montant de la récompense, calculé comme indiqué ci-dessus, est le total payé par CORE829 SRL, y compris l'éventuelle TVA que le parrain doit facturer.",
          "Retenue à la source : pour les commissions d'apport d'affaires versées à des sociétés non résidentes, la loi roumaine prévoit une retenue à la source (article 223 du Code fiscal roumain, actuellement 16 %), qui ne s'applique pas ou est réduite en vertu de la convention fiscale entre la Roumanie et le pays du parrain, si celui-ci présente le certificat de résidence fiscale. Sans certificat valide, OneSpec n'effectue pas le virement ; le parrain peut toujours choisir le crédit.",
          "Impôt sur le revenu : la récompense est un produit de l'activité du parrain et doit être déclarée selon les règles de son pays. OneSpec ne fournit pas de conseil fiscal : pour sa propre situation, le parrain s'adresse à son conseiller.",
          "Délais : le virement est effectué dans les 30 jours suivant la vérification des documents. Si les documents complets n'arrivent pas dans les 90 jours suivant la fin de la période d'attente, la récompense en argent expire ; jusqu'à cette date, le parrain peut passer au crédit, accordé sans document.",
        ],
      },
      {
        h: "Révocation de la récompense",
        p: [
          "Si, dans les 60 jours suivant le paiement qualifiant, le filleul obtient un remboursement ou ouvre une contestation, la récompense déjà accordée est révoquée : le crédit est contre-passé sur le solde Stripe ou le virement est annulé par l'annulation du transfert. Si la récompense en argent avait déjà été facturée, le parrain émet l'avoir correspondant.",
        ],
      },
      {
        h: "Contrôles et usage abusif",
        p: [
          "Ne sont pas admis : l'auto-parrainage, les invitations entre sociétés d'un même groupe ou ayant le même domaine d'entreprise, les adresses e-mail temporaires, les comptes créés dans le seul but d'obtenir la récompense et l'utilisation de la même carte ou du même client de paiement par le parrain et le filleul.",
          "Les invitations qui ne respectent pas ces règles sont refusées, et OneSpec peut suspendre le code d'un parrain et annuler les récompenses obtenues de manière abusive. Pour appliquer ces contrôles, OneSpec traite l'adresse e-mail des propriétaires et l'identifiant de paiement Stripe aux seules fins de prévention des abus.",
        ],
      },
      {
        h: "Confidentialité du filleul",
        p: [
          "Le parrain voit le nom de l'entreprise invitée sous forme masquée (par exemple « Se*** Srl ») et le statut de l'invitation, sans autre donnée sur le filleul.",
        ],
      },
      CONTACT,
    ],
  },
  qualita: {
    title: "Qualité et certifications",
    summary: "Registre des certifications et attestations effectivement détenues.",
    sections: [
      {
        h: "État",
        p: [
          "À la date de révision, OneSpec ne revendique aucune certification tierce (par exemple ISO/IEC 27001) qui ne serait pas explicitement listée ci-dessous. Aucune certification n'est revendiquée sans attestation vérifiable.",
        ],
      },
      {
        h: "Certifications et attestations détenues",
        p: [
          "Aucune certification tierce n'est détenue à la date de révision. Cette section sera mise à jour dès que, et seulement si, une certification est effectivement obtenue.",
        ],
      },
      {
        h: "Conformité réglementaire des prix par région",
        p: [
          "Les règles régionales sur la communication des prix au consommateur (mode « génération de contacts / fourchette indicative » pour IT/FR/BE/DE/LU, mode avec des prix plus transparents pour NL sur les forfaits admis) sont gérées comme des règles configurables avec date de validité et source.",
          "Références réglementaires précises et dates de mise à jour : règlement (UE) 2016/679 (RGPD) ; directive 2002/58/CE (vie privée et communications électroniques) ; directive 98/6/CE relative à l'indication des prix ; directive 2005/29/CE sur les pratiques commerciales déloyales ; pour le marché italien, décret législatif 196/2003, décret législatif 206/2005 (Code de la consommation) et la réglementation sur les déductions fiscales pour la rénovation énergétique ; les règles de chaque pays sont revues à chaque mise à jour du service et indiquées avec date et source dans les paramètres du configurateur.",
        ],
      },
      CONTACT,
    ],
  },
};
