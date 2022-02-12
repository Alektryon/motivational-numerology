/*
  Motivational-Numerology
  (c) 2022 Sally Faubion & Olivier Giulieri
  http://www.sallysnumbers.com
*/

var meaning = {
  master: "Master Number",

  destiny: {
    title: "Destiny",
    description:
      "This is the most influential number in relation to your personal motivations, what and who you like in your surroundings, and the career(s) you would be most likely to aspire toward.",
    func: "Month + Day + Year",
    1: "This is the path of the risk-taker, the entrepreneur, the wholly independent trail-blazer.",
    2: "This is the path of the homemaker, the team player, the caretaker, and the collector.",
    3: 'This is the path of the adventurous, creative, proverbial "Peter Pan", and/or the disciplined scientific "Dapper Dan/Danielle".',
    4: "This is the path of the hard-working, dedicated, forthright employee/entrepreneur and kind-hearted, loyal friend.",
    5: "This is the path of the energized freedom fighter, promoter, and the stylish, socially adept/world traveler.",
    6: "This is the path of the good citizen, patient teacher, champion of fairness and justice, and cosmic parent to all.",
    7: "This is the path of the scholar, the perfectionist, the genius, and the keeper of secrets.",
    8: "This is the path of the matriarch/patriarch, the judge, the producer/director, the orchestrator, and the class act.",
    9: 'This is the path of the aristocratic and genteel "old soul", and the universal humanitarian.',
    11: "This is the path of the intuitive advisor/counselor, the peace-maker, and the enlightened public figure.",
    22: "This is the path of the enlightened, prudent, organized, determined, and inspiring visionary.",
  },

  personality: {
    title: "Personality",
    description: "This number describes the behind-the-scenes or private you.",
    func: "Day",
    1: "You are dynamic, strong-willed and a natural leader, and your single-minded focus sets the stage for your success.",
    2: "You are a peacemaker, nurturing, caring and kind, and an indispensable friend, mate, employee or boss.",
    3: "You are awesomely creative, imaginary and entertaining, and a superlative host or hostess.",
    4: "You are a dedicated, detail-oriented and a tireless worker, and your word is as good as gold.",
    5: "Your intelligent, enthusiastic, and genial nature inspires and motivates all who know you.",
    6: "You are responsible, people oriented, and a lover of beauty, nature and the home.",
    7: "You are analytical, research-oriented, and your quest for knowledge is vast and unquenchable.",
    8: "You are an ambitious, organized, quality operator, and born to be a leader with a penchant for protocol and justice.",
    9: "You are multi-talented, creative and competent and you are in your true character when being of service to others.",
    10: "You are independent, considerate, and responsible with a take-charge nature; and an optimist attitude that finds the positive in any situation.",
    11: 'You are sensitive, intelligent, original, inspiring, a good listener and naturally assume the "big shoulders" role for many.',
    12: "You are charming, personable and creative and your strong determination and foresight help you to manifest your goals.",
    13: "You are astute, independent, down-to-earth and forthright, and your dedication, tenacity and endurance with any concept, circumstance or endeavor is extraordinary.",
    14: "You are a storehouse of energy with a steel-trap mind that constantly churns out new ideas and creative, practical concepts and solutions.",
    15: "Your independent, creative, artistic/scientific mind craves researching and analyzing vast arrays of subject matter and defending fairness and justice.",
    16: "Your uniquely intellectual, analytical mind requires periods of alone time to sort through your endless thirst for knowledge and reaching beyond accepted boundaries in that quest.",
    17: "You are intelligent, ambitious, courageous, possess enough energy and vitality to run a country, and you are the quintessential class act!",
    18: "You are a multi-talented powerhouse of wisdom, strength, courage, and far-reaching compassion who is exhibiting your best when helping those in need.",
    19: "Your adventuresome nature makes you yearn for variety and change, but when inspired, you can also be a tenacious, dedicated, and honorable employee, boss, mate and friend.",
    20: "Your warm-hearted, helpful, and prudent nature is appreciated in any work environment and you will collect and retain many friends throughout your lifetime.",
    21: "You are good natured, optimistic, inspirational, and generous. You are drawn to all things of beauty, quality, and entertainment, and your own creativity can put you in the limelight.",
    22: "You exhibit extraordinary discipline, energy, logic, and sensitivity and you have the mind of a masterful, enlightened, and enterprising visionary.",
    23: "You possess a nurturing, fun-loving, freedom-oriented spirit and your quick mind, originality and intellect steadily churns out clever and unique ideas and plans.",
    24: 'You are charming, social, witty, and more of a lover than a fighter. Your conscientious and giving nature tends to always go "the extra mile", and you are an honorable friend and mate.',
    25: "You are witty and wise, and you wonder about everything. Your reservoir of innate wisdom and highly compassionate, generous nature give rise to your innate sense of responsibility to humanity, in general.",
    26: "Your personality is like that of a five-star general – steadfast and in command with a fondness for protocol. Your “sixth sense” enables you to readily intuit right from wrong and set an exemplary example for others.",
    27: 'Like Old King Cole, you are an "old soul", and you possess vast innate knowledge and extraordinary perceptivity. Travel and change are essential to your well-being.',
    28: "You are charming, independent, a born diplomat, and your character is that of an achiever and leader. Your high ideals and principles enable you to accomplish your goals.",
    29: 'Your gentle, sensitive nature is complimented by a combination of energy and charisma that draws people to you like a magnet. You possess as "sixth sense" that enables you help the many who seek out your "big shoulders".',
    30: "You are intelligent, creative, fun-loving, and blessed with a great sense of humor, and exceptionally talented when involved in any creative endeavor. Your socially adept nature enables you to stand out among the many.",
    31: "You are creative, innovative, and possess a vast amount of knowledge. Conscientious, dependable and timely, you are also a creature of habit and can be devoted mate and friend.",
  },

  attitude: {
    title: "Attitude",
    description:
      "This number is most powerful in the first 30-35 years of your life and represents the how and why you react to circumstances in your youth.",
    func: "Month + Day",
    1: "You are born with a strong will and independent nature. You prefer to make your own choices and are stubborn when pushed in a different direction.",
    2: "You are born to be a sweet, gentle, kind and caring child and young adult. You love to nurture and be nurtured and are perceptive and sensitive.",
    3: "You are born somewhat shy but once you learn to speak, you can become a natural entertainer, adventuresome, and captivating.",
    4: "You are born with a sensitive, stubborn temperament, but can be very sweet and dutiful when given praise and encouragement.",
    5: "You are born with energy abounding! You need constant mental and physical stimulation and your temper flares when impatient.",
    6: "You are born to be responsible, conscientious, considerate, kind and caring to everyone, especially your parents, siblings, friends, and all things of nature.",
    7: "You are born with a brilliant mind that needs alone time to indulge your quest for knowledge and vast interests and intrigues.",
    8: 'You are born to be exemplary in everything you do; which originates from your need to feel in control. You are the "straight A student" when encouraged.',
    9: "You are born with a more adult-like sensibility at a very early age. Praise and encouragement from those closest to you fuel your achievements.",
    11: "You are born super sensitive; highly intuitive, high-minded and a lover of music; sweet, gentle and cerebral when inspired, you are star material.",
    22: "You are born with a stubborn streak but with encouragement you can be a very purposeful, enterprising, inspired and ingenious.",
  },

  character: {
    title: "Character",
    description:
      "This number represents primarily your public and social qualities, but you would also exhibit much of the same in your personal relations, too.",
    func: "Letters",
    1: "Possessing an original and innovative mind, with a steadfast focus on your goals qualifies you as a leader.",
    2: "Being naturally diplomatic, good-natured and a peacemaker, your public persona is like that of an ambassador for the people.",
    3: "Your optimistic, enthusiastic, and creative abilities give you the capacity to engage, inspire, and entertain others in any line of work you choose.",
    4: "Your conscientious, organized, systematic and reliable public persona makes you a sought-after worker-bee or Chairman of the Board.",
    5: "Your charming, articulate, flexible and style-conscious nature make you a trendsetter who can engage and inspire many when focused on a mission",
    6: 'As a born humanitarian, community-oriented, outstanding parent/teacher/human being who always "goes the extra mile" you are an exemplary committee or cause leader.',
    7: "As a philosophically avant-garde, knowledge-seeking genius, you don't seek the limelight but are superlative teachers, professors, and career specialists.",
    8: "Your commanding, exemplary teacher-of-teachers, judge/jury, producer/director persona possesses a sixth sense that enables you to readily distinguish right from wrong in anything.",
    9: 'As a born sage, aristocratic, socially pleasing humanitarian, you gravitate toward the community that can benefit most from  your "selfless server" mission.',
    11: "As an empathetic, enlightened and understanding counselor or community leader, you belong in the limelight; the 11 is associated with fame and illumination.",
    22: "As a high-minded builder of empires and spiritually-oriented organizer, you are best suited to help public causes and companies that appreciate your dedicated, straightforward style.",
  },

  soul: {
    title: "Soul Urge",
    description:
      "This influence presents a view of your intuitive, soulful self.",
    func: "Vowels",
    1: "Your Soul's Urge is to be innovative, creative, and lead the masses to a higher realm of consciousness and understanding that engenders compassion for all.",
    2: "Your Soul's Urge is to effect peace, harmony, and finesse to bring about greater nurturing and loving qualities in those you know and comfort.",
    3: "Your Soul's Urge is to bring JOY, enthusiasm, passion, and arouse the imagination of others with creativity and heart-warming concepts and interests.",
    4: "Your Soul's Urge is to deliver honesty, dependability, practicality, and determination to help others and yourself achieve inspiring and enlightening outcomes.",
    5: "Your Soul's Urge is to use your abounding energy, broad-mindedness and progressive mental attributes to help bring forth high-minded contributions to mankind.",
    6: "Your Soul's Urge is to be responsible, conscientious, caring and kind to one and all, and to teach, counsel, and comfort to maintain those qualities yourself.",
    7: "Your Soul's Urge is to use your analytical, research-oriented and questioning nature to discover or uncover something meaningful that will help the many, as opposed to a few.",
    8: "Your Soul's Urge is to bring quality, consistency and inspiration to others and to effect your natural finesse, and quality in you all touch.",
    9: "Your Souls Urge is to use your aristocratic, gentile and humane qualities with consistency which will help to set the stage for others to emulate.",
    11: "Your Soul's Urge is to bring peace, harmony, beauty and honorability as examples of your highest spiritual qualities for all to appreciate and hopefully imitate.",
    22: 'Your Soul\'s Urge is that of a "Master Builder," one whose soulful desire is to help and serve mankind and the earth with high-mindedness and humanitarianism.',
  },

  agenda: {
    title: "Hidden Agenda",
    description: "This vibration offers your innate (hidden) desires.",
    func: "Consonants",
    1: "This agenda incites an innate desire to be independent, to lead, to innovate, and to create original and unique concepts and things.",
    2: "This agenda brings forth the innate desire to live life in peace and harmony, effecting a non-aggressive, cooperative and congenial nature for all.",
    3: "This agenda inspires an innate desire to be more creative, entertaining, and to travel the world, delivering greater pleasure and joy to all who engage with your uplifting persona.",
    4: "This agenda entails logic, organization, and perseverance to manifest the innate needs, desires and peace of mind you harbor and hold.",
    5: "This agenda inspires an innate desire for freedom more than anything else, along with acquiring the ability to travel and live unrestrained as much as possible.",
    6: "This agenda has a strong innate humanitarianism focus – helping and caring for all things of the earth – humans, animals and the beautiful earth itself.",
    7: "This agenda provokes an innate thirst for gaining knowledge associated with the sciences (esoteric or otherwise), philosophies, arts, and spirituality.",
    8: "This agenda expresses an innate desire for power, acclaim and amassing huge amounts of money, or being an enlightened teacher of the masses.",
    9: "This agenda affects an innate desire to attain the finest of everything from clothing and cars to entertainment, or an inordinate need to live a wholly humanitarian life without a thought for self.",
    11: "This agenda incites an innate need to minister, counsel, or participate in the healing arts in a way that helps the many, or to become known for your humanitarian services.",
    22: "This agenda inspires an innate desire to do something grand for mankind. This Master Number gives you the ability to scale the highest mountains or invent an exemplary product or philosophy.",
  },

  purpose: {
    title: "Divine Purpose",
    description:
      "This is your farewell-performance number vibration. It is what your Soulful Self has chosen to achieve in your latter years of life.",
    func: "Destiny + Character",
    1: "Your Divine Purpose is to leave behind a legacy of something you pioneered - a concept, a product, a foundation.",
    2: "Your Divine Purpose is to bring peace, comfort and harmony to your fellow humans.",
    3: "Your Divine Purpose is to use your creative and imaginative talents to produce a product, an idea, a book, a film, or some other form of artful expression.",
    4: "Your Divine Purpose is to build a stable foundation that helps people and has a humanitarian focus.",
    5: "Your Divine Purpose is to help to effect progressive changes that make life better for future generations.",
    6: "Your Divine Purpose is to teach, to instigate, and to help humanitarian causes, to care for home and family, and be socially responsible.",
    7: "Your Divine Purpose is to impart the vast knowledge you have gathered in a science, an art, a philosophy, or a religion through a creative endeavor.",
    8: "Your Divine Purpose is to lead, direct, initiate, and instigate as a leader or executive, and to help the less fortunate through philanthropy.",
    9: "Your Divine Purpose is to be a universal humanitarian - a good parent, a good mate, and a good citizen; a philanthropist, a minister, a politician - working for the betterment of mankind.",
    11: "Your Divine Purpose is to help people on the spiritual, psychological, and mental planes. To uplift others with words of wisdom; to listen, advise, and help others to move forward on their life's journey.",
    22: "Your Divine Purpose is to organize and build; to maintain a business enterprise that offers work to others and helps people through service to the community and perhaps throughout the world.",
  },
};
