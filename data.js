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
    "zones": [
      {
        "id": "entry",
        "title": "交互入口",
        "note": "人从哪里进来",
        "layout": "row",
        "groups": [
          {
            "nodes": [
              {
                "id": "console",
                "name": "SuperAgent 工作台网页",
                "status": "yellow",
                "note": "页面能打开，按钮正在试。"
              },
              {
                "id": "wechat-bridge",
                "name": "微信桥接",
                "status": "green",
                "note": "收发微信都在用。"
              }
            ]
          }
        ]
      },
      {
        "id": "receivers",
        "title": "消息接收器",
        "note": "消息从哪来",
        "layout": "split",
        "groups": [
          {
            "title": "外部来源",
            "rows": [
              {
                "id": "wechat",
                "name": "微信监听器",
                "status": "green",
                "note": "能读，断了能接上"
              },
              {
                "id": "wecom",
                "name": "企业微信监听器",
                "status": "green",
                "note": "能读，断了能接上"
              },
              {
                "id": "mail",
                "name": "邮件监听器",
                "status": "yellow",
                "note": "能收信，还在调"
              },
              {
                "id": "campus",
                "name": "上财校园网监听器",
                "status": "gray",
                "note": "还没动"
              },
              {
                "id": "feishu",
                "name": "飞书监听器",
                "status": "gray",
                "note": "还没动"
              }
            ]
          },
          {
            "title": "内部来源",
            "rows": [
              {
                "id": "timer",
                "name": "定时任务器",
                "status": "gray",
                "note": "还没动"
              },
              {
                "id": "console-events",
                "name": "自建工作台事件",
                "status": "gray",
                "note": "还没动"
              },
              {
                "id": "worker-report",
                "name": "Worker 汇报",
                "status": "yellow",
                "note": "代码在，没实跑"
              },
              {
                "id": "reentry",
                "name": "单条补录器",
                "status": "gray",
                "note": "还没动"
              }
            ]
          }
        ],
        "side": [
          {
            "title": "全部汇到这里",
            "cards": [
              {
                "id": "rectifier",
                "name": "消息整流器",
                "status": "green",
                "note": "去重、合批、回执都跑通。"
              }
            ]
          }
        ]
      },
      {
        "id": "maintenance",
        "title": "SuperAgent 状态维护",
        "note": "转发与记录",
        "layout": "split",
        "groups": [
          {
            "cards": [
              {
                "id": "relay",
                "name": "状态转发中心",
                "status": "yellow",
                "note": "正在改造，还没接管全部消息。"
              }
            ]
          }
        ],
        "side": [
          {
            "title": "挂在这里",
            "rows": [
              {
                "id": "interaction",
                "name": "互动记录管理器",
                "status": "gray",
                "note": "还没动"
              },
              {
                "id": "memory",
                "name": "记忆管理器",
                "status": "gray",
                "note": "还没动"
              }
            ]
          }
        ]
      },
      {
        "id": "router",
        "title": "Router 中枢",
        "note": "先判断，再分派",
        "groups": [
          {
            "title": "一条会话走完三格",
            "cards": [
              {
                "id": "cli-session",
                "name": "CLI Router 会话",
                "status": "green",
                "note": "能跑一轮并回话。"
              },
              {
                "id": "router-manager",
                "name": "Router 管理器",
                "status": "green",
                "note": "分派和收尾都能用。"
              },
              {
                "id": "stats",
                "name": "运行统计器",
                "status": "yellow",
                "note": "在记数，还没做报表。"
              }
            ]
          }
        ]
      },
      {
        "id": "worker",
        "title": "Worker 执行模块",
        "note": "真正干活的层",
        "groups": [
          {
            "cards": [
              {
                "id": "knowledge",
                "name": "知识库",
                "status": "yellow",
                "note": "在找能改造的开源件。"
              }
            ]
          },
          {
            "cards": [
              {
                "id": "knowledge-api",
                "name": "统一知识库接口",
                "status": "gray",
                "note": "还没动。"
              }
            ]
          },
          {
            "cards": [
              {
                "id": "worker-manager",
                "name": "Worker 管理器",
                "status": "green",
                "note": "建、派、收、换环境都能用。"
              }
            ]
          },
          {
            "title": "派生子会话",
            "pair": [
              {
                "id": "supervisor",
                "name": "Supervisor 会话",
                "status": "yellow",
                "note": "在做。"
              },
              {
                "id": "worker-session",
                "name": "Worker 会话",
                "status": "yellow",
                "note": "能开，长任务还在试。"
              }
            ]
          },
          {
            "title": "汇报回传",
            "cards": [
              {
                "id": "outbox",
                "name": "Worker 消息 Outbox",
                "status": "green",
                "note": "汇报能送回整流器。"
              }
            ]
          },
          {
            "title": "跑在什么上面",
            "rows": [
              {
                "id": "runtime",
                "name": "多环境运行时",
                "status": "yellow",
                "note": "Codex 能切；DeepSeek 还差翻译"
              },
              {
                "id": "tools",
                "name": "私有工具与 Skills",
                "status": "gray",
                "note": "还没动"
              }
            ]
          }
        ]
      }
    ],
    "edges": [
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
        "feishu",
        "rectifier"
      ],
      [
        "timer",
        "rectifier"
      ],
      [
        "console-events",
        "rectifier"
      ],
      [
        "worker-report",
        "rectifier"
      ],
      [
        "rectifier",
        "relay"
      ],
      [
        "relay",
        "console"
      ],
      [
        "relay",
        "cli-session"
      ],
      [
        "interaction",
        "relay"
      ],
      [
        "memory",
        "relay"
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
        "router-manager",
        "worker-manager"
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
        "outbox"
      ],
      [
        "worker-session",
        "outbox"
      ],
      [
        "worker-manager",
        "knowledge-api"
      ],
      [
        "knowledge-api",
        "knowledge"
      ],
      [
        "worker-manager",
        "runtime"
      ]
    ]
  },
  "snapshot": {
    "updatedAt": "2026-11-08T04:37:23.327Z",
    "providers": [
      {
        "id": "codex",
        "name": "Codex",
        "ready": true
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "ready": false
      }
    ],
    "router": {
      "provider": "codex",
      "online": true
    },
    "workers": [],
    "recent": []
  }
}
