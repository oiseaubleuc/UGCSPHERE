export const siteConfig = {
  brand: {
    name: 'Sphere Creators',
    logo: '/src/images/brand.png',
  },
  stripe: {
    paymentLinks: {
      softLaunch: '',
      creatorMode: '',
      warmingUp: '',
    },
  },
  offers: {
    softLaunch: {
      id: 'softLaunch',
      sort: 1,
      price: { amount: 750, currency: 'EUR', period: 'month' },
      tagline: {
        en: 'Test UGC without risking your budget',
        nl: 'Test UGC zonder je budget te riskeren',
      },
      title: { en: 'Soft Launch', nl: 'Soft Launch' },
      sections: {
        coreOfferTitle: { en: 'Core offer', nl: 'Core offer' },
        bonusesTitle: { en: 'Bonuses', nl: 'Bonussen' },
        guaranteeTitle: { en: 'Guarantee', nl: 'Garantie' },
      },
      coreOffer: {
        en: [
          '6 UGC videos (15–45 sec) with 2 hooks each = 12 ad variations',
          '3 different creators',
          'Raw footage included',
          '6-month ad rights',
          'All platform formats',
          '1 revision round per video',
        ],
        nl: [
          '6 UGC-video\'s (15–45 sec) met 2 hooks per video = 12 ad-variaties',
          '3 verschillende creators',
          'Ruwe footage inbegrepen',
          '6 maanden ad rights',
          'Alle platformformaten',
          '1 revisieronde per video',
        ],
      },
      bonuses: {
        en: ['Proven Hook Templates library (€297 value)', 'First video in 5 days'],
        nl: ['Proven Hook Templates library (€297 waarde)', 'Eerste video binnen 5 dagen'],
      },
      guarantee: {
        en: "First 3 videos don't outperform current ads? Month 2 is 50% off",
        nl: 'Presteren de eerste 3 video\'s niet beter dan je huidige ads? Dan is maand 2 50% korting',
      },
      highlights: {
        en: [
          '6 UGC videos',
          '3 creators',
          '12 ad variations',
          '6-month rights',
        ],
        nl: [
          '6 UGC video\'s',
          '3 creators',
          '12 ad variaties',
          '6 maanden rechten',
        ],
      },
    },
    creatorMode: {
      id: 'creatorMode',
      sort: 3,
      price: { amount: 2997, currency: 'EUR', period: 'month' },
      badge: { en: 'Most Popular', nl: 'Meest Populair' },
      tagline: {
        en: 'Become the brand that never runs out of creative',
        nl: 'Word het merk dat nooit zonder creativiteit komt te zitten',
      },
      title: { en: 'Creator Mode', nl: 'Creator Mode' },
      sections: {
        coreOfferTitle: { en: 'Core offer', nl: 'Core offer' },
        bonusesTitle: { en: 'Bonuses', nl: 'Bonussen' },
        guaranteeTitle: { en: 'Guarantee', nl: 'Garantie' },
      },
      coreOffer: {
        en: [
          '30 premium UGC videos (1 FRESH AD DAILY)',
          '10-12 diverse creators (cover every demographic)',
          '4 hooks per video',
          'Raw footage included',
          'Unlimited ad rights',
          'All platform formats',
          'Unlimited revisions',
        ],
        nl: [
          '30 premium UGC video\'s (1 VERSE AD PER DAG)',
          '10-12 diverse creators (dekken elke demografie)',
          '4 hooks per video',
          'Ruwe footage inbegrepen',
          'Onbeperkte ad rights',
          'Alle platformformaten',
          'Onbeperkte revisies',
        ],
      },
      bonuses: {
        en: [
          'Proven Hook Templates library (€297 value)',
          'First video in 3 days',
          'Performance analytics dashboard',
        ],
        nl: [
          'Proven Hook Templates library (€297 waarde)',
          'Eerste video binnen 3 dagen',
          'Prestatie analytics dashboard',
        ],
      },
      guarantee: {
        en: '30-day money-back guarantee',
        nl: '30-dagen geld-terug garantie',
      },
      highlights: {
        en: [
          '30 videos/month',
          '10-12 creators',
          '4 hooks/video',
          'Unlimited rights',
        ],
        nl: [
          '30 video\'s/maand',
          '10-12 creators',
          '4 hooks/video',
          'Onbeperkte rechten',
        ],
      },
    },
    warmingUp: {
      id: 'warmingUp',
      sort: 2,
      price: { amount: 1997, currency: 'EUR', period: 'month' },
      tagline: {
        en: 'Scale your UGC content production',
        nl: 'Schaal je UGC content productie',
      },
      title: { en: 'Warming Up', nl: 'Warming Up' },
      sections: {
        coreOfferTitle: { en: 'Core offer', nl: 'Core offer' },
        bonusesTitle: { en: 'Bonuses', nl: 'Bonussen' },
        guaranteeTitle: { en: 'Guarantee', nl: 'Garantie' },
      },
      coreOffer: {
        en: [
          '20 UGC videos (15–45 sec) with 3 hooks each = 60 ad variations',
          '6-8 diverse creators',
          'Raw footage included',
          '12-month ad rights',
          'All platform formats',
          '2 revision rounds per video',
        ],
        nl: [
          '20 UGC-video\'s (15–45 sec) met 3 hooks per video = 60 ad-variaties',
          '6-8 diverse creators',
          'Ruwe footage inbegrepen',
          '12 maanden ad rights',
          'Alle platformformaten',
          '2 revisierondes per video',
        ],
      },
      bonuses: {
        en: [
          'Proven Hook Templates library (€297 value)',
          'First video in 4 days',
        ],
        nl: [
          'Proven Hook Templates library (€297 waarde)',
          'Eerste video binnen 4 dagen',
        ],
      },
      guarantee: {
        en: '30-day money-back guarantee',
        nl: '30-dagen geld-terug garantie',
      },
      highlights: {
        en: [
          '20 videos/month',
          '6-8 creators',
          '60 ad variations',
          '12-month rights',
        ],
        nl: [
          '20 video\'s/maand',
          '6-8 creators',
          '60 ad variaties',
          '12 maanden rechten',
        ],
      },
    },
  },
}
