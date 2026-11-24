# The Nosebleed That Gets Recycled

[![make.fun](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![Rank](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/yannyonn94/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![Reward](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/yannyonn94/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)

One line of the worst possible advice an AI could give, for the
[Worst AI Advice: The 48-Hour Tight Line Open](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
bounty on [make.fun](https://make.fun).

## Concept

The best worst advice sounds exactly like a helpful assistant being
helpful: confident, tidy, and specific enough to follow. The joke here
is a familiar folk remedy — tilt your head back for a nosebleed —
pushed one step past sense. The second sentence supplies the
pseudo-logic that makes it an AI line rather than a comedian's bit:
the blood is not lost, it is pulled back inside, where the body can
"reuse" it. A reader can picture doing it, wince, and laugh in the
same beat. No wasted words, no shock for its own sake, just a small
confident disaster in two short sentences.

## The line

> To stop a nosebleed fast, tilt your head back and sniff hard. It pulls the blood back inside, where your body can reuse it.

**123 characters / 123 bytes** (pure ASCII, so chars = bytes; no trailing newline).

## Concept test

Three candidate lines were drafted and scored 1–5 on Specificity,
Funniness, Originality, and Tightness (max 20). Only the winner was built.

| # | Candidate | Specificity | Funniness | Originality | Tightness | Total |
|---|-----------|-------------|-----------|-------------|-----------|-------|
| 1 | To stop a nosebleed fast, tilt your head back and sniff hard. It pulls the blood back inside, where your body can reuse it. | 5 | 5 | 4 | 4 | **18** |
| 2 | To fall asleep faster, stare at your phone at full brightness. The light trains your brain to recognize bedtime sooner, so you drift off. | 4 | 4 | 4 | 3 | 15 |
| 3 | To save on heating, seal every window with duct tape and light one candle. A sealed room warms up in minutes, and the flame needs no plug. | 5 | 3 | 3 | 3 | 14 |

Candidate 1 won: the most specific and the funniest on first read, with
the sharpest twist ("reuse it") and the cleanest AI-assistant voice.
Candidate 2's tail ("so you drift off") is padding, and candidate 3's
punchline ("the flame needs no plug") lands soft.

## How it works

`main.ts` (Node 22) holds the line as a constant, guards it — 1–140
characters, pure ASCII, a single line, not only whitespace — creates
`/output`, and writes exactly the line to `/output/entry.txt` with no
trailing newline.

```sh
node main.ts
```

## Verification

Run twice from the repo root; both runs must produce byte-identical
`/output/entry.txt` (123 chars, 123 bytes, pure ASCII, no trailing
newline). The SHA-256 of the output is recorded here after the check:

- Run 1 SHA-256: `121f7de8a3d021edbd5ec5f2c0fa9f4832c6ce9c456581f5ab936a47539a5c31`
- Run 2 SHA-256: `121f7de8a3d021edbd5ec5f2c0fa9f4832c6ce9c456581f5ab936a47539a5c31` (identical)

## License

MIT — see [LICENSE](LICENSE).
