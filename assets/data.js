/* ===================================================================
 *  Site Data – edit this file to update content without touching HTML
 *  站点数据文件 —— 更新内容只需修改此文件，无需改动 HTML 结构
 * ===================================================================
 */

/* ----------  About / Hero  ---------- */
window.SITE_DATA = {

  profile: {
    nameEn: "Yu Xue",
    nameCn: "薛宇",
    position: "Ph.D. Candidate",
    affiliation: "Beihang University",
    affiliationCn: "北京航空航天大学",
    advisor: "Prof. Chuang Shi (施闯院士)",
    lab: "Key Lab of Satellite Navigation &amp; Mobile Communication Integration, MII",
    email: "xueyu@buaa.edu.cn",
    github: "https://github.com/Xsleet",
    // 如需展示 Google Scholar / ORCID，取消对应注释并填入链接
    // scholar: "https://scholar.google.com/citations?user=XXXX",
    // orcid: "https://orcid.org/0000-0000-0000-0000",
    photo: "assets/photo.jpg",
    bio: [
      {
        en: "I am a Ph.D. candidate at <strong>Beihang University (BUAA)</strong>, advised by Academician Chuang Shi. I work on making satellite-based time and position services more <em>trustworthy</em> and <em>autonomous</em>.",
        cn: "本人是<strong>北京航空航天大学</strong>通信与信息系统专业博士研究生，师从施闯院士。研究致力于让卫星时空服务更<em>可信</em>、更<em>自主</em>。"
      },
      {
        en: "My research lives at the intersection of <strong>GNSS integrity monitoring</strong>, <strong>LEO constellation timescale</strong>, and <strong>high-precision time metrology</strong> — with the goal of bringing sub-nanosecond PNT services to safety-critical applications.",
        cn: "研究方向聚焦于 <strong>GNSS 完好性监测</strong>、<strong>低轨星座时间基准</strong>与<strong>高精度时间计量</strong>三个交叉领域，目标是为安全关键应用提供亚纳秒级定位导航授时服务。"
      }
    ]
  },

  /* ----------  Research themes (3 核心方向)  ---------- */
  research: [
    {
      icon: "shield",
      title: "GNSS Integrity Monitoring",
      titleCn: "高精度定位授时完好性监测",
      summary: "Extending advanced RAIM to timing services (T-ARAIM) and designing server-side quality monitoring for real-time orbit, clock, and ionospheric corrections.",
      summaryCn: "将先进 RAIM 算法拓展至授时服务（T-ARAIM），并构建服务端实时轨道、钟差与电离层改正数的质量监测体系。",
      keywords: ["T-ARAIM", "BDSBAS", "Quality Indicator", "Fault Detection"]
    },
    {
      icon: "satellite",
      title: "LEO Autonomous Timescale",
      titleCn: "低轨星座天基自主时间基准",
      summary: "Architecting space-based timescales with heterogeneous low-SWaP-C clock ensembles and inter-satellite links — GNSS-denied synchronization for mega-constellations.",
      summaryCn: "基于低 SWaP-C 异构钟组与星间链路，构建天基自主时间基准，为巨型低轨星座提供不依赖 GNSS 的时间同步方案。",
      keywords: ["Heterogeneous Clocks", "Inter-Satellite Links", "ETF", "SWaP-C"]
    },
    {
      icon: "clock",
      title: "Precise Time Metrology",
      titleCn: "卫星导航在线时间计量",
      summary: "Tracing timing terminals to UTC(k) over GNSS with sub-nanosecond uncertainty — enabling remote, continuous, and affordable metrology for distributed time systems.",
      summaryCn: "基于 GNSS 实现授时终端至 UTC(k) 的亚纳秒级远程在线溯源，让分布式时间系统的连续低成本计量成为可能。",
      keywords: ["UTC(k)", "PPP Timing", "Online Metrology", "Traceability"]
    }
  ],

  /* ----------  News Timeline (倒序, 最新在前)  ---------- */
  news: [
    {
      date: "2026-04", tag: "paper",
      en: "Paper <em>Characterization and Prediction of LEO Satellite Clock Offsets Based on Fourier Analysis Network</em> published in <strong>Meas. Sci. Technol.</strong>",
      cn: "论文《基于傅里叶分析网络的低轨卫星钟差表征与预报》在 <strong>Meas. Sci. Technol.</strong> 期刊发表。"
    },
    {
      date: "2026-03", tag: "paper",
      en: "Paper <em>Space-based Autonomous Timescale for LEO Constellations</em> accepted by <strong>IEEE Internet of Things Journal</strong>.",
      cn: "论文《低轨星座天基自主时间基准》被 <strong>IEEE IoT Journal</strong> 期刊录用。"
    },
    {
      date: "2025-09", tag: "honor",
      en: "Selected for <strong>2025 CAST Young Talent Cultivation Program</strong> (PhD Special Track).",
      cn: "入选 <strong>2025 年度中国科协青年人才培育工程</strong>博士生专项计划。"
    },
    {
      date: "2025-07", tag: "paper",
      en: "Co-authored paper <em>LNFM</em> on high-precision frequency stability measurement published in <strong>IEEE Trans. Instrum. Meas.</strong>",
      cn: "合作论文《LNFM：高精度频率稳定度测量系统》在 <strong>IEEE Trans. Instrum. Meas.</strong> 期刊发表。"
    },
    {
      date: "2025-05", tag: "talk",
      en: "Oral presentation at <strong>EFTF/IFCS 2025</strong> on online GNSS time metrology.",
      cn: "在 <strong>EFTF/IFCS 2025</strong> 国际学术会议作 GNSS 在线时间计量主题口头报告。"
    },
    {
      date: "2025-05", tag: "paper",
      en: "Paper <em>Preliminary Exploration and Verification of T-ARAIM</em> published in <strong>IEEE Trans. Aerosp. Electron. Syst.</strong>",
      cn: "论文《授时先进 RAIM 算法初步探索与验证》在 <strong>IEEE TAES</strong> 期刊发表。"
    },
    {
      date: "2025-03", tag: "honor",
      en: "Awarded <strong>BUAA Outstanding Graduate Student</strong>.",
      cn: "获评 <strong>北京航空航天大学优秀研究生</strong>。"
    },
    {
      date: "2025-01", tag: "paper",
      en: "Paper <em>Timing ARAIM Augmented by BDSBAS</em> published in <strong>Meas. Sci. Technol.</strong>",
      cn: "论文《BDSBAS 增强的授时先进 RAIM 算法》在 <strong>Meas. Sci. Technol.</strong> 期刊发表。"
    },
    {
      date: "2024-12", tag: "honor",
      en: "<strong>National 2nd Place</strong> at the 13th China Innovation &amp; Entrepreneurship Competition (Beidou Track).",
      cn: "获<strong>第十三届中国创新创业大赛北斗应用赛全国第二名</strong>。"
    },
    {
      date: "2024-05", tag: "paper",
      en: "Paper <em>A New Quality Monitoring Method for Real-Time Precise Orbit and Clock Products</em> published in <strong>GPS Solutions</strong>.",
      cn: "论文《实时精密轨道与钟差产品质量监测新方法》在 <strong>GPS Solutions</strong> 期刊发表。"
    }
  ],

  /* ----------  Publications (from 学术论文.bib)  ---------- */
  publications: [
    {
      key: "xueSpacebasedAutonomousTimescale2026",
      title: "Space-based Autonomous Timescale Realization for LEO Constellations Enabled by Low SWaP-C Heterogeneous Clock Ensembles and Inter-Satellite Links",
      authors: ["Yu Xue", "Fu Zheng", "Dong Zhang", "Xiyuan Chen", "Chuang Shi"],
      venue: "IEEE Internet of Things Journal",
      year: 2026,
      type: "journal",
      role: "first",
      badges: ["JCR Q1", "IEEE"],
      doi: "10.1109/JIOT.2026.3674470",
      url: "https://ieeexplore.ieee.org/document/11435378",
      abstract: "Low Earth Orbit (LEO) mega-constellations are emerging as critical infrastructure for the global IoT. We propose a space-based autonomous timescale realization architecture leveraging low SWaP-C heterogeneous clock ensembles (CSACs + mROs) and inter-satellite links. The onboard Harmonic Extended Ensemble Timescale Filter (HE-ETF) mitigates periodic environmental disturbances, while a constellation-level ETF yields LEOT with stability improved by over 35%.",
      theme: "leo"
    },
    {
      key: "xueCharacterizationPredictionLow2026",
      title: "Characterization and Prediction of Low Earth Orbit Satellite Clock Offsets Based on Fourier Analysis Network",
      authors: ["Yu Xue", "Fu Zheng", "Kaiyu Xue", "Chuang Shi", "Guifei Jing"],
      venue: "Measurement Science and Technology",
      volume: "37(15):156303",
      year: 2026,
      type: "journal",
      role: "first",
      badges: ["JCR Q1", "IOP"],
      doi: "10.1088/1361-6501/ae5abf",
      url: "https://doi.org/10.1088/1361-6501/ae5abf",
      abstract: "We analyze GRACE-FO onboard clock offsets, revealing dominant 12h periodicity from the South Atlantic Anomaly and relativistic per-revolution terms. Motivated by these patterns, we propose a Fourier Analysis Network (FAN) that directly embeds Fourier series into the neural architecture. FAN outperforms LSTM by 6.7–11.1% in short-term and 22.7–34.1% in long-term LEO clock prediction.",
      theme: "leo"
    },
    {
      key: "xueTimingAdvancedReceiver2025",
      title: "Timing Advanced Receiver Autonomous Integrity Monitoring Augmented by BDSBAS",
      authors: ["Yu Xue", "Fu Zheng", "Liangcheng Deng", "Yuanhui Lin", "Chuang Shi"],
      venue: "Measurement Science and Technology",
      volume: "36(2):026312",
      year: 2025,
      type: "journal",
      role: "first",
      badges: ["JCR Q1", "IOP"],
      doi: "10.1088/1361-6501/ada789",
      url: "https://dx.doi.org/10.1088/1361-6501/ada789",
      abstract: "We integrate ARAIM with dual-frequency multi-constellation BDSBAS for GNSS timing integrity. Key improvements in risk allocation, solution estimation, and protection level yield the T-ARAIM algorithm. With BDSBAS augmentation, timing accuracy improves 20–28.5% and T-ARAIM availability reaches 100% in fixed-position scenarios.",
      theme: "integrity"
    },
    {
      key: "zhengPreliminaryExplorationVerification2025",
      title: "Preliminary Exploration and Verification of Timing Advanced RAIM",
      authors: ["Fu Zheng", "Yu Xue*", "Liangcheng Deng", "Wenyue Chao", "Chuang Shi"],
      venue: "IEEE Transactions on Aerospace and Electronic Systems",
      volume: "61(4):10935–10943",
      year: 2025,
      type: "journal",
      role: "corresponding",
      badges: ["JCR Q1", "IEEE", "Corresponding"],
      doi: "10.1109/TAES.2025.3564920",
      url: "https://ieeexplore.ieee.org/document/10979271",
      abstract: "Building upon baseline ARAIM, we introduce modifications in risk budget allocation, timing solution estimation, and Timing Protection Level calculation. Fixing receiver coordinates enables global T-ARAIM availability with a single constellation; experiments demonstrate TPL bounds timing errors across globally distributed stations.",
      theme: "integrity"
    },
    {
      key: "xueOnlineTimeMetrology2025",
      title: "Online Time Metrology Method Based on Global Navigation Satellite System",
      authors: ["Yu Xue", "Dong Zhang", "Fu Zheng", "Chuang Shi", "Yuzhuo Wang", "Aimin Zhang"],
      venue: "Joint EFTF/IFCS 2025",
      year: 2025,
      type: "conference",
      role: "first",
      badges: ["EI", "IEEE"],
      doi: "10.1109/EFTF/IFCS64367.2025.11194696",
      url: "https://ieeexplore.ieee.org/document/11194696/",
      abstract: "A remote online metrology method for timing terminals based on GNSS. We trace the time datum of real-time satellite clock offset products to UTC(k) via coupling between receiver and satellite clock parameters. Long-distance experiments achieve sub-nanosecond accuracy with 0.15 ns A-type uncertainty.",
      theme: "metrology"
    },
    {
      key: "dengLNFMHighPrecisionFrequency2025",
      title: "LNFM: High-Precision Frequency Stability Measurement System of Atomic Oscillators With Built-In Reference Source",
      authors: ["Liangcheng Deng", "Fu Zheng", "Dong Zhang", "Yu Xue", "Beiyou Fu", "Chuang Shi"],
      venue: "IEEE Transactions on Instrumentation and Measurement",
      volume: "74:1–9",
      year: 2025,
      type: "journal",
      role: "coauthor",
      badges: ["JCR Q1", "IEEE"],
      doi: "10.1109/TIM.2025.3588945",
      url: "https://ieeexplore.ieee.org/document/11080490",
      abstract: "A compact cost-effective low-noise frequency stability measurement system (LNFM) using Precise Point Timing to compensate OCXO long-term drift. SDR-based DMTD achieves a noise floor of 5.3×10⁻¹⁴ τ⁻¹, with Allan deviation measurement precision comparable to commercial instruments using hydrogen masers as reference.",
      theme: "metrology"
    },
    {
      key: "xueNewQualityMonitoring2024",
      title: "A New Quality Monitoring Method for Real-Time Precise Orbit and Clock Products",
      authors: ["Yu Xue", "Fu Zheng", "Guangyu Zhou", "Wenyue Chao", "Dong Zhang", "Chuang Shi"],
      venue: "GPS Solutions",
      volume: "28(3):125",
      year: 2024,
      type: "journal",
      role: "first",
      badges: ["JCR Q1", "Springer"],
      doi: "10.1007/s10291-024-01673-z",
      url: "https://doi.org/10.1007/s10291-024-01673-z",
      abstract: "A quality monitoring method for real-time precise satellite orbit and clock products using a global station network. We compute pseudorange and carrier-phase Quality Indicators (QIs) and apply iForest outlier detection to mitigate network failures. The carrier-phase QI bounds 99.93% of product errors within 15 cm and reduces false alerts by 68.9%.",
      theme: "integrity"
    },
    {
      key: "shiAdaptiveQualityMonitoring2022",
      title: "An Adaptive Quality Monitoring Method for Real-Time Ionospheric Corrections",
      authors: ["Chuang Shi", "Yu Xue", "Fu Zheng", "Jiale Wang"],
      venue: "GPS Solutions",
      volume: "27(1):5",
      year: 2023,
      type: "journal",
      role: "student-first",
      badges: ["JCR Q1", "Springer", "Student 1st"],
      doi: "10.1007/s10291-022-01344-x",
      url: "https://doi.org/10.1007/s10291-022-01344-x",
      abstract: "An adaptive GIVE algorithm for real-time ionospheric correction quality monitoring. By introducing three adjustment coefficients optimized via PSO, the method achieves ≥46.7% improvement in ionospheric error bounding compared to traditional SBAS algorithms, with coefficients extrapolatable across low-activity periods.",
      theme: "integrity"
    }
  ],

  /* ----------  Patents (editable — fill in details as needed)  ---------- */
  /*  注：谷歌/中国知识产权局公开检索未返回可直接确认的条目。              */
  /*  请在下方按需更新专利号、授权日期等（从国家知识产权局检索获取）。        */
  patents: [
    {
      title: "一种GNSS实时精密轨道与钟差产品质量监测方法",
      titleEn: "A Quality Monitoring Method for Real-Time Precise GNSS Orbit and Clock Products",
      number: "CN—待填写",
      date: "2024",
      inventors: ["薛宇", "郑福", "施闯", "等"],
      status: "granted",
      theme: "integrity"
    },
    {
      title: "基于BDSBAS增强的高精度授时完好性监测方法",
      titleEn: "High-Precision Timing Integrity Monitoring Method Augmented by BDSBAS",
      number: "CN—待填写",
      date: "2025",
      inventors: ["薛宇", "郑福", "施闯", "等"],
      status: "granted",
      theme: "integrity"
    },
    {
      title: "低轨星座天基自主时间基准建立与维持方法",
      titleEn: "Space-based Autonomous Timescale Realization Method for LEO Constellations",
      number: "CN—待填写",
      date: "2025",
      inventors: ["薛宇", "郑福", "施闯", "等"],
      status: "granted",
      theme: "leo"
    },
    {
      title: "基于傅里叶神经网络的低轨卫星钟差建模与预报方法",
      titleEn: "Fourier Neural Network-based LEO Satellite Clock Offset Modeling and Prediction",
      number: "CN—待填写",
      date: "2025",
      inventors: ["薛宇", "郑福", "施闯", "等"],
      status: "granted",
      theme: "leo"
    },
    {
      title: "基于GNSS的远程在线时间计量方法",
      titleEn: "GNSS-based Remote Online Time Metrology Method",
      number: "CN—待填写",
      date: "2025",
      inventors: ["薛宇", "张东", "郑福", "施闯", "等"],
      status: "granted",
      theme: "metrology"
    }
  ],

  /* ----------  Software Copyrights (editable)  ---------- */
  software: [
    {
      title: "GNSS实时精密产品质量监测软件",
      titleEn: "GNSS Real-Time Precise Products Quality Monitoring Software",
      number: "软著登字第—待填写",
      year: "2023",
      theme: "integrity"
    },
    {
      title: "授时完好性监测与在线时间计量平台",
      titleEn: "Timing Integrity Monitoring & Online Metrology Platform",
      number: "软著登字第—待填写",
      year: "2024",
      theme: "metrology"
    }
  ],

  /* ----------  Education  ---------- */
  education: [
    {
      school: "Beihang University",
      schoolCn: "北京航空航天大学",
      degree: "Ph.D.",
      field: "Communication &amp; Information Systems",
      period: "Sep 2023 – Present",
      note: "Advisor: Academician Chuang Shi"
    },
    {
      school: "Beihang University",
      schoolCn: "北京航空航天大学",
      degree: "M.Eng.",
      field: "Electronic Information (ICE)",
      period: "Sep 2020 – Jun 2023",
      note: "GPA 91.82 · Rank 5/183"
    },
    {
      school: "Beijing Jiaotong University",
      schoolCn: "北京交通大学",
      degree: "B.Eng.",
      field: "Communication Engineering",
      period: "Sep 2016 – Jun 2020",
      note: "GPA 3.47 / 4.0"
    }
  ],

  /* ----------  Honors & Awards  ---------- */
  honors: [
    { year: "2025", title: "CAST Young Talent Cultivation Program (PhD Special Track)", cn: "中国科协青年人才培育工程博士生专项计划" },
    { year: "2025", title: "Outstanding Graduate Student, Beihang University", cn: "北航优秀研究生" },
    { year: "2024", title: "National 2nd Place — 13th China Innovation &amp; Entrepreneurship Competition (Beidou Track)", cn: "中国创新创业大赛北斗应用赛全国第二名" },
    { year: "2023", title: "Outstanding Graduate, Beihang University", cn: "北航优秀毕业生" },
    { year: "2022", title: "National 2nd Prize — 3rd Central Enterprise Innovation Competition", cn: "第三届央企熠星创新创意大赛全国二等奖" },
    { year: "2022", title: "Three-Good Student, Beihang University", cn: "北航三好学生" },
    { year: "2022", title: "National Excellence Award — 4th \"Beidou+\" Innovation Competition", cn: "第四届北斗+创新创业大赛全国优秀奖" }
  ]

};
