
### Aussen
Sain und Jurek werden auf dem Platz von Katusha Stephans, der Verterterin der Living Vanguards begrüsst.

"Vielen Dank, edle AbenteurerInnen, dass ihr den weiten Weg aus eurer Stadt in Kauf genommen habt, um uns hier zu helfen. Ich hoffe ihr hattet eine gute Reise?"

"Diesen Dungeon plagt uns schon seit Ewigkeiten. Wir könne zwar die gelegentlichen Überfälle auf unsere Dörfer abwenden, doch wir konnten noch nie das Nest auslöschen. Es tut uns leid, dass wir euch für euer Risiko keine angemessene Entlohnung bieten können, wir haben leider schon zu viel verloren und besitzen selbst nichts wertvolles mehr" sad facde
"Aber ihr solltet ihr ungestört übernachten können, um dann morgen in den Dungeon zu gehen"

- Es wird langsam Abend, nächsten morgen sollten sie rein

### Erster Raum
Als ihr in den Raum kommt, seht ihr in der Mitte ein Altar mit einer Leiche drauf. Etwas rötliches hat eine Lache unterhalb des Altars gebildet. Zu euren linken seht ihr eine Bücherschrankreihe. 
- In der Kiste befindet sich nur unnötiges.
- Die Leichen haben keine Wertvolle Gegenstände.
### Rätsel Raum
Lösung des Rätsels: 4,3, 1, 2
Magischer Schaden bei Falsch Lösen:
Dex Save Throw DC 13: 1d4  sonst 2d4

Schild steht: 
Ich tanze mit dem Wind, doch bleibe nie an einem Ort. Mein Zyklus ist stetig, doch jedes Mal anders. Ich verändere das Land, indem ich es neu erfinde, mal mit Frost, mal mit Feuer, mal in Farben, die nie bleiben. Wer mich fängt, verliert mich bald. 

### Fallen Raum
Bodenfallen: 1d4 Dex dc 15: +2
Wandfallen: 1d6 Dex dc 15: +2
Pfeilfallen: 1d8 Dex dc 15: +2

Hinweis: 
Ich bin ein Freund des Überflusses,  
Doch oft bringt mein Streben nur Unglück.  
Ich nehme, was ich kriegen kann,  
Ohne zu fragen, was der Preis dann war.  
Was du mir gibst, will ich immer mehr,  
Doch von meinem Hunger wirst du nie mehr leer.  
Manchmal sehe ich aus wie ein leuchtender Stern,  
Doch nähre mich mit Schmerz und Fern.  
Verwende mich lieber nicht!

Statuen:
```statblock
image: "[[Gargoyle.jpg]]"
forceColumns: 2
columnWidth: 320px
name: Warrior Statue
creature: Gargoyle
```

w
### Heiliger Raum
```statblock
image: "[[Cult-Fanatic.jpeg]]"
forceColumns: 2
columnWidth: 320px
name: Statue
creature: Cult Fanatic
```
HP: 45dw




### Alchemie Room
####    Alchemist

```statblock
image: "[[Wight.webp]]"
forceColumns: 2
columnWidth: 320px
name: Wight
creature: Wight
```

####    Zombie
```statblock
image: "[[Zombie.jpg]]"
forceColumns: 2
columnWidth: 320px
name: Zombie
creature: Zombie
```




---
### Boss Kampf


First Phase:
```statblock
layout: Basic 5e Layout
image: "[[Quagath.jpg]]"
forceColumns: 2
columnWidth: 320px
name: Quaggoth Thonot
size: Medium
type: Humanoid
subtype: Quaggoth
alignment: Chaotic Neutral
ac: 19 (natural armor)
hp: 83
hit_dice: 6d8+18
speed: 30 ft., climb 30 ft.
stats: [17, 12, 16, 6, 12, 7]
fage_stats: 
saves:
  - STR: +5
  - CON: +5
skillsaves:
  - Athletics: +5
damage_vulnerabilities: 
damage_resistances: 
damage_immunities: Poison
condition_immunities: Poisoned
senses: Darkvision 120 ft., Passive Perception 11
languages: Undercommon
cr: 3 (700 XP)
spells:
  - At will: Feather Fall, Mage Hand (invisible)
  - 1/day each: Cure Wounds, Enlarge/Reduce, Heat Metal, Mirror Image
traits:
  - name: Wounded Fury
    desc: While it has 25 hit points or fewer, Attacks or Spells against quaggoth have disadventage. 
  - name: Innate Spellcasting (Psionics)
    desc: The quaggoth's innate spellcasting ability is Wisdom (spell save DC 11). The quaggoth can innately cast the listed spells, requiring no components.
actions:
  - name: Multiattack
    desc: The quaggoth makes two claw attacks.
  - name: Claw
    desc: "_Melee Weapon Attack:_ +5 to hit, reach 5 ft., one target. _Hit:_ 6 (1d6 + 3) slashing damage."
legendary_actions: 
bonus_actions: 
reactions: 

```



Second Phase:
```statblock
layout: Basic 5e Layout
monster: Demon 
forceColumns: 2
columnWidth: 300px
image: "[[Demon-Dungeon.jpg]]"

name: Demon
size: Huge
type: Medium fiend
subtype: Demon
alignment: chaotic evil
ac: 24
hp: 62
speed: 30ft
stats: [17, 12, 16, 12,17]
fage_stats: 
saves:
  - WIS: +5 
  - CHA: +6 
damage_vulnerabilities: 
damage_resistances: 
damage_immunities: fire, poisen
condition_immunities: poisened
senses: Passive Perception 11, Darkvision
languages: Common, Abyssal
cr: 5
traits:
  - name: Multiattack
    desc: This creature can attack 4 Times
  - name: Telepathy
    desc: This creature can talk telepathically 120ft distance
actions:
  - name: Claw
    desc: "_Melee Weapon Attack:_ +6 to hit, reach 5 ft., one target. _Hit:_ 10 (2d6 + 3) slashing damage."
  - name: Demon Scythe
    desc: "_Ranged Spell Attack:_ +6 to hit, range 60 ft., one target. _Hit:_ 11 (2d10) necrotic damage."
legendary_actions:
  - name: Slur the religion
    desc: "_Verbal Attack:_+6 to hit, hearing distance, target all. Hit: 10 (2d6 + 3). You get +3 DMG if character is in connection to a Holy Beeing. psychic damage. Limited to once every turn."
reactions: 
  - name: Devour
    desc: "Eat the creature that summened you, killing it immediatly."
bonus_actions:
  - name: Change 
    desc: Change the environment
```

Demon
Jurek
Hugo
Demon
Demon
Saian
Demon





### Party Encounter

