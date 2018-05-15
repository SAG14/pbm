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
              style: '{"gridArea":"i0", "margin":"calc(36 / 372 *100%) 0 calc(36 / 372 *100%) calc(36 / 372 * 100%)"}',
            },
          ],
          texts: [
            {
              id: "t0",
              value: '',
              style: '{"gridArea":"t0", "margin":"0 0 calc(36 / 116 * 100%) 0", "textAlign":"left"}',
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
              style: '{"gridArea":"i1", "margin":"calc(36 / 500 * 100%) calc(36 / 500 * 100%) 0 0"}',
            },
          ],
          texts: [
            {
              id: "t1",
              value: '',
              style: '{"gridArea":"t1", "margin":"0 calc(36 / 244 * 100%) calc(36 / 244 * 100%) 0", "textAlign":"right"}',
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
              style: '{"gridArea":"i0", "margin":"0"}',
            },
          ],
          texts: [
            {
              id: "t0",
              value: '',
              style: '{"gridArea":"t0", "margin":"0 0 calc(36 / 116 * 100%) 0", "textAlign":"left"}',
            },
            {
              id: "t1",
              value: '',
              style: '{"gridArea":"t1", "margin":"0 calc(36 / 116 * 100%) calc(36 / 116 * 100%) 0", "textAlign":"right"}',
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
              style: '{"gridArea":"i1", "margin":"calc(36 / 627.9 * 100%)"}',
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
              style: '{"gridArea":"i0", "margin":"0"}',
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
              style: '{"gridArea":"i1", "margin":"calc(36 / 371.95 * 100%) 0"}',
            },
          ],
          texts: [
            {
              id: "t0",
              value: '',
              style: '{"gridArea":"t0", "margin":"calc(36 / 116 * 100%) 0 0 calc(36 / 116 * 100%)", "textAlign":"left"}',
            },
            {
              id: "t1",
              value: '',
              style: '{"gridArea":"t1", "margin":"0 0 calc(36 / 116 * 100%) 0", "textAlign":"right"}',
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
              style: '{"gridArea":"i0", "margin":"calc(36 / 627.9 * 100%)"}',
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
              style: '{"gridArea":"i1", "margin":"calc(36 / 627.9 * 100%)"}',
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
              style: '{"gridArea":"i0", "margin":"calc(36 / 371.95 * 100%) calc(18 / 371.95 * 100%)"}',
            },
          ],
          texts: [
            {
              id: "t0",
              value: '',
              style: '{"gridArea":"t0", "margin":"0 calc(36 / 116 * 100%) calc(36 / 116 * 100%) 0", "textAlign":"left"}',
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
              style: '{"gridArea":"i1", "margin":"0 calc(-41.769 / 139.92 * 100%)"}',
            },
            {
              id: "i2",
              source: null,
              style: '{"gridArea":"i2", "margin":"0 calc(-41.769 / 139.92 * 100%)"}',
            },
          ],
          texts: [
            {
              id: "t1",
              value: '',
              style: '{"gridArea":"t1", "textAlign":"center", "margin":"calc(18 / 116 * 100%) 0 calc(36 / 116 * 100%) 0", "textAlign":"center"}',
            },
            {
              id: "t2",
              value: '',
              style: '{"gridArea":"t2", "textAlign":"center", "margin":"calc(18 / 116 * 100%) 0 calc(36 / 116 * 100%) 0", "textAlign":"center"}',
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
              style: '{"gridArea":"i0", "margin":"0"}',
            },
          ],
          texts: [
            {
              id: "t0",
              value: '',
              style: '{"gridArea":"t0", "borderTop":"solid 0.11vw #000000", "borderBottom":"solid 0.11vw #000000", "margin":"0 0 calc(36 / 116 * 100%) 0", "textAlign":"left", "lineHeight":"1.008vw", "fontSize":"0.84vw", "fontWeight":"600"}',
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
              style: '{"gridArea":"t0", "margin":"-13px 0 0 0", "margin":"calc(-13 / 371.95 * 100%) 0 0 0", "textAlign":"center", "fontSize":"0.84vw", "fontWeight":"500", "lineHeight":"1.008vw"}',
            },
            {
              id: "t1",
              value: '',
              style: '{"gridArea":"t1", "margin":"0 0 36px 0", "margin":"0 0 calc(36 / 371.95 * 100%) 0", "textAlign":"center", "lineHeight":"0.672vw"}',
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

