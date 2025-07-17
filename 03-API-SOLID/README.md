# App

GymPass style app.

## RFs (Requisitos funcionais)

- [ ] Deve ser possivel se cadastrar;
- [ ] Deve ser possivel se autenticar
- [ ] Deve ser possivel obter o perfil de um usuario logado;
- [ ] Deve ser possivel obter o numero de check-ins realizados pelo usuario logado;
- [ ] Deve ser possivel o usuario obter o historico de check-ins;
- [ ] Deve ser possivel o usuario buscar academias proximas;
- [ ] Deve ser possivel o usuario buscar academias pelo nome;
- [ ] Deve ser possivel o usuario realizar check-in em uma academia;
- [ ] Deve ser possivel validar o check-in de um usuário;
- [ ] deve ser possivel cadastrar uma academia;

## RNs (Regras de negócio)

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] 0 usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] 0 usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] 0 check-in só pode ser validado até 20 minutos após criado; 
- [ ] 0 check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);
