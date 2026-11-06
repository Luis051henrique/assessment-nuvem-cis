window.FRAMEWORK = {
  id: "cis-aws",
  nome: "CIS AWS Foundations Benchmark (resumo)",
  domains: [
    { id: "IAM", nome: "Identidade e acesso (IAM)" },
    { id: "STO", nome: "Armazenamento e criptografia" },
    { id: "LOG", nome: "Registro de logs (Logging)" },
    { id: "MON", nome: "Monitoramento e alertas" },
    { id: "NET", nome: "Rede" }
  ],
  // w = peso (1 baixo, 2 médio, 3 alto). q = pergunta ao cliente. fix = ação corretiva.
  controls: [
    { id: "IAM-01", domain: "IAM", w: 3, q: "A conta root não possui chaves de acesso (access keys)?", fix: "Excluir as chaves de acesso do usuário root e usar roles ou usuários IAM com privilégio mínimo." },
    { id: "IAM-02", domain: "IAM", w: 3, q: "O usuário root tem MFA habilitado (idealmente MFA físico)?", fix: "Ativar MFA no root, preferencialmente com chave de hardware, e guardar o dispositivo em local seguro." },
    { id: "IAM-03", domain: "IAM", w: 3, q: "O usuário root é guardado em cofre e não é usado no dia a dia?", fix: "Guardar a senha do root em cofre, restringir o acesso e usá-lo apenas nas tarefas que exigem root. Monitorar qualquer login." },
    { id: "IAM-04", domain: "IAM", w: 3, q: "Todos os usuários IAM com acesso ao console usam MFA?", fix: "Exigir MFA para todos os usuários com senha de console; centralizar o acesso via SSO/IdP quando possível." },
    { id: "IAM-05", domain: "IAM", w: 2, q: "Existe política de senha forte (mínimo de 14 caracteres, bloqueio de reutilização)?", fix: "Configurar a política de senhas da conta com tamanho mínimo, complexidade e histórico de reutilização." },
    { id: "IAM-06", domain: "IAM", w: 2, q: "Credenciais sem uso há 45 dias ou mais são desativadas?", fix: "Revisar o credential report periodicamente e desativar usuários e chaves sem uso." },
    { id: "IAM-07", domain: "IAM", w: 2, q: "As chaves de acesso são rotacionadas a cada 90 dias ou menos?", fix: "Definir rotação periódica das access keys ou eliminá-las em favor de roles temporárias." },
    { id: "IAM-08", domain: "IAM", w: 1, q: "As permissões são concedidas por grupos ou roles, e não diretamente a usuários?", fix: "Criar grupos por função e mover as permissões diretas para eles." },
    { id: "IAM-09", domain: "IAM", w: 3, q: "Não há políticas com privilégio total (Action * em Resource *) anexadas a usuários, grupos ou roles?", fix: "Substituir políticas de administração total por permissões mínimas necessárias." },
    { id: "STO-01", domain: "STO", w: 3, q: "O bloqueio de acesso público (Block Public Access) está ativo nos buckets S3 e na conta?", fix: "Ativar o Block Public Access na conta e em todos os buckets que não precisam ser públicos." },
    { id: "STO-02", domain: "STO", w: 2, q: "Os buckets S3 usam criptografia em repouso?", fix: "Habilitar criptografia padrão (SSE-S3 ou SSE-KMS) em todos os buckets." },
    { id: "STO-03", domain: "STO", w: 2, q: "Os buckets S3 exigem conexão segura (HTTPS) via política?", fix: "Adicionar condição aws:SecureTransport nas bucket policies para negar acesso sem TLS." },
    { id: "STO-04", domain: "STO", w: 2, q: "Volumes EBS e bancos RDS são criptografados?", fix: "Ativar a criptografia por padrão para EBS e criar/migrar instâncias RDS com criptografia." },
    { id: "LOG-01", domain: "LOG", w: 3, q: "O CloudTrail está habilitado em todas as regiões?", fix: "Criar uma trail multi-região registrando eventos de gerenciamento." },
    { id: "LOG-02", domain: "LOG", w: 2, q: "A validação de integridade dos arquivos de log do CloudTrail está ativa?", fix: "Habilitar a validação de integridade de arquivos de log na trail." },
    { id: "LOG-03", domain: "LOG", w: 2, q: "O bucket dos logs é privado e tem registro de acesso (access logging)?", fix: "Bloquear acesso público ao bucket de logs e habilitar o server access logging." },
    { id: "LOG-04", domain: "LOG", w: 2, q: "O AWS Config está habilitado em todas as regiões em uso?", fix: "Ativar o AWS Config com gravação contínua dos recursos." },
    { id: "LOG-05", domain: "LOG", w: 2, q: "Os VPC Flow Logs estão habilitados nas VPCs?", fix: "Habilitar Flow Logs e enviar para o CloudWatch Logs ou S3." },
    { id: "LOG-06", domain: "LOG", w: 1, q: "A rotação automática está ativa nas chaves KMS gerenciadas pelo cliente?", fix: "Habilitar a rotação anual das chaves KMS gerenciadas pelo cliente." },
    { id: "MON-01", domain: "MON", w: 2, q: "Há alertas para uso do root e para login no console sem MFA?", fix: "Criar metric filters e alarmes no CloudWatch (ou regras no SIEM) para esses eventos." },
    { id: "MON-02", domain: "MON", w: 2, q: "Há alertas para mudanças em políticas IAM, configuração do CloudTrail e security groups?", fix: "Criar alarmes para as chamadas de API que alteram essas configurações e definir quem responde." },
    { id: "NET-01", domain: "NET", w: 3, q: "Nenhum security group libera SSH (22) ou RDP (3389) para 0.0.0.0/0?", fix: "Restringir a origem a IPs conhecidos ou usar Session Manager/bastion em vez de portas abertas." },
    { id: "NET-02", domain: "NET", w: 1, q: "O security group default de cada VPC bloqueia todo o tráfego?", fix: "Remover as regras de entrada e saída do security group default." },
    { id: "NET-03", domain: "NET", w: 2, q: "As instâncias EC2 exigem IMDSv2?", fix: "Configurar HttpTokens como required nas instâncias e nos launch templates." }
  ]
};
