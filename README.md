# 🍅 Pomodoro Timer

Um aplicativo web simples e intuitivo para gerenciar seu tempo usando a **Técnica Pomodoro**, ajudando você a aumentar sua produtividade e manter o foco em suas tarefas.

## 📋 O que é Pomodoro?

A Técnica Pomodoro é um método de gerenciamento de tempo que divide o trabalho em intervalos focados de 25 minutos (chamados de "pomodoros"), separados por pausas curtas e longas. Isso ajuda a:

- Melhorar a concentração
- Reduzir a fadiga mental
- Aumentar a produtividade
- Manter um equilíbrio saudável entre trabalho e descanso

## ⭐ Recursos

- ⏱️ **Timer configurável**: Customize a duração do trabalho, pausa curta e pausa longa
- 🔄 **Ciclos de trabalho**: Controle quantos pomodoros deseja fazer antes da pausa longa
- ▶️ **Play/Stop**: Inicie e pause o cronômetro a qualquer momento
- 🔙 **Auto-iniciar**: Opção para iniciar automaticamente o próximo ciclo
- ⚙️ **Configurações**: Ajuste todos os parâmetros do timer conforme sua necessidade
- 🎨 **Interface limpa**: Design minimalista e responsivo

## � Teste Online

Você pode acessar a versão online do Pomodoro Timer aqui:
👉 **[https://pomodorotimer-8cav.onrender.com/](https://pomodorotimer-8cav.onrender.com/)**

## �🚀 Como Usar

1. **Abra o arquivo** `index.html` em seu navegador
2. **Clique em Play** para iniciar o cronômetro de trabalho
3. **Trabalhe** durante os 25 minutos (ou o tempo que você configurou)
4. **Faça uma pausa** quando o timer terminar automaticamente
5. **Repita** o ciclo até completar 4 pomodoros (padrão)
6. **Aproveite** uma pausa longa após completar todos os ciclos

## ⚙️ Configurações

Clique no botão **Settings** para acessar as opções de personalização:

| Opção | Padrão | Descrição |
|-------|--------|-----------|
| Auto start | Desativado | Inicia automaticamente o próximo ciclo |
| Pomodoros | 4 | Número de ciclos de trabalho antes da pausa longa |
| Min/Pomodoro | 25 | Duração de cada ciclo de trabalho (em minutos) |
| Min/Short Break | 5 | Duração da pausa curta (em minutos) |
| Min/Long Break | 30 | Duração da pausa longa (em minutos) |

## 📁 Estrutura do Projeto

```
PomodoroTimer/
├── index.html      # Arquivo HTML com a estrutura da página
├── script.js       # Lógica principal do timer Pomodoro
├── configs.js      # Gerenciamento das configurações
├── style.css       # Estilos e layout da aplicação
└── README.md       # Este arquivo
```

## 🔧 Arquivos Principais

### `index.html`
Contém a estrutura HTML com:
- Display do timer
- Indicador do estado (Trabalho/Pausa)
- Contador de seções completadas
- Botões de ação (Play/Stop, Settings)
- Painel de configurações

### `script.js`
Implementa a lógica principal:
- Gerenciamento do cronômetro
- Transição entre estados (Trabalho → Pausa Curta → Pausa Longa)
- Atualização da interface em tempo real
- Controle de play/pause

### `configs.js`
Gerencia as configurações:
- Validação de inputs
- Salvamento de preferências
- Atualização de parâmetros do timer

### `style.css`
Estilos da aplicação:
- Layout responsivo com Flexbox
- Cores e gradiente de fundo
- Tipografia usando fonte Inter do Google Fonts
- Botões e inputs estilizados

## 🎯 Exemplos de Uso

**Sessão Padrão:**
- 25 min de trabalho → 5 min de pausa → 25 min de trabalho → ... (repetir 4x)
- Após 4 ciclos: 30 min de pausa longa

**Sessão Personalizada:**
- Pomodoro curto: 15 min de trabalho + 3 min de pausa (para tarefas simples)
- Maratona: 50 min de trabalho + 10 min de pausa (para tarefas complexas)

## 💡 Dicas de Produtividade

1. Use o Pomodoro para tarefas específicas e bem definidas
2. Evite interrupções durante o ciclo de trabalho
3. Use a pausa para descansar longe da tela
4. Ajuste os tempos conforme sua produtividade
5. Mantenha um registro de quantos pomodoros você conclui por dia

## 🌐 Compatibilidade

O aplicativo funciona em todos os navegadores modernos que suportam:
- HTML5
- CSS3
- JavaScript ES6+

Testado em:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

## 📝 Licença

Este projeto é de uso livre para fins pessoais e educacionais.

---

**Desenvolvido para aumentar sua produtividade**
