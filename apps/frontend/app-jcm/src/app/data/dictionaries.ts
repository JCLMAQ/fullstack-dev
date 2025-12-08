// export type Dictionary = Record<string, string>;
// export type Dictionaries = Record<string, Dictionary>;
// // export const QUESTION_CAPTION = "QuestionCaption";

// export const ENGLISH_DICTIONARY: Dictionary = {
//     "AliceBlue": "Alice Blue",
//     "QuestionCaption": "Question: What do you get when you add"
// }
// export const FRENCH_DICTIONARY: Dictionary = {
//     "AliceBlue": "Bleu Alice",
//     "QuestionCaption": "Question: Qu'obtenez-vous quand vous ajoutez"
// }

// export const DICTIONARIES: Record<string, Dictionary> = {
//     'en': ENGLISH_DICTIONARY,
//     'fr': FRENCH_DICTIONARY
// }


export const ENGLISH_DICTIONARY = {
    "AliceBlue": "Blue Alice",
    "QuestionCaption": "Question: What do you get when you add"
}

export const FRENCH_DICTIONARY = {
    "AliceBlue": "Bleu Alice",
    "QuestionCaption": "Question: Qu'obtenez-vous quand vous ajoutez"
}

export const DUTCH_DICTIONARY = {
    "AliceBlue": "Blauw Alice",
    "QuestionCaption": "Vraag: Wat krijg je als je optelt"
}

export const GERMAN_DICTIONARY = {
    "AliceBlue": "Blau Alice",
    "QuestionCaption": "Frage: Was bekommt man wenn man addiert"
}

export const DICTIONARIES = {
    'en': ENGLISH_DICTIONARY,
    'fr': FRENCH_DICTIONARY,
    'nl': DUTCH_DICTIONARY,
    "de": GERMAN_DICTIONARY,
};

export const SUPPORTED_LANGS = Object.keys(DICTIONARIES);
