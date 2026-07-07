/**
 * May resume — editable content layer.
 * Update facts here; layout and interactions live in index.html/styles.css/script.js.
 */
window.RESUME_CONTENT = {
  identity: {
    name: 'May / 南瓜头',
    role: { zh: '产品经理实习生', en: 'Product Management Intern' },
    tagline: { zh: '用户洞察 × 数据分析 × AI 产品', en: 'User Insight × Data Analytics × AI Product' },
    profile: {
      zh: '具备咨询、商业化运营与投融资项目经验，擅长从用户与业务问题出发，结合数据分析、调研洞察与结构化表达推进方案落地。持续关注 AI 工具在内容增长、信息服务与求职工作流中的真实应用场景。',
      en: 'With experience across consulting, commercial operations and capital-markets projects, I translate user and business questions into structured, data-informed solutions. I am particularly interested in practical AI applications for content growth, information services and career workflows.',
    },
  },
  contacts: {
    email: { label: 'Email', value: 'ranqingmay@163.com' },
    phone: { label: 'Phone', value: '' },
    wechat: { label: 'WeChat', value: '' },
  },
  education: [
    {
      school: { zh: '复旦大学', en: 'Fudan University' },
      degree: { zh: '研究生 · 信息资源管理', en: 'Master · Library and Information Science' },
      period: { zh: '2025.09—至今', en: '2025.09—Present' },
      detail: { zh: '研究方向：数据管理与应用 · 团支部组织委员', en: 'Research: Data Management & Applications · Youth League Branch Committee Member' },
    },
    {
      school: { zh: '同济大学', en: 'Tongji University' },
      degree: { zh: '本科 · 会计学', en: 'Bachelor · Accounting' },
      period: '2018.09—2022.07',
    },
  ],
  language: 'CET-6',
  honours: [
    { year: '2025—2026', zh: '校级学业奖学金', en: 'University Academic Scholarship' },
    { year: '2025—2026', zh: '校优秀共青团员', en: 'Outstanding Communist Youth League Member · University Level' },
  ],
  experiences: {
    current: [
      {
        company: { zh: '中金公司', en: 'China International Capital Corporation' },
        role: { zh: '投资银行部固收组实习生', en: 'Investment Banking Department · Fixed Income Intern' },
        period: { zh: '2026.05—至今', en: '2026.05—Present' },
        badge: 'CURRENT',
        bullets: {
          zh: ['支持公司债、中期票据等固定收益产品从立项、尽调到申报与材料管理的全流程承做。', '撰写与校核立项报告、尽调报告等核心文件，完成底稿整理、信息核验与资料归档。', '在多方资料与时间节点并行的项目中，建立对融资流程、披露逻辑和风险重点的系统理解。'],
          en: ['Supported corporate bonds and medium-term notes across initiation, due diligence, filing and documentation.', 'Drafted and reviewed core reports while organizing working papers and verifying key information.', 'Built a practical understanding of financing workflows, disclosure logic and risk in a multi-stakeholder environment.'],
        },
      },
      {
        company: { zh: '小红书', en: 'Xiaohongshu' },
        role: { zh: 'AI 工具赛道商业化平台专家实习生', en: 'AI Tools Commercialization Platform Expert Intern' },
        period: '2026.01—2026.05',
        badge: 'AI + GROWTH',
        bullets: {
          zh: ['拆解高表现 AI 工具内容的选题、表达、互动与转化特征，沉淀可复用的内容观察框架。', '跟踪广告主投放关键指标并识别异常，为投放节奏、内容策略与预算优化提供分析支持。', '结合热点、站内趋势和目标人群洞察，输出广告投放建议，支持 AI 赛道商业化增长。'],
          en: ['Analyzed high-performing AI content to identify repeatable patterns across topics, narratives, engagement and conversion.', 'Tracked campaign metrics and surfaced anomalies to support content, pacing and budget optimization.', 'Synthesized trend and audience insights into actionable media recommendations for AI-tool advertisers.'],
        },
      },
    ],
    consulting: {
      company: { zh: '上海厚朴九思企业发展有限公司', en: 'Shanghai Hopewise Enterprise Development Co., Ltd.' },
      role: { zh: '咨询顾问', en: 'Consulting Analyst' },
      period: '2024.05—2025.06',
      bullets: {
        zh: ['深度参与区域国企改革项目，负责 4 个集团、250+ 单体现金流数据分析与可视化，识别经营与现金流问题并提出业务发展建议。', '通过访谈与资料梳理研究区域体制机制，覆盖国资监管考核、薪酬制度、人员管理与容错机制，形成支持决策的结构化分析材料。', '参与 2 个集团日常咨询，开展债务数据分析、融资规划、年度战略、绩效目标拆分、预算审阅、制度建设与产业平台搭建。', '负责某国企集团 9 家子公司、800+ 人薪酬访谈与数据分析，2 个月内支持搭建薪酬结构、薪级表、套档结果、考核与晋升制度。'],
        en: ['Analyzed and visualized cash-flow data across 4 SOE groups and 250+ entities, identifying operational issues and supporting business-development recommendations.', 'Conducted interviews and research on regulatory assessment, compensation, personnel management and fault-tolerance mechanisms, producing structured decision materials.', 'Supported two groups on debt analysis, financing plans, annual strategy, KPI decomposition, budget review, institutional design and industry-platform initiatives.', 'Studied compensation across 9 subsidiaries and 800+ employees, helping build salary structures, grades, placement results, performance mechanisms and promotion frameworks within two months.'],
      },
      metrics: [['4', { zh: '集团', en: 'groups' }], ['250+', { zh: '经营单体', en: 'entities' }], ['800+', { zh: '员工样本', en: 'employees' }], [{ zh: '2个月', en: '2 months' }, { zh: '完成体系搭建', en: 'delivery cycle' }]],
    },
    audit: [
      {
        company: { zh: '德勤华永会计师事务所', en: 'Deloitte China' },
        role: { zh: '审计员', en: 'Audit Associate' },
        period: '2022.09—2023.09',
        bullets: {
          zh: ['参与港股上市生物医药集团年报、中报及集团拆分上市审计，累计 4 个项目，执行 20+ 家单体、10 个科目的审计流程并编制底稿。', '完成银行结余及现金、借款、递延收入、行政开支、财务成本、资本承诺等 10 个科目底稿。', '执行函证、重新计算和细节测试；协助银行大额测试、重要账户分析、随机抽样及存货、固定资产监盘。', '负责 8 个报表科目取数、数据整理与波动分析，完成相关分析性复核。'],
          en: ['Worked on annual, interim and spin-off listing audits for a Hong Kong-listed biopharma group across 4 engagements, 20+ entities and 10 account areas.', 'Prepared working papers for cash and bank balances, borrowings, deferred income, administrative expenses, finance costs and capital commitments.', 'Performed confirmations, recalculation and tests of details; supported large-bank testing, account analysis, sampling and inventory/PPE observations.', 'Extracted, organized and analyzed data for 8 financial-statement items and completed analytical reviews.'],
        },
      },
      {
        company: { zh: '普华永道中天会计师事务所', en: 'PwC Zhong Tian LLP' },
        role: { zh: '基金公司年报审计实习生', en: 'Fund Company Annual Audit Intern' },
        period: '2022.01—2022.03',
        bullets: {
          zh: ['参与 2 个基金公司年报审计，与客户及银行沟通并协助推进项目进度。', '编制固定资产、无形资产、利息收入、其他收益、营业外支出等 6 个科目底稿，并协助抓取与整理披露数据。', '执行重新计算、细节测试与函证程序，制作、跟进和整理母公司及子孙公司 100+ 封询证函。'],
          en: ['Supported two fund-company annual audits, coordinating with clients and banks to keep engagements on schedule.', 'Prepared working papers for six account areas including fixed assets, intangible assets, interest income, other gains and non-operating expenses, and organized disclosure data.', 'Performed recalculation, tests of details and confirmation procedures; prepared, tracked and organized 100+ confirmations across parent and subsidiary entities.'],
        },
      },
    ],
  },
  competitions: [
    { period: '2026.04—2026.05', title: { zh: '中兴捧月大赛', en: 'ZTE “Holding the Moon” Competition' }, award: { zh: '全国区域优胜奖', en: 'National Regional Excellence Award' } },
    { period: '2025.04—2025.05', title: { zh: '贝恩杯咨询案例大赛', en: 'Bain Cup Case Competition' }, award: { zh: '上海赛区优秀案例', en: 'Shanghai Division Outstanding Case' } },
    { period: '2025.10—2025.11', title: { zh: 'AI+信息素养大赛', en: 'AI+ Information Literacy Competition' }, award: { zh: '上海市优胜奖', en: 'Shanghai Excellence Award' }, detail: { zh: '设计人机协同的选题生成、信息筛选与验证流程，以完整案例验证并沉淀可复用的 AI 辅助研究方法。', en: 'Designed and demonstrated a reusable human–AI workflow for topic generation, information filtering and validation.' } },
    { period: '2021.07', title: { zh: '企业经营沙盘模拟', en: 'Enterprise Management Simulation' }, award: 'CEO · Rank 4/20', detail: { zh: '负责战略、生产、物流、市场与财务决策，基于业务和财务数据优化经营。', en: 'Led strategy, operations, market and finance decisions, using business data to optimize performance.' } },
    { period: '2021.05—2021.07', title: { zh: '嘉定智能低碳汽车科普生态', en: 'Intelligent Low-carbon Auto Ecosystem' }, award: { zh: '“互联网+”校级立项', en: 'University Innovation Project' }, detail: { zh: '完成市场定位、定价策略、五年成本收益预测与融资方案。', en: 'Developed positioning, pricing, five-year projections and a financing plan.' } },
  ],
  leadership: [
    { period: '2018.09—2021.06', org: { zh: '同济大学青年摄影师协会', en: 'Tongji Youth Photography Association' }, role: { zh: '副社长', en: 'Vice President' }, bullets: { zh: ['组织 5 次社团招新，负责 100+ 人日常信息管理与公益活动。', '策划摄影分享、讲座、外拍与征稿比赛等 20+ 场活动，覆盖讲者联络、活动执行与稿件评选。'], en: ['Led five recruitment cycles and managed information and community initiatives for 100+ members.', 'Planned 20+ photography talks, lectures, field shoots and competitions, covering speaker coordination, delivery and judging.'] } },
    { period: '2018.09—2020.06', org: { zh: '同济大学学生会办公室、外联部', en: 'Tongji University Student Union' }, role: { zh: '绩效考评组组长、干事', en: 'Evaluation Team Lead & Officer' }, bullets: { zh: ['对学生会 9 个部门开展月度与半年度绩效考评，组织 10+ 次评比并制作反馈与展示材料。', '支持 3 场 100+ 人规模的同济、复旦与上财校际交流会策划与执行。'], en: ['Led 10+ monthly and semiannual performance reviews across 9 departments and produced feedback materials.', 'Supported planning and delivery of three 100+ attendee inter-university events with Fudan and SUFE.'] } },
  ],
  projects: {
    library: { title: { zh: '图书馆智慧助手', en: 'Library Smart Assistant' }, status: 'LIVE DEMO', url: 'https://fdlibrarychat.coze.site', lede: { zh: '面向高校用户的信息咨询与学习支持智能助手。', en: 'An intelligent assistant for university information services and learning support.' }, problem: { zh: '馆藏、服务、空间与学习资源入口分散，检索路径复杂。', en: 'Library services and learning resources are fragmented across complex search paths.' }, solution: { zh: '以对话交互整合资源导航、常见咨询与任务支持，降低用户完成信息任务的成本。', en: 'A conversational layer unifies navigation, common questions and task support.' }, tags: ['User Research', 'Information Architecture', 'AI Assistant', 'Coze', 'Service Design'] },
    career: { title: { zh: '求职策略与简历生成平台', en: 'Career Strategy & Resume Generator' }, status: 'PROTOTYPE IN PROGRESS', lede: { zh: '帮助求职者完成岗位拆解、策略规划、简历生成与投递优化的一体化工具。', en: 'An integrated workflow for job analysis, application strategy, resume creation and tracking.' }, flow: ['Job Target', 'Position Analysis', 'Resume Strategy', 'AI-assisted Draft', 'Application Tracking'], tags: ['Career Planning', 'AI Workflow', 'Resume Generation', 'Job Search Strategy'] },
  },
  capabilities: [
    { title: 'Product Thinking', zh: '用户洞察、需求拆解、功能优先级、产品方案表达', en: 'User insight, requirement framing, prioritization and product storytelling' },
    { title: 'Research & Analysis', zh: '访谈设计、问卷分析、数据可视化、问题归因', en: 'Interview design, survey analysis, data visualization and root-cause analysis' },
    { title: 'AI Product Practice', zh: 'Prompt Design、Coze、AI 工作流、智能助手设计', en: 'Prompt design, Coze, AI workflows and intelligent assistant design' },
    { title: 'Delivery & Collaboration', zh: '跨团队沟通、项目推进、汇报表达、文档沉淀', en: 'Cross-team communication, project delivery, presentations and documentation' },
  ],
  tools: ['Excel', 'PowerPoint', 'Python', 'R', 'SQL · Basic', 'Coze', 'Figma · TBC', 'Notion · TBC'],
};
