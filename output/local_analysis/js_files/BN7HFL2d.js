const e = {
    Filter: {
      Country: "Pays"
    }
  },
  t = {
    Footer: "Chaque avis est basé sur un achat vérifié. Les avis soumis après réception d'un produit d'essai gratuit sont signalés comme tels.",
    Headline: "Une évaluation dans toutes les boutiques en ligne Lidl | {0} évaluations dans toutes les boutiques en ligne Lidl"
  },
  a = {
    ButtonCaption: {
      AlreadyRated: "Déjà évalué avec",
      Order: "Évaluer le produit",
      Product: "Évaluer le produit"
    }
  },
  i = {
    AdditionalRatings: {
      EvaluatedProductProperties: "Propriétés notées",
      PRICE: "Prix",
      QUALITY: "Qualité"
    },
    AiSummary: {
      AiSummaryHelpful: "",
      ReadMore: "",
      SelectHeadline: "",
      SummaryTitle: ""
    },
    AllReviews: "Toutes les évaluations",
    ApiError: {
      Description: "la page demandée ne peut pas s’afficher. Veuillez recharger la page ou réessayer plus tard.",
      RefreshPage: "Recharger la page",
      Sorry: "Nous sommes désolés,"
    },
    AutomaticTranslation: "Cette évaluation a été traduite automatiquement.",
    AverageRating: "Moyenne",
    BestRating: "Meilleure évaluation",
    CommentedByAuthor: "Par {0}",
    CommentedByLidl: "Par Lidl le {0}",
    CommentedOnDate: "le {0}",
    DescriptionHeadline: "Comment évaluer un produit ?",
    DescriptionHeadlineFallback: "Comment puis-je rédiger une évaluation ?",
    DescriptionLongText: `Dans votre compte Lidl, cliquez sur « Mes commandes » puis sur « Évaluer le produit ». Il est aussi possible de recevoir un formulaire d'évaluation par e-mail. Vous devez alors l’indiquer dans la dernière étape de votre commande. Cliquez <a href="https://www.lidl.be/u/review-form/fr_BE/terms" target="_blank">ici</a> pour plus d'infos sur les évaluations de produit.`,
    DescriptionLongTextFallback: `Les clients qui ont commandé un produit dans la boutique en ligne Lidl peuvent également l'évaluer par la suite. Vous pouvez accéder à l'aperçu de votre commande sous "Mon compte" et évaluer un produit en cliquant sur "Évaluer le produit". Vous pouvez également vous inscrire pour recevoir un e-mail contenant un lien vers le formulaire d'évaluation lors de votre commande.`,
    DescriptionLongTextOld: "Après avoir commandé et reçu un article, vous recevez un e-mail d’eKomi contenant un lien vers la page d’évaluation des achats. Suite à votre achat et dans le cadre de cette évaluation, il nous est nécessaire de transmettre, avec votre accord, des données isolées concernant votre commande au prestataire indépendant eKomi, qui est en charge de la gestion des évaluations. Seuls les clients ayant fait l’acquisition de produits et s’en étant servi peuvent attribuer une note concernant leurs achats. Cela nous permet de garantir la pertinence des évaluations saisies. Vous pouvez à tout moment vous opposer à l’envoi d’e-mails à votre adresse et à la transmission des données de commande. Pour de plus amples informations, veuillez consulter notre politique de confidentialité.",
    DescriptionShortText: "À partir de deux semaines après l’expédition de votre colis, vous pouvez évaluer votre nouveau produit. ",
    FeedbackAlreadyReceived: "Nous avons bien reçu votre message.",
    Filtering: {
      Filter: "Filtre",
      Found: "1 avis filtré | {count} avis filtrés",
      Not_Found: "Aucun résultat",
      RemoveFilter: "Supprimer le filtre"
    },
    Global: {
      Close: "Fermer"
    },
    GlobalRatingPlaceHolder: "Évaluation de toutes les boutiques en ligne de Lidl| Évaluations de toutes les boutiques en ligne de Lidl",
    Helpfulness: {
      AlreadyVoted: "Nous avons déjà reçu votre feedback.",
      FeedbackAlreadyReceived: "Nous avons bien reçu votre message.",
      IsThisRatingHelpful: "Utile?",
      No: "Ce commentaire n'est pas utile (également dit par un autre client) | Ce commentaire n'est pas utile (également dit par {0} d'autres clients)",
      ThanksForVote: "Merci pour votre retour",
      Yes: "Cet avis est utile (également dit par un autre client) | Cet avis est utile (également dit par {0} d'autres clients)"
    },
    HideOriginal: "Masquer l'original",
    IncentivizedRating: "Cette évaluation a été soumise après réception d'un produit d'essai gratuit.",
    LidlCustomer: "un client de la boutique en ligne Lidl",
    Locales: {
      all: "Toutes les langues",
      cs_CZ: "Tchèque",
      de_DE: "Allemand",
      es_ES: "Espagnol",
      fr_BE: "Français",
      fr_FR: "Français",
      nl_BE: "Français",
      nl_NL: "Néerlandais",
      pl_PL: "Polonais",
      sk_SK: "Slovaque"
    },
    MoreInfos: "En savoir plus",
    NoRatingAvailable: "Il n’y a pas encore d’évaluation disponible pour ce produit.",
    Original: "Note originale",
    OverallRatings: "Aperçu",
    Paging: {
      NextPage: "Page suivante",
      PreviousPage: "Page précédente"
    },
    RatedArticle: "Produit évalué",
    Rating: "Évaluation | Évaluations",
    RatingHeading: "Évaluation | Évaluations",
    RatingPlaceHolder: "Évaluation | Évaluations",
    RatingSearchNotFound: "Hmm, aucun résultat. Désolé, vous devriez peut-être essayer une autre option ou réinitialiser/modifier le filtre.",
    RatingSearchReset: "Réinitialiser la recherche",
    RatingSearchText: "Parcourez les évaluations",
    RatingsFoundForFilter: "{totalItems} évaluations mentionnent",
    ReadLessLink: "Lire moins",
    ReadMoreLink: "En savoir plus",
    Recommended: {
      Explanation: "Le taux de recommandation est basé sur un champ optionnel dans le formulaire d’évaluation. Il est déterminé comme suit : nombre de votes positifs : (nombre de votes positifs + nombre de votes négatifs).",
      NumberText: '<span class="recommended__amount">{0}</span> clients recommandent',
      PercentageText: '<span class="recommended__amount">{0}</span> des clients recommandent',
      PercentageTextScreenreader: "{0} des clients recommandent"
    },
    ResetFilter: "Annuler la sélection",
    ReviewedByAliasOnDate: "par {0} le {1}",
    ShowDetails: "Afficher les détails",
    ShowOriginal: "Critique originale",
    Sorting: {
      DateAsc: "Ordre chronologique (ancien-récent)",
      DateDesc: "Ordre chronologique (récent-ancien)",
      Label: "Trier",
      MostRelevantDesc: "Évaluation (pertinente-moins pertinente)",
      RatingAsc: "Évaluation (négative-positive)",
      RatingDesc: "Évaluation (positive-négative)",
      UpVotesDesc: "Évaluation (utile-moins utile)"
    },
    StarRating: "Étoile | Étoiles",
    StarRating_Count: "{0} de {1} étoiles",
    StarRating_Count_With_Total: "{0} de {1} étoiles ({2} total des évaluations)",
    TopSectionTitle: "Afficher toutes les évaluations",
    VariantFilter: {
      AllVariants: "Toutes les évaluations",
      Label: "Aperçu:"
    },
    VariantReviewsOnly: "Évaluations différentes uniquement",
    VerifiedOrder: "Commande vérifiée",
    VerifiedSealText: "Toutes les évaluations ont été<div></div> rédigées par des clients de<div></div> la boutique en ligne Lidl vérifiés",
    VoteTranslation: "Est-ce que la traduction automatique est compréhensible?",
    WorstRating: "Évaluation la moins bonne",
    YourLidlTeam: "Votre équipe Lidl"
  },
  n = {
    guidelines: "Dès réception de votre signalement, nous vérifierons si l'avis est conforme à nos directives d'évaluation des produits. Dans le cas contraire, nous le supprimerons.",
    reported: "Signalé à",
    submit: "Rapport",
    thankyou: "Merci pour votre retour",
    title: "Signaler l’évaluation"
  },
  o = {
    FITS_PERFECTLY: "La taille est parfaite",
    Headline: "Une évaluation de la taille de toutes les boutiques en ligne Lidl | {0} Évaluations de la taille de toutes les boutiques en ligne Lidl",
    HeadlineShort: "Taille",
    LITTLE_TOO_BIG: "Un peu trop grande",
    LITTLE_TOO_SMALL: "Un peu trop petite",
    PercentageOfOurCustomersSays: "{percentage}% de nos clients disent :",
    RatedByAmountOfCustomers: "{amount} de nos clients ont évalué cette taille.",
    SEE_DETAILS: "Voir les détails",
    WAY_TOO_BIG: "Beaucoup trop grande",
    WAY_TOO_SMALL: "Beaucoup trop petite"
  },
  s = {
    CustomerService: e,
    Histogram: t,
    RateButton: a,
    Rating: i,
    ReportRating: n,
    SizeRating: o
  };
export {
  e as CustomerService, t as Histogram, a as RateButton, i as Rating, n as ReportRating, o as SizeRating, s as
  default
};