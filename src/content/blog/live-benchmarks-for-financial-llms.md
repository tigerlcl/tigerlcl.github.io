---
title: "Why Financial LLMs Need Live Benchmarks"
description: "A short note on temporal leakage, market realism, and evaluation harnesses for investment agents."
pubDate: 2026-01-12
tags:
  - LLM Evaluation
  - Finance
  - Benchmarks
---

Static benchmarks are convenient, but financial decisions are path dependent. A model that can see tomorrow's facts, even indirectly through benchmark construction, is no longer being evaluated as an investment agent.

A live benchmark should make three constraints explicit:

1. The information boundary available at decision time.
2. The execution cadence and portfolio update rule.
3. The risk-adjusted metric used to compare agents.

```python
import torch

returns = torch.tensor([0.012, -0.004, 0.008, 0.001])
risk = returns.std(unbiased=False)
sharpe_like = returns.mean() / risk.clamp_min(1e-6)
print(float(sharpe_like))
```

The engineering challenge is not only model prompting. It is also the harness: data freshness, reproducibility, audit trails, and a clear separation between historical data and live observations.
