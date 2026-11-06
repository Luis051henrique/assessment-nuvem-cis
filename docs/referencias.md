# Referências do projeto: assessment de segurança em nuvem

Pesquisa feita em 05/11/2026 (primeiro passo pedido pelo professor). Cada item traz a fonte, o que ela cobre e como entra no assessment. Itens marcados com **[confirmar]** vieram de fonte secundária ou de texto preliminar e devem ser conferidos na fonte oficial antes de entrar no trabalho final. Nada aqui reproduz o texto das normas e dos benchmarks; é resumo em palavras próprias.

## 1. CIS (Center for Internet Security)

| Item | Detalhe |
|---|---|
| Documento | CIS Amazon Web Services Foundations Benchmark |
| Página oficial | https://www.cisecurity.org/benchmark/amazon-web-services |
| Versão | A página oficial lista a versão **7.0.0** como a mais recente do Foundations. Fontes de terceiros ainda citam a 6.0.0 (jan/2026) e o AWS Security Hub CSPM suporta 5.0.0, 3.0.0, 1.4.0 e 1.2.0. |
| Acesso | PDF gratuito para uso não comercial, mediante cadastro no site do CIS (conferir os termos de uso). |
| Benchmarks relacionados | A mesma página lista benchmarks separados: AWS Compute Services (2.0.0), Database Services (2.0.0), End User Compute Services (1.2.0) e Storage Services (1.0.0). |

**Como entra no assessment:** é a base da versão atual (`data/cis-aws.js`), com 24 requisitos resumidos em IAM, armazenamento, logs, monitoramento e rede.

**Lacunas a resolver:**
- O resumo do app não está amarrado a uma versão. Escolher uma versão (ideal: a 7.0.0 ou a mais recente que você conseguir baixar) e registrar o número oficial de cada recomendação.
- Como o CIS mantém benchmarks separados para storage, banco de dados e compute, os requisitos do domínio "Armazenamento" (S3, EBS, RDS) podem estar hoje nesses documentos e não no Foundations **[confirmar no PDF]**.
- Benchmarks equivalentes existem para Azure e GCP, se o professor quiser outras nuvens.

## 2. AWS Well-Architected Framework: pilar de segurança

| Item | Detalhe |
|---|---|
| Documento | Security Pillar: AWS Well-Architected Framework |
| Página oficial | https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html |
| PDF | https://docs.aws.amazon.com/pdfs/wellarchitected/latest/security-pillar/wellarchitected-security-pillar.pdf |
| Data | A página mostra publicação em 06/11/2024; o PDF traz copyright de 2025. **[confirmar a edição vigente]** |
| Estrutura | Sete áreas de boas práticas: fundamentos de segurança, gestão de identidade e acesso, detecção, proteção da infraestrutura, proteção de dados, resposta a incidentes e segurança de aplicações. A lista veio de fonte secundária; conferir na página oficial. |

**Como entra no assessment:** as sete áreas viram os domínios, e cada boa prática (códigos no formato SEC03-BP09) vira um requisito. Diferente do CIS, ele é orientado a processos e arquitetura, não a configuração técnica, então as perguntas serão mais abertas.

## 3. LGPD (Lei nº 13.709/2018)

| Item | Detalhe |
|---|---|
| Lei | Lei Geral de Proteção de Dados Pessoais. Segurança: arts. 46 a 49 (medidas técnicas e administrativas, sigilo, incidentes e boas práticas). |
| Guia da ANPD | Guia Orientativo "Segurança da Informação para Agentes de Tratamento de Pequeno Porte" (out/2021), com checklist. Tem seção sobre dispositivos móveis e serviços em nuvem. É orientativo, sem efeito vinculante, e voltado a microempresas, empresas de pequeno porte e startups. |
| Checklist (cópia) | https://www.fecomercio-ce.com.br/wp-content/uploads/2022/03/Checklist-Medidas-de-Segurança-para-Agentes-de-Pequeno-Porte-ANPD-1.pdf (a versão oficial fica no site da ANPD: gov.br/anpd) |
| Resolução CD/ANPD nº 15/2024 | Regulamento de comunicação de incidentes de segurança (24/04/2024). Prazo de comunicação de 3 dias úteis **[confirmar]**. |
| Resolução CD/ANPD nº 19/2024 | Transferência internacional de dados, com cláusulas-padrão contratuais (23/08/2024; prazo de adequação até 23/08/2025). Relevante para nuvem, porque dados em regiões fora do Brasil são transferência internacional. |
| Resolução CD/ANPD nº 18/2024 | Papel do encarregado (DPO). |

**Como entra no assessment:** a LGPD não traz requisitos técnicos de nuvem. O caminho é usar o checklist da ANPD (parte de nuvem e medidas técnicas) mais os temas de transferência internacional e incidentes, e mapear cada pergunta ao artigo ou resolução correspondente.

**Lacunas:** o guia da ANPD é voltado a pequeno porte; ver se vale para o público-alvo do assessment. Obter o PDF do guia e do checklist direto no site da ANPD.

## 4. BACEN (Banco Central do Brasil)

| Item | Detalhe |
|---|---|
| Norma principal | Resolução CMN nº 4.893, de 26/02/2021: política de segurança cibernética e requisitos para contratação de serviços de processamento, armazenamento de dados e computação em nuvem. Regras de nuvem nos arts. 11 a 18 **[confirmar]**. |
| Texto | https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolução CMN&numero=4893 |
| Instituições de pagamento | Resolução BCB nº 85/2021, com o mesmo objeto, para instituições de pagamento. |
| Atualização recente | Resolução CMN nº 5.274, de 18/12/2025, altera a 4.893. Prazo de adequação: 1º/03/2026. |
| Fonte da atualização | Voto 88/2025-CMN: https://normativos.bcb.gov.br/Votos/CMN/202588/Voto_do_CMN_88_2025.pdf. Atenção: o anexo desse voto é a minuta; **[confirmar o texto final da Res. 5.274 em normativos.bcb.gov.br]**. |
| Relacionada | Resolução BCB nº 498/2025 (provedores de serviços de TI da rede do sistema financeiro, RSFN). |

**O que a atualização de 2025 exige (segundo a minuta):** os controles mínimos da política de segurança passam a incluir autenticação, criptografia, prevenção e detecção de intrusão, prevenção de vazamento de informações, proteção contra malware, rastreabilidade, backup, gestão de vulnerabilidades, controles de acesso, configuração segura, proteção de rede, gestão de certificados digitais, integração segura de sistemas e inteligência de ameaças. Também prevê MFA para acesso à rede corporativa a partir de ambientes externos, teste de intrusão com periodicidade mínima anual feito de forma independente, e isolamento dos ambientes Pix e STR, com instância dedicada quando houver nuvem.

**Contratação de nuvem (fonte secundária, [confirmar]):** serviços relevantes devem ser comunicados ao Banco Central em até 10 dias da contratação; em contratação no exterior há exigências específicas, como convênio entre o Banco Central e a autoridade do país, e sem convênio é preciso pedir autorização com antecedência.

**Ponto de atenção:** essas resoluções valem para instituições autorizadas a funcionar pelo Banco Central (bancos, cooperativas, instituições de pagamento etc.), não para qualquer empresa. O assessment deve ter um filtro de aplicabilidade para esse framework.

## 5. Como cada referência vira requisito

| Framework | Natureza | Tipo de pergunta | Aplicabilidade |
|---|---|---|---|
| CIS AWS Foundations | Configuração técnica | Objetiva (sim/não verificável) | Quem usa AWS |
| Well-Architected (segurança) | Boas práticas de arquitetura e processo | Mais aberta, por prática | Quem usa AWS |
| LGPD + ANPD | Obrigação legal e orientação | Por artigo e checklist | Quem trata dados pessoais |
| BACEN | Norma regulatória | Por artigo da resolução | Só instituições reguladas pelo BC |

## 6. O que confirmar antes da entrega

1. Baixar o PDF do CIS na versão escolhida e registrar versão e numeração de cada requisito.
2. Conferir na página da AWS a edição vigente do pilar de segurança.
3. Obter o guia e o checklist da ANPD no site oficial.
4. Ler o texto final da Resolução CMN 5.274/2025 e os arts. 11 a 18 da 4.893.
5. Combinar com o professor quais frameworks entram na entrega (ele pediu "uma dessas", mas o áudio também fala em trabalhar com todas).
