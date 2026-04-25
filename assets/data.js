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
      patents:     { en: "Patents",      cn: "专利"       },
      honors:      { en: "Honors",       cn: "荣誉"       }
    },
    section: {
      news:      { en: "News & Updates",      cn: "最新动态"        },
      education: { en: "Education",           cn: "教育经历"        },
      research:  { en: "Research Interests",  cn: "研究方向"        },
      pubs:      { en: "Publications",        cn: "学术论文"        },
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
    news: {
      showAll:   { en: "Show all {n} updates ↓", cn: "展开全部 {n} 条 ↓" },
      showFewer: { en: "Show fewer ↑",            cn: "收起 ↑"            }
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
    lab:         { en: "Key Lab of Satellite Navigation &amp; Mobile Communication Integration, MII",
                   cn: "卫星导航与移动通信融合技术工信部重点实验室" },
    advisor:     { en: "Prof. Chuang Shi (Academician of CAE)",
                   cn: "施闯 院士" },
    email: "xueyu@buaa.edu.cn",
    github: "https://github.com/Xsleet",
    bio: {
      en: "I am a Ph.D. candidate working on making satellite-based time and position services more <em>trustworthy</em> and <em>autonomous</em>. My research lies at the intersection of GNSS integrity monitoring, LEO timescale, and precise time metrology.",
      cn: "本人致力于让卫星时空服务更<em>可信</em>、更<em>自主</em>。研究方向聚焦于 GNSS 完好性监测、低轨星座时间基准与高精度时间计量三个交叉领域。"
    }
  },

  /* ----------  Research themes (vertical cards with linked work)  ---------- */
  research: [
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
      keywords: ["T-ARAIM", "BDSBAS", "Quality Indicator", "Fault Detection", "Protection Level"]
    },
    {
      id: "leo",
      icon: "satellite",
      title:    { en: "LEO Autonomous Timescale",
                  cn: "低轨星座天基时间基准" },
      tagline:  { en: "GNSS-denied space synchronization",
                  cn: "脱离 GNSS 的星座同步" },
      summary: {
        en: "I architect space-based timescales that leverage low-SWaP-C heterogeneous clock ensembles and inter-satellite links — enabling LEO mega-constellations to maintain stable timing without depending on GNSS or ground infrastructure.",
        cn: "基于低 SWaP-C 异构钟组与星间链路，构建天基自主时间基准架构，使低轨巨型星座能够在不依赖 GNSS 与地面基础设施的条件下维持稳定的时间同步。"
      },
      keywords: ["Heterogeneous Clocks", "Inter-Satellite Links", "Ensemble Filter", "Fourier Neural Net"]
    },
    {
      id: "metrology",
      icon: "clock",
      title:    { en: "Precise Time Metrology",
                  cn: "高精度时间计量" },
      tagline:  { en: "Sub-nanosecond traceability",
                  cn: "亚纳秒级时间溯源" },
      summary: {
        en: "I trace timing terminals to UTC(k) over GNSS with sub-nanosecond uncertainty, and develop low-cost frequency stability measurement systems — making continuous remote metrology practical for distributed time-frequency systems.",
        cn: "基于 GNSS 实现授时终端至 UTC(k) 的亚纳秒级溯源，并研制低成本频率稳定度测量系统，使分布式时频系统的远程在线计量成为可能。"
      },
      keywords: ["UTC(k)", "PPP Timing", "Online Metrology", "DMTD"]
    }
  ],

  /* ----------  News Timeline (newest first)  ---------- */
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

  /* ----------  Publications (English-only, theme-tagged)  ---------- */
  publications: [
    {
      key: "xueSpacebasedAutonomousTimescale2026",
      shortTitle: "Space-based Autonomous Timescale for LEO Constellations",
      title: "Space-based Autonomous Timescale Realization for LEO Constellations Enabled by Low SWaP-C Heterogeneous Clock Ensembles and Inter-Satellite Links",
      authors: ["Yu Xue", "Fu Zheng", "Dong Zhang", "Xiyuan Chen", "Chuang Shi"],
      venue: "IEEE Internet of Things Journal",
      year: 2026,
      type: "journal",
      role: "first",
      theme: "leo",
      badges: ["JCR Q1", "IEEE"],
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
      type: "journal",
      role: "first",
      theme: "leo",
      badges: ["JCR Q1", "IOP"],
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
      type: "journal",
      role: "first",
      theme: "integrity",
      badges: ["JCR Q1", "IOP"],
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
      type: "journal",
      role: "corresponding",
      theme: "integrity",
      badges: ["JCR Q1", "IEEE", "Corresponding"],
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
      type: "conference",
      role: "first",
      theme: "metrology",
      badges: ["EI", "IEEE"],
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
      type: "journal",
      role: "coauthor",
      theme: "metrology",
      badges: ["JCR Q1", "IEEE"],
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
      type: "journal",
      role: "first",
      theme: "integrity",
      badges: ["JCR Q1", "Springer"],
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
      type: "journal",
      role: "student-first",
      theme: "integrity",
      badges: ["JCR Q1", "Springer", "Student 1st"],
      doi: "10.1007/s10291-022-01344-x",
      url: "https://doi.org/10.1007/s10291-022-01344-x",
      abstract: "An adaptive GIVE algorithm for real-time ionospheric correction quality monitoring. By introducing three adjustment coefficients optimized via PSO, the method achieves ≥46.7% improvement in ionospheric error bounding compared to traditional SBAS algorithms, with coefficients extrapolatable across low-activity periods."
    }
  ],

  /* ----------  Patents (theme-tagged with abstracts)  ---------- */
  patents: [
    {
      key: "patent-quality-monitoring",
      title: { en: "Quality Monitoring Method for Real-Time Precise GNSS Orbit and Clock Products",
               cn: "GNSS 实时精密轨道与钟差产品质量监测方法" },
      number: "CN—待填写", date: "2024",
      inventors: ["Yu Xue", "Fu Zheng", "Chuang Shi", "et al."],
      theme: "integrity",
      abstract: {
        en: "The invention provides a quality monitoring method for real-time precise GNSS orbit and clock products. A globally-distributed monitoring station network computes pseudorange and carrier-phase Quality Indicators (QIs) for each satellite, supplemented by iForest-based outlier detection to mitigate communication or station failures. QIs are broadcast to users to support fault-tolerant positioning solutions.",
        cn: "本发明提供一种 GNSS 实时精密轨道与钟差产品质量监测方法。基于全球分布的监测站网络计算每颗卫星的伪距与载波相位质量指标（QI），并结合 iForest 离群点检测算法消除通信链路或监测站故障的影响。QI 被广播给用户，以支持容错定位解算。"
      }
    },
    {
      key: "patent-bdsbas-timing",
      title: { en: "High-Precision Timing Integrity Monitoring Method Augmented by BDSBAS",
               cn: "基于 BDSBAS 增强的高精度授时完好性监测方法" },
      number: "CN—待填写", date: "2025",
      inventors: ["Yu Xue", "Fu Zheng", "Chuang Shi", "et al."],
      theme: "integrity",
      abstract: {
        en: "The invention discloses a timing integrity monitoring method that integrates Advanced RAIM with dual-frequency multi-constellation BDSBAS. By improving risk budget allocation, timing solution estimation, and Timing Protection Level computation, the proposed T-ARAIM algorithm enables real-time integrity monitoring of high-precision timing services with safety-of-life guarantees.",
        cn: "本发明公开一种将先进 RAIM 算法与双频多星座 BDSBAS 系统融合的授时完好性监测方法。通过改进风险预算分配、授时解算与授时保护水平计算，所提出的 T-ARAIM 算法可对高精度授时服务进行实时完好性监测，提供生命安全级保障。"
      }
    },
    {
      key: "patent-leo-timescale",
      title: { en: "Space-based Autonomous Timescale Realization Method for LEO Constellations",
               cn: "低轨星座天基自主时间基准建立与维持方法" },
      number: "CN—待填写", date: "2025",
      inventors: ["Yu Xue", "Fu Zheng", "Chuang Shi", "et al."],
      theme: "leo",
      abstract: {
        en: "The invention provides a space-based autonomous timescale realization method for LEO mega-constellations using heterogeneous low-SWaP-C clock ensembles (CSACs + mROs) and inter-satellite links. A hierarchical framework combines onboard Harmonic ETF for periodic disturbance suppression with constellation-level ETF for stability enhancement, achieving GNSS-denied autonomous timescale.",
        cn: "本发明提供一种基于低 SWaP-C 异构钟组（CSAC + mRO）与星间链路的低轨巨型星座天基自主时间基准建立与维持方法。分级框架由星上谐波集合时间尺度滤波器抑制周期性扰动、星座级 ETF 提升稳定性，实现脱离 GNSS 的自主时间基准。"
      }
    },
    {
      key: "patent-fan-leo-clock",
      title: { en: "Fourier Neural Network-based LEO Satellite Clock Modeling and Prediction Method",
               cn: "基于傅里叶神经网络的低轨卫星钟差建模与预报方法" },
      number: "CN—待填写", date: "2025",
      inventors: ["Yu Xue", "Fu Zheng", "Chuang Shi", "et al."],
      theme: "leo",
      abstract: {
        en: "The invention discloses a LEO satellite clock prediction method based on a Fourier Analysis Network (FAN). By embedding Fourier series structures directly into the neural network, FAN efficiently captures periodic patterns from the South Atlantic Anomaly and orbital relativistic effects, outperforming LSTM by up to 34% in long-term clock prediction.",
        cn: "本发明公开一种基于傅里叶分析网络（FAN）的低轨卫星钟差预报方法。通过将傅里叶级数结构直接嵌入神经网络，FAN 可高效捕捉源自南大西洋异常区与轨道相对论效应的周期分量，长期预报精度较 LSTM 提升达 34%。"
      }
    },
    {
      key: "patent-online-metrology",
      title: { en: "GNSS-based Remote Online Time Metrology Method",
               cn: "基于 GNSS 的远程在线时间计量方法" },
      number: "CN—待填写", date: "2025",
      inventors: ["Yu Xue", "Dong Zhang", "Fu Zheng", "Chuang Shi", "et al."],
      theme: "metrology",
      abstract: {
        en: "The invention provides a remote online time metrology method based on GNSS. By exploiting the coupling relationship between receiver and satellite clock offset parameters, real-time precise products are traced to UTC(k). The method enables sub-nanosecond accuracy in remote timing terminal metrology without physical transport, with A-type uncertainty of 0.15 ns.",
        cn: "本发明提供一种基于 GNSS 的远程在线时间计量方法。通过利用接收机与卫星钟差参数的耦合关系，将实时精密产品溯源至 UTC(k)，可在无需设备物理转移的条件下实现授时终端的亚纳秒级远程计量，A 类不确定度 0.15 ns。"
      }
    }
  ],

  /* ----------  Education  ---------- */
  education: [
    {
      school: { en: "Beihang University",       cn: "北京航空航天大学" },
      degree: { en: "Ph.D. · Communication & Information Systems",
                cn: "博士 · 通信与信息系统" },
      period: "Sep 2023 – Present",
      note:   { en: "Advisor: Academician Chuang Shi",
                cn: "导师：施闯 院士" }
    },
    {
      school: { en: "Beihang University",       cn: "北京航空航天大学" },
      degree: { en: "M.Eng. · Electronic Information (ICE)",
                cn: "硕士 · 电子信息（信息与通信工程）" },
      period: "Sep 2020 – Jun 2023",
      note:   { en: "GPA 91.82 · Rank 5/183",
                cn: "GPA 91.82 · 专业排名 5/183" }
    },
    {
      school: { en: "Beijing Jiaotong University", cn: "北京交通大学" },
      degree: { en: "B.Eng. · Communication Engineering",
                cn: "学士 · 通信工程" },
      period: "Sep 2016 – Jun 2020",
      note:   { en: "GPA 3.47 / 4.0", cn: "GPA 3.47 / 4.0" }
    }
  ],

  /* ----------  Honors & Awards  ---------- */
  honors: [
    { year: "2025",
      en: "CAST Young Talent Cultivation Program (PhD Special Track)",
      cn: "中国科协青年人才培育工程博士生专项计划" },
    { year: "2025",
      en: "Outstanding Graduate Student, Beihang University",
      cn: "北京航空航天大学优秀研究生" },
    { year: "2024",
      en: "National 2nd Place — 13th China Innovation &amp; Entrepreneurship Competition (Beidou Track)",
      cn: "第十三届中国创新创业大赛北斗应用赛全国第二名" },
    { year: "2023",
      en: "Outstanding Graduate, Beihang University",
      cn: "北京航空航天大学优秀毕业生" },
    { year: "2022",
      en: "National 2nd Prize — 3rd Central Enterprise Innovation Competition",
      cn: "第三届央企熠星创新创意大赛全国二等奖" },
    { year: "2022",
      en: "Three-Good Student, Beihang University",
      cn: "北京航空航天大学三好学生" },
    { year: "2022",
      en: "National Excellence Award — 4th \"Beidou+\" Innovation Competition",
      cn: "第四届北斗+创新创业大赛全国优秀奖" }
  ]

};
