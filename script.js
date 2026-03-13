const translations = {
  en: {
    common: {
      brand: "OpenClaw Finder",
      navStart: "Start here",
      navAbout: "About",
      navSubmit: "Submit",
      navContact: "Contact",
      navPrivacy: "Privacy",
    },
    project: {
      common: {
        quickFacts: "Quick facts",
        reviewed: "Last reviewed",
        stack: "Primary stack",
        license: "License",
        official: "Official status",
        status: "Positioning",
        type: "Different from OpenClaw",
        bestFor: "Good fit for",
        ease: "Getting started",
        ecosystem: "User ecosystem",
        extensibility: "Extension room",
        whatItIs: "What it is",
        whyItMatters: "Why it matters",
        notablePoints: "Notable points",
        sources: "Sources",
      },
      openclaw: {
        title: "OpenClaw | OpenClaw Finder",
        description: "Profile for OpenClaw, the main personal AI assistant runtime and official ecosystem entry point.",
        kicker: "Official runtime",
        name: "OpenClaw",
        summary: "The core OpenClaw project and personal AI assistant runtime, backed by an official site, public docs, and an open GitHub repository.",
        statusValue: "The baseline project in this ecosystem",
        typeValue: "Keeps the widest channel, tool, and workflow surface instead of optimizing for one narrow angle",
        bestForValue: "Anyone who wants the official entry point before comparing branches",
        easeValue: "🌟🌟🌟🌟🌟",
        ecosystemValue: "🌟🌟🌟🌟🌟",
        extensibilityValue: "🌟🌟🌟🌟🌟",
        body1: "OpenClaw is the reference build most other projects are reacting to. Public materials describe a self-hosted assistant gateway that connects many messaging channels, multiple agents, skills, browser-style tools, and a text-based workspace.",
        body2: "What makes it different from the lighter or more specialized variants is not one flashy feature. It is the most complete picture of the ecosystem: broad docs, broad integrations, and the clearest path for understanding how the official stack is meant to work.",
        point1: "Official docs, site, and repository are all public and active.",
        point2: "Broad messaging integrations and workspace-based customization are core to its public positioning.",
        point3: "It is also the heaviest option in the group, which is why so many variants try to slim it down or simplify deployment.",
        source1: "Official site",
        source2: "Official docs",
        source3: "GitHub repository",
      },
      picoclaw: {
        title: "PicoClaw | OpenClaw Finder",
        description: "Profile for PicoClaw, a lightweight Go-based OpenClaw-style assistant for low-resource environments.",
        kicker: "Low-resource runtime",
        name: "PicoClaw",
        summary: "A Go-based OpenClaw-style assistant built for extremely small hardware and low memory footprints.",
        statusValue: "The lightweight branch",
        typeValue: "Cuts the heavier app-like layer and keeps the core assistant loop for tiny hardware",
        bestForValue: "People targeting SBCs, old devices, or always-on low-cost setups",
        easeValue: "🌟🌟🌟🌟",
        ecosystemValue: "🌟🌟🌟🌟",
        extensibilityValue: "🌟🌟🌟",
        body1: "PicoClaw is the sharpest contrast to the official project if your first question is, can this run on much smaller hardware? Its public pitch centers on a Go static binary, very low RAM use, and deployment on cheap boards or older devices.",
        body2: "Compared with OpenClaw, it gives up some of the fuller product surface so the core assistant experience can fit into far leaner environments. It feels more like a compact engine than a full platform layer.",
        point1: "Public materials emphasize sub-10MB memory class targets and low-cost hardware.",
        point2: "It keeps the core assistant idea but trims away heavier surfaces.",
        point3: "Go and single-binary deployment make it notably simpler to drop onto constrained machines.",
        source1: "GitHub repository",
      },
      nanoclaw: {
        title: "NanoClaw | OpenClaw Finder",
        description: "Profile for NanoClaw, a container-focused lightweight alternative in the OpenClaw ecosystem.",
        kicker: "Container-first runtime",
        name: "NanoClaw",
        summary: "A lightweight alternative that emphasizes containerized execution and safer isolation boundaries.",
        statusValue: "The security-first branch",
        typeValue: "Pushes container isolation to the center instead of treating sandboxing as an add-on",
        bestForValue: "Self-hosters who care about safer boundaries and cleaner ops control",
        easeValue: "🌟🌟🌟",
        ecosystemValue: "🌟🌟🌟",
        extensibilityValue: "🌟🌟🌟🌟",
        body1: "NanoClaw is not only trying to be lighter than OpenClaw. Its bigger idea is that execution should live inside stricter containers, with clearer isolation around groups, channels, and mounted files.",
        body2: "That changes the personality of the project. OpenClaw feels like the fuller official platform, while NanoClaw feels like the branch for people who want a more auditable, deployment-minded, security-conscious setup.",
        point1: "Public positioning focuses on containerization and safer isolation.",
        point2: "It removes some of the broader product surface in exchange for cleaner operational boundaries.",
        point3: "Best read as a security-and-deployment answer to the official stack.",
        source1: "Official site",
        source2: "GitHub repository",
      },
      zeroclaw: {
        title: "ZeroClaw | OpenClaw Finder",
        description: "Profile for ZeroClaw, a Rust-based runtime and infrastructure path in the OpenClaw ecosystem.",
        kicker: "Rust runtime",
        name: "ZeroClaw",
        summary: "A Rust-based runtime and infrastructure path with migration tooling for existing OpenClaw users.",
        statusValue: "The infra-heavy Rust branch",
        typeValue: "Rebuilds the runtime around Rust, plugins, and deeper systems control instead of broader product polish",
        bestForValue: "Infra teams, performance-minded builders, and people migrating into a more modular stack",
        easeValue: "🌟🌟",
        ecosystemValue: "🌟🌟🌟",
        extensibilityValue: "🌟🌟🌟🌟🌟",
        body1: "ZeroClaw takes OpenClaw ideas into a much more systems-oriented direction. Public materials center on Rust, trait-based modularity, tiny runtime footprint, and the idea of an assistant runtime you can shape at a lower level.",
        body2: "That makes it appealing for people who care more about architecture, performance, and infrastructure control than about the easiest first-time setup. It is the most engineering-first branch in the current lineup.",
        point1: "Public materials mention migration tooling from OpenClaw.",
        point2: "Rust and plugin-style architecture are core to its identity.",
        point3: "The tradeoff is obvious: more room to shape the stack, but a steeper path in.",
        source1: "GitHub repository",
      },
      nanobot: {
        title: "Nanobot | OpenClaw Finder",
        description: "Profile for Nanobot, a compact Python-first OpenClaw variant built for learning and fast modification.",
        kicker: "Python minimal branch",
        name: "Nanobot",
        summary: "A compact Python-first OpenClaw variant that keeps the core agent loop small, readable, and easy to modify.",
        statusValue: "The most study-friendly branch",
        typeValue: "Shrinks the codebase dramatically so the runtime is easier to read, understand, and reshape than the full stack",
        bestForValue: "Developers who want to learn the architecture fast or fork it for experiments",
        easeValue: "🌟🌟🌟🌟",
        ecosystemValue: "🌟🌟🌟🌟",
        extensibilityValue: "🌟🌟🌟🌟🌟",
        body1: "Nanobot is the branch for people who look at OpenClaw and think, this is powerful, but I want something I can actually hold in my head. Public materials position it as a much smaller Python implementation that preserves the core agent loop while dropping the weight of the full stack.",
        body2: "That makes it especially valuable for learners and tinkerers. Compared with the official project, the point is not feature parity. The point is readability, faster modification, and a much cleaner path into the architecture.",
        point1: "Public positioning emphasizes a dramatically smaller codebase than the full OpenClaw stack.",
        point2: "Python makes it more approachable for people who want to read and change the runtime directly.",
        point3: "It is best understood as a learning and experimentation branch, not a full consumer-facing replacement.",
        source1: "Official site",
        source2: "GitHub repository",
      },
      copaw: {
        title: "CoPaw | OpenClaw Finder",
        description: "Profile for CoPaw, a local-model-friendly personal agent workstation with easier setup and multi-channel integrations.",
        kicker: "Local-model-friendly branch",
        name: "CoPaw",
        summary: "A more approachable personal agent workstation with strong local-model support, easier setup paths, and broad chat integrations.",
        statusValue: "The easier-install branch",
        typeValue: "Pushes installation simplicity, local-model support, and multi-provider flexibility harder than the original stack",
        bestForValue: "People who want a practical personal agent without building every moving part by hand",
        easeValue: "🌟🌟🌟🌟",
        ecosystemValue: "🌟🌟🌟🌟",
        extensibilityValue: "🌟🌟🌟🌟",
        body1: "CoPaw takes aim at a very practical pain point: OpenClaw can feel like a lot of moving pieces if you just want a capable personal agent running across common chat surfaces. Public materials lean hard into easier installation, local-model support, and multiple deployment paths.",
        body2: "Compared with the original project, CoPaw feels more like a user-ready workstation than a pure runtime playground. It is especially relevant for people who want something flexible, but do not want every setup step to feel like infrastructure work.",
        point1: "Official materials emphasize local models, one-command setup paths, and desktop-style usability.",
        point2: "It supports multiple chat channels and providers without pushing users straight into a heavy self-hosted stack.",
        point3: "It sits between pure runtime experimentation and polished end-user usability.",
        source1: "Official site",
        source2: "GitHub repository",
      },
      ironclaw: {
        title: "IronClaw | OpenClaw Finder",
        description: "Profile for IronClaw, a Rust-based OpenClaw branch focused on security, privacy, and safer execution.",
        kicker: "Security-first Rust branch",
        name: "IronClaw",
        summary: "A Rust-based OpenClaw branch that leans into privacy, secret handling, and safer execution instead of consumer polish.",
        statusValue: "The security-hardened branch",
        typeValue: "Builds around Rust safety, stricter validation, and privacy-oriented execution rather than broader ecosystem polish",
        bestForValue: "Teams that care more about safety and auditability than the smoothest onboarding",
        easeValue: "🌟🌟",
        ecosystemValue: "🌟🌟🌟",
        extensibilityValue: "🌟🌟🌟🌟",
        body1: "IronClaw is the branch to watch if your first concern is not convenience but trust boundaries. Public materials frame it as a Rust implementation with dedicated safety layers, validation, and stronger handling around secrets and execution risk.",
        body2: "Compared with the original project, it is less about giving you the broadest ecosystem entry and more about making the runtime feel safer, more auditable, and easier to reason about in sensitive environments.",
        point1: "Rust and safety-focused architecture are central to its public positioning.",
        point2: "It is a better fit for security-minded teams than for first-time casual users.",
        point3: "Think of it as a hardened branch, not as the easiest front door into the ecosystem.",
        source1: "Official site",
        source2: "GitHub repository",
      },
      clawhub: {
        title: "ClawHub | OpenClaw Finder",
        description: "Profile for ClawHub, the official skill marketplace and registry around OpenClaw.",
        kicker: "Official ecosystem tool",
        name: "ClawHub",
        summary: "The official marketplace and registry for discovering, installing, and publishing OpenClaw skills.",
        statusValue: "The official skill layer",
        typeValue: "Adds a marketplace and distribution layer instead of replacing the runtime itself",
        bestForValue: "People who want to browse, install, or publish extensions around OpenClaw",
        easeValue: "🌟🌟🌟🌟",
        ecosystemValue: "🌟🌟🌟🌟",
        extensibilityValue: "🌟🌟🌟🌟",
        body1: "ClawHub is not another runtime branch. It is the official place where the ecosystem starts to feel bigger than one app, because skills can be discovered, installed, and shared in one layer.",
        body2: "That matters because extension ecosystems are what make platforms sticky. Compared with plain documentation pages, ClawHub points to a more practical and reusable way of growing the OpenClaw tool surface.",
        point1: "Official docs position it as the skill marketplace and registry.",
        point2: "It is backed by a public GitHub repository, which makes it easier to watch adoption and activity.",
        point3: "It belongs in the tools section because it amplifies the ecosystem rather than replacing the core runtime.",
        source1: "Official docs",
        source2: "GitHub repository",
      },
      openprose: {
        title: "OpenProse | OpenClaw Finder",
        description: "Profile for OpenProse, the official workflow and orchestration format around OpenClaw.",
        kicker: "Official workflow format",
        name: "OpenProse",
        summary: "The official workflow and orchestration format for structured multi-agent OpenClaw setups.",
        statusValue: "The official workflow layer",
        typeValue: "Adds structure across agents and steps instead of acting as a standalone runtime",
        bestForValue: "People who want more deliberate multi-agent flows than a single flat assistant loop",
        easeValue: "🌟🌟",
        ecosystemValue: "🌟🌟🌟🌟",
        extensibilityValue: "🌟🌟🌟🌟🌟",
        body1: "OpenProse is the official answer to a different problem: not how to run one assistant, but how to describe more structured chains of agents, tools, and steps around OpenClaw.",
        body2: "That makes it useful for users who have already outgrown a simple one-agent setup. It is less about getting started quickly and more about giving the ecosystem a real workflow language.",
        point1: "It is documented under the official docs rather than positioned as a separate runtime.",
        point2: "Its value shows up when you want repeatable flows, not just one-off conversations.",
        point3: "It is best understood as orchestration infrastructure for the broader ecosystem.",
        source1: "Official docs",
      },
      qclaw: {
        title: "QClaw | OpenClaw Finder",
        description: "Profile for QClaw, a Tencent-oriented OpenClaw packaging route focused on WeChat and QQ scenarios.",
        kicker: "Tencent-oriented",
        name: "QClaw",
        summary: "A more localized, one-click OpenClaw route built around WeChat and QQ usage, currently gated behind a beta activation code.",
        statusValue: "A localized distribution layer around the OpenClaw idea",
        typeValue: "Wraps setup, cloud integration, and WeChat or QQ access into a friendlier package than self-building the full stack",
        bestForValue: "Teams and creators who want OpenClaw-style abilities without running every deployment step themselves",
        easeValue: "🌟🌟🌟🌟🌟",
        ecosystemValue: "🌟🌟🌟🌟",
        extensibilityValue: "🌟🌟🌟",
        body1: "QClaw matters because it changes the entry experience more than the underlying idea. Tencent-oriented packaging around WeChat and QQ turns OpenClaw from a self-built stack into something closer to a localized, one-click service path.",
        body2: "Compared with the original project, the value here is less about maximum openness and more about convenience: faster setup, tighter platform integration, and a route that makes more sense for Chinese teams already living inside those messaging products. At the moment, access still appears to depend on a beta activation code.",
        point1: "Its main difference is packaging and local integration, not a brand-new runtime philosophy.",
        point2: "It is especially relevant if your user journey starts in WeChat or QQ rather than in a terminal.",
        point3: "The public website exists, but current access is still gated for beta users.",
        source1: "Official site",
        source2: "TechNode report",
        source3: "Economic Times report",
      },
    },
    home: {
      title: "OpenClaw Finder | Discover OpenClaw Projects",
      description:
        "OpenClaw Finder is a curated directory for discovering OpenClaw projects, tools, and experiments such as qclaw and picoclaw.",
      eyebrow: "Curated directory",
      heroTitle:
        "<span class=\"hero-title-accent\">OpenClaw</span><span class=\"hero-title-emoji\">🦞</span><span class=\"hero-title-accent\">Finder</span>",
      heroLead:
        "A live catch of Claw projects across the web, with new launches, updates, and forks synced here within 24 hours.",
      browse: "Browse directory",
      submit: "Submit a project",
      profileLink: "Profile",
      metricEase: "Getting started",
      metricEcosystem: "User ecosystem",
      metricExtensibility: "Extension room",
      signal1Value: "Primary sources",
      signal1Label: "Links point to repos, docs, and official launch pages first.",
      signal2Value: "Less noise",
      signal2Label: "Useful projects are separated from rumor, clones, and dead ends.",
      signal3Value: "Curated picks",
      signal3Label: "Everything here is chosen to be worth opening, not just worth mentioning.",
      feature1Title: "Discover",
      feature1Body: "Browse active OpenClaw projects without digging through scattered links.",
      feature2Title: "Quick judgment",
      feature2Body: "Short summaries help you decide in seconds what deserves a closer look.",
      feature3Title: "Stay current",
      feature3Body: "Keep up with new Claw projects, fresh updates, and useful ecosystem tools.",
      directoryEyebrow: "Featured projects",
      directoryTitle: "Start here",
      directoryLead:
        "A handpicked set of OpenClaw projects and tools worth knowing first, based on public official links and active pages.",
      startGuideButton: "Start guide",
      category1Title: "OpenClaw and variants",
      category1Lead: "The main OpenClaw project, notable variants, and different takes on the same idea.",
      category1Button: "Jump to variants",
      category2Title: "Tools and ecosystem utilities",
      category2Lead: "Skills, workflows, and practical tools that make the OpenClaw ecosystem more useful.",
      category2Button: "Jump to tools",
      card1Tag: "Tencent",
      card1Body:
        "A more localized, one-click OpenClaw route for WeChat and QQ scenarios. Right now it still needs a beta activation code, so the appeal is convenience more than open self-hosting.",
      card1Meta1: "Positioning: Localized packaging layer",
      card1Meta2: "Different from OpenClaw: More WeChat and QQ oriented",
      card1RateEase: "🌟🌟🌟🌟🌟",
      card1RateEcosystem: "🌟🌟🌟🌟",
      card1RateExtensibility: "🌟🌟🌟",
      card2Tag: "Official",
      card2Body:
        "The full official version, with the broadest docs, clearest onboarding path, and richest ecosystem surface.",
      card2Meta1: "Status: Confirmed official project",
      card2Meta2: "Best for: Understanding the ecosystem from the source",
      card2RateEase: "🌟🌟🌟🌟🌟",
      card2RateEcosystem: "🌟🌟🌟🌟🌟",
      card2RateExtensibility: "🌟🌟🌟🌟🌟",
      card3Title: "PicoClaw",
      card3Tag: "Lightweight",
      card3Body:
        "A lighter, lower-resource take on OpenClaw that makes more sense on tiny hardware than the full official stack.",
      card3Meta1: "Status: Confirmed public repo",
      card3Meta2: "Best for: Edge devices and low-cost hardware",
      card3RateEase: "🌟🌟🌟🌟",
      card3RateEcosystem: "🌟🌟🌟🌟",
      card3RateExtensibility: "🌟🌟🌟",
      card4Tag: "Container-first",
      card4Body:
        "A more deployment-minded branch that leans into containers, isolation, and cleaner self-hosted boundaries.",
      card4Meta1: "Status: Confirmed public repo",
      card4Meta2: "Best for: Secure, containerized deployments",
      card4RateEase: "🌟🌟🌟",
      card4RateEcosystem: "🌟🌟🌟",
      card4RateExtensibility: "🌟🌟🌟🌟",
      card5Tag: "Rust",
      card5Body:
        "A more engineering-first OpenClaw path that trades easy onboarding for performance, control, and deeper shaping room.",
      card5Meta1: "Status: Confirmed public repo",
      card5Meta2: "Best for: Performance-minded users and migrations",
      card5RateEase: "🌟🌟",
      card5RateEcosystem: "🌟🌟🌟",
      card5RateExtensibility: "🌟🌟🌟🌟🌟",
      card6Tag: "Ecosystem",
      card6Body:
        "The official place to find, install, and publish skills around the OpenClaw ecosystem.",
      card6Meta1: "Status: Confirmed official project",
      card6Meta2: "Best for: Discovering and distributing skills",
      card6RateEase: "🌟🌟🌟🌟",
      card6RateEcosystem: "🌟🌟🌟🌟",
      card6RateExtensibility: "🌟🌟🌟🌟",
      card7Tag: "Workflow",
      card7Body:
        "The official workflow layer for people who want to chain agents, steps, and more structured OpenClaw flows.",
      card7Meta1: "Status: Confirmed official ecosystem",
      card7Meta2: "Best for: Structured multi-agent workflows",
      card7RateEase: "🌟🌟",
      card7RateEcosystem: "🌟🌟🌟🌟",
      card7RateExtensibility: "🌟🌟🌟🌟🌟",
      card8Tag: "Python",
      card8Body:
        "A tiny Python take on OpenClaw that keeps the core loop readable, hackable, and much easier to study than the full stack.",
      card8RateEase: "🌟🌟🌟🌟",
      card8RateEcosystem: "🌟🌟🌟🌟",
      card8RateExtensibility: "🌟🌟🌟🌟🌟",
      card9Tag: "Local-first",
      card9Body:
        "An easier, more modular personal agent workstation with strong local-model support and chat app integrations out of the box.",
      card9RateEase: "🌟🌟🌟🌟",
      card9RateEcosystem: "🌟🌟🌟🌟",
      card9RateExtensibility: "🌟🌟🌟🌟",
      card10Tag: "Secure",
      card10Body:
        "A Rust security-focused branch that leans into privacy, secret handling, and safer execution instead of consumer polish.",
      card10RateEase: "🌟🌟",
      card10RateEcosystem: "🌟🌟🌟",
      card10RateExtensibility: "🌟🌟🌟🌟",
      ctaEyebrow: "Grow the directory",
      ctaTitle: "Want your OpenClaw project listed?",
      ctaBody:
        "Use the submission page to send your project name, URL, short description, and launch notes.",
      ctaButton: "Submit now",
      footerText: "The public directory for discovering OpenClaw projects.",
    },
    about: {
      title: "About | OpenClaw Finder",
      description: "Learn what OpenClaw Finder is, who it is for, and how projects are selected.",
      eyebrow: "About",
      lead: "A calmer way to follow the Claw ecosystem: one place to scan what exists, what just launched, and what is actually worth opening.",
      bodyTitle: "Why this site exists",
      body1:
        "OpenClaw Finder is a curated navigation site for people trying to understand the growing OpenClaw ecosystem. The goal is simple: make it easier to discover projects, compare them quickly, and follow new launches without digging across scattered links.",
      railTitle: "How this stays useful",
      railBody: "The directory is intentionally opinionated: fewer links, more context, faster scanning.",
      railPoint1: "Projects are grouped so official entries, ecosystem tools, and watched variants do not blur together.",
      railPoint2: "Each profile tries to anchor itself in public primary sources instead of recycled summaries.",
      railPoint3: "New additions and notable shifts are meant to be reflected here quickly, not buried in old screenshots or threads.",
      section1Title: "What gets listed",
      section1Body:
        "Projects should be directly relevant to the OpenClaw ecosystem and should point to a working homepage, repository, or product page. Entries may be edited for clarity and consistency.",
      section1Lead: "The goal is not to list everything with a claw-shaped name. The goal is to surface the entries that help someone understand the real shape of the ecosystem.",
      section2Title: "How listings are reviewed",
      section2Body:
        "Submissions are reviewed manually before they appear on the site. That helps keep the directory useful and reduces low-quality entries.",
      section2Lead: "A smaller, cleaner directory is more valuable than a noisy one. Manual review is how the site keeps that bar.",
    },
    start: {
      title: "Which OpenClaw Project Should You Start With? | OpenClaw Finder",
      description:
        "Compare OpenClaw, PicoClaw, NanoClaw, Nanobot, CoPaw, and other projects to decide which OpenClaw path fits your needs.",
      eyebrow: "Start here",
      lead:
        "If you are new to the ecosystem, the right answer depends less on hype and more on what you actually need: the official stack, smaller hardware, safer isolation, easier setup, or a better learning path.",
      bodyTitle: "Which OpenClaw project should you start with?",
      section1Title: "Fast picks",
      pick1Label: "Start with OpenClaw",
      pick1Body:
        "if you want the main project, the broadest docs, and the clearest official reference point.",
      pick2Label: "Start with PicoClaw",
      pick2Body:
        "if your first constraint is tiny hardware, low memory use, or lightweight deployment.",
      pick3Label: "Start with NanoClaw",
      pick3Body:
        "if container boundaries, isolation, and safer self-hosting matter more than raw simplicity.",
      pick4Label: "Start with Nanobot",
      pick4Body:
        "if you want the easiest codebase to read, learn from, and modify quickly.",
      pick5Label: "Start with CoPaw",
      pick5Body:
        "if you want a more practical personal-agent workstation with easier setup and local-model support.",
      pickLink: "View profile",
      section2Title: "Decision guide",
      section2Lead:
        "A useful way to choose is to start from your constraint, not from the loudest project name.",
      decision1: "Choose OpenClaw if you want the official baseline before comparing variants.",
      decision2:
        "Choose PicoClaw if you care most about small devices, static binaries, and low operating cost.",
      decision3:
        "Choose NanoClaw if you care most about container-first isolation and cleaner self-hosted boundaries.",
      decision4:
        "Choose ZeroClaw or IronClaw if your team is more infrastructure-minded, Rust-friendly, and less concerned with easiest onboarding.",
      decision5:
        "Choose Nanobot if your real goal is to understand the architecture fast and fork it for experiments.",
      decision6:
        "Choose ClawHub or OpenProse only if you already understand they are ecosystem layers, not direct runtime replacements.",
      section3Title: "Good first routes",
      routeLead:
        "If you are still unsure, these are the three safest starting routes for most people.",
      route1:
        "New to the ecosystem: start with OpenClaw, then compare PicoClaw and NanoClaw.",
      route2:
        "Developer learning path: start with Nanobot, then read OpenClaw for the broader surface area.",
      route3:
        "Practical self-hosting path: compare CoPaw, NanoClaw, and OpenClaw side by side.",
      section4Title: "Next steps",
      section4Body:
        "After you pick a direction, open two or three project pages and compare the quick facts, sources, and 'why it matters' sections. The best choice usually becomes obvious once you compare by constraints instead of by hype.",
    },
    submit: {
      title: "Submit a Project | OpenClaw Finder",
      description: "Submit an OpenClaw project for review and listing on OpenClaw Finder.",
      eyebrow: "Submit",
      lead: "Have a Claw project, tool, fork, or ecosystem page worth tracking? Send it in and it can be reviewed for the directory.",
      bodyTitle: "Submit your OpenClaw project",
      body1:
        "For now, submissions are handled manually. Send the following details by email and the project can be reviewed for inclusion.",
      card1Title: "What to send",
      emailLabel: "Email:",
      includeLabel: "Include:",
      includeBody: "project name, URL, one-line summary, and what makes it different.",
      card2Title: "What helps approval",
      card2Lead:
        "OpenClaw Finder is a curated directory, so the goal is not to list everything. The goal is to list projects that help people understand the real ecosystem.",
      card2Point1:
        "A working homepage, repository, docs page, launch note, or other primary source proving the project is public.",
      card2Point2:
        "A short explanation of what the project actually does and who it is for.",
      card2Point3:
        "A clear reason it belongs in the OpenClaw ecosystem rather than being a generic AI tool.",
      card2Point4:
        "Enough detail to compare it with other listed projects without guessing.",
      card3Title: "Suggested email template",
      templateLine1: "Project name:",
      templateLine2: "Primary URL:",
      templateLine3: "GitHub / docs / launch links:",
      templateLine4: "One-line summary:",
      templateLine5: "How it is different from other OpenClaw projects:",
      templateLine6: "Why it should be listed:",
      templateLine7: "Contact name:",
      card4Title: "What gets rejected",
      card4Point1:
        "Broken links, placeholder pages, or projects with no public proof of existence.",
      card4Point2:
        "Generic AI tools that do not clearly connect to the OpenClaw ecosystem.",
      card4Point3:
        "Thin submissions that force manual guessing about what the project is.",
      card4Point4:
        "Obvious clones, spam, or misleading branding.",
      card5Title: "What happens next",
      body2:
        "After you set up email forwarding or an inbox provider, replace this page with a form or link it to a form tool such as Tally, Typeform, or Formspree.",
      card5Point1:
        "Each submission is reviewed manually before it appears on the site.",
      card5Point2:
        "Entries may be edited for clarity, consistency, and category fit.",
      card5Point3:
        "If the submission is missing core evidence, it may be ignored until better sources are available.",
      railTitle: "Review checklist",
      railBody: "Submissions move faster when the essentials are obvious at a glance.",
      checklist1: "Clear project name and primary URL",
      checklist2: "One-line summary of what it does",
      checklist3: "Why it is different from other Claw projects",
      checklist4: "Any launch post, docs, or repo proving public availability",
    },
    contact: {
      title: "Contact | OpenClaw Finder",
      description: "Contact OpenClaw Finder for project submissions, feedback, and future sponsorships.",
      eyebrow: "Contact",
      lead: "Use this page for corrections, suggestions, partnerships, and anything that would make the directory sharper.",
      bodyTitle: "Get in touch",
      body1:
        "Reach out for directory feedback, corrections, partnerships, or future advertising and sponsorship enquiries.",
      card1Title: "Corrections and updates",
      card1Body: "If a project changed status, moved repos, launched publicly, or should no longer be listed the same way, send the source and it can be adjusted.",
      card2Title: "Partnerships",
      card2Body: "This is also the place to discuss collaborations, sponsorship ideas, or ways to surface high-signal ecosystem updates.",
      card3Title: "Direct contact",
      emailLabel: "Email:",
      responseLabel: "Response time:",
      responseBody: "usually within a few business days.",
      railTitle: "Best messages to send",
      railBody: "Short, source-backed notes are easiest to review and act on.",
      railPoint1: "A broken or outdated link",
      railPoint2: "A new project page that deserves inclusion",
      railPoint3: "A correction backed by a primary source",
    },
    privacy: {
      title: "Privacy Policy | OpenClaw Finder",
      description: "Privacy policy for OpenClaw Finder.",
      eyebrow: "Privacy",
      lead: "This site is simple by design. The privacy policy is meant to stay readable and proportional to what the site actually does.",
      bodyTitle: "Privacy policy",
      card1Title: "Basic analytics",
      body1:
        "OpenClaw Finder may collect basic analytics information such as page views, referring pages, and browser information to understand site usage.",
      card2Title: "Email and submissions",
      body2:
        "If you email a submission or contact request, your message and contact details are used only to review your project or reply to your enquiry.",
      card3Title: "Future services",
      body3:
        "This site may use third-party services such as analytics or advertising providers in the future. This page should be updated before those services are enabled.",
      railTitle: "In plain language",
      railBody: "The intent is straightforward: keep only what is needed to run the directory and respond to emails.",
      railPoint1: "No promise is made here about invasive tracking because that is not the intent of the site.",
      railPoint2: "If the tooling changes in a meaningful way, this page should change too.",
      railPoint3: "When in doubt, the simpler privacy posture is the better one.",
    },
  },
  zh: {
    common: {
      brand: "OpenClaw Finder",
      navStart: "从这里开始",
      navAbout: "关于",
      navSubmit: "提交项目",
      navContact: "联系",
      navPrivacy: "隐私",
    },
    project: {
      common: {
        quickFacts: "快速信息",
        reviewed: "最近审核",
        stack: "主要技术栈",
        license: "许可证",
        official: "官方属性",
        status: "定位",
        type: "和原版的区别",
        bestFor: "更适合谁",
        ease: "上手程度",
        ecosystem: "用户生态",
        extensibility: "扩展空间",
        whatItIs: "这是什么",
        whyItMatters: "为什么重要",
        notablePoints: "关键信息",
        sources: "来源",
      },
      openclaw: {
        title: "OpenClaw | OpenClaw Finder",
        description: "OpenClaw 项目详情页，主项目本体，也是官方生态入口。",
        kicker: "官方运行时",
        name: "OpenClaw",
        summary: "OpenClaw 生态的核心项目，也是个人 AI Assistant 运行时，拥有官网、公开文档和 GitHub 仓库。",
        statusValue: "这个生态里的基准项目",
        typeValue: "不是只优化某一个点，而是尽量把通道、工具和工作流能力都保留完整",
        bestForValue: "想先从官方入口看清整个生态的人",
        easeValue: "🌟🌟🌟🌟🌟",
        ecosystemValue: "🌟🌟🌟🌟🌟",
        extensibilityValue: "🌟🌟🌟🌟🌟",
        body1: "OpenClaw 仍然是理解这个生态最稳的基线。它是官方主项目，公开资料最完整，周边文档、skills 和 workflow 工具也都围绕它展开。",
        body2: "和那些更轻、更偏部署、或更偏工程取向的变种比起来，OpenClaw 最大的优势不是某一个单点能力，而是整体最完整、最容易看清全貌。",
        point1: "官网、文档和 GitHub 仓库均公开可访问。",
        point2: "文档里明确给出了基于命令的 onboarding 流程。",
        point3: "仓库公开资料描述了多种消息平台集成能力。",
        source1: "官网",
        source2: "官方文档",
        source3: "GitHub 仓库",
      },
      picoclaw: {
        title: "PicoClaw | OpenClaw Finder",
        description: "PicoClaw 项目详情页，一个面向低资源环境的 Go 实现。",
        kicker: "低资源运行时",
        name: "PicoClaw",
        summary: "一个基于 Go 的 OpenClaw 风格助手，面向极小硬件和低内存环境。",
        statusValue: "轻量路线代表",
        typeValue: "把更重的产品层裁掉，尽量保留核心助手能力，好跑在小设备上",
        bestForValue: "想跑在 SBC、旧设备或低成本常驻机器上的人",
        easeValue: "🌟🌟🌟🌟",
        ecosystemValue: "🌟🌟🌟🌟",
        extensibilityValue: "🌟🌟🌟",
        body1: "PicoClaw 最明显的不同，是它把“更轻、更省资源”放在了最前面。相比官方版，它更像是给小设备、低成本场景准备的 OpenClaw 路线。",
        body2: "这让它特别适合那些不追求一开始就拿到最完整生态，而是更在意硬件门槛、运行成本和轻量部署的人。",
        point1: "README 强调低 RAM 和低成本硬件运行。",
        point2: "官方 README 提醒很多相似域名是第三方注册。",
        point3: "采用 Go 实现，这一点和主项目栈不同。",
        source1: "GitHub 仓库",
      },
      nanoclaw: {
        title: "NanoClaw | OpenClaw Finder",
        description: "NanoClaw 项目详情页，一个容器优先的轻量替代方案。",
        kicker: "容器优先运行时",
        name: "NanoClaw",
        summary: "一个强调容器化执行和更安全隔离边界的轻量替代方案。",
        statusValue: "安全隔离路线代表",
        typeValue: "把容器隔离放到更核心的位置，而不是把沙箱当成附加选项",
        bestForValue: "在意部署边界、隔离感和自托管控制力的人",
        easeValue: "🌟🌟🌟",
        ecosystemValue: "🌟🌟🌟",
        extensibilityValue: "🌟🌟🌟🌟",
        body1: "NanoClaw 和官方版最大的区别，不只是轻量，而是把容器化执行和隔离边界放在了更核心的位置。它更像给部署和控制欲更强的人准备。",
        body2: "如果 OpenClaw 更像官方完整版入口，那 NanoClaw 就更像一条偏运维、偏自托管、偏安全边界的路线。",
        point1: "官网和仓库都公开可用。",
        point2: "仓库描述明确提到用容器提升安全性。",
        point3: "适合想要自托管但更强调控制边界的用户。",
        source1: "官网",
        source2: "GitHub 仓库",
      },
      zeroclaw: {
        title: "ZeroClaw | OpenClaw Finder",
        description: "ZeroClaw 项目详情页，一个基于 Rust 的运行时和基础设施路线。",
        kicker: "Rust 运行时",
        name: "ZeroClaw",
        summary: "一个基于 Rust 的运行时和基础设施路线，并提供面向 OpenClaw 用户的迁移能力。",
        statusValue: "偏基础设施的 Rust 路线",
        typeValue: "围绕 Rust、插件化和更深的底层控制重建运行时，而不是优先做产品化体验",
        bestForValue: "更看重性能、架构控制力和迁移能力的团队",
        easeValue: "🌟🌟",
        ecosystemValue: "🌟🌟🌟",
        extensibilityValue: "🌟🌟🌟🌟🌟",
        body1: "ZeroClaw 明显不是走“先让更多人轻松上手”这条路，它更偏向 Rust、基础设施和底层控制，是这个列表里工程气质最强的一支。",
        body2: "所以它吸引人的地方，不是更省事，而是更强的控制力、更明确的性能取向，以及对想深入改造栈的人更友好的空间。",
        point1: "仓库资料描述了从 OpenClaw 迁移的命令。",
        point2: "Rust 路线让它和 Go 轻量实现、以及主项目都形成差异。",
        point3: "如果你的受众更看重基础设施而不是消费级体验，这是值得关注的项目。",
        source1: "GitHub 仓库",
      },
      nanobot: {
        title: "Nanobot | OpenClaw Finder",
        description: "Nanobot 项目详情页，一个更小、更容易读懂和改造的 Python 路线。",
        kicker: "Python 极简路线",
        name: "Nanobot",
        summary: "一个更小、更容易读懂和改造的 Python 版 OpenClaw 路线，适合学习和快速魔改。",
        statusValue: "最适合研究和学习的一支",
        typeValue: "把代码体量大幅收小，让你更容易读懂核心 agent 循环，而不是背完整个大栈",
        bestForValue: "想快速理解架构、自己改 runtime、或者拿来做实验的人",
        easeValue: "🌟🌟🌟🌟",
        ecosystemValue: "🌟🌟🌟🌟",
        extensibilityValue: "🌟🌟🌟🌟🌟",
        body1: "Nanobot 适合那种看着 OpenClaw 会想“能力很强，但我想先搞懂它怎么运转”的人。公开资料把它定位成一个更小的 Python 实现，保留核心 agent 循环，同时砍掉完整大栈的重量。",
        body2: "所以它最吸引人的地方，不是功能最全，而是更容易读懂、更容易下手改，也更适合拿来学习架构。和原版相比，它更像一块实验台，而不是一个完整的大型入口。",
        point1: "公开定位强调代码体量远小于完整 OpenClaw 栈。",
        point2: "Python 路线让它对想直接读代码和改代码的人更友好。",
        point3: "更适合学习和实验，不是面向普通用户的完整替代品。",
        source1: "官网",
        source2: "GitHub 仓库",
      },
      copaw: {
        title: "CoPaw | OpenClaw Finder",
        description: "CoPaw 项目详情页，一条更易安装、支持本地模型、也更偏实用工作台的路线。",
        kicker: "本地模型友好路线",
        name: "CoPaw",
        summary: "一条更易安装、支持本地模型、也更偏实用工作台的个人 agent 路线。",
        statusValue: "更容易安装的一支",
        typeValue: "比原版更强调安装简单、本地模型支持和多 provider 灵活性",
        bestForValue: "想要一个实用个人 agent，但又不想自己把所有组件从头拼起来的人",
        easeValue: "🌟🌟🌟🌟",
        ecosystemValue: "🌟🌟🌟🌟",
        extensibilityValue: "🌟🌟🌟🌟",
        body1: "CoPaw 瞄准的是一个很现实的问题：如果你只是想要一个好用的个人 agent，OpenClaw 往往会显得有点太多组件。公开资料强调更容易安装、本地模型支持，以及多种部署方式。",
        body2: "和原版相比，CoPaw 更像一个拿来就能工作的个人 agent 工作台，而不是单纯的 runtime playground。它对那些想要灵活能力，但又不想把每一步都当成基础设施工程的人更有吸引力。",
        point1: "官方资料强调本地模型、一键式安装路径和更接近桌面使用的体验。",
        point2: "它支持多种聊天通道和 provider，但不会一上来就把用户推进重型自托管路径。",
        point3: "它位于 runtime 实验和终端用户可用性之间的中间地带。",
        source1: "官网",
        source2: "GitHub 仓库",
      },
      ironclaw: {
        title: "IronClaw | OpenClaw Finder",
        description: "IronClaw 项目详情页，一条更强调安全、隐私和可审计性的 Rust 路线。",
        kicker: "安全优先的 Rust 路线",
        name: "IronClaw",
        summary: "一条更强调安全、隐私和可审计性的 Rust 路线，而不是面向大众的产品化入口。",
        statusValue: "安全强化路线代表",
        typeValue: "围绕 Rust 安全性、严格校验和隐私执行来设计，而不是优先做广泛生态和易上手体验",
        bestForValue: "比起顺滑上手，更在意安全边界和可审计性的团队",
        easeValue: "🌟🌟",
        ecosystemValue: "🌟🌟🌟",
        extensibilityValue: "🌟🌟🌟🌟",
        body1: "IronClaw 更适合那种第一反应不是“好不好用”，而是“安不安全、可不可审计”的人。公开资料把它定位成一条 Rust 实现路线，并把安全层、输入校验、隐私和执行风险控制放在核心位置。",
        body2: "和原版相比，它不是为了给你最广的生态入口，而是为了让 runtime 在敏感环境里更可信、更容易审计，也更容易说清楚边界在哪里。",
        point1: "Rust 和安全导向架构是它对外表达的核心。",
        point2: "它更适合安全敏感团队，不太适合作为第一次接触生态的入口。",
        point3: "可以把它理解成一条强化版分支，而不是最顺手的前门。",
        source1: "官网",
        source2: "GitHub 仓库",
      },
      clawhub: {
        title: "ClawHub | OpenClaw Finder",
        description: "ClawHub 项目详情页，OpenClaw 官方技能市场和注册表。",
        kicker: "官方生态工具",
        name: "ClawHub",
        summary: "OpenClaw 官方的 marketplace 和 registry，用于发现、安装和发布 skills。",
        statusValue: "官方技能层",
        typeValue: "不是替代运行时，而是在上面加一层技能发现、安装和分发能力",
        bestForValue: "想找技能、装技能、发技能的人",
        easeValue: "🌟🌟🌟🌟",
        ecosystemValue: "🌟🌟🌟🌟",
        extensibilityValue: "🌟🌟🌟🌟",
        body1: "ClawHub 是 OpenClaw 官方工具层的一部分，承担了发现、安装和共享 skills 的角色。",
        body2: "一个成熟生态不能只有运行时，还需要扩展点。ClawHub 是 OpenClaw 正在建设更大工具和 skill 市场的明确信号。",
        point1: "在官方文档中有明确记录。",
        point2: "有公开 GitHub 仓库支撑。",
        point3: "非常适合作为目录中的独立生态分类。",
        source1: "官方文档",
        source2: "GitHub 仓库",
      },
      openprose: {
        title: "OpenProse | OpenClaw Finder",
        description: "OpenProse 项目详情页，OpenClaw 官方工作流和编排格式。",
        kicker: "官方工作流格式",
        name: "OpenProse",
        summary: "OpenClaw 官方的 workflow 和 orchestration 格式，适合结构化多 agent 场景。",
        statusValue: "官方工作流层",
        typeValue: "不是另一个运行时，而是给多个 agent 和步骤加结构化编排",
        bestForValue: "已经不满足于单助手流程，想把步骤和 agent 串起来的人",
        easeValue: "🌟🌟",
        ecosystemValue: "🌟🌟🌟🌟",
        extensibilityValue: "🌟🌟🌟🌟🌟",
        body1: "OpenProse 是围绕 OpenClaw 的官方工作流层。它被定位为表达更结构化 orchestration 的方式，而不是把所有逻辑都塞进一个平面助手流程。",
        body2: "它的重要性在于成熟生态需要 workflow 抽象，而不只是工具和 agent。OpenProse 说明 OpenClaw 已经在考虑可编程组合。",
        point1: "在 OpenClaw 官方文档中有明确页面。",
        point2: "它更适合作为生态条目，而不是运行时替代品。",
        point3: "后面很适合扩展成 comparison 和 workflow example 内容。",
        source1: "官方文档",
      },
      qclaw: {
        title: "QClaw | OpenClaw Finder",
        description: "QClaw 项目详情页，一个更偏微信和 QQ 场景的一键式 OpenClaw 包装路线。",
        kicker: "腾讯系",
        name: "QClaw",
        summary: "一个更偏本地化、一键式的 OpenClaw 路线，重点围绕微信和 QQ 场景，目前还需要内测激活码。",
        statusValue: "围绕 OpenClaw 思路做本地化包装的一层",
        typeValue: "把安装、云端接入和微信或 QQ 入口打包得更友好，而不是让用户自己从头搭整套",
        bestForValue: "不想自己折腾部署、但又想要 OpenClaw 能力的团队和创作者",
        easeValue: "🌟🌟🌟🌟🌟",
        ecosystemValue: "🌟🌟🌟🌟",
        extensibilityValue: "🌟🌟🌟",
        body1: "QClaw 值得看，不是因为它发明了全新的运行时，而是因为它把入口体验改了。围绕微信、QQ 和中文使用场景的包装，让 OpenClaw 更像一条一键式路线，而不是自己从头搭整套。",
        body2: "和原版相比，它吸引人的点不是最大程度开放，而是更省事的部署、更贴近本地沟通工具的集成，以及一条更符合国内团队工作流的使用路径。当前阶段，使用它仍然需要内测激活码。",
        point1: "它和原版最大的区别，是包装方式和本地化入口，而不是重新发明一套运行时哲学。",
        point2: "如果你的用户旅程本来就从微信或 QQ 开始，它会比终端驱动的路线更值得看。",
        point3: "官网已经公开，但当前访问仍然带有内测门槛。",
        source1: "官网",
        source2: "TechNode 报道",
        source3: "Economic Times 报道",
      },
    },
    home: {
      title: "OpenClaw Finder | 发现 OpenClaw 项目",
      description:
        "OpenClaw Finder 是一个精选导航站，用来发现 qclaw、picoclaw 等 OpenClaw 项目、工具和实验。",
      eyebrow: "精选导航",
      heroTitle:
        "<span class=\"hero-title-accent\">OpenClaw</span><span class=\"hero-title-emoji\">🦞</span><span class=\"hero-title-accent\">Finder</span>",
      heroLead:
        "把市面上已经冒头的 Claw 项目都捞上来，新发布、刚更新、值得看的变体，尽量 24 小时内同步到这里。",
      browse: "浏览目录",
      submit: "提交项目",
      profileLink: "详情",
      metricEase: "上手程度",
      metricEcosystem: "用户生态",
      metricExtensibility: "扩展空间",
      signal1Value: "一手来源",
      signal1Label: "优先放官网、仓库、文档和正式发布信息。",
      signal2Value: "少点噪音",
      signal2Label: "把值得看、能用的项目和传闻、套壳、死链分开。",
      signal3Value: "人工筛选",
      signal3Label: "不是见到名字就收，而是挑真正值得点开的内容。",
      feature1Title: "发现项目",
      feature1Body: "不用在零散链接里来回查找，直接浏览活跃的 OpenClaw 项目。",
      feature2Title: "快速判断",
      feature2Body: "先看简短介绍，几秒内判断它值不值得继续看。",
      feature3Title: "持续更新",
      feature3Body: "新项目、刚更新的项目、实用工具变化，都会继续补进来。",
      directoryEyebrow: "精选项目",
      directoryTitle: "先看这些",
      directoryLead: "这里先收你大概率会想看的 OpenClaw 项目和生态工具，信息尽量都指向公开页面和官方链接。",
      startGuideButton: "新手入口",
      category1Title: "OpenClaw 及其变种",
      category1Lead: "主项目、不同变种、不同风格的实现，先从这组看最容易建立整体印象。",
      category1Button: "跳到变种项目",
      category2Title: "实用工具与生态能力",
      category2Lead: "技能市场、工作流能力和其他能让 OpenClaw 更好用的工具，都放在这里。",
      category2Button: "跳到生态工具",
      card1Tag: "腾讯系",
      card1Body: "更像一条面向微信和 QQ 场景的一键式 OpenClaw 路线，目前还需要内测激活码，重点不是自己搭，而是更快用起来。",
      card1Meta1: "定位：本地化包装层",
      card1Meta2: "和原版不同：更偏微信和 QQ 场景",
      card1RateEase: "🌟🌟🌟🌟🌟",
      card1RateEcosystem: "🌟🌟🌟🌟",
      card1RateExtensibility: "🌟🌟🌟",
      card2Tag: "官方",
      card2Body: "官方完整版入口，文档最全、生态最完整，也是理解整个 OpenClaw 生态的最好起点。",
      card2Meta1: "状态：已确认官方项目",
      card2Meta2: "适合：先从源头了解整个生态",
      card2RateEase: "🌟🌟🌟🌟🌟",
      card2RateEcosystem: "🌟🌟🌟🌟🌟",
      card2RateExtensibility: "🌟🌟🌟🌟🌟",
      card3Title: "PicoClaw",
      card3Tag: "轻量",
      card3Body: "更轻、更省资源的一条路，适合小设备，不是奔着最完整功能面去的。",
      card3Meta1: "状态：已确认公开仓库",
      card3Meta2: "适合：边缘设备和低成本硬件",
      card3RateEase: "🌟🌟🌟🌟",
      card3RateEcosystem: "🌟🌟🌟🌟",
      card3RateExtensibility: "🌟🌟🌟",
      card4Tag: "容器优先",
      card4Body: "更偏部署安全和隔离边界，适合想把 OpenClaw 放进更可控环境里的人。",
      card4Meta1: "状态：已确认公开仓库",
      card4Meta2: "适合：安全和容器化部署",
      card4RateEase: "🌟🌟🌟",
      card4RateEcosystem: "🌟🌟🌟",
      card4RateExtensibility: "🌟🌟🌟🌟",
      card5Tag: "Rust",
      card5Body: "更偏底层和性能取向，适合想掌控更多细节，而不是只求快速开用的人。",
      card5Meta1: "状态：已确认公开仓库",
      card5Meta2: "适合：更看重性能和迁移的人",
      card5RateEase: "🌟🌟",
      card5RateEcosystem: "🌟🌟🌟",
      card5RateExtensibility: "🌟🌟🌟🌟🌟",
      card6Tag: "生态",
      card6Body: "官方技能市场和注册表，帮你更快找到、安装和发布 OpenClaw skills。",
      card6Meta1: "状态：已确认官方项目",
      card6Meta2: "适合：发现和分发技能",
      card6RateEase: "🌟🌟🌟🌟",
      card6RateEcosystem: "🌟🌟🌟🌟",
      card6RateExtensibility: "🌟🌟🌟🌟",
      card7Tag: "工作流",
      card7Body: "不是另一个 Claw，而是把多个 agent、步骤和能力串起来的官方工作流层。",
      card7Meta1: "状态：已确认官方生态",
      card7Meta2: "适合：结构化多 agent 工作流",
      card7RateEase: "🌟🌟",
      card7RateEcosystem: "🌟🌟🌟🌟",
      card7RateExtensibility: "🌟🌟🌟🌟🌟",
      card8Tag: "Python",
      card8Body: "一个更小的 Python 版 OpenClaw 路线，核心循环更容易读懂，也更适合学习和快速魔改。",
      card8RateEase: "🌟🌟🌟🌟",
      card8RateEcosystem: "🌟🌟🌟🌟",
      card8RateExtensibility: "🌟🌟🌟🌟🌟",
      card9Tag: "本地优先",
      card9Body: "更易安装、支持本地模型、也更像个人 agent 工作台的一条现实路线。",
      card9RateEase: "🌟🌟🌟🌟",
      card9RateEcosystem: "🌟🌟🌟🌟",
      card9RateExtensibility: "🌟🌟🌟🌟",
      card10Tag: "安全",
      card10Body: "一条更强调隐私、安全和可审计性的 Rust 路线，不是面向大众的轻松入口。",
      card10RateEase: "🌟🌟",
      card10RateEcosystem: "🌟🌟🌟",
      card10RateExtensibility: "🌟🌟🌟🌟",
      ctaEyebrow: "一起扩充目录",
      ctaTitle: "想让你的 OpenClaw 项目被收录？",
      ctaBody: "通过提交页发送项目名称、链接、简短介绍和上线说明。",
      ctaButton: "立即提交",
      footerText: "一个公开的 OpenClaw 项目导航站。",
    },
    about: {
      title: "关于 | OpenClaw Finder",
      description: "了解 OpenClaw Finder 是什么、适合谁，以及项目收录标准。",
      eyebrow: "关于",
      lead: "把 Claw 生态里真正值得看的项目收在一起，少翻链接，少踩空，更快看清现在到底有什么。",
      bodyTitle: "为什么做这个站",
      body1:
        "OpenClaw Finder 是一个面向 OpenClaw 生态的精选导航站，目的是让用户更容易发现项目、快速比较，并持续跟踪新的发布内容，而不是在零散链接之间来回搜索。",
      railTitle: "这个站怎么保持有用",
      railBody: "它不是越多越好，而是尽量少噪音、强信息密度、能快速扫完。",
      railPoint1: "官方项目、生态工具、观察中变体会分开展示，不把不同可信度的内容混在一起。",
      railPoint2: "每个条目尽量锚定到公开一手来源，而不是二次转述。",
      railPoint3: "有新项目冒头或信息变化时，会尽量尽快同步到目录里。",
      section1Title: "什么项目会被收录",
      section1Body:
        "收录对象应与 OpenClaw 生态直接相关，并且需要提供可访问的官网、代码仓库或产品页面。站点会为了清晰和一致性对条目进行适度编辑。",
      section1Lead: "这个目录不是把所有带 claw 名字的页面都塞进来，而是优先收那些真的能帮助人理解生态全貌的项目。",
      section2Title: "如何审核",
      section2Body: "所有提交内容都会先人工审核，再决定是否展示在站点中，以减少低质量条目。",
      section2Lead: "目录宁愿少一点，也不想变成一堆低质量链接。人工审核就是为了守住这个标准。",
    },
    start: {
      title: "应该从哪个 OpenClaw 项目开始？ | OpenClaw Finder",
      description:
        "对比 OpenClaw、PicoClaw、NanoClaw、Nanobot、CoPaw 等项目，判断哪条 OpenClaw 路线更适合你。",
      eyebrow: "从这里开始",
      lead:
        "如果你刚进入这个生态，关键不是追最热的名字，而是先搞清楚你的真实需求是什么：官方主栈、小设备部署、更强隔离、更容易安装，还是更适合学习源码。",
      bodyTitle: "你应该从哪个 OpenClaw 项目开始？",
      section1Title: "快速建议",
      pick1Label: "先看 OpenClaw",
      pick1Body:
        "如果你想先看主项目本体、最完整文档和最清晰的官方参考点。",
      pick2Label: "先看 PicoClaw",
      pick2Body:
        "如果你最在意的是小硬件、低内存占用和轻量部署。",
      pick3Label: "先看 NanoClaw",
      pick3Body:
        "如果你更在意容器边界、隔离能力和更稳的自托管控制。",
      pick4Label: "先看 Nanobot",
      pick4Body:
        "如果你最想要的是一个容易读懂、容易学习、容易改的代码库。",
      pick5Label: "先看 CoPaw",
      pick5Body:
        "如果你想要一个更实用的个人 agent 工作台，安装更省事，本地模型支持更好。",
      pickLink: "查看详情",
      section2Title: "怎么做选择",
      section2Lead:
        "更有效的方式不是从最大声的名字开始，而是从你的限制条件开始。",
      decision1: "如果你想先建立官方基线，再去比较变种，先看 OpenClaw。",
      decision2:
        "如果你最在意小设备、静态二进制和更低运行成本，优先看 PicoClaw。",
      decision3:
        "如果你最在意容器优先隔离和更清晰的自托管边界，优先看 NanoClaw。",
      decision4:
        "如果你的团队更偏基础设施、能接受 Rust 路线，也不把“最容易上手”放第一位，就看 ZeroClaw 或 IronClaw。",
      decision5:
        "如果你的真实目标是快速看懂架构、再自己 fork 做实验，就优先看 Nanobot。",
      decision6:
        "如果你已经知道 ClawHub 和 OpenProse 是生态层，而不是运行时替代品，再去看它们会更高效。",
      section3Title: "三条安全起步路线",
      routeLead:
        "如果你还不确定，下面三条路线对大多数人都比较稳。",
      route1:
        "生态新手：先看 OpenClaw，再对比 PicoClaw 和 NanoClaw。",
      route2:
        "开发者学习路线：先看 Nanobot，再回看 OpenClaw 理解更大的能力面。",
      route3:
        "务实自托管路线：把 CoPaw、NanoClaw 和 OpenClaw 放在一起比。",
      section4Title: "接下来做什么",
      section4Body:
        "选定方向后，打开 2 到 3 个项目页，对照 quick facts、sources 和 why it matters 一起看。很多时候，只要按约束条件比较，而不是按热度比较，最合适的选择会很快变得明显。",
    },
    submit: {
      title: "提交项目 | OpenClaw Finder",
      description: "提交 OpenClaw 项目，申请在 OpenClaw Finder 上收录。",
      eyebrow: "提交",
      lead: "如果你做了 Claw 项目、工具、分支或相关生态页面，可以直接投递进来，审核后会加入目录。",
      bodyTitle: "提交你的 OpenClaw 项目",
      body1: "当前阶段采用人工收录。你可以通过邮件发送以下信息，提交后会进入审核。",
      card1Title: "需要发什么",
      emailLabel: "邮箱：",
      includeLabel: "请包含：",
      includeBody: "项目名称、URL、一句话简介，以及它和其他项目的区别。",
      card2Title: "什么信息最有帮助",
      card2Lead:
        "OpenClaw Finder 是精选目录，不是越多越好。更重要的是，提交内容能帮助用户看清真实生态，而不是增加噪音。",
      card2Point1:
        "有可访问的官网、仓库、文档、发布说明，或其他能证明项目真实公开存在的一手来源。",
      card2Point2:
        "能说清楚这个项目到底做什么，适合谁，不只是一个模糊名字。",
      card2Point3:
        "能解释为什么它属于 OpenClaw 生态，而不是一个泛 AI 工具。",
      card2Point4:
        "信息足够完整，让目录页可以直接和其他项目做比较，而不是靠猜。",
      card3Title: "推荐邮件模板",
      templateLine1: "项目名称：",
      templateLine2: "主链接：",
      templateLine3: "GitHub / 文档 / 发布链接：",
      templateLine4: "一句话简介：",
      templateLine5: "和其他 OpenClaw 项目的区别：",
      templateLine6: "为什么值得收录：",
      templateLine7: "联系人：",
      card4Title: "哪些情况会被拒绝",
      card4Point1:
        "链接失效、页面占位、或者没有任何公开证据证明项目真实存在。",
      card4Point2:
        "和 OpenClaw 生态没有明确关系的泛 AI 工具。",
      card4Point3:
        "信息过薄，导致必须靠人工猜这个项目到底是什么。",
      card4Point4:
        "明显抄袭、垃圾提交，或有误导性命名。",
      card5Title: "提交后会怎样",
      body2: "等你配置好邮箱转发或表单工具后，可以把这个页面替换成真实表单。",
      card5Point1:
        "每一条提交都会先人工审核，再决定是否上线。",
      card5Point2:
        "为了清晰、一致和分类准确，条目内容可能会被编辑。",
      card5Point3:
        "如果缺少核心证据或一手来源，提交可能会先被搁置。",
      railTitle: "审核清单",
      railBody: "把关键信息一次发齐，收录会更快。",
      checklist1: "清晰的项目名和主链接",
      checklist2: "一句话说明它做什么",
      checklist3: "它和其他 Claw 项目有什么不同",
      checklist4: "仓库、文档或发布页等公开可验证信息",
    },
    contact: {
      title: "联系 | OpenClaw Finder",
      description: "联系 OpenClaw Finder，提交项目、反馈问题或咨询赞助合作。",
      eyebrow: "联系",
      lead: "目录有错、链接失效、项目该更新状态，或者你想聊合作，都可以从这里联系。",
      bodyTitle: "联系我",
      body1: "你可以通过邮件反馈目录问题、提交修正、咨询合作，或沟通后续广告与赞助。",
      card1Title: "纠错与更新",
      card1Body: "如果某个项目已经公开发布、仓库变更、链接失效，或者状态该调整，带上一手来源发来就可以。",
      card2Title: "合作与赞助",
      card2Body: "也可以讨论合作、赞助，或者怎样把更有价值的生态动态放进目录里。",
      card3Title: "直接联系",
      emailLabel: "邮箱：",
      responseLabel: "回复时间：",
      responseBody: "通常会在几个工作日内回复。",
      railTitle: "最适合发送的内容",
      railBody: "简短、明确、带来源的消息最容易处理。",
      railPoint1: "某个链接坏了或已经过期",
      railPoint2: "有值得收录的新项目页面",
      railPoint3: "有一手来源支撑的修正信息",
    },
    privacy: {
      title: "隐私政策 | OpenClaw Finder",
      description: "OpenClaw Finder 的隐私政策说明。",
      eyebrow: "隐私",
      lead: "这个站点本身很轻，所以隐私说明也尽量写得直接，不绕圈。",
      bodyTitle: "隐私政策",
      card1Title: "基础分析数据",
      body1: "OpenClaw Finder 可能会收集基础分析信息，例如页面访问量、来源页面和浏览器信息，用于了解网站使用情况。",
      card2Title: "邮件与提交内容",
      body2: "如果你通过邮件提交项目或发送联系请求，你的消息和联系方式只会用于审核项目或回复咨询。",
      card3Title: "未来可能接入的服务",
      body3: "未来站点可能会接入第三方分析或广告服务。在启用这些服务之前，应更新本页面内容。",
      railTitle: "用大白话说",
      railBody: "原则很简单：只保留运行目录和回复邮件真正需要的信息。",
      railPoint1: "这里不打算做重度追踪式的数据收集。",
      railPoint2: "如果未来接了新的工具，这一页也应该同步更新。",
      railPoint3: "能更简单处理的地方，就尽量不用更复杂的方式。",
    },
  },
};

const pageTextKeys = {
  about: { title: "about.title", description: "about.description" },
  start: { title: "start.title", description: "start.description" },
  submit: { title: "submit.title", description: "submit.description" },
  contact: { title: "contact.title", description: "contact.description" },
  privacy: { title: "privacy.title", description: "privacy.description" },
  home: { title: "home.title", description: "home.description" },
  "project-openclaw": { title: "project.openclaw.title", description: "project.openclaw.description" },
  "project-picoclaw": { title: "project.picoclaw.title", description: "project.picoclaw.description" },
  "project-nanoclaw": { title: "project.nanoclaw.title", description: "project.nanoclaw.description" },
  "project-zeroclaw": { title: "project.zeroclaw.title", description: "project.zeroclaw.description" },
  "project-nanobot": { title: "project.nanobot.title", description: "project.nanobot.description" },
  "project-copaw": { title: "project.copaw.title", description: "project.copaw.description" },
  "project-ironclaw": { title: "project.ironclaw.title", description: "project.ironclaw.description" },
  "project-clawhub": { title: "project.clawhub.title", description: "project.clawhub.description" },
  "project-openprose": { title: "project.openprose.title", description: "project.openprose.description" },
  "project-qclaw": { title: "project.qclaw.title", description: "project.qclaw.description" },
};

function getValue(language, key) {
  return key.split(".").reduce((value, part) => value && value[part], translations[language]);
}

function detectLanguage() {
  const saved = window.localStorage.getItem("preferred-language");
  if (saved === "zh" || saved === "en") return saved;
  const language = (navigator.language || "").toLowerCase();
  return language.startsWith("zh") ? "zh" : "en";
}

function applyLanguage(language) {
  const page = document.body.dataset.page || "home";
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  for (const element of document.querySelectorAll("[data-i18n]")) {
    const key = element.dataset.i18n;
    const value = getValue(language, key);
    if (typeof value === "string") element.textContent = value;
  }

  for (const element of document.querySelectorAll("[data-i18n-html]")) {
    const key = element.dataset.i18nHtml;
    const value = getValue(language, key);
    if (typeof value === "string") element.innerHTML = value;
  }

  const metaDescription = document.getElementById("meta-description");
  const metaOgTitle = document.getElementById("meta-og-title");
  const metaOgDescription = document.getElementById("meta-og-description");
  const metaTwitterTitle = document.getElementById("meta-twitter-title");
  const metaTwitterDescription = document.getElementById("meta-twitter-description");
  const pageKeys = pageTextKeys[page];
  if (pageKeys) {
    const title = getValue(language, pageKeys.title);
    const description = getValue(language, pageKeys.description);
    document.title = title;
    if (metaDescription) metaDescription.setAttribute("content", description);
    if (metaOgTitle) metaOgTitle.setAttribute("content", title);
    if (metaOgDescription) metaOgDescription.setAttribute("content", description);
    if (metaTwitterTitle) metaTwitterTitle.setAttribute("content", title);
    if (metaTwitterDescription) metaTwitterDescription.setAttribute("content", description);
  }

  for (const button of document.querySelectorAll("[data-lang-button]")) {
    const isActive = button.dataset.langButton === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const initialLanguage = detectLanguage();
  applyLanguage(initialLanguage);
  document.body.classList.add("page-ready");

  const nav = document.querySelector(".nav");
  const mainNav = document.querySelector(".main-nav");
  const langSwitch = document.querySelector(".lang-switch");
  let mobileMenuToggle = null;

  if (nav && mainNav && langSwitch) {
    mobileMenuToggle = document.createElement("button");
    mobileMenuToggle.type = "button";
    mobileMenuToggle.className = "mobile-menu-toggle";
    mobileMenuToggle.setAttribute("aria-expanded", "false");
    mobileMenuToggle.setAttribute("aria-label", "Toggle navigation");
    mobileMenuToggle.innerHTML =
      "<span></span><span></span><span></span>";
    nav.insertBefore(mobileMenuToggle, langSwitch.nextSibling);

    mobileMenuToggle.addEventListener("click", () => {
      const isOpen = document.body.classList.toggle("mobile-menu-open");
      mobileMenuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    for (const navLink of mainNav.querySelectorAll("a")) {
      navLink.addEventListener("click", () => {
        document.body.classList.remove("mobile-menu-open");
        mobileMenuToggle.setAttribute("aria-expanded", "false");
      });
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 880) {
        document.body.classList.remove("mobile-menu-open");
        mobileMenuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  for (const button of document.querySelectorAll("[data-lang-button]")) {
    button.addEventListener("click", () => {
      const language = button.dataset.langButton;
      window.localStorage.setItem("preferred-language", language);
      applyLanguage(language);
    });
  }

  for (const link of document.querySelectorAll("a[href]")) {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      if (link.target === "_blank" || link.hasAttribute("download")) return;

      const url = new URL(href, window.location.href);
      const isSameOrigin = url.origin === window.location.origin;
      if (!isSameOrigin) return;
      if (url.pathname === window.location.pathname && url.hash === window.location.hash) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      event.preventDefault();
      if (mobileMenuToggle) {
        document.body.classList.remove("mobile-menu-open");
        mobileMenuToggle.setAttribute("aria-expanded", "false");
      }
      document.body.classList.remove("page-ready");
      document.body.classList.add("page-exit");
      window.setTimeout(() => {
        window.location.href = url.href;
      }, 180);
    });
  }
});
