import { FETCH_TEMPLATES } from './types';

export const fetchTemplate = () => dispatch => {
  const templates = [
    {
      id: "tp1",
      rows: 4,
      columns: 5,
      areas: [
        '"i0 i0 i0 .  . "'
      + '"i0 i0 i0 .  . "'
      + '"i0 i0 i0 t0 . "'
      + '"i0 i0 i0 t0 . "',
        '".  i1 i1 i1 i1"'
      + '".  i1 i1 i1 i1"'
      + '".  i1 i1 i1 i1"'
      + '".  .  .  t1 t1"',
      ],
      images: [
        {
          id: "i0",
          source: null,
        },
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
    {
      id: "tp2",
      rows: 4,
      columns: 5,
      areas: [
        '"i0 i0 .  .  . "'
      + '"i0 i0 .  .  . "'
      + '"i0 i0 t0 .  t1"'
      + '"i0 i0 t0 .  t1"',
        '"i1 i1 i1 i1 i1"'
      + '"i1 i1 i1 i1 i1"'
      + '"i1 i1 i1 i1 i1"'
      + '"i1 i1 i1 i1 i1"',
      ],
      images: [
        {
          id: "i0",
          source: null,
        },
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
    {
      id: "tp3",
      rows: 4,
      columns: 5,
      areas: [
        '"i0 i0 i0 i0 i0"'
      + '"i0 i0 i0 i0 i0"'
      + '"i0 i0 i0 i0 i0"'
      + '"i0 i0 i0 i0 i0"',
        '"t0 .  i1 i1 i1"'
      + '"t0 .  i1 i1 i1"'
      + '".  t1 i1 i1 i1"'
      + '".  t1 i1 i1 i1"',
      ],
      images: [
        {
          id: "i0",
          source: null,
        },
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
    {
      id: "tp4",
      rows: 4,
      columns: 5,
      areas: [
        '"i0 i0 i0 i0 i0"'
      + '"i0 i0 i0 i0 i0"'
      + '"i0 i0 i0 i0 i0"'
      + '"i0 i0 i0 i0 i0"',
        '"i1 i1 i1 i1 i1"'
      + '"i1 i1 i1 i1 i1"'
      + '"i1 i1 i1 i1 i1"'
      + '"i1 i1 i1 i1 i1"',
      ],
      images: [
        {
          id: "i0",
          source: null,
        },
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
    {
      id: "tp5",
      rows: 4,
      columns: 5,
      areas: [
        '".  i0 i0 i0 . "'
      + '".  i0 i0 i0 . "'
      + '".  i0 i0 i0 t0"'
      + '".  i0 i0 i0 t0"',
        '".  .  .  .  . "'
      + '".  i1 .  i2 . "'
      + '".  i1 .  i2 . "'
      + '".  t1 .  t2 . "',
      ],
      images: [
        {
          id: "i0",
          source: null,
        },
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
          id: "t0",
          value: '',
        },
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
  ];
  dispatch({
    type: FETCH_TEMPLATES,
    payload: templates,
  })
}

