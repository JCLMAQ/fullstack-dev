import { PrismaPg } from '@prisma/adapter-pg';
import { DictioEntryType, PrismaClient } from '../generated/prisma/client';
import { createTranslation, createWord } from './factories';

const adapter = new PrismaPg({
  connectionString:
    process.env['DATABASE_URL'] ||
    'postgresql://postgres:password@localhost:5432/postgres',
});

const prisma = new PrismaClient({ adapter });

// Dataset simple avec ~50 mots réalistes traduits en 4 langues (EN, FR, DE, NL)
// Structure: slug, type (WORD/PHRASE/SENTENCE/IDIOM), translations (EN/FR/DE/NL)
const dictionaryDataset: Array<{
  slug: string;
  type: DictioEntryType;
  translations: {
    en: string;
    fr: string;
    de: string;
    nl: string;
  };
}> = [
  // WORDS (50% - ~25 entries)
  {
    slug: 'apple',
    type: DictioEntryType.WORD,
    translations: { en: 'apple', fr: 'pomme', de: 'Apfel', nl: 'appel' },
  },
  {
    slug: 'house',
    type: DictioEntryType.WORD,
    translations: { en: 'house', fr: 'maison', de: 'Haus', nl: 'huis' },
  },
  {
    slug: 'water',
    type: DictioEntryType.WORD,
    translations: { en: 'water', fr: 'eau', de: 'Wasser', nl: 'water' },
  },
  {
    slug: 'tree',
    type: DictioEntryType.WORD,
    translations: { en: 'tree', fr: 'arbre', de: 'Baum', nl: 'boom' },
  },
  {
    slug: 'book',
    type: DictioEntryType.WORD,
    translations: { en: 'book', fr: 'livre', de: 'Buch', nl: 'boek' },
  },
  {
    slug: 'sun',
    type: DictioEntryType.WORD,
    translations: { en: 'sun', fr: 'soleil', de: 'Sonne', nl: 'zon' },
  },
  {
    slug: 'moon',
    type: DictioEntryType.WORD,
    translations: { en: 'moon', fr: 'lune', de: 'Mond', nl: 'maan' },
  },
  {
    slug: 'cat',
    type: DictioEntryType.WORD,
    translations: { en: 'cat', fr: 'chat', de: 'Katze', nl: 'kat' },
  },
  {
    slug: 'dog',
    type: DictioEntryType.WORD,
    translations: { en: 'dog', fr: 'chien', de: 'Hund', nl: 'hond' },
  },
  {
    slug: 'mountain',
    type: DictioEntryType.WORD,
    translations: { en: 'mountain', fr: 'montagne', de: 'Berg', nl: 'berg' },
  },
  {
    slug: 'river',
    type: DictioEntryType.WORD,
    translations: { en: 'river', fr: 'rivière', de: 'Fluss', nl: 'rivier' },
  },
  {
    slug: 'flower',
    type: DictioEntryType.WORD,
    translations: { en: 'flower', fr: 'fleur', de: 'Blume', nl: 'bloem' },
  },
  {
    slug: 'bread',
    type: DictioEntryType.WORD,
    translations: { en: 'bread', fr: 'pain', de: 'Brot', nl: 'brood' },
  },
  {
    slug: 'milk',
    type: DictioEntryType.WORD,
    translations: { en: 'milk', fr: 'lait', de: 'Milch', nl: 'melk' },
  },
  {
    slug: 'cheese',
    type: DictioEntryType.WORD,
    translations: { en: 'cheese', fr: 'fromage', de: 'Käse', nl: 'kaas' },
  },
  {
    slug: 'coffee',
    type: DictioEntryType.WORD,
    translations: { en: 'coffee', fr: 'café', de: 'Kaffee', nl: 'koffie' },
  },
  {
    slug: 'table',
    type: DictioEntryType.WORD,
    translations: { en: 'table', fr: 'table', de: 'Tisch', nl: 'tafel' },
  },
  {
    slug: 'chair',
    type: DictioEntryType.WORD,
    translations: { en: 'chair', fr: 'chaise', de: 'Stuhl', nl: 'stoel' },
  },
  {
    slug: 'door',
    type: DictioEntryType.WORD,
    translations: { en: 'door', fr: 'porte', de: 'Tür', nl: 'deur' },
  },
  {
    slug: 'window',
    type: DictioEntryType.WORD,
    translations: { en: 'window', fr: 'fenêtre', de: 'Fenster', nl: 'raam' },
  },
  {
    slug: 'road',
    type: DictioEntryType.WORD,
    translations: { en: 'road', fr: 'route', de: 'Straße', nl: 'weg' },
  },
  {
    slug: 'car',
    type: DictioEntryType.WORD,
    translations: { en: 'car', fr: 'voiture', de: 'Auto', nl: 'auto' },
  },
  {
    slug: 'train',
    type: DictioEntryType.WORD,
    translations: { en: 'train', fr: 'train', de: 'Zug', nl: 'trein' },
  },
  {
    slug: 'airplane',
    type: DictioEntryType.WORD,
    translations: {
      en: 'airplane',
      fr: 'avion',
      de: 'Flugzeug',
      nl: 'vliegtuig',
    },
  },
  {
    slug: 'computer',
    type: DictioEntryType.WORD,
    translations: {
      en: 'computer',
      fr: 'ordinateur',
      de: 'Computer',
      nl: 'computer',
    },
  },

  // PHRASES (30% - ~15 entries)
  {
    slug: 'good-morning',
    type: DictioEntryType.PHRASE,
    translations: {
      en: 'Good morning',
      fr: 'Bonjour',
      de: 'Guten Morgen',
      nl: 'Goedemorgen',
    },
  },
  {
    slug: 'good-evening',
    type: DictioEntryType.PHRASE,
    translations: {
      en: 'Good evening',
      fr: 'Bonsoir',
      de: 'Guten Abend',
      nl: 'Goedenavond',
    },
  },
  {
    slug: 'thank-you',
    type: DictioEntryType.PHRASE,
    translations: {
      en: 'Thank you',
      fr: 'Merci',
      de: 'Danke',
      nl: 'Dank je',
    },
  },
  {
    slug: 'youre-welcome',
    type: DictioEntryType.PHRASE,
    translations: {
      en: "You're welcome",
      fr: 'De rien',
      de: 'Gern geschehen',
      nl: 'Graag gedaan',
    },
  },
  {
    slug: 'how-are-you',
    type: DictioEntryType.PHRASE,
    translations: {
      en: 'How are you?',
      fr: 'Comment allez-vous?',
      de: 'Wie geht es dir?',
      nl: 'Hoe gaat het met je?',
    },
  },
  {
    slug: 'my-name-is',
    type: DictioEntryType.PHRASE,
    translations: {
      en: 'My name is',
      fr: 'Je m\'appelle',
      de: 'Mein Name ist',
      nl: 'Mijn naam is',
    },
  },
  {
    slug: 'do-you-speak-english',
    type: DictioEntryType.PHRASE,
    translations: {
      en: 'Do you speak English?',
      fr: 'Parlez-vous anglais?',
      de: 'Sprichst du Englisch?',
      nl: 'Spreek je Engels?',
    },
  },
  {
    slug: 'i-dont-understand',
    type: DictioEntryType.PHRASE,
    translations: {
      en: "I don't understand",
      fr: 'Je ne comprends pas',
      de: 'Ich verstehe nicht',
      nl: 'Ik begrijp het niet',
    },
  },
  {
    slug: 'can-you-help-me',
    type: DictioEntryType.PHRASE,
    translations: {
      en: 'Can you help me?',
      fr: 'Pouvez-vous m\'aider?',
      de: 'Kannst du mir helfen?',
      nl: 'Kun je me helpen?',
    },
  },
  {
    slug: 'where-is-the-bathroom',
    type: DictioEntryType.PHRASE,
    translations: {
      en: 'Where is the bathroom?',
      fr: 'Où sont les toilettes?',
      de: 'Wo ist die Toilette?',
      nl: 'Waar is het toilet?',
    },
  },
  {
    slug: 'how-much-does-it-cost',
    type: DictioEntryType.PHRASE,
    translations: {
      en: 'How much does it cost?',
      fr: 'Combien ça coûte?',
      de: 'Wie viel kostet es?',
      nl: 'Hoeveel kost het?',
    },
  },
  {
    slug: 'nice-to-meet-you',
    type: DictioEntryType.PHRASE,
    translations: {
      en: 'Nice to meet you',
      fr: 'Enchanté de vous rencontrer',
      de: 'Schön, dich kennenzulernen',
      nl: 'Aangenaam kennis te maken',
    },
  },
  {
    slug: 'see-you-later',
    type: DictioEntryType.PHRASE,
    translations: {
      en: 'See you later',
      fr: 'À bientôt',
      de: 'Bis später',
      nl: 'Tot ziens',
    },
  },
  {
    slug: 'good-night',
    type: DictioEntryType.PHRASE,
    translations: {
      en: 'Good night',
      fr: 'Bonne nuit',
      de: 'Gute Nacht',
      nl: 'Goedenacht',
    },
  },
  {
    slug: 'have-a-nice-day',
    type: DictioEntryType.PHRASE,
    translations: {
      en: 'Have a nice day',
      fr: 'Bonne journée',
      de: 'Schönen Tag noch',
      nl: 'Fijne dag',
    },
  },

  // SENTENCES (15% - ~8 entries)
  {
    slug: 'what-is-your-favorite-color',
    type: DictioEntryType.SENTENCE,
    translations: {
      en: 'What is your favorite color?',
      fr: 'Quelle est votre couleur préférée?',
      de: 'Was ist deine Lieblingsfarbe?',
      nl: 'Wat is je favoriete kleur?',
    },
  },
  {
    slug: 'i-love-to-read-books',
    type: DictioEntryType.SENTENCE,
    translations: {
      en: 'I love to read books',
      fr: 'J\'aime lire des livres',
      de: 'Ich liebe es, Bücher zu lesen',
      nl: 'Ik hou ervan boeken te lezen',
    },
  },
  {
    slug: 'the-weather-is-beautiful-today',
    type: DictioEntryType.SENTENCE,
    translations: {
      en: 'The weather is beautiful today',
      fr: 'Le temps est beau aujourd\'hui',
      de: 'Das Wetter ist heute schön',
      nl: 'Het weer is vandaag mooi',
    },
  },
  {
    slug: 'i-would-like-a-cup-of-coffee',
    type: DictioEntryType.SENTENCE,
    translations: {
      en: 'I would like a cup of coffee',
      fr: 'Je voudrais une tasse de café',
      de: 'Ich hätte gerne eine Tasse Kaffee',
      nl: 'Ik zou graag een kopje koffie willen',
    },
  },
  {
    slug: 'where-do-you-come-from',
    type: DictioEntryType.SENTENCE,
    translations: {
      en: 'Where do you come from?',
      fr: 'D\'où venez-vous?',
      de: 'Woher kommst du?',
      nl: 'Waar kom je vandaan?',
    },
  },
  {
    slug: 'i-am-learning-a-new-language',
    type: DictioEntryType.SENTENCE,
    translations: {
      en: 'I am learning a new language',
      fr: 'J\'apprends une nouvelle langue',
      de: 'Ich lerne eine neue Sprache',
      nl: 'Ik leer een nieuwe taal',
    },
  },
  {
    slug: 'do-you-have-any-siblings',
    type: DictioEntryType.SENTENCE,
    translations: {
      en: 'Do you have any siblings?',
      fr: 'Avez-vous des frères et sœurs?',
      de: 'Hast du Geschwister?',
      nl: 'Heb je broers of zussen?',
    },
  },
  {
    slug: 'what-is-your-hobby',
    type: DictioEntryType.SENTENCE,
    translations: {
      en: 'What is your hobby?',
      fr: 'Quel est votre hobby?',
      de: 'Was ist dein Hobby?',
      nl: 'Wat is je hobby?',
    },
  },

  // IDIOMS (5% - ~2 entries)
  {
    slug: 'break-the-ice',
    type: DictioEntryType.IDIOM,
    translations: {
      en: 'Break the ice',
      fr: 'Briser la glace',
      de: 'Das Eis brechen',
      nl: 'Het ijs breken',
    },
  },
  {
    slug: 'piece-of-cake',
    type: DictioEntryType.IDIOM,
    translations: {
      en: 'Piece of cake',
      fr: 'Un jeu d\'enfant',
      de: 'Ein Kinderspiel',
      nl: 'Een stuk taart',
    },
  },
];

async function main() {
  console.log('🌱 Starting dictionary seed...\n');

  try {
    // Récupérer les 4 langues existantes (créées par seed-param)
    const enLanguage = await prisma.language.findUnique({
      where: { code: 'en' },
    });
    const frLanguage = await prisma.language.findUnique({
      where: { code: 'fr' },
    });
    const deLanguage = await prisma.language.findUnique({
      where: { code: 'de' },
    });
    const nlLanguage = await prisma.language.findUnique({
      where: { code: 'nl' },
    });

    if (!enLanguage || !frLanguage || !deLanguage || !nlLanguage) {
      throw new Error(
        'One or more languages not found. Please run seed-param first!'
      );
    }

    const languages = {
      en: enLanguage.id,
      fr: frLanguage.id,
      de: deLanguage.id,
      nl: nlLanguage.id,
    };

    console.log('✓ Languages found:', {
      en: languages.en,
      fr: languages.fr,
      de: languages.de,
      nl: languages.nl,
    });
    console.log('\n📚 Creating dictionary entries...\n');

    // Créer les Words et Translations
    for (let i = 0; i < dictionaryDataset.length; i++) {
      const entry = dictionaryDataset[i];
      console.log(`[${i + 1}/${dictionaryDataset.length}] Creating: ${entry.slug} (${entry.type})`);

      // Créer le Word
      const word = await createWord(entry.slug, entry.type, prisma);

      // Créer les Translations pour les 4 langues
      await createTranslation(
        word.id,
        languages.en,
        entry.translations.en,
        undefined,
        prisma
      );
      await createTranslation(
        word.id,
        languages.fr,
        entry.translations.fr,
        undefined,
        prisma
      );
      await createTranslation(
        word.id,
        languages.de,
        entry.translations.de,
        undefined,
        prisma
      );
      await createTranslation(
        word.id,
        languages.nl,
        entry.translations.nl,
        undefined,
        prisma
      );
    }

    console.log('\n✅ Dictionary seed completed successfully!');
    console.log(
      `📊 Created ${dictionaryDataset.length} words with ${dictionaryDataset.length * 4} translations`
    );

    // Statistiques par type
    const typeStats = dictionaryDataset.reduce(
      (acc, entry) => {
        acc[entry.type] = (acc[entry.type] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    console.log('\n📈 Distribution by type:');
    Object.entries(typeStats).forEach(([type, count]) => {
      const percentage = ((count / dictionaryDataset.length) * 100).toFixed(1);
      console.log(`  - ${type}: ${count} (${percentage}%)`);
    });
  } catch (error) {
    console.error('❌ Error during dictionary seed:', error);
    process.exit(1);
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
