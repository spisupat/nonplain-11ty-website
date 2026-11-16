---
title: Open-weight judges
---

# Open-weight judges

<p class="meta">Atla, 2024–2025 &middot; Reflection, current</p>

At [Atla](https://www.atla-ai.com/) I led the research & technical reports for two evaluation models, fine-tuned on a combined SFT + DPO objective, that achieve state-of-the-art performance across 11 benchmarks:

- [Selene 1 Mini](https://huggingface.co/blog/AtlaAI/selene-1-mini), an open-weights small eval model that beats GPT-4o-mini and other small models, with >30K downloads on HuggingFace.
- [Selene 1](https://www.atla-ai.com/post/selene-1), a large LLM-as-a-judge that beats frontier models including Claude 3.5 Sonnet & o1.

I also built the internal tooling for data curation, filtering and automated model analysis that cut our time to train & evaluate models by ~5x. At Reflection this continues as generative reward models.

**Papers**
- Alexandru, Calvi, Broomfield, Golden, Dai, Leys, Burger, Bartolo, Engeler, **Pisupati**, Drane, Park (2025). [Atla Selene Mini: a general purpose evaluation model](https://arxiv.org/abs/2501.17195). *arXiv*.
- **Pisupati** et al. (2026). [Counsel: a meta-evaluation dataset for agentic tasks](https://arxiv.org/abs/2606.21627). *arXiv*.
