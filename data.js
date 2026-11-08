window.SUPERAGENT={
  "map": {
    "updatedAt": "2026-11-08",
    "legend": [
      {
        "key": "gray",
        "label": "没动手",
        "hint": "还没开始"
      },
      {
        "key": "red",
        "label": "方案已定",
        "hint": "谈完了，还没写"
      },
      {
        "key": "yellow",
        "label": "在做",
        "hint": "有代码了，还在改"
      },
      {
        "key": "green",
        "label": "能用",
        "hint": "跑通并验过"
      }
    ],
    "nodes": {
      "console": {
        "name": "SuperAgent 工作台网页",
        "status": "yellow",
        "note": "页面能打开，按钮正在试。"
      },
      "wechat-bridge": {
        "name": "微信桥接",
        "status": "green",
        "note": "收发微信都在用。"
      },
      "relay": {
        "name": "SuperAgent 状态转发中心",
        "status": "yellow",
        "note": "收发都经它记录，Router 的记忆从这取。"
      },
      "memory": {
        "name": "SuperAgent 记忆管理器",
        "status": "red",
        "note": "接口谈好了，还没写。"
      },
      "interaction": {
        "name": "互动记录管理器",
        "status": "red",
        "note": "接口谈好了，还没写。"
      },
      "timer": {
        "name": "定时任务器",
        "status": "gray",
        "note": "还没动"
      },
      "wechat": {
        "name": "微信监听器",
        "status": "green",
        "note": "能读，断了能接上"
      },
      "wecom": {
        "name": "企业微信监听器",
        "status": "green",
        "note": "能读，断了能接上"
      },
      "mail": {
        "name": "邮件监听器",
        "status": "yellow",
        "note": "能收信，还在调"
      },
      "campus": {
        "name": "上财校园网监听器",
        "status": "gray",
        "note": "还没动"
      },
      "x": {
        "name": "X 监听器",
        "status": "gray",
        "note": "还没动"
      },
      "console-events": {
        "name": "自建工作台事件",
        "status": "gray",
        "note": "还没动"
      },
      "reentry": {
        "name": "单条补录器",
        "status": "gray",
        "note": "还没动"
      },
      "worker-report": {
        "name": "worker 汇报",
        "status": "green",
        "note": "汇报能回来"
      },
      "rectifier": {
        "name": "消息整流器",
        "status": "green",
        "note": "去重、合批、回执都跑通。"
      },
      "cli-session": {
        "name": "CLI router 会话",
        "status": "green",
        "note": "能跑一轮并回话。"
      },
      "router-manager": {
        "name": "router 管理器",
        "status": "green",
        "note": "接活、分派、收尾都靠它。"
      },
      "stats": {
        "name": "运行统计器",
        "status": "yellow",
        "note": "在记数，还没做报表。"
      },
      "knowledge-api": {
        "name": "统一知识库接口",
        "status": "yellow",
        "note": "在接，还没统一。"
      },
      "obsidian": {
        "name": "Obsidian 个人笔记",
        "status": "gray",
        "note": "还没接"
      },
      "papers": {
        "name": "专业书籍、论文",
        "status": "gray",
        "note": "还没接"
      },
      "worker-manager": {
        "name": "worker 管理器",
        "status": "green",
        "note": "建、派、收、换环境都能用。"
      },
      "supervisor": {
        "name": "supervisor 会话",
        "status": "gray",
        "note": "还没写，代码里没有它。"
      },
      "worker-session": {
        "name": "worker 会话",
        "status": "green",
        "note": "能开、能跑、能回话。"
      },
      "outbox": {
        "name": "worker 消息 Outbox",
        "status": "green",
        "note": "汇报能回消息接收器。"
      }
    },
    "edges": [
      [
        "relay",
        "console"
      ],
      [
        "relay",
        "wechat-bridge"
      ],
      [
        "memory",
        "relay"
      ],
      [
        "interaction",
        "relay"
      ],
      [
        "relay",
        "rectifier"
      ],
      [
        "wechat",
        "rectifier"
      ],
      [
        "wecom",
        "rectifier"
      ],
      [
        "mail",
        "rectifier"
      ],
      [
        "campus",
        "rectifier"
      ],
      [
        "x",
        "rectifier"
      ],
      [
        "console-events",
        "rectifier"
      ],
      [
        "rectifier",
        "timer"
      ],
      [
        "rectifier",
        "reentry"
      ],
      [
        "rectifier",
        "worker-report"
      ],
      [
        "rectifier",
        "router-manager"
      ],
      [
        "cli-session",
        "router-manager"
      ],
      [
        "router-manager",
        "stats"
      ],
      [
        "worker-manager",
        "stats"
      ],
      [
        "worker-manager",
        "supervisor"
      ],
      [
        "worker-manager",
        "worker-session"
      ],
      [
        "supervisor",
        "worker-session"
      ],
      [
        "worker-session",
        "outbox"
      ],
      [
        "outbox",
        "worker-report",
        "loop"
      ],
      [
        "worker-manager",
        "knowledge-api",
        "both"
      ],
      [
        "knowledge-api",
        "obsidian"
      ],
      [
        "knowledge-api",
        "papers"
      ]
    ]
  },
  "snapshot": {
    "updatedAt": "2026-11-08T05:00:00.701Z",
    "router": {
      "provider": "deepseek",
      "online": true
    },
    "workers": [],
    "recent": [
      {
        "at": "2026-11-08T04:55:32.090Z",
        "kind": "reply",
        "text": "你刚发来的消息在传递过程中变成了乱码（只收到一串问号），我这边无法还原内容。麻烦你重新发一次；如果方便，也可以再补一句想让我做什么。"
      },
      {
        "at": "2026-11-08T04:55:33.305Z",
        "kind": "batch",
        "text": "处理了一批消息"
      },
      {
        "at": "2026-11-08T04:55:45.202Z",
        "kind": "reply",
        "text": "OK"
      },
      {
        "at": "2026-11-08T04:55:46.581Z",
        "kind": "batch",
        "text": "处理了一批消息"
      }
    ]
  }
}
