/* ===================================================================
 *  Site Data – edit this file to update content without touching HTML
 *  站点数据文件 —— 更新内容只需修改此文件，无需改动 HTML 结构
 *
 *  Bilingual fields: { en: "...", cn: "..." }
 *  Plain strings (paper titles, authors, venues) stay English only.
 *
 *  Themes link Research ↔ Publications ↔ Patents:
 *    "integrity"  GNSS Integrity Monitoring
 *    "leo"        LEO Autonomous Timescale
 *    "metrology"  Precise Time Metrology
 * ===================================================================
 */

window.SITE_DATA = {

  /* ----------  UI Labels (i18n)  ---------- */
  ui: {
    nav: {
      news:        { en: "News",         cn: "动态"       },
      education:   { en: "Education",    cn: "教育经历"   },
      research:    { en: "Research",     cn: "研究"       },
      pubs:        { en: "Publications", cn: "论文"       },
      talks:       { en: "Talks",        cn: "报告"       },
      patents:     { en: "Patents",      cn: "专利"       },
      honors:      { en: "Honors",       cn: "荣誉"       }
    },
    section: {
      news:      { en: "News & Updates",      cn: "最新动态"        },
      education: { en: "Education",           cn: "教育经历"        },
      research:  { en: "Research Interests",  cn: "研究方向"        },
      pubs:      { en: "Publications",        cn: "学术论文"        },
      talks:     { en: "Talks",               cn: "会议报告"        },
      patents:   { en: "Invention Patents",   cn: "发明专利"        },
      honors:    { en: "Honors & Awards",     cn: "荣誉与奖项"      }
    },
    pubs: {
      year:      { en: "Year",            cn: "年份"        },
      role:      { en: "Role",            cn: "署名"        },
      all:       { en: "All",             cn: "全部"        },
      first:     { en: "1st Author",      cn: "第一作者"    },
      corr:      { en: "Corresponding",   cn: "通信作者"    },
      sFirst:    { en: "Student 1st",     cn: "学生一作"    },
      coauthor:  { en: "Co-author",       cn: "合作作者"    },
      paper:     { en: "Paper",           cn: "原文"        },
      doi:       { en: "DOI",             cn: "DOI"         },
      bibtex:    { en: "BibTeX",          cn: "BibTeX"      },
      abstract:  { en: "Abstract.",       cn: "摘要："      }
    },
    research: {
      relPubs:   { en: "Related Publications", cn: "相关论文"    },
      relPatents:{ en: "Related Patents",      cn: "相关专利"    }
    },
    patents: {
      number:    { en: "Patent No.",      cn: "专利号"      },
      inventors: { en: "Inventors",       cn: "发明人"      },
      abstract:  { en: "Abstract",        cn: "摘要"        },
      items:     { en: "items",           cn: "项"          }
    },
    talks: {
      oral:      { en: "Oral",            cn: "口头报告"    }
    },
    news: {
      showAll:        { en: "Show all {n} updates ↓", cn: "展开全部 {n} 条 ↓" },
      showFewer:      { en: "Show fewer ↑",           cn: "收起 ↑"            },
      paperPublished: { en: "Paper <em>{title}</em> published in <strong>{venue}</strong>.",
                        cn: "论文 <em>{title}</em> 在 <strong>{venue}</strong> 期刊发表。" },
      paperAccepted:  { en: "Paper <em>{title}</em> accepted by <strong>{venue}</strong>.",
                        cn: "论文 <em>{title}</em> 被 <strong>{venue}</strong> 期刊录用。" },
      paperCoauthor:  { en: "Co-authored paper <em>{title}</em> published in <strong>{venue}</strong>.",
                        cn: "合作论文 <em>{title}</em> 在 <strong>{venue}</strong> 期刊发表。" },
      paperConference: {
                        en: "Paper <em>{title}</em> presented at <strong>{venue}</strong>.",
                        cn: "论文 <em>{title}</em> 在 <strong>{venue}</strong> 会议发表。" },
      paperConferenceCoauthor: {
                        en: "Co-authored paper <em>{title}</em> presented at <strong>{venue}</strong>.",
                        cn: "合作论文 <em>{title}</em> 在 <strong>{venue}</strong> 会议发表。" },
      talkPresented:  { en: "Oral presentation <em>{title}</em> at <strong>{venue}</strong>.",
                        cn: "在 <strong>{venue}</strong> 作 <em>{title}</em> 主题口头报告。" },
      honorAwarded:   { en: "Awarded <strong>{name}</strong>.",
                        cn: "获 <strong>{name}</strong>。" },
      honorSelected:  { en: "Selected for <strong>{name}</strong>.",
                        cn: "入选 <strong>{name}</strong>。" },
      patentGranted:  { en: "Patent <em>{title}</em> granted (<strong>{number}</strong>).",
                        cn: "专利 <em>{title}</em> 获授权（<strong>{number}</strong>）。" },
      patentFiled:    { en: "Patent <em>{title}</em> filed.",
                        cn: "申请专利 <em>{title}</em>。" }
    },
    common: {
      advisedBy: { en: "Advisor",         cn: "导师"      },
      lab:       { en: "Lab",             cn: "实验室"    },
      lastUpd:   { en: "Last updated",    cn: "最后更新"  },
      copied:    { en: "BibTeX copied ✓", cn: "BibTeX 已复制 ✓" },
      copyFail:  { en: "Copy failed",     cn: "复制失败"        },
      themeAria: { en: "Toggle theme",    cn: "切换主题"        },
      langAria:  { en: "Toggle language", cn: "切换语言"        }
    }
  },

  /* ----------  Profile (sidebar)  ---------- */
  profile: {
    nameEn: "Yu Xue",
    nameCn: "薛宇",
    photo: "assets/photo.jpg",
    position:    { en: "Ph.D. Candidate",        cn: "博士研究生" },
    affiliation: { en: "Beihang University",     cn: "北京航空航天大学" },
    lab:         { en: "Key laboratory of Satellite Navigation and Mobile Communication Fusion Technology, Ministry of Industry and Information Technology, Beijing 100083, China",
                   cn: "卫星导航与移动通信融合技术工信部重点实验室" },
    advisor:     { en: "Prof. Chuang Shi (Academician of Chinese Academy of Sciences)",
                   cn: "施闯 中国科学院院士" },
    email: "xueyu@buaa.edu.cn",
    github: "https://github.com/Xsleet",
    orcid:  "https://orcid.org/0009-0002-3674-2092",
    bio: {
      en: "I am a Ph.D. student committed to advancing satellite spatiotemporal services towards being more <em>precise</em>, <em>autonomous</em>, and <em>trustworthy</em>. My research focuses on the timescale construction for Low Earth Orbit (LEO) and BeiDou Navigation Satellite System (BDS) constellations, as well as high-precision and highly trustworthy BeiDou PNT (Positioning, Navigation, and Timing).",
      cn: "本人致力于推动卫星时空服务向更<em>高精</em>、更<em>自主</em>、更<em>可信</em>迈进。研究方向聚焦于低轨/北斗导航星座时间基准构建与北斗高精度高可信定位导航授时。"
    }
  },

  /* ----------  Research themes (vertical cards with linked work)  ---------- */
  research: [
    {
      id: "leo",
      icon: "satellite",
      title:    { en: "Space-Based Autonomous LEO Constellation Timescale",
                  cn: "低轨星座天基自主时间基准" },
      tagline:  { en: "Large-scale LEO constellation synchronization without external time sources",
                  cn: "不依赖外部时间源的大规模低轨星座同步" },
      summary: {
        en: "I architect space-based timescales that leverage low-SWaP-C heterogeneous clock ensembles and inter-satellite links — enabling LEO mega-constellations to maintain stable timing without depending on GNSS or ground infrastructure.",
        cn: "基于低 SWaP-C 异构钟组与星间链路，构建天基自主时间基准架构，使低轨巨型星座能够在不依赖 GNSS 与地面基础设施的条件下维持稳定的时间同步。"
      },
      keywords: [
        { en: "Heterogeneous Clocks",  cn: "异构钟组" },
        { en: "Inter-Satellite Links", cn: "星间链路" },
        { en: "Ensemble Filter",       cn: "集合时间尺度滤波" },
        { en: "Fourier Neural Net",    cn: "傅里叶神经网络" }
      ]
    },
    {
      id: "integrity",
      icon: "shield",
      title:    { en: "GNSS Integrity Monitoring",
                  cn: "GNSS 完好性监测" },
      tagline:  { en: "Trustworthy positioning &amp; timing",
                  cn: "可信的定位与授时" },
      summary: {
        en: "I extend the classical Advanced RAIM framework into the timing domain (T-ARAIM) and design server-side quality monitoring for real-time orbit, clock, and ionospheric corrections — bringing safety-of-life integrity guarantees to high-precision PNT services.",
        cn: "将经典先进 RAIM 框架拓展至高精度授时领域（T-ARAIM），并设计服务端实时轨道、钟差、电离层改正数的质量监测体系，为高精度 PNT 服务提供生命安全级完好性保障。"
      },
      keywords: [
        { en: "T-ARAIM",          cn: "T-ARAIM" },
        { en: "BDSBAS",           cn: "BDSBAS" },
        { en: "Quality Indicator", cn: "质量指标" },
        { en: "Fault Detection",  cn: "故障检测" },
        { en: "Protection Level", cn: "保护水平" }
      ]
    },
  ],

  /* ----------  News Timeline ----------
   *  News list = manual entries below + auto-derived items from
   *  `publications` / `talks` / `patents` / `honors` (see buildNews() in
   *  app.js). An auto-derived item appears iff its source has a `date`
   *  starting with "YYYY-MM". Papers and talks are independent: a single
   *  conference can yield BOTH a paper entry and a talk entry.
   *  Auto rules:
   *    Publications — pick template from `type`/`status`/`role`:
   *      type === "conference" + coauthor → "Co-authored paper {title} presented at {venue}"
   *      type === "conference"            → "Paper {title} presented at {venue}"
   *      status === "accepted"            → "Paper {title} accepted by {venue}"
   *      role === "coauthor"              → "Co-authored paper {title} published in {venue}"
   *      default (journal first author)   → "Paper {title} published in {venue}"
   *    Talks   — every entry with month-precision date emits "Oral presentation".
   *    Patents — `number` starts with "ZL"/"CN" + digits → "granted",
   *              otherwise placeholder → "filed".
   *    Honors  — kind === "selected" → "入选/Selected for", else "获/Awarded".
   *
   *  Manual entries: shape { date: "YYYY-MM", tag, link?, en, cn }
   *  Tag should be one of "paper" | "talk" | "patent" | "honor" (others render
   *  with a neutral pill). `link` is an element id to scroll to (optional).
   * ------------------------------------- */
  news: [
    // Add custom updates here, e.g. visiting talks, group news, awards not in `honors`, etc.
    // { date: "2025-08", tag: "talk", link: "talks", en: "Invited talk at ...", cn: "在 ... 作邀请报告。" }
  ],

  /* ----------  Publications (English-only, theme-tagged)  ---------- */
  publications: [
    {
      key: "xueSpacebasedAutonomousTimescale2026",
      shortTitle: "Space-based Autonomous Timescale for LEO Constellations",
      title: "Space-based Autonomous Timescale Realization for LEO Constellations Enabled by Low SWaP-C Heterogeneous Clock Ensembles and Inter-Satellite Links",
      authors: ["Yu Xue", "Fu Zheng", "Dong Zhang", "Xiyuan Chen", "Chuang Shi"],
      venue: "IEEE Internet of Things Journal",
      year: 2026,
      date: "2026-03",
      status: "accepted",
      type: "journal",
      role: "first",
      theme: "leo",
      badges: ["JCR Q1"],
      doi: "10.1109/JIOT.2026.3674470",
      url: "https://ieeexplore.ieee.org/document/11435378",
      abstract: "Low Earth Orbit (LEO) mega-constellations are emerging as critical infrastructure for the global IoT. We propose a space-based autonomous timescale realization architecture leveraging low SWaP-C heterogeneous clock ensembles (CSACs + mROs) and inter-satellite links. The onboard Harmonic Extended Ensemble Timescale Filter (HE-ETF) mitigates periodic environmental disturbances, while a constellation-level ETF yields LEOT with stability improved by over 35%."
    },
    {
      key: "xueCharacterizationPredictionLow2026",
      shortTitle: "LEO Clock Prediction with Fourier Neural Network",
      title: "Characterization and Prediction of Low Earth Orbit Satellite Clock Offsets Based on Fourier Analysis Network",
      authors: ["Yu Xue", "Fu Zheng", "Kaiyu Xue", "Chuang Shi", "Guifei Jing"],
      venue: "Measurement Science and Technology",
      volume: "37(15):156303",
      year: 2026,
      date: "2026-04",
      type: "journal",
      role: "first",
      theme: "leo",
      badges: ["JCR Q1"],
      doi: "10.1088/1361-6501/ae5abf",
      url: "https://doi.org/10.1088/1361-6501/ae5abf",
      abstract: "We analyze GRACE-FO onboard clock offsets, revealing dominant 12h periodicity from the South Atlantic Anomaly and relativistic per-revolution terms. Motivated by these patterns, we propose a Fourier Analysis Network (FAN) that directly embeds Fourier series into the neural architecture. FAN outperforms LSTM by 6.7–11.1% in short-term and 22.7–34.1% in long-term LEO clock prediction."
    },
    {
      key: "xueTimingAdvancedReceiver2025",
      shortTitle: "Timing ARAIM Augmented by BDSBAS",
      title: "Timing Advanced Receiver Autonomous Integrity Monitoring Augmented by BDSBAS",
      authors: ["Yu Xue", "Fu Zheng", "Liangcheng Deng", "Yuanhui Lin", "Chuang Shi"],
      venue: "Measurement Science and Technology",
      volume: "36(2):026312",
      year: 2025,
      date: "2025-01",
      type: "journal",
      role: "first",
      theme: "integrity",
      badges: ["JCR Q1"],
      doi: "10.1088/1361-6501/ada789",
      url: "https://dx.doi.org/10.1088/1361-6501/ada789",
      abstract: "We integrate ARAIM with dual-frequency multi-constellation BDSBAS for GNSS timing integrity. Key improvements in risk allocation, solution estimation, and protection level yield the T-ARAIM algorithm. With BDSBAS augmentation, timing accuracy improves 20–28.5% and T-ARAIM availability reaches 100% in fixed-position scenarios."
    },
    {
      key: "zhengPreliminaryExplorationVerification2025",
      shortTitle: "Preliminary Exploration and Verification of T-ARAIM",
      title: "Preliminary Exploration and Verification of Timing Advanced RAIM",
      authors: ["Fu Zheng", "Yu Xue*", "Liangcheng Deng", "Wenyue Chao", "Chuang Shi"],
      venue: "IEEE Transactions on Aerospace and Electronic Systems",
      volume: "61(4):10935–10943",
      year: 2025,
      date: "2025-05",
      type: "journal",
      role: "corresponding",
      theme: "integrity",
      badges: ["JCR Q1", "Corresponding"],
      doi: "10.1109/TAES.2025.3564920",
      url: "https://ieeexplore.ieee.org/document/10979271",
      abstract: "Building upon baseline ARAIM, we introduce modifications in risk budget allocation, timing solution estimation, and Timing Protection Level calculation. Fixing receiver coordinates enables global T-ARAIM availability with a single constellation; experiments demonstrate TPL bounds timing errors across globally distributed stations."
    },
    {
      key: "xueOnlineTimeMetrology2025",
      shortTitle: "Online GNSS Time Metrology Method",
      title: "Online Time Metrology Method Based on Global Navigation Satellite System",
      authors: ["Yu Xue", "Dong Zhang", "Fu Zheng", "Chuang Shi", "Yuzhuo Wang", "Aimin Zhang"],
      venue: "Joint EFTF/IFCS 2025",
      year: 2025,
      date: "2025-05",
      type: "conference",
      role: "first",
      theme: "metrology",
      badges: ["EI"],
      doi: "10.1109/EFTF/IFCS64367.2025.11194696",
      url: "https://ieeexplore.ieee.org/document/11194696/",
      abstract: "A remote online metrology method for timing terminals based on GNSS. We trace the time datum of real-time satellite clock offset products to UTC(k) via coupling between receiver and satellite clock parameters. Long-distance experiments achieve sub-nanosecond accuracy with 0.15 ns A-type uncertainty."
    },
    {
      key: "dengLNFMHighPrecisionFrequency2025",
      shortTitle: "LNFM Frequency Stability Measurement System",
      title: "LNFM: High-Precision Frequency Stability Measurement System of Atomic Oscillators With Built-In Reference Source",
      authors: ["Liangcheng Deng", "Fu Zheng", "Dong Zhang", "Yu Xue", "Beiyou Fu", "Chuang Shi"],
      venue: "IEEE Transactions on Instrumentation and Measurement",
      volume: "74:1–9",
      year: 2025,
      date: "2025-07",
      type: "journal",
      role: "coauthor",
      theme: "metrology",
      badges: ["JCR Q1"],
      doi: "10.1109/TIM.2025.3588945",
      url: "https://ieeexplore.ieee.org/document/11080490",
      abstract: "A compact cost-effective low-noise frequency stability measurement system (LNFM) using Precise Point Timing to compensate OCXO long-term drift. SDR-based DMTD achieves a noise floor of 5.3×10⁻¹⁴ τ⁻¹, with Allan deviation measurement precision comparable to commercial instruments using hydrogen masers as reference."
    },
    {
      key: "xueNewQualityMonitoring2024",
      shortTitle: "Quality Monitoring of Real-Time Orbit/Clock Products",
      title: "A New Quality Monitoring Method for Real-Time Precise Orbit and Clock Products",
      authors: ["Yu Xue", "Fu Zheng", "Guangyu Zhou", "Wenyue Chao", "Dong Zhang", "Chuang Shi"],
      venue: "GPS Solutions",
      volume: "28(3):125",
      year: 2024,
      date: "2024-05",
      type: "journal",
      role: "first",
      theme: "integrity",
      badges: ["JCR Q1"],
      doi: "10.1007/s10291-024-01673-z",
      url: "https://doi.org/10.1007/s10291-024-01673-z",
      abstract: "A quality monitoring method for real-time precise satellite orbit and clock products using a global station network. We compute pseudorange and carrier-phase Quality Indicators (QIs) and apply iForest outlier detection to mitigate network failures. The carrier-phase QI bounds 99.93% of product errors within 15 cm and reduces false alerts by 68.9%."
    },
    {
      key: "shiAdaptiveQualityMonitoring2022",
      shortTitle: "Adaptive Ionospheric Correction Quality Monitoring",
      title: "An Adaptive Quality Monitoring Method for Real-Time Ionospheric Corrections",
      authors: ["Chuang Shi", "Yu Xue", "Fu Zheng", "Jiale Wang"],
      venue: "GPS Solutions",
      volume: "27(1):5",
      year: 2023,
      date: "2022-12",
      type: "journal",
      role: "student-first",
      theme: "integrity",
      badges: ["JCR Q1", "Student 1st"],
      doi: "10.1007/s10291-022-01344-x",
      url: "https://doi.org/10.1007/s10291-022-01344-x",
      abstract: "An adaptive GIVE algorithm for real-time ionospheric correction quality monitoring. By introducing three adjustment coefficients optimized via PSO, the method achieves ≥46.7% improvement in ionospheric error bounding compared to traditional SBAS algorithms, with coefficients extrapolatable across low-activity periods."
    },
    {
      key: "wangFastConvergenceAlgorithm2022",
      shortTitle: "Fast Convergence Algorithm of PPP for Smartphones",
      title: "Fast Convergence Algorithm of Precise Point Positioning Towards Smartphones and Its Application in the Urban Environment",
      authors: ["Jiale Wang", "Fu Zheng", "Chuang Shi", "Yong Hu", "Yu Xue", "Qingcheng Li", "Wenyue Chao"],
      venue: "Proceedings of the 35th International Technical Meeting of the Satellite Division of The Institute of Navigation (ION GNSS+ 2022)",
      year: "2022",
      date: "2022-09",
      type: "conference",
      role: "coauthor",
      theme: "other",
      badges: ["EI"],
      doi: "10.33012/2022.18346",
      url: "http://www.ion.org/publications/abstract.cfm?jp=p&articleID=18346",
      abstract: "The prevalence of low-cost GNSS chips that allow multi-constellation, multi-frequency pseudorange, and carrier phase measurements has provided the hardware foundation for implementing precise point positioning (PPP) on smartphones. However, compared to professional geodetic receivers, smartphones suffer from severe multipath effects and signal quality loss, resulting in the convergence time for real-time PPP solutions becoming longer, from several minutes to a few hours, to converge to 1 m accuracy. By establishing high-precision atmospheric products (including ionospheric and tropospheric corrections), we aim to bring smartphone PPP to achieve instantaneous sub-meter positioning performance. For ionospheric Slant TEC (STEC) modeling, we employ the Satellite-based Ionospheric Model (SIM), and the average RMS of the model's accuracy is better than 2 TECU. The Real-Time Tropospheric Grid Point (RTGP) model is based on the GPT2w model, and its accuracy is better than 1.2 cm on average. Both models are updated every 10 s to fulfill the requirements of real-time smartphone applications. Static experimental results in an open urban environment indicate that the Xiaomi Mi8 and Huawei P40 can converge to sub-meter levels within 6 s when utilizing a multi-constellation and dual-frequency PPP solution with precise atmospheric corrections. The positioning accuracy was obtained by Mi8 and P40 with a horizontal RMS of 0.36 m and 0.3 m. In the dynamic experiment with apparent occlusion, the horizontal convergence speed of the atmospheric augmentation PPP solution also showed satisfactory results, with both smartphones converging to 1 m within 5 s. Moreover, the RMS statistics of horizontal positioning accuracy of Mi8 and P40 reach 0.68 m and 0.54 m, respectively. The atmospheric augmentation PPP method presented in this paper effectively improves convergence time and positioning accuracy in the horizontal direction compared to the conventional PPP model and satisfies smartphone users' need for instantaneous sub-meter positioning in urban navigation.",
    },
  ],

  /* ----------  Patents (theme-tagged with abstracts)  ---------- */
  patents: [
    {
      key: "patent-integrity-monitoring-orbit-clock",
      title: { en: "A method for integrity monitoring of precise satellite orbit and clock products",
               cn: "一种精密卫星轨道和钟差产品完好性监测方法" },
      number: "ZL 2023 1 0826699.6",
      date: "2025-09-02",
      inventors: [
        { en: "Fu Zheng",   cn: "郑福" },
        { en: "Yu Xue",     cn: "薛宇" },
        { en: "Chuang Shi", cn: "施闯" },
      ],
      theme: "integrity",
      abstract: {
        en: "The present invention belongs to the field of satellite navigation and discloses a method for integrity monitoring of precise satellite orbit and clock products. The method constructs a fault detection statistic for the products based on carrier-phase observations from a ground-based integrity monitoring network and the corrections provided by precise satellite orbit and clock products. By performing statistical analysis of residuals across multiple stations and epochs, the integrity information of the products, namely the User Differential Range Error (UDRE), is estimated. The UDRE can accurately reflect variations in product accuracy while ensuring integrity, and its estimation reaches centimeter-level precision. This capability satisfies the requirements of high-precision positioning technologies for integrity monitoring of precise satellite orbit and clock products.",
        cn: "本发明属于卫星导航领域，公开了一种精密卫星轨道和钟差产品完好性监测方法，该方法根据地面完好性监测网络的载波相位观测值和精密卫星轨道和钟差产品提供的改正数构建产品故障的检验统计量，通过对多站多历元残差的统计，估计得到产品的完好性信息UDRE。UDRE可以在保证完好性的前提下，准确的反应产品的精度变化情况，且UDRE估计值在厘米级，可以满足高精度定位技术对精密卫星轨道和钟差产品完好性监测的需求。"
      }
    },
    {
      key: "patent-integrity-monitoring",
      title: { en: "Integrity Monitoring Method for Multi-Constellation BDS/GNSS Precise Point Positioning Timing",
               cn: "北斗/GNSS多星座精密单点授时完好性监测方法" },
      number: "ZL 2025 1 0058726.9",
      date: "2025-08-05",
      inventors: [
        { en: "Fu Zheng", cn: "郑福" },
        { en: "Wenyue Chao",   cn: "晁文月" },
        { en: "Yu Xue",     cn: "薛宇" },
        { en: "Chuang Shi", cn: "施闯" },
      ],
      theme: "metrology",
      abstract: {
        en: "This invention relates to the field of satellite navigation technology, specifically disclosing an integrity monitoring method for multi-constellation BeiDou/GNSS Precise Point Positioning (PPP) timing. The method is executed through a structured process: it begins with the pre-allocation of integrity prior probabilities, followed by the determination of the maximum fault order and its corresponding fault subsets. Subsequently, a weighting matrix is constructed to calculate the receiver clock offset and establish the relevant test statistics. By computing the test thresholds and evaluating these statistics, the method derives the receiver clock offset protection level (PL) to determine system availability. This approach fills a critical research gap in existing timing integrity monitoring algorithms regarding multi-constellation PPP applications. Furthermore, it effectively addresses the challenges of simultaneous multiple faults in multi-constellation scenarios, significantly enhancing the reliability and robustness of joint multi-constellation timing services.",
        cn: "本发明属于卫星导航技术领域，公开了北斗/GNSS多星座精密单点授时完好性监测方法，包括以下步骤：第一步，完好性先验概率预分配；第二步，确定最大故障阶数；第三步，确定故障子集；第四步，构造加权矩阵；第五步，计算接收机钟差并构造检验量；第六步，计算接收机钟差检验阈值并对判别检验量；第七步，计算接收机钟差保护级；第八步，判别可用性；本发明填补了现有授时完好性监测算法对于多星座精密单点授时监测的研究空白，并且解决多星座授时是出现多故障情况的问题，提升多星座联合授时的可靠性。"
      }
    },
    {
      key: "patent-geo-fencing-uavs",
      title: { en: "Satellite Navigation Chip with Built-in 3D Geo-fencing for UAVs and Working Method Thereof",
               cn: "内置三维电子围栏的无人机卫星导航芯片及其工作方法" },
      number: "ZL 2025 1 0058726.9",
      date: "2025-04-08",
      inventors: [
        { en: "Fu Zheng",   cn: "向锦武" },
        { en: "Chuang Shi", cn: "施闯" },
        { en: "Yu Xue",     cn: "薛宇" },
      ],
      theme: "other",
      abstract: {
        en: "The present invention pertains to the technical field of navigation chip design and discloses a drone satellite navigation chip with a built-in three-dimensional geofencing function, along with its operating method. The chip comprises an RF signal processing module, a baseband signal processing module, a three-dimensional geofencing module, and a task scheduling module. The RF signal processing module, baseband signal processing module, and three-dimensional geofencing module are interconnected pairwise via the task scheduling module. The RF signal processing module is responsible for receiving and processing multi-frequency, multi-constellation navigation signals from satellites to generate baseband signals, which are then forwarded to the baseband signal processing module through the task scheduling module. The baseband signal processing module processes the baseband signals via a positioning algorithm unit to generate position and timing information, thereby providing navigation support for the drone. By implementing geofencing at the hardware level, the invention effectively eliminates the possibility of unauthorized drone operations, thereby enhancing aviation safety and public security.",
        cn: "本发明涉及导航芯片设计技术领域，公开一种内置三维电子围栏的无人机卫星导航芯片及其工作方法，其中芯片包括频带信号处理模组、基带信号处理模组、三维电子围栏模组和任务调度模组；其中，频带信号处理模组、基带信号处理模组和三维电子围栏模组通过任务调度模组两两相互信号连接；频带信号处理模组用于接收并处理来自卫星的多频多系统导航信号，得到基带信号，基带信号通过任务调度模组馈送至基带信号处理模组；基带信号处理模组用于通过定位算法处理单元，对基带信号进行处理，生成位置和时间信息，为无人机提供导航支持。本发明从硬件层面杜绝无人机违规飞行的可能性，维护航空安全和公共安全。"
      }
    },
    {
      key: "patent-quality-monitoring",
      title: { en: "An advanced receiver autonomous integrity monitoring method, apparatus, device, and storage medium for timing applications",
               cn: "先进授时接收机自主完好性监测方法、装置、设备及存储介质" },
      number: "ZL 2024 1 0913777.0",
      date: "2025-03-08",
      inventors: [
        { en: "Fu Zheng",   cn: "郑福" },
        { en: "Chuang Shi", cn: "施闯" },
        { en: "Yu Xue",     cn: "薛宇" },
      ],
      theme: "integrity",
      abstract: {
        en: "The present invention discloses an advanced receiver autonomous integrity monitoring (RAIM) method, apparatus, device, and storage medium for timing applications. The method includes constructing fault subsets and deriving pre-fit residuals based on carrier-phase-smoothed pseudorange observations from the receiver. Using integrity support information and integrity parameters broadcast by the BeiDou Satellite-Based Augmentation System (SBAS), a residual weighting matrix for pseudorange measurements is computed. A weighted least squares estimator is then employed to obtain the timing solution for the all-in-view subset composed of all visible satellites, as well as timing solutions for each fault subset. Fault detection is performed based on solution separation hypothesis testing for each fault-tolerant timing solution and a chi-square test applied to the all-in-view timing solution. If the fault detection is passed, a timing protection level is computed according to the integrity risk budget, and the availability of the timing service is subsequently determined. The proposed method eliminates the largest error source in timing applications—ionospheric delay—and leverages multi-constellation signals to significantly enhance satellite geometry and observation redundancy.",
        cn: "本发明公开一种先进授时接收机自主完好性监测方法、装置、设备及存储介质，所述方法包括：构建故障子集，根据接收机的载波相位平滑伪距观测值，得到验前残差，利用完好性支持信息和北斗星基增强系统播发的完好性参数，计算伪距的残差权重矩阵，利用加权最小二乘估计器估计由所有可视卫星组成的全视子集的授时解和所有故障子集的授时解；基于对每个容错授时解的解分离假设检测和对于全视授时解的卡方检验来进行故障检测；在故障检测通过的情况下，根据完好性风险预算计算出授时保护级，并确定授时服务的可用性。本发明消除了授时过程中最大的误差源——电离层误差；采用多星座信号，大大增强了卫星几何和观测值冗余。"
      }
    },
    {
      key: "patent-taraim-bdsbas",
      title: { en: "An adaptive integrity monitoring method for ionospheric models",
               cn: "一种自适应的电离层模型完好性监测方法" },
      number: "ZL 2021 1 0553126.1",
      date: "2022-10-08",
      inventors: [
        { en: "Chuang Shi", cn: "施闯" },
        { en: "Yu Xue",     cn: "薛宇" },
        { en: "Fu Zheng",   cn: "郑福" },
      ],
      theme: "integrity",
      abstract: {
        en: "The present invention discloses an adaptive integrity monitoring method for ionospheric models, enabling real-time and accurate assessment of model integrity. The method employs the Grid Ionospheric Vertical Error (GIVE) as the protection level for ionospheric model integrity. Based on ionospheric delays derived from real-time GNSS observations, the errors in ionospheric delay corrections are bounded. By introducing a tuning coefficient along with an adaptive optimization algorithm for this coefficient, the method achieves real-time and precise bounding of ionospheric errors using GIVE. While ensuring integrity, it significantly enhances system availability, demonstrating broad application prospects in ionospheric anomaly monitoring and high-precision positioning.",
        cn: "本发明公开了一种自适应的电离层模型完好性监测方法，实现对电离层模型完好性实时准确监测的方法，以格网点电离层垂直延迟误差(Grid Ionospheric Vertical Error，GIVE)作为电离层模型完好性的保护门限，依据GNSS实时观测数据提取的电离层延迟，对电离层模型延迟改正数的误差进行定界，通过引入调节系数以及调节系数的自适应优化算法，实现了GIVE对电离层误差的实时准确限定，在保证完好性的条件下极大地提升了系统的可用性，在电离层异常监测以及高精度定位中有着广阔的应用前景。"
      }
    },
  ],

  /* ----------  Talks (newest first) ----------
   *  Independent of publications — list any talk (domestic or international).
   *  Display only; not auto-linked to other sections.
   * ------------------------------------- */
  talks: [
    {
      title: { en: "Space-based Autonomous Timescale Realization for LEO Constellations Enabled by Low-Cost Heterogeneous Clock Ensembles and Inter-Satellite Links",
               cn: "基于低成本异构钟组与星间链路的低轨星座天基自主时间基准实现" },
      venue: { en: "2026 Annual Conference on Geodesy and Navigation",
               cn: "2026 大地测量与导航年会" },
      location: { en: "Changsha, China", cn: "中国长沙" },
      date: "2026-04-17"
    },
    {
      title: { en: "Characterization and Prediction of Clock Periodic Offsets in Low Earth Orbit Satellite Based on Fourier Neural Network",
               cn: "基于傅里叶神经网络的低轨卫星钟差周期分量表征与预报" },
      venue: { en: "2025 CPGNSS Forum", cn: "2025 CPGNSS 论坛" },
      location: { en: "Nanchang, China", cn: "中国南昌" },
      date: "2025-07-14"
    },
    {
      title: { en: "Online Time Metrology Method Based on Global Navigation Satellite System",
               cn: "基于全球导航卫星系统的在线时间计量方法" },
      venue: { en: "Joint EFTF/IFCS 2025 (IEEE International Frequency Control Symposium / 22nd European Frequency and Time Forum)",
               cn: "EFTF/IFCS 2025（IEEE 国际频率控制研讨会与第 22 届欧洲频率时间论坛联合会议）" },
      location: { en: "Querétaro, Mexico", cn: "墨西哥克雷塔罗" },
      date: "2025-05-13"
    },
    {
      title: { en: "Autonomous Integrity Monitoring of the Time Synchronization Receiver Assisted by BDSBAS",
               cn: "BDSBAS 增强的时间同步接收机自主完好性监测" },
      venue: { en: "2024 CPGNSS Forum", cn: "2024 CPGNSS 论坛" },
      location: { en: "Beijing, China", cn: "中国北京" },
      date: "2024-07-27"
    },
    {
      title: { en: "The Progress in BeiDou Wide-Area High-Precision Positioning and Timing Monitoring Technology",
               cn: "北斗广域高精度定位授时监测技术进展" },
      venue: { en: "42nd Annual Southern African Transport Conference (SATC 2024)",
               cn: "第 42 届南部非洲年度交通会议（SATC 2024）" },
      location: { en: "Pretoria, South Africa", cn: "南非比勒陀利亚" },
      date: "2024-07-10"
    }
  ],

  /* ----------  Education  ---------- */
  education: [
    {
      school: { en: "Beihang University",       cn: "北京航空航天大学" },
      logo:   "assets/img/buaa.png",
      degree: { en: "Ph.D. · Communication & Information Systems",
                cn: "博士 · 通信与信息系统" },
      period: { en: "Sep 2023 – Present", cn: "2023.09 – 至今" },
      note:   { en: "Advisor: Academician Chuang Shi",
                cn: "导师：施闯 院士" }
    },
    {
      school: { en: "Beihang University",       cn: "北京航空航天大学" },
      logo:   "assets/img/buaa.png",
      degree: { en: "M.Eng. · Electronic Information (ICE)",
                cn: "硕士 · 电子信息（信息与通信工程）" },
      period: { en: "Sep 2020 – Jun 2023", cn: "2020.09 – 2023.06" },
      note:   { en: "GPA 91.82 · Rank 5/183",
                cn: "GPA 91.82 · 专业排名 5/183" }
    },
    {
      school: { en: "Beijing Jiaotong University", cn: "北京交通大学" },
      logo:   "assets/img/bjtu.png",
      degree: { en: "B.Eng. · Communication Engineering",
                cn: "学士 · 通信工程" },
      period: { en: "Sep 2016 – Jun 2020", cn: "2016.09 – 2020.06" },
      note:   { en: "GPA 3.47 / 4.0", cn: "GPA 3.47 / 4.0" }
    }
  ],

  /* ----------  Honors & Awards  ---------- */
  honors: [
    { year: "2025", date: "2025-09", kind: "selected",
      en: "Doctoral Student Program of the Young S&T Talent Cultivation Project, China Association for Science and Technology",
      cn: "中国科协青年人才培育工程博士生专项计划" },
    { year: "2025", date: "2025-06",
      en: "Outstanding Graduate Student, Beihang University",
      cn: "北京航空航天大学优秀研究生" },
    { year: "2024", date: "2024-10",
      en: "National 2nd Place — 13th China Innovation &amp; Entrepreneurship Competition (Beidou Track)",
      cn: "第十三届中国创新创业大赛北斗应用赛全国第二名" },
    { year: "2024", date: "2024-07",
      en: "Outstanding Academic Innovation Achievement Award, Beihang University",
      cn: "北京航空航天大学研究生优秀学术创新成果奖"},
    { year: "2023", date: "2023-06",
      en: "Outstanding Graduate, Beihang University",
      cn: "北京航空航天大学优秀毕业生" },
    { year: "2022", date: "2022-10",
      en: "Three-Good Student, Beihang University",
      cn: "北京航空航天大学三好学生"},
    { year: "2022", date: "2021-10",
      en: "National 2nd Prize — 3rd Central Enterprise Innovation Competition",
      cn: "第三届央企熠星创新创意大赛全国二等奖" },
    { year: "2022", date: "2021-04",
      en: "National Excellence Award — 4th \"Beidou+\" Innovation Competition",
      cn: "第四届北斗+创新创业大赛全国优秀奖" }
  ]

};
