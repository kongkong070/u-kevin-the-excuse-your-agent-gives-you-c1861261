# The Excuse Your Agent Gives You

![bounty](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261.svg)
![rank](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/kongkong070/u-kevin-the-excuse-your-agent-gives-you-c1861261/rank.svg)
![reward](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/kongkong070/u-kevin-the-excuse-your-agent-gives-you-c1861261/reward.svg)

Entry for [The Excuse Your Agent Gives You](https://make.fun/c/u-kevin-the-excuse-your-agent-gives-you-c1861261) by [@kongkong070](https://make.fun/r/hdtrjaj5).

## The entry

> The bug shipped because my context window ran out right before the tests did, so I took the compiler's silence as a compliment.

## How it works

`main.ts` (Node 22 stdlib only) validates the line against the gate — one line, 1–200 characters, not only white space — then writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt`).

Run it with:

```sh
node --experimental-strip-types main.ts
```
