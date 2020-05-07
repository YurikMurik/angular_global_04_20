import { CourseItemInfo } from '../models';

export const fakeVideoList: CourseItemInfo[] = [
    {
      id: 1,
      title: 'Video about Denmark',
      createdAtDate: new Date(2019, 1, 1),
      durationTime: 120,
      topRated: true,
      description:
       `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Fuga at magni dignissimos accusamus asperiores enim corrupti nobis dolorem ducimus
        nostrum dolor, consequuntur, quia laudantium tempore? Neque doloremque eos rerum nulla.
        Fuga at magni dignissimos accusamus asperiores enim corrupti nobis dolorem ducimus
        nostrum dolor, consequuntur, quia laudantium tempore? Neque doloremque eos rerum nulla.
      `
    } ,
    {
      id: 2,
      title: 'Video about Canada',
      createdAtDate: new Date,
      durationTime: 180,
      topRated: true,
      description:
      `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Fuga at magni dignissimos accusamus asperiores enim corrupti nobis dolorem ducimus
        nostrum dolor, consequuntur, quia laudantium tempore? Neque doloremque eos rerum nulla.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Fuga at magni dignissimos accusamus asperiores enim corrupti nobis dolorem ducimus
      `
    },
    {
      id: 3,
      title: 'Video about Brazil',
      createdAtDate: new Date(2021, 12, 14),
      durationTime: 180,
      topRated: false,
      description:
      `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Fuga at magni dignissimos accusamus asperiores enim corrupti nobis dolorem ducimus
        nostrum dolor, consequuntur, quia laudantium tempore? Neque doloremque eos rerum nulla.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Fuga at magni dignissimos accusamus asperiores enim corrupti nobis dolorem ducimus
      `
    },
    {
      id: 4,
      title: 'Video about Australia',
      createdAtDate: new Date(2020, 10, 20),
      durationTime: 132,
      topRated: false,
      description:
      `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Fuga at magni dignissimos accusamus asperiores enim corrupti nobis dolorem ducimus
        nostrum dolor, consequuntur, quia laudantium tempore? Neque doloremque eos rerum nulla.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Fuga at magni dignissimos accusamus asperiores enim corrupti nobis dolorem ducimus
      `
    },
    {
      id: 5,
      title: 'Video about Russia',
      createdAtDate: new Date(2014, 1, 1),
      durationTime: 120,
      topRated: true,
      description:
      `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Fuga at magni dignissimos accusamus asperiores enim corrupti nobis dolorem ducimus
        nostrum dolor, consequuntur, quia laudantium tempore? Neque doloremque eos rerum nulla.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Fuga at magni dignissimos accusamus asperiores enim corrupti nobis dolorem ducimus
      `
    }
];
