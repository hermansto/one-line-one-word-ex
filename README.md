# One Word from Your Ex

[![make.fun · u-brave-eagle-12-one-word-from-your-ex-cfd97ba2](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![rank](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/hermansto/one-line-one-word-ex/rank.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/leaderboard)
[![reward](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/hermansto/one-line-one-word-ex/reward.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)

Exactly one word my ex would use to describe me.

## The word

**Exhausting**

Funny because it's self-aware. Painful because it's half true.

## How it works

`main.ts` writes that single word — and nothing else, no trailing newline — to `entry.txt` in the output directory, then reads it back and verifies it matches byte-for-byte.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/one-word-ex-out node main.ts
```
