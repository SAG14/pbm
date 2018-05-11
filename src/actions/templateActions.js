import { FETCH_TEMPLATES } from './types';

export const fetchTemplates = () => dispatch => {
  const templates = [
    {
      id: "tpbody1",
      type: "body",
      pages: [
        {
          rows: 4,
          columns: 5,
          area: '"i0 i0 i0 i0 i0 .  .  .  . "'
              + '"i0 i0 i0 i0 i0 .  .  .  . "'
              + '"i0 i0 i0 i0 i0 .  .  .  . "'
              + '"i0 i0 i0 i0 i0 .  .  .  . "'
              + '"i0 i0 i0 i0 i0 .  t0 .  . "'
              + '"i0 i0 i0 i0 i0 .  t0 .  . "'
              + '"i0 i0 i0 i0 i0 .  t0 .  . "',
          images: [
            {
              id: "i0",
              source: null,
              style: '{"gridArea":"i0", "margin":"36px 0 36px 36px"}',
            },
          ],
          texts: [
            {
              id: "t0",
              value: '',
              style: '{"gridArea":"t0", "margin":"0 0 36px 0"}',
            },
          ],
        },
        {
          rows: 4,
          columns: 5,
          area: '".  .  i1 i1 i1 i1 i1 i1 i1"'
              + '".  .  i1 i1 i1 i1 i1 i1 i1"'
              + '".  .  i1 i1 i1 i1 i1 i1 i1"'
              + '".  .  i1 i1 i1 i1 i1 i1 i1"'
              + '".  .  i1 i1 i1 i1 i1 i1 i1"'
              + '".  .  .  .  .  .  .  .  . "'
              + '".  .  .  .  .  .  t1 t1 t1"',
          images: [
            {
              id: "i1",
              source: null,
              style: '{"gridArea":"i1", "margin":"36px 36px 0 0"}',
            },
          ],
          texts: [
            {
              id: "t1",
              value: '',
              style: '{"gridArea":"t1", "margin":"0 36px 36px 0"}',
            },
          ],
        },
      ],
    },
    {
      id: "tpbody2",
      type: "body",
      pages: [
        {
          rows: 4,
          columns: 5,
          area: '"i0 i0 i0 .  .  .  .  .  . "'
              + '"i0 i0 i0 .  .  .  .  .  . "'
              + '"i0 i0 i0 .  .  .  .  .  . "'
              + '"i0 i0 i0 .  .  .  .  .  . "'
              + '"i0 i0 i0 .  t0 .  .  .  t1"'
              + '"i0 i0 i0 .  t0 .  .  .  t1"'
              + '"i0 i0 i0 .  t0 .  .  .  t1"',
          images: [
            {
              id: "i0",
              source: null,
              style: '{"gridArea":"i0", "margin":"-9px 0 -9px -9px"}',
            },
          ],
          texts: [
            {
              id: "t0",
              value: '',
              style: '{"gridArea":"t0", "margin":"0 0 36px 0"}',
            },
            {
              id: "t1",
              value: '',
              style: '{"gridArea":"t1", "margin":"0 36px 36px 0"}',
            },
          ],
        },
        {
          rows: 4,
          columns: 5,
          area: '"i1 i1 i1 i1 i1 i1 i1 i1 i1"'
              + '"i1 i1 i1 i1 i1 i1 i1 i1 i1"'
              + '"i1 i1 i1 i1 i1 i1 i1 i1 i1"'
              + '"i1 i1 i1 i1 i1 i1 i1 i1 i1"'
              + '"i1 i1 i1 i1 i1 i1 i1 i1 i1"'
              + '"i1 i1 i1 i1 i1 i1 i1 i1 i1"'
              + '"i1 i1 i1 i1 i1 i1 i1 i1 i1"',
          images: [
            {
              id: "i1",
              source: null,
              style: '{"gridArea":"i1", "margin":"36px"}',
            },
          ],
          texts: [],
        },
      ],
    },
    {
      id: "tpbody3",
      type: "body",
      pages: [
        {
          rows: 4,
          columns: 5,
          area: '"i0 i0 i0 i0 i0 i0 i0 i0 i0"'
              + '"i0 i0 i0 i0 i0 i0 i0 i0 i0"'
              + '"i0 i0 i0 i0 i0 i0 i0 i0 i0"'
              + '"i0 i0 i0 i0 i0 i0 i0 i0 i0"'
              + '"i0 i0 i0 i0 i0 i0 i0 i0 i0"'
              + '"i0 i0 i0 i0 i0 i0 i0 i0 i0"'
              + '"i0 i0 i0 i0 i0 i0 i0 i0 i0"',
          images: [
            {
              id: "i0",
              source: null,
              style: '{"gridArea":"i0", "margin":"-9px"}',
            },
          ],
          texts: [],
        },
        {
          rows: 4,
          columns: 5,
          area: '"t0 .  .  .  i1 i1 i1 i1 i1"'
              + '"t0 .  .  .  i1 i1 i1 i1 i1"'
              + '"t0 .  .  .  i1 i1 i1 i1 i1"'
              + '".  .  .  .  i1 i1 i1 i1 i1"'
              + '".  .  t1 .  i1 i1 i1 i1 i1"'
              + '".  .  t1 .  i1 i1 i1 i1 i1"'
              + '".  .  t1 .  i1 i1 i1 i1 i1"',
          images: [
            {
              id: "i1",
              source: null,
              style: '{"gridArea":"i1", "margin":"36px 0"}',
            },
          ],
          texts: [
            {
              id: "t0",
              value: '',
              style: '{"gridArea":"t0", "margin":"36px 0 0 36px"}',
            },
            {
              id: "t1",
              value: '',
              style: '{"gridArea":"t1", "margin":"0 0 36px 0"}',
            },
          ],
        },
      ],
    },
    {
      id: "tpbody4",
      type: "body",
      pages: [
        {
          rows: 4,
          columns: 5,
          area: '"i0 i0 i0 i0 i0 i0 i0 i0 i0"'
              + '"i0 i0 i0 i0 i0 i0 i0 i0 i0"'
              + '"i0 i0 i0 i0 i0 i0 i0 i0 i0"'
              + '"i0 i0 i0 i0 i0 i0 i0 i0 i0"'
              + '"i0 i0 i0 i0 i0 i0 i0 i0 i0"'
              + '"i0 i0 i0 i0 i0 i0 i0 i0 i0"'
              + '"i0 i0 i0 i0 i0 i0 i0 i0 i0"',
          images: [
            {
              id: "i0",
              source: null,
              style: '{"gridArea":"i0", "margin":"36px"}',
            },
          ],
          texts: [],
        },
        {
          rows: 4,
          columns: 5,
          area: '"i1 i1 i1 i1 i1 i1 i1 i1 i1"'
              + '"i1 i1 i1 i1 i1 i1 i1 i1 i1"'
              + '"i1 i1 i1 i1 i1 i1 i1 i1 i1"'
              + '"i1 i1 i1 i1 i1 i1 i1 i1 i1"'
              + '"i1 i1 i1 i1 i1 i1 i1 i1 i1"'
              + '"i1 i1 i1 i1 i1 i1 i1 i1 i1"'
              + '"i1 i1 i1 i1 i1 i1 i1 i1 i1"',
          images: [
            {
              id: "i1",
              source: null,
              style: '{"gridArea":"i1", "margin":"36px"}',
            },
          ],
          texts: [],
        },
      ],
    },
    {
      id: "tpbody5",
      type: "body",
      pages: [
        {
          rows: 4,
          columns: 5,
          area: '".  .  i0 i0 i0 i0 i0 .  . "'
              + '".  .  i0 i0 i0 i0 i0 .  . "'
              + '".  .  i0 i0 i0 i0 i0 .  . "'
              + '".  .  i0 i0 i0 i0 i0 .  . "'
              + '".  .  i0 i0 i0 i0 i0 .  t0"'
              + '".  .  i0 i0 i0 i0 i0 .  t0"'
              + '".  .  i0 i0 i0 i0 i0 .  t0"',
          images: [
            {
              id: "i0",
              source: null,
              style: '{"gridArea":"i0", "margin":"36px 18px"}',
            },
          ],
          texts: [
            {
              id: "t0",
              value: '',
              style: '{"gridArea":"t0", "margin":"0 36px 36px 0"}',
            },
          ],
        },
        {
          rows: 4,
          columns: 5,
          area: '".  .  .  .  .  .  .  .  . "'
              + '".  i1 i1 i1 .  i2 i2 i2 . "'
              + '".  i1 i1 i1 .  i2 i2 i2 . "'
              + '".  i1 i1 i1 .  i2 i2 i2 . "'
              + '".  i1 i1 i1 .  i2 i2 i2 . "'
              + '".  i1 i1 i1 .  i2 i2 i2 . "'
              + '".  .  t1 .  .  .  t2 .  . "',
          images: [
            {
              id: "i1",
              source: null,
              style: '{"gridArea":"i1", "margin":"0 -41.769px"}',
            },
            {
              id: "i2",
              source: null,
              style: '{"gridArea":"i2", "margin":"0 -41.769px"}',
            },
          ],
          texts: [
            {
              id: "t1",
              value: '',
              style: '{"gridArea":"t1", "margin":"0 0 36px 0", "textAlign":"center"}',
            },
            {
              id: "t2",
              value: '',
              style: '{"gridArea":"t2", "margin":"0 0 36px 0", "textAlign":"center"}',
            },
          ],
        },
      ],
    },
    {
      id: "tpfront1",
      type: "front",
      pages: [
        {
          rows: 4,
          columns: 5,
          area: '"i0 i0 i0 i0 i0 i0 i0 .  . "'
              + '"i0 i0 i0 i0 i0 i0 i0 .  . "'
              + '"i0 i0 i0 i0 i0 i0 i0 .  . "'
              + '"i0 i0 i0 i0 i0 i0 i0 .  . "'
              + '"i0 i0 i0 i0 i0 i0 i0 .  . "'
              + '"i0 i0 i0 i0 i0 i0 i0 .  t0"'
              + '"i0 i0 i0 i0 i0 i0 i0 .  t0"',
          images: [
            {
              id: "i0",
              source: null,
              style: '{"gridArea":"i0", "margin":"-9px 0 -9px -9px"}',
            },
          ],
          texts: [
            {
              id: "t0",
              value: '',
              style: '{"gridArea":"t0", "margin":"0 0 36px 0", "border-top":"solid 2px #000000", "border-bottom":"solid 2px #000000"}',
            },
          ],
        },
      ],
    },
    {
      id: "tpback1",
      type: "back",
      pages: [
        {
          rows: 4,
          columns: 5,
          area: '".  .  .  .  .  .  .  .  . "'
              + '".  .  .  .  .  .  .  .  . "'
              + '".  .  .  .  .  .  .  .  . "'
              + '".  .  t0 t0 t0 t0 t0 .  . "'
              + '".  .  .  .  .  .  .  .  . "'
              + '".  .  t1 t1 t1 t1 t1 .  . "'
              + '".  .  t1 t1 t1 t1 t1 .  . "',
          images: [],
          texts: [
            {
              id: "t0",
              value: '',
              style: '{"gridArea":"t0", "margin":"-13px 0 0 0"}',
            },
            {
              id: "t1",
              value: '',
              style: '{"gridArea":"t1", "margin":"0 0 36px 0"}',
            },
          ],
        },
      ],
    },
  ];
  dispatch({
    type: FETCH_TEMPLATES,
    payload: templates,
  })
}

