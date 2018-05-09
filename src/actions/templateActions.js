import { FETCH_TEMPLATES } from './types';

export const fetchTemplate = () => dispatch => {
  const templates = [
    {
      id: "tp1",
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
            },
          ],
          texts: [
            {
              id: "t0",
              value: '',
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
            },
          ],
          texts: [
            {
              id: "t1",
              value: '',
            },
          ],
        },
      ],
    },
    {
      id: "tp2",
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
            },
          ],
          texts: [
            {
              id: "t0",
              value: '',
            },
            {
              id: "t1",
              value: '',
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
            },
          ],
          texts: [],
        },
      ],
    },
    {
      id: "tp3",
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
              + '".  .  t1 .  i1 i1 i1 i1 i1"'
              + '".  .  t1 .  i1 i1 i1 i1 i1"'
              + '".  .  t1 .  i1 i1 i1 i1 i1"',
          images: [
            {
              id: "i1",
              source: null,
            },
          ],
          texts: [
            {
              id: "t0",
              value: '',
            },
            {
              id: "t1",
              value: '',
            },
          ],
        },
      ],
    },
    {
      id: "tp4",
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
            },
          ],
          texts: [],
        },
      ],
    },
    {
      id: "tp5",
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
            },
          ],
          texts: [
            {
              id: "t0",
              value: '',
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
            },
            {
              id: "i2",
              source: null,
            },
          ],
          texts: [
            {
              id: "t1",
              value: '',
            },
            {
              id: "t2",
              value: '',
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

