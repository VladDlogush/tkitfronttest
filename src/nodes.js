export default {
  nodes: [
    {
      type: "command",
      ports: {
        port1: {
          id: "port1",
          type: "output",
        },
      },
      properties: {
        title: "command",
        description:
          "\nLorem Ipsum is simply dummy text of the printing and \ntypesetting industry. Lorem Ipsum has been the industry's \nstandard dummy text ever since the 1500s, \nwhen an unknown printer took a galley of type \nand scrambled it to make a type specimen book.\n",
        fields: {
          title: {
            type: "text",
            is_required: true,
          },
        },
        values: {
          title: "",
        },
      },
    },
    {
      type: "state",
      ports: {
        port1: {
          id: "port1",
          type: "output",
        },
      },
      properties: {
        title: "state",
        description:
          "\nLorem Ipsum is simply dummy text of the printing and \ntypesetting industry. Lorem Ipsum has been the industry's \nstandard dummy text ever since the 1500s, \nwhen an unknown printer took a galley of type \nand scrambled it to make a type specimen book.\n",
        fields: {
          state_name: {
            type: "text",
            is_required: true,
          },
        },
        values: {
          state_name: "",
        },
      },
    },
    {
      type: "action",
      ports: {
        port1: {
          id: "port1",
          type: "input",
        },
        port2: {
          id: "port2",
          type: "output",
        },
      },
      properties: {
        title: "send message",
        description:
          "\nLorem Ipsum is simply dummy text of the printing and \ntypesetting industry. Lorem Ipsum has been the industry's \nstandard dummy text ever since the 1500s, \nwhen an unknown printer took a galley of type \nand scrambled it to make a type specimen book.\n",
        type: "sendMessage",
        fields: {
          message: {
            type: "text",
            is_required: true,
          },
        },
        values: {
            message: "",
          },
      },
    },
    {
      type: "action",
      ports: {
        port1: {
          id: "port1",
          type: "input",
        },
        port2: {
          id: "port2",
          type: "output",
        },
      },
      properties: {
        title: "send photo",
        description:
          "\nLorem Ipsum is simply dummy text of the printing and \ntypesetting industry. Lorem Ipsum has been the industry's \nstandard dummy text ever since the 1500s, \nwhen an unknown printer took a galley of type \nand scrambled it to make a type specimen book.\n",
        type: "sendPhoto",
        fields: {
          photo_url: {
            type: "url",
            is_required: true,
          },
          caption: {
            type: "text",
            is_required: false,
          },
        },
        values: {
            photo_url: "",
            caption: "",
          },
      },
    },
    {
      type: "action",
      ports: {
        port1: {
          id: "port1",
          type: "input",
        },
        port2: {
          id: "port2",
          type: "output",
        },
      },
      properties: {
        title: "send audio",
        description:
          "\nLorem Ipsum is simply dummy text of the printing and \ntypesetting industry. Lorem Ipsum has been the industry's \nstandard dummy text ever since the 1500s, \nwhen an unknown printer took a galley of type \nand scrambled it to make a type specimen book.\n",
        type: "sendAudio",
        fields: {
          url: {
            type: "url",
            is_required: true,
          },
          caption: {
            type: "text",
            is_required: false,
          },
        },
        values: {
            url: "",
            caption: "",
          },
      },
    },
    {
      type: "action",
      ports: {
        port1: {
          id: "port1",
          type: "input",
        },
        port2: {
          id: "port2",
          type: "output",
        },
      },
      properties: {
        title: "send voice",
        description:
          "\nLorem Ipsum is simply dummy text of the printing and \ntypesetting industry. Lorem Ipsum has been the industry's \nstandard dummy text ever since the 1500s, \nwhen an unknown printer took a galley of type \nand scrambled it to make a type specimen book.\n",
        type: "sendVoice",
        fields: {
          url: {
            type: "url",
            is_required: true,
          },
          caption: {
            type: "text",
            is_required: false,
          },
        },
        values: {
            url: "",
            caption: "",
          },
      },
    },
    {
      type: "action",
      ports: {
        port1: {
          id: "port1",
          type: "input",
        },
        port2: {
          id: "port2",
          type: "output",
        },
      },
      properties: {
        title: "send video",
        description:
          "\nLorem Ipsum is simply dummy text of the printing and \ntypesetting industry. Lorem Ipsum has been the industry's \nstandard dummy text ever since the 1500s, \nwhen an unknown printer took a galley of type \nand scrambled it to make a type specimen book.\n",
        type: "sendVideo",
        fields: {
          url: {
            type: "url",
            is_required: true,
          },
          caption: {
            type: "text",
            is_required: false,
          },
        },
        values: {
            url: "",
            caption: "",
          },
      },
    },
    {
      type: "action",
      ports: {
        port1: {
          id: "port1",
          type: "input",
        },
        port2: {
          id: "port2",
          type: "output",
        },
      },
      properties: {
        title: "send document",
        description:
          "\nLorem Ipsum is simply dummy text of the printing and \ntypesetting industry. Lorem Ipsum has been the industry's \nstandard dummy text ever since the 1500s, \nwhen an unknown printer took a galley of type \nand scrambled it to make a type specimen book.\n",
        type: "sendDocument",
        fields: {
          url: {
            type: "url",
            is_required: true,
          },
          caption: {
            type: "text",
            is_required: false,
          },
        },
        values: {
            url: "",
            caption: "",
          },
      },
    },
    {
      type: "action",
      ports: {
        port1: {
          id: "port1",
          type: "input",
        },
        port2: {
          id: "port2",
          type: "output",
        },
      },
      properties: {
        title: "set state",
        description:
          "\nLorem Ipsum is simply dummy text of the printing and \ntypesetting industry. Lorem Ipsum has been the industry's \nstandard dummy text ever since the 1500s, \nwhen an unknown printer took a galley of type \nand scrambled it to make a type specimen book.\n",
        type: "setState",
        fields: {
          state_name: {
            type: "text",
            is_required: true,
          },
        },
        values: {
            state_name: "",
          },
      },
    },
    {
      type: "action",
      ports: {
        port1: {
          id: "port1",
          type: "input",
        },
        port2: {
          id: "port2",
          type: "output",
        },
      },
      properties: {
        title: "removeKeyboard",
        description:
          "\nLorem Ipsum is simply dummy text of the printing and \ntypesetting industry. Lorem Ipsum has been the industry's \nstandard dummy text ever since the 1500s, \nwhen an unknown printer took a galley of type \nand scrambled it to make a type specimen book.\n",
        type: "removeKeyboard",
        fields: {},
        values: {},
      },
    },
    {
      type: "condition",
      ports: {
        port1: {
          id: "port1",
          type: "input",
        },
        port2: {
          id: "port2",
          type: "output",
          value: true,
        },
        port3: {
          id: "port3",
          type: "output",
          value: false,
        },
      },
      properties: {
        title: "condition",
        description:
          "\nLorem Ipsum is simply dummy text of the printing and \ntypesetting industry. Lorem Ipsum has been the industry's \nstandard dummy text ever since the 1500s, \nwhen an unknown printer took a galley of type \nand scrambled it to make a type specimen book.\n",
        type: "condition",
        fields: {
          from: {
            type: "select",
            is_required: true,
            options: {
              message: "message",
              call: "call",
            },
          },
          value: {
            type: "text",
            is_required: true,
          },
          type: {
            type: "select",
            is_required: true,
            options: {
              "value is result": "== value",
              "result in value": "result in value",
              "value in result": "value in result",
            },
          },
        },
        values: {
            from: "",
            value: "",
            type: "",
          },
      },
    },
  ],
};
