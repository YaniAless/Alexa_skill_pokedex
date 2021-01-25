module.exports = {
  en: {
    translation: {
      WELCOME_MSG: "Welcome to the pokédex !",
      REJECTED_MSG: "Give me another pokemon.",
      HELP_MSG: 'Say "p" with a pokemon id ',
      REFLECTOR_MSG: "You just triggered {{intent}}",
      GOODBYE_MSG: "Goodbye !",
      FALLBACK_MSG: "Sorry, I don\t know about that. Please try again",
      ERROR_MSG: "Sorry, there was an error. Please try again",
    },
  },
  fr: {
    translation: {
      POSITIVE_SOUND:
        "<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_positive_response_02'/>",
      GREETING_SPEECHCON:
        "<say-as interpret-as='interjection'>Cocorico</say-as>",
      DOUBT_SPEECHCON: "<say-as interpret-as='interjection'>Hmmm</say-as>",
      WELCOME_MSG: "Bienvenue sur le pokédex d'Alessandro, Yani et Lukas !",
      WELCOME_BACK_MSG: "Content de vous revoir !",
      REJECTED_MSG: "Ok, choisissez un autre pokémon",
      GREAT_MSG: "$t(POSITIVE_SOUND) $t(GREETING_SPEECHCON) {{name}}. ",
      HELP_MSG: "Dites 'p' suivi d'un numéro de pokémon",
      REPROMPT_MSG:
        "Pour obtenir plus d'informations sur ce que je peux faire pour vous, demandez moi de l'aide. Si vous voulez quitter la skill, dites simplement 'stop'. ",
      GOODBYE_MSG: ["Salut !", "Hasta luegos !", "Au revoir."],
      REFLECTOR_MSG: "Vous avez invoqué l'intention {{intent}}",
      FALLBACK_MSG: "Désolé, je ne sais pas. Pouvez vous reformuler ?",
      ERROR_MSG: "Désolé, je n'ai pas compris. Pouvez vous reformuler ?",
      PROGRESSIVE_MSG: "Je suis en train de chercher le pokémon.",
      API_ERROR_MSG:
        "Désolé, je n'arrive pas à me connecter à l'API externe pour obtenir des résultats. Veuillez réessayer plus tard. ",
      CONJUNCTION_MSG: " et ",
      POKEMON_INFO:
        "{{name}}. Ce pokemon pèse {{weight}} kilogrammes et mesure {{height}} mètres de haut.",
    },
  },
  "fr-CA": {
    translation: {
      WELCOME_MSG: "Bienvenue sur la skill des fêtes !",
    },
  },
};
