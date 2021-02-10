import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {AlbumInterface} from '../interfaces';

interface AlbumsResponseInterface {
  albums: {
    album: {
      name: string;
      artist: {
        name: string;
      };
      image: {
        size: string
        '#text': string
      }[]
      mbid: string
    }[]
  };
}

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) {
  }

  getAlbumsByGenre(genre: string): Observable<AlbumInterface[]> {
    return this.http.get<AlbumsResponseInterface>(environment.ApiUrls.getAlbums, {
      params: {
        format: 'json',
        tag: genre
      }
    }).pipe(
      map(response => {
        return response.albums.album.map(item => {
          return {
            img: item.image.find(image => image.size === 'large')['#text'],
            name: item.name,
            artistName: item.artist.name,
            id: item.mbid,
            liked: this.isAlbumLiked(item.mbid)
          };
        });
      })
    );
  }

  isAlbumLiked(id: string): boolean {
    const likes = this.getLikedAlbums();
    return !!likes.find(like => like === id);
  }

  addAlbumToLikes(id: string): void {
    const likes = this.getLikedAlbums();
    likes.push(id);
    this.setLikedAlbums(likes);
  }

  removeAlbumFromLikes(id: string): void {
    const likes = this.getLikedAlbums();
    this.setLikedAlbums(likes.filter(like => like !== id));
  }

  getLikedAlbums(): string[] {
    return JSON.parse(localStorage.getItem('likes')) ?? [];
  }

  setLikedAlbums(likes: string[]): void {
    localStorage.setItem('likes', JSON.stringify(likes));
  }
}
