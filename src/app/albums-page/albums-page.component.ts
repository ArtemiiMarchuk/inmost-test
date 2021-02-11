import {Component, OnInit} from '@angular/core';
import {AlbumsService} from '../shared/services/albums.service';
import {AlbumInterface} from '../shared/interfaces';
import {ActivatedRoute, Params} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})
export class AlbumsPageComponent implements OnInit {
  albums$: Observable<AlbumInterface[]>;

  searchStr: string;

  constructor(
    private albumsService: AlbumsService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.albums$ = this.activatedRoute.params
      .pipe(switchMap((params: Params) => {
        return this.albumsService.getAlbumsByGenre(params.genre);
      }));
  }

  getLikeAmount(albums: AlbumInterface[]): number {
    return albums.filter(album => album.liked).length;
  }
}
