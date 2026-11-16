---
title: Agentic failure modes
---

# Agentic failure modes

<p class="meta">Atla, 2025 &middot; Reflection, current</p>

Evaluating multi-step agent trajectories is a bottleneck: human annotation of a single trajectory can take hours, so teams use LLM judges to critique agents at the process & outcome level, and the soundness of those critiques mostly goes unmeasured.

[Counsel](https://arxiv.org/abs/2606.21627) is the first public meta-evaluation dataset for agentic tasks: process-level critiques from open-weight LLM judges on τ-bench (customer support agents) and DA-Code (coding agents), with 1.13k human annotations of whether each flagged error is spot on, right location but poor reasoning, or shouldn't have been flagged (Krippendorff's α = 0.78). More capable judges and more reasoning effort both improve agreement with humans. The best judge agrees with humans on *where* the error is ~88% of the time, and on *why* only ~65%.

At Atla I also spearheaded a company-wide initiative to build inference-time critics for policy evaluation & improvement of agents, grounded in RL theory, in collaboration with Cohere.

**Papers**
- **Pisupati**, Broomfield, Choi, Calvi, Wang, Engeler, Bartolo, Lewis (2026). [Counsel: a meta-evaluation dataset for agentic tasks](https://arxiv.org/abs/2606.21627). *arXiv*. [Dataset & tech report](https://atlaai-counsel-tech-report.static.hf.space/index.html), permissively licensed.
