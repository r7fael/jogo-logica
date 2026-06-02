const missionPool = [
  {
    title: "Missão 01: Porta de serviço",
    difficulty: "Inicial",
    seconds: 120,
    scene: "door",
    expected: "C AND NOT K",
    objective:
      "Abra a porta somente quando o cartão for válido e a câmera estiver desligada.",
    variables: {
      C: { label: "cartão válido", value: true },
      K: { label: "câmera ligada", value: false },
    },
  },
  {
    title: "Missão 02: Login fantasma",
    difficulty: "Básico",
    seconds: 135,
    scene: "card",
    expected: "L AND S AND NOT B",
    objective:
      "Libere o login apenas se o usuário e a senha estiverem corretos, e a conta não estiver bloqueada.",
    variables: {
      L: { label: "login correto", value: true },
      S: { label: "senha correta", value: true },
      B: { label: "conta bloqueada", value: false },
    },
  },
  {
    title: "Missão 03: Janela de manutenção",
    difficulty: "Básico",
    seconds: 150,
    scene: "server",
    expected: "A OR M",
    objective:
      "O servidor aceita entrada se o usuário for administrador ou se o modo manutenção estiver ativo.",
    variables: {
      A: { label: "usuário administrador", value: false },
      M: { label: "modo manutenção ativo", value: true },
    },
  },
  {
    title: "Missão 04: Token corporativo",
    difficulty: "Intermediário",
    seconds: 165,
    scene: "shield",
    expected: "A -> T",
    objective:
      "Configure a regra: se o usuário for administrador, então o token precisa estar válido.",
    variables: {
      A: { label: "usuário administrador", value: true },
      T: { label: "token válido", value: true },
    },
  },
  {
    title: "Missão 05: Alarme silencioso",
    difficulty: "Intermediário",
    seconds: 170,
    scene: "alarm",
    expected: "NOT I AND F",
    objective:
      "Crie uma condição segura em que não haja invasão detectada e o firewall esteja funcionando.",
    variables: {
      I: { label: "invasão detectada", value: false },
      F: { label: "firewall funcionando", value: true },
    },
  },
  {
    title: "Missão 06: Cofre de chaves",
    difficulty: "Avançado",
    seconds: 190,
    scene: "vault",
    expected: "(P OR Q) AND NOT R",
    objective:
      "Abra o cofre se pelo menos uma chave parcial estiver ativa e o bloqueio remoto estiver desligado.",
    variables: {
      P: { label: "chave parcial alfa", value: true },
      Q: { label: "chave parcial beta", value: false },
      R: { label: "bloqueio remoto ligado", value: false },
    },
  },
  {
    title: "Missão 07: Espelho de credenciais",
    difficulty: "Avançado",
    seconds: 210,
    scene: "biometric",
    expected: "D <-> B",
    objective:
      "O acesso de diagnóstico deve estar ativo se e somente se a verificação biométrica estiver válida.",
    variables: {
      D: { label: "diagnóstico ativo", value: true },
      B: { label: "biometria válida", value: true },
    },
  },
  {
    title: "Missão 08: Núcleo central",
    difficulty: "Final",
    seconds: 240,
    scene: "core",
    expected: "(A AND T AND NOT R) OR (M AND NOT F)",
    objective:
      "Invada o núcleo quando houver administrador com token válido e sem rastreamento, ou quando o modo manutenção estiver ativo e o firewall estiver desligado.",
    variables: {
      A: { label: "administrador conectado", value: true },
      T: { label: "token mestre válido", value: true },
      R: { label: "rastreamento ativo", value: false },
      M: { label: "modo manutenção ativo", value: false },
      F: { label: "firewall ligado", value: true },
    },
  },
  {
    title: "Sensor diurno",
    difficulty: "Inicial",
    seconds: 120,
    scene: "door",
    expected: "D AND NOT A",
    objective: "Abra a passagem somente quando o sensor diurno estiver ativo e o alarme estiver desligado.",
    variables: {
      D: { label: "sensor diurno ativo", value: true },
      A: { label: "alarme ligado", value: false },
    },
  },
  {
    title: "Terminal auxiliar",
    difficulty: "Inicial",
    seconds: 120,
    scene: "server",
    expected: "T OR E",
    objective: "Permita acesso se o terminal estiver autenticado ou se a entrada auxiliar estiver liberada.",
    variables: {
      T: { label: "terminal autenticado", value: false },
      E: { label: "entrada auxiliar liberada", value: true },
    },
  },
  {
    title: "Câmera cega",
    difficulty: "Inicial",
    seconds: 115,
    scene: "alarm",
    expected: "NOT C",
    objective: "Avance apenas quando a câmera de guarda não estiver ligada.",
    variables: {
      C: { label: "câmera de guarda ligada", value: false },
    },
  },
  {
    title: "Credencial dupla",
    difficulty: "Básico",
    seconds: 135,
    scene: "card",
    expected: "U AND P",
    objective: "Libere a sessão somente quando usuário e PIN forem validados.",
    variables: {
      U: { label: "usuário validado", value: true },
      P: { label: "PIN validado", value: true },
    },
  },
  {
    title: "Rota alternativa",
    difficulty: "Básico",
    seconds: 145,
    scene: "server",
    expected: "(G OR M) AND NOT L",
    objective: "Use a rota somente se o bloqueio local estiver inativo e pelo menos uma rota estiver disponível: gateway ou modo manual.",
    variables: {
      G: { label: "gateway disponível", value: false },
      M: { label: "modo manual disponível", value: true },
      L: { label: "bloqueio local ativo", value: false },
    },
  },
  {
    title: "Filtro de pacote",
    difficulty: "Básico",
    seconds: 140,
    scene: "shield",
    expected: "F AND NOT Q",
    objective: "A conexão passa somente quando o filtro estiver ativo e a quarentena estiver desligada.",
    variables: {
      F: { label: "filtro ativo", value: true },
      Q: { label: "quarentena ligada", value: false },
    },
  },
  {
    title: "Backup autorizado",
    difficulty: "Básico",
    seconds: 145,
    scene: "vault",
    expected: "B OR (A AND T)",
    objective: "Abra o backup quando houver liberação direta, ou quando autorização aprovada e token válido estiverem juntos.",
    variables: {
      B: { label: "liberação direta", value: false },
      A: { label: "autorização aprovada", value: true },
      T: { label: "token válido", value: true },
    },
  },
  {
    title: "Proxy reverso",
    difficulty: "Intermediário",
    seconds: 165,
    scene: "server",
    expected: "(P -> T) AND P",
    objective: "Valide o proxy somente se duas regras forem verdadeiras: o proxy está ativo; e, se o proxy está ativo, há token presente.",
    variables: {
      P: { label: "proxy ativo", value: true },
      T: { label: "token presente", value: true },
    },
  },
  {
    title: "Chave temporária",
    difficulty: "Intermediário",
    seconds: 165,
    scene: "vault",
    expected: "K -> NOT E",
    objective: "Se a chave temporária estiver ativa, então a emergência não pode estar ativa.",
    variables: {
      K: { label: "chave temporária ativa", value: false },
      E: { label: "emergência ativa", value: true },
    },
  },
  {
    title: "Trava de auditoria",
    difficulty: "Intermediário",
    seconds: 170,
    scene: "shield",
    expected: "A <-> R",
    objective: "A auditoria deve estar ativa se e somente se o relatório estiver aberto.",
    variables: {
      A: { label: "auditoria ativa", value: false },
      R: { label: "relatório aberto", value: false },
    },
  },
  {
    title: "Canal cifrado",
    difficulty: "Intermediário",
    seconds: 175,
    scene: "biometric",
    expected: "(C AND S) OR (M AND NOT B)",
    objective: "Entre por uma destas rotas: canal cifrado com selo seguro, ou modo manutenção sem bloqueio ativo.",
    variables: {
      C: { label: "canal cifrado", value: true },
      S: { label: "selo seguro", value: true },
      M: { label: "modo manutenção", value: false },
      B: { label: "bloqueio ativo", value: true },
    },
  },
  {
    title: "Camada de isolamento",
    difficulty: "Avançado",
    seconds: 190,
    scene: "shield",
    expected: "(I AND NOT B) OR (M AND F)",
    objective: "Passe por uma destas rotas: isolamento ativo sem bloqueio, ou manutenção ativa com firewall ativo.",
    variables: {
      I: { label: "isolamento ativo", value: true },
      B: { label: "bloqueio ativo", value: false },
      M: { label: "manutenção ativa", value: false },
      F: { label: "firewall ativo", value: true },
    },
  },
  {
    title: "Handshake fantasma",
    difficulty: "Avançado",
    seconds: 200,
    scene: "card",
    expected: "(H <-> T) AND (H OR R)",
    objective: "Sincronize somente se handshake e token tiverem o mesmo estado, e além disso houver handshake aceito ou rota reserva aberta.",
    variables: {
      H: { label: "handshake aceito", value: true },
      T: { label: "token aceito", value: true },
      R: { label: "rota reserva aberta", value: false },
    },
  },
  {
    title: "Firewall dividido",
    difficulty: "Avançado",
    seconds: 200,
    scene: "alarm",
    expected: "(A OR B) AND (NOT C OR D)",
    objective: "Acesse somente se algum canal estiver autorizado e, além disso, não houver conflito crítico ou houver desvio ativo.",
    variables: {
      A: { label: "canal alfa autorizado", value: false },
      B: { label: "canal beta autorizado", value: true },
      C: { label: "conflito crítico", value: true },
      D: { label: "desvio ativo", value: true },
    },
  },
  {
    title: "Sequência de quórum",
    difficulty: "Avançado",
    seconds: 205,
    scene: "vault",
    expected: "(A AND B) OR (C AND NOT D)",
    objective: "Abra quando as assinaturas alfa e beta estiverem aprovadas, ou quando o quórum alternativo estiver aprovado sem divergência detectada.",
    variables: {
      A: { label: "assinatura alfa aprovada", value: true },
      B: { label: "assinatura beta aprovada", value: false },
      C: { label: "quórum alternativo aprovado", value: true },
      D: { label: "divergência detectada", value: false },
    },
  },
  {
    title: "Raiz espelhada",
    difficulty: "Final",
    seconds: 235,
    scene: "core",
    expected: "((A AND T) OR (M AND S)) AND NOT R",
    objective: "Invada somente se não houver rastreamento ativo e houver uma destas rotas: administrador autenticado com token raiz válido, ou manutenção aberta com selo seguro.",
    variables: {
      A: { label: "administrador autenticado", value: true },
      T: { label: "token raiz válido", value: true },
      M: { label: "manutenção aberta", value: false },
      S: { label: "selo seguro", value: true },
      R: { label: "rastreamento ativo", value: false },
    },
  },
  {
    title: "Corte de emergência",
    difficulty: "Final",
    seconds: 240,
    scene: "core",
    expected: "(E AND NOT F) OR (A AND T AND NOT L)",
    objective: "Assuma o núcleo por uma destas rotas: emergência ativa sem firewall ligado, ou administrador conectado com token mestre válido e trava local inativa.",
    variables: {
      E: { label: "emergência ativa", value: false },
      F: { label: "firewall ligado", value: true },
      A: { label: "administrador conectado", value: true },
      T: { label: "token mestre válido", value: true },
      L: { label: "trava local ativa", value: false },
    },
  },
  {
    title: "Núcleo redundante",
    difficulty: "Final",
    seconds: 245,
    scene: "core",
    expected: "(P AND Q AND NOT R) OR (S AND (T OR M))",
    objective: "Controle o núcleo por uma destas rotas: processo primário e secundário ativos sem risco detectado, ou selo seguro junto de pelo menos um destes itens: token operacional ou manutenção ativa.",
    variables: {
      P: { label: "processo primário ativo", value: true },
      Q: { label: "processo secundário ativo", value: true },
      R: { label: "risco detectado", value: false },
      S: { label: "selo seguro", value: false },
      T: { label: "token operacional", value: true },
      M: { label: "manutenção ativa", value: false },
    },
  },
  {
    title: "Operação eclipse",
    difficulty: "Final",
    seconds: 250,
    scene: "core",
    expected: "((A -> T) AND (M <-> S) AND NOT F) OR B",
    objective: "Finalize se houver bypass mestre, ou se estas três regras forem verdadeiras: administrador ativo exige token entregue; manutenção ativa coincide com sinal de manutenção; e firewall está inativo.",
    variables: {
      A: { label: "administrador ativo", value: true },
      T: { label: "token entregue", value: true },
      M: { label: "manutenção ativa", value: false },
      S: { label: "sinal de manutenção", value: false },
      F: { label: "firewall ativo", value: false },
      B: { label: "bypass mestre", value: false },
    },
  },
];

const ERROR_TIME_PENALTY = 5;
const DEFENDER_BASE_AMBUSH_CHANCE = 0.12;
const DEFENDER_MAX_AMBUSH_CHANCE = 0.65;
const MAZE_LEVELS = [
  { size: 9, seconds: 22, label: "Rota curta" },
  { size: 11, seconds: 20, label: "Rota instável" },
  { size: 13, seconds: 18, label: "Rota fragmentada" },
  { size: 15, seconds: 16, label: "Rota crítica" },
];
const SUPABASE_URL = window.LOGIC_BREACH_CONFIG?.SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = window.LOGIC_BREACH_CONFIG?.SUPABASE_ANON_KEY ?? "";
const RUN_DIFFICULTY_SEQUENCE = [
  "Inicial",
  "Básico",
  "Básico",
  "Intermediário",
  "Intermediário",
  "Avançado",
  "Avançado",
  "Final",
];

const initialMissions = buildMissionRun();

const state = {
  activeMissions: initialMissions,
  mode: "single",
  role: "attacker",
  playerId: globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : String(Date.now() + Math.random()),
  playerName: "Operador",
  roomCode: "",
  roomChannel: null,
  supabaseClient: null,
  players: [],
  waitingForSync: false,
  attackerDraft: "",
  miniContext: null,
  missionIndex: 0,
  score: 0,
  trace: 0,
  remainingSeconds: initialMissions[0].seconds,
  timerId: null,
  defenderTimeoutId: null,
  miniTimerId: null,
  miniRemainingSeconds: MAZE_LEVELS[0].seconds,
  miniMaze: null,
  miniMazeLabel: MAZE_LEVELS[0].label,
  miniPlayer: { row: 1, col: 1 },
  miniGameActive: false,
  startedAt: Date.now(),
};

const elements = {
  modeScreen: document.querySelector("#modeScreen"),
  gameShell: document.querySelector("#gameShell"),
  singleMode: document.querySelector("#singleModeBtn"),
  createRoom: document.querySelector("#createRoomBtn"),
  joinRoom: document.querySelector("#joinRoomBtn"),
  playerName: document.querySelector("#playerNameInput"),
  roomCode: document.querySelector("#roomCodeInput"),
  multiplayerStatus: document.querySelector("#multiplayerStatus"),
  matrix: document.querySelector("#matrix"),
  missionTitle: document.querySelector("#missionTitle"),
  missionCounter: document.querySelector("#missionCounter"),
  difficulty: document.querySelector("#difficulty"),
  variablesList: document.querySelector("#variablesList"),
  objectiveText: document.querySelector("#objectiveText"),
  terminalLog: document.querySelector("#terminalLog"),
  systemStage: document.querySelector("#systemStage"),
  stageTitle: document.querySelector("#stageTitle"),
  stageState: document.querySelector("#stageState"),
  sceneArea: document.querySelector("#sceneArea"),
  logicFlow: document.querySelector("#logicFlow"),
  attackerInputPanel: document.querySelector("#attackerInputPanel"),
  defenderMonitor: document.querySelector("#defenderMonitor"),
  attackerDraft: document.querySelector("#attackerDraft"),
  input: document.querySelector("#expressionInput"),
  variablePad: document.querySelector("#variablePad"),
  submit: document.querySelector("#submitBtn"),
  clear: document.querySelector("#clearBtn"),
  timer: document.querySelector("#timer"),
  trace: document.querySelector("#trace"),
  score: document.querySelector("#score"),
  feedback: document.querySelector("#feedback"),
  endModal: document.querySelector("#endModal"),
  finalStats: document.querySelector("#finalStats"),
  restart: document.querySelector("#restartBtn"),
  defenderModal: document.querySelector("#defenderModal"),
  miniTitle: document.querySelector("#miniTitle"),
  miniTimer: document.querySelector("#miniTimer"),
  miniQuestion: document.querySelector("#miniQuestion"),
  miniValues: document.querySelector("#miniValues"),
  miniMaze: document.querySelector("#miniMaze"),
  multiplayerPanel: document.querySelector("#multiplayerPanel"),
  roomInfo: document.querySelector("#roomInfo"),
  playersList: document.querySelector("#playersList"),
  defenderControls: document.querySelector("#defenderControls"),
  manualCounter: document.querySelector("#manualCounterBtn"),
  traceBoost: document.querySelector("#traceBoostBtn"),
  timeCut: document.querySelector("#timeCutBtn"),
  leaveRoom: document.querySelector("#leaveRoomBtn"),
};

const tokenTypes = {
  NOT: "NOT",
  AND: "AND",
  OR: "OR",
  IMPLIES: "IMPLIES",
  IFF: "IFF",
  LPAREN: "LPAREN",
  RPAREN: "RPAREN",
  VAR: "VAR",
};

function shuffled(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function buildMissionRun() {
  const buckets = new Map();
  missionPool.forEach((mission) => {
    const missionsForLevel = buckets.get(mission.difficulty) ?? [];
    missionsForLevel.push(mission);
    buckets.set(mission.difficulty, missionsForLevel);
  });

  const shuffledBuckets = new Map(
    [...buckets.entries()].map(([difficulty, missionsForLevel]) => [difficulty, shuffled(missionsForLevel)]),
  );
  const used = new Set();

  return RUN_DIFFICULTY_SEQUENCE.map((difficulty) => {
    const bucket = shuffledBuckets.get(difficulty) ?? [];
    const mission = bucket.find((candidate) => !used.has(candidate.title)) ?? bucket[0];
    if (!mission) {
      throw new Error(`Nenhuma missão configurada para o nível ${difficulty}.`);
    }
    used.add(mission.title);
    return mission;
  });
}

function missionName(mission) {
  return mission.title.replace(/^Missão\s+\d+:\s*/i, "");
}

function showGameShell() {
  elements.modeScreen.hidden = true;
  elements.gameShell.hidden = false;
}

function showModeScreen() {
  clearInterval(state.timerId);
  clearTimeout(state.defenderTimeoutId);
  clearInterval(state.miniTimerId);
  state.miniGameActive = false;
  state.miniMaze = null;
  state.miniContext = null;
  state.attackerDraft = "";
  elements.gameShell.hidden = true;
  elements.modeScreen.hidden = false;
  elements.endModal.hidden = true;
  elements.defenderModal.hidden = true;
}

function setMultiplayerStatus(message, type = "") {
  elements.multiplayerStatus.textContent = message;
  elements.multiplayerStatus.style.color =
    type === "error" ? "var(--red)" : type === "success" ? "var(--green)" : "var(--muted)";
}

function startSinglePlayer() {
  leaveMultiplayerRoom(false);
  state.mode = "single";
  state.role = "attacker";
  showGameShell();
  startGame();
}

function normalizeRoomCode(value) {
  return value.trim().toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8);
}

function generateRoomCode() {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

function playerNameFromInput() {
  return elements.playerName.value.trim().slice(0, 18) || "Operador";
}

function hasSupabaseConfig() {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase);
}

function getSupabaseClient() {
  if (!hasSupabaseConfig()) return null;
  if (!state.supabaseClient) {
    state.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return state.supabaseClient;
}

function withTimeout(promise, milliseconds, timeoutValue) {
  return Promise.race([
    promise.catch(() => timeoutValue),
    new Promise((resolve) => {
      setTimeout(() => resolve(timeoutValue), milliseconds);
    }),
  ]);
}

function startGame() {
  clearInterval(state.timerId);
  clearTimeout(state.defenderTimeoutId);
  clearInterval(state.miniTimerId);
  state.activeMissions = buildMissionRun();
  state.missionIndex = 0;
  state.score = 0;
  state.trace = 0;
  state.miniGameActive = false;
  state.miniMaze = null;
  state.miniContext = null;
  state.attackerDraft = "";
  state.startedAt = Date.now();
  elements.endModal.hidden = true;
  elements.defenderModal.hidden = true;
  loadMission();
}

function loadMission(options = {}) {
  const preserveRemaining = options.preserveRemaining ?? false;
  const resetInput = options.resetInput ?? true;
  const resetLogEntries = options.resetLogEntries ?? true;
  const mission = currentMission();
  const displayTitle = `Missão ${String(state.missionIndex + 1).padStart(2, "0")}: ${missionName(mission)}`;
  if (!preserveRemaining) {
    state.remainingSeconds = mission.seconds;
  }
  state.miniGameActive = false;
  state.miniMaze = null;
  if (resetInput) {
    elements.input.value = "";
    if (state.role === "attacker") {
      state.attackerDraft = "";
    }
    renderAttackerDraft();
  }
  elements.missionTitle.textContent = displayTitle;
  elements.missionCounter.textContent = `${state.missionIndex + 1}/${state.activeMissions.length}`;
  elements.difficulty.textContent = mission.difficulty;
  elements.objectiveText.textContent = mission.objective;
  elements.feedback.textContent = "Aguardando expressão...";
  renderVariables(mission);
  renderVariablePad(mission);
  renderScene(mission);
  updateLogicFlow("");
  renderScoreboard();
  if (resetLogEntries) {
    resetLog([
    ["warn", `[SISTEMA] ${displayTitle}`],
    ["", `[OBJETIVO] ${mission.objective}`],
    ["", "[TERMINAL] Digite uma expressão proposicional equivalente ao objetivo."],
  ]);
  addLog(`[DEFESA] Chance de contra-ataque por tentativa: ${formatPercent(defenderAmbushChance())}.`, "warn");
    addLog(`[TERMINAL] Cada erro custa ${ERROR_TIME_PENALTY}s e aumenta o rastreamento.`);
  }
  startTimer();
  updateMultiplayerUI();
}

function currentMission() {
  return state.activeMissions[state.missionIndex];
}

function updateMultiplayerUI() {
  const multiplayer = state.mode === "multi";
  const defender = multiplayer && state.role === "defender";
  elements.multiplayerPanel.hidden = !multiplayer;
  elements.defenderControls.hidden = !defender;
  elements.attackerInputPanel.hidden = defender;
  elements.defenderMonitor.hidden = !defender;
  elements.input.closest(".input-zone").classList.toggle("locked", defender);
  elements.submit.textContent = multiplayer && state.role !== "attacker" ? "Aguardando atacante" : "Executar invasão";

  if (!multiplayer) return;

  const roleLabel = state.role === "attacker" ? "Atacante" : "Defensor";
  elements.roomInfo.textContent = `Sala ${state.roomCode} • voce: ${roleLabel}`;
  elements.playersList.innerHTML = "";
  state.players.forEach((player) => {
    const item = document.createElement("div");
    item.className = "player-pill";
    item.innerHTML = `<strong>${player.name}</strong><span>${player.role === "attacker" ? "Atacante" : "Defensor"}</span>`;
    elements.playersList.appendChild(item);
  });
  renderAttackerDraft();
}

function renderAttackerDraft() {
  if (!elements.attackerDraft) return;
  elements.attackerDraft.textContent = state.attackerDraft.trim() || "Aguardando digitacao...";
}

function createGameSnapshot() {
  return {
    activeMissions: state.activeMissions,
    missionIndex: state.missionIndex,
    score: state.score,
    trace: state.trace,
    remainingSeconds: state.remainingSeconds,
    startedAt: state.startedAt,
    attackerDraft: state.attackerDraft,
  };
}

function applyGameSnapshot(snapshot) {
  state.activeMissions = snapshot.activeMissions;
  state.missionIndex = snapshot.missionIndex;
  state.score = snapshot.score;
  state.trace = snapshot.trace;
  state.remainingSeconds = snapshot.remainingSeconds;
  state.startedAt = snapshot.startedAt;
  state.attackerDraft = snapshot.attackerDraft ?? "";
  state.waitingForSync = false;
  showGameShell();
  loadMission({
    preserveRemaining: true,
    resetInput: state.role !== "attacker",
    resetLogEntries: false,
  });
  addLog("[REDE] Estado da sala sincronizado.", "success");
}

function sendRoomEvent(kind, payload = {}) {
  if (!state.roomChannel) return;
  state.roomChannel.send({
    type: "broadcast",
    event: "game",
    payload: {
      kind,
      senderId: state.playerId,
      senderName: state.playerName,
      ...payload,
    },
  });
}

function syncRoomState() {
  if (state.mode !== "multi" || state.role !== "attacker") return;
  sendRoomEvent("state_sync", { snapshot: createGameSnapshot() });
}

function updatePresenceList() {
  if (!state.roomChannel) return;
  const presenceState = state.roomChannel.presenceState();
  state.players = Object.values(presenceState)
    .flat()
    .map((player) => ({
      id: player.playerId,
      name: player.name,
      role: player.role,
    }))
    .sort((a, b) => (a.role === "attacker" ? -1 : 1) - (b.role === "attacker" ? -1 : 1));
  updateMultiplayerUI();
}

function handleRoomEvent(payload) {
  const event = payload.payload;
  if (!event || event.senderId === state.playerId) return;

  if (event.kind === "request_state") {
    syncRoomState();
    return;
  }

  if (event.kind === "state_sync" && event.snapshot) {
    applyGameSnapshot(event.snapshot);
    return;
  }

  if (event.kind === "attacker_typing" && state.role === "defender") {
    state.attackerDraft = event.value ?? "";
    renderAttackerDraft();
    return;
  }

  if (event.kind === "defender_action") {
    applyDefenderAction(event.action, event.senderName);
    return;
  }

  if (event.kind === "counter_challenge" && state.role === "attacker") {
    openDefenderMinigame(event.challenge);
    return;
  }

  if (event.kind === "counter_result") {
    handleRemoteCounterResult(event);
    return;
  }

  if (event.kind === "game_over") {
    const message = event.success
      ? "O atacante concluiu todas as missões. Defesa derrotada."
      : event.message;
    endGame(false, message);
  }
}

function applyDefenderAction(action, defenderName = "Defensor") {
  if (action === "trace") {
    state.trace = Math.min(100, state.trace + 10);
    addLog(`[DEFESA] ${defenderName} intensificou o rastreamento: +10%.`, "warn");
  }

  if (action === "time") {
    state.remainingSeconds = Math.max(0, state.remainingSeconds - 10);
    addLog(`[DEFESA] ${defenderName} cortou 10s da invasao.`, "warn");
  }

  renderTimer();
  renderScoreboard();
  failOrContinue();
}

function runDefenderActionImmediate(action) {
  if (state.mode !== "multi" || state.role !== "defender") return;
  if (state.waitingForSync) {
    addLog("[REDE] Aguarde a sincronização da sala antes de defender.", "warn");
    return;
  }

  if (action === "counter") {
    const challenge = createDefenderChallenge();
    sendRoomEvent("counter_challenge", { challenge });
    addLog("[DEFESA] Contra-ataque enviado ao atacante.", "warn");
    return;
  }

  applyDefenderAction(action, state.playerName);
  sendRoomEvent("defender_action", { action });
}

function runDefenderAction(action) {
  if (state.mode !== "multi" || state.role !== "defender") return;
  if (state.waitingForSync) {
    addLog("[REDE] Aguarde a sincronizacao da sala antes de defender.", "warn");
    return;
  }
  if (state.miniGameActive) {
    addLog("[DEFESA] Complete o desafio atual antes de iniciar outra acao.", "warn");
    return;
  }

  openDefenderMinigame(createDefenderChallenge(), { type: "defender_action", action });
}

function completeDefenderAction(action) {
  if (action === "counter") {
    const challenge = createDefenderChallenge();
    sendRoomEvent("counter_challenge", { challenge });
    addLog("[DEFESA] Desafio concluido. Contra-ataque enviado ao atacante.", "warn");
    return;
  }

  applyDefenderAction(action, state.playerName);
  sendRoomEvent("defender_action", { action });
}

function defenderActionLabel(action) {
  if (action === "trace") return "rastreamento";
  if (action === "time") return "corte de tempo";
  return "contra-ataque";
}

function handleRemoteCounterResult(event) {
  if (event.success) {
    addLog(`[DEFESA] ${event.senderName} neutralizou o contra-ataque.`, "success");
    return;
  }

  addLog(`[DEFESA] ${event.senderName} falhou no contra-ataque.`, "error");
  endGame(false, "O defensor venceu o contra-ataque multiplayer.");
}

async function joinMultiplayerRoom(role, requestedCode = "") {
  const client = getSupabaseClient();
  if (!client) {
    setMultiplayerStatus("Configure SUPABASE_URL e SUPABASE_ANON_KEY no script.js para usar multiplayer.", "error");
    return;
  }

  const roomCode = normalizeRoomCode(requestedCode) || generateRoomCode();
  state.mode = "multi";
  state.role = role;
  state.roomCode = roomCode;
  state.playerName = playerNameFromInput();
  state.waitingForSync = role === "defender";
  elements.roomCode.value = roomCode;
  setMultiplayerStatus(`Conectando na sala ${roomCode}...`);
  await leaveMultiplayerRoom(false);
  state.mode = "multi";
  state.role = role;
  state.roomCode = roomCode;
  state.playerName = playerNameFromInput();
  state.waitingForSync = role === "defender";

  const channel = client.channel(`logic-breach:${roomCode}`, {
    config: {
      broadcast: { self: false },
      presence: { key: state.playerId },
    },
  });

  state.roomChannel = channel;
  channel.on("presence", { event: "sync" }, updatePresenceList);
  channel.on("broadcast", { event: "game" }, handleRoomEvent);
  channel.subscribe(async (status) => {
    if (state.roomChannel !== channel) return;

    if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
      setMultiplayerStatus(
        `Nao foi possivel conectar na sala ${roomCode}. Verifique a URL/chave do Supabase e se Realtime esta ativo.`,
        "error",
      );
      await leaveMultiplayerRoom(false);
      state.mode = "single";
      state.role = "attacker";
      return;
    }

    if (status === "CLOSED") return;

    if (status !== "SUBSCRIBED") return;

    showGameShell();
    setMultiplayerStatus(`Sala ${roomCode} conectada.`, "success");

    const trackStatus = await withTimeout(
      channel.track({
        playerId: state.playerId,
        name: state.playerName,
        role: state.role,
      }),
      5000,
      "timed_out",
    );

    if (trackStatus !== "ok") {
      setMultiplayerStatus(
        `Sala ${roomCode} conectada, mas a presenca nao confirmou. O jogo vai tentar sincronizar mesmo assim.`,
        "error",
      );
    }

    if (state.roomChannel !== channel) return;
    updatePresenceList();

    if (role === "attacker") {
      startGame();
      syncRoomState();
    } else {
      elements.multiplayerPanel.hidden = false;
      elements.roomInfo.textContent = `Sala ${roomCode} • aguardando atacante`;
      resetLog([["warn", `[REDE] Entrou na sala ${roomCode} como defensor.`]]);
      updateMultiplayerUI();
      sendRoomEvent("request_state");
    }
  });
}

async function leaveMultiplayerRoom(showMenu = true) {
  if (state.roomChannel && state.supabaseClient) {
    await state.supabaseClient.removeChannel(state.roomChannel);
  }
  state.roomChannel = null;
  state.players = [];
  state.roomCode = "";
  state.waitingForSync = false;
  if (showMenu) {
    showModeScreen();
    setMultiplayerStatus("");
  }
}

function stateLabel(value) {
  return value ? "SIM" : "NAO";
}

function renderVariables(mission) {
  elements.variablesList.innerHTML = "";
  Object.entries(mission.variables).forEach(([name, info]) => {
    const item = document.createElement("div");
    item.className = "variable";
    item.innerHTML = `
      <code>${name}</code>
      <span>${info.label}</span>
      <b class="truth ${info.value ? "" : "false"}" title="${info.label}: ${stateLabel(info.value)}">${stateLabel(info.value)}</b>
    `;
    elements.variablesList.appendChild(item);
  });
}

function renderVariablePad(mission) {
  elements.variablePad.innerHTML = "";

  const label = document.createElement("span");
  label.className = "pad-label";
  label.textContent = "Variáveis";
  elements.variablePad.appendChild(label);

  Object.entries(mission.variables).forEach(([name, info]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "variable-token";
    button.dataset.insert = name;
    button.title = `${name}: ${info.label} (${stateLabel(info.value)})`;
    button.innerHTML = `<code>${name}</code><span>${stateLabel(info.value)}</span>`;
    elements.variablePad.appendChild(button);
  });
}

function renderScene(mission) {
  const scenes = {
    door: {
      title: "Porta biométrica",
      html: `
        <div class="stage-visual">
          <div class="data-beam"></div>
          <div class="door-frame"><div class="door-panel"><span class="door-light"></span></div></div>
          <div class="keypad"><i></i><i></i><i></i><i></i></div>
        </div>
      `,
    },
    card: {
      title: "Leitor de credenciais",
      html: `
        <div class="stage-visual">
          <div class="data-beam"></div>
          <div class="access-card"></div>
          <div class="scanner"></div>
        </div>
      `,
    },
    server: {
      title: "Cluster de manutenção",
      html: `
        <div class="stage-visual">
          <div class="data-beam"></div>
          <div class="server-stack"><span></span><span></span><span></span></div>
        </div>
      `,
    },
    shield: {
      title: "Firewall condicional",
      html: `
        <div class="stage-visual">
          <div class="data-beam"></div>
          <div class="shield"></div>
        </div>
      `,
    },
    alarm: {
      title: "Alarme silencioso",
      html: `
        <div class="stage-visual">
          <div class="data-beam"></div>
          <div class="alarm-tower"></div>
          <div class="alarm-base"></div>
        </div>
      `,
    },
    vault: {
      title: "Cofre de chaves",
      html: `
        <div class="stage-visual">
          <div class="data-beam"></div>
          <div class="vault"><div class="vault-wheel"></div></div>
        </div>
      `,
    },
    biometric: {
      title: "Espelho biométrico",
      html: `
        <div class="stage-visual">
          <div class="data-beam"></div>
          <div class="biometric"></div>
        </div>
      `,
    },
    core: {
      title: "Núcleo central",
      html: `
        <div class="stage-visual">
          <div class="data-beam"></div>
          <div class="core-ring"></div>
        </div>
      `,
    },
  };

  const scene = scenes[mission.scene] ?? scenes.server;
  elements.stageTitle.textContent = scene.title;
  elements.stageState.textContent = "Aguardando";
  elements.systemStage.className = `system-stage scene-${mission.scene}`;
  elements.systemStage.style.setProperty("--charge", 0);
  elements.sceneArea.innerHTML = scene.html;
}

function updateLogicFlow(raw) {
  const trimmed = raw.trim();
  const expectedLength = Math.max(1, currentMission().expected.length);
  const charge = Math.min(100, Math.round((trimmed.length / expectedLength) * 100));
  elements.systemStage.style.setProperty("--charge", charge);

  elements.logicFlow.innerHTML = "";
  if (!trimmed) {
    elements.logicFlow.innerHTML = '<span class="flow-empty">Fluxo lógico aguardando entrada...</span>';
    setStageMode("idle");
    return;
  }

  setStageMode("typing");
  const pieces = trimmed.match(/<->|->|[A-Za-z]+|[¬∧∨→↔!~&|^()]|./g) ?? [];
  pieces.slice(-16).forEach((piece) => {
    if (/\s/.test(piece)) return;
    const chip = document.createElement("span");
    chip.className = `flow-chip ${chipType(piece)}`;
    chip.textContent = piece.toUpperCase();
    elements.logicFlow.appendChild(chip);
  });
}

function chipType(piece) {
  const normalized = piece.toUpperCase();
  if (["¬", "!", "~", "NOT", "NAO", "NÃO"].includes(normalized)) return "negation";
  if (["∧", "∨", "→", "↔", "AND", "OR", "OU", "->", "<->", "&", "|", "^"].includes(normalized)) {
    return "operator";
  }
  return "";
}

function setStageMode(mode) {
  elements.systemStage.classList.remove("typing", "success", "error");
  if (mode !== "idle") {
    elements.systemStage.classList.add(mode);
  }
  const labels = {
    idle: "Aguardando",
    typing: "Analisando",
    success: "Liberado",
    error: "Bloqueado",
  };
  elements.stageState.textContent = labels[mode] ?? labels.idle;
}

function pulseStage(mode) {
  setStageMode(mode);
  window.setTimeout(() => {
    if (mode !== "success") {
      updateLogicFlow(elements.input.value);
    }
  }, 520);
}

function resetLog(lines) {
  elements.terminalLog.innerHTML = "";
  lines.forEach(([type, text]) => addLog(text, type));
}

function addLog(text, type = "") {
  const line = document.createElement("p");
  line.className = `log-line ${type}`.trim();
  line.textContent = `> ${text}`;
  elements.terminalLog.appendChild(line);
  elements.terminalLog.scrollTop = elements.terminalLog.scrollHeight;
}

function startTimer() {
  clearInterval(state.timerId);
  renderTimer();
  state.timerId = setInterval(() => {
    if (state.miniGameActive) return;
    state.remainingSeconds -= 1;
    renderTimer();

    if (state.remainingSeconds <= 0) {
      state.trace = 100;
      renderScoreboard();
      addLog("[ALERTA] Tempo esgotado. O sistema completou o rastreamento.", "error");
      pulseStage("error");
      endGame(false);
    }
  }, 1000);
}

function renderTimer() {
  const minutes = Math.floor(Math.max(0, state.remainingSeconds) / 60);
  const seconds = Math.max(0, state.remainingSeconds) % 60;
  elements.timer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function renderScoreboard() {
  elements.trace.textContent = `${state.trace}%`;
  elements.score.textContent = String(state.score);
}

function applyErrorPenalty(traceAmount) {
  state.remainingSeconds = Math.max(0, state.remainingSeconds - ERROR_TIME_PENALTY);
  state.trace = Math.min(100, state.trace + traceAmount);
  renderTimer();
  renderScoreboard();
  addLog(`[PENALIDADE] Erro detectado: -${ERROR_TIME_PENALTY}s.`, "warn");
}

function defenderAmbushChance() {
  if (state.activeMissions.length <= 1) return DEFENDER_MAX_AMBUSH_CHANCE;

  const progress = state.missionIndex / (state.activeMissions.length - 1);
  const chance =
    DEFENDER_BASE_AMBUSH_CHANCE +
    (DEFENDER_MAX_AMBUSH_CHANCE - DEFENDER_BASE_AMBUSH_CHANCE) * progress;
  return Math.min(DEFENDER_MAX_AMBUSH_CHANCE, chance);
}

function formatPercent(value) {
  return `${Math.round(value * 100)}%`;
}

function tryDefenderAmbush() {
  clearTimeout(state.defenderTimeoutId);
  const chance = defenderAmbushChance();
  if (Math.random() >= chance) return false;

  triggerDefenderMinigame();
  return state.miniGameActive;
}

function triggerDefenderMinigame() {
  if (state.miniGameActive || !elements.endModal.hidden || state.remainingSeconds <= 0) return;

  const challenge = createDefenderChallenge();
  openDefenderMinigame(challenge);
}

function openDefenderMinigame(challenge, context = { type: "attacker_escape" }) {
  const mazeChallenge = challenge?.maze ? challenge : createDefenderChallenge();
  const fallbackLevel = currentMazeLevel();
  state.miniGameActive = true;
  state.miniContext = context;
  state.miniMaze = mazeChallenge.maze;
  state.miniMazeLabel = mazeChallenge.label ?? fallbackLevel.label;
  state.miniPlayer = { ...mazeChallenge.start };
  state.miniRemainingSeconds = mazeChallenge.seconds ?? fallbackLevel.seconds;
  elements.miniQuestion.textContent = `${state.miniMazeLabel}: leve o pulso de invasão até a saída antes do defensor fechar a rota.`;
  if (context.type === "defender_action") {
    elements.miniTitle.textContent = `Acao de defesa: ${defenderActionLabel(context.action)}`;
    elements.miniQuestion.textContent = `${state.miniMazeLabel}: complete a rota para ativar ${defenderActionLabel(context.action)}.`;
  } else {
    elements.miniTitle.textContent = "Contra-ataque no labirinto";
  }
  renderMazeChallenge();
  elements.miniTimer.textContent = `${state.miniRemainingSeconds}s`;
  elements.defenderModal.hidden = false;
  if (context.type !== "defender_action") {
    addLog("[DEFESA] Contra-ataque em labirinto detectado. Escape da rota ou perca tudo.", "error");
  }
  if (context.type === "defender_action") {
    addLog(`[DEFESA] Desafio iniciado para ${defenderActionLabel(context.action)}.`, "warn");
  } else {
    pulseStage("error");
  }

  clearInterval(state.miniTimerId);
  state.miniTimerId = setInterval(() => {
    state.miniRemainingSeconds -= 1;
    elements.miniTimer.textContent = `${state.miniRemainingSeconds}s`;
    if (state.miniRemainingSeconds <= 0) {
      failDefenderMinigame("Tempo do contra-ataque esgotado.");
    }
  }, 1000);
}

function createDefenderChallenge() {
  const level = currentMazeLevel();
  const mazeSize = level.size;
  const start = { row: 1, col: 1 };
  const exit = { row: mazeSize - 2, col: mazeSize - 2 };
  const maze = Array.from({ length: mazeSize }, () => Array(mazeSize).fill("#"));

  function carve(row, col) {
    maze[row][col] = ".";
    shuffled([
      [-2, 0],
      [2, 0],
      [0, -2],
      [0, 2],
    ]).forEach(([rowDelta, colDelta]) => {
      const nextRow = row + rowDelta;
      const nextCol = col + colDelta;
      if (nextRow <= 0 || nextRow >= mazeSize - 1 || nextCol <= 0 || nextCol >= mazeSize - 1) return;
      if (maze[nextRow][nextCol] !== "#") return;
      maze[row + rowDelta / 2][col + colDelta / 2] = ".";
      carve(nextRow, nextCol);
    });
  }

  carve(start.row, start.col);
  maze[start.row][start.col] = "S";
  maze[exit.row][exit.col] = "X";

  return {
    maze: maze.map((row) => row.join("")),
    start,
    exit,
    seconds: level.seconds,
    label: level.label,
  };
}

function currentMazeLevel() {
  const maxMissionIndex = Math.max(1, state.activeMissions.length - 1);
  const progress = state.missionIndex / maxMissionIndex;
  const levelIndex = Math.min(MAZE_LEVELS.length - 1, Math.floor(progress * MAZE_LEVELS.length));
  return MAZE_LEVELS[levelIndex];
}

function renderMazeChallenge() {
  if (!state.miniGameActive) return;
  elements.miniMaze.innerHTML = "";
  elements.miniMaze.style.setProperty("--maze-size", state.miniMaze.length);

  state.miniMaze.forEach((row, rowIndex) => {
    [...row].forEach((cell, colIndex) => {
      const tile = document.createElement("span");
      const isPlayer = state.miniPlayer.row === rowIndex && state.miniPlayer.col === colIndex;
      tile.className = `maze-cell ${cell === "#" ? "wall" : "path"} ${cell === "X" ? "exit" : ""} ${
        isPlayer ? "player" : ""
      }`;
      tile.textContent = cell === "X" ? "◆" : "";
      elements.miniMaze.appendChild(tile);
    });
  });

  elements.miniValues.innerHTML = `
    <span><code>${state.miniMaze.length}x${state.miniMaze.length}</code>${state.miniMazeLabel}</span>
    <span><code>SAÍDA</code>rota segura</span>
  `;
}

function moveMazePlayer(rowDelta, colDelta) {
  if (!state.miniGameActive || !state.miniMaze) return;
  const nextRow = state.miniPlayer.row + rowDelta;
  const nextCol = state.miniPlayer.col + colDelta;
  const nextCell = state.miniMaze[nextRow]?.[nextCol];
  if (!nextCell || nextCell === "#") return;

  state.miniPlayer = { row: nextRow, col: nextCol };
  renderMazeChallenge();
  if (nextCell === "X") {
    completeDefenderMinigame();
  }
}

function completeDefenderMinigame() {
  if (!state.miniGameActive) return;
  const miniContext = state.miniContext;
  clearInterval(state.miniTimerId);
  state.miniGameActive = false;
  state.miniMaze = null;
  state.miniContext = null;
  elements.defenderModal.hidden = true;
  if (miniContext?.type === "defender_action") {
    completeDefenderAction(miniContext.action);
    return;
  }
  addLog("[DEFESA] Contra-ataque neutralizado. A invasão continua.", "success");
  setFeedback("Defensor burlado. Continue a invasão.", "success");
  updateLogicFlow(elements.input.value);
  if (state.mode === "multi") {
    sendRoomEvent("counter_result", { success: true });
  }
}

function failDefenderMinigame(reason) {
  const miniContext = state.miniContext;
  clearInterval(state.miniTimerId);
  state.miniGameActive = false;
  state.miniMaze = null;
  state.miniContext = null;
  elements.defenderModal.hidden = true;
  if (miniContext?.type === "defender_action") {
    addLog(`[DEFESA] ${reason} Acao cancelada.`, "error");
    setFeedback("Defensor falhou no desafio. Nenhum efeito aplicado.", "warn");
    return;
  }
  state.score = 0;
  state.trace = 100;
  renderScoreboard();
  addLog(`[DEFESA] ${reason} Você foi removido do sistema.`, "error");
  if (state.mode === "multi") {
    sendRoomEvent("counter_result", { success: false, reason });
  }
  endGame(false, "O defensor venceu o contra-ataque. Você perdeu todos os pontos.");
}

function submitExpression() {
  const raw = elements.input.value.trim();
  if (state.miniGameActive) return;
  if (state.mode === "multi" && state.role !== "attacker") {
    setFeedback("No multiplayer, apenas o atacante envia tentativas.", "warn");
    return;
  }
  if (!raw) {
    applyErrorPenalty(5);
    setFeedback("Digite uma expressão antes de executar.", "warn");
    pulseStage("error");
    failOrContinue();
    syncRoomState();
    return;
  }

  if (state.mode === "single" && tryDefenderAmbush()) return;

  const mission = currentMission();
  try {
    const userAst = parse(raw);
    const expectedAst = parse(mission.expected);
    const variables = Object.keys(mission.variables);
    const equivalent = areEquivalent(userAst, expectedAst, variables);
    const currentValue = evaluate(userAst, valuesFromMission(mission));

    addLog(`[ENTRADA] ${raw}`);
    addLog(`[ESTADO ATUAL] ${formatSubstitution(userAst, valuesFromMission(mission))}`);
    addLog(`[RESULTADO] ${currentValue ? "VERDADEIRO" : "FALSO"}`, currentValue ? "success" : "error");

    if (equivalent && currentValue) {
      const gained = Math.max(50, state.remainingSeconds * 4 - state.trace);
      state.score += gained;
      setFeedback(`Bypass aceito. +${gained} pontos.`, "success");
      addLog("[ACESSO] Expressão equivalente ao objetivo. Sistema invadido.", "success");
      pulseStage("success");
      nextMission();
      return;
    }

    applyErrorPenalty(15);
    if (!equivalent) {
      setFeedback("A expressão não representa exatamente a regra do objetivo.", "error");
      addLog("[NEGADO] A fórmula não é equivalente à condição exigida.", "error");
    } else {
      setFeedback("A regra está correta, mas neste estado ela resultou em falso.", "error");
      addLog("[NEGADO] A fórmula ficou falsa no estado atual do sistema.", "error");
    }
    pulseStage("error");
    failOrContinue();
    syncRoomState();
  } catch (error) {
    applyErrorPenalty(10);
    setFeedback(error.message, "error");
    addLog(`[ERRO] ${error.message}`, "error");
    pulseStage("error");
    failOrContinue();
    syncRoomState();
  }
}

function nextMission() {
  clearInterval(state.timerId);
  clearTimeout(state.defenderTimeoutId);
  clearInterval(state.miniTimerId);
  state.miniContext = null;
  renderScoreboard();
  setTimeout(() => {
    state.missionIndex += 1;
    if (state.missionIndex >= state.activeMissions.length) {
      endGame(true);
      syncRoomState();
    } else {
      loadMission();
      syncRoomState();
    }
  }, 900);
}

function failOrContinue() {
  if (state.remainingSeconds <= 0) {
    state.trace = 100;
  }
  renderScoreboard();
  if (state.trace >= 100 || state.remainingSeconds <= 0) {
    endGame(false);
  }
}

function endGame(success, failureMessage = "") {
  clearInterval(state.timerId);
  clearTimeout(state.defenderTimeoutId);
  clearInterval(state.miniTimerId);
  state.miniGameActive = false;
  state.miniMaze = null;
  state.miniContext = null;
  elements.defenderModal.hidden = true;
  if (state.mode === "multi" && state.role === "attacker") {
    sendRoomEvent("game_over", { success, message: failureMessage });
  }
  const elapsed = Math.floor((Date.now() - state.startedAt) / 1000);
  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;
  if (!success && failureMessage) {
    elements.finalStats.textContent = failureMessage;
    elements.endModal.hidden = false;
    return;
  }
  elements.finalStats.textContent = success
    ? `Você concluiu todas as missões com ${state.score} pontos em ${minutes}m ${seconds}s.`
    : `Rastreamento chegou a 100%. Pontuação final: ${state.score}.`;
  elements.endModal.hidden = false;
}

function setFeedback(message, type) {
  elements.feedback.textContent = message;
  elements.feedback.style.color =
    type === "success" ? "var(--green)" : type === "error" ? "var(--red)" : "var(--amber)";
}

function valuesFromMission(mission) {
  return Object.fromEntries(
    Object.entries(mission.variables).map(([name, info]) => [name, info.value]),
  );
}

function formatSubstitution(ast, values) {
  return formatAst(ast, values);
}

function formatAst(node, values) {
  if (node.type === "VAR") {
    return `${node.name}=${values[node.name] ? "V" : "F"}`;
  }
  if (node.type === "NOT") {
    return `¬(${formatAst(node.value, values)})`;
  }
  return `(${formatAst(node.left, values)} ${node.symbol} ${formatAst(node.right, values)})`;
}

function tokenize(input) {
  const tokens = [];
  let index = 0;

  while (index < input.length) {
    const char = input[index];
    const rest = input.slice(index);

    if (/\s/.test(char)) {
      index += 1;
      continue;
    }

    if (rest.startsWith("<->") || rest.startsWith("<=>")) {
      tokens.push({ type: tokenTypes.IFF, value: "↔" });
      index += 3;
      continue;
    }

    if (rest.startsWith("->") || rest.startsWith("=>")) {
      tokens.push({ type: tokenTypes.IMPLIES, value: "→" });
      index += 2;
      continue;
    }

    if (char === "¬" || char === "!" || char === "~") {
      tokens.push({ type: tokenTypes.NOT, value: "¬" });
      index += 1;
      continue;
    }

    if (char === "∧" || char === "&" || char === "^") {
      tokens.push({ type: tokenTypes.AND, value: "∧" });
      index += 1;
      continue;
    }

    if (char === "∨" || char === "|") {
      tokens.push({ type: tokenTypes.OR, value: "∨" });
      index += 1;
      continue;
    }

    if (char === "→") {
      tokens.push({ type: tokenTypes.IMPLIES, value: "→" });
      index += 1;
      continue;
    }

    if (char === "↔") {
      tokens.push({ type: tokenTypes.IFF, value: "↔" });
      index += 1;
      continue;
    }

    if (char === "(") {
      tokens.push({ type: tokenTypes.LPAREN, value: char });
      index += 1;
      continue;
    }

    if (char === ")") {
      tokens.push({ type: tokenTypes.RPAREN, value: char });
      index += 1;
      continue;
    }

    const word = rest.match(/^[A-Za-z][A-Za-z0-9_]*/);
    if (word) {
      const value = word[0].toUpperCase();
      if (value === "NOT" || value === "NAO" || value === "NÃO") {
        tokens.push({ type: tokenTypes.NOT, value: "¬" });
      } else if (value === "AND") {
        tokens.push({ type: tokenTypes.AND, value: "∧" });
      } else if (value === "OR" || value === "OU") {
        tokens.push({ type: tokenTypes.OR, value: "∨" });
      } else {
        tokens.push({ type: tokenTypes.VAR, value });
      }
      index += word[0].length;
      continue;
    }

    throw new Error(`Símbolo não reconhecido: "${char}".`);
  }

  return tokens;
}

function parse(input) {
  const parser = new Parser(tokenize(input));
  const ast = parser.parseExpression();
  if (!parser.isAtEnd()) {
    throw new Error(`Token inesperado: "${parser.peek().value}".`);
  }
  return ast;
}

class Parser {
  constructor(tokens) {
    this.tokens = tokens;
    this.current = 0;
  }

  parseExpression() {
    return this.parseIff();
  }

  parseIff() {
    let expr = this.parseImplies();
    while (this.match(tokenTypes.IFF)) {
      const operator = this.previous();
      const right = this.parseImplies();
      expr = { type: "IFF", symbol: operator.value, left: expr, right };
    }
    return expr;
  }

  parseImplies() {
    const expr = this.parseOr();
    if (this.match(tokenTypes.IMPLIES)) {
      const operator = this.previous();
      const right = this.parseImplies();
      return { type: "IMPLIES", symbol: operator.value, left: expr, right };
    }
    return expr;
  }

  parseOr() {
    let expr = this.parseAnd();
    while (this.match(tokenTypes.OR)) {
      const operator = this.previous();
      const right = this.parseAnd();
      expr = { type: "OR", symbol: operator.value, left: expr, right };
    }
    return expr;
  }

  parseAnd() {
    let expr = this.parseNot();
    while (this.match(tokenTypes.AND)) {
      const operator = this.previous();
      const right = this.parseNot();
      expr = { type: "AND", symbol: operator.value, left: expr, right };
    }
    return expr;
  }

  parseNot() {
    if (this.match(tokenTypes.NOT)) {
      return { type: "NOT", value: this.parseNot() };
    }
    return this.parsePrimary();
  }

  parsePrimary() {
    if (this.match(tokenTypes.VAR)) {
      return { type: "VAR", name: this.previous().value };
    }
    if (this.match(tokenTypes.LPAREN)) {
      const expr = this.parseExpression();
      if (!this.match(tokenTypes.RPAREN)) {
        throw new Error("Faltou fechar parêntese.");
      }
      return expr;
    }
    throw new Error("Expressão incompleta ou mal formada.");
  }

  match(...types) {
    if (types.some((type) => this.check(type))) {
      this.advance();
      return true;
    }
    return false;
  }

  check(type) {
    return !this.isAtEnd() && this.peek().type === type;
  }

  advance() {
    if (!this.isAtEnd()) this.current += 1;
    return this.previous();
  }

  isAtEnd() {
    return this.current >= this.tokens.length;
  }

  peek() {
    return this.tokens[this.current];
  }

  previous() {
    return this.tokens[this.current - 1];
  }
}

function evaluate(node, values) {
  switch (node.type) {
    case "VAR":
      if (!(node.name in values)) {
        throw new Error(`Variável "${node.name}" não existe nesta missão.`);
      }
      return values[node.name];
    case "NOT":
      return !evaluate(node.value, values);
    case "AND":
      return evaluate(node.left, values) && evaluate(node.right, values);
    case "OR":
      return evaluate(node.left, values) || evaluate(node.right, values);
    case "IMPLIES":
      return !evaluate(node.left, values) || evaluate(node.right, values);
    case "IFF":
      return evaluate(node.left, values) === evaluate(node.right, values);
    default:
      throw new Error("Expressão inválida.");
  }
}

function areEquivalent(leftAst, rightAst, variables) {
  const totalRows = 2 ** variables.length;
  for (let row = 0; row < totalRows; row += 1) {
    const values = {};
    variables.forEach((name, index) => {
      values[name] = Boolean(row & (1 << index));
    });

    if (evaluate(leftAst, values) !== evaluate(rightAst, values)) {
      return false;
    }
  }
  return true;
}

function insertAtCursor(textarea, value) {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const before = textarea.value.slice(0, start);
  const after = textarea.value.slice(end);
  const padded = value === "¬" || value === "(" || value === ")" ? value : ` ${value} `;
  textarea.value = `${before}${padded}${after}`;
  const cursor = before.length + padded.length;
  textarea.focus();
  textarea.setSelectionRange(cursor, cursor);
  handleExpressionInput();
}

function handleExpressionInput() {
  updateLogicFlow(elements.input.value);
  if (state.mode === "multi" && state.role === "attacker") {
    state.attackerDraft = elements.input.value;
    sendRoomEvent("attacker_typing", { value: state.attackerDraft });
  }
}

function setupMatrix() {
  const canvas = elements.matrix;
  const ctx = canvas.getContext("2d");
  const glyphs = "01¬∧∨→↔ABCDEFTKLMNPQRS";
  let columns = [];

  function resize() {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    columns = Array.from({ length: Math.ceil(window.innerWidth / 18) }, () =>
      Math.floor(Math.random() * window.innerHeight),
    );
  }

  function draw() {
    ctx.fillStyle = "rgba(7, 16, 15, 0.12)";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fillStyle = "rgba(83, 255, 176, 0.62)";
    ctx.font = "16px Consolas, monospace";

    columns.forEach((y, index) => {
      const glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
      const x = index * 18;
      ctx.fillText(glyph, x, y);
      columns[index] = y > window.innerHeight + Math.random() * 900 ? 0 : y + 18;
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();
}

document.querySelectorAll("[data-insert]").forEach((button) => {
  button.addEventListener("click", () => insertAtCursor(elements.input, button.dataset.insert));
});

elements.singleMode.addEventListener("click", startSinglePlayer);
elements.createRoom.addEventListener("click", () => joinMultiplayerRoom("attacker", generateRoomCode()));
elements.joinRoom.addEventListener("click", () => {
  const code = normalizeRoomCode(elements.roomCode.value);
  if (!code) {
    setMultiplayerStatus("Digite o codigo da sala para entrar como defensor.", "error");
    return;
  }
  joinMultiplayerRoom("defender", code);
});

elements.variablePad.addEventListener("click", (event) => {
  const button = event.target.closest("[data-insert]");
  if (!button || !elements.variablePad.contains(button)) return;
  insertAtCursor(elements.input, button.dataset.insert);
});

document.addEventListener("keydown", (event) => {
  if (!state.miniGameActive) return;
  const moves = {
    ArrowUp: [-1, 0],
    ArrowDown: [1, 0],
    ArrowLeft: [0, -1],
    ArrowRight: [0, 1],
    w: [-1, 0],
    s: [1, 0],
    a: [0, -1],
    d: [0, 1],
  };
  const move = moves[event.key] ?? moves[event.key.toLowerCase()];
  if (!move) return;
  event.preventDefault();
  moveMazePlayer(move[0], move[1]);
});

elements.submit.addEventListener("click", submitExpression);
elements.clear.addEventListener("click", () => {
  elements.input.value = "";
  handleExpressionInput();
  elements.input.focus();
});
elements.restart.addEventListener("click", () => {
  if (state.mode === "multi" && state.role === "defender") {
    leaveMultiplayerRoom();
    return;
  }
  startGame();
  syncRoomState();
});
elements.manualCounter.addEventListener("click", () => runDefenderAction("counter"));
elements.traceBoost.addEventListener("click", () => runDefenderAction("trace"));
elements.timeCut.addEventListener("click", () => runDefenderAction("time"));
elements.leaveRoom.addEventListener("click", () => leaveMultiplayerRoom());
elements.input.addEventListener("input", handleExpressionInput);
elements.input.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
    submitExpression();
  }
});

setupMatrix();
if (!hasSupabaseConfig()) {
  setMultiplayerStatus("Multiplayer: preencha SUPABASE_URL e SUPABASE_ANON_KEY no script.js.");
}
showModeScreen();
