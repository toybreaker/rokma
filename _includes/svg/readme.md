##SVG readme

**1.** In _includes need to have:

- use.html // here just some liquid logic
- def.html // here you put all your grafix one per symbol!

**2.** Load the defs.html in your layout before any icon like this:

```{% include svg/defs.html %}```

**3.** Then get any symbol from def.html like this:

```{% include svg/use.html id="icn--smile" class="smile" %}```

**Note:** Improve svg look with `shape-rendering`:

- If shape is mainly rounded: ```shape-rendering="geometricPrecision"```

- If shape is mainly squared: ```shape-rendering="crispEdges"```


**What?**
check my example and build from that...