
# dev log

Notes and tasks (in lieu of a task management system). The format is roughly reverse-chronological by date.

## [10/04/2025]

### 1 - Markdown

Parsing markdown is not as fun of a problem as I thought it might be. I am questioning whether or not I want to continue with writing my own markdown parser. It's not a formal language, and there are not many interesting applications that I can think of that could make use of such a tool.

I do like the idea of actually _writing one_. But I question the utility of treating it as a must-have for starting a blog / site. It's very rudimentary and boring, and riddled with edge-cases; unlike HTML or XML, for example, there is not nice structural definition that makes parsing straightforward or interesting. A good example is in [test_block-1.md](../test-data//md/custom/test_block-1.md).

Studying this problem has made me wonder why anyone writes markdown, including myself. Historical support on github / gitlab seems a likely reason. It also became a de-facto standard at a time when a simple text markup format was needed. Right place, right time.