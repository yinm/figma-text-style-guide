---
name: "plugin-nodes"
root: "src/plugin/nodes"
output: "."
ignore: []
questions:
  name: "Please enter a function name."
---

# `{{ inputs.name }}/{{ inputs.name }}.ts`

```typescript
export function {{ inputs.name }}() {
}

```

# `{{ inputs.name }}/{{ inputs.name }}.spec.ts`

```typescript
import { describe, expect, it } from "vitest";
import { {{ inputs.name }} } from './{{ inputs.name }}'

describe("{{ inputs.name }}", () => {
  it("test", () => {
    expect(1).toBe(1);
  });
});

```
