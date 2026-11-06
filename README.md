# Assessment de Segurança em Nuvem

Sistema de assessment que mede a aderência de uma empresa a requisitos de segurança em nuvem, calcula o nível de risco por domínio e gera um plano de ação em PDF. Trabalho proposto pelo professor (ver [docs/transcricao.md](docs/transcricao.md)).

Framework desta versão: **CIS AWS Foundations Benchmark** (resumo com 24 requisitos em 5 domínios).

## Como usar

Abra `index.html` no navegador (não precisa de servidor nem de instalação). Responda cada requisito com Atende, Atende parcialmente, Não atende ou Não se aplica, clique em **Gerar relatório** e depois em **Salvar como PDF**.

## Critérios de cálculo (adotados neste projeto)

- Atende = 1, parcialmente = 0,5, não atende = 0. “Não se aplica” e requisitos sem resposta ficam fora do cálculo.
- Aderência = soma ponderada (peso 1 a 3 por requisito) dividida pelo peso total respondido.
- Risco por faixa de aderência: 90% ou mais = Baixo; 70 a 89% = Médio; 40 a 69% = Alto; abaixo de 40% = Crítico.
- Prioridade da ação = peso × (1 − nota): mais alto primeiro.

Esses pesos e faixas são uma escolha do projeto, não parte do CIS. Os requisitos são um resumo em português: confira a redação e a numeração no benchmark oficial do CIS antes de citar na entrega.

## Estrutura

```
index.html          interface e cálculo
data/cis-aws.js     requisitos, perguntas e ações corretivas
docs/transcricao.md transcrição do áudio e requisitos do professor
```

## Adicionar outro framework

Copie `data/cis-aws.js` para, por exemplo, `data/well-architected.js`, troque os domínios e requisitos e ajuste a tag `<script src>` no `index.html`. Próximos candidatos do enunciado: Well-Architected (pilar de segurança), LGPD e BACEN (Res. CMN 4.893 e 5.274 para nuvem, a confirmar na pesquisa).

## Próximos passos

- [ ] Pesquisar e anotar referências (primeiro passo pedido pelo professor)
- [ ] Revisar os requisitos contra o benchmark oficial
- [ ] Incluir Well-Architected, LGPD e BACEN
- [ ] Salvar e carregar respostas (JSON)
