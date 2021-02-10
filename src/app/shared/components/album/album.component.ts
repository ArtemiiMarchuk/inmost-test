import {Component, Input, OnInit} from '@angular/core';
import {AlbumInterface} from '../../interfaces';
import {AlertService} from '../../services/alert.service';
import {AlbumsService} from '../../services/albums.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  @Input() album: AlbumInterface;

  constructor(
    private alertService: AlertService,
    private albumService: AlbumsService
  ) {
  }

  ngOnInit(): void {
  }

  likeClickHandler(id: string): void {
    this.album.liked = !this.album.liked;

    if (this.album.liked) {
      this.alertService.like(this.album.name);
      this.albumService.addAlbumToLikes(id);
    } else {
      this.alertService.dislike(this.album.name);
      this.albumService.removeAlbumFromLikes(id);
    }
  }
}
