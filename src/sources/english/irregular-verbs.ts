export function getIrregularVerbs(): Array<[string, string, string]> {
  const getItem = (item: any, el: string) => item[el].verb
    .split('/')
    .map((i: string) => i.trim())[0];

  return Object.values(irregularVerbs())
    .reduce((acc: Array<[string, string, string]>, item: Verbs[keyof Verbs]) => {
      return acc.concat([[
        getItem(item, 'first'),
        getItem(item, 'second'),
        getItem(item, 'third'),
      ]]);
    }, []);
}

type Verbs = ReturnType<typeof irregularVerbs>;

function irregularVerbs() {
  return {
    "abide": {
      "first": {
        "verb": "abide",
        "transcription": null
      },
      "second": {
        "verb": "abode",
        "transcription": null
      },
      "third": {
        "verb": "abode",
        "transcription": null
      }
    },
    "arise": {
      "first": {
        "verb": "arise",
        "transcription": null
      },
      "second": {
        "verb": "arose",
        "transcription": null
      },
      "third": {
        "verb": "arisen",
        "transcription": null
      }
    },
    "awake": {
      "first": {
        "verb": "awake",
        "transcription": null
      },
      "second": {
        "verb": "awoke",
        "transcription": null
      },
      "third": {
        "verb": "awoken",
        "transcription": null
      }
    },
    "bear": {
      "first": {
        "verb": "bear",
        "transcription": null
      },
      "second": {
        "verb": "bore",
        "transcription": null
      },
      "third": {
        "verb": "borne / born",
        "transcription": null
      }
    },
    "beat": {
      "first": {
        "verb": "beat",
        "transcription": "/bi:t/"
      },
      "second": {
        "verb": "beat",
        "transcription": "/bi:t/"
      },
      "third": {
        "verb": "beaten",
        "transcription": "/'bi:tn/"
      }
    },
    "become": {
      "first": {
        "verb": "become",
        "transcription": "/bɪ 'kʌm/"
      },
      "second": {
        "verb": "became",
        "transcription": "/bɪ 'keɪm/"
      },
      "third": {
        "verb": "become",
        "transcription": "/bɪ 'kʌm/"
      }
    },
    "beget": {
      "first": {
        "verb": "beget",
        "transcription": null
      },
      "second": {
        "verb": "begat / begot",
        "transcription": null
      },
      "third": {
        "verb": "begotten",
        "transcription": null
      }
    },
    "begin": {
      "first": {
        "verb": "begin",
        "transcription": "/bɪ 'gɪn/"
      },
      "second": {
        "verb": "began",
        "transcription": "/bɪ 'gæn/"
      },
      "third": {
        "verb": "begun",
        "transcription": "/bɪ 'gʌn/"
      }
    },
    "bend": {
      "first": {
        "verb": "bend",
        "transcription": "/bend/"
      },
      "second": {
        "verb": "bent",
        "transcription": "/bent/"
      },
      "third": {
        "verb": "bent",
        "transcription": "/bent/"
      }
    },
    "bet": {
      "first": {
        "verb": "bet",
        "transcription": null
      },
      "second": {
        "verb": "bet",
        "transcription": null
      },
      "third": {
        "verb": "bet",
        "transcription": null
      }
    },
    "bid": {
      "first": {
        "verb": "bid",
        "transcription": null
      },
      "second": {
        "verb": "bid / bade",
        "transcription": null
      },
      "third": {
        "verb": "bid / bidden",
        "transcription": null
      }
    },
    "bite": {
      "first": {
        "verb": "bite",
        "transcription": "/baɪt/"
      },
      "second": {
        "verb": "bit",
        "transcription": "/bɪt/"
      },
      "third": {
        "verb": "bitten",
        "transcription": "/'bɪtn/"
      }
    },
    "bleed": {
      "first": {
        "verb": "bleed",
        "transcription": "/bli:d/"
      },
      "second": {
        "verb": "bled",
        "transcription": "/bled/"
      },
      "third": {
        "verb": "bled",
        "transcription": "/bled/"
      }
    },
    "blow": {
      "first": {
        "verb": "blow",
        "transcription": "/blou/"
      },
      "second": {
        "verb": "blew",
        "transcription": "/blu:/"
      },
      "third": {
        "verb": "blown",
        "transcription": "/bloun/"
      }
    },
    "break": {
      "first": {
        "verb": "break",
        "transcription": "/breɪk/"
      },
      "second": {
        "verb": "broke",
        "transcription": "/brouk/"
      },
      "third": {
        "verb": "broken",
        "transcription": "/'broukən/"
      }
    },
    "bring": {
      "first": {
        "verb": "bring",
        "transcription": "/brɪŋ/"
      },
      "second": {
        "verb": "brought",
        "transcription": "/brɔ:t/"
      },
      "third": {
        "verb": "brought",
        "transcription": "/brɔ:t/"
      }
    },
    "broadcast": {
      "first": {
        "verb": "broadcast",
        "transcription": null
      },
      "second": {
        "verb": "broadcast",
        "transcription": null
      },
      "third": {
        "verb": "broadcast",
        "transcription": null
      }
    },
    "build": {
      "first": {
        "verb": "build",
        "transcription": "/bɪld/"
      },
      "second": {
        "verb": "built",
        "transcription": "/bɪlt/"
      },
      "third": {
        "verb": "built",
        "transcription": "/bɪlt/"
      }
    },
    "burn": {
      "first": {
        "verb": "burn",
        "transcription": "/bɜ:rn/"
      },
      "second": {
        "verb": "burnt / burned",
        "transcription": "/bɜ:rnd/"
      },
      "third": {
        "verb": "burnt / burned",
        "transcription": "/bɜ:rnd/"
      }
    },
    "burst": {
      "first": {
        "verb": "burst",
        "transcription": null
      },
      "second": {
        "verb": "burst",
        "transcription": null
      },
      "third": {
        "verb": "burst",
        "transcription": null
      }
    },
    "buy": {
      "first": {
        "verb": "buy",
        "transcription": "/baɪ/"
      },
      "second": {
        "verb": "bought",
        "transcription": "/bɔ:t/"
      },
      "third": {
        "verb": "bought",
        "transcription": "/bɔ:t/"
      }
    },
    "can": {
      "first": {
        "verb": "can",
        "transcription": null
      },
      "second": {
        "verb": "could",
        "transcription": null
      },
      "third": {
        "verb": "could",
        "transcription": null
      }
    },
    "cast": {
      "first": {
        "verb": "cast",
        "transcription": null
      },
      "second": {
        "verb": "cast",
        "transcription": null
      },
      "third": {
        "verb": "cast",
        "transcription": null
      }
    },
    "catch": {
      "first": {
        "verb": "catch",
        "transcription": "/kætʃ/"
      },
      "second": {
        "verb": "caught",
        "transcription": "/kɔ:t/"
      },
      "third": {
        "verb": "caught",
        "transcription": "/kɔ:t/"
      }
    },
    "chide": {
      "first": {
        "verb": "chide",
        "transcription": null
      },
      "second": {
        "verb": "chid / chode",
        "transcription": null
      },
      "third": {
        "verb": "chid / chidden",
        "transcription": null
      }
    },
    "choose": {
      "first": {
        "verb": "choose",
        "transcription": "/tʃu:z/"
      },
      "second": {
        "verb": "chose",
        "transcription": "/tʃouz/"
      },
      "third": {
        "verb": "chosen",
        "transcription": "/'tʃouzən/"
      }
    },
    "cling": {
      "first": {
        "verb": "cling",
        "transcription": null
      },
      "second": {
        "verb": "clung",
        "transcription": null
      },
      "third": {
        "verb": "clung",
        "transcription": null
      }
    },
    "clothe": {
      "first": {
        "verb": "clothe",
        "transcription": null
      },
      "second": {
        "verb": "clad / clothed",
        "transcription": null
      },
      "third": {
        "verb": "clad / clothed",
        "transcription": null
      }
    },
    "come": {
      "first": {
        "verb": "come",
        "transcription": "/kʌm/"
      },
      "second": {
        "verb": "came",
        "transcription": "/keɪm/"
      },
      "third": {
        "verb": "come",
        "transcription": "/kʌm/"
      }
    },
    "cost": {
      "first": {
        "verb": "cost",
        "transcription": "/kɒst/"
      },
      "second": {
        "verb": "cost",
        "transcription": "/kɒst/"
      },
      "third": {
        "verb": "cost",
        "transcription": "/kɒst/"
      }
    },
    "creep": {
      "first": {
        "verb": "creep",
        "transcription": null
      },
      "second": {
        "verb": "crept",
        "transcription": null
      },
      "third": {
        "verb": "crept",
        "transcription": null
      }
    },
    "cut": {
      "first": {
        "verb": "cut",
        "transcription": "/kʌt/"
      },
      "second": {
        "verb": "cut",
        "transcription": "/kʌt/"
      },
      "third": {
        "verb": "cut",
        "transcription": "/kʌt/"
      }
    },
    "deal": {
      "first": {
        "verb": "deal",
        "transcription": null
      },
      "second": {
        "verb": "dealt",
        "transcription": null
      },
      "third": {
        "verb": "dealt",
        "transcription": null
      }
    },
    "dig": {
      "first": {
        "verb": "dig",
        "transcription": "/dɪg/"
      },
      "second": {
        "verb": "dug",
        "transcription": "/dʌg/"
      },
      "third": {
        "verb": "dug",
        "transcription": "/dʌg/"
      }
    },
    "dive": {
      "first": {
        "verb": "dive",
        "transcription": null
      },
      "second": {
        "verb": "dived",
        "transcription": null
      },
      "third": {
        "verb": "dived / dove",
        "transcription": null
      }
    },
    "draw": {
      "first": {
        "verb": "draw",
        "transcription": "/drɔ:/"
      },
      "second": {
        "verb": "drew",
        "transcription": "/dru:/"
      },
      "third": {
        "verb": "drawn",
        "transcription": "/drɔ:n/"
      }
    },
    "dream": {
      "first": {
        "verb": "dream",
        "transcription": "/dri:m/"
      },
      "second": {
        "verb": "dreamt / dreamed",
        "transcription": "/dri:md/"
      },
      "third": {
        "verb": "dreamt / dreamed",
        "transcription": "/dri:md/"
      }
    },
    "drink": {
      "first": {
        "verb": "drink",
        "transcription": "/drɪŋk/"
      },
      "second": {
        "verb": "drank",
        "transcription": "/dræŋk/"
      },
      "third": {
        "verb": "drunk",
        "transcription": "/drʌŋk/"
      }
    },
    "drive": {
      "first": {
        "verb": "drive",
        "transcription": "/draɪv/"
      },
      "second": {
        "verb": "drove",
        "transcription": "/drouv/"
      },
      "third": {
        "verb": "driven",
        "transcription": "/'drɪvən/"
      }
    },
    "dwell": {
      "first": {
        "verb": "dwell",
        "transcription": null
      },
      "second": {
        "verb": "dwelt",
        "transcription": null
      },
      "third": {
        "verb": "dwelt / dwelled",
        "transcription": null
      }
    },
    "eat": {
      "first": {
        "verb": "eat",
        "transcription": "/i:t/"
      },
      "second": {
        "verb": "ate",
        "transcription": "/eɪt, et/"
      },
      "third": {
        "verb": "eaten",
        "transcription": "/'i:tn/"
      }
    },
    "fall": {
      "first": {
        "verb": "fall",
        "transcription": "/fɔ:l/"
      },
      "second": {
        "verb": "fell",
        "transcription": "/fel/"
      },
      "third": {
        "verb": "fallen",
        "transcription": "/'fɔ:lən/"
      }
    },
    "feed": {
      "first": {
        "verb": "feed",
        "transcription": "/fi:d/"
      },
      "second": {
        "verb": "fed",
        "transcription": "/fed/"
      },
      "third": {
        "verb": "fed",
        "transcription": "/fed/"
      }
    },
    "feel": {
      "first": {
        "verb": "feel",
        "transcription": "/fi:l/"
      },
      "second": {
        "verb": "felt",
        "transcription": "/felt/"
      },
      "third": {
        "verb": "felt",
        "transcription": "/felt/"
      }
    },
    "fight": {
      "first": {
        "verb": "fight",
        "transcription": "/faɪt/"
      },
      "second": {
        "verb": "fought",
        "transcription": "/fɔ:t/"
      },
      "third": {
        "verb": "fought",
        "transcription": "/fɔ:t/"
      }
    },
    "find": {
      "first": {
        "verb": "find",
        "transcription": "/faɪnd/"
      },
      "second": {
        "verb": "found",
        "transcription": "/faʊnd/"
      },
      "third": {
        "verb": "found",
        "transcription": "/faʊnd/"
      }
    },
    "flee": {
      "first": {
        "verb": "flee",
        "transcription": null
      },
      "second": {
        "verb": "fled",
        "transcription": null
      },
      "third": {
        "verb": "fled",
        "transcription": null
      }
    },
    "fling": {
      "first": {
        "verb": "fling",
        "transcription": null
      },
      "second": {
        "verb": "flung",
        "transcription": null
      },
      "third": {
        "verb": "flung",
        "transcription": null
      }
    },
    "fly": {
      "first": {
        "verb": "fly",
        "transcription": "/flaɪ/"
      },
      "second": {
        "verb": "flew",
        "transcription": "/flu:/"
      },
      "third": {
        "verb": "flown",
        "transcription": "/floun/"
      }
    },
    "forbid": {
      "first": {
        "verb": "forbid",
        "transcription": null
      },
      "second": {
        "verb": "forbade",
        "transcription": null
      },
      "third": {
        "verb": "forbidden",
        "transcription": null
      }
    },
    "forecast": {
      "first": {
        "verb": "forecast",
        "transcription": null
      },
      "second": {
        "verb": "forecast",
        "transcription": null
      },
      "third": {
        "verb": "forecast",
        "transcription": null
      }
    },
    "foresee": {
      "first": {
        "verb": "foresee",
        "transcription": null
      },
      "second": {
        "verb": "foresaw",
        "transcription": null
      },
      "third": {
        "verb": "foreseen",
        "transcription": null
      }
    },
    "forget": {
      "first": {
        "verb": "forget",
        "transcription": "/fər 'get/"
      },
      "second": {
        "verb": "forgot",
        "transcription": "/fər 'gɒt/"
      },
      "third": {
        "verb": "forgotten / forgot",
        "transcription": "/fər 'gɒtn/"
      }
    },
    "forgive": {
      "first": {
        "verb": "forgive",
        "transcription": "/fər 'gɪv/"
      },
      "second": {
        "verb": "forgave",
        "transcription": "/fər 'geɪv/"
      },
      "third": {
        "verb": "forgiven",
        "transcription": "/fər 'gɪvən/"
      }
    },
    "forsake": {
      "first": {
        "verb": "forsake",
        "transcription": null
      },
      "second": {
        "verb": "forsook",
        "transcription": null
      },
      "third": {
        "verb": "forsaken",
        "transcription": null
      }
    },
    "freeze": {
      "first": {
        "verb": "freeze",
        "transcription": "/fri:z/"
      },
      "second": {
        "verb": "froze",
        "transcription": "/frouz/"
      },
      "third": {
        "verb": "frozen",
        "transcription": "/'frouzən/"
      }
    },
    "give": {
      "first": {
        "verb": "give",
        "transcription": "/gɪv/"
      },
      "second": {
        "verb": "gave",
        "transcription": "/geɪv/"
      },
      "third": {
        "verb": "given",
        "transcription": "/'gɪvən/"
      }
    },
    "grind": {
      "first": {
        "verb": "grind",
        "transcription": null
      },
      "second": {
        "verb": "ground",
        "transcription": null
      },
      "third": {
        "verb": "ground",
        "transcription": null
      }
    },
    "grow": {
      "first": {
        "verb": "grow",
        "transcription": "/grou/"
      },
      "second": {
        "verb": "grew",
        "transcription": "/gru:/"
      },
      "third": {
        "verb": "grown",
        "transcription": "/groun/"
      }
    },
    "hang": {
      "first": {
        "verb": "hang",
        "transcription": "/hæŋ/"
      },
      "second": {
        "verb": "hung",
        "transcription": "/hʌŋ/"
      },
      "third": {
        "verb": "hung",
        "transcription": "/hʌŋ/"
      }
    },
    "hear": {
      "first": {
        "verb": "hear",
        "transcription": "/hɪər/"
      },
      "second": {
        "verb": "heard",
        "transcription": "/hɜ:rd/"
      },
      "third": {
        "verb": "heard",
        "transcription": "/hɜ:rd/"
      }
    },
    "hide": {
      "first": {
        "verb": "hide",
        "transcription": "/haɪd/"
      },
      "second": {
        "verb": "hid",
        "transcription": "/hɪd/"
      },
      "third": {
        "verb": "hidden",
        "transcription": "/'hɪdn/"
      }
    },
    "hit": {
      "first": {
        "verb": "hit",
        "transcription": "/hɪt/"
      },
      "second": {
        "verb": "hit",
        "transcription": "/hɪt/"
      },
      "third": {
        "verb": "hit",
        "transcription": "/hɪt/"
      }
    },
    "hold": {
      "first": {
        "verb": "hold",
        "transcription": "/hould/"
      },
      "second": {
        "verb": "held",
        "transcription": "/held/"
      },
      "third": {
        "verb": "held",
        "transcription": "/held/"
      }
    },
    "hurt": {
      "first": {
        "verb": "hurt",
        "transcription": "/hɜ:rt/"
      },
      "second": {
        "verb": "hurt",
        "transcription": "/hɜ:rt/"
      },
      "third": {
        "verb": "hurt",
        "transcription": "/hɜ:rt/"
      }
    },
    "keep": {
      "first": {
        "verb": "keep",
        "transcription": "/ki:p/"
      },
      "second": {
        "verb": "kept",
        "transcription": "/kept/"
      },
      "third": {
        "verb": "kept",
        "transcription": "/kept/"
      }
    },
    "kneel": {
      "first": {
        "verb": "kneel",
        "transcription": null
      },
      "second": {
        "verb": "knelt / knelled",
        "transcription": null
      },
      "third": {
        "verb": "knelt / kneeled",
        "transcription": null
      }
    },
    "know": {
      "first": {
        "verb": "know",
        "transcription": "/nou/"
      },
      "second": {
        "verb": "knew",
        "transcription": "/nu:/"
      },
      "third": {
        "verb": "known",
        "transcription": "/noun/"
      }
    },
    "lay": {
      "first": {
        "verb": "lay",
        "transcription": "/leɪ/"
      },
      "second": {
        "verb": "laid",
        "transcription": "/leɪd/"
      },
      "third": {
        "verb": "laid",
        "transcription": "/leɪd/"
      }
    },
    "lead": {
      "first": {
        "verb": "lead",
        "transcription": "/li:d/"
      },
      "second": {
        "verb": "led",
        "transcription": "/led/"
      },
      "third": {
        "verb": "led",
        "transcription": "/led/"
      }
    },
    "lean": {
      "first": {
        "verb": "lean",
        "transcription": null
      },
      "second": {
        "verb": "leant / leaned",
        "transcription": null
      },
      "third": {
        "verb": "leant / leaned",
        "transcription": null
      }
    },
    "leap": {
      "first": {
        "verb": "leap",
        "transcription": null
      },
      "second": {
        "verb": "leapt / leaped",
        "transcription": null
      },
      "third": {
        "verb": "leapt / leaped",
        "transcription": null
      }
    },
    "learn": {
      "first": {
        "verb": "learn",
        "transcription": "/lɜ:rn/"
      },
      "second": {
        "verb": "learnt",
        "transcription": "/lɜ:rnd/"
      },
      "third": {
        "verb": "learnt",
        "transcription": "/lɜ:rnd/"
      }
    },
    "leave": {
      "first": {
        "verb": "leave",
        "transcription": "/li:v/"
      },
      "second": {
        "verb": "left",
        "transcription": "/left/"
      },
      "third": {
        "verb": "left",
        "transcription": "/left/"
      }
    },
    "lend": {
      "first": {
        "verb": "lend",
        "transcription": "/lend/"
      },
      "second": {
        "verb": "lent",
        "transcription": "/lent/"
      },
      "third": {
        "verb": "lent",
        "transcription": "/lent/"
      }
    },
    "let": {
      "first": {
        "verb": "let",
        "transcription": "/let/"
      },
      "second": {
        "verb": "let",
        "transcription": "/let/"
      },
      "third": {
        "verb": "let",
        "transcription": "/let/"
      }
    },
    "lie": {
      "first": {
        "verb": "lie",
        "transcription": "/laɪ/"
      },
      "second": {
        "verb": "lay",
        "transcription": "/leɪ/"
      },
      "third": {
        "verb": "lain",
        "transcription": "/leɪn/"
      }
    },
    "light": {
      "first": {
        "verb": "light",
        "transcription": null
      },
      "second": {
        "verb": "lit / lighted",
        "transcription": null
      },
      "third": {
        "verb": "lit / lighted",
        "transcription": null
      }
    },
    "lose": {
      "first": {
        "verb": "lose",
        "transcription": "/lu:z/"
      },
      "second": {
        "verb": "lost",
        "transcription": "/lɒst/"
      },
      "third": {
        "verb": "lost",
        "transcription": "/lɒst/"
      }
    },
    "make": {
      "first": {
        "verb": "make",
        "transcription": "/meɪk/"
      },
      "second": {
        "verb": "made",
        "transcription": "/meɪd/"
      },
      "third": {
        "verb": "made",
        "transcription": "/meɪd/"
      }
    },
    "mean": {
      "first": {
        "verb": "mean",
        "transcription": "/mi:n/"
      },
      "second": {
        "verb": "meant",
        "transcription": "/ment/"
      },
      "third": {
        "verb": "meant",
        "transcription": "/ment/"
      }
    },
    "meet": {
      "first": {
        "verb": "meet",
        "transcription": "/mi:t/"
      },
      "second": {
        "verb": "met",
        "transcription": "/met/"
      },
      "third": {
        "verb": "met",
        "transcription": "/met/"
      }
    },
    "mow": {
      "first": {
        "verb": "mow",
        "transcription": null
      },
      "second": {
        "verb": "mowed",
        "transcription": null
      },
      "third": {
        "verb": "mowed / mown",
        "transcription": null
      }
    },
    "offset": {
      "first": {
        "verb": "offset",
        "transcription": null
      },
      "second": {
        "verb": "offset",
        "transcription": null
      },
      "third": {
        "verb": "offset",
        "transcription": null
      }
    },
    "overcome": {
      "first": {
        "verb": "overcome",
        "transcription": null
      },
      "second": {
        "verb": "overcame",
        "transcription": null
      },
      "third": {
        "verb": "overcome",
        "transcription": null
      }
    },
    "partake": {
      "first": {
        "verb": "partake",
        "transcription": null
      },
      "second": {
        "verb": "partook",
        "transcription": null
      },
      "third": {
        "verb": "partaken",
        "transcription": null
      }
    },
    "pay": {
      "first": {
        "verb": "pay",
        "transcription": "/peɪ/"
      },
      "second": {
        "verb": "paid",
        "transcription": "/peɪd/"
      },
      "third": {
        "verb": "paid",
        "transcription": "/peɪd/"
      }
    },
    "plead": {
      "first": {
        "verb": "plead",
        "transcription": null
      },
      "second": {
        "verb": "pled / pleaded",
        "transcription": null
      },
      "third": {
        "verb": "pled / pleaded",
        "transcription": null
      }
    },
    "preset": {
      "first": {
        "verb": "preset",
        "transcription": null
      },
      "second": {
        "verb": "preset",
        "transcription": null
      },
      "third": {
        "verb": "preset",
        "transcription": null
      }
    },
    "prove": {
      "first": {
        "verb": "prove",
        "transcription": null
      },
      "second": {
        "verb": "proved",
        "transcription": null
      },
      "third": {
        "verb": "proven / proved",
        "transcription": null
      }
    },
    "put": {
      "first": {
        "verb": "put",
        "transcription": "/pʊt/"
      },
      "second": {
        "verb": "put",
        "transcription": "/pʊt/"
      },
      "third": {
        "verb": "put",
        "transcription": "/pʊt/"
      }
    },
    "quit": {
      "first": {
        "verb": "quit",
        "transcription": null
      },
      "second": {
        "verb": "quit",
        "transcription": null
      },
      "third": {
        "verb": "quit",
        "transcription": null
      }
    },
    "read": {
      "first": {
        "verb": "read",
        "transcription": "/ri:d/"
      },
      "second": {
        "verb": "read",
        "transcription": "/red/"
      },
      "third": {
        "verb": "read",
        "transcription": "/red/"
      }
    },
    "relay": {
      "first": {
        "verb": "relay",
        "transcription": null
      },
      "second": {
        "verb": "relaid",
        "transcription": null
      },
      "third": {
        "verb": "relaid",
        "transcription": null
      }
    },
    "rend": {
      "first": {
        "verb": "rend",
        "transcription": null
      },
      "second": {
        "verb": "rent",
        "transcription": null
      },
      "third": {
        "verb": "rent",
        "transcription": null
      }
    },
    "rid": {
      "first": {
        "verb": "rid",
        "transcription": null
      },
      "second": {
        "verb": "rid",
        "transcription": null
      },
      "third": {
        "verb": "rid",
        "transcription": null
      }
    },
    "ring": {
      "first": {
        "verb": "ring",
        "transcription": "/rɪŋ/"
      },
      "second": {
        "verb": "rang",
        "transcription": "/ræŋ/"
      },
      "third": {
        "verb": "rung",
        "transcription": "/rʌŋ/"
      }
    },
    "rise": {
      "first": {
        "verb": "rise",
        "transcription": "/raɪz/"
      },
      "second": {
        "verb": "rose",
        "transcription": "/rouz/"
      },
      "third": {
        "verb": "risen",
        "transcription": "/'rɪzən/"
      }
    },
    "run": {
      "first": {
        "verb": "run",
        "transcription": "/rʌn/"
      },
      "second": {
        "verb": "ran",
        "transcription": "/ræn/"
      },
      "third": {
        "verb": "run",
        "transcription": "/rʌn/"
      }
    },
    "saw": {
      "first": {
        "verb": "saw",
        "transcription": null
      },
      "second": {
        "verb": "saw / sawed",
        "transcription": null
      },
      "third": {
        "verb": "sawn / sawed",
        "transcription": null
      }
    },
    "say": {
      "first": {
        "verb": "say",
        "transcription": "/seɪ/"
      },
      "second": {
        "verb": "said",
        "transcription": "/sed/"
      },
      "third": {
        "verb": "said",
        "transcription": "/sed/"
      }
    },
    "see": {
      "first": {
        "verb": "see",
        "transcription": "/si:/"
      },
      "second": {
        "verb": "saw",
        "transcription": "/sɔ:/"
      },
      "third": {
        "verb": "seen",
        "transcription": "/si:n/"
      }
    },
    "seek": {
      "first": {
        "verb": "seek",
        "transcription": null
      },
      "second": {
        "verb": "sought",
        "transcription": null
      },
      "third": {
        "verb": "sought",
        "transcription": null
      }
    },
    "sell": {
      "first": {
        "verb": "sell",
        "transcription": "/sel/"
      },
      "second": {
        "verb": "sold",
        "transcription": "/sould/"
      },
      "third": {
        "verb": "sold",
        "transcription": "/sould/"
      }
    },
    "send": {
      "first": {
        "verb": "send",
        "transcription": "/send/"
      },
      "second": {
        "verb": "sent",
        "transcription": "/sent/"
      },
      "third": {
        "verb": "sent",
        "transcription": "/sent/"
      }
    },
    "set": {
      "first": {
        "verb": "set",
        "transcription": "/set/"
      },
      "second": {
        "verb": "set",
        "transcription": "/set/"
      },
      "third": {
        "verb": "set",
        "transcription": "/set/"
      }
    },
    "shake": {
      "first": {
        "verb": "shake",
        "transcription": "/ʃeɪk/"
      },
      "second": {
        "verb": "shook",
        "transcription": "/ʃʊk/"
      },
      "third": {
        "verb": "shaken",
        "transcription": "/'ʃeɪkən/"
      }
    },
    "shed": {
      "first": {
        "verb": "shed",
        "transcription": null
      },
      "second": {
        "verb": "shed",
        "transcription": null
      },
      "third": {
        "verb": "shed",
        "transcription": null
      }
    },
    "shine": {
      "first": {
        "verb": "shine",
        "transcription": "/ʃaɪn/"
      },
      "second": {
        "verb": "shone",
        "transcription": "/ʃoun, ʃɒn/"
      },
      "third": {
        "verb": "shone",
        "transcription": "/ʃoun, ʃɒn/"
      }
    },
    "shoe": {
      "first": {
        "verb": "shoe",
        "transcription": null
      },
      "second": {
        "verb": "shod",
        "transcription": null
      },
      "third": {
        "verb": "shod",
        "transcription": null
      }
    },
    "shoot": {
      "first": {
        "verb": "shoot",
        "transcription": "/ʃu:t/"
      },
      "second": {
        "verb": "shot",
        "transcription": "/ʃɒt/"
      },
      "third": {
        "verb": "shot",
        "transcription": "/ʃɒt/"
      }
    },
    "show": {
      "first": {
        "verb": "show",
        "transcription": "/ʃou/"
      },
      "second": {
        "verb": "showed",
        "transcription": "/ʃoud/"
      },
      "third": {
        "verb": "shown",
        "transcription": "/ʃoun/"
      }
    },
    "shut": {
      "first": {
        "verb": "shut",
        "transcription": "/ʃʌt/"
      },
      "second": {
        "verb": "shut",
        "transcription": "/ʃʌt/"
      },
      "third": {
        "verb": "shut",
        "transcription": "/ʃʌt/"
      }
    },
    "sing": {
      "first": {
        "verb": "sing",
        "transcription": "/sɪŋ/"
      },
      "second": {
        "verb": "sang",
        "transcription": "/sæŋ/"
      },
      "third": {
        "verb": "sung",
        "transcription": "/sʌŋ/"
      }
    },
    "sink": {
      "first": {
        "verb": "sink",
        "transcription": "/sɪŋk/"
      },
      "second": {
        "verb": "sank / sunk",
        "transcription": "/sæŋk/"
      },
      "third": {
        "verb": "sunk / sunken",
        "transcription": "/sʌŋk/"
      }
    },
    "sit": {
      "first": {
        "verb": "sit",
        "transcription": "/sɪt/"
      },
      "second": {
        "verb": "sat",
        "transcription": "/sæt/"
      },
      "third": {
        "verb": "sat",
        "transcription": "/sæt/"
      }
    },
    "slay": {
      "first": {
        "verb": "slay",
        "transcription": null
      },
      "second": {
        "verb": "slew",
        "transcription": null
      },
      "third": {
        "verb": "slain",
        "transcription": null
      }
    },
    "sleep": {
      "first": {
        "verb": "sleep",
        "transcription": "/sli:p/"
      },
      "second": {
        "verb": "slept",
        "transcription": "/slept/"
      },
      "third": {
        "verb": "slept",
        "transcription": "/slept/"
      }
    },
    "slide": {
      "first": {
        "verb": "slide",
        "transcription": null
      },
      "second": {
        "verb": "slid",
        "transcription": null
      },
      "third": {
        "verb": "slid",
        "transcription": null
      }
    },
    "slit": {
      "first": {
        "verb": "slit",
        "transcription": null
      },
      "second": {
        "verb": "slit",
        "transcription": null
      },
      "third": {
        "verb": "slit",
        "transcription": null
      }
    },
    "smell": {
      "first": {
        "verb": "smell",
        "transcription": "/smel/"
      },
      "second": {
        "verb": "smelt",
        "transcription": "/smeld/"
      },
      "third": {
        "verb": "smelt",
        "transcription": "/smeld/"
      }
    },
    "sow": {
      "first": {
        "verb": "sow",
        "transcription": null
      },
      "second": {
        "verb": "sowed",
        "transcription": null
      },
      "third": {
        "verb": "sown / sowed",
        "transcription": null
      }
    },
    "speak": {
      "first": {
        "verb": "speak",
        "transcription": "/spi:k/"
      },
      "second": {
        "verb": "spoke",
        "transcription": "/spouk/"
      },
      "third": {
        "verb": "spoken",
        "transcription": "/'spoukən/"
      }
    },
    "speed": {
      "first": {
        "verb": "speed",
        "transcription": null
      },
      "second": {
        "verb": "sped",
        "transcription": null
      },
      "third": {
        "verb": "sped",
        "transcription": null
      }
    },
    "spell": {
      "first": {
        "verb": "spell",
        "transcription": "/spel/"
      },
      "second": {
        "verb": "spelt",
        "transcription": "/speld/"
      },
      "third": {
        "verb": "spelt",
        "transcription": "/speld/"
      }
    },
    "spend": {
      "first": {
        "verb": "spend",
        "transcription": "/spend/"
      },
      "second": {
        "verb": "spent",
        "transcription": "/spent/"
      },
      "third": {
        "verb": "spent",
        "transcription": "/spent/"
      }
    },
    "spill": {
      "first": {
        "verb": "spill",
        "transcription": "/spɪl/"
      },
      "second": {
        "verb": "spilt / spilled",
        "transcription": "/spɪld/"
      },
      "third": {
        "verb": "spilt / spilled",
        "transcription": "/spɪld/"
      }
    },
    "spin": {
      "first": {
        "verb": "spin",
        "transcription": null
      },
      "second": {
        "verb": "spun",
        "transcription": null
      },
      "third": {
        "verb": "spun",
        "transcription": null
      }
    },
    "spit": {
      "first": {
        "verb": "spit",
        "transcription": "/spɪt/"
      },
      "second": {
        "verb": "spat / spit",
        "transcription": "/spɪt/"
      },
      "third": {
        "verb": "spat / spit",
        "transcription": "/spɪt/"
      }
    },
    "split": {
      "first": {
        "verb": "split",
        "transcription": "/splɪt/"
      },
      "second": {
        "verb": "split",
        "transcription": "/splɪt/"
      },
      "third": {
        "verb": "split",
        "transcription": "/splɪt/"
      }
    },
    "spoil": {
      "first": {
        "verb": "spoil",
        "transcription": "/spoɪl/"
      },
      "second": {
        "verb": "spoilt",
        "transcription": "/spoɪld/"
      },
      "third": {
        "verb": "spoilt",
        "transcription": "/spoɪld/"
      }
    },
    "spread": {
      "first": {
        "verb": "spread",
        "transcription": null
      },
      "second": {
        "verb": "spread",
        "transcription": null
      },
      "third": {
        "verb": "spread",
        "transcription": null
      }
    },
    "spring": {
      "first": {
        "verb": "spring",
        "transcription": null
      },
      "second": {
        "verb": "sprang",
        "transcription": null
      },
      "third": {
        "verb": "sprung",
        "transcription": null
      }
    },
    "stand": {
      "first": {
        "verb": "stand",
        "transcription": "/stænd/"
      },
      "second": {
        "verb": "stood",
        "transcription": "/stʊd/"
      },
      "third": {
        "verb": "stood",
        "transcription": "/stʊd/"
      }
    },
    "steal": {
      "first": {
        "verb": "steal",
        "transcription": "/sti:l/"
      },
      "second": {
        "verb": "stole",
        "transcription": "/stoul/"
      },
      "third": {
        "verb": "stolen",
        "transcription": "/'stoulən/"
      }
    },
    "stick": {
      "first": {
        "verb": "stick",
        "transcription": null
      },
      "second": {
        "verb": "stuck",
        "transcription": null
      },
      "third": {
        "verb": "stuck",
        "transcription": null
      }
    },
    "sting": {
      "first": {
        "verb": "sting",
        "transcription": null
      },
      "second": {
        "verb": "stung",
        "transcription": null
      },
      "third": {
        "verb": "stung",
        "transcription": null
      }
    },
    "stink": {
      "first": {
        "verb": "stink",
        "transcription": null
      },
      "second": {
        "verb": "stank",
        "transcription": null
      },
      "third": {
        "verb": "stunk",
        "transcription": null
      }
    },
    "strew": {
      "first": {
        "verb": "strew",
        "transcription": null
      },
      "second": {
        "verb": "strewed",
        "transcription": null
      },
      "third": {
        "verb": "strewn / strewed",
        "transcription": null
      }
    },
    "strike": {
      "first": {
        "verb": "strike",
        "transcription": "/straɪk/"
      },
      "second": {
        "verb": "struck",
        "transcription": "/strʌk/"
      },
      "third": {
        "verb": "stricken / struck",
        "transcription": "/strʌk/"
      }
    },
    "strive": {
      "first": {
        "verb": "strive",
        "transcription": null
      },
      "second": {
        "verb": "strove",
        "transcription": null
      },
      "third": {
        "verb": "striven",
        "transcription": null
      }
    },
    "swear": {
      "first": {
        "verb": "swear",
        "transcription": null
      },
      "second": {
        "verb": "swore",
        "transcription": null
      },
      "third": {
        "verb": "sworn",
        "transcription": null
      }
    },
    "sweat": {
      "first": {
        "verb": "sweat",
        "transcription": null
      },
      "second": {
        "verb": "sweat / sweated",
        "transcription": null
      },
      "third": {
        "verb": "sweat / sweated",
        "transcription": null
      }
    },
    "sweep": {
      "first": {
        "verb": "sweep",
        "transcription": null
      },
      "second": {
        "verb": "swept",
        "transcription": null
      },
      "third": {
        "verb": "swept",
        "transcription": null
      }
    },
    "swell": {
      "first": {
        "verb": "swell",
        "transcription": null
      },
      "second": {
        "verb": "swelled / sweated",
        "transcription": null
      },
      "third": {
        "verb": "swollen",
        "transcription": null
      }
    },
    "swim": {
      "first": {
        "verb": "swim",
        "transcription": "/swɪm/"
      },
      "second": {
        "verb": "swam",
        "transcription": "/swæm/"
      },
      "third": {
        "verb": "swum",
        "transcription": "/swʌm/"
      }
    },
    "swing": {
      "first": {
        "verb": "swing",
        "transcription": null
      },
      "second": {
        "verb": "swung",
        "transcription": null
      },
      "third": {
        "verb": "swung",
        "transcription": null
      }
    },
    "take": {
      "first": {
        "verb": "take",
        "transcription": "/teɪk/"
      },
      "second": {
        "verb": "took",
        "transcription": "/tʊk/"
      },
      "third": {
        "verb": "taken",
        "transcription": "/'teɪkən/"
      }
    },
    "teach": {
      "first": {
        "verb": "teach",
        "transcription": "/ti:tʃ/"
      },
      "second": {
        "verb": "taught",
        "transcription": "/tɔ:t/"
      },
      "third": {
        "verb": "taught",
        "transcription": "/tɔ:t/"
      }
    },
    "tear": {
      "first": {
        "verb": "tear",
        "transcription": "/teər/"
      },
      "second": {
        "verb": "tore",
        "transcription": "/tɔr/"
      },
      "third": {
        "verb": "torn",
        "transcription": "/tɔrn/"
      }
    },
    "tell": {
      "first": {
        "verb": "tell",
        "transcription": "/tel/"
      },
      "second": {
        "verb": "told",
        "transcription": "/tould/"
      },
      "third": {
        "verb": "told",
        "transcription": "/tould/"
      }
    },
    "think": {
      "first": {
        "verb": "think",
        "transcription": "/θɪŋk/"
      },
      "second": {
        "verb": "thought",
        "transcription": "/θɔ:t/"
      },
      "third": {
        "verb": "thought",
        "transcription": "/θɔ:t/"
      }
    },
    "thrive": {
      "first": {
        "verb": "thrive",
        "transcription": null
      },
      "second": {
        "verb": "throve / thrived",
        "transcription": null
      },
      "third": {
        "verb": "thriven / thrived",
        "transcription": null
      }
    },
    "throw": {
      "first": {
        "verb": "throw",
        "transcription": "/θrou/"
      },
      "second": {
        "verb": "threw",
        "transcription": "/θru:/"
      },
      "third": {
        "verb": "thrown",
        "transcription": "/θroun/"
      }
    },
    "thrust": {
      "first": {
        "verb": "thrust",
        "transcription": null
      },
      "second": {
        "verb": "thrust",
        "transcription": null
      },
      "third": {
        "verb": "thrust",
        "transcription": null
      }
    },
    "typeset": {
      "first": {
        "verb": "typeset",
        "transcription": null
      },
      "second": {
        "verb": "typeset",
        "transcription": null
      },
      "third": {
        "verb": "typeset",
        "transcription": null
      }
    },
    "undergo": {
      "first": {
        "verb": "undergo",
        "transcription": null
      },
      "second": {
        "verb": "underwent",
        "transcription": null
      },
      "third": {
        "verb": "undergone",
        "transcription": null
      }
    },
    "understand": {
      "first": {
        "verb": "understand",
        "transcription": "/ʌndər 'stænd/"
      },
      "second": {
        "verb": "understood",
        "transcription": "/ʌndər 'stʊd/"
      },
      "third": {
        "verb": "understood",
        "transcription": "/ʌndər 'stʊd/"
      }
    },
    "wake": {
      "first": {
        "verb": "wake",
        "transcription": "/weɪk/"
      },
      "second": {
        "verb": "woke",
        "transcription": "/wouk/"
      },
      "third": {
        "verb": "woken",
        "transcription": "/'woukən/"
      }
    },
    "wear": {
      "first": {
        "verb": "wear",
        "transcription": "/weər/"
      },
      "second": {
        "verb": "wore",
        "transcription": "/wɔr/"
      },
      "third": {
        "verb": "worn",
        "transcription": "/wɔrn/"
      }
    },
    "weep": {
      "first": {
        "verb": "weep",
        "transcription": null
      },
      "second": {
        "verb": "wept",
        "transcription": null
      },
      "third": {
        "verb": "wept",
        "transcription": null
      }
    },
    "wet": {
      "first": {
        "verb": "wet",
        "transcription": null
      },
      "second": {
        "verb": "wet / wetted",
        "transcription": null
      },
      "third": {
        "verb": "wet / wetted",
        "transcription": null
      }
    },
    "win": {
      "first": {
        "verb": "win",
        "transcription": "/wɪn/"
      },
      "second": {
        "verb": "won",
        "transcription": "/wʌn/"
      },
      "third": {
        "verb": "won",
        "transcription": "/wʌn/"
      }
    },
    "wind": {
      "first": {
        "verb": "wind",
        "transcription": null
      },
      "second": {
        "verb": "wound",
        "transcription": null
      },
      "third": {
        "verb": "wound",
        "transcription": null
      }
    },
    "withdraw": {
      "first": {
        "verb": "withdraw",
        "transcription": null
      },
      "second": {
        "verb": "withdrew",
        "transcription": null
      },
      "third": {
        "verb": "withdrawn",
        "transcription": null
      }
    },
    "wring": {
      "first": {
        "verb": "wring",
        "transcription": null
      },
      "second": {
        "verb": "wrung",
        "transcription": null
      },
      "third": {
        "verb": "wrung",
        "transcription": null
      }
    },
    "write": {
      "first": {
        "verb": "write",
        "transcription": "/raɪt/"
      },
      "second": {
        "verb": "wrote",
        "transcription": "/rout/"
      },
      "third": {
        "verb": "written",
        "transcription": "/'rɪtn/"
      }
    }
  }
}
