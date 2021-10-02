const domain = ['https://placekitten.com', 'https://picsum.photos'];

export const fakeAvatar = (size = 128) => `${domain[Math.round(Math.random())]}/${size}`;
