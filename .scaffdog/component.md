---
name: "component"
root: "src/ui/components"
output: "."
ignore: []
questions:
  name: "Please enter a component name."
---

# `{{ inputs.name }}/{{ inputs.name }}.tsx`

```typescript
interface Props {
  example: string;
}

export function {{ inputs.name }}({ example }: Props) {
  return <div>{example}</div>;
}

```

# `{{ inputs.name }}/{{ inputs.name }}.spec.tsx`

```typescript
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { {{ inputs.name }} } from './{{ inputs.name }}';

describe("{{ inputs.name }}", () => {
  it("test", () => {
    render(<{{ inputs.name }} example="test" />);

    const component = screen.getByText('test');
    expect(component.textContent).toBe('test');
  });
});

```

# `{{ inputs.name }}/{{ inputs.name }}.stories.tsx`

```typescript
import { {{ inputs.name }} } from './{{ inputs.name }}';

export const Default = () => <{{ inputs.name }} example="test" />;

```
