const avatarPath = "assets/avatar.png";

const iconMap = {
  home: "⌂",
  students: "▦",
  teachers: "▣",
  teams: "▤",
  recruit: "▥",
  applications: "▧",
  contests: "▨",
  signups: "≡",
  invites: "▩",
  tasks: "▰",
  records: "▣",
  system: "♟",
  account: "▤",
};

const state = {
  view: "login",
  active: "home",
  role: "管理员",
  username: "admin",
  selected: new Set(),
  filters: {},
  modal: null,
};

const newsItems = [
  {
    tag: "赛事快讯",
    title: "2026年陈文剑竟然如此开放",
    date: "2026-04-28",
    brief: "各团队可在报名截止前完成成员确认、导师绑定和参赛材料提交。",
  },
  {
    tag: "团队动态",
    title: "五虎上将团队完成算法组与前端组任务分配",
    date: "2026-04-18",
    brief: "系统已同步任务记录，组长可继续跟踪成员完成情况。",
  },
  {
    tag: "通知公告",
    title: "校级创新创业竞赛项目库完成更新",
    date: "2026-04-12",
    brief: "新增智能制造、数字文创、绿色能源三个方向的竞赛信息。",
  },
  {
    tag: "导师提醒",
    title: "指导教师审核入口新增批量通过能力",
    date: "2026-04-06",
    brief: "申请加入、邀请加入和报名审核流程已经统一到同一套审核面板。",
  },
];

const activityFeed = [
  ["09:28", "学生 yy 提交竞赛报名"],
  ["10:12", "王五创建新团队招募"],
  ["11:36", "赵老师完成申请审核"],
  ["14:05", "任务记录同步完成"],
];

const pages = {
  students: {
    label: "学生",
    filters: [
      ["studentNo", "学生账号", "text"],
      ["name", "学生姓名", "text"],
    ],
    columns: [
      ["studentNo", "学生账号"],
      ["name", "学生姓名"],
      ["gender", "性别"],
      ["phone", "电话号码"],
      ["type", "类型"],
    ],
    rows: [
      { studentNo: "20260003", name: "yy", gender: "女", phone: "", type: "" },
      { studentNo: "20260002", name: "小红", gender: "女", phone: "13823888882", type: "组长" },
      { studentNo: "20260001", name: "王五", gender: "男", phone: "13823888881", type: "组长" },
    ],
  },
  teachers: {
    label: "教师",
    filters: [
      ["teacherNo", "教师账号", "text"],
      ["name", "教师姓名", "text"],
    ],
    columns: [
      ["teacherNo", "教师账号"],
      ["name", "教师姓名"],
      ["gender", "性别"],
      ["phone", "电话号码"],
      ["title", "职称"],
    ],
    rows: [
      { teacherNo: "T20260001", name: "李老师", gender: "女", phone: "13800001111", title: "讲师" },
      { teacherNo: "T20260002", name: "赵老师", gender: "男", phone: "13800002222", title: "副教授" },
    ],
  },
  teams: {
    label: "竞赛团队",
    filters: [["teamName", "团队名称", "text"]],
    columns: [
      ["teamNo", "团队账号"],
      ["teamName", "团队名称"],
      ["count", "人数"],
      ["leader", "组长"],
      ["brief", "简介"],
      ["createdAt", "创建时间"],
    ],
    rows: [
      { teamNo: "20260001", teamName: "五虎上将", count: "3", leader: "王五", brief: "算法竞赛团队", createdAt: "2026-04-13" },
    ],
  },
  recruit: {
    label: "招募成员",
    filters: [["teamName", "团队名称", "text"]],
    columns: [
      ["recruitNo", "招募编号"],
      ["teamName", "团队名称"],
      ["position", "招募岗位"],
      ["count", "人数"],
      ["date", "发布时间"],
      ["status", "状态"],
    ],
    rows: [
      { recruitNo: "1776064674809", teamName: "五虎上将", position: "前端开发", count: "2", date: "2026-04-13", status: "招募中" },
      { recruitNo: "8888888888", teamName: "团队名称8", position: "建模", count: "1", date: "2025-03-19", status: "招募中" },
    ],
  },
  applications: {
    label: "申请加入",
    filters: [
      ["teamName", "团队名称", "text"],
      ["status", "是否通过", "select", ["", "通过", "未通过", "审核中"]],
    ],
    columns: [
      ["applyNo", "申请编号"],
      ["teamName", "团队名称"],
      ["resume", "简历"],
      ["applyDate", "申请时间"],
      ["leaderNo", "组长账号"],
      ["studentNo", "申请学生"],
      ["reply", "审核回复"],
      ["status", "审核状态"],
    ],
    rows: [
      { applyNo: "1776064674809", teamName: "五虎上将", resume: "无", applyDate: "2026-04-13", leaderNo: "20260001", studentNo: "20260001", reply: "好", status: "通过" },
      { applyNo: "8888888888", teamName: "团队名称8", resume: "无", applyDate: "2025-03-19", leaderNo: "组长账号8", studentNo: "申请学生8", reply: "", status: "通过" },
      { applyNo: "7777777777", teamName: "团队名称7", resume: "无", applyDate: "2025-03-19", leaderNo: "组长账号7", studentNo: "申请学生7", reply: "", status: "通过" },
      { applyNo: "6666666666", teamName: "团队名称6", resume: "无", applyDate: "2025-03-19", leaderNo: "组长账号6", studentNo: "申请学生6", reply: "", status: "通过" },
      { applyNo: "5555555555", teamName: "团队名称5", resume: "无", applyDate: "2025-03-19", leaderNo: "组长账号5", studentNo: "申请学生5", reply: "", status: "通过" },
      { applyNo: "4444444444", teamName: "团队名称4", resume: "无", applyDate: "2025-03-19", leaderNo: "组长账号4", studentNo: "申请学生4", reply: "", status: "通过" },
      { applyNo: "3333333333", teamName: "团队名称3", resume: "无", applyDate: "2025-03-19", leaderNo: "组长账号3", studentNo: "申请学生3", reply: "", status: "通过" },
      { applyNo: "2222222222", teamName: "团队名称2", resume: "无", applyDate: "2025-03-19", leaderNo: "组长账号2", studentNo: "申请学生2", reply: "", status: "通过" },
      { applyNo: "1111111111", teamName: "团队名称1", resume: "无", applyDate: "2025-03-19", leaderNo: "组长账号1", studentNo: "申请学生1", reply: "", status: "通过" },
    ],
  },
  contests: {
    label: "竞赛信息",
    filters: [["contestName", "竞赛名称", "text"]],
    columns: [
      ["contestNo", "竞赛编号"],
      ["contestName", "竞赛名称"],
      ["category", "竞赛类型"],
      ["host", "主办方"],
      ["date", "竞赛时间"],
      ["status", "状态"],
    ],
    rows: [
      { contestNo: "C20260001", contestName: "2026年上半年数学竞赛", category: "数学建模", host: "创新学院", date: "2026-04-28", status: "报名中" },
      { contestNo: "C20250008", contestName: "挑战杯校内选拔赛", category: "创新创业", host: "团委", date: "2025-03-19", status: "已发布" },
    ],
  },
  signups: {
    label: "竞赛报名",
    filters: [["contestName", "竞赛名称", "text"]],
    columns: [
      ["signupNo", "报名编号"],
      ["contestName", "竞赛名称"],
      ["signupDate", "报名时间"],
      ["studentNo", "学生账号"],
    ],
    rows: [
      { signupNo: "1777360686940", contestName: "2026年上半年数学竞赛", signupDate: "2026-04-28", studentNo: "20260003" },
    ],
  },
  invites: {
    label: "邀请加入",
    filters: [["teamName", "团队名称", "text"]],
    columns: [
      ["inviteNo", "邀请编号"],
      ["teamName", "团队名称"],
      ["studentNo", "邀请学生"],
      ["inviteDate", "邀请时间"],
      ["status", "是否同意"],
    ],
    rows: [
      { inviteNo: "177606221130", teamName: "五虎上将", studentNo: "20260003", inviteDate: "2026-04-13", status: "同意" },
      { inviteNo: "8888888888", teamName: "团队名称8", studentNo: "邀请学生8", inviteDate: "2025-03-19", status: "同意" },
    ],
  },
  tasks: {
    label: "任务分配",
    filters: [["taskName", "任务名称", "text"]],
    columns: [
      ["taskNo", "任务编号"],
      ["taskName", "任务名称"],
      ["deadline", "截止时间"],
      ["leaderNo", "组长账号"],
      ["memberNo", "组员账号"],
      ["status", "任务状态"],
    ],
    rows: [
      { taskNo: "1776065822130", taskName: "111", deadline: "2026-04-13", leaderNo: "20260001", memberNo: "20260002", status: "进行中" },
      { taskNo: "8888888888", taskName: "任务名称8", deadline: "2025-03-19", leaderNo: "组长账号8", memberNo: "组员账号8", status: "进行中" },
    ],
  },
  records: {
    label: "任务记录",
    filters: [["taskName", "任务名称", "text"]],
    columns: [
      ["recordNo", "完成编号"],
      ["taskName", "任务名称"],
      ["status", "任务状态"],
      ["finishDate", "完成时间"],
      ["leaderNo", "组长账号"],
      ["memberNo", "组员账号"],
    ],
    rows: [
      { recordNo: "1776065822130", taskName: "111", status: "进行中", finishDate: "2026-04-13", leaderNo: "20260001", memberNo: "20260002" },
      { recordNo: "8888888888", taskName: "任务名称8", status: "进行中", finishDate: "2025-03-19", leaderNo: "组长账号8", memberNo: "组员账号8" },
      { recordNo: "7777777777", taskName: "任务名称7", status: "进行中", finishDate: "2025-03-19", leaderNo: "组长账号7", memberNo: "组员账号7" },
      { recordNo: "6666666666", taskName: "任务名称6", status: "进行中", finishDate: "2025-03-19", leaderNo: "组长账号6", memberNo: "组员账号6" },
      { recordNo: "5555555555", taskName: "任务名称5", status: "进行中", finishDate: "2025-03-19", leaderNo: "组长账号5", memberNo: "组员账号5" },
      { recordNo: "4444444444", taskName: "任务名称4", status: "进行中", finishDate: "2025-03-19", leaderNo: "组长账号4", memberNo: "组员账号4" },
      { recordNo: "3333333333", taskName: "任务名称3", status: "进行中", finishDate: "2025-03-19", leaderNo: "组长账号3", memberNo: "组员账号3" },
      { recordNo: "2222222222", taskName: "任务名称2", status: "进行中", finishDate: "2025-03-19", leaderNo: "组长账号2", memberNo: "组员账号2" },
      { recordNo: "1111111111", taskName: "任务名称1", status: "进行中", finishDate: "2025-03-19", leaderNo: "组长账号1", memberNo: "组员账号1" },
    ],
  },
};

const menu = [
  { id: "home", label: "系统首页", icon: iconMap.home },
  { id: "students", label: "学生", icon: iconMap.students },
  { id: "teachers", label: "教师", icon: iconMap.teachers },
  { id: "teams", label: "竞赛团队", icon: iconMap.teams },
  { id: "recruit", label: "招募成员", icon: iconMap.recruit },
  { id: "applications", label: "申请加入", icon: iconMap.applications },
  { id: "contests", label: "竞赛信息", icon: iconMap.contests },
  { id: "signups", label: "竞赛报名", icon: iconMap.signups },
  { id: "invites", label: "邀请加入", icon: iconMap.invites },
  { id: "tasks", label: "任务分配", icon: iconMap.tasks },
  { id: "records", label: "任务记录", icon: iconMap.records },
];

const app = document.querySelector("#app");
const toast = document.querySelector("#toast");

function render() {
  app.innerHTML = state.view === "login" ? loginTemplate() : shellTemplate();
  bindEvents();
}

function loginTemplate() {
  return `
    <section class="login-view">
      <div class="login-grid" aria-hidden="true"></div>
      <form class="login-card" id="loginForm">
        <div class="login-badge">Chaos Control Center</div>
        <h1 class="login-title">陈文剑乱搞系统</h1>
        <p class="login-subtitle">欢迎登录管理后台</p>
        <label class="login-field">
          <span>♟</span>
          <input id="loginName" value="admin" autocomplete="username">
        </label>
        <label class="login-field">
          <span>¤</span>
          <input id="loginPassword" type="password" value="admin" autocomplete="current-password">
        </label>
        <div class="role-strip">
          <span class="role-icon">◎</span>
          ${["管理员", "学生", "教师"].map((role, index) => `
            <label>
              <input type="radio" name="role" value="${role}" ${index === 0 ? "checked" : ""}>
              ${role}
            </label>
          `).join("")}
        </div>
        <button class="login-submit" type="submit">登录</button>
        <div class="login-actions">
          <button class="ghost-btn js-register" data-role="学生" type="button">注册学生</button>
          <button class="ghost-btn js-register" data-role="教师" type="button">注册教师</button>
        </div>
      </form>
    </section>
  `;
}

function shellTemplate() {
  const label = getActiveLabel();

  return `
    <section class="shell">
      <aside class="sidebar">
        <div class="side-logo">
          <span class="side-logo-mark">C</span>
          <span>乱搞云</span>
        </div>
        <nav class="menu">
          ${menu.map((item) => menuButton(item)).join("")}
          <button class="menu-group" data-group="system">
            <span class="menu-icon">${iconMap.system}</span>
            <span>系统管理</span>
            <span class="chevron">⌄</span>
          </button>
          <button class="menu-group ${["profile", "password"].includes(state.active) ? "active" : ""}" data-group="account">
            <span class="menu-icon">${iconMap.account}</span>
            <span>个人中心</span>
            <span class="chevron">⌄</span>
          </button>
          <div class="submenu ${["profile", "password"].includes(state.active) ? "open" : ""}">
            <button class="${state.active === "profile" ? "active" : ""}" data-page="profile">个人信息</button>
            <button class="${state.active === "password" ? "active" : ""}" data-page="password">修改密码</button>
          </div>
        </nav>
      </aside>
      <section class="workspace">
        <header class="topbar">
          <div class="topbar-radar" aria-hidden="true"></div>
          <div class="brand">陈文剑乱搞系统</div>
          <div class="user-chip">
            <img class="avatar" src="${avatarPath}" alt="">
            <span>${state.username}</span>
            <span>⌄</span>
          </div>
        </header>
        <main class="content">
          <div class="breadcrumb"><b>系统首页</b><span>/</span><b>${label}</b></div>
          ${contentTemplate()}
        </main>
      </section>
      ${state.modal ? modalTemplate() : ""}
    </section>
  `;
}

function menuButton(item) {
  const active = state.active === item.id ? "active" : "";
  return `
    <button class="menu-item ${active}" data-page="${item.id}">
      <span class="menu-icon">${item.icon}</span>
      <span>${item.label}</span>
    </button>
  `;
}

function getActiveLabel() {
  if (state.active === "home") return "系统首页";
  if (state.active === "profile") return "个人信息";
  if (state.active === "password") return "修改密码";
  return pages[state.active]?.label || "学生";
}

function contentTemplate() {
  if (state.active === "home") return homeTemplate();
  if (state.active === "profile") return profileTemplate();
  if (state.active === "password") return passwordTemplate();
  return tablePageTemplate(pages[state.active]);
}

function homeTemplate() {
  const stats = [
    ["在册学生", pages.students.rows.length, "+12%", "students"],
    ["指导教师", pages.teachers.rows.length, "+3", "teachers"],
    ["竞赛团队", pages.teams.rows.length, "活跃", "teams"],
    ["报名记录", pages.signups.rows.length, "今日+1", "signups"],
  ];

  return `
    <section class="dashboard-stage">
      <div class="dashboard-copy">
        <span class="stage-kicker">Creative Chaos Center</span>
        <h2>陈文剑乱搞数据驾驶舱</h2>
        <p>今日已同步团队、报名、审核和任务记录，关键流程运行稳定。</p>
        <div class="stage-actions">
          <button class="btn ok" data-page="contests">竞赛信息</button>
          <button class="btn info" data-page="tasks">任务分配</button>
        </div>
      </div>
      <div class="holo-panel" aria-hidden="true">
        <div class="holo-ring"></div>
        <div class="holo-core">98%</div>
        <div class="holo-line line-a"></div>
        <div class="holo-line line-b"></div>
      </div>
    </section>

    <section class="metric-grid">
      ${stats.map(([name, value, trend, target]) => `
        <button class="metric-card" data-page="${target}">
          <span>${name}</span>
          <strong>${value}</strong>
          <em>${trend}</em>
          <i style="--h:${42 + Number(value) * 10}px"></i>
        </button>
      `).join("")}
    </section>

    <section class="home-layout">
      <div class="news-board">
        <div class="section-head">
          <h3>新闻公告</h3>
          <span>NEWS</span>
        </div>
        <div class="news-ticker">
          <div>${newsItems.map((item) => `${item.date}　${item.title}`).join("　　|　　")}</div>
        </div>
        <div class="news-list">
          ${newsItems.map((item, index) => `
            <article class="news-item ${index === 0 ? "featured" : ""}">
              <div>
                <span class="news-tag">${item.tag}</span>
                <h4>${item.title}</h4>
                <p>${item.brief}</p>
              </div>
              <time>${item.date}</time>
            </article>
          `).join("")}
        </div>
      </div>

      <div class="activity-board">
        <div class="section-head">
          <h3>实时动态</h3>
          <span>LIVE</span>
        </div>
        <div class="activity-line">
          ${activityFeed.map(([time, text]) => `
            <div class="activity-item">
              <b>${time}</b>
              <span>${text}</span>
            </div>
          `).join("")}
        </div>
        <div class="chart-card">
          <span>本周活跃度</span>
          <div class="bar-chart">
            ${[58, 72, 46, 88, 66, 92, 78].map((height) => `<i style="--v:${height}%"></i>`).join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="home-table">
      ${tablePageTemplate(pages.contests, true)}
    </section>
  `;
}

function profileTemplate() {
  return `
    <section class="panel profile-panel">
      <form class="profile-form" id="profileForm">
        <div class="profile-row">
          <label>用户名</label>
          <input value="${state.username}">
        </div>
        <div class="profile-row">
          <label>头像</label>
          <div class="avatar-box">
            <img class="avatar-large" src="${avatarPath}" alt="">
            <button class="upload-box" type="button">+</button>
            <span class="upload-note">点击上传头像</span>
          </div>
        </div>
        <div class="profile-row">
          <label></label>
          <button class="btn warning" type="submit">提交</button>
        </div>
      </form>
    </section>
  `;
}

function passwordTemplate() {
  return `
    <section class="panel password-panel">
      <form class="profile-form" id="passwordForm">
        <div class="profile-row">
          <label>原密码</label>
          <input type="password" value="admin">
        </div>
        <div class="profile-row">
          <label>新密码</label>
          <input type="password" value="">
        </div>
        <div class="profile-row">
          <label>确认密码</label>
          <input type="password" value="">
        </div>
        <div class="profile-row">
          <label></label>
          <button class="btn warning" type="submit">提交</button>
        </div>
      </form>
    </section>
  `;
}

function tablePageTemplate(page, compact = false) {
  const rows = getFilteredRows(page);
  const selectable = !compact;
  const filters = (page.filters || []).map(([key, label, type, options]) => filterField(key, label, type, options)).join("");
  const toolbar = compact ? "" : `
    <div class="toolbar">
      ${state.active === "students" || state.active === "teachers" ? `<button class="btn ok" data-action="add" title="添加"><span>⊕</span>添加</button>` : ""}
      <button class="btn danger" data-action="deleteSelected" title="删除"><span>⌫</span>删除</button>
    </div>
  `;

  return `
    <section class="panel search-panel">
      ${filters}
      <button class="btn search" data-action="query" title="查询"><span>⌕</span>查询</button>
      ${toolbar}
    </section>
    <section class="panel table-panel">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              ${selectable ? `<th style="width: 40px"><input class="checkbox" type="checkbox" data-action="toggleAll"></th>` : ""}
              <th style="width: 64px">序号</th>
              ${page.columns.map(([key, label]) => `<th data-sort="${key}">${label} ↕</th>`).join("")}
              <th style="width: 210px">操作</th>
            </tr>
          </thead>
          <tbody>
            ${rows.length ? rows.map((row, index) => rowTemplate(page, row, index, compact)).join("") : emptyRow(page, compact)}
          </tbody>
        </table>
      </div>
      <div class="pager">
        <span>共 ${rows.length} 条</span>
        <button disabled>上一页</button>
        <button class="current">1</button>
        <button disabled>下一页</button>
        <select><option>10条/页</option></select>
        <span>前往</span>
        <input value="1" style="width:40px;text-align:center">
        <span>页</span>
      </div>
    </section>
  `;
}

function filterField(key, label, type, options = []) {
  const value = state.filters[key] || "";
  if (type === "select") {
    return `
      <label class="field">${label}
        <select data-filter="${key}">
          ${options.map((option) => `<option value="${option}" ${option === value ? "selected" : ""}>${option || label}</option>`).join("")}
        </select>
      </label>
    `;
  }

  return `
    <label class="field">${label}
      <input data-filter="${key}" value="${value}" placeholder="${label}">
    </label>
  `;
}

function rowTemplate(page, row, index, compact = false) {
  const key = rowKey(row);
  return `
    <tr>
      ${compact ? "" : `<td><input class="checkbox" type="checkbox" data-row="${key}" ${state.selected.has(key) ? "checked" : ""}></td>`}
      <td>${index + 1}</td>
      ${page.columns.map(([field]) => cellTemplate(row[field])).join("")}
      <td>
        <div class="actions">
          ${compact ? `<button class="btn ok" data-page="contests">查看</button>` : `
            <button class="btn ok" data-action="view" data-key="${key}">查看</button>
            ${["applications", "invites"].includes(state.active) ? "" : `<button class="btn ok" data-action="edit" data-key="${key}">修改</button>`}
            <button class="btn info" data-action="delete" data-key="${key}">删除</button>
          `}
        </div>
      </td>
    </tr>
  `;
}

function cellTemplate(value) {
  if (["通过", "同意", "报名中", "招募中", "进行中"].includes(value)) {
    return `<td><span class="status">${value}</span></td>`;
  }
  return `<td>${value || ""}</td>`;
}

function emptyRow(page, compact = false) {
  return `<tr><td colspan="${page.columns.length + (compact ? 2 : 3)}" style="text-align:center;height:72px;color:#9aa4b0">暂无数据</td></tr>`;
}

function getFilteredRows(page) {
  const filters = page.filters || [];
  return page.rows.filter((row) => {
    return filters.every(([key]) => {
      const value = (state.filters[key] || "").trim();
      if (!value) return true;
      return String(row[key] || "").includes(value);
    });
  });
}

function rowKey(row) {
  return Object.values(row)[0];
}

function modalTemplate() {
  const { mode, row } = state.modal;
  const page = pages[state.active];
  const titleMap = { view: "查看", edit: "修改", add: "添加", register: "注册" };
  const readonly = mode === "view" ? "readonly" : "";
  const disabled = mode === "view" ? "disabled" : "";

  const fields = page.columns.map(([key, label]) => `
    <label>
      <span>${label}</span>
      <input name="${key}" value="${row[key] || ""}" ${readonly} ${disabled}>
    </label>
  `).join("");

  return `
    <div class="modal-mask">
      <form class="modal" id="modalForm">
        <div class="modal-header">
          <span>${titleMap[mode]}${page.label}</span>
          <button class="modal-close" type="button" data-action="closeModal">×</button>
        </div>
        <div class="modal-body">${fields}</div>
        <div class="modal-footer">
          <button class="btn danger" type="button" data-action="closeModal">取消</button>
          ${mode === "view" ? "" : `<button class="btn ok" type="submit">提交</button>`}
        </div>
      </form>
    </div>
  `;
}

function bindEvents() {
  document.querySelector("#loginForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    state.username = document.querySelector("#loginName").value.trim() || "admin";
    state.role = document.querySelector("[name='role']:checked").value;
    state.view = "app";
    state.active = "home";
    showToast("登录成功");
    render();
  });

  document.querySelectorAll(".js-register").forEach((button) => {
    button.addEventListener("click", () => showToast(`${button.dataset.role}注册成功`));
  });

  document.querySelectorAll("[data-page]").forEach((button) => {
    button.addEventListener("click", () => {
      state.active = button.dataset.page;
      state.selected.clear();
      render();
    });
  });

  document.querySelectorAll("[data-filter]").forEach((field) => {
    field.addEventListener("input", () => {
      state.filters[field.dataset.filter] = field.value;
    });
    field.addEventListener("change", () => {
      state.filters[field.dataset.filter] = field.value;
    });
  });

  document.querySelectorAll("[data-row]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      checkbox.checked ? state.selected.add(checkbox.dataset.row) : state.selected.delete(checkbox.dataset.row);
    });
  });

  document.querySelector("[data-action='toggleAll']")?.addEventListener("change", (event) => {
    const page = pages[state.active];
    getFilteredRows(page).forEach((row) => {
      const key = rowKey(row);
      event.target.checked ? state.selected.add(key) : state.selected.delete(key);
    });
    render();
  });

  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => handleAction(button.dataset.action, button.dataset.key));
  });

  document.querySelector("#modalForm")?.addEventListener("submit", submitModal);

  document.querySelector("#profileForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = event.currentTarget.querySelector("input");
    state.username = input.value.trim() || state.username;
    showToast("提交成功");
    render();
  });

  document.querySelector("#passwordForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("密码修改成功");
  });
}

function handleAction(action, key) {
  const page = pages[state.active];

  if (action === "query") {
    render();
    return showToast("查询完成");
  }

  if (action === "add") {
    const row = {};
    page.columns.forEach(([field, label]) => {
      row[field] = label.includes("时间") || label.includes("日期") ? today() : "";
    });
    state.modal = { mode: "add", row };
    return render();
  }

  if (action === "view" || action === "edit") {
    state.modal = {
      mode: action,
      row: { ...page.rows.find((row) => rowKey(row) === key) },
      key,
    };
    return render();
  }

  if (action === "delete") {
    page.rows = page.rows.filter((row) => rowKey(row) !== key);
    state.selected.delete(key);
    showToast("删除成功");
    return render();
  }

  if (action === "deleteSelected") {
    if (!state.selected.size) return showToast("请选择数据");
    page.rows = page.rows.filter((row) => !state.selected.has(rowKey(row)));
    state.selected.clear();
    showToast("删除成功");
    return render();
  }

  if (action === "closeModal") {
    state.modal = null;
    return render();
  }
}

function submitModal(event) {
  event.preventDefault();
  const page = pages[state.active];
  const form = new FormData(event.currentTarget);
  const next = {};
  page.columns.forEach(([field]) => {
    next[field] = form.get(field) || "";
  });

  if (state.modal.mode === "add") {
    const firstField = page.columns[0][0];
    next[firstField] ||= String(Date.now());
    page.rows.unshift(next);
  } else {
    page.rows = page.rows.map((row) => rowKey(row) === state.modal.key ? next : row);
  }

  state.modal = null;
  showToast("提交成功");
  render();
}

function today() {
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1400);
}

render();
