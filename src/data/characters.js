export const characters = [
    {
        name: 'nefer',
        function: 'mainDps',
        bestWeapon: 'Reliquary of Truth',
        otherWeapons: ['Nightweavers Looking Glass','Dawning Frost','Blackmarrow Lantern'],
        bestArtifacts: 'Night of the Skys Unveiling',
        otherArtifacts: ['Gilded Dreams', 'Deepwood Memories'],
        teams: [[
            {'nefer': 'mainDps'},
            {'aino': 'subDps'},
            {'lauma': 'support'},
            {'sangonomiya-kokomi': 'support'}
        ],
        [
            {'nefer': 'mainDps'},
            {'dahlia': 'support'},
            {'lauma': 'support'},
            {'sangonomiya-kokomi': 'support'}
        ],
        [
            {'nefer': 'mainDps'},
            {'aino': 'subDps'},
            {'nahida': 'subDps'},
            {'kuki-shinobu': 'support'}
        ],
        [
            {'nefer': 'mainDps'},
            {'nahida': 'subDps'},
            {'lauma': 'support'},
            {'sangonomiya-kokomi': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'dendro',
        mainStatsArtifacts: ['elementalMastery','elementalMastery', 'critRateOrElementalMastery'],
        subStatsArtifacts: ['critRateOrDamage', 'elementalMastery'],
        newCharacter : 'new',
        weapon: 'WEAPON_CATALYST',
        rarity: '5',
        rank:'s'
    },
    {
        name: 'durin',
        function: 'subDps',
        bestWeapon: 'Black Erosion',
        otherWeapons: ['Primordial Jade Cutter','Moonweavers Dawn','The Black Sword'],
        bestArtifacts: 'Emblem of Severed Fate',
        otherArtifacts: ['Noblesse Oblige', 'Crimson Witch of Flames'],
        teams: [[
            {'mualani': 'mainDps'},
            {'durin': 'subDps'},
            {'mona': 'support'},
            {'xilonen': 'support'}
        ],
        [
            {'varesa': 'mainDps'},
            {'durin': 'subDps'},
            {'chevreuse': 'support'},
            {'iansan': 'support'}
        ],
        [
            {'arlecchino': 'mainDps'},
            {'durin': 'subDps'},
            {'fischl': 'subDps'},
            {'chevreuse': 'support'}
        ],
        [
            {'kinich': 'mainDps'},
            {'durin': 'subDps'},
            {'emilie': 'subDps'},
            {'iansan': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercent','pyroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage', 'atkPercent', 'energyRecharge'],
        soonCharacter : 'soon',
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 's',
    },
    {
        name: 'jahoda',
        function: 'support',
        bestWeapon: 'The Dawn of Distant Hymn',
        otherWeapons: ['Rainstering of the Rainbow Serpent','Favonius Warbow','Sacrificial Bow'],
        bestArtifacts: 'Viridescent Venerer',
        teams: [[
            {'flins': 'mainDps'},
            {'ineffa': 'subDps'},
            {'yelan': 'subDps'},
            {'jahoda': 'support'}
        ],
        [
            {'flins': 'mainDps'},
            {'ineffa': 'support'},
            {'aino': 'support'},
            {'jahoda': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'anemo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'atkPercentOrHealingBonus'],
        subStatsArtifacts: ['critRate', 'atkPercent', 'energyRecharge'],
        soonCharacter : 'soon',
        weapon: 'WEAPON_BOW',
        rarity: '4',
        rank: 'b',
    },
    {
        name: 'aino',
        function: 'support',
        bestWeapon: 'Flame-Forged Insight',
        otherWeapons: ['Favonius Greatsword','Sacrificial Greatsword','Makhaira Aquamarine'],
        bestArtifacts: 'Silken Moons Serenade',
        otherArtifacts: ['Noblesse Oblige', 'Flower of Paradise Lost'],
        teams: [[
            {'alhaitham': 'mainDps'},
            {'lauma': 'support'},
            {'nilou': 'support'},
            {'aino': 'support'}
        ],
        [
            {'arlecchino': 'mainDps'},
            {'bennett': 'support'},
            {'ineffa': 'support'},
            {'aino': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['elementalMastery','elementalMastery', 'critRateOrElementalMastery'],
        subStatsArtifacts: ['critRateOrDamage', 'atkPercent', 'energyRecharge', 'elementalMastery'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4',
        rank:'a'
    },
    {
        name: 'albedo',
        function: 'subDps',
        bestWeapon: 'Peak Patrol Song',
        otherWeapons: ['Uraku Misugiri','Cinnabar Spindle','Harbinger of Dawn'],
        bestArtifacts: 'Husk of Opulent Dreams',
        otherArtifacts: ['Golden Troupe'],
        twoPieces: ['Husk of Opulent Dreams', 'Archaic Petra'],
        teams: [
            [{'arataki-itto': 'mainDps'},
            {'albedo': 'subDps'},
            {'gorou': 'support'},
            {'zhongli': 'support'}],
            [{'navia': 'mainDps'},
            {'albedo': 'subDps'},
            {'xiangling': 'subDps'},
            {'bennett': 'support'}]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'geo',
        mainStatsArtifacts: ['defPercent','geoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'defPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 'b'
    },
    {
        name: 'alhaitham',
        function: 'mainDps',
        bestWeapon: 'Light of Foliar Incision',
        otherWeapons: ['Primordial Jade Cutter','Mistsplitter Reforged','Wolf-Fang'],
        bestArtifacts: 'Gilded Dreams',
        otherArtifacts: ['Deepwood Memories'],
        twoPieces: ['Deepwood Memories', 'Emblem of Severed Fate'],
        teams: [
            [{'alhaitham': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'nahida': 'support'},
            {'kuki-shinobu': 'support'}],
            [{'alhaitham': 'mainDps'},
            {'yae-miko': 'subDps'},
            {'nahida': 'subDps'},
            {'kuki-shinobu': 'support'}]
        ],
        talentPriority: ['elementalSkill','normalAttack','elementalBurst'],
        elementType: 'dendro',
        mainStatsArtifacts: ['atkPercentOrElementalMastery','dendroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage','elementalMastery', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'amber',
        function: 'subDps',
        bestWeapon: 'the First Great Magic',
        otherWeapons: ['Aqua Simulacra','Elegy for the End','Hamayumi'],
        bestArtifacts: 'Wanderers Troupe',
        otherArtifacts: ['Shimenawas Reminiscence', 'Instructor'],
        teams: [[
            {'amber': 'subDps'},
            {'rosaria': 'subDps'},
            {'bennett': 'support'},
            {'diona': 'support'}
        ],
        [
            {'hu-tao': 'mainDps'},
            {'amber': 'support'},
            {'xingqiu': 'subDps'},
            {'sucrose': 'support'}
        ]
        ],
        talentPriority: ['normalAttack','elementalBurst','elementalSkill'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','pyroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage','elementalMastery', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_BOW',
        rarity: '4',
        rank:'d'
    },
    {
        name: 'arataki-itto',
        function: 'mainDps',
        bestWeapon: 'Redhorn Stonethresher',
        otherWeapons: ['Serpent Spine','Skyward Pride','Whiteblind'],
        bestArtifacts: 'Husk of Opulent Dreams',
        otherArtifacts: ['Desert Pavilion Chronicle', 'Retracing Bolide'],
        teams: [[
            {'arataki-itto': 'mainDps'},
            {'albedo': 'subDps'},
            {'gorou': 'support'},
            {'zhongli': 'support'}
            ],
            [{'arataki-itto': 'mainDps'},
            {'chiori': 'subDps'},
            {'gorou': 'support'},
            {'furina': 'subDps'}
        ]
        ],
        talentPriority: ['elementalBurst', 'normalAttack', 'elementalSkill'],
        elementType: 'geo',
        mainStatsArtifacts: ['defPercent','geoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'defPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '5',
        rank: 'b'
    },
    {
        name: 'arlecchino',
        function: 'mainDps',
        bestWeapon: 'Crimson Moons Semblance',
        otherWeapons: ['Primordial Jade Winged-Spear','Staff of the Scarlet Sands','Deathmatch'],
        bestArtifacts: 'Fragment of Harmonic Whimsy',
        otherArtifacts: ['Gladiators Finale', 'Crimson Witch of Flames'],
        teams: [[
            {'arlecchino': 'mainDps'},
            {'yelan': 'subDps'},
            {'xingqiu': 'subDps'},
            {'kaedehara-kazuha': 'support'}],
            [
            {'arlecchino': 'mainDps'},
            {'fischl': 'subDps'},
            {'chevreuse': 'support'},
            {'bennett': 'support'}]
        ],
        talentPriority: ['normalAttack','elementalBurst','elementalSkill'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercent','pyroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','elementalMastery'],
        weapon: 'WEAPON_POLE',
        rarity: '5',
        rank: 's'
    },
    {
        name: 'baizhu',
        function: 'support',
        bestWeapon: 'Jadefalls Splendor',
        otherWeapons: ['Prototype Amber','Favonius Codex','Thrilling Tales of Dragon Slayers'],
        bestArtifacts: 'Deepwood Memories',
        otherArtifacts: ['Ocean-Hued Clam', 'Instructor'],
        teams: [[
            {'kamisato-ayato': 'mainDps'},
            {'nahida': 'subDps'},
            {'yae-miko': 'subDps'},
            {'baizhu': 'support'}
        ],
        [
            {'cyno': 'mainDps'},
            {'nahida': 'subDps'},
            {'yelan': 'subDps'},
            {'baizhu': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'dendro',
        mainStatsArtifacts: ['hpPercent','hpPercent', 'hpPercent'],
        subStatsArtifacts: ['energyRecharge', 'hpPercent','hp'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5',
        rank: 's'
    },
    {
        name: 'beidou',
        function: 'subDps',
        bestWeapon: 'Wolfs Gravestone',
        otherWeapons: ['Serpent Spine','Beacon of the Reed Sea','Redhorn Stonethresher'],
        bestArtifacts: 'Emblem of Severed Fate',
        otherArtifacts: [],
        twoPieces: ['Noblesse Oblige','Emblem of Severed Fate', 'Thundering Fury', 'Emblem of Severed Fate'],
        teams: [[
            {'sucrose': 'support'},
            {'fischl': 'subDps'},
            {'beidou': 'subDps'},
            {'xingqiu': 'subDps'}
        ],
        [
            {'yoimiya': 'mainDps'},
            {'fischl': 'subDps'},
            {'beidou': 'subDps'},
            {'xingqiu': 'subDps'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','electroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4',
        rank: 'b'
    },
    {
        name: 'barbara',
        function: 'support',
        bestWeapon: 'Thrilling Tales of Dragon Slayers',
        otherWeapons: ['Everlasting Moonglow','Prototype Amber','Favonius Codex'],
        bestArtifacts: 'Ocean-Hued Clam',
        otherArtifacts: ['Tenacity of the Millelith', 'Instructor'],
        teams: [[
            {'klee': 'mainDps'},
            {'xiangling': 'support'},
            {'sucrose': 'support'},
            {'barbara': 'support'}
        ],
        [
            {'razor': 'mainDps'},
            {'beidou': 'subDps'},
            {'sucrose': 'support'},
            {'barbara': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercent','hpPercent', 'healingBonus'],
        subStatsArtifacts: ['hpPercent','hp', 'energyRecharge'],
        weapon: 'WEAPON_CATALYST',
        rarity: '4',
        rank: 'c'
    },
    {
        name: 'bennett',
        function: 'support',
        bestWeapon: 'Mistsplitter Reforged',
        otherWeapons: ['Aquila Favonia','Skyward Blade','Sapwood Blade'],
        bestArtifacts: 'Noblesse Oblige',
        otherArtifacts: ['Emblem of Severed Fate', 'Crimson Witch of Flames'],
        teams: [[
            {'tartaglia': 'mainDps'},
            {'xiangling': 'subDps'},
            {'kaedehara-kazuha': 'support'},
            {'bennett': 'support'}
        ],
        [
            {'raiden-shogun': 'mainDps'},
            {'xiangling': 'subDps'},
            {'xingqiu': 'subDps'},
            {'bennett': 'support'}
        ]],
        talentPriority: ['elementalBurst','elementalSkill','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','pyroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '4',
        rank: 's'
    },
    {
        name: 'candace',
        function: 'support',
        bestWeapon: 'Favonius Lance',
        otherWeapons: ['Black Tassel','Staff of Homa','Skyward Spine'],
        bestArtifacts: 'Noblesse Oblige',
        otherArtifacts: ['the Exile'],
        twoPieces: ['Emblem of Severed Fate', 'Tenacity of the Millelith'],
        teams: [[
            {'yoimiya': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'bennett': 'support'},
            {'candace': 'support'}
        ],
        [
            {'noelle': 'mainDps'},
            {'furina': 'subDps'},
            {'yelan': 'subDps'},
            {'candace': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst', 'elementalSkill'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercentOrEnergyRecharge','hpPercent', 'hpPercent'],
        subStatsArtifacts: ['energyRecharge','hpPercent', 'hp'],
        weapon: 'WEAPON_POLE',
        rarity: '4',
        rank: 'c'
    },
    {
        name: 'charlotte',
        function: 'support',
        bestWeapon: 'Prototype Amber',
        otherWeapons: ['Favonius Codex','Thrilling Tales of Dragon Slayers','Oathsworn Eye'],
        bestArtifacts: 'Noblesse Oblige',
        otherArtifacts: ['Tenacity of the Millelith', 'Ocean-Hued Clam'],
        teams: [[
            {'wriothesley': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'kaedehara-kazuha': 'support'},
            {'charlotte': 'support'}
        ],
        [
            {'xiangling': 'subDps'},
            {'xingqiu': 'subDps'},
            {'bennett': 'support'},
            {'charlotte': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst', 'elementalSkill'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','atkPercent', 'healingBonus'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CATALYST',
        rarity: '4',
        rank: 'b'
    },
    {
        name: 'chasca',
        function: 'mainDps',
        bestWeapon: 'Astral Vultures Crimson Plumage',
        otherWeapons: ['the First Great Magic','Aqua Simulacra','Hamayumi'],
        bestArtifacts: 'Obsidian Codex',
        otherArtifacts: ['Desert Pavilion Chronicle', 'Wanderers Troupe'],
        teams: [[
            {'chasca': 'mainDps'},
            {'ororon': 'subDps'},
            {'furina': 'subDps'},
            {'bennett': 'support'}
        ],
        [
            {'chasca': 'mainDps'},
            {'furina': 'subDps'},
            {'xilonen': 'support'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'anemo',
        mainStatsArtifacts: ['atkPercent','atkPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage','atkPercent','energyRecharge', 'elementalMastery'],
        weapon: 'WEAPON_BOW',
        rarity: '5',
        rank: 's'
    },
    {
        name: 'chevreuse',
        function: 'support',
        bestWeapon: 'Favonius Lance',
        otherWeapons: ['Rightful Reward','Dialogues of the Desert Sages','Black Tassel'],
        bestArtifacts: 'Song of Days Past',
        otherArtifacts: ['Ocean-Hued Clam', 'Noblesse Oblige'],
        teams: [[
            {'raiden-shogun': 'mainDps'},
            {'kujou-sara': 'support'},
            {'bennett': 'support'},
            {'chevreuse': 'support'}
        ],
        [
            {'yoimiya': 'mainDps'},
            {'fischl': 'support'},
            {'bennett': 'support'},
            {'chevreuse': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'pyro',
        mainStatsArtifacts: ['hpPercentOrEnergyRecharge','hpPercent', 'hpPercent'],
        subStatsArtifacts: ['hpPercent','energyRecharge', 'hp'],
        weapon: 'WEAPON_POLE',
        rarity: '4',
        rank: 'b'
    },
    {
        name: 'chiori',
        function: 'subDps',
        bestWeapon: 'Uraku Misugiri',
        otherWeapons: ['Wolf-Fang','Cinnabar Spindle','Harbinger of Dawn'],
        bestArtifacts: 'Husk of Opulent Dreams',
        otherArtifacts: ['Golden Troupe'],
        twoPieces: ['Archaic Petra', 'Husk of Opulent Dreams'],
        teams: [[
            {'navia': 'mainDps'},
            {'chiori': 'subDps'},
            {'xiangling': 'subDps'},
            {'bennett': 'support'}
            ],
            [{'arataki-itto': 'mainDps'},
            {'chiori': 'subDps'},
            {'gorou': 'support'},
            {'zhongli': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'geo',
        mainStatsArtifacts: ['defPercent','geoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'defPercent','atkPercent'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'chongyun',
        function: 'support',
        bestWeapon: 'Wolfs Gravestone',
        otherWeapons: ['Skyward Pride','Sacrificial Greatsword','Serpent Spine'],
        bestArtifacts: 'Emblem of Severed Fate',
        otherArtifacts: ['Noblesse Oblige'],
        twoPieces: ['Blizzard Strayer', 'Noblesse Oblige'],
        teams: [[
            {'rosaria': 'subDps'},
            {'xiangling': 'subDps'},
            {'chongyun': 'support'},
            {'bennett': 'support'}
        ],
        [
            {'kaeya': 'subDps'},
            {'xingqiu': 'subDps'},
            {'chongyun': 'support'},
            {'kaedehara-kazuha': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','cryoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4',
        rank: 'c'
    },
    {
        name: 'citlali',
        function: 'support',
        bestWeapon: 'Starcallers Watch',
        otherWeapons: ['A Thousand Floating Dreams','Favonius Codex','Sacrificial Fragments'],
        bestArtifacts: 'Scroll of the Hero of Cinder City',
        otherArtifacts: ['Tenacity of the Millelith', 'Instructor'],
        teams: [[
            {'mavuika': 'mainDps'},
            {'xilonen': 'support'},
            {'citlali': 'support'},
            {'bennett': 'support'}
        ],
        [
            {'arlecchino': 'mainDps'},
            {'rosaria': 'subDps'},
            {'citlali': 'support'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'cryo',
        mainStatsArtifacts: ['energyRechargeOrElementalMastery','elementalMastery', 'elementalMastery'],
        subStatsArtifacts: ['critRate', 'elementalMastery','energyRecharge'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5',
        rank: 's'
    },
    {
        name: 'clorinde',
        function: 'mainDps',
        bestWeapon: 'Absolution',
        otherWeapons: ['Haran Geppaku Futsu','Mistsplitter Reforged','Finale of the Deep'],
        bestArtifacts: 'Fragment of Harmonic Whimsy',
        otherArtifacts: ['Thundering Fury', 'Echoes of An offering'],
        teams: [[
            {'clorinde': 'mainDps'},
            {'fischl': 'subDps'},
            {'thoma': 'support'},
            {'chevreuse': 'support'}
        ],
        [
            {'clorinde': 'mainDps'},
            {'yae-miko': 'subDps'},
            {'nahida': 'subDps'},
            {'zhongli': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercent','electroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage','atkPercent', 'elementalMastery','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'collei',
        function: 'subDps',
        bestWeapon: 'Elegy for the End',
        otherWeapons: ['Favonius Warbow','Polar Star','Sacrificial Bow'],
        bestArtifacts: 'Deepwood Memories',
        otherArtifacts: ['Instructor', 'Noblesse Oblige'],
        teams: [[
            {'tighnari': 'mainDps'},
            {'fischl': 'subDps'},
            {'collei': 'subDps'},
            {'kuki-shinobu': 'support'}
        ],
        [
            {'clorinde': 'mainDps'},
            {'nahida': 'subDps'},
            {'collei': 'subDps'},
            {'kaedehara-kazuha': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'dendro',
        mainStatsArtifacts: ['atkPercentOrElementalMastery','dendroBonus', 'elementalMasteryOrCritRate'],
        subStatsArtifacts: ['elementalMastery', 'atkPercent','energyRecharge','critRateOrDamage'],
        weapon: 'WEAPON_BOW',
        rarity: '4',
        rank: 'b'
    },
    {
        name: 'cyno',
        function: 'mainDps',
        bestWeapon: 'Staff of the Scarlet Sands',
        otherWeapons: ['Ballad of the Fjords','Primordial Jade Winged-Spear','Deathmatch'],
        bestArtifacts: 'Thundering Fury',
        otherArtifacts: ['Gilded Dreams', 'Flower of Paradise Lost'],
        teams: [[
            {'cyno': 'mainDps'},
            {'furina': 'subDps'},
            {'nahida': 'subDps'},
            {'baizhu': 'support'}
        ],
        [
            {'cyno': 'mainDps'},
            {'yelan': 'subDps'},
            {'nahida': 'subDps'},
            {'kuki-shinobu': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'electro',
        mainStatsArtifacts: ['elementalMastery','electroBonus', 'elementalMasteryOrCritRate'],
        subStatsArtifacts: ['critRateOrDamage', 'elementalMastery','energyRecharge','atkPercent'],
        weapon: 'WEAPON_POLE',
        rarity: '5',
        rank: 'b'
    },    
    {
        name: 'dahlia',
        function: 'support',
        bestWeapon: 'Favonius Sword',
        otherWeapons: ['Freedom-Sworn','Key of Khaj-Nisut','Fleuve Cendre Ferryman'],
        bestArtifacts: 'Noblesse Oblige',
        otherArtifacts: ['Scroll of the Hero of Cinder City', 'Marechaussee Hunter'],
        teams: [[
            {'skirk': 'mainDps'},
            {'furina': 'subDps'},
            {'escoffier': 'subDps'},
            {'dahlia': 'support'}
        ],
        [
            {'kamisato-ayato': 'mainDps'},
            {'furina': 'subDps'},
            {'xilonen': 'support'},
            {'dahlia': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercentOrEnergyRecharge','hpPercent', 'hpPercentOrCritRate'],
        subStatsArtifacts: ['energyRecharge','hpPercent', 'hp', 'critRate'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '4',
        rank:'a'
    },
    {
        name: 'dehya',
        function: 'support',
        bestWeapon: 'Favonius Greatsword',
        otherWeapons: ['Wolfs Gravestone','Makhaira Aquamarine','The Bell'],
        bestArtifacts: 'Tenacity of the Millelith',
        otherArtifacts: ['Instructor', 'Deepwood Memories'],
        teams: [[
            {'alhaitham': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'dehya': 'support'},
            {'yaoyao': 'support'}
        ],
        [
            {'ganyu': 'mainDps'},
            {'nahida': 'subDps'},
            {'dehya': 'support'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill'],
        elementType: 'pyro',
        mainStatsArtifacts: ['hpPercent','hpPercent', 'hpPercentOrCritRate'],
        subStatsArtifacts: ['hpPercent','hp','critRate'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '5',
        rank: 'b'
    },
    {
        name: 'diluc',
        function: 'mainDps',
        bestWeapon: 'Redhorn Stonethresher',
        otherWeapons: ['Beacon of the Reed Sea','Serpent Spine','Wolfs Gravestone'],
        bestArtifacts: 'Crimson Witch of Flames',
        otherArtifacts: ['Gilded Dreams', 'Gladiators Finale'],
        teams: [[
            {'diluc': 'mainDps'},
            {'furina': 'subDps'},
            {'bennett': 'support'},
            {'xianyun': 'support'}
        ],
        [
            {'diluc': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'bennett': 'support'},
            {'sucrose': 'support'}
        ]
        ],
        talentPriority: ['normalAttack', 'elementalSkill','elementalBurst'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercentOrElementalMastery','pyroBonus','critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','elementalMastery'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '5',
        rank: 'c'
    },
    {
        name: 'diona',
        function: 'support',
        bestWeapon: 'Favonius Warbow',
        otherWeapons: ['Sacrificial Bow','Elegy for the End','Silvershower Heartstrings'],
        bestArtifacts: 'Noblesse Oblige',
        otherArtifacts: ['Scroll of the Hero of Cinder City'],
        twoPieces: ['Tenacity of the Millelith', 'Maiden Beloved'],
        teams: [[
            {'wriothesley': 'mainDps'},
            {'furina': 'subDps'},
            {'jean': 'support'},
            {'diona': 'support'}
        ],
        [
            {'eula': 'mainDps'},
            {'beidou': 'subDps'},
            {'fischl': 'subDps'},
            {'diona': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'cryo',
        mainStatsArtifacts: ['hpPercentOrEnergyRecharge','hpPercent', 'hpPercent'],
        subStatsArtifacts: ['critRate','hpPercent', 'hp','energyRecharge'],
        weapon: 'WEAPON_BOW',
        rarity: '4',
        rank: 'b'
    },
    {
        name: 'dori',
        function: 'support',
        bestWeapon: 'Favonius Greatsword',
        otherWeapons: ['Sacrificial Greatsword','Katsuragikiri Nagamasa','Forest Regalia'],
        bestArtifacts: 'Noblesse Oblige',
        otherArtifacts: ['Deepwood Memories', 'Instructor'],
        teams: [[
            {'eula': 'mainDps'},
            {'fischl': 'subDps'},
            {'rosaria': 'subDps'},
            {'dori': 'support'}
        ],
        [
            {'nahida': 'subDps'},
            {'fischl': 'subDps'},
            {'kaedehara-kazuha': 'support'},
            {'dori': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'electro',
        mainStatsArtifacts: ['hpPercentOrEnergyRecharge','hpPercentOrElementalMastery', 'hpPercentOrCritRate'],
        subStatsArtifacts: ['elementalMastery', 'hpPercent','energyRecharge','critRate'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4',
        rank: 'c'
    },
    {
        name: 'emilie',
        function: 'subDps',
        bestWeapon: 'Lumidouce Elegy',
        otherWeapons: ['Calamity Queller','Staff of Homa','Deathmatch'],
        bestArtifacts: 'Unfinished Reverie',
        otherArtifacts: ['Deepwood Memories', 'Golden Troupe'],
        teams: [[
            {'wriothesley': 'mainDps'},
            {'xiangling': 'subDps'},
            {'emilie': 'subDps'},
            {'bennett': 'support'}
        ],
        [
            {'kinich': 'mainDps'},
            {'xiangling': 'subDps'},
            {'emilie': 'subDps'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'dendro',
        mainStatsArtifacts: ['atkPercent','dendroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_POLE',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'escoffier',
        function: 'subDps',
        bestWeapon: 'Symphonist of Scents',
        otherWeapons: ['Staff of Homa','Engulfing Lightning','Prospectors Drill'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Blizzard Strayer', 'Noblesse Oblige'],
        teams: [[
            {'wriothesley': 'mainDps'},
            {'furina': 'subDps'},
            {'escoffier': 'subDps'},
            {'shenhe': 'support'}
        ],
        [
            {'neuvillette': 'mainDps'},
            {'furina': 'subDps'},
            {'escoffier': 'subDps'},
            {'citlali': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','cryoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_POLE',
        rarity: '5',
        rank: 's'
    },
    {
        name: 'eula',
        function: 'mainDps',
        bestWeapon: 'Song of Broken Pines',
        otherWeapons: ['Wolfs Gravestone','Beacon of the Reed Sea','Serpent Spine'],
        bestArtifacts: 'Pale Flame',
        otherArtifacts: [],
        twoPieces: ['Bloodstained Chivalry', 'Pale Flame', 'Gladiators Finale', 'Pale Flame'],
        teams: [[
            {'eula': 'mainDps'},
            {'raiden-shogun': 'subDps'},
            {'mika': 'support'},
            {'zhongli': 'support'}
        ],
        [
            {'eula': 'mainDps'},
            {'rosaria': 'subDps'},
            {'yelan': 'subDps'},
            {'sucrose': 'support'}
        ]
        ],
        talentPriority: ['normalAttack','elementalBurst','elementalSkill'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercent','physicalDamageBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '5',
        rank: 'c'
    },
    {
        name: 'faruzan',
        function: 'support',
        bestWeapon: 'Elegy for the End',
        otherWeapons: ['Favonius Warbow','End of the Line','Fading Twilight'],
        bestArtifacts: 'Viridescent Venerer',
        otherArtifacts: ['Noblesse Oblige', 'Scroll of the Hero of Cinder City'],
        teams: [[
            {'wanderer': 'mainDps'},
            {'furina': 'subDps'},
            {'faruzan': 'support'},
            {'bennett': 'support'}
        ],
        [
            {'xiao': 'mainDps'},
            {'furina': 'subDps'},
            {'faruzan': 'support'},
            {'xianyun': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'anemo',
        mainStatsArtifacts: ['energyRecharge','anemoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['energyRecharge','critRate','critDamage','atkPercent'],
        weapon: 'WEAPON_BOW',
        rarity: '4',
        rank: 'b'
    },
    {
        name: 'fischl',
        function: 'subDps',
        bestWeapon: 'Polar Star',
        otherWeapons: ['Aqua Simulacra','Elegy For The End','The Stringless'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Thundering Fury'],
        twoPieces: ['Gladiators Finale', 'Thundering Fury'],
        teams: [[
            {'kamisato-ayato': 'mainDps'},
            {'beidou': 'subDps'},
            {'fischl': 'subDps'},
            {'bennett': 'support'}
        ],
        [
            {'neuvillette': 'mainDps'},
            {'beidou': 'subDps'},
            {'fischl': 'subDps'},
            {'kaedehara-kazuha': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercentOrElementalMastery','electroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage','energyRecharge', 'atkPercent','elementalMastery'],
        weapon: 'WEAPON_BOW',
        rarity: '4',
        rank: 'a'
    },
    {
        name: 'flins',
        function: 'mainDps',
        bestWeapon: 'Bloodsoaked Ruins',
        otherWeapons: ['Staff of Homa','Staff of the Scarlet Sands','Prospectors Drill'],
        bestArtifacts: 'Night of the Skys Unveiling',
        otherArtifacts: ['Gilded Dreams', 'Thundering Fury'],
        teams: [[
            {'flins': 'mainDps'},
            {'ineffa': 'subDps'},
            {'aino': 'subDps'},
            {'xilonen': 'support'}
        ],
        [
            {'flins': 'mainDps'},
            {'ineffa': 'subDps'},
            {'xingqiu': 'subDps'},
            {'sucrose': 'support'}
        ],
        [
            {'flins': 'mainDps'},
            {'fischl': 'subDps'},
            {'aino': 'subDps'},
            {'sucrose': 'support'}
        ],
        [
            {'flins': 'mainDps'},
            {'fischl': 'subDps'},
            {'lauma': 'support'},
            {'sangonomiya-kokomi': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercent','atkPercenty', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage', 'atkPercent', 'energyRecharge', 'elementalMastery'],
        weapon: 'WEAPON_POLE',
        rarity: '5',
        rank:'s'
    },
    {
        name: 'freminet',
        function: 'mainDps',
        bestWeapon: 'Song of Broken Pines',
        otherWeapons: ['Beacon of the Reed Sea','Skyward Pride','Serpent Spine'],
        bestArtifacts: 'Pale Flame',
        otherArtifacts: [],
        twoPieces: ['Bloodstained Chivalry', 'Pale Flame', 'Gladiators Finale', 'Pale Flame'],
        teams: [[
            {'freminet': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'raiden-shogun': 'subDps'},
            {'mika': 'support'}
        ],
        [
            {'freminet': 'mainDps'},
            {'fischl': 'subDps'},
            {'zhongli': 'support'},
            {'mika': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','normalAttack','elementalBurst'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercent','physicalDamageBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4',
        rank: 'd'
    },
    {
        name: 'furina',
        function: 'subDps',
        bestWeapon: 'Splendor of Tranquil Waters',
        otherWeapons: ['Primordial Jade Cutter','Festering Desire','Favonius Sword'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Tenacity of the Millelith'],
        twoPieces: ['Tenacity of the Millelith', 'Golden Troupe'],
        teams: [
            [{'neuvillette': 'mainDps'},
            {'xilonen': 'support'},
            {'furina': 'subDps'},
            {'kaedehara-kazuha': 'support'}],
            [{'mavuika': 'mainDps'},
                {'xilonen': 'support'},
                {'furina': 'subDps'},
                {'bennett': 'support'}]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercent','hpPercent', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage','hpPercent', 'energyRecharge', 'elementalMastery'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 's'
    },
    {
        name: 'gaming',
        function: 'mainDps',
        bestWeapon: 'A Thousand Blazing Suns',
        otherWeapons: ['Serpent Spine','Verdict','Fruitful Hook'],
        bestArtifacts: 'Crimson Witch of Flames',
        otherArtifacts: ['Marechaussee Hunter', 'Long Nights Oath'],
        teams: [[
            {'gaming': 'mainDps'},
            {'furina': 'subDps'},
            {'xianyun': 'support'},
            {'bennett': 'support'}
        ],
        [
            {'gaming': 'mainDps'},
            {'furina': 'subDps'},
            {'iansan': 'support'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','pyroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage', 'atkPercent','energyRecharge','elementalMastery'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4',
        rank: 'c'
    },
    {
        name: 'ganyu',
        function: 'support',
        bestWeapon: 'The First Great Magic',
        otherWeapons: ['Astral Vultures Crimson Plumage','Amos Bow','Prototype Crescent'],
        bestArtifacts: 'Blizzard Strayer',
        otherArtifacts: [],
        twoPieces: ['Gladiators Finale', 'Blizzard Strayer', 'Noblesse Oblige', 'Blizzard Strayer'],
        teams: [[
            {'ganyu': 'mainDps'},
            {'mona': 'support'},
            {'diona': 'support'},
            {'venti': 'support'}
        ],
        [
            {'ganyu': 'mainDps'},
            {'sangonomiya-kokomi': 'support'},
            {'shenhe': 'support'},
            {'venti': 'support'}
        ]
        ],
        talentPriority: ['normalAttack','elementalSkill','elementalBurst'],
        elementType: 'anemo',
        mainStatsArtifacts: ['atkPercent','cryoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate', 'critDamage','atkPercent','elementalMastery'],
        weapon: 'WEAPON_BOW',
        rarity: '5',
        rank: 'b'
    },
    {
        name: 'gorou',
        function: 'support',
        bestWeapon: 'Favonius Warbow',
        otherWeapons: ['Sacrificial Bow','Elegy for the End','End Of The Line'],
        bestArtifacts: 'The Exile',
        otherArtifacts: ['Noblesse Oblige', 'Husk of Opulent Dreams'],
        teams: [[
            {'arataki-itto': 'mainDps'},
            {'albedo': 'subDps'},
            {'gorou': 'support'},
            {'zhongli': 'support'}
        ],
        [
            {'ningguang': 'mainDps'},
            {'albedo': 'subDps'},
            {'gorou': 'support'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'geo',
        mainStatsArtifacts: ['energyRecharge','defPercent','defPercentOrCritRate'],
        subStatsArtifacts: ['defPercent','energyRecharge', 'critRate'],
        weapon: 'WEAPON_BOW',
        rarity: '4',
        rank:'c'
    },
    {
        name: 'hu-tao',
        function: 'mainDps',
        bestWeapon: 'Staff of Homa',
        otherWeapons: ['Staff of the Scarlet Sands','Ballad of the Fjords','Dragons Bane'],
        bestArtifacts: 'Crimson Witch of Flames',
        otherArtifacts: ['Shimenawas Reminiscence', 'Gilded Dreams'],
        teams: [[
            {'hu-tao': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'yelan': 'subDps'},
            {'zhongli': 'support'}
        ],
        [
            {'hu-tao': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'furina': 'subDps'},
            {'xilonen': 'support'}
        ]
        ],
        talentPriority: ['normalAttack', 'elementalSkill','elementalBurst'],
        elementType: 'pyro',
        mainStatsArtifacts: ['hpPercentOrElementalMastery','pyroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage','elementalMastery', 'hpPercent'],
        weapon: 'WEAPON_POLE',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'iansan',
        function: 'support',
        bestWeapon: 'Calamity Queller',
        otherWeapons: ['Engulfing Lightning','Favonius Lance','Tamayuratei no Ohanashi'],
        bestArtifacts: 'Scroll of the Hero of Cinder City',
        otherArtifacts: ['Noblesse Oblige'],
        twoPieces: ['Emblem of Severed Fate', 'Gladiators Finale'],
        teams: [[
            {'varesa': 'mainDps'},
            {'furina': 'subDps'},
            {'iansan': 'support'},
            {'xianyun': 'support'}
        ],
        [
            {'mavuika': 'mainDps'},
            {'citlali': 'support'},
            {'iansan': 'support'},
            {'xilonen': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst', 'elementalSkill'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','atkPercent', 'atkPercent'],
        subStatsArtifacts: ['atkPercent','energyRecharge', 'critRate'],
        weapon: 'WEAPON_POLE',
        rarity: '4',
        rank: 's'
    },
    {
        name: 'ifa',
        function: 'support',
        bestWeapon: 'Sunny Morning Sleep-In',
        otherWeapons: ['A Thousand Floating Dreams','Mappa Mare','Wandering Evenstar'],
        bestArtifacts: 'Viridescent Venerer',
        otherArtifacts: ['Scroll of the Hero of Cinder City'],
        twoPieces: ['Gilded Dreams', 'Wanderers Troupe'],
        teams: [[
            {'kamisato-ayato': 'mainDps'},
            {'furina': 'support'},
            {'ororon': 'subDps'},
            {'ifa': 'support'}
        ],
        [
            {'clorinde': 'mainDps'},
            {'furina': 'support'},
            {'yelan': 'subDps'},
            {'ifa': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill','normalAttack'],
        elementType: 'anemo',
        mainStatsArtifacts: ['elementalMastery','elementalMastery', 'elementalMastery'],
        subStatsArtifacts: ['critRate', 'elementalMastery','energyRecharge'],
        weapon: 'WEAPON_CATALYST',
        rarity: '4',
        rank: 'd'
    },
    {
        name: 'ineffa',
        function: 'subDps',
        bestWeapon: 'Fractured Halo',
        otherWeapons: ['Staff of the Scarlet Sands','Deathmatch','Missive Windspear'],
        bestArtifacts: 'Gilded Dreams',
        otherArtifacts: ['Thundering Fury'],
        twoPieces: ['Shimenawas Reminiscence','Gilded Dreams'],
        teams: [[
            {'neuvillette': 'mainDps'},
            {'furina': 'subDps'},
            {'ineffa': 'subDps'},
            {'kaedehara-kazuha': 'support'}
        ],
        [
            {'keqing': 'mainDps'},
            {'yelan': 'subDps'},
            {'ineffa': 'subDps'},
            {'kaedehara-kazuha': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercentOrElementalMastery','atkPercentOrElementalMastery', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage', 'atkPercent', 'energyRecharge', 'elementalMastery'],
        weapon: 'WEAPON_POLE',
        rarity: '5',
        rank:'a'
    },
    {
        name: 'jean',
        function: 'support',
        bestWeapon: 'Primordial Jade Cutter',
        otherWeapons: ['Freedom-Sworn','Favonius Sword','Amenoma Kageuchi'],
        bestArtifacts: 'Viridescent Venerer',
        otherArtifacts: ['Noblesse Oblige', 'Ocean-Hued Clam'],
        teams: [[
            {'neuvillette': 'mainDps'},
            {'fischl': 'subDps'},
            {'furina': 'subDps'},
            {'jean': 'support'}
        ],
        [
            {'kamisato-ayato': 'mainDps'},
            {'fischl': 'subDps'},
            {'beidou': 'subDps'},
            {'jean': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'anemo',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','anemoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 'b'
    },
    {
        name: 'kachina',
        function: 'subDps',
        bestWeapon: 'Footprint of the Rainbow',
        otherWeapons: ['Favonius Lance','Engulfing Lightning','Deathmatch'],
        bestArtifacts: 'Scroll of the Hero of Cinder City',
        otherArtifacts: ['Husk of Opulent Dreams','Tenacity of the Millelith'],
        teams: [[
            {'arataki-itto': 'mainDps'},
            {'kachina': 'subDps'},
            {'chiori': 'subDps'},
            {'zhongli': 'support'}
        ],
        [
            {'mualani': 'mainDps'},
            {'kachina': 'subDps'},
            {'kaedehara-kazuha': 'support'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'geo',
        mainStatsArtifacts: ['defPercentOrEnergyRecharge','geoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'defPercent','energyRecharge'],
        weapon: 'WEAPON_POLE',
        rarity: '4',
        rank: 'b'
    },
    {
        name: 'kaedehara-kazuha',
        function: 'support',
        bestWeapon: 'Freedom-Sworn',
        otherWeapons: ['Xiphos Moonlight','Favonius Sword','Fleuve Cendre Ferryman'],
        bestArtifacts: 'Viridescent Venerer',
        otherArtifacts: ['Instructor', 'Thundering Fury'],
        teams: [[
            {'kamisato-ayaka': 'mainDps'},
            {'mona': 'support'},
            {'shenhe': 'support'},
            {'kaedehara-kazuha': 'support'}
        ],
        [
            {'raiden-shogun': 'mainDps'},
            {'nahida': 'subDps'},
            {'kujou-sara': 'support'},
            {'kaedehara-kazuha': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','normalAttack','elementalSkill'],
        elementType: 'anemo',
        mainStatsArtifacts: ['elementalMasteryOrEnergyRecharge','elementalMastery', 'elementalMastery'],
        subStatsArtifacts: ['critRate', 'elementalMastery','energyRecharge','atkPercent'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 's'
    },
    {
        name: 'kaeya',
        function: 'subDps',
        bestWeapon: 'Mistsplitter Reforged',
        otherWeapons: ['Favonius Sword','Lions Roar','Harbinger of Dawn'],
        bestArtifacts: 'Emblem of Severed Fate',
        otherArtifacts: [],
        twoPieces: ['Blizzard Strayer', 'Noblesse Oblige', 'Emblem of Severed Fate', 'Noblesse Oblige'],
        teams: [[
            {'xiangling': 'subDps'},
            {'rosaria': 'subDps'},
            {'kaeya': 'subDps'},
            {'bennett': 'support'} 
        ],
        [
            {'chongyun': 'support'},
            {'xingqiu': 'subDps'},
            {'kaeya': 'subDps'},
            {'bennett': 'support'} 
        ]
        ],
        talentPriority: ['elementalBurst','normalAttack','elementalSkill'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','cryoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['energyRecharge', 'critRate','critDamage', 'atkPercent'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '4',
        rank: 'c'
    },
    {
        name: 'kamisato-ayaka',
        function: 'mainDps',
        bestWeapon: 'Mistsplitter Reforged',
        otherWeapons: ['Absolution','Light of Foliar Incision','Finale of the Deep'],
        bestArtifacts: 'Blizzard Strayer',
        otherArtifacts: [],
        twoPieces: ['Gladiators Finale', 'Blizzard Strayer', 'Noblesse Oblige', 'Blizzard Strayer'],
        teams: [[
            {'kamisato-ayaka': 'mainDps'},
            {'sangonomiya-kokomi': 'support'},
            {'shenhe': 'support'},
            {'kaedehara-kazuha': 'support'}
        ],
        [
            {'kamisato-ayaka': 'mainDps'},
            {'rosaria': 'subDps'},
            {'mona': 'support'},
            {'kaedehara-kazuha': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','normalAttack','elementalSkill'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercent','cryoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'kamisato-ayato',
        function: 'mainDps',
        bestWeapon: 'Haran Geppaku Futsu',
        otherWeapons: ['Primordial Jade Cutter','Mistsplitter Reforged','The Black Sword'],
        bestArtifacts: 'Heart of Depth',
        otherArtifacts: ['Gladiators Finale', 'Nymphs Dream'],
        teams: [[
            {'kamisato-ayato': 'mainDps'},
            {'fischl': 'subDps'},
            {'nahida': 'subDps'},
            {'kuki-shinobu': 'support'}
        ],
        [
            {'kamisato-ayato': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'nahida': 'subDps'},
            {'kuki-shinobu': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'hydro',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','hydroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage', 'atkPercent','energyRecharge','hpPercent'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 'b'
    },
    {
        name: 'kaveh',
        function: 'mainDps',
        bestWeapon: 'Favonius Greatsword',
        otherWeapons: ['Sacrificial Greatsword','Mailed Flower','Makhaira Aquamarine'],
        bestArtifacts: 'Deepwood Memories',
        otherArtifacts: ['Ocean-Hued Clam', 'Flower of Paradise Lost'],
        teams: [[
            {'kaveh': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'nilou': 'support'},
            {'baizhu': 'support'}
        ],
        [
            {'kaveh': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'nahida': 'subDps'},
            {'sangonomiya-kokomi': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','normalAttack', 'elementalSkill'],
        elementType: 'dendro',
        mainStatsArtifacts: ['energyRechargeOrElementalMastery','elementalMastery', 'elementalMasteryOrCritRate'],
        subStatsArtifacts: ['energyRecharge', 'elementalMastery', 'critRate'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4',
        rank: 'd'
    },
    {
        name: 'keqing',
        function: 'mainDps',
        bestWeapon: 'Mistsplitter Reforged',
        otherWeapons: ['Primordial Jade Cutter','Wolf-Fang','Lions Roar'],
        bestArtifacts: 'Thundering Fury',
        otherArtifacts: ['Thundersoother', 'Gilded Dreams'],
        teams: [[
            {'keqing': 'mainDps'},
            {'venti': 'support'},
            {'bennett': 'support'},
            {'kaedehara-kazuha': 'support'}
        ],
        [
            {'keqing': 'mainDps'},
            {'fischl': 'subDps'},
            {'collei': 'subDps'},
            {'kaedehara-kazuha': 'support'}
        ]
        ],
        talentPriority: ['normalAttack','elementalBurst','elementalSkill'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','electroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 'b'
    },
    {
        name: 'kinich',
        function: 'mainDps',
        bestWeapon: 'Fang of the Mountain King',
        otherWeapons: ['Beacon of the Reed Sea','Serpent Spine','Verdict'],
        bestArtifacts: 'Obsidian Codex',
        otherArtifacts: ['Unfinished Reverie', 'Deepwood Memories'],
        teams: [[
            {'kinich': 'mainDps'},
            {'emilie': 'subDps'},
            {'xiangling': 'subDps'},
            {'bennett': 'support'}
        ],
        [
        {'kinich': 'mainDps'},
        {'furina': 'subDps'},
        {'xiangling': 'subDps'},
        {'bennett': 'support'}
        ]],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'dendro',
        mainStatsArtifacts: ['atkPercent','dendroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '5',
        rank: 's'
    },
    {
        name: 'kirara',
        function: 'support',
        bestWeapon: 'Key of Khaj-Nisut',
        otherWeapons: ['Favonius Sword','Sacrificial Sword','Sapwood Blade'],
        bestArtifacts: 'Scroll of the Hero of Cinder City',
        otherArtifacts: ['Deepwood Memories', 'Noblesse Oblige'],
        teams: [[
            {'keqing': 'mainDps'},
            {'fischl': 'subDps'},
            {'kaedehara-kazuha': 'support'},
            {'kirara': 'support'}
        ],
        [
            {'alhaitham': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'kuki-shinobu': 'support'},
            {'kirara': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'dendro',
        mainStatsArtifacts: ['hpPercentOrEnergyRecharge','hpPercent', 'hpPercentOrCritRate'],
        subStatsArtifacts: ['energyRecharge', 'hpPercent', 'critRate'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '4',
        rank: 'c'
    },
    {
        name: 'klee',
        function: 'mainDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Skyward Atlas','The Widsith','Flowing Purity'],
        bestArtifacts: 'Crimson Witch of Flames',
        otherArtifacts: ['Lavawalker'],
        twoPieces: ['Crimson Witch of Flames', 'Gladiators Finale'],
        teams: [[
            {'klee': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'kaedehara-kazuha': 'support'},
            {'zhongli': 'support'}
        ],
        [
            {'klee': 'mainDps'},
            {'xiangling': 'subDps'},
            {'kaedehara-kazuha': 'support'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['normalAttack','elementalBurst', 'elementalSkill'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercent','pyroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage', 'atkPercent','energyRecharge','elementalMastery'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5',
        rank: 'c'
    },
    {
        name: 'kujou-sara',
        function: 'support',
        bestWeapon: 'Skyward Harp',
        otherWeapons: ['Elegy for the End','Chain Breaker','Sacrificial Bow'],
        bestArtifacts: 'Emblem of Severed Fate',
        otherArtifacts: ['Noblesse Oblige'],
        twoPieces: ['Thundering Fury', 'Noblesse Oblige'],
        teams: [[
            {'raiden-shogun': 'mainDps'},
            {'kaedehara-kazuha': 'subDps'},
            {'kujou-sara': 'support'},
            {'bennett': 'support'}
        ],
        [
            {'raiden-shogun': 'mainDps'},
            {'xiangling': 'subDps'},
            {'kujou-sara': 'support'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','electroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['energyRecharge','critRate','critDamage', 'atkPercent'],
        weapon: 'WEAPON_BOW',
        rarity: '4',
        rank: 'b'
    },
    {
        name: 'kuki-shinobu',
        function: 'support',
        bestWeapon: 'Freedom-Sworn',
        otherWeapons: ['Key of Khaj-Nisut','Xiphos Moonlight','Iron Sting'],
        bestArtifacts: 'Flower of Paradise Lost',
        otherArtifacts: ['Gilded Dreams'],
        twoPieces: ['Flower of Paradise Lost', 'Gilded Dreams'],
        teams: [[
            {'alhaitham': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'nahida': 'subDps'},
            {'kuki-shinobu': 'support'}
        ],
        [
            {'kamisato-ayato': 'mainDps'},
            {'beidou': 'subDps'},
            {'nahida': 'subDps'},
            {'kuki-shinobu': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'electro',
        mainStatsArtifacts: ['elementalMastery','elementalMastery', 'elementalMastery'],
        subStatsArtifacts: ['elementalMastery','energyRecharge', 'hpPercent'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '4',
        rank: 'b'
    },
    {
        name: 'lan-yan',
        function: 'support',
        bestWeapon: 'Starcallers Watch',
        otherWeapons: ['Thrilling Tales of Dragon Slayers','Favonius Codex','Cranes Echoing Call'],
        bestArtifacts: 'Viridescent Venerer',
        otherArtifacts: ['Golden Troupe', 'Scroll of the Hero of Cinder City'],
        teams: [[
            {'clorinde': 'mainDps'},
            {'fischl': 'subDps'},
            {'nahida': 'subDps'},
            {'lan-yan': 'support'}
        ],
        [
            {'arlecchino': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'bennett': 'support'},
            {'lan-yan': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'anemo',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','atkPercent', 'atkPercentOrCritRate'],
        subStatsArtifacts: ['critRateOrDamage', 'atkPercent','energyRecharge','elementalMastery'],
        weapon: 'WEAPON_CATALYST',
        rarity: '4',
        rank:'b'
    },
    {
        name: 'lauma',
        function: 'support',
        bestWeapon: 'Nightweavers Looking Glass',
        otherWeapons: ['A Thousand Floating Dreams','Sunny Morning Sleep-In','Starcallers Watch'],
        bestArtifacts: 'Silken Moons Serenade',
        otherArtifacts: ['Deepwood Memories', 'Night of the Skys Unveiling'],
        teams: [[
            {'alhaitham': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'yelan': 'subDps'},
            {'lauma': 'support'}
        ],
        [
            {'neuvillette': 'mainDps'},
            {'furina': 'subDps'},
            {'ineffa': 'support'},
            {'lauma': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'dendro',
        mainStatsArtifacts: ['elementalMasteryOrEnergyRecharge','elementalMastery', 'critRateOrElementalMastery'],
        subStatsArtifacts: ['critRateOrDamage', 'atkPercent', 'energyRecharge', 'elementalMastery'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5',
        rank:'s'
    },
    {
        name: 'layla',
        function: 'support',
        bestWeapon: 'Key of Khaj-Nisut',
        otherWeapons: ['The Dockhands Assistant','Primordial Jade Cutter','Favonius Sword'],
        bestArtifacts: 'Tenacity of the Millelith',
        otherArtifacts: ['Scroll of the Hero of Cinder City'],
        twoPieces: ['Vourukashas Glow', 'Tenacity of the Millelith'],
        teams: [[
            {'kamisato-ayaka': 'mainDps'},
            {'shenhe': 'subDps'},
            {'layla': 'support'},
            {'sangonomiya-kokomi': 'support'}
        ],
        [
            {'ganyu': 'mainDps'},
            {'mona': 'support'},
            {'layla': 'support'},
            {'venti': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'cryo',
        mainStatsArtifacts: ['hpPercentOrEnergyRecharge','hpPercent', 'hpPercentOrCritRate'],
        subStatsArtifacts: ['energyRecharge', 'hpPercent', 'hp','critRate'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '4',
        rank: 'b'
    },
    {
        name: 'lisa',
        function: 'support',
        bestWeapon: 'Kaguras Verity',
        otherWeapons: ['Lost Prayer to the Sacred Winds','Skyward Atlas','The Widsith'],
        bestArtifacts: 'Thundering Fury',
        otherArtifacts: ['Gilded Dreams', 'Thundersoother'],
        teams: [[
            {'alhaitham': 'mainDps'},
            {'nahida': 'support'},
            {'lisa': 'support'},
            {'kuki-shinobu': 'support'}
        ],
        [
            {'cyno': 'mainDps'},
            {'nahida': 'support'},
            {'lisa': 'support'},
            {'zhongli': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercentOrElementalMastery','electroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','elementalMastery'],
        weapon: 'WEAPON_CATALYST',
        rarity: '4',
        rank: 'c'
    },
    {
        name: 'lynette',
        function: 'support',
        bestWeapon: 'Freedom-Sworn',
        otherWeapons: ['Xiphos Moonlight','Favonius Sword','Iron Sting'],
        bestArtifacts: 'Viridescent Venerer',
        otherArtifacts: ['Noblesse Oblige', 'Emblem of Severed Fate'],
        teams: [[
            {'hu-tao': 'mainDps'},
            {'yelan': 'subDps'},
            {'lynette': 'support'},
            {'zhongli': 'support'}
        ],
        [
            {'tartaglia': 'mainDps'},
            {'xiangling': 'subDps'},
            {'lynette': 'support'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'anemo',
        mainStatsArtifacts: ['elementalMasteryOrEnergyRecharge','elementalMastery', 'elementalMastery'],
        subStatsArtifacts: ['energyRecharge', 'elementalMastery', 'critRate'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '4',
        rank: 'c'
    },
    {
        name: 'lyney',
        function: 'mainDps',
        bestWeapon: 'The First Great Magic',
        otherWeapons: ['Astral Vultures Crimson Plumage','Aqua Simulacra','Song of Stillness'],
        bestArtifacts: 'Marechaussee Hunter',
        otherArtifacts: ['Lavawalker'],
        twoPieces: ['Crimson Witch of Flames', 'Gladiators Finale'],
        teams: [[
            {'lyney': 'mainDps'},
            {'furina': 'subDps'},
            {'xilonen': 'support'},
            {'bennett': 'support'}
        ],
        [
            {'lyney': 'mainDps'},
            {'kaedehara-kazuha': 'support'},
            {'zhongli': 'support'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['normalAttack','elementalSkill','elementalBurst'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercent','pyroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage', 'atkPercent','energyRecharge','elementalMastery'],
        weapon: 'WEAPON_BOW',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'mavuika',
        function: 'mainDps',
        bestWeapon: 'A Thousand Blazing Suns',
        otherWeapons: ['Beacon of the Reed Sea','Verdict','Serpent Spine'],
        bestArtifacts: 'Obsidian Codex',
        otherArtifacts: ['Marechaussee Hunter', 'Crimson Witch of Flames'],
        teams: [
        [
            {'mavuika': 'mainDps'},
            {'furina': 'subDps'},
            {'xilonen': 'support'},
            {'bennett': 'support'}
        ],
        [
            {'mavuika': 'mainDps'},
            {'citlali': 'support'},
            {'xilonen': 'support'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst', 'elementalSkill'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercentOrElementalMastery','pyroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '5',
        rank: 's'
    },
    {
        name: 'mika',
        function: 'support',
        bestWeapon: 'Favonius Lance',
        otherWeapons: ['Dialogues of the Desert Sages','Rightful Reward','Black Tassel'],
        bestArtifacts: 'Noblesse Oblige',
        otherArtifacts: ['Ocean-Hued Clam', 'Song of Days Past'],
        teams: [[
            {'eula': 'mainDps'},
            {'raiden-shogun': 'subDps'},
            {'rosaria': 'subDps'},
            {'mika': 'support'}
        ],
        [
            {'eula': 'mainDps'},
            {'raiden-shogun': 'subDps'},
            {'furina': 'subDps'},
            {'mika': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'cryo',
        mainStatsArtifacts: ['hpPercentOrEnergyRecharge','hpPercent', 'critRate'],
        subStatsArtifacts: ['critRate','hpPercent','energyRecharge'],
        weapon: 'WEAPON_POLE',
        rarity: '4',
        rank: 'b'
    },
    {
        name: 'mona',
        function: 'support',
        bestWeapon: 'Thrilling Tales of Dragon Slayers',
        otherWeapons: ['Favonius Codex','A Thousand Floating Dreams','Prototype Amber'],
        bestArtifacts: 'Noblesse Oblige',
        otherArtifacts: ['Instructor','Tenacity of the Millelith'],
        teams: [[
            {'ganyu': 'mainDps'},
            {'mona': 'support'},
            {'layla': 'support'},
            {'venti': 'support'}
        ],
        [
            {'nahida': 'subDps'},
            {'mona': 'support'},
            {'kuki-shinobu': 'support'},
            {'kaedehara-kazuha': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'hydro',
        mainStatsArtifacts: ['energyRecharge','hydroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage', 'atkPercent','energyRecharge','elementalMastery'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'mualani',
        function: 'mainDps',
        bestWeapon: 'Surfs Up',
        otherWeapons: ['Sacrificial Jade','Tome of the Eternal Flow','Ring of Yaxche'],
        bestArtifacts: 'Obsidian Codex',
        otherArtifacts: ['Heart of Depth', 'Marechaussee Hunter'],
        teams: [[
            {'mualani': 'mainDps'},
            {'dehya': 'subDps'},
            {'emilie': 'subDps'},
            {'nahida': 'subDps'}
        ],
        [
            {'mualani': 'mainDps'},
            {'xiangling': 'subDps'},
            {'furina': 'subDps'},
            {'xilonen': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercent','hydroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage', 'hpPercent','energyRecharge','elementalMastery'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'nahida',
        function: 'subDps',
        bestWeapon: 'A Thousand Floating Dreams',
        otherWeapons: ['Sunny Morning Sleep-In','Kaguras Verity','Sacrificial Fragments'],
        bestArtifacts: 'Deepwood Memories',
        otherArtifacts: ['Gilded Dreams','Golden Troupe'],
        teams: [[
            {'alhaitham': 'mainDps'},
            {'nahida': 'subDps'},
            {'yelan': 'subDps'},
            {'kuki-shinobu': 'support'}
        ],
        [
            {'alhaitham': 'mainDps'},
            {'nahida': 'subDps'},
            {'yae-miko': 'subDps'},
            {'zhongli': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'dendro',
        mainStatsArtifacts: ['elementalMastery','dendroBonusOrElementalMastery', 'elementalMasteryOrCritRateOrCritDamage'],
        subStatsArtifacts: ['energyRecharge','elementalMastery', 'atkPercent', 'critRateOrDamage'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5',
        rank: 's'
    },
    {
        name: 'navia',
        function: 'mainDps',
        bestWeapon: 'Verdict',
        otherWeapons: ['A Thousand Blazing Suns','Serpent Spine','Beacon of the Reed Sea'],
        bestArtifacts: 'Nighttime Whispers in the Echoing Woods',
        otherArtifacts: ['Golden Troupe', 'Marechaussee Hunter'],
        teams: [[
            {'navia': 'mainDps'},
            {'xiangling': 'subDps'},
            {'zhongli': 'support'},
            {'bennett': 'support'}
        ],
        [
            {'navia': 'mainDps'},
            {'furina': 'subDps'},
            {'xilonen': 'support'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'geo',
        mainStatsArtifacts: ['atkPercent','geoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'neuvillette',
        function: 'mainDps',
        bestWeapon: 'Tome of the Eternal Flow',
        otherWeapons: ['Sacrificial Jade','Surfs Up','Prototype Amber'],
        bestArtifacts: 'Marechaussee Hunter',
        otherArtifacts: ['Heart of Depth'],
        twoPieces: ['Tenacity of the Millelith','Heart of Depth'],
        teams: [[
            {'neuvillette': 'mainDps'},
            {'furina': 'subDps'},
            {'kaedehara-kazuha': 'support'},
            {'xilonen': 'support'}
        ],
        [
            {'neuvillette': 'mainDps'},
            {'furina': 'subDps'},
            {'ororon': 'subDps'},
            {'xilonen': 'support'}
        ]
        ],
        talentPriority: ['normalAttack', 'elementalBurst', 'elementalSkill'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercent','hydroBonusOrHpPercent', 'hpPercentOrCritRateOrCritDamage'],
        subStatsArtifacts: ['critRateOrDamage', 'hpPercent','energyRecharge','elementalMastery'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5',
        rank: 's'
    },
    {
        name: 'nilou',
        function: 'support',
        bestWeapon: 'Key of Khaj-Nisut',
        otherWeapons: ['The Dockhands Assistant','Freedom-Sworn','Xiphos Moonlight'],
        bestArtifacts: 'Flower Of Paradise Lost',
        otherArtifacts: [],
        twoPieces: ['Tenacity of the Millelith', 'Vourukashas Glow', 'Heart of Depth', 'Vourukashas Glow'],
        teams: [[
            {'kamisato-ayato': 'mainDps'},
            {'nahida': 'subDps'},
            {'nilou': 'support'},
            {'yaoyao': 'support'}
        ],
        [
            {'neuvillette': 'mainDps'},
            {'nahida': 'subDps'},
            {'nilou': 'support'},
            {'baizhu': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercent','hpPercent', 'hpPercent'],
        subStatsArtifacts: ['hpPercent', 'elementalMastery','hp'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'ningguang',
        function: 'mainDps',
        bestWeapon: 'Lost Prayer to the Sacred Winds',
        otherWeapons: ['Kaguras Verity','Tome of the Eternal Flow','The Widsith'],
        bestArtifacts: 'Nighttime Whispers in the Echoing Woods',
        otherArtifacts: [],
        twoPieces: ['Archaic Petra', 'Noblesse Oblige', 'Gladiators Finale', 'Archaic Petra'],
        teams: [[
            {'ningguang': 'mainDps'},
            {'fischl': 'subDps'},
            {'albedo': 'subDps'},
            {'zhongli': 'support'}
        ],
        [
            {'ningguang': 'mainDps'},
            {'fischl': 'subDps'},
            {'bennett': 'support'},
            {'kachina': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','normalAttack','elementalSkill'],
        elementType: 'geo',
        mainStatsArtifacts: ['atkPercent','geoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent'],
        weapon: 'WEAPON_CATALYST',
        rarity: '4',
        rank: 'd'
    },
    {
        name: 'noelle',
        function: 'mainDps',
        bestWeapon: 'Redhorn Stonethresher',
        otherWeapons: ['Serpent Spine','Skyward Pride','Whiteblind'],
        bestArtifacts: 'Husk of Opulent Dreams',
        otherArtifacts: ['Retracing Bolide'],
        twoPieces: ['Archaic Petra', 'Husk of Opulent Dreams'],
        teams: [[
            {'noelle': 'mainDps'},
            {'albedo': 'subDps'},
            {'gorou': 'support'},
            {'zhongli': 'support'}
        ],
        [
            {'noelle': 'mainDps'},
            {'albedo': 'subDps'},
            {'fischl': 'subDps'},
            {'gorou': 'support'}
        ]
        ],
        talentPriority: ['normalAttack','elementalBurst', 'elementalSkill'],
        elementType: 'geo',
        mainStatsArtifacts: ['defPercent','geoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'defPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4',
        rank: 'c'
    },
    {
        name: 'ororon',
        function: 'subDps',
        bestWeapon: 'Elegy for the End',
        otherWeapons: ['Aqua Simulacra','Amos Bow','Chain Breaker'],
        bestArtifacts: 'Scroll of the Hero of Cinder City',
        otherArtifacts: ['Thundering Fury', 'Emblem of Severed Fate'],
        teams: [[
            {'kamisato-ayato': 'mainDps'},
            {'ororon': 'subDps'},
            {'fischl': 'subDps'},
            {'sucrose': 'support'}
        ],
        [
            {'chasca': 'mainDps'},
            {'ororon': 'subDps'},
            {'furina': 'subDps'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst', 'elementalSkill'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','electroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_BOW',
        rarity: '4',
        rank: 's'
    },
    {
        name: 'qiqi',
        function: 'support',
        bestWeapon: 'Sacrificial Sword',
        otherWeapons: ['Favonius Sword','Peak Patrol Song','Skyward Blade'],
        bestArtifacts: 'Tenacity of the Millelith',
        otherArtifacts: ['Scroll of The Hero of Cinder City', 'Ocean-Hued Clam'],
        teams: [[
            {'eula': 'mainDps'},
            {'beidou': 'subDps'},
            {'fischl': 'subDps'},
            {'qiqi': 'support'}
        ],
        [
            {'wriothesley': 'mainDps'},
            {'furina': 'subDps'},
            {'kaedehara-kazuha': 'support'},
            {'qiqi': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','atkPercent', 'healingBonus'],
        subStatsArtifacts: ['critRate', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 'd'
    },
    {
        name: 'raiden-shogun',
        function: 'subDps',
        bestWeapon: 'Engulfing Lightning',
        otherWeapons: ['The Catch','Staff of Homa','Dragons Bane'],
        bestArtifacts: 'Emblem of Severed Fate',
        otherArtifacts: ['Thundering Fury', 'Flower of Paradise Lost'],
        teams: [
            [{'raiden-shogun': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'xiangling': 'subDps'},
            {'bennett': 'support'}],
            [{'raiden-shogun': 'subDps'},
            {'xingqiu': 'subDps'},
            {'nahida': 'subDps'},
            {'baizhu': 'support'}]
        ],
        talentPriority: ['elementalBurst','elementalSkill','normalAttack'],
        elementType: 'electro',
        mainStatsArtifacts: ['energyRechargeOrElementalMastery','atkPercentOrElementalMastery', 'critRateOrElementalMastery'],
        subStatsArtifacts: ['critRateOrDamage', 'energyRecharge', 'atkPercent', 'elementalMastery'],
        weapon: 'WEAPON_POLE',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'razor',
        function: 'mainDps',
        bestWeapon: 'Song of Broken Pines',
        otherWeapons: ['Beacon of the Reed Sea', 'Wolfs Gravestone', 'Serpent Spine'],
        bestArtifacts: 'Pale Flame',
        otherArtifacts: ['Gladiators Finale'],
        twoPieces: ['Bloodstained Chivalry', 'Pale Flame'],
        teams: [
          [
            {'razor': 'mainDps'},
            {'rosaria': 'subDps'},
            {'fischl': 'subDps'},
            {'mika': 'support'}
          ],
          [
            {'razor': 'mainDps'},
            {'rosaria': 'subDps'},
            {'zhongli': 'support'},
            {'mika': 'support'}
          ]
        ],
        talentPriority: ['normalAttack', 'elementalBurst', 'elementalSkill'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercent', 'physicalDamageBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate', 'critDamage', 'atkPercent', 'energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4',
        rank: 'd'
    },
    {
        name: 'rosaria',
        function: 'subDps',
        bestWeapon: 'Engulfing Lightning',
        otherWeapons: ['Skyward Spine','The Catch','Wavebreakers Fin'],
        bestArtifacts: 'Emblem of Severed Fate',
        otherArtifacts: ['Noblesse Oblige'],
        twoPieces: ['Blizzard Strayer', 'Noblesse Oblige'],
        teams: [[
            {'kamisato-ayaka': 'mainDps'},
            {'rosaria': 'subDps'},
            {'yelan': 'subDps'},
            {'kaedehara-kazuha': 'support'}
        ],
        [
            {'kamisato-ayato': 'mainDps'},
            {'rosaria': 'subDps'},
            {'diona': 'support'},
            {'kaedehara-kazuha': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','cryoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_POLE',
        rarity: '4',
        rank: 'b'
    },
    {
        name: 'sangonomiya-kokomi',
        function: 'support',
        bestWeapon: 'Thrilling Tales of Dragon Slayers',
        otherWeapons: ['Hakushin Ring','Prototype Amber','Everlasting Moonglow'],
        bestArtifacts: 'Tenacity of the Millelith',
        otherArtifacts: ['Ocean-Hued Clam', 'Maiden Beloved'],
        teams: [[
            {'kamisato-ayaka': 'mainDps'},
            {'shenhe': 'support'},
            {'sangonomiya-kokomi': 'support'},
            {'kaedehara-kazuha': 'support'}
        ],
        [
            {'ganyu': 'mainDps'},
            {'shenhe': 'support'},
            {'sangonomiya-kokomi': 'support'},
            {'venti': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercentOrEnergyRecharge','hpPercent', 'hpPercentOrHealingBonus'],
        subStatsArtifacts: ['hpPercent','energyRecharge'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'sayu',
        function: 'support',
        bestWeapon: 'Favonius Greatsword',
        otherWeapons: ['Katsuragikiri Nagamasa','Skyward Pride','Sacrificial Greatsword'],
        bestArtifacts: 'Viridescent Venerer',
        otherArtifacts: ['Noblesse Oblige', 'Ocean-Hued Clam'],
        teams: [[
            {'keqing': 'mainDps'},
            {'nahida': 'subDps'},
            {'fischl': 'subDps'},
            {'sayu': 'support'}
        ],
        [
            {'arlecchino': 'mainDps'},
            {'yelan': 'subDps'},
            {'zhongli': 'support'},
            {'sayu': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'anemo',
        mainStatsArtifacts: ['energyRechargeOrElementalMastery','atkPercentOrElementalMastery', 'healingBonusOrCritRate'],
        subStatsArtifacts: ['energyRecharge', 'atkPercent','elementalMastery','critRate'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4',
        rank: 'c'
    },
    {
        name: 'sethos',
        function: 'mainDps',
        bestWeapon: 'Hunters Path',
        otherWeapons: ['Slingshot','Astral Vultures Crimson Plumage','The First Great Magic'],
        bestArtifacts: 'Wanderers Troupe',
        otherArtifacts: ['Desert Pavilion Chronicle', 'Gilded Dreams'],
        teams: [[
            {'sethos': 'mainDps'},
            {'fischl': 'subDps'},
            {'kirara': 'support'},
            {'sucrose': 'support'}
        ],
        [
            {'sethos': 'mainDps'},
            {'fischl': 'subDps'},
            {'nahida': 'subDps'},
            {'xilonen': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','normalAttack','elementalSkill'],
        elementType: 'electro',
        mainStatsArtifacts: ['elementalMasteryOrEnergyRecharge','electroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage', 'atkPercent','energyRecharge','elementalMastery'],
        weapon: 'WEAPON_BOW',
        rarity: '4',
        rank: 'c'
    },
    {
        name: 'shenhe',
        function: 'support',
        bestWeapon: 'Calamity Queller',
        otherWeapons: ['Favonius Lance','Engulfing Lightning','Skyward Spine'],
        bestArtifacts: 'Noblesse Oblige',
        otherArtifacts: ['Blizzard Strayer'],
        twoPieces: ['Emblem of Severed Fate', 'Gladiators Finale'],
        teams: [[
            {'ganyu': 'mainDps'},
            {'rosaria': 'subDps'},
            {'mona': 'subDps'},
            {'shenhe': 'support'}
        ],
        [
            {'kamisato-ayaka': 'mainDps'},
            {'sangonomiya-kokomi': 'support'},
            {'kaedehara-kazuha': 'support'},
            {'shenhe': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','atkPercent', 'atkPercent'],
        subStatsArtifacts: ['critRate', 'atkPercent','energyRecharge', 'atk'],
        weapon: 'WEAPON_POLE',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'shikanoin-heizou',
        function: 'mainDps',
        bestWeapon: 'Sunny Morning Sleep-In',
        otherWeapons: ['A Thousand Floating Dreams','Sacrificial Fragments','Wandering Evenstar'],
        bestArtifacts: 'Viridescent Venerer',
        otherArtifacts: ['Instructor', 'Noblesse Oblige'],
        teams: [[
            {'shikanoin-heizou': 'mainDps'},
            {'yelan': 'subDps'},
            {'yae-miko': 'subDps'},
            {'kuki-shinobu': 'support'}
        ],
        [
            {'shikanoin-heizou': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'fischl': 'subDps'},
            {'beidou': 'subDps'}
        ]
        ],
        talentPriority: ['elementalSkill','normalAttack','elementalBurst'],
        elementType: 'anemo',
        mainStatsArtifacts: ['elementalMastery','elementalMastery', 'elementalMastery'],
        subStatsArtifacts: ['elementalMastery', 'atkPercent','energyRecharge', 'critRate'],
        weapon: 'WEAPON_CATALYST',
        rarity: '4',
        rank: 'c'
    },
    {
        name: 'sigewinne',
        function: 'support',
        bestWeapon: 'Silvershower Heartstrings',
        otherWeapons: ['Sequence of Solitude','Recurve Bow','Favonius Warbow'],
        bestArtifacts: 'Ocean-Hued Clam',
        otherArtifacts: ['Song of Days Past', 'Tenacity of the Millelith'],
        teams: [[
            {'navia': 'mainDps'},
            {'furina': 'subDps'},
            {'xilonen': 'subDps'},
            {'sigewinne': 'support'}
        ],
        [
            {'alhaitham': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'nilou': 'support'},
            {'sigewinne': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercentOrEnergyRecharge','hydroBonusOrHpPercent', 'hpPercentOrCritRate'],
        subStatsArtifacts: ['energyRecharge', 'hpPercent',  'critRate'],
        weapon: 'WEAPON_BOW',
        rarity: '5',
        rank: 'b'
    },
    {
        name: 'skirk',
        function: 'mainDps',
        bestWeapon: 'Azurelight',
        otherWeapons: ['Haran Geppaku Futsu','Finale of the Deep','Calamity of Eshu'],
        bestArtifacts: 'Finale of the Deep Galleries',
        otherArtifacts: ['Marechaussee Hunter', 'Blizzard Strayer'],
        teams: [[
            {'skirk': 'mainDps'},
            {'furina': 'subDps'},
            {'escoffier': 'subDps'},
            {'citlali': 'support'}
        ],
        [
            {'skirk': 'mainDps'},
            {'furina': 'subDps'},
            {'escoffier': 'subDps'},
            {'dahlia': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercent','cryoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank:'s'
    },
    {
        name: 'tartaglia',
        function: 'mainDps',
        bestWeapon: 'Polar Star',
        otherWeapons: ['Hunters Path','Astral Vultures Crimson Plumage','The Viridescent Hunt'],
        bestArtifacts: 'Nymphs Dream',
        otherArtifacts: ['Heart of Depth'],
        twoPieces: ['Gladiators Finale', 'Heart of Depth'],
        teams: [[
            {'tartaglia': 'mainDps'},
            {'xiangling': 'subDps'},
            {'kaedehara-kazuha': 'support'},
            {'bennett': 'support'}
        ],
        [
            {'tartaglia': 'mainDps'},
            {'beidou': 'subDps'},
            {'fischl': 'subDps'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['atkPercent','hydroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage', 'atkPercent','energyRecharge','elementalMastery'],
        weapon: 'WEAPON_BOW',
        rarity: '5',
        rank:'b'
    },
    {
        name: 'sucrose',
        function: 'support',
        bestWeapon: 'Sunny Morning Sleep-In',
        otherWeapons: ['A Thousand Floating Dreams','Sacrificial Fragments', 'Wandering Evenstar'],
        bestArtifacts: 'Viridescent Venerer',
        otherArtifacts: ['Instructor'],
        twoPieces: ['Gilded Dreams', 'Wanderers Troupe'],
        teams: [[
            {'arlecchino': 'mainDps'},
            {'yelan': 'subDps'},
            {'sucrose': 'support'},
            {'bennett': 'support'}
        ],
        [
            {'tartaglia': 'mainDps'},
            {'xiangling': 'subDps'},
            {'sucrose': 'support'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'anemo',
        mainStatsArtifacts: ['elementalMastery','elementalMastery', 'elementalMastery'],
        subStatsArtifacts: ['atkPercent','energyRecharge', 'elementalMastery'],
        weapon: 'WEAPON_CATALYST',
        rarity: '4',
        rank: 'a'
    },
    {
        name: 'thoma',
        function: 'support',
        bestWeapon: 'Favonius Lance',
        otherWeapons: ['Engulfing Lightning','The Catch','Kitain Cross Spear'],
        bestArtifacts: 'Noblesse Oblige',
        otherArtifacts: ['Instructor', 'Deepwood Memories'],
        teams: [[
            {'yoimiya': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'sucrose': 'support'},
            {'thoma': 'support'}
        ],
        [
            {'arlecchino': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'bennett': 'support'},
            {'thoma': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'pyro',
        mainStatsArtifacts: ['hpPercentOrEnergyRecharge','hpPercent', 'hpPercentOrCritRate'],
        subStatsArtifacts: ['hpPercent','energyRecharge', 'hp', 'critRate'],
        weapon: 'WEAPON_POLE',
        rarity: '4',
        rank: 'b'
    },
    {
        name: 'tighnari',
        function: 'mainDps',
        bestWeapon: 'Hunters Path',
        otherWeapons: ['Astral Vultures Crimson Plumage','Aqua Simulacra','Fading Twilight'],
        bestArtifacts: 'Wanderers Troupe',
        otherArtifacts: ['Gilded Dreams', 'Emblem of Severed Fate'],
        teams: [
            [
                {'tighnari': 'mainDps'},
                {'yae-miko': 'subDps'},
                {'nahida': 'subDps'},
                {'baizhu': 'support'}
            ],
            [
                {'tighnari': 'mainDps'},
                {'fischl': 'subDps'},
                {'nahida': 'subDps'},
                {'zhongli': 'support'}
            ]
        ],
        talentPriority: ['normalAttack','elementalBurst','elementalSkill'],
        elementType: 'dendro',
        mainStatsArtifacts: ['atkPercentOrElementalMastery','dendroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage', 'elementalMastery','atkPercent','energyRecharge'],
        weapon: 'WEAPON_BOW',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'traveler-anemo',
        function: 'support',
        bestWeapon: 'Freedom-Sworn',
        otherWeapons: ['Xiphos Moonlight','Iron Sting','Sacrificial Sword'],
        bestArtifacts: 'Viridescent Venerer',
        otherArtifacts: ['Instructor'],
        twoPieces: ['Gilded Dreams', 'Wanderers Troupe'],
        teams: [[
            {'xiao': 'mainDps'},
            {'traveler-anemo': 'support'},
            {'zhongli': 'support'},
            {'bennett': 'support'}
        ],
        [
            {'kamisato-ayaka': 'mainDps'},
            {'traveler-anemo': 'support'},
            {'shenhe': 'support'},
            {'sangonomiya-kokomi': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'anemo',
        mainStatsArtifacts: ['elementalMastery','elementalMastery', 'elementalMastery'],
        subStatsArtifacts: ['elementalMastery','energyRecharge', 'atkPercent' , 'atk'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 'd'
    },
    {
        name: 'traveler-geo',
        function: 'subDps',
        bestWeapon: 'Primordial Jade Cutter',
        otherWeapons: ['Mistsplitter Reforged','Wolf-Fang','Fleuve Cendre Ferryman'],
        bestArtifacts: 'Nighttime Whispers in the Echoing Woods',
        otherArtifacts: ['Emblem of Severed Fate', 'Noblesse Oblige'],
        teams: [[
            {'navia': 'mainDps'},
            {'traveler-geo': 'subDps'},
            {'xiangling': 'subDps'},
            {'bennett': 'support'}
        ],
        [
            {'xiao': 'mainDps'},
            {'traveler-geo': 'subDps'},
            {'faruzan': 'support'},
            {'zhongli': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'geo',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','geoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 'd'
    },
    {
        name: 'traveler-electro',
        function: 'support',
        bestWeapon: 'Freedom-Sworn',
        otherWeapons: ['Favonius Sword','Sacrificial Sword','Skyward Blade'],
        bestArtifacts: 'Emblem of Severed Fate',
        otherArtifacts: ['Noblesse Oblige', 'Instructor'],
        teams: [[
            {'clorinde': 'mainDps'},
            {'nahida': 'subDps'},
            {'traveler-electro': 'support'},
            {'kaedehara-kazuha': 'support'}
        ],
        [
            {'clorinde': 'mainDps'},
            {'nahida': 'subDps'},
            {'traveler-electro': 'support'},
            {'kaedehara-kazuha': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'electro',
        mainStatsArtifacts: ['energyRecharge','electroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 'c'
    },
    {
        name: 'traveler-dendro',
        function: 'support',
        bestWeapon: 'Freedom-Sworn',
        otherWeapons: ['Xiphos Moonlight','Favonius Sword','Sacrificial Sword'],
        bestArtifacts: 'Deepwood Memories',
        otherArtifacts: ['Gilded Dreams', 'The Exile'],
        teams: [[
            {'tartaglia': 'mainDps'},
            {'fischl': 'subDps'},
            {'traveler-dendro': 'support'},
            {'kuki-shinobu': 'support'}
        ],
        [
            {'kamisato-ayato': 'mainDps'},
            {'raiden-shogun': 'subDps'},
            {'traveler-dendro': 'support'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'dendro',
        mainStatsArtifacts: ['energyRechargeOrElementalMastery','dendroBonusOrElementalMastery', 'elementalMasteryOrCritRate'],
        subStatsArtifacts: ['critRate','critDamage', 'elementalMastery','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 'b'
    },
    {
        name: 'traveler-hydro',
        function: 'support',
        bestWeapon: 'Favonius Sword',
        otherWeapons: ['Fleuve Cendre Ferryman','Skyward Blade','Sacrificial Sword'],
        bestArtifacts: 'Instructor',
        otherArtifacts: ['Noblesse Oblige','Tenacity of the Millelith'],
        teams: [[
            {'ganyu': 'mainDps'},
            {'shenhe': 'support'},
            {'traveler-hydro': 'support'},
            {'venti': 'support'}
        ],
        [
            {'kamisato-ayaka': 'mainDps'},
            {'diona': 'support'},
            {'traveler-hydro': 'support'},
            {'kaedehara-kazuha': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'hydro',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','hydroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 'd'
    },
    {
        name: 'traveler-pyro',
        function: 'support',
        bestWeapon: 'Favonius Sword',
        otherWeapons: ['Peak Patrol Song','Key of Khaj-Nisut','Sacrificial Sword'],
        bestArtifacts: 'Scroll of the Hero of Cinder City',
        otherArtifacts: ['Noblesse Oblige','Instructor'],
        teams: [[
            {'kinich': 'mainDps'},
            {'emilie': 'subDps'},
            {'traveler-pyro': 'support'},
            {'bennett': 'support'}
        ],
        [
            {'wriothesley': 'mainDps'},
            {'furina': 'subDps'},
            {'traveler-pyro': 'support'},
            {'xilonen': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','pyroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 'b'
    },
    {
        name: 'varesa',
        function: 'mainDps',
        bestWeapon: 'Vivid Notions',
        otherWeapons: ['Lost Prayer to the Sacred Winds','The Widsith','Skyward Atlas'],
        bestArtifacts: 'Long Nights Oath',
        otherArtifacts: ['Obsidian Codex', 'Thundering Fury'],
        teams: [[
            {'varesa': 'mainDps'},
            {'furina': 'subDps'},
            {'iansan': 'support'},
            {'xianyun': 'support'}
        ],
        [
            {'varesa': 'mainDps'},
            {'xiangling': 'subDps'},
            {'iansan': 'support'},
            {'chevreuse': 'support'}
        ]
        ],
        talentPriority: ['normalAttack','elementalBurst', 'elementalSkill'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercent','electroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage', 'atkPercent','energyRecharge','elementalMastery'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'venti',
        function: 'support',
        bestWeapon: 'Elegy for the End',
        otherWeapons: ['The Stringless','Fading Twilight','Favonius Warbow'],
        bestArtifacts: 'Viridescent Venerer',
        otherArtifacts: ['Instructor'],
        twoPieces: ['Gilded Dreams', 'Wanderers Troupe'],
        teams: [[
            {'ganyu': 'mainDps'},
            {'furina': 'subDps'},
            {'diona': 'support'},
            {'venti': 'support'}
        ],
        [
            {'kamisato-ayaka': 'mainDps'},
            {'mona': 'subDps'},
            {'diona': 'support'},
            {'venti': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst', 'elementalSkill'],
        elementType: 'anemo',
        mainStatsArtifacts: ['elementalMastery','elementalMastery', 'elementalMastery'],
        subStatsArtifacts: ['elementalMastery', 'energyRecharge','atkPercent'],
        weapon: 'WEAPON_BOW',
        rarity: '5',
        rank: 'b'
    },
    {
        name: 'wanderer',
        function: 'mainDps',
        bestWeapon: 'Tulaytullahs Remembrance',
        otherWeapons: ['Lost Prayer to the Sacred Winds','Cashflow Supervision','The Widsith'],
        bestArtifacts: 'Desert Pavilion Chronicle',
        otherArtifacts: ['Shimenawas Reminiscence', 'Echoes of an Offering'],
        teams: [[
            {'wanderer': 'mainDps'},
            {'furina': 'subDps'},
            {'faruzan': 'support'},
            {'bennett': 'support'}
        ],
        [
            {'wanderer': 'mainDps'},
            {'zhongli': 'support'},
            {'faruzan': 'support'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['normalAttack','elementalSkill','elementalBurst'],
        elementType: 'anemo',
        mainStatsArtifacts: ['atkPercent','anemoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5',
        rank: 'b'
    },
    {
        name: 'wriothesley',
        function: 'mainDps',
        bestWeapon: 'Cashflow Supervision',
        otherWeapons: ['Tulaytullahs Remembrance','Lost Prayer to the Sacred Winds','The Widsith'],
        bestArtifacts: 'Marechaussee Hunter',
        otherArtifacts: ['Unfinished Reverie', 'Shimenawas Reminiscence'],
        teams: [[
            {'wriothesley': 'mainDps'},
            {'xiangling': 'subDps'},
            {'xilonen': 'support'},
            {'bennett': 'support'}
        ],
        [
            {'wriothesley': 'mainDps'},
            {'furina': 'subDps'},
            {'xilonen': 'support'},
            {'shenhe': 'support'}
        ]
        ],
        talentPriority: ['normalAttack','elementalSkill','elementalBurst'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercentOrElementalMastery','cryoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage', 'atkPercent','energyRecharge','elementalMastery'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'xiangling',
        function: 'subDps',
        bestWeapon: 'Staff of the Scarlet Sands',
        otherWeapons: ['Engulfing Lightning','Staff of Homa','The Catch'],
        bestArtifacts: 'Emblem of Severed Fate',
        otherArtifacts: ['Crimson Witch of Flames', 'Gilded Dreams'],
        teams: [[
            {'tartaglia': 'mainDps'},
            {'xiangling': 'subDps'},
            {'kaedehara-kazuha': 'support'},
            {'bennett': 'support'}
        ],
        [
            {'kamisato-ayato': 'mainDps'},
            {'xiangling': 'subDps'},
            {'zhongli': 'support'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','pyroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_POLE',
        rarity: '4',
        rank: 's'
    },
    {
        name: 'xianyun',
        function: 'support',
        bestWeapon: 'Cranes Echoing Call',
        otherWeapons: ['Favonius Codex','Oathsworn Eye','Wine and Song'],
        bestArtifacts: 'Viridescent Venerer',
        otherArtifacts: ['Noblesse Oblige', 'Song of Days Past'],
        teams: [[
            {'varesa': 'mainDps'},
            {'furina': 'subDps'},
            {'iansan': 'support'},
            {'xianyun': 'support'}
        ],
        [
            {'xiao': 'mainDps'},
            {'furina': 'subDps'},
            {'faruzan': 'support'},
            {'xianyun': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'anemo',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','atkPercent', 'atkPercent'],
        subStatsArtifacts: ['critRate', 'atkPercent','energyRecharge','atk'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'xiao',
        function: 'mainDps',
        bestWeapon: 'Primordial Jade Winged-Spear',
        otherWeapons: ['Staff of Homa','Deathmatch','Blackcliff Pole'],
        bestArtifacts: 'Long Nights Oath',
        otherArtifacts: ['Vermillion Hereafter', 'Marechaussee Hunter'],
        teams: [[
            {'xiao': 'mainDps'},
            {'furina': 'subDps'},
            {'faruzan': 'support'},
            {'xianyun': 'support'}
        ],
        [
            {'xiao': 'mainDps'},
            {'bennett': 'support'},
            {'faruzan': 'support'},
            {'zhongli': 'support'}
        ]
        ],
        talentPriority: ['normalAttack','elementalBurst','elementalSkill'],
        elementType: 'anemo',
        mainStatsArtifacts: ['atkPercent','anemoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_POLE',
        rarity: '5',
        rank: 'b'
    },
    {
        name: 'xilonen',
        function: 'support',
        bestWeapon: 'Peak Patrol Song',
        otherWeapons: ['Freedom-Sworn','Favonius Sword','Flute of Ezpitzal'],
        bestArtifacts: 'Scroll of the Hero of Cinder City',
        otherArtifacts: ['Archaic Petra', 'Noblesse Oblige'],
        teams: [[
            {'neuvillette': 'mainDps'},
            {'furina': 'subDps'},
            {'xilonen': 'support'},
            {'kaedehara-kazuha': 'support'}
        ],
        [
            {'mavuika': 'mainDps'},
            {'furina': 'subDps'},
            {'xilonen': 'support'},
            {'citlali': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'geo',
        mainStatsArtifacts: ['defPercentOrEnergyRecharge','defPercent', 'defPercent'],
        subStatsArtifacts: ['critRate','defPercent', 'def','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '5',
        rank: 's'
    },
    {
        name: 'xingqiu',
        function: 'subDps',
        bestWeapon: 'Primordial Jade Cutter',
        otherWeapons: ['Mistsplitter Reforged','Favonius Sword','Sacrificial Sword'],
        bestArtifacts: 'Emblem of Severed Fate',
        otherArtifacts: ['Noblesse Oblige', 'Scroll of the Hero of Cinder City'],
        teams: [[
            {'hu-tao': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'yelan': 'subDps'},
            {'sucrose': 'support'}
        ],
        [
            {'nahida': 'subDps'},
            {'xingqiu': 'subDps'},
            {'yelan': 'subDps'},
            {'kuki-shinobu': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'hydro',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','hydroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_SWORD_ONE_HAND',
        rarity: '4',
        rank: 's'
    },
    {
        name: 'xinyan',
        function: 'mainDps',
        bestWeapon: 'Redhorn Stonethresher',
        otherWeapons: ['Serpent Spine','Skyward Pride','Tidal Shadow'],
        bestArtifacts: 'Pale Flame',
        otherArtifacts: [],
        twoPieces: ['Bloodstained Chivalry', 'Pale Flame', 'Emblem of Severed Fate', 'Pale Flame'],
        teams: [[
            {'xinyan': 'mainDps'},
            {'fischl': 'subDps'},
            {'rosaria': 'subDps'},
            {'bennett': 'support'}
        ],
        [
            {'xinyan': 'mainDps'},
            {'fischl': 'subDps'},
            {'xingqiu': 'subDps'},
            {'sucrose': 'support'}
        ]
        ],
        talentPriority: ['normalAttack','elementalBurst','elementalSkill'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','physicalDamageBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage','defPercent', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_CLAYMORE',
        rarity: '4',
        rank: 'd'
    },
    {
        name: 'yae-miko',
        function: 'subDps',
        bestWeapon: 'Kaguras Verity',
        otherWeapons: ['Skyward Atlas','Solar Pearl','The Widsith'],
        bestArtifacts: 'Golden Troupe',
        otherArtifacts: ['Gilded Dreams', 'Emblem of Severed Fate'],
        teams: [[
            {'tartaglia': 'mainDps'},
            {'yae-miko': 'subDps'},
            {'fischl': 'subDps'},
            {'sucrose': 'support'}
        ],
        [
            {'alhaitham': 'mainDps'},
            {'yae-miko': 'subDps'},
            {'fischl': 'subDps'},
            {'nahida': 'subDps'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'electro',
        mainStatsArtifacts: ['atkPercentOrEnergyRecharge','electroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage', 'atkPercent','energyRecharge','elementalMastery'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'yanfei',
        function: 'mainDps',
        bestWeapon: 'Surfs Up',
        otherWeapons: ['Tome of the Eternal Flow','Cashflow Supervision','The Widsith'],
        bestArtifacts: 'Crimson Witch of Flames',
        otherArtifacts: ['Gilded Dreams', 'Wanderers Troupe'],
        teams: [[
            {'yanfei': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'yelan': 'subDps'},
            {'bennett': 'support'}
        ],
        [
            {'yanfei': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'fischl': 'subDps'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['normalAttack','elementalBurst','elementalSkill'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercentOrElementalMastery','pyroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage', 'atkPercent','energyRecharge','elementalMastery'],
        weapon: 'WEAPON_CATALYST',
        rarity: '4',
        rank: 'c'
    },
    {
        name: 'yaoyao',
        function: 'support',
        bestWeapon: 'Favonius Lance',
        otherWeapons: ['Dialogues of the Desert Sages','Rightful Reward','Kitain Cross Spear'],
        bestArtifacts: 'Deepwood Memories',
        otherArtifacts: ['Tenacity of the Millelith', 'Instructor'],
        teams: [[
            {'cyno': 'mainDps'},
            {'nahida': 'subDps'},
            {'fischl': 'subDps'},
            {'yaoyao': 'support'}
        ],
        [
            {'alhaitham': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'nilou': 'support'},
            {'yaoyao': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'dendro',
        mainStatsArtifacts: ['hpPercentOrEnergyRecharge','hpPercent', 'hpPercentOrHealingBonus'],
        subStatsArtifacts: ['critRate','hpPercent','energyRecharge', 'elementalMastery'],
        weapon: 'WEAPON_POLE',
        rarity: '4',
        rank: 'b'
    },
    {
        name: 'yelan',
        function: 'subDps',
        bestWeapon: 'Aqua Simulacra',
        otherWeapons: ['Elegy for the End','Favonius Warbow','Mouuns Moon'],
        bestArtifacts: 'Emblem of Severed Fate',
        otherArtifacts: [],
        twoPieces: ['Tenacity of the Millelith', 'Emblem of Severed Fate', 'Heart of Depth', 'Emblem of Severed Fate'],
        teams: [[
            {'hu-tao': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'yelan': 'subDps'},
            {'zhongli': 'support'}
        ],
        [
            {'hu-tao': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'yelan': 'subDps'},
            {'kaedehara-kazuha': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill','normalAttack'],
        elementType: 'hydro',
        mainStatsArtifacts: ['hpPercentOrEnergyRecharge','hydroBonusOrHpPercent', 'hpPercentOrCritRateOrCritDamage'],
        subStatsArtifacts: ['critRate','critDamage', 'hpPercent','energyRecharge'],
        weapon: 'WEAPON_BOW',
        rarity: '5',
        rank: 's'
    },
    {
        name: 'yoimiya',
        function: 'mainDps',
        bestWeapon: 'Thundering Pulse',
        otherWeapons: ['Aqua Simulacra','Hunters Path','Rust'],
        bestArtifacts: 'Shimenawas Reminiscence',
        otherArtifacts: ['Crimson Witch of Flames', 'Echoes of an Offering'],
        teams: [[
            {'yoimiya': 'mainDps'},
            {'xingqiu': 'subDps'},
            {'kaedehara-kazuha': 'support'},
            {'bennett': 'support'}
        ],
        [
            {'yoimiya': 'mainDps'},
            {'yelan': 'subDps'},
            {'yun-jin': 'support'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['normalAttack', 'elementalSkill'],
        elementType: 'pyro',
        mainStatsArtifacts: ['atkPercentOrElementalMastery','pyroBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage', 'atkPercent','elementalMastery','energyRecharge'],
        weapon: 'WEAPON_BOW',
        rarity: '5',
        rank: 'b'
    },
    {
        name: 'yumemizuki-mizuki',
        function: 'support',
        bestWeapon: 'Sunny Morning Sleep-In',
        otherWeapons: ['Starcallers Watch','A Thousand Floating Dreams','Sacrificial Fragments'],
        bestArtifacts: 'Viridescent Venerer',
        teams: [[
            {'mavuika': 'mainDps'},
            {'furina': 'subDps'},
            {'ororon': 'subDps'},
            {'yumemizuki-mizuki': 'support'}
        ],
        [
            {'fischl': 'subDps'},
            {'furina': 'subDps'},
            {'ororon': 'subDps'},
            {'yumemizuki-mizuki': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'anemo',
        mainStatsArtifacts: ['elementalMasteryOrEnergyRecharge','elementalMastery', 'elementalMastery'],
        subStatsArtifacts: ['energyRecharge', 'elementalMastery'],
        weapon: 'WEAPON_CATALYST',
        rarity: '5',
        rank: 'b'
    },
    {
        name: 'yun-jin',
        function: 'support',
        bestWeapon: 'Engulfing Lightning',
        otherWeapons: ['Favonius Lance','Footprint of the Rainbow','The Catch'],
        bestArtifacts: 'Husk of Opulent Dreams',
        otherArtifacts: ['Noblesse Oblige', 'Retracing Bolide'],
        teams: [[
            {'arlecchino': 'mainDps'},
            {'yelan': 'subDps'},
            {'yun-jin': 'support'},
            {'bennett': 'support'}
        ],
        [
            {'noelle': 'mainDps'},
            {'furina': 'subDps'},
            {'yun-jin': 'support'},
            {'gorou': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'geo',
        mainStatsArtifacts: ['defPercentOrEnergyRecharge','defPercent', 'defPercent'],
        subStatsArtifacts: ['critRate', 'defPercent','energyRecharge'],
        weapon: 'WEAPON_POLE',
        rarity: '4',
        rank: 'b'
    },
    {
        name: 'zhongli',
        function: 'support',
        bestWeapon: 'Black Tassel',
        otherWeapons: ['Favonius Lance','Staff of Homa','Skyward Spine'],
        bestArtifacts: 'Tenacity of the Millelith',
        otherArtifacts: ['Archaic Petra', 'Scroll of the Hero of Cinder City'],
        teams: [[
            {'arataki-itto': 'mainDps'},
            {'albedo': 'subDps'},
            {'gorou': 'support'},
            {'zhongli': 'support'}
        ],
        [
            {'hu-tao': 'mainDps'},
            {'yelan': 'subDps'},
            {'xingqiu': 'subDps'},
            {'zhongli': 'support'}
        ]
        ],
        talentPriority: ['elementalSkill','elementalBurst'],
        elementType: 'geo',
        mainStatsArtifacts: ['hpPercent','hpPercent', 'hpPercent'],
        subStatsArtifacts: ['hpPercent','hp','energyRecharge'],
        weapon: 'WEAPON_POLE',
        rarity: '5',
        rank: 'a'
    },
    {
        name: 'aloy',
        function: 'mainDps',
        bestWeapon: 'Polar Star',
        otherWeapons: ['Skyward Harp','The Stringless','Alley Hunter'],
        bestArtifacts: 'Emblem of Severed Fate',
        otherArtifacts: ['Gilded Dreams'],
        twoPieces: ['Blizzard Strayer', 'Wanderers Troupe'],
        teams: [[
            {'aloy': 'mainDps'},
            {'xiangling': 'subDps'},
            {'kaedehara-kazuha': 'support'},
            {'bennett': 'support'}
        ],
        [
            {'aloy': 'mainDps'},
            {'rosaria': 'subDps'},
            {'jean': 'support'},
            {'bennett': 'support'}
        ]
        ],
        talentPriority: ['elementalBurst','elementalSkill'],
        elementType: 'cryo',
        mainStatsArtifacts: ['atkPercentOrElementalMastery','cryoBonus', 'critRateOrDamage'],
        subStatsArtifacts: ['critRateOrDamage','elementalMastery', 'atkPercent','energyRecharge'],
        weapon: 'WEAPON_BOW',
        rarity: '5',
        rank: 'd'
    },
]
  