# Assessment de Segurança em Nuvem

Sistema de assessment que mede a aderência de uma empresa a requisitos de segurança em nuvem, calcula o nível de risco por domínio e gera um plano de ação em PDF. Trabalho proposto pelo professor: a empresa responde se cada requisito é atendido, atendido parcialmente ou não atendido, e o sistema mostra o risco por tópico e o passo a passo para chegar a 100%.

Frameworks desta versão: **CIS AWS Foundations Benchmark** (24 requisitos em 5 domínios), **BACEN** (18 requisitos em 4 domínios, a partir da Res. CMN 4.893/2021 e da 5.274/2025) e **AWS Well-Architected, pilar de segurança** (24 requisitos em 7 domínios). Prazo da entrega: primeiras semanas de dezembro de 2026.

## Como usar

Abra `index.html` no navegador (não precisa de servidor nem de instalação). Responda cada requisito com Atende, Atende parcialmente, Não atende ou Não se aplica, clique em **Gerar relatório** e depois em **Salvar como PDF**. O seletor “Framework” troca o conjunto de requisitos, e os botões **Salvar respostas (JSON)** e **Carregar respostas** guardam e retomam o preenchimento de um framework. No relatório, também é possível exportar um CSV para Excel, copiar um resumo e enviá-lo por WhatsApp ou Telegram (o aplicativo abre com o texto pronto e você escolhe o contato). O resumo só sai do navegador quando você clica em enviar. O relatório inclui um mapa de calor com as lacunas de cada domínio por prioridade.

## Critérios de cálculo (adotados neste projeto)

- Atende = 1, parcialmente = 0,5, não atende = 0. “Não se aplica” e requisitos sem resposta ficam fora do cálculo.
- Aderência = soma ponderada (peso 1 a 3 por requisito) dividida pelo peso total respondido.
- Risco por faixa de aderência: 90% ou mais = Baixo; 70 a 89% = Médio; 40 a 69% = Alto; abaixo de 40% = Crítico.
- Prioridade da ação = peso × (1 − nota): mais alto primeiro. Faixas: crítica a partir de 3, alta a partir de 1,5, média a partir de 1 e baixa abaixo disso (são as colunas do mapa de calor).

Esses pesos e faixas são uma escolha do projeto, não parte do CIS. Os requisitos são um resumo em português: confira a redação e a numeração no benchmark oficial antes de citar na entrega.

## Estrutura

```
index.html        interface e cálculo
data/cis-aws.js   requisitos do CIS, perguntas e ações corretivas
data/bacen-cloud.js  requisitos do BACEN (4.893 e 5.274)
data/well-architected.js  requisitos do pilar de segurança da AWS
README.md         este arquivo, com as referências
```

## Adicionar outro framework

Copie `data/bacen-cloud.js` para, por exemplo, `data/well-architected.js`, troque o identificador (`["well-architected"]`), os domínios e os requisitos, e adicione uma tag `<script src="data/well-architected.js"></script>` no `index.html`, junto das outras. O framework aparece sozinho no seletor. Campos opcionais: `ref` (artigo ou controle de origem) e `aviso` (texto de aplicabilidade).

## Referências

Pesquisa feita em 05/11/2026. Itens marcados com **[confirmar]** vieram de fonte secundária ou de texto preliminar e devem ser conferidos na fonte oficial antes da entrega.

### 1. CIS AWS Foundations Benchmark

- Página oficial: https://www.cisecurity.org/benchmark/amazon-web-services
- Versão: a página oficial lista a **7.0.0** como a mais recente do Foundations. Fontes de terceiros ainda citam a 6.0.0 (jan/2026), e o AWS Security Hub CSPM suporta as versões 5.0.0, 3.0.0, 1.4.0 e 1.2.0.
- Acesso: PDF gratuito para uso não comercial, mediante cadastro (conferir os termos de uso).
- O CIS mantém benchmarks separados de AWS Compute Services (2.0.0), Database Services (2.0.0), End User Compute Services (1.2.0) e Storage Services (1.0.0). Parte do domínio “Armazenamento” do app pode estar nesses documentos **[confirmar no PDF]**.
- Uso no projeto: base da versão atual (`data/cis-aws.js`). Falta amarrar o resumo a uma versão e registrar a numeração oficial de cada recomendação. Três requisitos do IAM já trazem a numeração da versão 1.4.0 (itens 1.4, 1.5 e 1.7), conforme o próprio documento do Well-Architected (SEC01-BP02).

### 2. AWS Well-Architected Framework: pilar de segurança

- Página oficial: https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html
- PDF: https://docs.aws.amazon.com/pdfs/wellarchitected/latest/security-pillar/wellarchitected-security-pillar.pdf
- Data: o documento indica publicação em 06/11/2024 (copyright de 2026), conferido no PDF oficial em 05/11/2026.
- Estrutura: sete áreas de boas práticas (fundamentos de segurança, identidade e acesso, detecção, proteção da infraestrutura, proteção de dados, resposta a incidentes e segurança de aplicações). Confirmado no próprio documento.
- Uso no projeto: as áreas viram domínios e cada requisito resume uma boa prática. São 24 boas práticas (SEC01 a SEC11) escolhidas para cobrir as sete áreas, e o campo de referência traz o código SECxx-BPyy. Os pesos de SEC01 e SEC02 seguem o nível de risco do documento (alto = 3); os demais são estimativa do projeto. É orientado a processo e arquitetura, então as perguntas serão mais abertas que as do CIS.

### 3. LGPD (Lei nº 13.709/2018)

- Segurança: arts. 46 a 49 (medidas técnicas e administrativas, sigilo, incidentes e boas práticas).
- Guia da ANPD “Segurança da Informação para Agentes de Tratamento de Pequeno Porte” (out/2021), com checklist e uma parte sobre serviços em nuvem. É orientativo, sem efeito vinculante, e voltado a microempresas, empresas de pequeno porte e startups. A versão oficial fica em gov.br/anpd.
- Checklist (cópia): [Checklist de medidas de segurança, ANPD](https://www.fecomercio-ce.com.br/wp-content/uploads/2022/03/Checklist-Medidas-de-Seguran%C3%A7a-para-Agentes-de-Pequeno-Porte-ANPD-1.pdf)
- Resolução CD/ANPD nº 15/2024: comunicação de incidentes de segurança (24/04/2024). Prazo de 3 dias úteis **[confirmar]**.
- Resolução CD/ANPD nº 19/2024: transferência internacional de dados e cláusulas-padrão contratuais (23/08/2024; adequação até 23/08/2025). Relevante para nuvem em regiões fora do Brasil.
- Resolução CD/ANPD nº 18/2024: papel do encarregado (DPO).
- Uso no projeto: a LGPD não traz requisitos técnicos de nuvem. O caminho é usar o checklist da ANPD, mais incidentes e transferência internacional, mapeando cada pergunta ao artigo ou resolução.

### 4. BACEN

- Resolução CMN nº 4.893, de 26/02/2021: política de segurança cibernética e contratação de serviços de processamento, armazenamento de dados e computação em nuvem. Regras de nuvem nos arts. 11 a 18, conferidas na cópia do texto original de 2021; a versão consolidada atual pode ter outras alterações, então vale conferir no site do Banco Central. Texto: [Banco Central](https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20CMN&numero=4893)
- Resolução BCB nº 85/2021: mesmo objeto, para instituições de pagamento.
- Resolução CMN nº 5.274, de 18/12/2025: **altera** a 4.893, com prazo de adequação até 01/03/2026. Fonte: [Voto 88/2025-CMN](https://normativos.bcb.gov.br/Votos/CMN/202588/Voto_do_CMN_88_2025.pdf). Texto final conferido em 05/11/2026 em cópia do [LegisWeb](https://www.legisweb.com.br/legislacao/?id=488277); conferir também em normativos.bcb.gov.br.
- Resolução BCB nº 498/2025: provedores de serviços de TI da rede do sistema financeiro (RSFN).
- Segundo o texto final, os controles mínimos passam a incluir autenticação, criptografia, prevenção e detecção de intrusão, prevenção de vazamento de informações, proteção contra malware, rastreabilidade, backup, gestão de vulnerabilidades, controles de acesso, configuração segura, proteção de rede, gestão de certificados, integração segura de sistemas e inteligência de ameaças. Também prevê MFA para acesso à rede a partir de ambientes externos, teste de intrusão anual independente e isolamento dos ambientes Pix e STR, com instância dedicada quando houver nuvem.
- Contratação de nuvem (texto original da 4.893, conferido): serviços relevantes devem ser comunicados ao Banco Central em até 10 dias; no exterior, é preciso convênio entre o Banco Central e a autoridade do país ou autorização prévia (60 dias).
- Atenção: valem só para instituições autorizadas a funcionar pelo Banco Central. O assessment precisa de um filtro de aplicabilidade para esse framework.

### 5. Como cada referência vira requisito

| Framework | Natureza | Tipo de pergunta | Aplicabilidade |
|---|---|---|---|
| CIS AWS Foundations | Configuração técnica | Objetiva (sim/não verificável) | Quem usa AWS |
| Well-Architected (segurança) | Boas práticas de arquitetura e processo | Mais aberta, por prática | Quem usa AWS |
| LGPD + ANPD | Obrigação legal e orientação | Por artigo e checklist | Quem trata dados pessoais |
| BACEN | Norma regulatória | Por artigo da resolução | Só instituições reguladas pelo BC |

## Próximos passos

- [x] Pesquisar e anotar referências
- [x] Ler o texto final da Res. CMN 5.274/2025 e os arts. 11 a 18 da 4.893
- [x] Incluir o BACEN
- [x] Salvar e carregar respostas (JSON)
- [x] Exportar CSV e compartilhar o resumo por WhatsApp e Telegram
- [x] Mapa de calor das lacunas por domínio e prioridade
- [ ] Baixar o PDF do CIS na versão escolhida e registrar a numeração oficial
- [ ] Obter o guia e o checklist da ANPD no site oficial
- [ ] Combinar com o professor se a entrega precisa de um ou de todos os frameworks
- [x] Incluir o Well-Architected
- [ ] Incluir a LGPD (depende do checklist oficial da ANPD)
