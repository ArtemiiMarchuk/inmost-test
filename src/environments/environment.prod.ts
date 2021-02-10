import {Environment} from './interface';

export const environment: Environment = {
  production: true,
  token: '22e5dcb7293a23da484afeacce80c247',
  ApiUrls: {
    getAlbums: 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums'
  }
};
