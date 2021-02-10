import { Pipe, PipeTransform } from '@angular/core';
import {AlbumInterface} from '../interfaces';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(albums: AlbumInterface[], search = ''): AlbumInterface[] {
    search = search.trim().toLowerCase();

    if (!search) {
      return albums;
    }

    return albums.filter(album => {
      return album.name.toLowerCase().includes(search);
    });
  }
}
