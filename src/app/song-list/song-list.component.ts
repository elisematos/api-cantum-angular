import { Component, OnInit } from '@angular/core';
import {PaillardeService} from '../paillarde.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  private paillardes : Array<any>;
  constructor(paillardeService: PaillardeService) { }

  ngOnInit(): void {
    this.paillardes = this.paillardeService.subscribe();
  }


}
